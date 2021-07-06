(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{388:function(t,r,s){"use strict";s.r(r);var a=s(24),e=Object(a.a)({},(function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"关于二次开发"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关于二次开发"}},[t._v("#")]),t._v(" 关于二次开发")]),t._v(" "),s("h2",{attrs:{id:"申明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#申明"}},[t._v("#")]),t._v(" 申明")]),t._v(" "),s("p",[t._v("Turms基于Apache V2协议进行开发，并深入贯彻开源精神与宗旨。既欢迎其他开发者或团队的借鉴，也不担心抄袭。\n因为Turms有且只有一个目标：致力于构建全球范围内最为卓越开源即时通讯引擎。")]),t._v(" "),s("p",[t._v("对于任何二次开发者或团队，Turms后期都会不加保留为其逐步开放各种相关架构设计、技术选型、代码视图设计等文档。\n不管任何开发者或团队是借鉴还是抄袭，Turms对其提出的issues都将一视同仁，对有价值的问题都将予以热心答复。")]),t._v(" "),s("p",[t._v("因为Turms的目标很简单：致力于构建全球范围内最为卓越开源即时通讯引擎。")]),t._v(" "),s("h2",{attrs:{id:"基于turms做二次开发的原因"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基于turms做二次开发的原因"}},[t._v("#")]),t._v(" 基于Turms做二次开发的原因")]),t._v(" "),s("p",[t._v("客观原因")]),t._v(" "),s("ul",[s("li",[t._v("Turms解决方案是全球即时通讯开源领域内唯一一个基于现代化架构与现代化工程技术，并且适合中大规模部署的解决方案")]),t._v(" "),s("li",[t._v("由于Turms的架构设计是标准商用即时通讯架构的变种，因此如果您的专业团队是以常见的商用标准为要求，您的团队设计出来的架构也与Turms现在的架构相差不多的，没有必要另起炉灶从零自研")]),t._v(" "),s("li",[t._v("Turms整个架构其实还是比较简洁与轻量的，二次开发难度不高")])]),t._v(" "),s("p",[t._v("主观原因")]),t._v(" "),s("ul",[s("li",[t._v("您项目的核心业务与即时通讯相关，或者有深耕于即时通讯业务的计划")]),t._v(" "),s("li",[t._v("您项目所需要的拓展功能Turms目前暂未提供，尤其是需要通过辅助索引表来实现的拓展功能（关于辅助索引表，可查看"),s("a",{attrs:{href:"https://turms-im.github.io/docs/for-developers/schema.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Turms集合设计"),s("OutboundLink")],1),t._v("）")])]),t._v(" "),s("h2",{attrs:{id:"培训"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#培训"}},[t._v("#")]),t._v(" 培训")]),t._v(" "),s("h3",{attrs:{id:"架构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#架构"}},[t._v("#")]),t._v(" 架构")]),t._v(" "),s("h4",{attrs:{id:"技术架构简述-todo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#技术架构简述-todo"}},[t._v("#")]),t._v(" 技术架构简述（TODO）")]),t._v(" "),s("h4",{attrs:{id:"业务请求流程-todo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#业务请求流程-todo"}},[t._v("#")]),t._v(" 业务请求流程（TODO）")]),t._v(" "),s("h3",{attrs:{id:"开发"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开发"}},[t._v("#")]),t._v(" 开发")]),t._v(" "),s("h4",{attrs:{id:"代码拉取"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码拉取"}},[t._v("#")]),t._v(" 代码拉取")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("git clone https://github.com/turms-im/turms.git")])]),t._v(" "),s("li",[s("p",[t._v("由于Turms各子项目的proto模型文件放在一个独立的仓库之中，因此您还需要通过以下命令来拉取submodule中的代码。")])])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("git submodule update --init --recursive\ngit submodule foreach git pull origin master\n")])])]),s("h4",{attrs:{id:"关于依赖库的使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关于依赖库的使用"}},[t._v("#")]),t._v(" 关于依赖库的使用")]),t._v(" "),s("p",[t._v("很多依赖库热衷于对底层实现进行抽象与封装，以达到内部逻辑透明，使用者不用关心背后的逻辑。这样的设计对于一些逻辑简单、要求快速上线、且不追求极限性能的应用来说比较实用。但随着一个项目越往后发展，越深入优化，这个不可控的抽象层，会成为问题排查、极限优化、定制化功能实现的绊脚石。抽象层带来的问题，诸如：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("需求迭代与版本更新严重滞后。如果我们的项目使用了一个抽象层的A依赖，A依赖封装了B依赖。如果我们需要往B依赖添加一个新特性或改Bug，通常的流程是：我们向B依赖的社区提Issue，运气好的话，平均2~4天得到回复。如果运气还很好，对方愿意改。假设改动不大，1周后相关PR被merged。可能等2周、1个月、甚至几个月，B依赖终于发布新版本。然后我们还要等A依赖更新B依赖版本，可能又过了2周、1个月、甚至几个月。等真到我们能使用到新特性，可能几个月已经过了。但更多的情况是，B依赖的维护者压根不愿意修改相关代码。")])]),t._v(" "),s("li",[s("p",[t._v("绝大部分知名依赖库，只关心功能实现，并不关心性能。以一些网络框架对于出入站数据的处理为例。通常情况下，性能最糟糕的就是底层框架只支持接受byte[]（因为刷到网卡时，又要进行一次内存拷贝），并在处理过程中反复拷贝内存（其目的通常是降低编码难度）。其实很多的知名Java依赖库的代码质量并不高，甚至代码性能或质量堪忧，诸如数据结构乱用、该Cache的地方不Cache，长期不进行重构，使得代码耦合度极高等问题。")])]),t._v(" "),s("li",[s("p",[t._v("关注于抽象实现的依赖库在与响应式编程结合时，在问题排查问题上，会给开发者带来地狱级的体验，尤其是Bug与需要手动释放的内存相关。在常规问题排查上，我们通常可以通过栈信息来很快的排查出问题。但在响应式编程中，这样的方法通常行不通，我们更多的靠逻辑推理来排查问题。即熟读上下游代码（包括依赖包内的代码），推演代码可能经过的所有流程。")]),t._v(" "),s("p",[t._v("如果代码的抽象层少、且调用关系扁平，这个排查过程其实很简单，可能我们只用在一个类内的几十行代码上扫几眼，就能大概知道出现问题的原因了。但如果流程中，使用到了大量“封装、抽象，用户无需关注底层实现逻辑”依赖库，地狱级体验就来了。原本我们可能只需要一个小数十行的函数就能实现所有相关逻辑。但如果基于抽象库去实现相关功能，我们在问题排查时，可能要查看的代码可能是A(A1,A2,A3...)类->B(B1,B2,B3...)类->C(C1,C2,C3...)类->...，在数十个类、数十个方法间跳转推理，是家常便饭。其中最典型的对照例子就是：Turms的"),s("code",[t._v("im.turms.gateway.access.websocket.factory.WebSocketFactory#getHttpRequestHandler")]),t._v("在一个小数十行的函数内实现了一组WebSocket握手逻辑。但如果这套逻辑让Spring来实现，它会将各个不同包下的类，各种逻辑东拼西凑地混在一起，在问题排查时，如果还伴随着一些需要手动释放的内存，地狱级的问题排查体验就来了。")])]),t._v(" "),s("li",[s("p",[t._v("部分依赖库在一些地方会自行Suppress异常，上层应用代码无法感知。由于出问题的时候，底层库代码与上层应用代码在大部分情况下，是跑在不同的栈上的。除非底层依赖库支持全局的异常回调，否则上层应用甚至无法感知异常的发生。对于一些Trivial级别的错误，上层应用感知不到也没关系。但如果是一些上层应用非常关注的异常（如RPC的TCP连接的异常断开），这将是引发整个系统异常与失序的导火索了。")])])]),t._v(" "),s("p",[t._v("为了避免上述问题，Turms项目在引用一个类库时，通常不引入抽象封装库（如Spring），而仅引入实现库。对相关需要性能优化或逻辑优化的点，直接在Turms项目内修改。结合考虑到自研的难易程度与代码可控性，我们在大部分情况下会尽可能选择自研。")]),t._v(" "),s("h4",{attrs:{id:"关于基础服务实现方案的选型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关于基础服务实现方案的选型"}},[t._v("#")]),t._v(" 关于基础服务实现方案的选型")]),t._v(" "),s("p",[t._v("如今微服务领域的基础服务实现方案百花齐放。以配置中心的实现方案为例，其实现方案就有：K8S的ConfigMaps、云服务厂商的配置服务（如AWS的AppConfig）、开源实现（如Zookeeper）。作为Turms作为一个技术中立的开源项目，其技术栈绝不能被厂商所绑定。但与此同时，又要保证这些实现能够很方便地获得云服务厂商的支持，以让运维人员“点点鼠标就能实现与部署了”。同时又要满足容灾、高可用、可监控、易操作等多种关键特性，因此Turms通过MongoDB自研实现配置中心实现，以满足上述的所有要求。")]),t._v(" "),s("p",[t._v("（补充：因为服务注册中心的“服务信息”本质上来说也是一种配置，因此Turms的服务注册与发现也是基于该配置中心开发的）")]),t._v(" "),s("h4",{attrs:{id:"插件开发"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#插件开发"}},[t._v("#")]),t._v(" 插件开发")]),t._v(" "),s("p",[t._v("参考 "),s("a",{attrs:{href:"https://turms-im.github.io/docs/for-developers/custom-plugin.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("插件开发"),s("OutboundLink")],1)]),t._v(" "),s("h4",{attrs:{id:"配置项开发-todo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置项开发-todo"}},[t._v("#")]),t._v(" 配置项开发（TODO）")]),t._v(" "),s("h3",{attrs:{id:"测试-todo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#测试-todo"}},[t._v("#")]),t._v(" 测试（TODO）")])])}),[],!1,null,null,null);r.default=e.exports}}]);