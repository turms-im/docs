(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{450:function(t,v,_){"use strict";_.r(v);var r=_(24),e=Object(r.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"配置参数"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#配置参数"}},[t._v("#")]),t._v(" 配置参数")]),t._v(" "),_("h2",{attrs:{id:"重要性"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#重要性"}},[t._v("#")]),t._v(" 重要性")]),t._v(" "),_("p",[t._v("即时通讯的业务场景繁多，因此不同业务对硬件资源有着"),_("strong",[t._v("天差地别")]),t._v("的要求（比如：需要数据库的架构与不需要数据库的架构）。 为了有效利用服务器资源，请务必细心了解Turms服务端所提供的配置参数。")]),t._v(" "),_("p",[t._v("以一个场景为例： A应用是一款主要面向商务客户的即时通讯应用。这款应用有一个需求：当一名用户在商务群发出一条消息后，该用户能够得知群组中其他"),_("strong",[t._v("每一名用户")]),t._v("是否已读该消息，就算该用户发完消息就下线了，当其再次上线时，仍能查询其他人对该消息的已读状态。 而B应用是一款直播弹幕聊天应用，它对消息的处理非常随意。当一名用户在一个直播频道发出一条消息后，该用户不仅无需得知其他用户的已读状态，甚至连消息本身都不要求存储（即无离线消息需求）")]),t._v(" "),_("p",[t._v("以上两个场景，直接决定了Turms是否需要存储Message与MessageStatus（Turms之后还会提供一种不需要存储MessageStatus数据，只存消息版本号的实现）。对于A应用，如果一个商务群有100名用户，当其中一名用户发出一条消息时，Turms需要存储1条Message与99条MessageStatus记录。对于B应用，如果一个直播频道有100名，当其中一名用户发出一条消息时，Turms需要存储0条Message与0条MessageStatus记录。")]),t._v(" "),_("p",[t._v("并且如果对于B应用还设置了“enableAuthentication=false”、“allowSendMessagesToStranger=true”等配置，在B应用的架构设计中甚至可以连数据库都不需要。因此二者对硬件需求有质的不同。")]),t._v(" "),_("h2",{attrs:{id:"配置分类"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#配置分类"}},[t._v("#")]),t._v(" 配置分类")]),t._v(" "),_("p",[t._v("Turms属性分为三大类配置：Turms Service配置、Turms Gateway配置，以及Common通用配置。Turms Service配置对应turms服务端独有的配置，Turms Gateway配置对应turms-gateway服务端独有的配置，而Common通用配置可以被turms和turms-gateway服务端共用。")]),t._v(" "),_("p",[t._v("每个类别中的属性都能通过application.yaml配置（提醒：因为Turms采用了Spring提供的ConfigurationMetadataAnnotationProcessor，因此如果您曾在本地compile Turms项目的话，当您在本地IDEA IDE输入Turms相关配置的时，IDE会提供配置提示与补全功能），并且对于标有MutablePropertiesView注释的属性，您都能通过供管理员专用的API接口在Turms集群运行时进行零停机实时更新。")]),t._v(" "),_("p",[t._v("由于所有的配置项高达上百个，直接看代码比看文档更加直观，因此推荐您直接查阅im.turms.server.common.property目录下各配置类，下文仅对大的分类做简要介绍。")]),t._v(" "),_("h3",{attrs:{id:"tumrs-service配置"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tumrs-service配置"}},[t._v("#")]),t._v(" Tumrs Service配置")]),t._v(" "),_("h4",{attrs:{id:"非业务相关类"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#非业务相关类"}},[t._v("#")]),t._v(" 非业务相关类")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("类")]),t._v(" "),_("th",[t._v("字段名")]),t._v(" "),_("th",[t._v("描述")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("AdminApiProperties")]),t._v(" "),_("td",[t._v("adminApi")]),t._v(" "),_("td",[t._v("管理员API接口相关配置")])]),t._v(" "),_("tr",[_("td",[t._v("DatabaseProperties")]),t._v(" "),_("td",[t._v("database")]),t._v(" "),_("td",[t._v("MongoDB数据库相关配置")])]),t._v(" "),_("tr",[_("td",[t._v("DiscoveryProperties")]),t._v(" "),_("td",[t._v("discovery")]),t._v(" "),_("td",[t._v("管理员API服务对外暴露的Advertise相关配置")])]),t._v(" "),_("tr",[_("td",[t._v("LogProperties")]),t._v(" "),_("td",[t._v("log")]),t._v(" "),_("td",[t._v("日志相关配置")])]),t._v(" "),_("tr",[_("td",[t._v("MockProperties")]),t._v(" "),_("td",[t._v("mock")]),t._v(" "),_("td",[t._v("Mock数据相关配置")])]),t._v(" "),_("tr",[_("td",[t._v("TurmsRedisProperties")]),t._v(" "),_("td",[t._v("redis")]),t._v(" "),_("td",[t._v("Redis数据库相关配置")])])])]),t._v(" "),_("h4",{attrs:{id:"业务相关类"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#业务相关类"}},[t._v("#")]),t._v(" 业务相关类")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("类")]),t._v(" "),_("th",[t._v("字段名")]),t._v(" "),_("th",[t._v("描述")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("MessageProperties")]),t._v(" "),_("td",[t._v("message")]),t._v(" "),_("td",[t._v("消息服务相关配置")])]),t._v(" "),_("tr",[_("td",[t._v("GroupProperties")]),t._v(" "),_("td",[t._v("group")]),t._v(" "),_("td",[t._v("群组相关配置")])]),t._v(" "),_("tr",[_("td",[t._v("UserProperties")]),t._v(" "),_("td",[t._v("user")]),t._v(" "),_("td",[t._v("用户相关配置")])]),t._v(" "),_("tr",[_("td",[t._v("StorageProperties")]),t._v(" "),_("td",[t._v("storage")]),t._v(" "),_("td",[t._v("存储相关配置")])]),t._v(" "),_("tr",[_("td",[t._v("NotificationProperties")]),t._v(" "),_("td",[t._v("notification")]),t._v(" "),_("td",[t._v("通知相关配置")])]),t._v(" "),_("tr",[_("td",[t._v("StatisticsProperties")]),t._v(" "),_("td",[t._v("statistics")]),t._v(" "),_("td",[t._v("统计相关配置")])])])]),t._v(" "),_("h4",{attrs:{id:"turms-gateway配置"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#turms-gateway配置"}},[t._v("#")]),t._v(" Turms Gateway配置")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("类")]),t._v(" "),_("th",[t._v("字段名")]),t._v(" "),_("th",[t._v("描述")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("DatabaseProperties")]),t._v(" "),_("td",[t._v("database")]),t._v(" "),_("td",[t._v("MongoDB数据库相关配置")])]),t._v(" "),_("tr",[_("td",[t._v("DiscoveryProperties")]),t._v(" "),_("td",[t._v("discovery")]),t._v(" "),_("td",[t._v("网关对外暴露的Advertise相关配置")])]),t._v(" "),_("tr",[_("td",[t._v("ClientApiProperties")]),t._v(" "),_("td",[t._v("clientApi")]),t._v(" "),_("td",[t._v("面向客户端的HTTP接入层相关配置（即ReasonController的相关配置）")])]),t._v(" "),_("tr",[_("td",[t._v("LogProperties")]),t._v(" "),_("td",[t._v("log")]),t._v(" "),_("td",[t._v("日志相关配置")])]),t._v(" "),_("tr",[_("td",[t._v("PluginProperties")]),t._v(" "),_("td",[t._v("plugin")]),t._v(" "),_("td",[t._v("插件相关配置")])]),t._v(" "),_("tr",[_("td",[t._v("SimultaneousLoginProperties")]),t._v(" "),_("td",[t._v("simultaneousLogin")]),t._v(" "),_("td",[t._v("多端登录相关配置")])]),t._v(" "),_("tr",[_("td",[t._v("SessionProperties")]),t._v(" "),_("td",[t._v("session")]),t._v(" "),_("td",[t._v("会话相关配置")])]),t._v(" "),_("tr",[_("td",[t._v("TurmsRedisProperties")]),t._v(" "),_("td",[t._v("redis")]),t._v(" "),_("td",[t._v("Redis数据库相关配置")])])])]),t._v(" "),_("h4",{attrs:{id:"common通用配置"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#common通用配置"}},[t._v("#")]),t._v(" Common通用配置")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("类")]),t._v(" "),_("th",[t._v("字段名")]),t._v(" "),_("th",[t._v("描述")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("ClusterProperties")]),t._v(" "),_("td",[t._v("cluster")]),t._v(" "),_("td",[t._v("集群相关配置。包括配置当前运行节点信息、服务发现注册信息、配置中心信息、RPC参数")])]),t._v(" "),_("tr",[_("td",[t._v("IpProperties")]),t._v(" "),_("td",[t._v("ip")]),t._v(" "),_("td",[t._v("公网IP探测相关配置")])]),t._v(" "),_("tr",[_("td",[t._v("SecurityProperties")]),t._v(" "),_("td",[t._v("security")]),t._v(" "),_("td",[t._v("用户与管理员密码加密相关配置")])]),t._v(" "),_("tr",[_("td",[t._v("PluginProperties")]),t._v(" "),_("td",[t._v("plugin")]),t._v(" "),_("td",[t._v("插件相关配置")])]),t._v(" "),_("tr",[_("td",[t._v("LocationProperties")]),t._v(" "),_("td",[t._v("location")]),t._v(" "),_("td",[t._v("用户坐标相关配置")])]),t._v(" "),_("tr",[_("td",[t._v("UserStatusProperties")]),t._v(" "),_("td",[t._v("userStatus")]),t._v(" "),_("td",[t._v("用户会话（连接）状态相关配置")])])])])])}),[],!1,null,null,null);v.default=e.exports}}]);