(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{380:function(t,v,_){"use strict";_.r(v);var r=_(24),a=Object(r.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"状态感知"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#状态感知"}},[t._v("#")]),t._v(" 状态感知")]),t._v(" "),_("p",[t._v("状态感知分为两大类，一类是用户在线状态感知，另一类是业务模型状态感知（如收到新消息、群成员发送变化）。")]),t._v(" "),_("p",[t._v("额外提醒：由于状态感知的实现策略")]),t._v(" "),_("ol",[_("li",[t._v("合理的需求（通常不合理的需求，如：一个群内可以有10000名用户，当一名用户发送消息时，要保证这条消息能100%地传送给其他9999名用户，并且用户能够拉取几年前的聊天信息）")]),t._v(" "),_("li",[t._v("质量属性之间的平衡（如：是否真的有必要为了兼容极端情况，而设计大量的兜底策略，既大幅度地增加了开发成本，也让服务端总体的吞吐量下降）")])]),t._v(" "),_("h2",{attrs:{id:"用户在线状态感知"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#用户在线状态感知"}},[t._v("#")]),t._v(" 用户在线状态感知")]),t._v(" "),_("p",[t._v("简而言之，Turms通过心跳包来检测用户TCP连接的健康状态并以此判断用户是否“在线”。另外，如果您不关心底层实现，您仅需阅读："),_("a",{attrs:{href:"https://turms-im.github.io/docs/for-developers/client-api.html#%E4%BC%9A%E8%AF%9D%E7%9A%84%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F",target:"_blank",rel:"noopener noreferrer"}},[t._v("客户端API——会话的生命周期"),_("OutboundLink")],1),t._v("。")]),t._v(" "),_("h3",{attrs:{id:"具体原理-拓展知识"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#具体原理-拓展知识"}},[t._v("#")]),t._v(" 具体原理（拓展知识）")]),t._v(" "),_("h4",{attrs:{id:"背景"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[t._v("#")]),t._v(" 背景")]),t._v(" "),_("p",[t._v("从网络传输层来看，TCP只是一个虚拟的连接，需要通过双向的消息传递与消息确认来模拟物理连接，因此如果客户端与服务端之间的连接实际上断开了，但在没有完成四次挥手（即没有完成指定的消息传递与确认）的情况下，TCP仍然判定该连接属于保持状态（如果此时试图从该TCP连接中读取数据，则会抛出带有类似于“An existing connection was forcibly closed by the remote host”消息的异常）。因此对于基于TCP协议开发的上层即时通讯应用而言，如果我们不做额外的工作，服务端就只能错误认为“该用户处于在线状态”。")]),t._v(" "),_("h4",{attrs:{id:"tcp没完成四次挥手的常见原因"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tcp没完成四次挥手的常见原因"}},[t._v("#")]),t._v(" TCP没完成四次挥手的常见原因")]),t._v(" "),_("ul",[_("li",[t._v("客户端：客户端应用被强制关闭")]),t._v(" "),_("li",[t._v("服务端：负载持续过高无法响应；服务器直接宕机，导致服务端应用被强制关闭")]),t._v(" "),_("li",[t._v("链路中间路由：意外中断（如：移动接入网NAT超时）")])]),t._v(" "),_("h4",{attrs:{id:"应对异常断开连接的方案"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#应对异常断开连接的方案"}},[t._v("#")]),t._v(" 应对异常断开连接的方案")]),t._v(" "),_("p",[t._v("为了保证服务端能感知到“用户下线”了的状态，Turms客户端会在上一个任意类型请求（如发送消息请求）的定长时间间隔后（暂不支持根据网络状况配置智能心跳），向服务端发送心跳包来维护其“在线状态”。服务端在收到客户端发来的心跳包或者其他业务请求后，都会在Redis服务端处刷新客户端的在线状态，以此来保活。")]),t._v(" "),_("h2",{attrs:{id:"业务模型状态感知"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#业务模型状态感知"}},[t._v("#")]),t._v(" 业务模型状态感知")]),t._v(" "),_("p",[t._v("为了让用户能感知业务模型状态的变化（增删改），Turms支持推模式（服务端主动通知）、拉模式（客户端主动拉取机制。支持按Timeline拉取）以及推拉结合模式，以在实时性与资源消耗之间取得平衡，并让开发者能够自行调整实时性与资源消耗之间的权重。")]),t._v(" "),_("h3",{attrs:{id:"感知方式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#感知方式"}},[t._v("#")]),t._v(" 感知方式")]),t._v(" "),_("h4",{attrs:{id:"方式一-推模式-服务端主动通知"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#方式一-推模式-服务端主动通知"}},[t._v("#")]),t._v(" 方式一：推模式（服务端主动通知）")]),t._v(" "),_("p",[t._v("推模式指的是：当某个业务模型发生变化时（由于增删改操作），服务端将主动通知相关在线用户该事件的发生。而当客户端收到通知时，Turms客户端会触发NotificationService中的onNotification回调函数。该函数的参数为TurmsRequest对象，表明触发该事件的请求。")]),t._v(" "),_("p",[t._v("通知相关行为可以根据：im.turms.server.common.property.env.service.business.NotificationProperties 类进行配置。每一种通知类型都可以单独配置，并且所有通知相关配置均可在集群运行时进行动态更新。")]),t._v(" "),_("h5",{attrs:{id:"示例"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),_("p",[t._v("以im.turms.turms.property.business.Notification#notifyMembersAfterGroupUpdate这个属性为例。该属性用于控制“当群组信息发生变化时，是否通知群组成员”。这里的群组信息指的是：群组名称、群组类型、群组禁言时间等这样具有全局性的群组信息。")]),t._v(" "),_("p",[t._v("如果您将该属性值设置为true，则当群组信息发生变化时，群组成员的客户端都将收到触发该变化的通知。否则，群组成员客户端不会收到任何通知。")]),t._v(" "),_("h5",{attrs:{id:"评价"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#评价"}},[t._v("#")]),t._v(" 评价")]),t._v(" "),_("p",[t._v("通知机制可以保证通知能实时地传递给相关用户，但其缺点就在于它很容易导致无意义的资源消耗（以具体业务场景为准）。比如用户A已经加入了100个群组，但该用户平时只查看其中3个群组的信息。这种场景下，如果100个群组的所有状态变化都开启了通知机制，则不管是服务端还是客户端都需要浪费大量资源去处理这些无意义的通知（因为该用户从来不看这些通知）。")]),t._v(" "),_("p",[t._v("为了解决该类问题，以及满足其他常见需求（如：要求当时离线的用户在上线时也能检测到业务模型是否发生变化；要求在线用户在通知被关闭的情况下也能感知业务模型的变化），Turms还提供了拉模式（客户端主动拉取）让用户来感知业务模型的变化。")]),t._v(" "),_("h4",{attrs:{id:"方式二-拉模式-客户端主动拉取。支持按timeline拉取"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#方式二-拉模式-客户端主动拉取。支持按timeline拉取"}},[t._v("#")]),t._v(" 方式二：拉模式（客户端主动拉取。支持按Timeline拉取）")]),t._v(" "),_("p",[t._v("为了弥补上述提到的推模式的不足，Turms还提供了拉模式。")]),t._v(" "),_("h5",{attrs:{id:"大概实现"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#大概实现"}},[t._v("#")]),t._v(" 大概实现")]),t._v(" "),_("p",[t._v("Turms的每个业务模型都带有一个版本信息，这个版本信息记录了该业务模型最后一次更新的时间。当客户端向服务端请求资源时，可以携带客户端最后一次更新该业务模型的时间（也可以不带），Turms服务端会对这个版本信息与当前业务模型的版本信息进行比对，如果客户端发来的版本信息早于当前业务模型的版本信息，则Turms服务端会返回最新的业务模型数据，否则抛出状态码NO_CONTENT，在客户端处则会收到空数据。")]),t._v(" "),_("h5",{attrs:{id:"常见拉取时机-同步时机"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#常见拉取时机-同步时机"}},[t._v("#")]),t._v(" 常见拉取时机（同步时机）")]),t._v(" "),_("ul",[_("li",[t._v("当您的应用被切换到前台时")]),t._v(" "),_("li",[t._v("会话重新连接上时")]),t._v(" "),_("li",[t._v("根据具体业务而定（看下文示例）")])]),t._v(" "),_("h5",{attrs:{id:"示例-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#示例-2"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),_("p",[t._v("继续以上述的案例为例。假设我们希望群组成员之间能够实时感知其他群组成员资料信息的变化。那如果我们采用通知机制，假设每个群除了用户A还有其他100名在线用户，则用户A的资料信息变化，需要向其他10000（100群*100人/群）名群组成员发送通知，这在实际运用中是绝对不可取的。")]),t._v(" "),_("p",[t._v("在实际运用中，通常会在特定时机（比如在用户打开某名用户的个人信息UI界面时，或者打开和某人的聊天窗口时），才让客户端主动请求服务端该用户的信息。同时，通过版本对比，减少无意义的资源浪费。")]),t._v(" "),_("p",[t._v("这种时刻注意实时性与资源消耗的设计要牢记在心中，以免设计出不切实际的应用场景。")]),t._v(" "),_("h3",{attrs:{id:"客户端对用户行为感知的实时性与服务端延迟"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#客户端对用户行为感知的实时性与服务端延迟"}},[t._v("#")]),t._v(" 客户端对用户行为感知的实时性与服务端延迟")]),t._v(" "),_("p",[t._v("以拉黑用户的相关实现为例，Turms默认对用户关系进行1分钟的缓存，以避免频发查询数据库，这是合理的行为。如果此时用户A“拉黑”了用户B，那么可能会出现：虽然用户A拉黑了用户B，但在有缓存的这段时间里，用户B仍然有可能可以给用户A发送消息（因为Turms服务端是分布式集群，关系缓存与接收拉黑请求操作的服务端不是一个服务端）。"),_("strong",[t._v("这种行为对Turms服务端是可以接受的（而不是Bug）")]),t._v("。")]),t._v(" "),_("p",[t._v("其合理且理想的参考解决方案是：在客户端的业务层面上（业务逻辑由您控制，而非由Turms客户端控制），就算Turms服务端发送给Turms客户端消息，您的客户端也应该根据您产品自身的业务逻辑，再做一次是否已拉黑用户判断，如果是，则隐藏不显示。")]),t._v(" "),_("h2",{attrs:{id:"消息感知"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#消息感知"}},[t._v("#")]),t._v(" 消息感知")]),t._v(" "),_("h3",{attrs:{id:"读扩散与写扩散"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#读扩散与写扩散"}},[t._v("#")]),t._v(" 读扩散与写扩散")]),t._v(" "),_("p",[t._v("总的来说，Turms架构基于读扩散消息模型设计，未来可能会辅之以写扩散做配合。")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th"),t._v(" "),_("th",[t._v("读扩散")]),t._v(" "),_("th",[t._v("写扩散")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("含义")]),t._v(" "),_("td",[t._v("1. 每名用户跟与其聊天的其他用户或群都有一个独立会话（也叫做信箱或Timeline）。"),_("br"),t._v("2. 当用户发送消息时，只需要对消息进行一次写操作（操作数与会话内成员数无关）。"),_("br"),t._v("3. 当用户查询消息时，需要向服务端发送请求来拉取每一个会话的消息")]),t._v(" "),_("td",[t._v("1. 每名用户有且仅有一个信箱。"),_("br"),t._v("2. 当用户发送消息时，需要把这条消息写到该会话内的所有成员信箱里。"),_("br"),t._v("3. 当用户查询消息时，只需要从自己的信箱里读取消息")])]),t._v(" "),_("tr",[_("td",[t._v("优势场景")]),t._v(" "),_("td",[t._v("用户会话（私聊会话与群里会话）相对少，群人数多的常见")]),t._v(" "),_("td",[t._v("适合私聊会话相对多，但群会话少且群人数也少的场景")])]),t._v(" "),_("tr",[_("td",[t._v("劣势场景")]),t._v(" "),_("td",[t._v("用户的会话数量，且读的频繁")]),t._v(" "),_("td",[t._v("单个群的用户数多，且发送消息频发")])]),t._v(" "),_("tr",[_("td",[t._v("技术实现")]),t._v(" "),_("td",[t._v("可以通过副本架构，对读请求进行负载均衡")]),t._v(" "),_("td",[t._v("1. 写操作难以进行负载均衡"),_("br"),t._v("2. 更新消息、撤回消息等功能实现成本巨大（分布式一致性问题与消息风暴）")])]),t._v(" "),_("tr",[_("td",[t._v("消息可靠性")]),t._v(" "),_("td",[t._v("如产品对消息可靠性有较高的要求（保证消息不丢，保证消息内容一致），读扩散对应的实现相对简单，且性能比写扩散好得多")]),t._v(" "),_("td",[t._v("为保证消息写入到每位群成员的信箱中，需要引入弱分布式一致性事务（或强分布式一致性事务），性能低下")])]),t._v(" "),_("tr",[_("td",[t._v("总评")]),t._v(" "),_("td",[t._v("适用的产品面广。对比读扩散与写扩散各自的劣势场景，读扩散的劣势场景依然能保证较高的效率")]),t._v(" "),_("td")])])]),t._v(" "),_("p",[t._v("提醒：“撤回消息”在实现上也是一条消息（一种特殊的系统消息）。")]),t._v(" "),_("h3",{attrs:{id:"消息确认机制-acknowledge"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#消息确认机制-acknowledge"}},[t._v("#")]),t._v(" 消息确认机制（Acknowledge）")]),t._v(" "),_("p",[t._v("值得注意的是：")]),t._v(" "),_("ol",[_("li",[t._v("Turms的消息确认机制并不需要Turms服务端的参与")]),t._v(" "),_("li",[t._v("消息确认机制与业务层面“消息已读”功能是完全独立的，二者没有关联关系。")])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th"),t._v(" "),_("th",[t._v("需要服务端参与的Ack机制")]),t._v(" "),_("th",[t._v("不需要服务端参与的Ack机制")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("介绍")]),t._v(" "),_("td",[t._v("部分即时通讯架构设计中，会要求客户端在接受到消息后，间隔一定时间（如5秒、10秒等），向服务端发送消息确认请求（而不是一接受到消息就确认。一是为了提高确认处理效率，二是减少因网络延迟问题丢消息的概率）。"),_("br"),t._v("服务端记录每个会话最新的确认时间，以实现用户在对所有会话进行消息拉取时（如用户上线时），可以通过一个简单的请求去拉取确认时间至今的所有消息。")]),t._v(" "),_("td",[t._v("客户端本地存储每个会话的最后确认时间，客户端如果想获得任意其所属的会话消息，则向服务端发送对应的会话ID与确认时间，服务端会返回确认时间至今的所有消息。")])]),t._v(" "),_("tr",[_("td",[t._v("优点")]),t._v(" "),_("td",[t._v("1. 客户端实现简单，无序在本地存储会话信息")]),t._v(" "),_("td",[t._v("1. 客户端可以自定义消息拉取范围。业务适用面更广，可以很轻松支持多端消息同步功能"),_("br"),t._v("2. 服务端不需要先查一次所有会话的确认时间，再根据Ack时间拉取消息，性能更优"),_("br"),t._v("3. 不需要客户端定时发送确认请求给服务端，能够完全省去大量确认操作带来的性能开销")])]),t._v(" "),_("tr",[_("td",[t._v("缺点")]),t._v(" "),_("td",[t._v("1. 服务端需要先查一次所有会话的确认时间，再根据确认时间拉取消息，性能相对差"),_("br"),t._v("2. 对于受到的每一条消息，客户端都需要向服务端发送确认请求，然后服务端更新对应的消息状态，性能低下")]),t._v(" "),_("td",[t._v("1. 客户端发请求时，需要携带所有欲请求消息的会话ID与其对应的确认时间，请求体相对较大（但也对应了上述②的优点）"),_("br"),t._v("2. 需要开发者自行实现客户端本地数据库（如：Realm数据库。Turms未来可能会以拓展形式，帮助开发者实现本地存储功能）")])])])]),t._v(" "),_("h3",{attrs:{id:"关于消息的可达性"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#关于消息的可达性"}},[t._v("#")]),t._v(" 关于消息的可达性")]),t._v(" "),_("p",[t._v("架构设计永远是平衡的艺术，盲目承诺消息100%必达只是一种销售的说辞。好比大部分互联网应用在分布式事务的技术实现上，只会采用性能更好的弱分布式事务，而非虽然更可靠但性能低下的强分布式事务。是否需要实现100%的消息必达还是根据业务场景而定（如在直播聊天室场景，不仅不要求消息必达，甚至还会要求服务端能主动根据负载情况，抛弃用户消息）。")]),t._v(" "),_("p",[t._v("实现消息100%必达的方案也比较简单，可以通过Redis实现一个会话级别的自增ID生成服务器，保证消息ID在一个会话内递增。客户端能通过ID的递增性自行判断是否有消息丢失，如果发现消息丢失，则发请求向服务端拿取指定消息即可。")]),t._v(" "),_("p",[t._v("Turms会同时支持上述的会话级消息自增ID实现来保证消息100%必达（TODO），同时也提供基于Snowflake算法的全局自增ID实现来提供最佳的吞吐量（代价就是消息不能保证100%必达）。")]),t._v(" "),_("h3",{attrs:{id:"关于如何实现离线用户也能收到消息"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#关于如何实现离线用户也能收到消息"}},[t._v("#")]),t._v(" 关于如何实现离线用户也能收到消息")]),t._v(" "),_("p",[t._v("对于在线用户，可以通过notification属性来配置是否让服务端主动通知在线用户消息（默认为true）。对于离线用户，常见的解决方案是通过手机运营商提供的推送通道进行推送。")]),t._v(" "),_("p",[t._v("由于Turms本身不接入任何运营商，也没计划接入，您可以通过NotificationHandler插件来实现相关逻辑。该Handler提供一个handle函数，并接受消息信息、在线用户ID与离线用户ID这三个参数，您可以自行通过该函数调用厂商提供的SDK，来实现离线推送逻辑。")]),t._v(" "),_("h3",{attrs:{id:"特大群"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#特大群"}},[t._v("#")]),t._v(" 特大群")]),t._v(" "),_("p",[t._v("策略（TODO）")]),t._v(" "),_("ol",[_("li",[t._v("消息按照优先级发送")]),t._v(" "),_("li",[t._v("智能限制消息峰值，主动根据服务端状况与消息优先级丢消息")]),t._v(" "),_("li",[t._v("分桶（分小群）发消息")]),t._v(" "),_("li",[t._v("通常不需要消息漫游功能")])])])}),[],!1,null,null,null);v.default=a.exports}}]);