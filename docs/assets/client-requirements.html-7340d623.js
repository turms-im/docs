import{_ as o,M as s,p as r,q as c,R as t,t as e,N as l}from"./framework-7f102627.js";const u={},d=t("h1",{id:"版本要求",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#版本要求","aria-hidden":"true"},"#"),e(" 版本要求")],-1),i=t("p",null,"Turms客户端对版本的最低要求，主要是根据：平台全球市场占有率、平台TLSv1.2最低支持版本与代码实现的优雅程度，三个因素来考量。另外，Turms不提供对TLSv1与TLSv1.1等被时代淘汰协议的官方支持。",-1),_=t("thead",null,[t("tr",null,[t("th",null,"平台"),t("th",null,"支持的最低版本"),t("th",null,"原因"),t("th")])],-1),a=t("tr",null,[t("td",null,"Android"),t("td",null,"21+"),t("td",null,"考虑到21+的市场占有率与代码实现优雅程度，故支持21+"),t("td")],-1),h=t("td",null,"iOS",-1),m=t("td",null,"12.0+",-1),p={href:"https://developer.apple.com/support/app-store/",target:"_blank",rel:"noopener noreferrer"},S=t("code",null,"NWConnection",-1),k=t("br",null,null,-1),f=t("code",null,"CFStreamCreatePairWithSocketToHost",-1),T=t("td",null,null,-1),b=t("td",null,"浏览器",-1),C={href:"https://caniuse.com/?search=websocket",target:"_blank",rel:"noopener noreferrer"},L=t("td",null,[e("对于IE系列浏览器，turms-client-js仅对IE 11提供官方支持。"),t("br"),e("另外，turms-client-js不会将WebSocket降级为轮询机制")],-1),v=t("td",null,null,-1),N=t("tr",null,[t("td",null,"桌面端"),t("td",null,[e("turms-client-kotlin(JDK8+)"),t("br"),e("turms-client-js(Node.js 8+)")]),t("td",null,[e("如果您采用turms-client-kotlin实现，则要求JDK版本为8(+)，因为JDK 8+默认提供对TLSv1.2的支持。"),t("br"),e("如果您采用turms-client-js实现，则Turms提供对Node.js 8+的官方支持")]),t("td")],-1),x=t("p",null,"补充",-1),j=t("ul",null,[t("li",null,[e("turms-client-kotlin采用的是"),t("code",null,"Socket"),e("，而非"),t("code",null,"SocketChannel"),e("。其中最主要的原因是：Android SDK不对"),t("code",null,"SocketChannel"),e("提供一套标准的TLS协议实现，需要自行实现。考虑到安卓系统的五花八门且系统功能本身就比较受限（尤其相比服务端实现），自行实现TLS协议极易导致各种意料之外的Bugs，故使用"),t("code",null,"Socket"),e("以采用官方的TLS协议实现。")])],-1);function E(W,B){const n=s("ExternalLinkIcon");return r(),c("div",null,[d,i,t("table",null,[_,t("tbody",null,[a,t("tr",null,[h,m,t("td",null,[e("考虑到"),t("a",p,[e("iOS 12.0+在全球的市场占有率"),l(n)]),e("以及苹果产品用户的习惯，turms-client-swift采用NWConnection实现TCP协议，因此设备版本的要求等同于支持"),S,e("设备的版本要求。"),k,e("另外，turms-client-swift不会考虑用古老的"),f,e("来实现TCP协议。")]),T]),t("tr",null,[b,t("td",null,[t("a",C,[e("支持WebSocket协议的浏览器"),l(n)])]),L,v]),N])]),x,j])}const I=o(u,[["render",E],["__file","client-requirements.html.vue"]]);export{I as default};