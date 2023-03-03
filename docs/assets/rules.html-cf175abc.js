import{_ as s,M as c,p as d,q as i,R as e,t as n,N as t,a1 as o}from"./framework-7f102627.js";const p={},l=o('<h1 id="开发基本规约" tabindex="-1"><a class="header-anchor" href="#开发基本规约" aria-hidden="true">#</a> 开发基本规约</h1><h2 id="保守设计与激进设计" tabindex="-1"><a class="header-anchor" href="#保守设计与激进设计" aria-hidden="true">#</a> 保守设计与激进设计</h2><p>Java自身是一个很保守的语言，其大生态也非常保守。其设计原则是“提供一套安全的API，Java使用者怎么使用这些API，都不会导致Java内部出错”（除了Unsafe类），因此提供各种访问控制机制、内部内存拷贝与反复加锁。而Turms服务端代码的编写原则一般是“程序怎么跑的快，怎么写。只要Caller敢乱传或乱用数据，我们就直接报错或直接无视”。举例而言，Turms的<code>StringUtil</code>通过<code>jdk.internal.misc.Unsafe#getReference</code>获取<code>String</code>对象内部的<code>byte[]</code>对象，以避免内存拷贝，Caller需要自行保证不“胡作非为”。而Java自身提供的<code>String#getBytes()</code>为了保证使用者无法修改到内部的<code>byte[]</code>，因此是将该<code>byte[]</code>对象拷贝一份，再传给Caller。</p><p>因此在字符串实践中，对于一个常规基于Spring搭建的Web应用，一个HTTP请求从TCP字节流切割出来之后，可能需要反反复复在<code>String</code>、<code>StringBuilder</code>、<code>byte[]</code>、<code>HeapByteBuffer</code>、<code>DirectByteBuffer</code>等数据之间进行切换与拼接，最终一个业务层面上的String类型对象，被第三方库与Java内部拷贝5~30次是很常见的。</p><p>再以具体应用为例，如果我们使用Spring创建了一个Controller Bean，并在其中定义了一个返回值类型为<code>String</code>的API函数，以通过这个API返回Prometheus格式的度量数据。如果我们在这前提下做“最优雅”的写法，我们至少需要对这个内存对象做4次内存拷贝（不含系统内核刷数据到网卡部分；Turms通过优化，只需要做一次内存拷贝：即堆内存到堆外内存；这个度量数据实际大小约8K）：</p><ol><li>将Java的基本数据写入<code>StringBuilder</code>，此时堆内存-&gt;堆内存拷贝</li><li>StringBuilder#toString()，又一次堆内存拷贝</li><li>String#getBytes()，至少又一次堆内存拷贝</li><li>将byte[]写到堆外内存DirectByteBuffer，以交给系统内核做写入数据操作</li></ol><p>内存有效使用率极低，且注意上面只是一个最简单的API String响应返回的功能，实际应用中涉及到的流程更为复杂，因此一个流程下来，一个字符串被拷贝5~30次是非常常见的事情。因此我们经常能见到当一个HTTP服务端基于其语言主流生态构建时，一个常规Java Web应用所使用到的内存，可能是其等量C++ HTTP服务端的数十倍甚至百倍。</p><p>除了各种网络API，日志实现也需要频繁跟<code>String</code>打交道。而Turms在内存实践上就比通用实现高效太多了，Turms直接通过<code>PooledByteBufAllocator.DEFAULT</code>分配缓存了的堆外内存，并直接将Java的基本数据写入堆外内存块中。并且在整个过程中，我们避免使用Java自身的低效实现，从而避免无意义的堆到堆内存拷贝。</p><p>综上，尽管Java自身比较保守，Turms则相对强调激进，并以性能优先，而非“代码优雅”，必要时善用Unsafe类。当然，我们“激进”也是有限度的，诸如：1. 绝不替换Java内部类实现；2. 尽量不编写JNI与C语言代码</p><p>补充：</p><ol><li>对于Java语法糖级别的实践，我们的态度是“比较无所谓”，如<code>for (X x : Collection&lt;X&gt;)</code> （需要创建迭代器对象，多消耗至少几十B）与更高效的<code>for (int i = 0; i &lt; length; i++)</code>，两者写法都允许</li><li>除了保守的倾向，Java圈子还有一个很吊诡的现象，即“优化时选择性忽视”，比如一方面放任<code>String</code>与<code>StringBuilder</code>的内存拷贝，一个API处理流程下来，需要把数个<code>String</code>拷贝数十次。另一方面，就精打细算地研究JVM内存优化。Turms面对各种优化项，主要就是根据“性价比”，优先优化性价比高的部分，以避免缘木求鱼。</li></ol><h2 id="服务端开发的基本规约" tabindex="-1"><a class="header-anchor" href="#服务端开发的基本规约" aria-hidden="true">#</a> 服务端开发的基本规约</h2><h3 id="代码编写策略的优先级" tabindex="-1"><a class="header-anchor" href="#代码编写策略的优先级" aria-hidden="true">#</a> 代码编写策略的优先级</h3><p>一般规则：性能（低时间复杂度与空间复杂度） &gt; 代码可读性 &gt; 设计模式</p><ul><li>性能 &gt; 代码可读性。如使用<code>long</code>，而不是<code>java.util.Date</code>或<code>java.time.Instant</code>来表示时间，以避免创建新对象以及时间转换时的计算；又比如<code>im.turms.server.common.infra.cluster.service.idgen.SnowflakeIdGenerator</code>类下的<code>nextIncreasingId</code>函数与<code>nextLargeGapId</code>函数重复了约10行代码，但我们不提取这公共代码出来，以避免开辟新方法栈（不考虑JVM的滞后Inline操作）。</li><li>性能 &gt; 设计模式。如场景： <ul><li>遍历处理<code>String</code>中的<code>char[]</code>元素。如果使用责任链模式，则需要用不同的Handler类实现不同类别的处理逻辑，虽然这样可以把逻辑理得很清晰，但是每个Handler都需要遍历一遍<code>char[]</code>，因此处理的时间复杂度为<code>O(n*m)</code>（n为char[]长度，m为Handler个数），这种复杂度的代码在Turms服务端代码中是禁止的。此时，就需要反设计模式来编写代码，尽可能把处理逻辑都写在一次遍历中，且尽量不要新开函数区分逻辑（这条可选），而是用注释分块来区分不同的处理逻辑，以避免函数栈开销。</li><li>Protobuf模型的高效设计一直受人称道，但官方Java版本的Protobuf的代码实现是偏保守且低效的。比如Protobuf模型是Immutable的，只有其Builder是Mutable的，因此想要修改Protobuf模型，还得先<code>toBuilder()</code>成一个Builder，再重新创建一个新Protobuf模型实例，内存有效使用率低下（额外补充：其字符串解码实现也是非常地低效，比如其为了兼容低版本Java，采用了<code>char[]</code>进行编码，但新版本Java的String内部只存储<code>byte[]</code>，因此需要一次额外的类型转换）。而我们可控的代码是能不用Builder就不用Builder，避免无意义的内存消耗。</li></ul></li></ul><p>例外：如在极少数情况下，代码可读性优先于性能。以下文中提到的<code>禁止在客户端请求与管理员API请求的处理过程中使用反射</code>为例。尽管有这个规则，但如果请求中需要创建供数据库驱动使用的Entity对象时，那我们还是会通过反射创建并填充这个对象。因为如果不使用反射，就需要手写上百个字段序列化与反序列化逻辑，工作量巨大，且容易出错。而使用反射的收益性就很高，所以允许使用反射。</p><p>上述的示例还有很多，具体可以看Turms服务端代码。添加新代码时，只需要保证：新加的代码几乎没有任何时间或空间上的优化余地。如果还有优化空间，但收益很低且实现复杂，则允许后期再进行优化。</p><h4 id="线程与锁" tabindex="-1"><a class="header-anchor" href="#线程与锁" aria-hidden="true">#</a> 线程与锁</h4><ul><li><p>禁止使用弹性线程池，如需创建新线程，则需要进行专门的代码审查</p></li><li><p>在客户端请求与管理员API请求的处理过程中，尽量不使用synchronized与Lock操作（包括可重入锁）。如果确实需要临界区，则优先考虑重构代码流程或用CAS技术替代。</p></li></ul><h4 id="内存与gc" tabindex="-1"><a class="header-anchor" href="#内存与gc" aria-hidden="true">#</a> 内存与GC</h4>',20),r=o("<li><p>禁止对ByteBuf进行拷贝操作</p></li><li><p>对于网络I/O操作，禁止使用非池化或堆内存，只允许使用池化的直接内存</p></li><li><p>尽量不要创建新对象，尽量使用对象池。如设计中常见的：为了将不同层的数据模型进行逻辑分离，专门拆成了DTO与BO模型。Turms对于这种场景，会尽量使用一个数据模型，并通过自定义Jackson的序列化逻辑来实现符合DTO模型的响应</p><p>另外：该规则会在Valhalla项目发布之后，发生改变，尤其是我们将移除大部分现有的对象池</p></li><li><p>尽量不要创建带多个unused字段的对象。如Turms用自定义的<code>QueryOptions</code>模型重构了MongoDB的<code>FindOptions</code>模型，其中一个原因就是<code>FindOptions</code>模型会被频繁使用，但其带有数十个无用字段</p></li><li><p>在客户端请求与管理员API请求的处理过程中，禁止使用Stream</p></li>",5),u=e("p",null,[n("关于“为什么一些看似可以用primitive参数的函数，依旧使用包装类”的问题。依旧使用包装类是因为：一个函数中的部分参数虽然可能看似可以使用primitives，但实际上这些primitives最终大概率会传给Java的集合类实现（如"),e("code",null,"Map<Long, Object>"),n("）、只接受对象的函数（如"),e("code",null,"Object"),n("类型、"),e("code",null,"Long"),n("类型、泛型等）或作为类的Object字段等。因此，如果一个函数只是自顾自地使用primitive，那整条逻辑处理下来，这个primitive很可能在包装类与primitive之间反复转换多次。综上，Turms服务端在大部分情况下，统一使用包装类，以避免这样多次的转换。只有能保证primitive不会转成包装类，我们才统一使用primitive。")],-1),h={href:"https://turms-im.github.io/docs/for-developers/system-resource-management.html#%E5%85%B3%E4%BA%8Evalhalla%E9%A1%B9%E7%9B%AE",target:"_blank",rel:"noopener noreferrer"},k=e("code",null,"List<int>",-1),m=o('<h4 id="代理与反射" tabindex="-1"><a class="header-anchor" href="#代理与反射" aria-hidden="true">#</a> 代理与反射</h4><ul><li><p>禁止使用动态代理技术（如Java动态代理、CGLib、Spring AOP等），尽量不使用代理或使用静态编译技术代替（如Lombok）。</p><p>唯一的例外情况：Turms服务端的插件机制中，使用Java的动态代理去代理JavaScript编写的插件。</p></li><li><p>在客户端请求与管理员API请求的处理过程中，除非不使用反射就需要写大量繁杂代码，其他场景下禁止使用反射技术。如：Turms在对MongoDB的Entity模型的数百个字段进行序列化与反序列化时，使用了反射。</p></li></ul><p>另外，如果有第三方依赖违背了以上原则，则根据性价比，排期对第三方依赖进行重构。</p><h3 id="文本格式" tabindex="-1"><a class="header-anchor" href="#文本格式" aria-hidden="true">#</a> 文本格式</h3><h4 id="tostring-文本格式" tabindex="-1"><a class="header-anchor" href="#tostring-文本格式" aria-hidden="true">#</a> toString()文本格式</h4><p>Java项目<code>toString()</code>实现的文本格式五花八门，甚至Java自身的内部代码都有很多风格不一致的文本格式。就括号的风格来说，既有Java record默认的<code>[key=value]</code>格式，也有Lombok生成的<code>(key=value)</code>格式，还有Google AutoValue生成的<code>{key=value}</code>格式。</p><p>为了实现文本格式统一，Turms服务端项目统一采用如下格式：</p><ul><li><p>对于文本的前缀与后缀，分别使用<code>{</code>与<code>}</code>，而不是<code>[]</code>或<code>()</code>。因为在Turms的文本格式设计中，<code>[]</code>指代数组，<code>()</code>指代需要特别标记，以让重要信息更为醒目。具体规则见下文的<code>服务端运行日志与异常文本格式</code>。</p></li><li><p>在键与值之间使用主流的<code>=</code>，而不是<code>: </code>。</p></li><li><p>对于字符串值，需要使用<code>&quot;&quot;</code>对值进行包裹；对于其它非数组值，均采用值的<code>toString()</code>形式；对于数组值，则使用<code>[]</code>来包括数组中的值。</p><p>比如：<code>ClassName{key1=value, key2=[value1, value2]}</code></p></li></ul><p><strong>注意：Turms服务端目前暂未统一<code>toString()</code>的文本格式，但上文所述内容是之后的改进方向。</strong></p><h4 id="服务端运行日志与异常文本格式" tabindex="-1"><a class="header-anchor" href="#服务端运行日志与异常文本格式" aria-hidden="true">#</a> 服务端运行日志与异常文本格式</h4><p>因为日志与异常的文本格式设计存在非常多的细节，而很多常见实践的原则又是互相冲突的，并且Java领域也没有一个统一的最佳实践，所以几乎所有的大中开源项目（包括Java自身的源码）都做不到文本格式统一，而是各种文本格式混合使用，具体用啥格式主要就靠工程师当下的“感觉”。</p><p>因此本节专门讲解Turms服务端采用哪些文本格式，与为什么不采用另外一些常见的文本格式，以减少读者在实践中困惑。</p><h5 id="统一格式的重要性" tabindex="-1"><a class="header-anchor" href="#统一格式的重要性" aria-hidden="true">#</a> 统一格式的重要性</h5><p>对于一些文本格式规则，可能读者在阅读单条日志，感觉不出规则之间有什么差别。但当读者需要翻阅数十条，甚至数百条、数千条各种不同的日志时，就能明白使用规范统一的文本格式有多么地节省阅读精力了。</p><h5 id="具体规则" tabindex="-1"><a class="header-anchor" href="#具体规则" aria-hidden="true">#</a> 具体规则</h5><p>简单来说：</p><ul><li>文本中的重要信息尽量放句未。重要信息通常是变量。</li><li>当重要信息在句末时，需要使用<code>: </code>来分割重要信息与其他文本。如：使用<code>Could not find the class: my.company.Main</code>，而不使用<code>The class (my.company.Main) could not be found</code>。</li><li>句子不需要省略冠词<code>a</code>、<code>an</code>与<code>the</code>。特别强调这点是因为大部分知名大中开源项目偏向于省略冠词。</li><li>对于名词短语，通常使用限制性同位语，而非定语名词。比如，限制性同位语：<code>The collection &quot;messasge&quot;</code>或<code>The setting &quot;turms.whatever.min&quot;</code>；定语名词：<code>The &quot;messasge&quot; collection</code>与<code>The &quot;turms.whatever.min&quot; setting</code>。</li><li>特殊符号的作用与使用：</li></ul><table><thead><tr><th>作用</th><th>使用的符号</th><th>在句中时</th><th>与<code>: </code>搭配时</th><th>与数组搭配时</th><th>常见例子</th></tr></thead><tbody><tr><td>表示数组值</td><td><code>[,]</code></td><td>使用<code>[value]</code>格式。<br>如<code>Detected illegal operations [CREATE, DELETE] on the collection &quot;message&quot;</code></td><td>使用<code>: [value]</code>格式。<br>如<code>Detected illegal operations: [CREATE, DELETE]</code></td><td></td><td></td></tr><tr><td>表示区间</td><td><code>[..]</code>闭区间，<code>(..)</code>开区间</td><td>如：<code>[1..2]</code>、``</td><td></td><td></td><td></td></tr><tr><td>包裹需要特别分离以达到醒目效果的信息</td><td><code>()</code></td><td>使用<code>(value)</code>格式。<br>如<code>The path (/turms/1.txt/) is illegal</code></td><td>无需使用<code>()</code>，使用<code>: value</code>格式即可。<br>如<code>Could not find any resource from the path: /turms/1.txt</code></td><td>无需使用<code>()</code>，使用<code>[value]</code>格式即可。<br>如<code>The paths [/1.txt, /2.txt] are illegal</code></td><td>对象、枚举值、路径、域名、字段引用</td></tr><tr><td>包裹键值对</td><td><code>{}</code></td><td>使用<code>{key=value}</code>格式。<br>如</td><td>使用<code>: {key=value}</code>格式</td><td>使用<code>[{key=value}, {key=value}]</code>格式</td><td></td></tr><tr><td>包裹名称或字符串值</td><td><code>&quot;&quot;</code></td><td>使用<code>&quot;value&quot;</code>格式。<br>如<code>The property &quot;turms.whatever.min&quot; must be greater than 0</code>；<code>The setting name &quot;abc123&quot; should not contain any digit</code></td><td>使用<code>: &quot;value&quot;</code>格式。<br>如<code>Unknown property: &quot;turms.whatever.min&quot;</code></td><td>使用<code>[&quot;value&quot;, &quot;value&quot;]</code>格式。<br>如<code>The properties [&quot;turms.whatever.min&quot;, &quot;turms.whatever.max&quot;] are unknown</code></td><td>字段名、参数名、数据库集合名</td></tr></tbody></table><ul><li><p>名称与引用的区别</p><p>先举一个相对容易理解的例子，以字段的名称与引用为例，假设有一个类<code>com.abc.Song</code>（歌曲）中有一个字段<code>name</code>，则该字段的名称是<code>name</code>，而名称在句中被使用时需要加上双引号<code>&quot;&quot;</code>，如<code>The field &quot;name&quot; contains illegal characteres</code>。而字段的引用是<code>com.abc.Song#name</code>，而引用在句中被使用时需要加上括号<code>()</code>，如<code>The field (com.abc.Song#name) should be accessible</code>。</p><p>但在实际开发过程中，我们会发现很多字符串本身是可以有多种解释的。比如有一个类的名称是<code>com.my.Main</code>，那这个名称既可以被解释为<code>类的名称</code>，也可以解释为<code>类的引用</code>。而考虑到类名称不会出现像上述<code>名称</code>可能带来的严重歧义，且大多数中大知名开源项目的实践也不用<code>&quot;&quot;</code>包裹类名，因此对于类名，Turms在设计时，统一将其作为<code>类的引用</code>，而非<code>类的名称</code>来解释，故此类的引用需要遵循<code>()</code>的使用规则，而非<code>&quot;&quot;</code>的使用规则。</p></li></ul><p>下一小节将讲解为什么Turms要这么设计，以及为什么不使用一些其他常见的设计。</p><p><strong>TODO：稍后更新</strong></p><h2 id="关于依赖库的使用" tabindex="-1"><a class="header-anchor" href="#关于依赖库的使用" aria-hidden="true">#</a> 关于依赖库的使用</h2><p>很多依赖库热衷于对底层实现进行抽象与封装，以实现“内部逻辑透明，使用者不用关心背后的逻辑”。这样的设计对于一些逻辑简单、要求快速上线、且不追求性能的应用来说比较实用。但随着一个项目越往后发展，越深入优化，这个不可控的抽象层，会成为问题排查、性能优化、功能定制的绊脚石。抽象层带来的问题，诸如：</p>',23),v=e("li",null,[e("p",null,"需求迭代与版本更新严重滞后。如果我们的项目使用了一个抽象层的A依赖，A依赖封装了B依赖。如果我们需要往B依赖添加一个新特性或改Bug，通常的流程是：我们向B依赖的社区提Issue，运气好的话，平均2~4天得到回复。如果运气还很好，对方愿意改。假设改动不大，1周后相关PR被merged。可能等2周、1个月、甚至几个月，B依赖终于发布新版本。然后我们还要等A依赖更新B依赖版本，可能又过了2周、1个月、甚至几个月。等真到我们能使用到新特性，可能几个月已经过了。但更多的情况是，B依赖的维护者压根不愿意修改相关代码。")],-1),g=e("p",null,"绝大部分知名依赖库，只关心功能实现，并不关心性能，基本是“功能够用，性能凑合就行”的态度。（Turms通过重构依赖代码，解决了大部分下述问题）诸如：",-1),b=e("li",null,[e("code",null,"mongo-java-driver"),n("在进行API调用时，反反复复创建大量的中间对象。对于默认配置对象，也不做Cache。")],-1),f=e("li",null,"Lettuce在序列化传递给Redis的指令参数时需要反复扩充内存，并且该Cache的内存数据也没Cache。",-1),E=e("code",null,"getBytes",-1),T=e("code",null,"StringBuilder",-1),_=e("code",null,"String",-1),x=e("code",null,"byte[] value",-1),y=e("code",null,"io.netty.buffer.AbstractByteBufAllocator#directBuffer",-1),C={href:"https://turms-im.github.io/docs/for-developers/observability.html#%E8%87%AA%E7%A0%94%E5%AE%9E%E7%8E%B0-%E6%8B%93%E5%B1%95%E7%9F%A5%E8%AF%86",target:"_blank",rel:"noopener noreferrer"},B=o("<li>在Protobuf的官方Java实现中，其字符串解码实现也是非常地低效，比如它为了兼容低版本Java，采用了<code>char[]</code>进行编码，但新版本Java的String内部只存储<code>byte[]</code>，因此需要一次无意义的内存拷贝（注意：字符串本身就是客户端请求中最大的数据）。</li><li>Spring是低效代码的典型代表，如： <ul><li><code>org.springframework.core.codec.CharSequenceEncoder</code>在处理<code>UTF-8</code>编码的字符串时，会以1个字符对应3字节来开辟DirectByteBuffer用于输出。换言之，上述的8K Prometheus数据，光这块Spring就需要用2.4MB，多用1.6MB。当然，Spring还要更低效，因为它<code>String#getBytes(...)</code>的时候还要进行字符串拷贝。</li><li>导出巨大的堆转储文件时，<code>spring-boot-actuator:v2.6.6</code>竟然不支持零拷贝（见<code>org.springframework.boot.actuate.management.HeapDumpWebEndpoint.TemporaryFileSystemResource#isFile</code>）</li><li>Spring的AOP常用于代理Controller层方法调用，可用于捕获解析后参数，进行日志打印（WebFilter无法获得解析后的参数）。但AOP会给一个方法徒增19个stacks并大量使用反射，从AOP代理开始到Controller方法层的调用所需时间甚至比Turms内部业务处理时间还长（额外补充：AOP是个非常糟糕的设计，Spring应该为Controller层采用的责任链设计）。</li></ul></li>",2),S=e("p",null,"综上，很多知名Java依赖库的代码质量并不高，甚至代码性能与质量堪忧，源码读得让人触目惊心。相反，读者可以参考Turms服务端是怎么编码，以把各种细节实现优化到极致的。",-1),q=o("<li><p>关注于抽象实现的依赖库在与响应式编程结合时，在问题排查问题上，会给开发者带来地狱级的体验，尤其是Bug与需要手动释放的内存相关。在常规问题排查上，我们通常可以通过栈信息来很快的排查出问题。但在响应式编程中，这样的方法通常行不通，我们更多的靠逻辑推理来排查问题。即熟读上下游代码（包括依赖包内的代码），推演代码可能经过的所有流程。</p><p>如果代码的抽象层少、且调用关系扁平，这个排查过程其实很简单，可能我们只用在一个类内的几十行代码上扫几眼，就能大概知道出现问题的原因了。但如果流程中，使用到了大量“封装、抽象，用户无需关注底层实现逻辑”依赖库，地狱级体验就来了。原本我们可能只需要一个小数十行的函数就能实现所有相关逻辑。但如果基于抽象库去实现相关功能，我们在问题排查时，可能要查看的代码可能是A抽象类(A1,A2,A3...)类-&gt;B抽象类(B1,B2,B3...)-&gt;C抽象类(C1,C2,C3...)-&gt;...，在数十个类、数十个方法间跳转，并进行推理。</p><p>其中最典型的对照例子就是：Turms的<code>im.turms.gateway.access.client.websocket.WebSocketServerFactory#getHttpRequestHandler</code>在一个小数十行的函数内实现了一组WebSocket握手逻辑。但如果这套逻辑让Spring来实现，它会将各个不同包下的类，各种逻辑东拼西凑地混在一起，在问题排查时，如果还伴随着一些需要手动释放的内存，地狱级的问题排查体验就来了。原本几十行代码能解决的事情，Spring这样的库需要花上千行代码。比如WebFlux内部就有多套Web底层实现，美其名曰“封装、抽象，用户无需关注底层实现逻辑”。</p></li><li><p>部分依赖库在一些地方会自行Suppress异常，上层应用代码无法感知。由于出问题的时候，底层库代码与上层应用代码在大部分情况下，是跑在不同的栈上的。除非底层依赖库支持全局的异常回调，否则上层应用甚至无法感知异常的发生。对于一些Trivial级别的错误，上层应用感知不到也没关系。但如果是一些上层应用非常关注的异常（如RPC的TCP连接的异常断开），这将是引发整个系统异常与失序的导火索了。</p></li><li><p>部分知名依赖库的开发人员甚至缺乏最基本的安全常识。比如<code>Log4j</code>的开发人员竟然添加代码来自动检测预备打印的字符串中是否存在<code>${jndi}</code>模式，如果存在则调用对应的JNDI服务，并默认开启该功能。作为专门编写日志依赖库的开发人员竟然如此缺乏安全常识，且还通过了PR review。</p></li>",3),A=e("p",null,"另一方面，自研能规避掉上述所有问题，在提高代码可控性的同时，也极大地降低了研发难度与问题排查难度，并提升代码性能与资源利用率。",-1),J=e("p",null,"综上，Turms项目在引用一个类库时，通常不引入抽象封装库（如Spring），而仅引入实现库。对依赖库中需要性能优化或逻辑优化的点，会直接在Turms项目内部进行重构。结合考虑到自研的难易程度与代码可控性，我们在大部分情况下会尽可能选择自研。",-1),P={href:"https://github.com/elastic/elasticsearch",target:"_blank",rel:"noopener noreferrer"},R={href:"https://github.com/apache/cassandra",target:"_blank",rel:"noopener noreferrer"},I={href:"https://github.com/apache/ignite",target:"_blank",rel:"noopener noreferrer"},O=o(`<h2 id="异常捕获与打印" tabindex="-1"><a class="header-anchor" href="#异常捕获与打印" aria-hidden="true">#</a> 异常捕获与打印</h2><p>作用：理解Turms服务端的异常捕获与打印原则能够帮助开发者快速定位异常并发现异常的Root Cause。</p><p>在响应式编程中，最为人所诟病的就是该编程范式下的异常通常非常难定位，其堆栈信息基本没用。如果开发者在响应式编程模式下胡乱打印异常日志，很有可能调式者甚至无法根据日志判断这个异常是从哪里抛出来的，更别说反推其执行代码了。</p><p>但其实好的异常日志打印原则与实践都比较简单，并且如果遵循该原则，定位异常通常也就几秒或几分钟的事情。其基本原则就是<strong>最下游代码抛异常，无需打印。中游代码如果要做异常Translate，那就Translate后继续往上抛，无需打印；最上游接异常并打印</strong>。至于什么代码算是“最上游”，调用<code>subscribe()</code>的代码就算“最上游”。该原则实践起来其实也很简单，只是响应式编程里的异常捕获“看起来”比较复杂而已。举例而言，在turms-service服务端中的<code>im.turms.service.access.servicerequest.dispatcher.ServiceRequestDispatcher#dispatch0</code>函数下，有段“根据Service层的处理结果，向相关用户发送通知”的操作，其代码如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">return</span> result
        <span class="token punctuation">.</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token constant">CLIENT_REQUEST_NAME</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">tag</span><span class="token punctuation">(</span><span class="token constant">CLIENT_REQUEST_TAG_TYPE</span><span class="token punctuation">,</span> requestType<span class="token punctuation">.</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">metrics</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">defaultIfEmpty</span><span class="token punctuation">(</span><span class="token class-name">RequestHandlerResultFactory</span><span class="token punctuation">.</span><span class="token constant">NO_CONTENT</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">doOnEach</span><span class="token punctuation">(</span>signal <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>signal<span class="token punctuation">.</span><span class="token function">isOnNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token class-name">RequestHandlerResult</span> requestResult <span class="token operator">=</span> signal<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>requestResult <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> requestResult<span class="token punctuation">.</span><span class="token function">code</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token class-name">ResponseStatusCode</span><span class="token punctuation">.</span><span class="token constant">OK</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token function">notifyRelatedUsersOfAction</span><span class="token punctuation">(</span>requestResult<span class="token punctuation">,</span> userId<span class="token punctuation">,</span> deviceType<span class="token punctuation">)</span>
                    <span class="token punctuation">.</span><span class="token function">contextWrite</span><span class="token punctuation">(</span>signal<span class="token punctuation">.</span><span class="token function">getContextView</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                    <span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> t <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
                        <span class="token keyword">try</span> <span class="token punctuation">(</span><span class="token class-name">TracingCloseableContext</span> ignored <span class="token operator">=</span> context<span class="token punctuation">.</span><span class="token function">asCloseable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                            <span class="token constant">LOGGER</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;Failed to notify related users of the action&quot;</span><span class="token punctuation">,</span> t<span class="token punctuation">)</span><span class="token punctuation">;</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如上文所述，该段代码通过<code>notifyRelatedUsersOfAction</code>函数进行通知下发操作，其内部实现我们并不关心，我们只要在最上游通过<code>subscribe(...)</code>保证能捕获其可能抛出的异常并打印即可。</p><h3 id="有且仅自定义继承自runtimeexception的异常类" tabindex="-1"><a class="header-anchor" href="#有且仅自定义继承自runtimeexception的异常类" aria-hidden="true">#</a> 有且仅自定义继承自<code>RuntimeException</code>的异常类</h3><p>在Turms服务端项目中，有且仅自定义继承自<code>RuntimeException</code>的异常类，禁止自定义继承自<code>Exception</code>（<code>Checked Exception</code>）的异常类。</p><p>关于使用<code>Checked Exception</code>，还是<code>Unchecked Exception</code>的讨论至今都是众说纷纭，但如今不少文章直接批评<code>Checked Exception</code>是Java的设计败笔，像是Kotlin/Scala/C#这些后来的语言甚至压根没有<code>Checked Exception</code>这一概念，而如今大部分大中知名开源项目一般也只自定义<code>RuntimeException</code>的子类，而不自定义<code>Checked Exception</code>的子类。</p><p>常见的认为<code>Checked Exception</code>是糟糕设计的原因比如有：</p><ul><li><p>作为第三方库/下游代码，<code>Checked Exception</code>存在接口签名版本化兼容问题。</p></li><li><p>作为大中项目，当子模块都使用<code>Checked Exception</code>，则上游代码的接口可以最终会声明数十个异常，当接口的异常声明做增删改后，牵一发动全身。</p></li><li><p>Java代码内部，自己都存在异常设计冲突。比如Java Streams设计中的Lamba自己都不支持抛<code>Checked Exception</code>，对于在Stream里的Lambda，其实现必须当成处理（通常是错误实践）或将其转换成<code>Unchecked Exception</code>（丢失了使用<code>Checked Exception</code>的意义），Java内部甚至因此还引入了<code>UncheckedIOException</code>。</p></li><li><p>在实践中，人们经常会回避<code>Checked Exception</code>被设计出来的目的，导致不如不用<code>Checked Exception</code>，比如：</p><ul><li>直接捕获所有<code>Exception</code></li><li>将<code>Checked Exception</code>翻译成<code>RuntimeException</code>。如<code>try { ... } catch (Exception e) { throw new RuntimeException(e); }</code></li><li>由于栈太深，为了避免污染上游代码，直接在下游进行无意义的捕获，甚至有可能错误地直接<code>catch (Exception e) { do nothing }</code></li></ul></li><li><p>不少开发者会错误地理解异常设计，然后错误地去自定义异常。比如说不少开发者认为<code>如果是上游代码可以避免的异常，则用RuntimeException的子类。如果是上游代码不可避免的异常，则用Checked Exception</code>，类似的观点就非常盲目乐观与缺乏实际项目经验与编码经验了，因为下游抛出的异常到底可不可以处理取决于上游代码逻辑，而不是下游代码的臆想。</p><p>举例来说Turms服务端的插件模块在加载插件时，可能插件的类加载器会抛出<code>NoClassDefFoundError</code>，如果按Java早期团队的说法<code>An Error is a subclass of Throwable that indicates serious problems that a reasonable application should not try to catch</code>，那插件模块的上游代码就不应该捕获<code>Error</code>，但Turms作为一个服务端不可能因为加载了一个有问题的类插件，就让服务端异常，因此上游代码真正合理的做法是捕获这些<code>Error</code>，而不是让服务端直接奔溃，陷入异常状态。</p></li></ul><p>而对于Turms服务端项目来说，考虑到<code>Checked Exception</code>唯一能真正发挥作用的场景是：在个别场景中，在设计下游功能模块时，已知上游调用方代码需要根据下游抛出的各种异常做异常区分，为了保证上游没有遗漏处理一些下游抛出的异常，因此可以考虑使用<code>Checked Exception</code>。但由于这种场景非常地少，而且根据上游调用方代码逻辑来设计下游代码也是非常糟糕的实践。</p><p>因此为了规避<code>Checked Exception</code>带来了各种问题、统一异常设计风格，与避免把时间浪费在“为什么同样都是某类的模块，A模块用了某类异常，B模块用了某类异常”这类无关紧要的争论上，在Turms服务端项目中，有且仅自定义继承自<code>RuntimeException</code>的异常类，禁止自定义继承自<code>Exception</code>（<code>Checked Exception</code>）的异常类。</p>`,13);function w(L,D){const a=c("ExternalLinkIcon");return d(),i("div",null,[l,e("ul",null,[r,e("li",null,[u,e("p",null,[n("另外，这既是为什么我们在"),e("a",h,[n("关于Valhalla项目"),t(a)]),n("中说“万物皆对象”的设计理念“像诅咒一样挥之不去”，一个primitive在复杂的逻辑中，很难不会被转换成包装类，无意义的对象浪费了大量的内存，也是为什么我们一直在等待Valhalla项目终结包装类、并支持诸如"),k,n("类型等特性。")])])]),m,e("ul",null,[v,e("li",null,[g,e("ul",null,[b,f,e("li",null,[n("Log4j2竟然使用"),E,n("读取字符串的数据，并使用"),T,n("做日志的拼接（对比Turms的日志实现直接使用"),_,n("内部的"),x,n("数据，并使用Netty提供的"),y,n("来拼接日志并做日志输出）。（补充：如果读者对日志实现感兴趣，可以阅读"),e("a",C,[n("日志实现"),t(a)]),n("，了解Turms是如何实现日志的）")]),B]),S]),q]),A,J,e("p",null,[n("补充：Java的生态虽然繁荣，但高质量的库其实很少，所以大部分对性能有追求的中大型Java开源项目通常也是尽量自研各种功能模块，而不使用第三方依赖库，比如："),e("a",P,[n("Elasticsearch"),t(a)]),n("、"),e("a",R,[n("Cassandra"),t(a)]),n("、"),e("a",I,[n("Ignite"),t(a)]),n("。另外，在整个Java生态中，我们目前唯一信任其开发人员技术水平的库是：Netty")]),O])}const F=s(p,[["render",w],["__file","rules.html.vue"]]);export{F as default};
