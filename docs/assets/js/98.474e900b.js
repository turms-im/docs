(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{450:function(p,t,v){"use strict";v.r(t);var _=v(25),e=Object(_.a)({},(function(){var p=this,t=p.$createElement,v=p._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":p.$parent.slotKey}},[v("p",[p._v("传输协议与格式")]),p._v(" "),v("p",[p._v("XMPP的意义在于：提供标准，以实现多厂商间的产品能够互联通信。但也正是因为其标准化与，导致其灵活性差，限制了除了企业内部通讯，现代即时通讯应用。对于现代即时通讯应用，XMPP的价值是提供即时通讯领域中常见的需求规范文档。")]),p._v(" "),v("p",[p._v("Turms的网络层协议设计与大部分现代商业即时通讯方案的设计几乎一样， 即：")]),p._v(" "),v("p",[p._v("TCP -> WebSocket（安全层）->pb")]),p._v(" "),v("p",[p._v("从底层往上层看，传输层采用TCP的。早期一些即时通讯应用采用UDP的原因是：当时没有epoll这种可以支持成千上万tcp并发连接的技术,所以他们使用了udp,然后在udp上面封装了一下,模拟了一下tcp,解决了大并发的问题,之后因为做的很nb了,虽然epoll这种技术出现了,还是没有改回使用tcp了.现在再做类似的东西就不需要使用udp了.")]),p._v(" "),v("p",[p._v("背景")]),p._v(" "),v("ul",[v("li",[v("p",[p._v("早期网络环境差，UDP的带宽利用比TCP更高。接入带宽很窄而且抖动特别厉害（例如延时突发性地暴增、路由层面的变化导致路由黑洞）。")]),p._v(" "),v("p",[p._v("TCP因为拥塞控制、保证有序等原因，在这种网络状态上对带宽的利用是非常低的。而且因为网络抖动的原因，应用层心跳超时（一般不依靠keepalive）应用层主动断掉socket之后TCP需要三次握手才能重新建立链接，一旦出现频繁的小抖动就会使得带宽利用更低。而等待四次挥手的时间，也会占用服务器上宝贵的资源。")]),p._v(" "),v("p",[p._v("UDP在这种情况下的表现。使用UDP对抗网络抖动，说到底就是在应用层比TCP更快地探测和重传，一旦超过一定的时间没有收到回复，客户端可以选择马上重试或者换一个IP：PORT重试（假如你的服务像QQ一样有多个接入），在服务器端则可以果断地断掉socket。而可以应用UDP的时候，往往是你的应用层协议本身已经具备了一定的面向连接的特性。如果你应用层的协议已经达到了一定程度的消息幂等，客户端可以几乎无脑地进行重传，这样就可以尽可能地降低网络抖动的影响，同时也可以尽可能地利用整个带宽。而刚好QQ的协议，就具备类似的特点。")]),p._v(" "),v("p",[p._v("简单来说就是我们可以使用UDP实现一个面向连接协议，这个协议可以很好地适应当时的网络状况和QQ本身的业务。但凡事都有成本，成本就是你的应用层协议本身需要去实现抵抗网络异常带来的问题。例如乱序、例如业务数据的分片和重组、例如网络状态探测等等等等")]),p._v(" "),v("p",[p._v("而现在UDP也应用在很多跨运营商、跨地域、跨机房之间的服务调用当中。原因无它，就是网络烂到一定程度了。")])]),p._v(" "),v("li",[v("p",[p._v("因为当时没有epoll这种可以支持成千上万tcp并发连接的技术,所以他们使用了udp,然后在udp上面封装了一下,模拟了一下tcp,解决了大并发的问题,之后因为做的很nb了,虽然epoll这种技术出现了,还是没有改回使用tcp了.现在再做类似的东西就不需要使用udp了.")])])]),p._v(" "),v("p",[p._v("到了移动互联网时代，鉴于移动网络的不可靠性等特点，再加上手机的省电策略、流量压缩等")]),p._v(" "),v("p",[p._v("TUrms")])])}),[],!1,null,null,null);t.default=e.exports}}]);