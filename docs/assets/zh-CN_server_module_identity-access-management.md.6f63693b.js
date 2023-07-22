import{_ as l,E as e,o as p,c,J as o,U as n,k as s,a}from"./chunks/framework.95a60cb2.js";const P=JSON.parse('{"title":"身份与访问管理","description":"","frontmatter":{},"headers":[],"relativePath":"zh-CN/server/module/identity-access-management.md","filePath":"zh-CN/server/module/identity-access-management.md"}'),r={name:"zh-CN/server/module/identity-access-management.md"},i=n('<h1 id="身份与访问管理" tabindex="-1">身份与访问管理 <a class="header-anchor" href="#身份与访问管理" aria-label="Permalink to &quot;身份与访问管理&quot;">​</a></h1><h2 id="登陆的认证与授权" tabindex="-1">登陆的认证与授权 <a class="header-anchor" href="#登陆的认证与授权" aria-label="Permalink to &quot;登陆的认证与授权&quot;">​</a></h2><p>Turms既提供了内置的身份与访问管理机制，也支持用户基于插件自定义身份与访问管理实现。</p><h3 id="相关配置" tabindex="-1">相关配置 <a class="header-anchor" href="#相关配置" aria-label="Permalink to &quot;相关配置&quot;">​</a></h3><table><thead><tr><th>配置名</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>turms.gateway.session.identity-access-management.enabled</td><td>true</td><td>是否开启身份与访问管理机制。<br>如果该值为<code>false</code>，则关闭Turms内置的身份与访问管理机制与用户基于插件自定义身份与访问管理实现，并允许任意用户登陆，与授权其发送任意请求类型</td></tr><tr><td>turms.gateway.session.identity-access-management.type</td><td>password</td><td>使用的Turms内置身份与访问管理机制类型，其类型可以为<code>noop</code>、<code>password</code>、<code>jwt</code>、<code>http</code>。具体见下文</td></tr></tbody></table><h3 id="内置的身份与访问管理机制" tabindex="-1">内置的身份与访问管理机制 <a class="header-anchor" href="#内置的身份与访问管理机制" aria-label="Permalink to &quot;内置的身份与访问管理机制&quot;">​</a></h3><h4 id="_1-noop" tabindex="-1">1. NOOP <a class="header-anchor" href="#_1-noop" aria-label="Permalink to &quot;1. NOOP&quot;">​</a></h4><p>关闭内置的身份与访问管理机制，并允许任意用户登陆，与授权其发送任意请求类型。</p><h5 id="相关配置项" tabindex="-1">相关配置项 <a class="header-anchor" href="#相关配置项" aria-label="Permalink to &quot;相关配置项&quot;">​</a></h5><ul><li>turms.gateway.session.identity-access-management.type=noop</li></ul><h4 id="_2-基于密钥认证" tabindex="-1">2. 基于密钥认证 <a class="header-anchor" href="#_2-基于密钥认证" aria-label="Permalink to &quot;2. 基于密钥认证&quot;">​</a></h4><p>基于Turms服务端自建的MongoDB中的<code>user</code>集合中的密码做用户认证。暂不支持授权实现。</p><h5 id="相关配置项-1" tabindex="-1">相关配置项 <a class="header-anchor" href="#相关配置项-1" aria-label="Permalink to &quot;相关配置项&quot;">​</a></h5><ul><li>turms.gateway.session.identity-access-management.type=password</li></ul><h4 id="_3-基于jwt认证" tabindex="-1">3. 基于JWT认证 <a class="header-anchor" href="#_3-基于jwt认证" aria-label="Permalink to &quot;3. 基于JWT认证&quot;">​</a></h4><p>JWT令牌中包含了该用户的认证与授权信息。</p><h5 id="工作流程" tabindex="-1">工作流程 <a class="header-anchor" href="#工作流程" aria-label="Permalink to &quot;工作流程&quot;">​</a></h5>',17),d=n(`<ul><li>客户端应用向您的服务端申请JWT令牌</li><li>客户端应用拿到JWT令牌后，通过Turms客户端登陆接口<code>turmsClient.userService.login</code>中的<code>password</code>字段将JWT字符串发送给turms-gateway服务端</li><li>turms-gateway服务端拿到JWT令牌后，根据JWT令牌中指定的算法与开发者在turms-gateway服务端配置的公钥配置（非对称加密算法：RS256、RS384、RS512、PS256、PS384、PS512、ES256、ES384、ES512）或私钥配置（对称加密算法：HS256、HS384、HS512）对JWT令牌进行校验。</li><li>如果开发者未在turms-gateway服务端配置JWT指定的算法密钥配置，则向客户端返回对应的错误信息，以告知客户端该算法不被支持</li><li>如果JWT令牌校验通过，则根据JWT令牌的认证与授权信息对用户进行认证与授权</li><li>如果JWT令牌校验失败，则向客户端返回对应的错误信息</li></ul><h5 id="jwt正文-payload-格式" tabindex="-1">JWT正文（Payload）格式 <a class="header-anchor" href="#jwt正文-payload-格式" aria-label="Permalink to &quot;JWT正文（Payload）格式&quot;">​</a></h5><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">iss</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// issuer</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">sub</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// subject</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">aud</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> array&lt;string&gt;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// audience</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">exp</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> number</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// expiration time</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">nbf</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">, number, </span><span style="color:#676E95;font-style:italic;">// not before</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">authenticated</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">statements</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">effect</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ALLOW</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// or &quot;DENY&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">actions</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">*</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// a string of [&quot;*&quot;, &quot;CREATE&quot;, &quot;DELETE&quot;, &quot;UPDATE&quot;, &quot;QUERY&quot;], or an array that contains these strings</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">resources</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">*</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// a string of [&quot;*&quot;, &quot;USER&quot;, &quot;GROUP_BLOCKED_USER&quot;, ...], or an array that contains these strings</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>其中：</p><ul><li><p><code>iss</code>、<code>sub</code>、<code>aud</code>、<code>exp</code>与<code>nbf</code>这五个JWT公共声明可用于JWT校验，除<code>sub</code>声明必须存在外，其余四个声明均可以不存在，即不做声明相关的逻辑校验。</p><ul><li><p><code>iss</code>（issuer）：JWT的签发者，如<code>www.my-server.com</code>。可配合配置项<code>turms.gateway.session.identity-access-management.jwt.verification.issuer</code>做校验。</p></li><li><p><code>sub</code>（subject）：JWT所签发给的用户，如<code>123456789</code>。该字段必须与用户的登陆用户ID相同。</p></li><li><p><code>aud</code>（audience）: JWT的接收方，如<code>www.my-turms.com</code>。可配合配置项<code>turms.gateway.session.identity-access-management.jwt.verification.audience</code>做校验。</p></li><li><p><code>exp</code>（expiration time）：JWT的过期时间，如<code>1600000000</code>。在该时间之后，该JWT是无效的。</p></li><li><p><code>nbf</code>（not before）：在该时间之前，该JWT是无效的，如<code>1600000000</code>。</p></li></ul></li><li><p><code>authenticated</code>：私有布尔声明，表示该用户是否通过认证，为<code>true</code>（注意：该<code>true</code>既可以是布尔值，也可以是字符串）时则表示通过认证，反之则没通过。</p></li><li><p><code>statements</code>：私有数组声明，表示该用户拥有的权限，数组长度最大为100。</p><ul><li><p><code>effect</code>字段可以是<code>ALLOW</code>表示“允许的权限”，或<code>DENY</code>表示“禁止的权限”。被<code>DENY</code>禁止的权限生效优先级始终高于被<code>ALLOW</code>允许的权限，而不会受<code>statements</code>申明顺序的影响。</p><p><code>DENY</code>通常配合<code>ALLOW</code>一起使用，如权限“除了CREATE USER与GROUP_BLOCKED_USER资源的权限被禁止，其他权限都被允许”：</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">[{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">effect</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">DENY</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">actions</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">CREATE</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">resources</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">USER</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">GROUP_BLOCKED_USER</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">，</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">effect</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ALLOW</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">actions</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">*</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">resources</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">*</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}]</span></span></code></pre></div></li><li><p><code>actions</code>字段表示授权的行为，其值既可以是下述字符串，也可以是包含下述字符串的数组，如<code>[&quot;CREATE&quot;, &quot;DELETE&quot;]</code>：</p><ul><li><code>*</code>：所有行为</li><li><code>CREATE</code>：创建行为</li><li><code>DELETE</code>：删除行为</li><li><code>UPDATE</code>：更新行为</li><li><code>QUERY</code>：查询行为</li></ul></li><li><p><code>resources</code>字段表示授权的资源（即该用户是否有权限发送这些资源相关的请求），其值既可以是下述字符串，也可以是包含下述字符串的数组，如<code>[&quot;USER&quot;, &quot;MESSAGE&quot;]</code>：</p><ul><li><code>*</code>：所有资源</li><li><code>USER</code>：用户数据相关资源</li><li><code>USER_LOCATION</code>：用户位置相关资源</li><li><code>USER_ONLINE_STATUS</code>：用户在线状态相关资源</li><li><code>USER_PROFILE</code>：用户个人信息相关资源</li><li><code>NEARBY_USER</code>：附近的用户相关资源</li><li><code>RELATIONSHIP</code>：用户关系相关资源</li><li><code>RELATIONSHIP_GROUP</code>：用户关系组相关资源</li><li><code>FRIEND_REQUEST</code>：好友请求相关资源</li><li><code>GROUP</code>：群信息相关资源</li><li><code>GROUP_BLOCKED_USER</code>：群封禁用户相关资源</li><li><code>GROUP_INVITATION</code>：群邀请相关资源</li><li><code>GROUP_JOIN_QUESTION</code>：进群问题相关资源</li><li><code>GROUP_JOIN_QUESTION_ANSWER</code>：进群问题答案相关资源</li><li><code>GROUP_JOIN_REQUEST</code>：进群请求相关资源</li><li><code>GROUP_MEMBER</code>：群成员相关资源</li><li><code>JOINED_GROUP</code>：已加入的群相关资源</li><li><code>MESSAGE</code>：消息相关资源</li><li><code>CONVERSATION</code>：会话相关资源</li><li><code>TYPING_STATUS</code>：输入状态相关资源</li><li><code>RESOURCE</code>：存储资源相关资源</li></ul></li></ul></li></ul><h5 id="相关配置项-2" tabindex="-1">相关配置项 <a class="header-anchor" href="#相关配置项-2" aria-label="Permalink to &quot;相关配置项&quot;">​</a></h5>`,6),u=s("table",null,[s("thead",null,[s("tr",null,[s("th",null,"配置名"),s("th",null,"默认值"),s("th",null,"说明")])]),s("tbody",null,[s("tr",null,[s("td",null,"turms.gateway.session.identity-access-management.type"),s("td",null,"password"),s("td",null,[a("设置为"),s("code",null,"jwt"),a("以开启基于JWT的身份与访问管理机制")])]),s("tr",null,[s("td",null,"turms.service.message.check-if-target-active-and-not-deleted"),s("td",null,"true"),s("td",null,[a("使用"),s("code",null,"JWT"),a("机制时，需要将该配置项设置成"),s("code",null,"false"),a("，否则因为Turms的数据库中并不存在该用户，因此用户将无法发送消息")])]),s("tr",null,[s("td",null,"turms.gateway.session.identity-access-management.jwt.verification.issuer"),s("td"),s("td",null,"该值不为空时，校验JWT的签发者是否等同于该值")]),s("tr",null,[s("td",null,"turms.gateway.session.identity-access-management.jwt.verification.audience"),s("td"),s("td",null,"该值不为空时，校验JWT的接收方是否包含该值")]),s("tr",null,[s("td",null,"turms.gateway.session.identity-access-management.jwt.verification.custom-payload-claims"),s("td"),s("td",null,"该值不为空时，校验JWT中的私有声明是否与该值匹配")]),s("tr",null,[s("td",null,"turms.gateway.session.identity-access-management.jwt.authentication.expectation.custom-payload-claims"),s("td",{"authenticated:":"",true:""}),s("td",null,"在JWT的私有声明中匹配该值，如果匹配成功，则表明该用户已被认证")]),s("tr",null,[s("td",null,"turms.gateway.session.identity-access-management.jwt.algorithm.hmac256.file-path"),s("td"),s("td",null,"密钥文件路径。开发者只用配置该密钥或下文的P12中的一组")]),s("tr",null,[s("td",null,"turms.gateway.session.identity-access-management.jwt.algorithm.hmac256.p12.file-path"),s("td"),s("td",null,"PKCS#12文件路径")]),s("tr",null,[s("td",null,"turms.gateway.session.identity-access-management.jwt.algorithm.hmac256.p12.password"),s("td"),s("td",null,"PKCS#12密钥")]),s("tr",null,[s("td",null,"turms.gateway.session.identity-access-management.jwt.algorithm.hmac256.p12.key-alias"),s("td"),s("td",null,"密钥别名")]),s("tr",null,[s("td",null,"turms.gateway.session.identity-access-management.jwt.algorithm.hmac256.p12.key-password"),s("td"),s("td",null,"密钥密码。为空时，默认等同于PKCS#12密钥")]),s("tr",null,[s("td",null,"turms.gateway.session.identity-access-management.jwt.algorithm.rsa256.pem-file-path"),s("td"),s("td",null,"PEM文件路径。开发者只用配置该PEM或下文的P12中的一组")]),s("tr",null,[s("td",null,"turms.gateway.session.identity-access-management.jwt.algorithm.rsa256.p12.file-path"),s("td"),s("td",null,"PKCS#12文件路径")]),s("tr",null,[s("td",null,"turms.gateway.session.identity-access-management.jwt.algorithm.rsa256.p12.password"),s("td"),s("td",null,"PKCS#12密钥")]),s("tr",null,[s("td",null,"turms.gateway.session.identity-access-management.jwt.algorithm.rsa256.p12.key-alias"),s("td"),s("td",null,"公钥别名")]),s("tr",null,[s("td",null,[a("rsa384/rsa512/ps256/ps384/ps512/ecdsa256/ecdsa384/ecdsa512的配置与上述的"),s("code",null,"rsa256"),a("一样")]),s("td"),s("td")])])],-1),D=s("h4",{id:"_4-基于外部http响应的身份与访问管理机制",tabindex:"-1"},[a("4. 基于外部HTTP响应的身份与访问管理机制 "),s("a",{class:"header-anchor",href:"#_4-基于外部http响应的身份与访问管理机制","aria-label":'Permalink to "4. 基于外部HTTP响应的身份与访问管理机制"'},"​")],-1),y=s("p",null,"HTTP响应中包含了该用户的认证与授权信息。",-1),F=s("h5",{id:"工作流程-1",tabindex:"-1"},[a("工作流程 "),s("a",{class:"header-anchor",href:"#工作流程-1","aria-label":'Permalink to "工作流程"'},"​")],-1),C=n(`<ul><li><p>客户端通过Turms客户端登陆接口<code>turmsClient.userService.login</code>向turms-gateway服务端发送登陆请求</p></li><li><p>turms-gateway服务端会向您的HTTP服务端发送HTTP请求，且请求正文格式为：</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">version</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">userId</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> number</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">password</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">loggingInDeviceType</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">deviceDetails</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> object</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">userStatus</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">location</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">ip</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> string</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div></li><li><p>您的HTTP服务端按照下文的“HTTP响应格式”返回该用户的认证与授权信息</p></li><li><p>turms-gateway根据该HTTP响应对用户进行认证与授权</p></li></ul><h5 id="http响应格式" tabindex="-1">HTTP响应格式 <a class="header-anchor" href="#http响应格式" aria-label="Permalink to &quot;HTTP响应格式&quot;">​</a></h5><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">authenticated</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">statements</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">effect</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ALLOW</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// or &quot;DENY&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">actions</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">*</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// a string of [&quot;*&quot;, &quot;CREATE&quot;, &quot;DELETE&quot;, &quot;UPDATE&quot;, &quot;QUERY&quot;], or an array that contains these strings</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">resources</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">*</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// a string of [&quot;*&quot;, &quot;USER&quot;, &quot;GROUP_BLOCKED_USER&quot;, ...], or an array that contains these strings</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p><code>authenticated</code>与<code>statements</code>两个字段的含义与上文JWT正文中对应声明的含义相同，故不赘述。</p><h5 id="相关配置项-3" tabindex="-1">相关配置项 <a class="header-anchor" href="#相关配置项-3" aria-label="Permalink to &quot;相关配置项&quot;">​</a></h5>`,5),A=s("table",null,[s("thead",null,[s("tr",null,[s("th",null,"配置名"),s("th",null,"默认值"),s("th",null,"说明")])]),s("tbody",null,[s("tr",null,[s("td",null,"turms.gateway.session.identity-access-management.type"),s("td",null,"password"),s("td",null,[a("设置为"),s("code",null,"http"),a("以开启基于外部HTTP响应的身份与访问管理机制")])]),s("tr",null,[s("td",null,"turms.service.message.check-if-target-active-and-not-deleted"),s("td",null,"true"),s("td",null,[a("使用"),s("code",null,"HTTP"),a("机制时，需要将该配置项设置成"),s("code",null,"false"),a("，否则因为Turms的数据库中并不存在该用户，因此用户将无法发送消息")])]),s("tr",null,[s("td",null,"turms.gateway.session.identity-access-management.http.request.url"),s("td",null,'""'),s("td",null,"请求URL")]),s("tr",null,[s("td",null,"turms.gateway.session.identity-access-management.http.request.headers"),s("td",null,"true"),s("td",null,"附加的请求头")]),s("tr",null,[s("td",null,"turms.gateway.session.identity-access-management.http.request.http-method"),s("td",null,"GET"),s("td",null,"请求方法")]),s("tr",null,[s("td",null,"turms.gateway.session.identity-access-management.http.request.timeout-millis"),s("td",null,"30000"),s("td",null,"请求超时时长")]),s("tr",null,[s("td",null,"turms.gateway.session.identity-access-management.http.authentication.response-expectation.status-codes"),s("td",null,'"2??"'),s("td",null,"在响应状态码中匹配该值，如果匹配成功，则继续进行其他匹配，否则认证失败")]),s("tr",null,[s("td",null,"turms.gateway.session.identity-access-management.http.authentication.response-expectation.headers"),s("td"),s("td",null,"在响应头中匹配该值，如果匹配成功，则继续进行其他匹配，否则认证失败")]),s("tr",null,[s("td",null,"turms.gateway.session.identity-access-management.http.authentication.response-expectation.body-fields"),s("td",{"authenticated:":"",true:""}),s("td",null,"在响应正文中匹配该值，如果匹配成功，则继续进行其他匹配，否则认证失败")])])],-1),m=n('<h3 id="基于插件的自定义身份与访问管理实现" tabindex="-1">基于插件的自定义身份与访问管理实现 <a class="header-anchor" href="#基于插件的自定义身份与访问管理实现" aria-label="Permalink to &quot;基于插件的自定义身份与访问管理实现&quot;">​</a></h3><p>认证插件接口：<code>im.turms.gateway.infra.plugin.extension.UserAuthenticator</code></p><p>授权插件接口：TODO</p><p>读者可以参考<a href="https://turms-im.github.io/docs/zh-CN/server/development/plugin#%E6%8F%92%E4%BB%B6%E5%AE%9E%E7%8E%B0" target="_blank" rel="noreferrer">插件实现</a>，实现上述插件接口。</p><h2 id="业务逻辑的认证与授权" tabindex="-1">业务逻辑的认证与授权 <a class="header-anchor" href="#业务逻辑的认证与授权" aria-label="Permalink to &quot;业务逻辑的认证与授权&quot;">​</a></h2><p>对于客户端发来的权限信息，Turms服务端的态度是“客户端传来的权限信息均不可信”，因此Turms服务端会根据您在Turms服务端处所设定的业务配置，自行做各种必要的权限判断。</p><p>以“修改已发送消息”功能为例，该行为会触发一系列判定逻辑。Turms会先判断目标消息是否确实是由该用户发出的，再根据您在Turms服务端配置的<code>allowEditMessageBySender</code>（默认为true），来判断是否允许用户修改已发送消息，若您设置其为false，则在客户端处会捕获到一个<code>ResponseException</code>（Kotlin）或<code>ResponseError</code>（JavaScript/Swift）对象，而它由业务状态码模型<code>ResponseStatusCode</code>表示（由<code>code</code>与<code>reason</code>描述信息组成）。</p><p>再比如对于一个“简单”的“发送消息”请求，Turms服务端就会判断该消息发送用户是否处于激活状态、是否设置了“允许发送消息给陌生人（非关系人）”、消息发送者是否在黑名单中。如果接收方是群组，那么消息发送者是否是群成员，并且是否处于禁言状态等等逻辑判断。而您仅仅只需调用一个<code>sendMessage(...)</code>接口即可。</p>',8);function h(q,E,g,T,_,f){const t=e("mermaid");return p(),c("div",null,[i,o(t,{dsl:`sequenceDiagram
participant c as Client Application
participant y as Your Server
participant t as turms-gateway
c->>y: ask for JWT token
y-->>c: JWT token
c->>t: login with JWT token as #quot;password#quot;
t->>t: verify token
t-->>c: OK if verified and authenticated`}),d,u,D,y,F,o(t,{dsl:`sequenceDiagram
participant c as Client Application
participant t as turms-gateway
participant y as Your Server
c->>t: login
t->>y: user information
y-->>t: authentication and authorization
t-->>c: OK if authenticated`}),C,A,m])}const b=l(r,[["render",h]]);export{P as __pageData,b as default};