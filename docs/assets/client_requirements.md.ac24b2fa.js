import{_ as e,c as t,o,R as r}from"./chunks/framework.b6850781.js";const f=JSON.parse('{"title":"Version Requirements","description":"","frontmatter":{},"headers":[],"relativePath":"client/requirements.md"}'),s={name:"client/requirements.md"},i=r('<h1 id="version-requirements" tabindex="-1">Version Requirements <a class="header-anchor" href="#version-requirements" aria-label="Permalink to &quot;Version Requirements&quot;">​</a></h1><p>The minimum requirements for the version of the Turms client are mainly based on three factors: the global market share of the platform, the minimum supported version of TLSv1.2 on the platform, and the elegance of code implementation. In addition, Turms does not provide official support for obsolete protocols such as TLSv1 and TLSv1.1.</p><table><thead><tr><th>Platform</th><th>Minimum supported version</th><th>Reason</th></tr></thead><tbody><tr><td>Android</td><td>21+</td><td>Considering the market share of 21+ and the elegance of code implementation, it supports 21+</td></tr><tr><td>iOS</td><td>12.0+</td><td>Considering the global market share of <a href="https://developer.apple.com/support/app-store/" target="_blank" rel="noreferrer">iOS 12.0+</a> and the habits of Apple product users, turms-client-swift adopts <code>NWConnection</code> to implement the TCP protocol, so the device version requirements are equivalent to those of devices supporting <code>NWConnection</code>. <br>In addition, turms-client-swift will not consider using the ancient <code>CFStreamCreatePairWithSocketToHost</code> to implement the TCP protocol.</td></tr><tr><td>Browser</td><td><a href="https://caniuse.com/?search=websocket" target="_blank" rel="noreferrer">Browser that supports WebSocket protocol</a></td><td>For IE browsers, turms-client-js only provides official support for IE 11. <br>Also, turms-client-js will not downgrade WebSocket to polling.</td></tr><tr><td>Desktop</td><td>turms-client-kotlin(JDK8+)<br>turms-client-js(Node.js 8+)</td><td>If you use turms-client-kotlin, the JDK version is required to be 8(+), because JDK 8+ provides support for TLSv1.2 by default. <br>Turms provides official support for Node.js 8+ if you use turms-client-js.</td></tr></tbody></table><p>Note:</p><ul><li>turms-client-kotlin uses <code>Socket</code> instead of <code>SocketChannel</code>. The main reason is that the Android SDK does not provide a set of standard TLS protocol implementations for <code>SocketChannel</code>, which needs to be implemented by itself. Considering the variety of Android systems and the limited system functions (especially compared to server-side implementations), self-implementation of the TLS protocol can easily lead to various unexpected bugs, so use <code>Socket</code> to implement the official TLS protocol .</li></ul>',5),n=[i];function a(d,c,l,p,m,u){return o(),t("div",null,n)}const _=e(s,[["render",a]]);export{f as __pageData,_ as default};
