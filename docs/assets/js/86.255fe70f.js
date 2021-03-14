(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{445:function(t,a,r){"use strict";r.r(a);var s=r(24),e=Object(s.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"架构设计"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#架构设计"}},[t._v("#")]),t._v(" 架构设计")]),t._v(" "),r("h2",{attrs:{id:"背景"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[t._v("#")]),t._v(" 背景")]),t._v(" "),r("ul",[r("li",[t._v("体量调整。调整的原因是：在小型与迷你型即时通讯领域，已经有像 "),r("a",{attrs:{href:"https://github.com/RocketChat/Rocket.Chat",target:"_blank",rel:"noopener noreferrer"}},[t._v("Rocket Chat"),r("OutboundLink")],1),t._v(" 这样的优秀且功能完善的开源项目，即便Turms的早期架构设计中，在集群部署上有很大的性能与快速弹性扩展的优势，但由于其无独立接入层与独立用户状态管理集群的设计，导致在实际运用场景中Turms只能在中小型即时通讯领域游走，跟这些小型开源项目相比就难以大展身手了。同时也考虑到当前在全球范围内，尚未有能同时支持大中小型即时通讯场景的合格开源项目。因此做了Turms体量上的调整，也对架构进行了重构（v0.10.0）。")]),t._v(" "),r("li",[t._v("架构重构。Turms早期架构主要针对中小型场景设计，并假定服务端更新频率低且能接收集群弹性伸缩时带来的部分用户强制下线重连，以实现“整个架构的Overhead开销最小”以及“最大程度地简化运维人员的部署与运维工作”，因此采用了无网关层且无独立用户状态管理集群的架构设计。具体实现而言，以分槽算法为根本，辅之以内嵌的Hazelcast的ReplicatedMap分布式内存来实现整个集群会话管理与用户状态管理（可查看0.9.0版本代码）。但由于体量上的调整，因此最终没有用这样的架构设计。")])]),t._v(" "),r("h2",{attrs:{id:"当前架构"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#当前架构"}},[t._v("#")]),t._v(" 当前架构")]),t._v(" "),r("p",[t._v("在新版的架构中（0.10.0），Turms基于标准的商业即时通讯架构做了针对Turms的架构设计。")]),t._v(" "),r("ul",[r("li",[t._v("宏观上，Turms接入了接入层（turms-gateway）与独立的用户状态管理集群（Redis），并充分利用云服务做设计（当然您也可以不用云服务，只是如果您使用云服务，您就无需进行额外的部署工作）")]),t._v(" "),r("li",[t._v("从具体的技术实现上来说，分布式内存的实现方案由原本的Turms基于Hazelcast自主实现转变为基于Redis集群实现。服务注册中心与配置中心的实现由原本的Turms基于Hazelcast自主实现转变为基于MongoDB集群以消息总线形式实现")])]),t._v(" "),r("p",[t._v("但Turms的架构设计仍保留了“追求简约架构”（简约不简单）的传统。诸如：")]),t._v(" "),r("ul",[r("li",[t._v("不采用Kafka，而采用RSocket协议实现流量削峰")]),t._v(" "),r("li",[t._v("不采用专门的服务注册服务端（Consul、Zookeeper、Eureka等），而采用基于MongoDB的独立自研实现")]),t._v(" "),r("li",[t._v("不采用传统的微服务架构，而采用一种Turms独有的微服务架构设计。在开发与部署形式上，turms服务仍是单体架构，但turms支持通过动态配置，来实现零停机且实时地将一批服务端由原本的负责服务A，变成让其负责服务B。同时也支持在turms-gateway实时切换服务承载配重。在最终效果上看，传统微服务架构能做的，Turms的微服务架构也都能做，但远比传统微服务架构灵活")])]),t._v(" "),r("h2",{attrs:{id:"架构特性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#架构特性"}},[t._v("#")]),t._v(" 架构特性")]),t._v(" "),r("ol",[r("li",[t._v("支持用户无感知停机更新，为快速迭代提供可能")]),t._v(" "),r("li",[t._v("无状态架构，支持Turms集群横向扩展")]),t._v(" "),r("li",[t._v("支持接入安全防护层（主要就是抵御DDoS攻击，方便做流量清洗）")]),t._v(" "),r("li",[t._v("支持异地多活的部署实现")]),t._v(" "),r("li",[t._v("方便与云服务对接，实现全自动化部署与运维（Turms还将推出turms-cli来辅助运维工作）")]),t._v(" "),r("li",[t._v("能同时支持大中小型即时通讯场景，即便用户体量由小变大也无需重构（当然，对于大型运用场景还有很多优化的工作需要做，但当前架构不影响后期的无痛升级）")]),t._v(" "),r("li",[t._v("核心架构“轻量”，方便学习与二次开发（原因看下文）")]),t._v(" "),r("li",[t._v("数据库集群支持请求路由、读写分离、分片与副本架构")])]),t._v(" "),r("h2",{attrs:{id:"roadmap"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#roadmap"}},[t._v("#")]),t._v(" Roadmap")]),t._v(" "),r("ol",[r("li",[t._v("支持Turms独有的微服务架构")]),t._v(" "),r("li",[t._v("基于RSocket实现RPC背压")])])])}),[],!1,null,null,null);a.default=e.exports}}]);