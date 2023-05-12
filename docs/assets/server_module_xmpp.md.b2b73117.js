import{_ as e,c as t,o as s,R as i}from"./chunks/framework.b6850781.js";const f=JSON.parse('{"title":"XMPP","description":"","frontmatter":{},"headers":[],"relativePath":"server/module/xmpp.md"}'),o={name:"server/module/xmpp.md"},a=i('<h1 id="xmpp" tabindex="-1">XMPP <a class="header-anchor" href="#xmpp" aria-label="Permalink to &quot;XMPP&quot;">​</a></h1><h2 id="background" tabindex="-1">Background <a class="header-anchor" href="#background" aria-label="Permalink to &quot;Background&quot;">​</a></h2><p>XMPP is an open instant messaging protocol based on XML.</p><p>Turms does not use the XMPP protocol itself because:</p><ul><li>It is very inefficient: <ul><li>The data format uses redundant and inefficient XML, and its metadata is often larger than the actual transmitted data.</li><li>In XMPP&#39;s process design, there are many inefficient designs, such as converting user avatar images into Base64 text for transmission, and the server needs to actively push the modified personal information of a user to other users who subscribe to their presence in the roster.</li></ul></li><li>It has poor scalability. Some articles may say that XMPP has strong scalability, but this &quot;strong scalability&quot; is only relative to those protocols with little scalability. A protocol with truly strong scalability is definitely a self-developed one.</li></ul><p>However, considering the following two points, we plan to adapt the Turms server to support the XMPP protocol in the near future:</p><ul><li><p>The XMPP ecosystem happens to make up for a deficiency of Turms, which some developers have feedbacked under the Turms project: it is still quite complicated to implement a customized IM application from scratch based on Turms, especially since they need to implement UI interfaces and adapt APIs by themselves. Therefore, Turms is more suitable for teams that want to delve into IM research and development rather than for quick product releases.</p><p>XMPP has a relatively rich client-side ecosystem, so as long as the Turms server is slightly adapted, it can provide services to XMPP clients. This allows users to quickly offer services through various UI-based XMPP clients while enjoying the benefits of Turms. When users want to create their own dedicated IM application, they can gradually phase out XMPP clients and transition to the Turms client.</p><p>Note: Due to Turms&#39; positioning, we do not consider tasks related to &quot;providing UI-based clients&quot; in our long-term plans. In other words, we will only consider providing UI-based clients after we have released customized stress testing platforms, data analysis platforms, and implemented various extensions and bug fixes for Turms. Therefore, the priority of this task is very low.</p></li><li><p>Most well-known XMPP open source server projects not only have outdated technical architecture and stacks, but also poor code quality and engineering capabilities. For example, the Tigase project, as an open source project that has been developed for decades, still makes a large number of rookie mistakes such as comparing strings using <code>==</code>, or mixing data models with business logic without any code design capabilities, which is astonishing in terms of development ability.</p><p>Although some open source XMPP servers may advertise their &quot;scalable&quot; architecture, their scalability is incomparable to that of Turms. Turms is a project that tries to achieve the ultimate in all aspects (including scalability) from a true sense of architecture, code implementation, database design, etc., so in the field of medium-to-large IM, Turms can strike a blow against them.</p></li></ul><p>Note: In fact, we do not have a plan to replace other XMPP servers with Turms server because the positioning of XMPP servers and Turms server are very different. One of the main goals of XMPP servers is to achieve open communication for instant messaging (just like email), but the support of the XMPP protocol in Turms server is mainly to allow users to quickly communicate with Turms server using XMPP clients, so as to provide services to the world quickly. Moreover, we do not have a plan to support the communication between Turms servers and other XMPP servers.</p><h2 id="implementation-principle" tabindex="-1">Implementation Principle <a class="header-anchor" href="#implementation-principle" aria-label="Permalink to &quot;Implementation Principle&quot;">​</a></h2><ul><li><p>The turms-gateway server first implements a customized XMPP server internally.</p><p>Note: Customization is necessary because Turms does not need some of the features specified by the XMPP protocol, so there is no need to implement them. However, the customized XMPP server can still be compatible with standard XMPP clients.</p></li><li><p>When the XMPP server receives requests from XMPP clients, it will convert these requests into corresponding Turms service calls. Therefore, from the perspective of subsequent calls, XMPP client requests and Turms client requests follow similar logic, ultimately achieving interoperability between XMPP clients and Turms clients.</p><p>Note:</p><ul><li>Both use &quot;similar logic&quot; because their business processes are slightly different and not a one-to-one relationship.</li><li>XMPP and Turms clients share the same account system, so one account can be used to log in to both XMPP and Turms clients.</li><li>XMPP clients do not know about the Turms clients, and vice versa. The reason why they can communicate with each other is that the turms-gateway will convert the data into the protocol format they can understand before sending it.</li></ul></li></ul>',10),r=[a];function n(l,c,u,h,p,d){return s(),t("div",null,r)}const P=e(o,[["render",n]]);export{f as __pageData,P as default};
