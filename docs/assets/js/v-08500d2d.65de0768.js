"use strict";(self.webpackChunkturms_docs=self.webpackChunkturms_docs||[]).push([[382],{9414:(e,r,a)=>{a.r(r),a.d(r,{default:()=>f});var i=a(6252);const l=(0,i.uE)('<h1 id="关于二次开发" tabindex="-1"><a class="header-anchor" href="#关于二次开发" aria-hidden="true">#</a> 关于二次开发</h1><h2 id="基于turms做二次开发的原因" tabindex="-1"><a class="header-anchor" href="#基于turms做二次开发的原因" aria-hidden="true">#</a> 基于Turms做二次开发的原因</h2><p>客观原因</p><ul><li>唯一性。Turms解决方案是全球即时通讯开源领域内，唯一一个基于现代化架构与现代化工程技术，并且适合中大规模部署的解决方案。而其他数十款IM开源项目仍处于刀耕火种时代，多是强调企业通讯、或端到端安全的IM项目，通常只能获得企业用户的青睐。除Turms之外，全球开源界尚未有一款面向常规互联网应用设计的中大型IM开源项目。</li><li>规范性。由于Turms的架构设计是标准商用即时通讯架构的变种，因此如果您的专业团队是以常见的商用标准为要求，您的团队设计出来的架构也与Turms现在的架构相差不多的，没有必要另起炉灶从零自研。</li><li>简易性。Turms整个架构其实还是比较简洁与轻量的，二次开发难度不高。</li><li>可控性。Turms基于Apache V2协议进行开发，100%开源，并对很多基础中间件进行了自研，保证了底层技术的可控，避免了项目后期发展动力不足。</li><li>自研IM服务的市场需求大。即便现在到各招聘网站查询IM工程师相关岗位，也能发现国内外还有大量企业招聘IM相关人才，各公司投入上百或千万从零或基于古老的IM开源项目自研，重复造IM服务，社会资源利用率低。且IM服务的实现细节繁多，而开发人员水平又参差不齐，很难保证做出来的项目质量如何。</li></ul><p>主观原因</p>',5),d=(0,i._)("li",null,"您项目的核心业务与即时通讯相关，或者有深耕于即时通讯业务的计划。",-1),t=(0,i.Uk)("您项目所需要的拓展功能Turms目前暂未提供，尤其是需要通过辅助索引表来实现的拓展功能（关于辅助索引表，可查看"),n={href:"https://turms-im.github.io/docs/for-developers/schema.html",target:"_blank",rel:"noopener noreferrer"},s=(0,i.Uk)("Turms集合设计"),h=(0,i.Uk)("）。"),o=(0,i._)("li",null,"您项目存在大量项目独有的IM实现细节。Turms虽然提供了上百个配置项，但这些也只是普适的配置。根据具体业务需求的不同，IM相关功能的具体实现极其丰富，但Turms不可能直接提供这些相对小众业务功能的实现，否则代码量将会指数级增加，因此需要您自行做二次开发。",-1),u=(0,i.uE)('<h2 id="培训" tabindex="-1"><a class="header-anchor" href="#培训" aria-hidden="true">#</a> 培训</h2><h3 id="架构" tabindex="-1"><a class="header-anchor" href="#架构" aria-hidden="true">#</a> 架构</h3><h4 id="技术架构简述-todo" tabindex="-1"><a class="header-anchor" href="#技术架构简述-todo" aria-hidden="true">#</a> 技术架构简述（TODO）</h4><h4 id="业务请求流程-todo" tabindex="-1"><a class="header-anchor" href="#业务请求流程-todo" aria-hidden="true">#</a> 业务请求流程（TODO）</h4><h3 id="开发" tabindex="-1"><a class="header-anchor" href="#开发" aria-hidden="true">#</a> 开发</h3><h4 id="服务端开发的基本规约" tabindex="-1"><a class="header-anchor" href="#服务端开发的基本规约" aria-hidden="true">#</a> 服务端开发的基本规约</h4><h5 id="线程与锁" tabindex="-1"><a class="header-anchor" href="#线程与锁" aria-hidden="true">#</a> 线程与锁</h5><ul><li><p>禁止使用弹性线程池，如需创建新线程，则需要进行专门的代码审查</p></li><li><p>在客户端请求与管理员API请求的处理过程中，禁止使用synchronized与Lock操作（包括可重入锁）。如果确实需要临界区，则优先考虑重构代码流程或用CAS技术替代</p></li></ul><h5 id="内存与gc" tabindex="-1"><a class="header-anchor" href="#内存与gc" aria-hidden="true">#</a> 内存与GC</h5><ul><li><p>禁止对ByteBuf进行拷贝操作</p></li><li><p>对于网络I/O操作，禁止使用非池化或堆内存，只允许使用池化的直接内存</p></li><li><p>尽量不要创建新对象，尽量使用对象池。如设计中常见的：为了将不同层的数据模型进行逻辑分离，专门拆成了DTO与BO模型。Turms对于这种场景，会尽量使用一个数据模型，并通过自定义Jackson的序列化逻辑来实现符合DTO模型的响应</p><p>另外：该规则会在Valhalla项目发布之后，发生改变，尤其是我们将移除大部分现有的对象池</p></li><li><p>尽量不要创建带多个unused字段的对象。如Turms用自定义的<code>QueryOptions</code>模型重构了MongoDB的<code>FindOptions</code>模型，其中一个原因就是<code>FindOptions</code>模型会被频繁使用，但其带有数十个无用字段</p></li><li><p>在客户端请求与管理员API请求的处理过程中，禁止使用Stream</p></li></ul><h5 id="代理与反射" tabindex="-1"><a class="header-anchor" href="#代理与反射" aria-hidden="true">#</a> 代理与反射</h5><ul><li><p>禁止使用动态代理技术（如Java动态代理、CGLib、Spring AOP等），尽量不使用代理或使用静态编译技术代替（如Lombok）</p></li><li><p>在客户端请求与管理员API请求的处理过程中，除非不使用反射就需要写大量繁杂代码，其他场景下禁止使用反射技术。如：Turms在对MongoDB的Entity模型的数百个字段进行序列化与反序列化时，使用了反射</p></li></ul><p>另外，如果有第三方依赖违背了以上原则，则根据性价比，排期对第三方依赖进行重构</p><h4 id="代码拉取" tabindex="-1"><a class="header-anchor" href="#代码拉取" aria-hidden="true">#</a> 代码拉取</h4><ol><li><p><code>git clone https://github.com/turms-im/turms.git</code></p></li><li><p>由于Turms各子项目的proto模型文件放在一个独立的仓库之中，因此您还需要通过以下命令来拉取submodule中的代码。</p></li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git submodule update --init --recursive\ngit submodule foreach git pull origin master\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="关于依赖库的使用" tabindex="-1"><a class="header-anchor" href="#关于依赖库的使用" aria-hidden="true">#</a> 关于依赖库的使用</h4><p>很多依赖库热衷于对底层实现进行抽象与封装，以实现“内部逻辑透明，使用者不用关心背后的逻辑”。这样的设计对于一些逻辑简单、要求快速上线、且不追求性能的应用来说比较实用。但随着一个项目越往后发展，越深入优化，这个不可控的抽象层，会成为问题排查、性能优化、功能定制的绊脚石。抽象层带来的问题，诸如：</p><ul><li><p>需求迭代与版本更新严重滞后。如果我们的项目使用了一个抽象层的A依赖，A依赖封装了B依赖。如果我们需要往B依赖添加一个新特性或改Bug，通常的流程是：我们向B依赖的社区提Issue，运气好的话，平均2~4天得到回复。如果运气还很好，对方愿意改。假设改动不大，1周后相关PR被merged。可能等2周、1个月、甚至几个月，B依赖终于发布新版本。然后我们还要等A依赖更新B依赖版本，可能又过了2周、1个月、甚至几个月。等真到我们能使用到新特性，可能几个月已经过了。但更多的情况是，B依赖的维护者压根不愿意修改相关代码。</p></li><li><p>绝大部分知名依赖库，只关心功能实现，并不关心性能，基本是“功能够用，性能凑合就行”的态度。（Turms通过重构依赖代码，解决了大部分下述问题）诸如<code>mongo-java-driver</code>在进行API调用时，反反复复创建大量的中间对象；Lettuce在序列化传递给Redis的指令参数时需要反复扩充内存，并且该Cache的内存数据也没Cache；Spring的AOP常用于代理Controller层方法调用，可用于捕获解析后参数，进行日志打印（WebFilter无法获得解析后的参数）。但AOP会给一个方法徒增19个stacks并大量使用反射，从AOP代理开始到Controller方法层的调用所需时间甚至比Turms内部业务处理时间还长（额外补充：AOP是个非常糟糕的设计，Spring应该为Controller层采用的责任链设计）。综上，很多的知名Java依赖库的代码质量并不高，甚至代码性能与质量堪忧。</p></li><li><p>关注于抽象实现的依赖库在与响应式编程结合时，在问题排查问题上，会给开发者带来地狱级的体验，尤其是Bug与需要手动释放的内存相关。在常规问题排查上，我们通常可以通过栈信息来很快的排查出问题。但在响应式编程中，这样的方法通常行不通，我们更多的靠逻辑推理来排查问题。即熟读上下游代码（包括依赖包内的代码），推演代码可能经过的所有流程。</p><p>如果代码的抽象层少、且调用关系扁平，这个排查过程其实很简单，可能我们只用在一个类内的几十行代码上扫几眼，就能大概知道出现问题的原因了。但如果流程中，使用到了大量“封装、抽象，用户无需关注底层实现逻辑”依赖库，地狱级体验就来了。原本我们可能只需要一个小数十行的函数就能实现所有相关逻辑。但如果基于抽象库去实现相关功能，我们在问题排查时，可能要查看的代码可能是A抽象类(A1,A2,A3...)类-&gt;B抽象类(B1,B2,B3...)-&gt;C抽象类(C1,C2,C3...)-&gt;...，在数十个类、数十个方法间跳转，并进行推理。其中最典型的对照例子就是：Turms的<code>im.turms.gateway.access.websocket.factory.WebSocketFactory#getHttpRequestHandler</code>在一个小数十行的函数内实现了一组WebSocket握手逻辑。但如果这套逻辑让Spring来实现，它会将各个不同包下的类，各种逻辑东拼西凑地混在一起，在问题排查时，如果还伴随着一些需要手动释放的内存，地狱级的问题排查体验就来了。</p></li><li><p>部分依赖库在一些地方会自行Suppress异常，上层应用代码无法感知。由于出问题的时候，底层库代码与上层应用代码在大部分情况下，是跑在不同的栈上的。除非底层依赖库支持全局的异常回调，否则上层应用甚至无法感知异常的发生。对于一些Trivial级别的错误，上层应用感知不到也没关系。但如果是一些上层应用非常关注的异常（如RPC的TCP连接的异常断开），这将是引发整个系统异常与失序的导火索了。</p></li></ul><p>另一方面，自研能规避掉上述所有问题，在提高代码可控性的同时，也极大地降低了研发难度与问题排查难度，并提升代码性能与资源利用率。</p><p>综上，Turms项目在引用一个类库时，通常不引入抽象封装库（如Spring），而仅引入实现库。对依赖库中需要性能优化或逻辑优化的点，会直接在Turms项目内部进行重构。结合考虑到自研的难易程度与代码可控性，我们在大部分情况下会尽可能选择自研。</p><h4 id="关于基础服务实现方案的选型" tabindex="-1"><a class="header-anchor" href="#关于基础服务实现方案的选型" aria-hidden="true">#</a> 关于基础服务实现方案的选型</h4><p>如今微服务领域的基础服务实现方案百花齐放。以配置中心的实现方案为例，其实现方案就有：K8S的ConfigMaps、云服务厂商的配置服务（如AWS的AppConfig）、开源实现（如Zookeeper）。作为Turms作为一个技术中立的开源项目，其技术栈绝不能被厂商所绑定。但与此同时，又要保证这些实现能够很方便地获得云服务厂商的支持，以让运维人员“点点鼠标就能实现与部署了”。同时又要满足容灾、高可用、可监控、易操作等多种关键特性，因此Turms通过MongoDB自研实现配置中心实现，以满足上述的所有要求。</p><p>（补充：因为服务注册中心的“服务信息”本质上来说也是一种配置，因此Turms的服务注册与发现也是基于该配置中心开发的）</p><h4 id="插件开发" tabindex="-1"><a class="header-anchor" href="#插件开发" aria-hidden="true">#</a> 插件开发</h4>',25),c=(0,i.Uk)("参考 "),p={href:"https://turms-im.github.io/docs/for-developers/custom-plugin.html",target:"_blank",rel:"noopener noreferrer"},m=(0,i.Uk)("插件开发"),g=(0,i._)("h4",{id:"配置项开发-todo",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#配置项开发-todo","aria-hidden":"true"},"#"),(0,i.Uk)(" 配置项开发（TODO）")],-1),b=(0,i._)("h3",{id:"测试-todo",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#测试-todo","aria-hidden":"true"},"#"),(0,i.Uk)(" 测试（TODO）")],-1),f={render:function(e,r){const a=(0,i.up)("OutboundLink");return(0,i.wg)(),(0,i.iD)(i.HY,null,[l,(0,i._)("ul",null,[d,(0,i._)("li",null,[t,(0,i._)("a",n,[s,(0,i.Wm)(a)]),h]),o]),u,(0,i._)("p",null,[c,(0,i._)("a",p,[m,(0,i.Wm)(a)])]),g,b],64)}}},3483:(e,r,a)=>{a.r(r),a.d(r,{data:()=>i});const i={key:"v-08500d2d",path:"/intro/redevelopment.html",title:"关于二次开发",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"基于Turms做二次开发的原因",slug:"基于turms做二次开发的原因",children:[]},{level:2,title:"培训",slug:"培训",children:[{level:3,title:"架构",slug:"架构",children:[]},{level:3,title:"开发",slug:"开发",children:[]},{level:3,title:"测试（TODO）",slug:"测试-todo",children:[]}]}],filePathRelative:"intro/redevelopment.md",git:{updatedTime:1631547646e3}}}}]);