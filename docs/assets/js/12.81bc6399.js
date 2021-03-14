(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{375:function(t,_,e){"use strict";e.r(_);var r=e(24),s=Object(r.a)({},(function(){var t=this,_=t.$createElement,e=t._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"多端登录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#多端登录"}},[t._v("#")]),t._v(" 多端登录")]),t._v(" "),e("h2",{attrs:{id:"登陆设备识别策略"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#登陆设备识别策略"}},[t._v("#")]),t._v(" 登陆设备识别策略")]),t._v(" "),e("ol",[e("li",[t._v("如果您在调用客户端的turmsClient.userService.login()接口时，手动配置了具体的登录设备类型，则Turms服务端识别到的最终设备类型以您的配置为准。因此您甚至可以对于iOS设备，指定以Android的身份进行登录，这种操作是被允许的。")]),t._v(" "),e("li",[t._v("如果您未手动配置具体登录设备类型，则在默认情况下，各Turms客户端会自动识别当前运行环境，并指定当前登录设备类型。\n"),e("ul",[e("li",[t._v("turms-client-js 会判断当前运行环境是浏览器还是Node.js，如果是浏览器，则以Browser身份登录，否则以Desktop身份登录")]),t._v(" "),e("li",[t._v("turms-client-java 会判断当前的运行环境是Android还是桌面系统，分别以Android、Desktop的身份登录")]),t._v(" "),e("li",[t._v("turms-client-swift 则默认以iOS身份进行登录")])])]),t._v(" "),e("li",[t._v("如果您在调用客户端turmsClient.userService.login()接口时，指定登录类型为UNKNOWN，则最终登录设备类型将由turms-gateway服务端自行根据WebSocket在握手阶段的HTTP请求头“User-Agent”来判断当前登陆用户的设备类型。如果turms-gateway无法判断登录设备类型，则保持登陆类型为UNKNOWN。")])]),t._v(" "),e("p",[t._v("相关配置类：im.turms.server.common.property.env.gateway.SessionProperties")]),t._v(" "),e("h2",{attrs:{id:"多端登录类型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#多端登录类型"}},[t._v("#")]),t._v(" 多端登录类型")]),t._v(" "),e("p",[t._v("“设备类型”指的是：Android、iOS、Desktop、Browser、Others、Unknown。\n以下是常见的多端登陆类型搭配，供您快速挑选实现。")]),t._v(" "),e("p",[t._v("配置属性：im.turms.server.common.property.env.gateway.SimultaneousLoginProperties#strategy。其他相关配置：allowDeviceTypeUnknownLogin、allowDeviceTypeOthersLogin")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[e("strong",[t._v("自带类型")])]),t._v(" "),e("th",[t._v("对应Enum值")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("允许每种设备类型的一个设备都能同时在线")]),t._v(" "),e("td",[t._v("ALLOW_ONE_DEVICE_OF_EACH_DEVICE_TYPE_ONLINE")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("仅允许一个设备类型的一个设备同时在线")]),t._v(" "),e("td",[t._v("ALLOW_ONE_DEVICE_FOR_ALL_DEVICE_TYPES_ONLINE")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("允许Desktop端的一个设备与手机端的一个设备同时在线")]),t._v(" "),e("td",[t._v("ALLOW_ONE_DEVICE_OF_DESKTOP_AND_ONE_DEVICE_OF_MOBILE_ONLINE")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("允许Desktop端或者Browser端的一个设备，与手机端的一个设备同时在线")]),t._v(" "),e("td",[t._v("ALLOW_ONE_DEVICE_OF_DESKTOP_OR_BROWSER_AND_ONE_DEVICE_OF_MOBILE_ONLINE")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("允许Desktop端的一个设备，与Browser端的一个设备，与手机端的一个设备同时在线")]),t._v(" "),e("td",[t._v("ALLOW_ONE_DEVICE_OF_DESKTOP_AND_ONE_DEVICE_OF_BROWSER_AND_ONE_DEVICE_OF_MOBILE_ONLINE")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("允许Desktop端或手机端的一个设备同时在线")]),t._v(" "),e("td",[t._v("ALLOW_ONE_DEVICE_OF_DESKTOP_OR_MOBILE_ONLINE")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("允许Desktop端或手机端或Browser端的一个设备同时在线")]),t._v(" "),e("td",[t._v("ALLOW_ONE_DEVICE_OF_DESKTOP_OR_BROWSER_OR_MOBILE_ONLINE")])])])]),t._v(" "),e("p",[e("strong",[t._v("注意")])]),t._v(" "),e("ul",[e("li",[t._v("任何多端登陆类型都不允许一个用户账号在一种设备上有多个同时登陆的设备")]),t._v(" "),e("li",[t._v("当用户登陆设备的类型有Unkown或Others情况时，需进行额外配置：允许Unkown/Others设备与其他已知设备同时登陆、不允许Unkown/Others设备与其他已知设备同时登陆")])]),t._v(" "),e("h2",{attrs:{id:"多端登陆冲突解决策略"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#多端登陆冲突解决策略"}},[t._v("#")]),t._v(" 多端登陆冲突解决策略")]),t._v(" "),e("p",[t._v("配置属性：im.turms.server.common.property.env.gateway.SimultaneousLoginProperties#loginConflictStrategy")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[e("strong",[t._v("类型")])]),t._v(" "),e("th",[t._v("对应Enum值")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("下线已上线设备")]),t._v(" "),e("td",[t._v("DISCONNECT_LOGGED_IN_DEVICES")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("拒绝预上线设备上线")]),t._v(" "),e("td",[t._v("DISCONNECT_LOGGING_IN_DEVICE")])])])])])}),[],!1,null,null,null);_.default=s.exports}}]);