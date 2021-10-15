"use strict";(self.webpackChunkturms_docs=self.webpackChunkturms_docs||[]).push([[387],{9311:(t,d,e)=>{e.r(d),e.d(d,{default:()=>n});const r=(0,e(6252).uE)('<h1 id="敏感词过滤" tabindex="-1"><a class="header-anchor" href="#敏感词过滤" aria-hidden="true">#</a> 敏感词过滤</h1><p>（Turms不支持且未来也不会支持图片、视频与语音的反垃圾检测功能，下文所有内容仅在文本检测内进行说明）</p><h2 id="功能特性对比" tabindex="-1"><a class="header-anchor" href="#功能特性对比" aria-hidden="true">#</a> 功能特性对比</h2><p>结合现实情况，商用敏感词过滤功能的最大优点是：词库丰富，更新及时，支持多语言。最主要缺点是：按检测次数收费、检测需要发送网络请求；turms-plugin-antispam的最大优点是：免费、本地极速检测，只需遍历一遍目标串。最主要缺点是：不提供词库。具体而言：</p><table><thead><tr><th></th><th>成熟的商业反垃圾服务（含敏感词过滤）</th><th>turms-plugin-antispam</th></tr></thead><tbody><tr><td>免费</td><td>否。按检测次数收费</td><td>是</td></tr><tr><td>开源</td><td>否。完全闭源</td><td>是。完全开源</td></tr><tr><td>匹配速度</td><td>需要发送网络请求，比turms-plugin-antispam的匹配速度慢了几个数量级</td><td>本地极速匹配（基于双数组Trie的AC自动机算法实现）。您可以忽略其带来的性能开销。<br>在NORMALIZATION模式下，匹配的时间复杂度为O(n)，n为输入字符串长度。<br>在NORMALIZATION_TRANSLITERATION模式下，音译的时间复杂度为O(n)，n为输入字符串长度。匹配音译结果的时间复杂度为O(m)，m为音译结果字符串长度。<br>补充：汉字音译指将汉字转换成拼音</td></tr><tr><td>文本去噪（如去标点符号、字母与数字标准化）</td><td>部分支持</td><td>部分支持</td></tr><tr><td>形近字匹配（如火星文）</td><td>部分支持</td><td>TODO（1.1支持）</td></tr><tr><td>拆字匹配</td><td>部分支持</td><td>不支持</td></tr><tr><td>音近字精确匹配</td><td>支持</td><td>支持</td></tr><tr><td>音近字模糊匹配</td><td>支持</td><td>TODO（1.1支持）</td></tr><tr><td>多音字匹配</td><td>支持</td><td>TODO（1.1支持）</td></tr><tr><td>词库</td><td>闭源，但是词库丰富，更新及时</td><td>由于敏感词的特殊性，turms-plugin-antispam不提供敏感词词库，需要用户自行采集。<br>补充：引入敏感词库时，注意词库文件的编码，推荐统一使用“UTF-8”编码，以避免编码混乱</td></tr><tr><td>多语言/方言支持</td><td>支持多种语言与方言</td><td>需要用户自行采集词库。另外，也可以通过“翻译软件”，将源语言翻译成某特定语言再进行匹配，turms-plugin-antispam不提供该功能</td></tr><tr><td>生僻字支持</td><td>部分支持</td><td>部分支持。turms-plugin-antispam能够识别的Unicode基本多语言平面（BMP）内的code points，支持识别两万多个汉字（《新华字典》最新版仅收录一万多个汉字）。<br>由于大部分IM应用都不要求一定要能显示特别生僻的字（如“𤳵”字），建议您的UI前端应用直接用如“?”的占位符对BMP之外的cope points进行替换。<br>turms-plugin-antispam没有计划支持BMP以外的code points</td></tr><tr><td>文字竖排检测</td><td>不支持</td><td>不支持</td></tr><tr><td>查询词库附加信息</td><td>附加信息丰富。如敏感词类别（涉黄、涉政、暴恐、违禁、谩骂、灌水、广告、广告法、涉价值观等）</td><td>TODO（1.0）。另外，虽然Turms之后会支持该功能，但Turms依旧不提供敏感词库</td></tr><tr><td>白名单</td><td>支持</td><td>TODO（1.1支持）</td></tr></tbody></table><h2 id="敏感词检测的复杂性" tabindex="-1"><a class="header-anchor" href="#敏感词检测的复杂性" aria-hidden="true">#</a> 敏感词检测的复杂性</h2><ul><li><p>并不是什么文本都能检测的。以字符串“Turms是一款优秀的IM开源项目”为例，如果我们采用常规的竖排明文显示。那么如果敏感词检测系统不支持特征提取，那么该系统就无法检测该类文本：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>╔═╤═╤═╤═╤═╗\n║┊│项│的│是│Ｔ║\n║┊│目│Ｉ│一│ｕ║\n║┊│┊│Ｍ│款│ｒ║\n║┊│┊│开│优│ｍ║\n║┊│┊│源│秀│ｓ║\n╚═╧═╧═╧═╧═╝\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>甚至也可以先用加密算法对消息进行加密后再发送（比如您的应用支持Web端，那不法分子甚至可以给您的Web端，写个浏览器插件，让每条消息在发送前都进行加密，在收到时进行解密）。这也是一直强调的：敏感词过滤只能提高发出敏感词的成本，没法根除敏感词</p></li><li><p>大部分系统都不支持检测语义，尤其是正话反说，明褒暗贬。同样一句话，放在不同的上下文，可以有着完全不同的含义。</p></li><li><p>存在误封。对一些正常词汇又存在着误封，如很多商业服务将“水乳交融”认为是“具有极高可信度的色情词汇”，结果造成了正常用户的流失。</p></li></ul><p>鉴于上述敏感词检测的复杂性，<code>turms-plugin-antispam</code>所需做的就是：结合边际效应，综合考虑敏感词的广泛度、敏感词的识别难度、识别的系统资源开销，能够识别大多数敏感词与常见伪装方式，不要求能够识别相对少见的伪装形式。</p><h2 id="不用其他开源实现的原因" tabindex="-1"><a class="header-anchor" href="#不用其他开源实现的原因" aria-hidden="true">#</a> 不用其他开源实现的原因</h2><p>在全球开源圈子内，目前可找到的开源实现的质量都非常之低，主要体现在：代码质量低、很多匹配功能都不支持、作者不具备工程设计能力，甚至还有收费的半开源IM项目通过遍历词库来进行匹配的。暂未有像turms-plugin-antispam这样的算法与代码质量都优秀的实现，且传统反垃圾方案（不涉及机器学习）的实现难度不大，因此Turms选择自研，也为后期众多拓展做足准备。具体而言：</p><ul><li>会算法的不会工程设计，会工程设计的不会算法。一方面，实现基于双数组Trie的AC自动机算法的难度较高，且Java的数据结构设计的都比较保守，如<code>String</code>与<code>StringBuilder</code>为了保证内部数据与外部数据隔离，很多函数都会涉及内存拷贝工作，能够在算法实现中避开各种Java的“坑”就需要工程师有基本的优化意识。另一方面，Turms里的反垃圾设计与算法实现的逻辑都是统一的，都是为了Turms这个IM项目设计的，为实际IM需求服务的。因此能保证“能想到的功能就能做到，不需要的功能就不需要提供，以免不必要的时间与空间开销”。</li><li>自研可以根据项目需求，定制算法实现与算法的上下游代码，以保证绝对的高效（把空间复杂度压到O(1)，时间复杂度压到O(n)，保证遍历一次字符串即可完成敏感词匹配）。举个例子，在AC自动机标准算法实现中，并没有涉及到“跳过某字符进行匹配”的逻辑。那么如果我们想要实现“只检测BMP内的code points”，就需要在把char[]传递给AC算法之前，先自行过滤并拷贝一个新的char[]（空间复杂度为O(n)）传递给AC自动机进行匹配，这频繁的内存拷贝工作无疑是非常低效且不必要的。而定制实现的话，我们只需通过1行代码在AC自动机进行匹配时，自动跳过即可。实现即简单，空间效率也高（无需开辟新的内存空间）。</li></ul><h2 id="配置讲解" tabindex="-1"><a class="header-anchor" href="#配置讲解" aria-hidden="true">#</a> 配置讲解</h2><p>TODO</p><h2 id="admin-api" tabindex="-1"><a class="header-anchor" href="#admin-api" aria-hidden="true">#</a> Admin API</h2><p>TODO</p>',15),a={},n=(0,e(3744).Z)(a,[["render",function(t,d){return r}]])},3744:(t,d)=>{d.Z=(t,d)=>{for(const[e,r]of d)t[e]=r;return t}},3854:(t,d,e)=>{e.r(d),e.d(d,{data:()=>r});const r={key:"v-6d278f0e",path:"/for-developers/anti-spam.html",title:"敏感词过滤",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"功能特性对比",slug:"功能特性对比",children:[]},{level:2,title:"敏感词检测的复杂性",slug:"敏感词检测的复杂性",children:[]},{level:2,title:"不用其他开源实现的原因",slug:"不用其他开源实现的原因",children:[]},{level:2,title:"配置讲解",slug:"配置讲解",children:[]},{level:2,title:"Admin API",slug:"admin-api",children:[]}],filePathRelative:"for-developers/anti-spam.md",git:{updatedTime:1634289848e3}}}}]);