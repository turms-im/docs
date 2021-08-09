"use strict";(self.webpackChunkturms_docs=self.webpackChunkturms_docs||[]).push([[647],{6244:(e,r,t)=>{t.r(r),t.d(r,{default:()=>R});var a=t(6252);const l=(0,a._)("h1",{id:"架构设计",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#架构设计","aria-hidden":"true"},"#"),(0,a.Uk)(" 架构设计")],-1),s=(0,a._)("h2",{id:"背景",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#背景","aria-hidden":"true"},"#"),(0,a.Uk)(" 背景")],-1),u=(0,a.Uk)("体量调整。调整的原因是：在小型与迷你型即时通讯领域，已经有像 "),i={href:"https://github.com/RocketChat/Rocket.Chat",target:"_blank",rel:"noopener noreferrer"},d=(0,a.Uk)("Rocket Chat"),n=(0,a.Uk)(" 这样的优秀且功能完善的开源项目，即便Turms的早期架构设计中，在集群部署上有很大的性能与快速弹性扩展的优势，但由于其无独立接入层与独立用户状态管理集群的设计，导致在实际运用场景中Turms只能在中小型即时通讯领域游走，跟这些小型开源项目相比就难以大展身手了。同时也考虑到当前在全球范围内，尚未有能同时支持大中小型即时通讯场景的合格开源项目。因此做了Turms体量上的调整，也对架构进行了重构（v0.10.0）。"),h=(0,a._)("li",null,"架构重构。Turms早期架构主要针对中小型场景设计，并假定服务端更新频率低且能接收集群弹性伸缩时带来的部分用户强制下线重连，以实现“整个架构的Overhead开销最小”以及“最大程度地简化运维人员的部署与运维工作”，因此采用了无网关层且无独立用户状态管理集群的架构设计。具体实现而言，以分槽算法为根本，辅之以内嵌的Hazelcast的ReplicatedMap分布式内存来实现整个集群会话管理与用户状态管理（可查看0.9.0版本代码）。但由于体量上的调整，因此最终没有用这样的架构设计。",-1),o=(0,a.uE)('<h2 id="当前架构" tabindex="-1"><a class="header-anchor" href="#当前架构" aria-hidden="true">#</a> 当前架构</h2><p>在新版的架构中（0.10.0），Turms基于标准的商业即时通讯架构做了针对Turms的架构设计。</p><ul><li>宏观上，Turms接入了接入层（turms-gateway）与独立的用户状态管理集群（Redis），并充分利用云服务做设计（当然您也可以不用云服务，只是如果您使用云服务，您就无需进行额外的部署工作）</li><li>从具体的技术实现上来说，分布式内存的实现方案由原本的Turms基于Hazelcast自主实现转变为基于Redis集群实现。服务注册中心与配置中心的实现由原本的Turms基于Hazelcast自主实现转变为基于MongoDB集群以消息总线形式实现</li></ul><p>但Turms的架构设计仍保留了“追求简约架构”（简约不简单）的传统。诸如：</p><ul><li><s>不采用Kafka，而采用RSocket协议实现流量削峰</s></li><li>不采用专门的服务注册服务端（Consul、Zookeeper、Eureka等），而采用基于MongoDB的独立自研实现</li><li>不采用传统的微服务架构，而采用一种Turms独有的微服务架构设计。在开发与部署形式上，turms服务仍是单体架构，但turms支持通过动态配置，来实现零停机且实时地将一批服务端由原本的负责服务A，变成让其负责服务B。同时也支持在turms-gateway实时切换服务承载配重。在最终效果上看，传统微服务架构能做的，Turms的微服务架构也都能做，但远比传统微服务架构灵活</li></ul><h2 id="架构特性" tabindex="-1"><a class="header-anchor" href="#架构特性" aria-hidden="true">#</a> 架构特性</h2><h3 id="通用架构特性" tabindex="-1"><a class="header-anchor" href="#通用架构特性" aria-hidden="true">#</a> 通用架构特性</h3>',7),m=(0,a._)("li",null,"（敏捷性）支持在用户无感知的情况下，对turms服务端进行停机更新，为快速迭代提供可能",-1),c=(0,a._)("li",null,"（可伸缩性）无状态架构，支持Turms集群横向扩展；支持异地多活的部署实现",-1),p=(0,a._)("li",null,"（可部署性）支持容器化部署，方便与云服务对接，以实现全自动化部署与运维",-1),g=(0,a._)("li",null,"（可观察性）具备相对完善的可观察性体系设计，为业务统计与错误排查提供可能",-1),f=(0,a._)("li",null,"（可拓展性）能同时支持中大型即时通讯场景，即便用户体量由小变大也无需重构（当然，对于大型运用场景还有很多优化的工作需要做，但当前架构不影响后期的无痛升级）",-1),k=(0,a.Uk)("（简单性）核心架构“轻量”，方便学习与二次开发（原因请查阅 "),T={href:"https://turms-im.github.io/docs/for-developers/architecture.html",target:"_blank",rel:"noopener noreferrer"},w=(0,a.Uk)("Turms架构设计"),_=(0,a.Uk)("）"),y=(0,a._)("li",null,"Turms使用MongoDB分片副本架构，以支持请求路由（如读写分离），为大规模部署提供实际操作的可能",-1),b=(0,a.uE)('<h3 id="im架构特性-todo" tabindex="-1"><a class="header-anchor" href="#im架构特性-todo" aria-hidden="true">#</a> IM架构特性（TODO）</h3><h2 id="架构说明" tabindex="-1"><a class="header-anchor" href="#架构说明" aria-hidden="true">#</a> 架构说明</h2><p><img src="https://raw.githubusercontent.com/turms-im/assets/master/turms/reference-architecture.png" alt="参考架构图"></p><h3 id="客户端访问服务端经典流程" tabindex="-1"><a class="header-anchor" href="#客户端访问服务端经典流程" aria-hidden="true">#</a> 客户端访问服务端经典流程</h3><p>该流程为客户端访问服务端经典流程，也是Turms架构实现水平扩展的过程，您可以根据实际情况进行简化。</p><ul><li><p>当客户端需要与服务端建立连接时，客户端通过<code>DNS服务</code>来查询接入层服务端域名对应的IP地址，而该IP地址指向<code>SLB/ELB服务</code>（通常基于LVS与Nginx）、<code>全球加速服务</code>、或<code>turms-gateway</code>，具体如何搭配要根据您实际应用的需求与规模而定。该DNS服务端可以配置一个或多个公网IP地址（生产环境中切勿配置真实IP地址，以缓解DDoS攻击），并通过轮询或其他策略返回给客户端一个IP地址。</p></li><li><p>客户端拿到IP地址之后，客户端可以向该地址发起业务请求的Protobuf数据流。</p><p>补充：通常情况下，您应该将SSL/TLS证书放在turms-gateway的上游服务端，即上游的SLB服务或Nginx服务端等</p></li><li><p>该数据流经过负载均衡服务端（可选）的转发后，会先到达turms-gateway。turms-gateway会先对该数据流进行简单的Protobuf格式校验（不校验具体业务请求的合法性，是为了与turms服务端进行业务逻辑解耦，以实现turms服务端对业务请求格式进行更新后，turms-gateway不需要停机），如果是非法数据流，则直接断开TCP连接。否则，若为合法请求，则会对其进行部分解析，以确认turms-gateway能够自行处理这个请求。如果能够自行处理则在处理后返回响应，如果无法处理，则先根据负载均衡策略从可用的turms服务端列表中选出一个turms服务端，再通过自研的RPC框架将请求转发给turms服务端。</p><p>补充：由于turms-gateway采用了无状态的架构设计，因此任意用户可以连接到任意一个turms-gateway服务端上，您也可以弹性增删turms-gateway节点，以实现弹性水平拓展；状态（即用户会话信息）被转移到了分布式内存Redis服务端当中。</p></li><li><p>turms服务端收到RPC请求（包裹着用户请求）后，对其进行校验与处理（处理过程中通常会发送对应的CRUD请求至mongos进行处理），并将产生的响应与通知，发回给turms-gateway。</p><p>补充：Turms采用MongoDB的分片副本架构。mongos收到CRUD请求后，会根据配置进行请求路由</p></li><li><p>对于响应，turms-gateway不对其进行合法性校验，而是直接透传给用户。对于通知，turms-gateway会先查询通知所涉及到的用户，再通过Redis查询该批用户各自所连接的turms-gateway地址，并触发NotificationHandler插件方法以协助开发者实现自定义逻辑（如：实现离线用户的消息推送功能）。之后，turms-gateway会将通知转发给在线用户所连接的turms-gateway，而收到通知的turms-gateway会将该通知转发给自身所连接的对应用户。</p><p>（值得一提的是，Turms的所有网络IO操作都是基于Netty实现的，即以上所有RPC、数据库调用均是异步非阻塞的）</p><p>（值得一提的是，以上所有RPC、数据库调用均是异步非阻塞的）</p></li></ul>',6),R={render:function(e,r){const t=(0,a.up)("OutboundLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[l,s,(0,a._)("ul",null,[(0,a._)("li",null,[u,(0,a._)("a",i,[d,(0,a.Wm)(t)]),n]),h]),o,(0,a._)("ol",null,[m,c,p,g,f,(0,a._)("li",null,[k,(0,a._)("a",T,[w,(0,a.Wm)(t)]),_]),y]),b],64)}}},6567:(e,r,t)=>{t.r(r),t.d(r,{data:()=>a});const a={key:"v-5dbeae3d",path:"/for-developers/architecture.html",title:"架构设计",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"背景",slug:"背景",children:[]},{level:2,title:"当前架构",slug:"当前架构",children:[]},{level:2,title:"架构特性",slug:"架构特性",children:[{level:3,title:"通用架构特性",slug:"通用架构特性",children:[]},{level:3,title:"IM架构特性（TODO）",slug:"im架构特性-todo",children:[]}]},{level:2,title:"架构说明",slug:"架构说明",children:[{level:3,title:"客户端访问服务端经典流程",slug:"客户端访问服务端经典流程",children:[]}]}],filePathRelative:"for-developers/architecture.md",git:{updatedTime:1628550587e3}}}}]);