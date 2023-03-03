import{_ as a,M as l,p as u,q as n,R as e,t,N as r,a1 as o}from"./framework-7f102627.js";const i={},c=o('<h1 id="架构设计" tabindex="-1"><a class="header-anchor" href="#架构设计" aria-hidden="true">#</a> 架构设计</h1><h2 id="架构特性" tabindex="-1"><a class="header-anchor" href="#架构特性" aria-hidden="true">#</a> 架构特性</h2><h3 id="通用架构特性" tabindex="-1"><a class="header-anchor" href="#通用架构特性" aria-hidden="true">#</a> 通用架构特性</h3>',3),d=e("li",null,"（敏捷性）支持在用户无感知的情况下，对Turms服务端进行停机更新，为快速迭代提供可能",-1),m=e("li",null,"（可伸缩性）无状态架构，Turms集群支持弹性扩展与异地多活的部署实现，用户可通过DNS就近接入",-1),h=e("li",null,"（可部署性）支持容器化部署，方便与云服务对接，以实现全自动化部署与运维",-1),p=e("li",null,"（可观测性）具备相对完善的可观测性体系设计，为业务统计与错误排查提供可能",-1),g=e("li",null,"（可拓展性）能同时支持中大型即时通讯场景，即便用户体量由小变大也无需重构（当然，对于大型运用场景还有很多优化的工作需要做，但当前架构不影响后期的无痛升级）",-1),_=e("li",null,"（安全性）提供限流防刷机制与用户/IP黑名单机制，以抵御大部分CC攻击",-1),T={href:"https://turms-im.github.io/docs/for-developers/architecture.html",target:"_blank",rel:"noopener noreferrer"},y=e("li",null,"Turms使用MongoDB分片架构，以支持请求路由（如读写分离），同时也支持跨地域多活部署与数据主主同步，为大规模跨国部署提供实际操作的可能",-1),S=o('<h2 id="架构说明" tabindex="-1"><a class="header-anchor" href="#架构说明" aria-hidden="true">#</a> 架构说明</h2><p><img src="https://raw.githubusercontent.com/turms-im/assets/master/turms/reference-architecture.png" alt="参考架构图"></p><h3 id="与其他im项目的架构区别" tabindex="-1"><a class="header-anchor" href="#与其他im项目的架构区别" aria-hidden="true">#</a> 与其他IM项目的架构区别</h3><p>跟Turms服务端的代码实现一样，Turms的架构设计也是非常“抠门”的，能尽量不拆的服务就不拆，能尽量不引入的外部服务就不引入，具体体现在：</p>',4),w=e("p",null,[t("在部分IM项目的架构设计中，它们会把turms-gateway的"),e("code",null,"会话管理"),t("、"),e("code",null,"中转消息缓存"),t("、"),e("code",null,"消息发送"),t("三大块功能独立分成三个服务，来实现业务解耦与流量削峰。但其相比Turms的架构而言，多增加了两个故障点，增加了开发与运维难度，且需要使用RPC操作，吞吐量也更差。具体而言：")],-1),f=e("code",null,"中转消息缓存的消息队列",-1),D={href:"https://turms-im.github.io/docs/for-developers/observability.html",target:"_blank",rel:"noopener noreferrer"},P=e("code",null,"会话管理",-1),I=e("code",null,"消息发送",-1),b=e("p",null,[t("在流量削峰方面，如今早已是云服务的天下，弹性伸缩服务（Auto Scaling）相比消息队列（如Kafka、RocketMQ或其他云服务）更适合实现流量削峰。各云服务厂商均提供资源监控功能，而弹性伸缩服务能根据各种系统指标（如CPU/内存利用率）与自定义的其他指标（如在线用户数）自动弹性伸缩，在资源闲置的时候又能自动释放，更符合现代运维模式。以AWS云服务为例，运维人员可以使用"),e("code",null,"CloudWatch"),t("监听上述的Turms服务端度量数据，并配合"),e("code",null,"Application Auto Scaling"),t("做自动化的服务器资源扩缩容。如果运维人员熟悉这些操作，从零开始购买这些云服务到配置完成，大概只需3~10分钟。")],-1),C=e("p",null,[t("在高可用方面，部分IM架构会使用高可用（多可用区部署）的消息队列云服务与自研的消息发送服务来消费该队列，以保证通知不丢。但在Turms的架构设计中，就算Turms的消息推送服务端turms-gateway被强制关闭（如硬件故障，服务器直接宕机），Turms服务端集群也能自愈。并且因为在Turms的流程设计中，基于Turms客户端开发的应用本身每次在与Turms重连时（对应"),e("code",null,"turmsClient.userService.addOnOnlineListener(...)"),t("这一回调函数）需要发送请求与新连接上的Turms服务端做数据同步，因此消息与状态也不会turms-gateway的宕机或是网络断开而丢失。")],-1),A=e("p",null,"一些IM项目之所以强行进行解耦，引入消息队列，甚至是在同时在线用户数只有或不足数十万的时候就引入消息队列，只是因为部分人员为了给自己的简历润色、提升自己的不可替代性，而徒增项目所需技术栈，对项目进行过度设计。",-1),B=e("p",null,"一般只有基于Serverless架构，给中小型IM场景的云架构设计的时候，消息队列才能最大地发挥作用。依旧以上述场景与AWS为例，用户可以将通知发送给AWS SQS，保证消息服务的高可用，再基于Lambda函数做消息推送，保证通知不丢。在这样的架构设计中，用户没有自研的服务。",-1),M=e("p",null,"另外，之所以说Serverless架构在IM场景中最多只适用于中小型IM场景是因为：",-1),k={href:"https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html",target:"_blank",rel:"noopener noreferrer"},W=e("li",null,[e("p",null,"相比基于Serverless架构做开发，设计与实现自研的IM服务会简单与可控地非常多。盲目追求更“时尚”的Serverless架构，不一定进步，也可能是退步。")],-1),v=o("<li><p>在部分IM项目的架构设计中，它们会把<code>会话管理</code>再拆成<code>网络连接管理</code>与<code>会话逻辑管理</code>两个服务，来实现停机更新<code>会话逻辑管理</code>服务时，客户端不需要断开与<code>网络连接管理</code>服务的连接。但考虑到turms-gateway几乎没什么会话业务逻辑，既有的业务逻辑也很固定，主要的业务逻辑都是在turms-service里实现的，因此turms-gateway很少有停机更新业务逻辑的需要。综上，把将网络连接与会话逻辑拆分成两个独立服务对Turms而言还为时过早，既增加了故障点，性能折损也大，又没什么收益，故Turms架构暂不对<code>会话管理</code>再进行拆分。</p></li>",1),R=e("p",null,"额外补充：",-1),L={href:"https://turms-im.github.io/docs/for-developers/rules.html",target:"_blank",rel:"noopener noreferrer"},x={href:"https://docs.hazelcast.com/imdg/4.2/data-structures/map",target:"_blank",rel:"noopener noreferrer"},N={href:"https://ignite.apache.org/docs/latest/key-value-api/basic-cache-operations",target:"_blank",rel:"noopener noreferrer"},E=e("h3",{id:"turms架构与云架构的关系",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#turms架构与云架构的关系","aria-hidden":"true"},"#"),t(" Turms架构与云架构的关系")],-1),F=e("p",null,"由于目前（2022年）AWS仍是全球云计算市场份额排名第一的云厂商，因此下文主要基于AWS云架构进行讲解。",-1),U=e("li",null,[e("p",null,"Turms的架构设计既要保证其技术方案不强制依赖任何云服务，以保持技术中立，避免技术栈与任何厂商绑定，让不上云的用户也可以轻松部署一整套Turms服务端（如基于Kubernetes），又要保证Turms所使用的技术方案都必须要有云厂商的支持，以此保证上云的用户可以通过各个厂商的云服务轻松部署一整套高可用的Turms服务端。"),e("p",null,"对于Turms服务端的核心IM功能，该需求并不怎么影响Turms发布核心特性，因为上不上云这些功能都是一样的实现方式。"),e("p",null,[t("但对于一些IM拓展功能，如文件存储与数据分析等功能，它们的实现就比较麻烦了，因为我们得把各种方案都考虑、设计与实现一遍。以业务数据分析为例，如果Turms绑定AWS厂商做架构设计，那业务数据分析功能实现起来就非常简单了，大体来说就是基于Turms服务端提供的业务日志，提供一套CloudFormation配置，其中根据不同用户的需求与配置，发布"),e("code",null,"（最省事，但不省钱）CloudWatch Logs Insights"),t("、"),e("code",null,"(基于S3省钱，但不实时）CloudWatch Logs => S3 => Ahtena/QuickSight"),t("、"),e("code",null,"(基于S3省钱，且引入Kinesis Firehose保证数据实时推送）CloudWatch Logs => Kinesis Firehose => S3 => Athena/QuickSight"),t("或其他数据分析方案实现。但Turms又得满足不上云或者不想用其他第三方服务的用户需求，所以后期还得自研一套数据分析方案。因此工作量就会大的多，拓展功能的发布速度也就会慢得多。")]),e("p",null,"但是如上所述，如果用户有条件使用第三方服务对Turms提供的业务日志做专业地数据分析，也就不必等待Turms提供解决方案了。")],-1),V=e("p",null,"Turms的云架构设计很简单。",-1),q=e("li",null,[e("p",null,"Turms的云架构只是云架构的子集。相比中大型混合云的企业云架构设计（企业云架构设计不仅包括各个项目的部署架构设计，也包括组织架构设计、混合云网络架构设计等等），虽然Turms在开源界可以算是中大型项目了，但给这样体量的项目做云架构设计还是相当简单的，对云服务有基本了解的用户都应该能理解Turms的云架构设计。")],-1),H={href:"https://turms-im.github.io/docs/for-developers/getting-started.html#%E8%87%AA%E5%8A%A8%E6%90%AD%E5%BB%BA%E4%B8%8E%E5%90%AF%E5%8A%A8",target:"_blank",rel:"noopener noreferrer"},K=e("p",null,"Turms的云架构中相对麻烦的一点是：部分云厂商不直接支持MongoDB服务。比如AWS就不直接支持高版本的MongoDB服务，尽管AWS有提供兼容低版本MongoDB的DocumentDB服务，但由于MongoDB公司与AWS厂商的竞争关系，AWS目前也只能将DocumentDB兼容的最新MongoDB版本锁死在4.0版本号，且维护力度也比较低。总体而言，DocumentDB服务有些鸡肋且发展前景不好，更推荐直接用MongoDB Atlas服务。",-1),Q=e("p",null,"但因为MongoDB是AWS的合作伙伴，所以用户还是可以通过VPC Peering的方式轻松地将MongoDB Atlas企业级服务集成进AWS当中，部署起来。",-1),z=o('<h3 id="客户端访问服务端标准流程" tabindex="-1"><a class="header-anchor" href="#客户端访问服务端标准流程" aria-hidden="true">#</a> 客户端访问服务端标准流程</h3><p>该流程为客户端访问服务端标准流程，也是Turms架构实现水平扩展的过程，您可以根据实际情况进行调整。</p><ul><li><p>当客户端需要与turms-gateway服务端建立TCP连接时，客户端可以通过<code>DNS服务</code>来查询接入层服务端域名对应的IP地址，而该IP地址指向<code>SLB/ELB服务</code>（通常基于LVS与Nginx）、<code>全球加速服务</code>、或<code>turms-gateway</code>，具体如何搭配要根据您实际应用的需求与规模而定。该DNS服务端可以配置一个或多个公网IP地址（生产环境中切勿配置真实IP地址，以缓解DDoS攻击），并通过轮询或其他策略返回给客户端一个IP地址。补充：</p><ul><li><p>无论Turms客户端使用的是纯TCP协议，还是上层的WebSocket协议，turms-gateway的上游服务（DNS/SLB等）都应该根据客户端IP地址进行TCP连接的负载均衡。</p></li><li><p>强烈建议您开启SLB服务的<code>Sticky Session</code>功能，让会话始终与一个turms-gateway服务端进行连接。这么做的好处是能缓解很大一部分DDoS攻击。因为turms-gateway提供客户端自动封禁机制，能够迅速检测并封禁本地有异常行为的IP或用户，但turms-gateway服务端之间同步封禁客户端数据默认时间间隔约10~15秒，因此如果关闭了<code>Sticky Session</code>功能，黑客就能利用封禁数据同步间隔这段时间，切换与turms-gateway的TCP连接，进行DDoS攻击。</p></li><li><p>通常情况下，您应该将SSL证书放在turms-gateway的上游服务端，即上游的SLB服务或Nginx服务端等。</p></li><li><p>由于turms-gateway采用了无状态的架构设计，因此任意客户端可以连接到任意一个turms-gateway服务端上，您也可以弹性增删turms-gateway节点，以实现弹性水平拓展；状态（即用户会话信息）被转移到了分布式内存Redis服务端当中。</p></li></ul></li><li><p>客户端拿到IP地址，并与turms-gateway成功建立TCP连接之后，turms-gateway会检测该IP是否已被封禁，或者turms-gateway自身负载是否过大，如果是，则主动断开TCP连接。否则，放行TCP连接。</p></li><li><p>如果turms-gateway放行TCP连接，</p><ul><li>对于使用纯TCP连接的Turms客户端，客户端可以开始发起<code>TurmsRequest</code>的Protobuf数据流。该数据流由ZigZag编码的<code>正文长度</code>头，与Protobuf编码的<code>正文</code>，这两部分组成。</li><li>对于使用WebSocket连接的Turms客户端，客户端会在TCP连接建立成功后，向turms-gateway发起HTTP Upgrade请求，请求将HTTP Upgrade成WebSocket协议。如果升级成功，客户端就可以把Protobuf编码的<code>TurmsRequest</code>数据放在WebSocket Binary Frame的正文中，并发送给turms-gateway。</li></ul><p>注意：这时Turms客户端只是与turms-gateway建立的网络层连接，但用户尚未<code>登陆</code>，也并没有建立<code>会话信息</code>。</p></li><li><p>该数据流经过负载均衡服务端（可选）的转发后，会先到达turms-gateway。turms-gateway会先对该数据流进行简单的Protobuf格式校验（不校验具体业务请求的合法性，是为了与turms服务端进行业务逻辑解耦，以实现turms服务端对业务请求格式进行更新后，turms-gateway不需要停机），如果是非法数据流，则直接断开TCP连接。</p><p>否则，若为合法请求，则会对其进行部分解析，以确认turms-gateway能否自行处理这个请求。举例来说，对于<code>登陆</code>与<code>登出</code>这两个请求，turms-gateway就能自行处理。</p></li><li><p>如果turms-gateway能够自行处理，则在处理后返回响应。如果无法处理，则再检测用户是否已在本机登陆，如果没有登陆，则拒绝执行请求，并发回响应。如果已登陆，则先根据负载均衡策略从可用的turms-service服务端列表中选出一个turms-service服务端，再通过自研的RPC框架将请求转发给该turms-service服务端，让其进行处理。</p><ul><li><p>如果turms-gateway检测到该客户端请求是<code>登陆请求</code>，则turms-gateway会根据<code>用户ID</code>与请求登陆的<code>设备类型</code>构成一个<code>会话ID</code>，并根据Redis或本地缓存中的用户会话信息，判断该会话ID是否与已登陆会话冲突。如果发生冲突，则拒绝其进行上线操作，并发回响应，告知客户端被拒绝登陆的原因。否则，将当前用户会话信息注册到Redis，并发回登陆成功响应。此时，用户进入了<code>在线</code>状态。</p><p>注意：</p><ul><li><p>一个会话ID（用户ID+设备）在同一时刻只会与一个turms-gateway服务端构成<code>用户会话</code>，与一个turms-gateway服务端构成TCP连接。用户后续的所有业务请求都是在这一个会话与TCP连接中完成的，直到会话关闭、用户下线。</p></li><li><p>一个用户ID下的不同设备可以在同一时刻与不同的turms-gateway服务端构成<code>用户会话</code>，无论这些设备是否来自不同的IP。</p><p>但推荐让一个用户ID下的所有设备始终与一个turms-gateway连接，因为：1. 如果登陆到同个turms-gateway，服务端在转发消息或通知给一个用户时，只需把其字节流发送给一个turms-gateway服务端，而不是多个，以减低系统资源开销、增加吞吐量；2. 在同个turms-gateway的同一用户的所有设备会共享会话的心跳时钟，因此可以减少turms-gateway发送给Redis的TTL心跳刷新的请求数；3. 如果服务端开启了用户状态缓存，在转发消息或通知时可能使用的是尚未更新的用户状态，因此新消息可能不会马上发送给新登陆的设备。</p></li></ul></li><li><p>如果turms-gateway无法处理该客户端请求，则通过RPC服务将客户端请求下发给turms-service。turms-service服务端在收到客户端请求后，会对请求进行校验与处理，并触发<code>ClientRequestHandler</code>插件以协助开发者实现自定义逻辑（如敏感词过滤），另外在处理过程中通常也会向mongos发送对应的CRUD请求。等用户请求处理完毕后，turms-service会将产生的<code>响应</code>，发回给turms-gateway。对于处理过程中产生的<code>通知</code>，turms-service会先根据被通知用户的ID，向Redis或本地缓存查询该批用户所连接的turms-gateway的节点ID，并通过RPC服务将通知发送给这批turms-gateway，让其进行通知下推操作。</p><p>补充：Turms采用MongoDB的分片副本架构。mongos收到CRUD请求后，会根据配置进行CRUD请求路由。</p></li><li><p>无论turms-gateway接收到的是响应还是通知，turms-gateway都不会对其进行合法性校验，而是直接透传给用户。在通知下推过程中，turms-gateway会触发<code>NotificationHandler</code>插件方法以协助开发者实现自定义逻辑（如离线用户的消息推送）。</p></li></ul><p>（值得一提的是，Turms的所有网络IO操作都是基于Netty实现的，即以上所有RPC、数据库调用均是异步非阻塞的）</p></li></ul>',3);function O(Z,j){const s=l("ExternalLinkIcon");return u(),n("div",null,[c,e("ol",null,[d,m,h,p,g,_,e("li",null,[t("（简单性）核心架构“轻量”，方便学习与二次开发（原因请查阅 "),e("a",T,[t("Turms架构设计"),r(s)]),t("）")]),y]),S,e("ul",null,[e("li",null,[w,e("p",null,[t("在业务解耦方面，部分IM项目会通过"),f,t("来实现下游消费者异步消费消息来实现各种统计功能。但通过消费消息队列中的数据来实现消息的统计是很糟糕的设计，更全面、更专业与更简易的实现是分布式采集与分析业务日志（如基于AWS厂商的CloudWatch Logs => Kinesis Firehose => S3 => Athena/QuickSight方案），这点在"),e("a",D,[t("可观察体系"),r(s)]),t("的日志小节有具体说明。而turms-gateway的"),P,t("与"),I,t("之间的逻辑并不复杂，解耦的意义不大，故没这方面需求。")]),b,C,A,B,M,e("ul",null,[e("li",null,[e("p",null,[t("Lambda服务是有很多额度限制的，参考"),e("a",k,[t("Lambda quotas"),r(s)]),t("。")])]),W])]),v]),R,e("ul",null,[e("li",null,[t("Turms服务端的代码实现也非常“抠门”的原因："),e("a",L,[t("开发基本规约"),r(s)])]),e("li",null,[t("其实Turms在早期设计中，考虑过连Redis这样的分布式内存服务也不用，而是采用另一种也很常见的分布式内存实现方案，即：采用类似于"),e("a",x,[t("Hazelcast的分布式Map"),r(s)]),t("或"),e("a",N,[t("Ignite的分布式Cache"),r(s)]),t("的设计实现，让Turms服务端之间自行通过分布式Map做分布式数据同步，从而减少对外部服务的依赖。但考虑到集群的高可用设计、Turms服务端自身的发布流程设计等等，因此最终还是引入了Redis服务来实现分布式内存。")])]),E,F,e("ul",null,[U,e("li",null,[V,e("ul",null,[q,e("li",null,[e("p",null,[t("Turms的云架构很常规。如果用户有部署过其他常规Web服务的云架构，部署Turms起来也差不多，尤其是Turms提供了"),e("a",H,[t("多种部署方案"),r(s)]),t("，甚至还有基于的Terraform方案，来帮助用户自动购买与配置云服务的方案。")]),K,Q])])])]),z])}const J=a(i,[["render",O],["__file","architecture.html.vue"]]);export{J as default};
