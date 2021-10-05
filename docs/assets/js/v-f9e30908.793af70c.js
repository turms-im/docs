"use strict";(self.webpackChunkturms_docs=self.webpackChunkturms_docs||[]).push([[538],{565:(r,e,t)=>{t.r(e),t.d(e,{default:()=>Qr});var l=t(6252);const s=(0,l._)("p",{align:"center"},[(0,l._)("img",{height:"100",src:"https://raw.githubusercontent.com/turms-im/assets/9dbc34a9d78a68f9f7df2430b4066c82bf8a458f/logo/logo.svg"})],-1),n={href:"https://github.com/turms-im/turms/blob/develop/README.md",target:"_blank",rel:"noopener noreferrer"},a=(0,l.Uk)("English"),u=(0,l._)("h2",{id:"turms-是什么",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#turms-是什么","aria-hidden":"true"},"#"),(0,l.Uk)(" Turms 是什么")],-1),i=(0,l._)("p",null,"Turms是一套全球范围内最为先进的、为同时在线用户数为100K~10M应用而设计的开源即时通讯引擎。",-1),o=(0,l.Uk)("若想详细了解Turms项目，您可以阅读"),m={href:"https://turms-im.github.io/docs/",target:"_blank",rel:"noopener noreferrer"},d=(0,l.Uk)("Turms文档"),p=(0,l.Uk)("。下文为Turms项目的概要。"),c=(0,l.uE)('<h2 id="playground" tabindex="-1"><a class="header-anchor" href="#playground" aria-hidden="true">#</a> Playground</h2><p>（当前Demo的服务端版本：<code>ghcr.io/turms-im/turms-admin:latest</code>、<code>ghcr.io/turms-im/turms-gateway:latest</code>、<code>ghcr.io/turms-im/turms-service:latest</code>）</p><ul><li><p>turms-admin服务端地址：http://playground.turms.im:6510</p><p>登录账号与密码均为：<code>guest</code>（该账号有查询与增加领域模型的权限，无更新与删除领域模型的权限）</p></li><li><p>turms-gateway服务端地址：http://playground.turms.im:10510 （WebSocket端口）、http://playground.turms.im:11510 （TCP端口）</p></li><li><p>turms-service服务端的管理员API地址（DEV配置，带Mock数据）：http://playground.turms.im:8510</p></li><li><p>Prometheus服务端地址：http://playground.turms.im:9090；Grafana服务端：http://playground.turms.im:3000</p></li></ul><p>您可以使用任意turms-client-(java/js/swift)客户端，向turms-gateway服务端发送请求，并与其他用户进行交互。</p><p>另外，Playground由一条指令全自动搭建：<code>ENV=dev docker-compose -f docker-compose.standalone.yml --profile monitoring up --force-recreate -d</code></p><h2 id="quick-start" tabindex="-1"><a class="header-anchor" href="#quick-start" aria-hidden="true">#</a> Quick Start</h2><p>通过以下命令，可以在本地全自动地搭建一套完整的Turms最小集群（包含turms-gateway、turms-service与turms-admin）及其依赖服务端（MongoDB分片集群与Redis）</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> clone --depth <span class="token number">1</span> https://github.com/turms-im/turms.git\n<span class="token builtin class-name">cd</span> turms\ndocker plugin <span class="token function">install</span> grafana/loki-docker-driver:latest --alias loki --grant-all-permissions\ndocker-compose -f docker-compose.standalone.yml up --force-recreate\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>等集群完成搭建后，可以通过 http://localhost:6510 访问turms-admin后台管理系统，并输入账号密码（默认均为<code>turms</code>）。如果登录成功，则说明Turms服务端也已经成功启动。</p><p>另外您也可以通过Turms提供的Terraform module，来快速购买/搭建云环境（默认使用抢占式实例）并在服务器上搭建Turms集群与依赖服务端。在<code>terraform apply</code>命令执行完毕后，等待约3~15分钟（阿里云ECS拉取ghcr镜像很慢），然后再访问<code>http://公网IP:6510</code>，如果可以访问turms-admin后台管理系统，则表明搭建成功。</p><p><strong>（特别注意：以下命令会自动购买云服务，并在您账号中扣除相应费用）</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> clone --depth <span class="token number">1</span> https://github.com/turms-im/turms.git\n<span class="token builtin class-name">cd</span> turms/terraform/alicloud/playground\n<span class="token builtin class-name">export</span> <span class="token assign-left variable">ALICLOUD_ACCESS_KEY</span><span class="token operator">=</span><span class="token operator">&lt;</span>your_access_key<span class="token operator">&gt;</span>\n<span class="token builtin class-name">export</span> <span class="token assign-left variable">ALICLOUD_SECRET_KEY</span><span class="token operator">=</span><span class="token operator">&lt;</span>your_secret_key<span class="token operator">&gt;</span>\nterraform init\nterraform apply\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2>',13),h=(0,l.Uk)("Turms基于读扩散消息模型进行架构设计，对业务数据变化感知同时支持推模式、拉模式与推拉模式（详细文档："),_={href:"https://turms-im.github.io/docs/for-developers/status-aware.html",target:"_blank",rel:"noopener noreferrer"},k=(0,l.Uk)("Turms业务数据变化感知"),b=(0,l.Uk)("），其他大部分的设计细节也源自商用即时通讯项目。并且相比很多技术栈落后的开源项目或闭源商用项目，Turms解决方案也是全球即时通讯开源领域内唯一一个基于现代化架构与现代化工程技术，并且适合中大规模部署的解决方案。"),g=(0,l.Uk)("另外，架构设计是权衡的艺术，部分IM产品以功能丰富为口号，但功能丰富的代价就是只适用于小体量的用户规模（如企业内部通讯）。而Turms以极限性能为第一要义，同时支持完整的（而非丰富的）IM业务功能，以支持中大规模即时通讯场景。具体原因可查阅"),T={href:"https://turms-im.github.io/docs/for-developers/schema.html",target:"_blank",rel:"noopener noreferrer"},U=(0,l.Uk)("Turms集合设计"),f=(0,l.Uk)("以及"),v={href:"https://turms-im.github.io/docs/for-developers/observability.html",target:"_blank",rel:"noopener noreferrer"},y=(0,l.Uk)("Turms可观测性体系"),w=(0,l.Uk)("相关文档。"),E=(0,l._)("p",null,[(0,l.Uk)("当您需要将Turms与其他开源IM项目做具体特性的比对时，您可以先照着Turms下述的特性与其他开源IM项目进行比对。通常情况下，您能通过这样的比对，发现专业IM项目与业余IM项目之间的区别。另外，在"),(0,l._)("code",null,"产品对比"),(0,l.Uk)("章节下，我们也提到了Turms项目的缺点供您参考。")],-1),I=(0,l._)("p",null,"注意：当前Turms项目的主要缺点是不对直播/聊天室业务场景提供支持。直播/聊天室业务场景的技术实现并不难，但其产品需求、质量属性要求与约束性条件与一般的社交场景存在着较大差异，故Turms第一版设计不对其提供支持；另外，Turms也不太适用于小规模的企业通讯场景，用Turms往企业通讯场景上套就有点“杀鸡用牛刀”，因为企业通讯更强调功能丰富而非极限性能，与Turms的目标不符，所以二者的上层设计也不同。如果希望支持企业通讯场景，您还需要对Turms进行二次开发。",-1),C=(0,l._)("h3",{id:"业务功能相关特性",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#业务功能相关特性","aria-hidden":"true"},"#"),(0,l.Uk)(" 业务功能相关特性")],-1),M=(0,l.Uk)("（业务功能完善性）Turms支持几乎所有商用即时通讯产品所支持的"),D={href:"https://turms-im.github.io/docs/features/",target:"_blank",rel:"noopener noreferrer"},P=(0,l.Uk)("即时通讯相关功能"),x=(0,l.Uk)("（甚至还有更多的业务功能），且无业务功能限制。 （数据分析与挖掘功能会在之后发布turms-data的时候提供，具体细节可查阅 "),R={href:"https://turms-im.github.io/docs/for-developers/data-analytics.html",target:"_blank",rel:"noopener noreferrer"},W=(0,l.Uk)("Turms数据分析"),A=(0,l.Uk)("）"),S=(0,l._)("li",null,"（功能拓展性）Turms同时支持两种拓展模式：配置参数与开发插件。当然您也完全可以对源码进行修改。目前用于接入的MinIO对象存储服务的插件turms-plugin-minio就是基于turms-plugin实现的。",-1),O=(0,l._)("li",null,"（配置灵活性）Turms提供了上百个配置参数供用户定制，以满足各种需求。并且大部分配置都可以在集群运作时（不需要停机），进行集群级别的同步更新，并且无性能损失。",-1),B=(0,l._)("h3",{id:"通用架构特性",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#通用架构特性","aria-hidden":"true"},"#"),(0,l.Uk)(" 通用架构特性")],-1),L=(0,l._)("li",null,"（敏捷性）支持在用户无感知的情况下，对Turms服务端进行停机更新，为快速迭代提供可能",-1),K=(0,l._)("li",null,"（可伸缩性）无状态架构，Turms集群支持弹性扩展与异地多活的部署实现，用户可通过DNS就近接入",-1),j=(0,l._)("li",null,"（可部署性）支持容器化部署，方便与云服务对接，以实现全自动化部署与运维。Turms默认提供了docker镜像、docker-compose脚本、Terraform模块三套容器化部署方案",-1),q=(0,l._)("li",null,"（可观测性）具备相对完善的可观测性体系设计，为业务统计与错误排查提供可能",-1),N=(0,l._)("li",null,"（可拓展性）能同时支持中大型即时通讯场景，即便用户体量由小变大也无需重构（当然，对于大型运用场景还有很多优化的工作需要做，但当前架构不影响后期的无痛升级）",-1),Q=(0,l._)("li",null,"（安全性）提供限流防刷机制与用户/IP黑名单机制，以抵御大部分CC攻击",-1),V=(0,l.Uk)("（简单性）核心架构“轻量”，方便学习与二次开发（原因请查阅 "),Y={href:"https://turms-im.github.io/docs/for-developers/architecture.html",target:"_blank",rel:"noopener noreferrer"},F=(0,l.Uk)("Turms架构设计"),G=(0,l.Uk)("）"),H=(0,l._)("li",null,"Turms使用MongoDB分片架构，以支持请求路由（如读写分离），同时也支持跨地域多活部署与数据主主同步，为大规模跨国部署提供实际操作的可能",-1),X=(0,l._)("h3",{id:"其他特性",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#其他特性","aria-hidden":"true"},"#"),(0,l.Uk)(" 其他特性")],-1),Z=(0,l.Uk)("重视可观测性体系建设（详细文档："),J={href:"https://turms-im.github.io/docs/for-developers/observability.html",target:"_blank",rel:"noopener noreferrer"},z=(0,l.Uk)("Turms可观测性体系"),$=(0,l.Uk)("）。具体而言包括以下三个维度："),rr=(0,l._)("ul",null,[(0,l._)("li",null,"日志（针对事件）：共提供了三大类日志：监控日志、业务日志、统计日志"),(0,l._)("li",null,"度量（针对可聚合数据）。包括实时的系统运行状态信息，以及实时的业务数据"),(0,l._)("li",null,"链路追踪")],-1),er=(0,l._)("p",null,"补充：Turms服务端自身会在实现高效的前提下尽可能提供更多监控数据，但不提供一些尽管常见但对性能影响较大，且更适合第三方服务实现的功能（如：日活）。对于这类拓展功能，您可以通过对Turms的日志与度量数据进行离线或实时分析来实现该类功能。",-1),tr=(0,l.uE)("<li><p>运作极为高效。</p><p>Turms服务端在所有业务流程的代码实现上，都对性能有着极致追求，具体请查阅代码实现。</p><ul><li>网络 <ul><li>I/O：Turms服务端基于响应式编程，Turms服务端的所有网络请求在底层都是基于Netty的异步无阻塞模型实现的（包括数据库调用、Redis调用、服务发现注册、RPC等）。因此Turms服务端在各个功能模块上都能充分利用硬件资源（而传统服务端不能）</li><li>编码：Turms服务端与Turms客户端间的通信数据采用Protobuf编码；Turms服务端之间的RPC请求与响应均采用定制化的二进制编码，以保证极致的高效。</li></ul></li><li>线程 <ul><li>Turms服务端具有优秀的线程模型，其线程数恒定，与在线用户规模以及请求数无关。由于Turms接入层默认线程数与CPU数一致，因此Turms服务端能充分利用CPU缓存，并相比传统服务端，极大地减少了线程上下文切换开销</li><li>业务逻辑处理过程中，无同步加锁操作，只有CAS操作</li></ul></li><li>内存 <ul><li>在划分内存空间时，合理且充分地循环利用堆内存与直接内存</li><li>如果您在JVM配置中添加了<code>-XX:+AlwaysPreTouch</code>，即可保证Turms在服务端启动时向系统commit所有需要的堆内存，保证Turms服务端在运作时不会发生缺页异常，以提升运行效率</li><li>Turms通过重写MongoDB/Redis客户端依赖的部分实现，保证了Turms服务端中无冗余的内存分配，极大地提高了内存的有效使用率</li></ul></li><li>缓存：Turms服务端各功能模块充分利用本地内存缓存</li></ul></li>",1),lr=(0,l.uE)('<h2 id="子项目" tabindex="-1"><a class="header-anchor" href="#子项目" aria-hidden="true">#</a> 子项目</h2><table><thead><tr><th>名称</th><th>描述</th></tr></thead><tbody><tr><td><span style="white-space:nowrap;">turms-gateway</span></td><td>Turms客户端网关（推送服务端）。负责用户鉴权与会话保持、消息推送，以及为turms-service服务端提供的负载均衡等功能</td></tr><tr><td><span style="white-space:nowrap;">turms-service</span></td><td>Turms业务处理服务端。对用户提供各种IM业务逻辑的实现，对管理员提供基础数据管理、权限控制、集群配置等功能</td></tr><tr><td><span style="white-space:nowrap;">turms-admin</span></td><td>为Turms服务端集群提供：内容管理、集群配置等功能</td></tr><tr><td><span style="white-space:nowrap;">turms-client-js</span></td><td>对外暴露IM业务相关的API接口，并在底层实现与Turms服务端的各种交互逻辑（如心跳检查）。您在使用该库时，无需关心背后的逻辑</td></tr><tr><td><span style="white-space:nowrap;">turms-client-kotlin</span></td><td>同上</td></tr><tr><td><span style="white-space:nowrap;">turms-client-swift</span></td><td>同上</td></tr><tr><td><span style="white-space:nowrap;">turms-plugin</span></td><td>当指定事件（如用户上下线、消息接收与转发等）被触发时，turms-gateway和turms-service会调用对应的自定义插件以方便开发者实现各种各样定制化功能</td></tr><tr><td><span style="white-space:nowrap;">turms-plugin-minio</span></td><td>基于turms-plugin实现的存储服务插件。用于与MinIO服务端进行交互</td></tr><tr><td><span style="white-space:nowrap;">turms-data（TODO）</span></td><td>尚未发布。基于Flink生态的独立数据分析系统，负责业务数据统计与分析，为turms的管理员统计API与turms-admin运营报表提供底层数据支持</td></tr></tbody></table><h2 id="参考架构" tabindex="-1"><a class="header-anchor" href="#参考架构" aria-hidden="true">#</a> 参考架构</h2>',3),sr=(0,l.Uk)("Turms的架构设计脱胎于商用即时通讯架构。下图为Turms的参考架构图，由虚线框起来的服务为可选服务，由实线框起来的服务则为必选服务。具体架构细节请查阅该"),nr={href:"https://turms-im.github.io/docs/for-developers/architecture.html",target:"_blank",rel:"noopener noreferrer"},ar=(0,l.Uk)("Turms架构设计"),ur=(0,l.Uk)("。"),ir=(0,l._)("p",null,[(0,l._)("img",{src:"https://raw.githubusercontent.com/turms-im/assets/master/turms/reference-architecture.png",alt:"参考架构图"})],-1),or=(0,l._)("h2",{id:"产品对比",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#产品对比","aria-hidden":"true"},"#"),(0,l.Uk)(" 产品对比")],-1),mr=(0,l._)("th",null,null,-1),dr={href:"https://github.com/RocketChat/Rocket.Chat",target:"_blank",rel:"noopener noreferrer"},pr=(0,l.Uk)("Rocket.Chat"),cr=(0,l._)("th",null,"大量具有高关注度的低质IM项目",-1),hr=(0,l._)("th",null,"闭源的即时通讯云",-1),_r=(0,l._)("th",null,"Turms",-1),kr=(0,l._)("tr",null,[(0,l._)("td",null,"应用场景"),(0,l._)("td",null,"企业内部通讯"),(0,l._)("td",null,"企业内部通讯"),(0,l._)("td",null,"通用的即时通讯场景"),(0,l._)("td",null,[(0,l.Uk)("通用的中大规模即时通讯场景（为二次开发提供实际操作的可能）"),(0,l._)("br"),(0,l.Uk)("（注：第一版设计不对直播/聊天室业务场景提供支持）")])],-1),br=(0,l._)("tr",null,[(0,l._)("td",null,"优点"),(0,l._)("td",null,[(0,l.Uk)("1. 提供云服务，点点鼠标即可启动集群，并对外提供服务"),(0,l._)("br"),(0,l.Uk)("2. 客户端支持众多平台且开箱即用"),(0,l._)("br"),(0,l.Uk)("3. 带有完整且风格统一的UI套件"),(0,l._)("br"),(0,l.Uk)("4. 具有大量的拓展即时通讯功能，包括音视频会议、文件传输、桌面共享等高级功能"),(0,l._)("br"),(0,l.Uk)("5. 商业版有技术团队支持")]),(0,l._)("td",null,"1. 部分开发者具有开源奉献精神"),(0,l._)("td",null,[(0,l.Uk)("1. 提供云服务，点点鼠标即可启动集群，并对外提供服务"),(0,l._)("br"),(0,l.Uk)("2. 客户端支持众多平台且开箱即用"),(0,l._)("br"),(0,l.Uk)("3. 带有完整且风格统一的UI套件"),(0,l._)("br"),(0,l.Uk)("4. 具有大量的拓展即时通讯功能，包括音视频会议、文件传输、桌面共享等高级功能"),(0,l._)("br"),(0,l.Uk)("5. 商业版有技术团队支持")]),(0,l._)("td",null,[(0,l.Uk)("优点即上文所述特性。"),(0,l._)("br"),(0,l.Uk)("补充：外网自建，无需公安备案")])],-1),gr=(0,l._)("td",null,"缺点",-1),Tr=(0,l._)("td",null,[(0,l.Uk)("1. 只适合小规模部署（千人以下）"),(0,l._)("br"),(0,l.Uk)("2. 适用场景窄，功能可定制性差")],-1),Ur=(0,l._)("td",null,[(0,l.Uk)("1. 项目技术人员技术视野窄，代码质量过低，无软件工程思维，总体水平业余。如：系统不具备可观察性、无防刷与黑名单机制，被CC攻击时，只能停机"),(0,l._)("br"),(0,l.Uk)("2. 项目大多具有玩票性质。通常维护者在长期维护过程中，会发现当前服务架构混乱不堪，但又没能力重构，或者发现同领域内还有其他开源的且对方项目具有碾压性优势的时候，热情大减，放弃继续维护项目"),(0,l._)("br"),(0,l.Uk)("3. 项目大多哗众取宠，通常还伴随互刷关注度。由于吸引初级程序员更容易快速获取关注度，该类项目多会提供一些业余水平的UI界面与外强中干的产品功能，最终积重难返，彻底沦为玩具项目"),(0,l._)("br"),(0,l.Uk)("4. 部分项目仅公开部分源码（如只公开客户端代码，不公开服务端代码），以假借开源名义来推广低质的收费服务。但其收费服务远不如免费的Rocket.Chat，跟融云、网易云信等成熟的商业服务相比就更无优势可言了"),(0,l._)("br"),(0,l.Uk)("5. KPI项目或面试用项目。目的完成后便抛弃项目")],-1),fr=(0,l.Uk)("1. 闭源，无法自定义实现。任何项目在业务增长之后必将出现新的业务需求，需要进行定制。但通讯云要么不提供定制服务，要么需要高昂的定制费用，且第三方平台可能会对您业务理解出现偏差，造成定制功能不能很好地满足您业务需求，二者需要长期的磨合。"),vr=(0,l._)("br",null,null,-1),yr=(0,l.Uk)("而基于Turms自研就可以快速开发并快速上线，成本也低。另：即时通讯的复杂性可以参考"),wr={href:"https://turms-im.github.io/docs/for-developers/schema.html#%E9%9C%80%E6%B1%82%E5%88%86%E6%9E%90%E4%B8%8E%E9%9B%86%E5%90%88%E7%BB%93%E6%9E%84%E8%AE%BE%E8%AE%A1",target:"_blank",rel:"noopener noreferrer"},Er=(0,l.Uk)("集合结构设计"),Ir=(0,l._)("br",null,null,-1),Cr=(0,l.Uk)("2. 数据泄露。您所有的用户信息与聊天记录都存储在第三方平台，其可以偷窥和使用您的数据。"),Mr=(0,l._)("br",null,null,-1),Dr=(0,l.Uk)("特别是一些IM小公司，数据的安全性完全没有保障，您甚至需要承受数据丢失无法恢复的风险"),Pr=(0,l._)("br",null,null,-1),xr=(0,l.Uk)("3. 越用越依赖，越用越贵。多数通讯云提供一定的免费额度或试用期，但在您产品的用户规模增长之后，您需要支付高昂的使用费或放弃使用开始自研"),Rr=(0,l._)("br",null,null,-1),Wr=(0,l.Uk)("4. 技术支持不及时。通讯云需要同时对多个客户提供技术支持，对您产品的支持可能滞后"),Ar=(0,l._)("br",null,null,-1),Sr=(0,l.Uk)("5. 需要公安备案"),Or=(0,l._)("td",null,[(0,l.Uk)("1. 只满足通用的即时通讯需求，不提供拓展功能的实现（如：不具备常用的音视频会议功能。TODO：Turms后期会基于SFU媒体服务器为Turms主服务端定制一套信令服务端，目前您可自行选择其他音视频会议解决方案与Turms进行集成）"),(0,l._)("br"),(0,l._)("br"),(0,l.Uk)("2. Turms第一版设计不对直播/聊天室业务场景提供支持"),(0,l._)("br"),(0,l._)("br"),(0,l.Uk)("3. 服务端只提供度量/日志等原始数据，不提供分析与报警等功能"),(0,l._)("br"),(0,l.Uk)("4. 配套的Web后台管理系统"),(0,l._)("code",null,"turms-admin"),(0,l.Uk)("不提供专业的运维功能（注意：Turms配套的后台系统和商用的运维系统是相辅相成的）。"),(0,l._)("br"),(0,l.Uk)("5. 不提供客户端具体的上层业务逻辑实现与UI支持"),(0,l._)("br"),(0,l.Uk)("6. 服务端基于响应式编程，对二次开发者的技术水平要求相对高")],-1),Br=(0,l._)("tr",null,[(0,l._)("td",null,"总评"),(0,l._)("td",null,"几乎是开源届中企业内部通讯实现的最优开源项目，非常推荐"),(0,l._)("td",null,"受众主要是不了解即时通讯领域的初级程序员，Rocket.Chat跟这类产品相比具有碾压性的优势"),(0,l._)("td",null,"如果您产品所涉及的IM业务场景非常常规，没有定制化需求，且IM业务也不是您产品的主营业务，则推荐使用成熟的即时通讯云。另外，如果没有特殊原因，尽量不要使用小公司的通讯云服务，否则您的数据安全性将毫无保障"),(0,l._)("td",null,[(0,l.Uk)("Rocket.Chat和Turms虽然同为即时通讯领域的开源项目，但二者在应用场景上几乎没有交集。"),(0,l._)("br"),(0,l.Uk)("因为Tumrs是面向通用的中大型即时通讯应用场景，且相对底层的即时通讯引擎。您无法直接将Turms引擎交给您的客户使用（就像大部分产品不会让客户直接写SQL语句来查询数据库里的业务模型一样）。"),(0,l._)("br"),(0,l.Uk)("但基于Turms，您可以更高效、更全方位、更扩展地实现目前GitHub上所有开源的即时通讯项目")])],-1),Lr=(0,l._)("h2",{id:"关于带具体业务实现的demo",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#关于带具体业务实现的demo","aria-hidden":"true"},"#"),(0,l.Uk)(" 关于带具体业务实现的Demo")],-1),Kr=(0,l._)("p",null,"考虑到Turms项目的定位，Turms并不打算在近期提供带UI与具体业务逻辑的客户端Demo。",-1),jr=(0,l._)("p",null,"一方面，在业务层面，Turms已经足够简单易用了，若您仅是想自行测试Turms的业务功能，您甚至无需敲一行代码，即可运行Turms服务端。仅需十来行代码就可以实现客户端的登陆、发送消息、发送好友请求等等多种业务操作，修改下业务相关配置，即可定制各种业务。",-1),qr=(0,l._)("p",null,"另一方面，Demo的设计与实现与具体业务场景、具体的编程语言、具体的技术架构、具体的运行平台都密切相关。而Turms引擎一直是致力于高效地满足各种复杂多变的即时通讯业务场景，不希望因为Demo限制了开发者的想象力。并且开发与维护Demo也非常地费时费力，会拖慢Turms项目的开发进度。",-1),Nr={},Qr=(0,t(3744).Z)(Nr,[["render",function(r,e){const t=(0,l.up)("OutboundLink");return(0,l.wg)(),(0,l.iD)(l.HY,null,[s,(0,l._)("p",null,[(0,l._)("a",n,[a,(0,l.Wm)(t)])]),u,i,(0,l._)("p",null,[o,(0,l._)("a",m,[d,(0,l.Wm)(t)]),p]),c,(0,l._)("p",null,[h,(0,l._)("a",_,[k,(0,l.Wm)(t)]),b]),(0,l._)("p",null,[g,(0,l._)("a",T,[U,(0,l.Wm)(t)]),f,(0,l._)("a",v,[y,(0,l.Wm)(t)]),w]),E,I,C,(0,l._)("ol",null,[(0,l._)("li",null,[M,(0,l._)("a",D,[P,(0,l.Wm)(t)]),x,(0,l._)("a",R,[W,(0,l.Wm)(t)]),A]),S,O]),B,(0,l._)("ol",null,[L,K,j,q,N,Q,(0,l._)("li",null,[V,(0,l._)("a",Y,[F,(0,l.Wm)(t)]),G]),H]),X,(0,l._)("ol",null,[(0,l._)("li",null,[(0,l._)("p",null,[Z,(0,l._)("a",J,[z,(0,l.Wm)(t)]),$]),rr,er]),tr]),lr,(0,l._)("p",null,[sr,(0,l._)("a",nr,[ar,(0,l.Wm)(t)]),ur]),ir,or,(0,l._)("table",null,[(0,l._)("thead",null,[(0,l._)("tr",null,[mr,(0,l._)("th",null,[(0,l._)("a",dr,[pr,(0,l.Wm)(t)])]),cr,hr,_r])]),(0,l._)("tbody",null,[kr,br,(0,l._)("tr",null,[gr,Tr,Ur,(0,l._)("td",null,[fr,vr,yr,(0,l._)("a",wr,[Er,(0,l.Wm)(t)]),Ir,Cr,Mr,Dr,Pr,xr,Rr,Wr,Ar,Sr]),Or]),Br])]),Lr,Kr,jr,qr],64)}]])},3744:(r,e)=>{e.Z=(r,e)=>{for(const[t,l]of e)r[t]=l;return r}},4910:(r,e,t)=>{t.r(e),t.d(e,{data:()=>l});const l={key:"v-f9e30908",path:"/intro/",title:"",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Turms 是什么",slug:"turms-是什么",children:[]},{level:2,title:"Playground",slug:"playground",children:[]},{level:2,title:"Quick Start",slug:"quick-start",children:[]},{level:2,title:"简介",slug:"简介",children:[{level:3,title:"业务功能相关特性",slug:"业务功能相关特性",children:[]},{level:3,title:"通用架构特性",slug:"通用架构特性",children:[]},{level:3,title:"其他特性",slug:"其他特性",children:[]}]},{level:2,title:"子项目",slug:"子项目",children:[]},{level:2,title:"参考架构",slug:"参考架构",children:[]},{level:2,title:"产品对比",slug:"产品对比",children:[]},{level:2,title:"关于带具体业务实现的Demo",slug:"关于带具体业务实现的demo",children:[]}],filePathRelative:"intro/README.md",git:{updatedTime:1633406311e3}}}}]);