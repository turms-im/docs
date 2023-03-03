import{_ as s,M as a,p as o,q as n,R as t,t as e,N as d,a1 as l}from"./framework-7f102627.js";const i={},h=t("h1",{id:"管理员api接口",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#管理员api接口","aria-hidden":"true"},"#"),e(" 管理员API接口")],-1),c={href:"https://swagger.io/specification",target:"_blank",rel:"noopener noreferrer"},g=t("p",null,"如果您需要查阅API接口文档，您可以在启动Turms服务端后，访问 http://localhost:端口号/openapi/ui 查阅API接口。如果您需要API接口的JSON格式数据，则可访问 http://localhost:端口号/openapi/docs 获取。其中，turms-gateway管理员HTTP服务端的默认端口号是9510，而turms-service则使用8510端口。",-1),u=t("p",null,"注意：在将Turms服务端部署到生产环境时，通常不需要将Turms服务端的Admin API端口开放给公网，以避免不必要的攻击。",-1),f=t("h2",{id:"接口设计准则",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#接口设计准则","aria-hidden":"true"},"#"),e(" 接口设计准则")],-1),p={href:"https://en.wikipedia.org/wiki/Representational_state_transfer",target:"_blank",rel:"noopener noreferrer"},y=l('<ul><li><p>URL的路径部分代表目标资源，如<code>/users/relationships</code>；或是资源的表现形式，如<code>/users/relationships/page</code>表示以分页的形式返回资源。一个URI有且仅可能返回一种格式的Response。</p></li><li><p>POST方法用于Create资源，DELETE方法用于Delete资源，PUT方法用于Update资源，GET方法用于Query资源，以及比较特殊的HEAD方法用于Check资源（类似于GET，但无Response body，仅通过HTTP状态码交互）</p></li><li><p>请求的Query string用于定位资源，如<code>?ids=1,2,3</code>；或是附加指令，如<code>?reset=true</code></p><p>注意：与RESTful风格不同，Turms服务端不使用请求URL路径（Path）做资源定位。如<code>GET /flight-recordings/jfr</code>下载JFR文件接口，在RESTful风格中应该是<code>GET /flight-recordings/jfr/{id}</code>，但在Turms服务端中是<code>GET /flight-recordings/jfr?id={id}</code></p></li><li><p>请求的Body用于描述要创建或更新的数据</p></li></ul><h2 id="使用管理接口的对象" tabindex="-1"><a class="header-anchor" href="#使用管理接口的对象" aria-hidden="true">#</a> 使用管理接口的对象</h2>',2),b=t("li",null,[t("p",null,"您的前端管理系统或后端服务端发出HTTP(S)请求进行调用")],-1),x={href:"https://github.com/turms-im/turms/tree/develop/turms-admin",target:"_blank",rel:"noopener noreferrer"},m=l('<p>注意：管理接口不是给终端用户使用的，而是您团队内部进行调用的。因此通常情况下，您不需要给turms-service服务端开放外网IP与端口。</p><h2 id="类别" tabindex="-1"><a class="header-anchor" href="#类别" aria-hidden="true">#</a> 类别</h2><h3 id="非业务相关类" tabindex="-1"><a class="header-anchor" href="#非业务相关类" aria-hidden="true">#</a> 非业务相关类</h3><h4 id="监控类" tabindex="-1"><a class="header-anchor" href="#监控类" aria-hidden="true">#</a> 监控类</h4><table><thead><tr><th style="text-align:left;"><strong>种类</strong></th><th style="text-align:left;"><strong>Controller</strong></th><th>路径</th><th>支持该接口的服务</th></tr></thead><tbody><tr><td style="text-align:left;">度量信息管理</td><td style="text-align:left;">MetricsController</td><td>/metrics</td><td>均支持</td></tr><tr><td style="text-align:left;">飞行记录管理</td><td style="text-align:left;">FlightRecordingController</td><td>/flight-recordings</td><td>均支持</td></tr></tbody></table><h4 id="插件类" tabindex="-1"><a class="header-anchor" href="#插件类" aria-hidden="true">#</a> 插件类</h4><table><thead><tr><th style="text-align:left;"><strong>种类</strong></th><th style="text-align:left;"><strong>Controller</strong></th><th>路径</th><th>支持该接口的服务</th></tr></thead><tbody><tr><td style="text-align:left;">插件管理</td><td style="text-align:left;">PluginController</td><td>/plugins</td><td>均支持</td></tr></tbody></table><h4 id="管理员类" tabindex="-1"><a class="header-anchor" href="#管理员类" aria-hidden="true">#</a> 管理员类</h4><table><thead><tr><th style="text-align:left;"><strong>种类</strong></th><th style="text-align:left;"><strong>Controller</strong></th><th>路径</th><th>通用</th><th><strong>补充</strong></th></tr></thead><tbody><tr><td style="text-align:left;">管理员管理</td><td style="text-align:left;">AdminController</td><td>/admins</td><td></td><td>每个Turms集群默认存在一个角色为<code>ROOT</code>，账号名与密码均为<code>turms</code>的账号</td></tr><tr><td style="text-align:left;">管理员角色管理</td><td style="text-align:left;">AdminRoleController</td><td>/admins/roles</td><td></td><td>每个Turms集群默认存在一个角色为<code>ROOT</code>的超级管理员角色，其具有所有权限</td></tr></tbody></table><h4 id="集群类" tabindex="-1"><a class="header-anchor" href="#集群类" aria-hidden="true">#</a> 集群类</h4><table><thead><tr><th style="text-align:left;"><strong>种类</strong></th><th style="text-align:left;"><strong>Controller</strong></th><th>路径</th><th>支持该接口的服务</th></tr></thead><tbody><tr><td style="text-align:left;">集群节点管理</td><td style="text-align:left;">MemberController</td><td>/cluster/members</td><td>turms-service</td></tr><tr><td style="text-align:left;">集群配置管理</td><td style="text-align:left;">SettingController</td><td>/cluster/settings</td><td>turms-service</td></tr></tbody></table><h4 id="黑名单类" tabindex="-1"><a class="header-anchor" href="#黑名单类" aria-hidden="true">#</a> 黑名单类</h4><table><thead><tr><th style="text-align:left;"><strong>种类</strong></th><th style="text-align:left;"><strong>Controller</strong></th><th>路径</th><th>支持该接口的服务</th></tr></thead><tbody><tr><td style="text-align:left;">IP黑名单管理</td><td style="text-align:left;">IpBlocklistController</td><td>/blocked-clients/ips</td><td>turms-service</td></tr><tr><td style="text-align:left;">用户黑名单管理</td><td style="text-align:left;">UserBlocklistController</td><td>/blocked-clients/users</td><td>turms-service</td></tr></tbody></table><h4 id="用户会话类" tabindex="-1"><a class="header-anchor" href="#用户会话类" aria-hidden="true">#</a> 用户会话类</h4><table><thead><tr><th style="text-align:left;"><strong>种类</strong></th><th style="text-align:left;"><strong>Controller</strong></th><th>路径</th><th>支持该接口的服务</th></tr></thead><tbody><tr><td style="text-align:left;">用户会话管理</td><td style="text-align:left;">SessionController</td><td>/sessions</td><td>turms-gateway</td></tr></tbody></table><h3 id="业务相关类" tabindex="-1"><a class="header-anchor" href="#业务相关类" aria-hidden="true">#</a> 业务相关类</h3><p>下表所有API端口仅存在于turms-service服务端，turms-gateway服务端没有这些API端口。</p><h4 id="用户类" tabindex="-1"><a class="header-anchor" href="#用户类" aria-hidden="true">#</a> 用户类</h4><table><thead><tr><th style="text-align:left;"><strong>职责</strong></th><th style="text-align:left;"><strong>Controller</strong></th><th>路径</th></tr></thead><tbody><tr><td style="text-align:left;">用户信息管理</td><td style="text-align:left;">UserController</td><td>/users</td></tr><tr><td style="text-align:left;">用户在线状态管理</td><td style="text-align:left;">UserOnlineInfoController</td><td>/users/online-infos</td></tr><tr><td style="text-align:left;">用户权限组管理</td><td style="text-align:left;">UserPermissionGroupController</td><td>/users/permission-groups</td></tr><tr><td style="text-align:left;">用户关系管理</td><td style="text-align:left;">UserRelationshipController</td><td>/users/relationships</td></tr><tr><td style="text-align:left;">用户关系组管理</td><td style="text-align:left;">UserRelationshipGroupController</td><td>/users/relationships/groups</td></tr><tr><td style="text-align:left;">用户好友请求管理</td><td style="text-align:left;">UserFriendRequestController</td><td>/users/relationships/friend-requests</td></tr></tbody></table><h4 id="群组类" tabindex="-1"><a class="header-anchor" href="#群组类" aria-hidden="true">#</a> 群组类</h4><table><thead><tr><th>职责</th><th>Controller</th><th>路径</th></tr></thead><tbody><tr><td>群组管理</td><td>GroupController</td><td>/groups</td></tr><tr><td>群组类型管理</td><td>GroupTypeController</td><td>/groups/types</td></tr><tr><td>群组入群问题管理</td><td>GroupQuestionController</td><td>/groups/questions</td></tr><tr><td>群组成员管理</td><td>GroupMemberController</td><td>/groups/members</td></tr><tr><td>群组黑名单管理</td><td>GroupBlocklistController</td><td>/groups/blocked-users</td></tr><tr><td>群组邀请管理</td><td>GroupInvitationController</td><td>/groups/invitations</td></tr><tr><td>群组入群请求管理</td><td>GroupJoinRequestController</td><td>/groups/join-requests</td></tr></tbody></table><h4 id="聊天会话类" tabindex="-1"><a class="header-anchor" href="#聊天会话类" aria-hidden="true">#</a> 聊天会话类</h4><table><thead><tr><th>职责</th><th>Controller</th><th>路径</th></tr></thead><tbody><tr><td>聊天会话管理</td><td>ConversationController</td><td>/conversations</td></tr></tbody></table><h4 id="消息类" tabindex="-1"><a class="header-anchor" href="#消息类" aria-hidden="true">#</a> 消息类</h4><table><thead><tr><th>职责</th><th>Controller</th><th>路径</th></tr></thead><tbody><tr><td>消息管理</td><td>MessageController</td><td>/messages</td></tr></tbody></table><h2 id="统计" tabindex="-1"><a class="header-anchor" href="#统计" aria-hidden="true">#</a> 统计</h2>',26),_={href:"https://turms-im.github.io/docs/for-developers/data-analytics.html",target:"_blank",rel:"noopener noreferrer"},C=t("h2",{id:"管理员api接口安全",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#管理员api接口安全","aria-hidden":"true"},"#"),e(" 管理员API接口安全")],-1),T={href:"https://turms-im.github.io/docs/for-developers/security.html#%E7%AE%A1%E7%90%86%E5%91%98%E5%AE%89%E5%85%A8",target:"_blank",rel:"noopener noreferrer"};function P(A,E){const r=a("ExternalLinkIcon");return o(),n("div",null,[h,t("p",null,[e("Turms服务端的接口文档采用"),t("a",c,[e("OpenAPI 3.0"),d(r)]),e("标准，并通过HTTP服务对外提供当前服务端的OpenAPI接口文档。")]),g,u,f,t("p",null,[e("为了让接口能够顾名思义，保证开发者能一目了然，Turms的Admin API接口设计参考"),t("a",p,[e("RESTful"),d(r)]),e("设计风格，并做了进一步优化与统一，具体遵循以下准则：")]),y,t("ul",null,[b,t("li",null,[t("p",null,[e("管理员后台管理Web项目的"),t("a",x,[e("turms-admin"),d(r)]),e("使用")])])]),m,t("p",null,[e("当前对外暴露的统计相关接口多为Legacy API，不推荐使用。我们会在之后对其进行调整与重构。具体原因请查阅"),t("a",_,[e("数据分析"),d(r)]),e("章节。")]),C,t("p",null,[e("用户向Turms服务端发送的每个HTTP请求都会经过Turms服务端的认证与授权流程，具体内容可见"),t("a",T,[e("管理员安全"),d(r)]),e("。")])])}const R=s(i,[["render",P],["__file","admin-api.html.vue"]]);export{R as default};
