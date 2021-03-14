(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{464:function(e,v,_){"use strict";_.r(v);var t=_(24),p=Object(t.a)({},(function(){var e=this,v=e.$createElement,_=e._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("h2",{attrs:{id:"传输协议与格式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#传输协议与格式"}},[e._v("#")]),e._v(" 传输协议与格式")]),e._v(" "),_("p",[e._v("XMPP的意义在于：提供标准，以实现多厂商间的产品能够互联通信。但也正是因为其标准化与，导致其灵活性差，限制了除了企业内部通讯，现代即时通讯应用。对于现代即时通讯应用，XMPP的价值是提供即时通讯领域中常见的需求规范文档。")]),e._v(" "),_("p",[e._v("Turms的网络层协议设计与大部分现代商业即时通讯方案的设计几乎一样， 即：")]),e._v(" "),_("p",[e._v("TCP -> WebSocket（安全层）->pb")]),e._v(" "),_("p",[e._v("从底层往上层看，传输层采用TCP的。早期一些即时通讯应用采用UDP的原因是：当时没有epoll这种可以支持成千上万tcp并发连接的技术,所以他们使用了udp,然后在udp上面封装了一下,模拟了一下tcp,解决了大并发的问题,之后因为做的很nb了,虽然epoll这种技术出现了,还是没有改回使用tcp了.现在再做类似的东西就不需要使用udp了.")]),e._v(" "),_("p",[e._v("背景")]),e._v(" "),_("ul",[_("li",[_("p",[e._v("早期网络环境差，UDP的带宽利用比TCP更高。接入带宽很窄而且抖动特别厉害（例如延时突发性地暴增、路由层面的变化导致路由黑洞）。")]),e._v(" "),_("p",[e._v("TCP因为拥塞控制、保证有序等原因，在这种网络状态上对带宽的利用是非常低的。而且因为网络抖动的原因，应用层心跳超时（一般不依靠keepalive）应用层主动断掉socket之后TCP需要三次握手才能重新建立链接，一旦出现频繁的小抖动就会使得带宽利用更低。而等待四次挥手的时间，也会占用服务器上宝贵的资源。")]),e._v(" "),_("p",[e._v("UDP在这种情况下的表现。使用UDP对抗网络抖动，说到底就是在应用层比TCP更快地探测和重传，一旦超过一定的时间没有收到回复，客户端可以选择马上重试或者换一个IP：PORT重试（假如你的服务像QQ一样有多个接入），在服务器端则可以果断地断掉socket。而可以应用UDP的时候，往往是你的应用层协议本身已经具备了一定的面向连接的特性。如果你应用层的协议已经达到了一定程度的消息幂等，客户端可以几乎无脑地进行重传，这样就可以尽可能地降低网络抖动的影响，同时也可以尽可能地利用整个带宽。而刚好QQ的协议，就具备类似的特点。")]),e._v(" "),_("p",[e._v("简单来说就是我们可以使用UDP实现一个面向连接协议，这个协议可以很好地适应当时的网络状况和QQ本身的业务。但凡事都有成本，成本就是你的应用层协议本身需要去实现抵抗网络异常带来的问题。例如乱序、例如业务数据的分片和重组、例如网络状态探测等等等等")]),e._v(" "),_("p",[e._v("而现在UDP也应用在很多跨运营商、跨地域、跨机房之间的服务调用当中。原因无它，就是网络烂到一定程度了。")])]),e._v(" "),_("li",[_("p",[e._v("因为当时没有epoll这种可以支持成千上万tcp并发连接的技术,所以他们使用了udp,然后在udp上面封装了一下,模拟了一下tcp,解决了大并发的问题,之后因为做的很nb了,虽然epoll这种技术出现了,还是没有改回使用tcp了.现在再做类似的东西就不需要使用udp了.")])])]),e._v(" "),_("p",[e._v("到了移动互联网时代，鉴于移动网络的不可靠性等特点，再加上手机的省电策略、流量压缩等")]),e._v(" "),_("p",[e._v("用WebSocket的原因：")]),e._v(" "),_("ol",[_("li",[e._v("在生态圈方面，成熟的WebSocket第三方依赖极大地简化了重复的TCP与SSL层开发工作。例如在Java平台中，不同的设备有着不同的SSL配置方式，导致SSL的配置错综复杂，稍有不慎就容易陷入无限的适配与改Bug过程中，更有甚者设备内核自身有Bug（如：在android 8.0中，调用socket.connect方法会抛出ClassCastException。https://issuetracker.google.com/issues/63649622）。因此")]),e._v(" "),_("li",[e._v("在WebSocket的overhead方面，其一WebSocket的frame极小，对于Turms而言单个frame的冗余数据约为1至2字节，无伤大雅（一个常用汉字在UTF-8编码下就占了2至4个字节）。另外，关于WebSocket的overhead的争论还聚焦在握手阶段，但是一方面，Turms将握手的HTTP请求当做登录请求来用，因此对Turms而言WebSocket并没有多余的握手步骤。另一方面，虽然用于握手的HTTP请求基于文本编码，不如二进制编码高效，但是登录请求（即握手请求）发生频率低，可以接受。")]),e._v(" "),_("li",[e._v("另外，与SSL握手过程与数据加解密过程相比，WebSocket带来的overhead就微乎其微了。SSL不仅加了一层加密层将传输数据变得更大，加解密算法的执行还是CPU密集型操作，即占用CPU也占用内存（当然，SSL作为网络传输的安全保障还是必须要配置的。另外，这也是Turms默认不开启WebSocket压缩的原因）。与其在网络协议上下功夫，将精力放在具体的代码优化与业务流程优化上会更有意义。")])]),e._v(" "),_("p",[e._v("TUrms")]),e._v(" "),_("p",[e._v("采用UDP有3个关键点：")]),e._v(" "),_("ul",[_("li",[e._v("网络带宽需求较小，而实时性要求高；")]),e._v(" "),_("li",[e._v("大部分应用无需维持连接；")]),e._v(" "),_("li",[e._v("需要低功耗。")])]),e._v(" "),_("p",[e._v("现在的移动端IM、推送系统，既面对移动互联网的不确定性，又面对智能终端频繁的系统休眠、网络切换，还要考虑服务端的承载成本，对于在线服务而言UDP是比TCP更适合的方式。但是由于数据完整性、安全性的需要，又不应完全放弃TCP的可靠与安全。")]),e._v(" "),_("p",[e._v("所以，个人认为，更恰当的方式应该是：两种通信协议同时使用，各有侧重。UDP用于保持大量终端的在线与控制，应用与业务则通过TCP去实现。这个和FTP服务控制与数据分离，采取不同的连接，有异曲同工之处。")]),e._v(" "),_("p",[e._v("如果只是为了传输的效率，可以选UDP，如果不能接受丢包，那还是TCP吧，虽然差点，但也不过分；")])])}),[],!1,null,null,null);v.default=p.exports}}]);