import{_ as c,M as n,p as i,q as r,N as s,R as o,t as e,a1 as t}from"./framework-7f102627.js";const p={},u=t('<h1 id="身份与访问管理" tabindex="-1"><a class="header-anchor" href="#身份与访问管理" aria-hidden="true">#</a> 身份与访问管理</h1><h2 id="登陆的认证与授权" tabindex="-1"><a class="header-anchor" href="#登陆的认证与授权" aria-hidden="true">#</a> 登陆的认证与授权</h2><p>Turms既提供了内置的身份与访问管理机制，也支持用户基于插件自定义身份与访问管理实现。</p><h3 id="相关配置" tabindex="-1"><a class="header-anchor" href="#相关配置" aria-hidden="true">#</a> 相关配置</h3><table><thead><tr><th>配置名</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>turms.gateway.session.identity-access-management.enabled</td><td>true</td><td>是否开启身份与访问管理机制。<br>如果该值为<code>false</code>，则关闭Turms内置的身份与访问管理机制与用户基于插件自定义身份与访问管理实现，并允许任意用户登陆，与授权其发送任意请求类型</td></tr><tr><td>turms.gateway.session.identity-access-management.type</td><td>password</td><td>使用的Turms内置身份与访问管理机制类型，其类型可以为<code>noop</code>、<code>password</code>、<code>jwt</code>、<code>http</code>。具体见下文</td></tr></tbody></table><h3 id="内置的身份与访问管理机制" tabindex="-1"><a class="header-anchor" href="#内置的身份与访问管理机制" aria-hidden="true">#</a> 内置的身份与访问管理机制</h3><h4 id="_1-noop" tabindex="-1"><a class="header-anchor" href="#_1-noop" aria-hidden="true">#</a> 1. NOOP</h4><p>关闭内置的身份与访问管理机制，并允许任意用户登陆，与授权其发送任意请求类型。</p><h5 id="相关配置项" tabindex="-1"><a class="header-anchor" href="#相关配置项" aria-hidden="true">#</a> 相关配置项</h5><ul><li>turms.gateway.session.identity-access-management.type=noop</li></ul><h4 id="_2-基于密钥认证" tabindex="-1"><a class="header-anchor" href="#_2-基于密钥认证" aria-hidden="true">#</a> 2. 基于密钥认证</h4><p>基于Turms服务端自建的MongoDB中的<code>user</code>集合中的密码做用户认证。暂不支持授权实现。</p><h5 id="相关配置项-1" tabindex="-1"><a class="header-anchor" href="#相关配置项-1" aria-hidden="true">#</a> 相关配置项</h5><ul><li>turms.gateway.session.identity-access-management.type=password</li></ul><h4 id="_3-基于jwt认证" tabindex="-1"><a class="header-anchor" href="#_3-基于jwt认证" aria-hidden="true">#</a> 3. 基于JWT认证</h4><p>JWT令牌中包含了该用户的认证与授权信息。</p><h5 id="工作流程" tabindex="-1"><a class="header-anchor" href="#工作流程" aria-hidden="true">#</a> 工作流程</h5>',17),l=t(`<ul><li>客户端应用向您的服务端申请JWT令牌</li><li>客户端应用拿到JWT令牌后，通过Turms客户端登陆接口<code>turmsClient.userService.login</code>中的<code>password</code>字段将JWT字符串发送给turms-gateway服务端</li><li>turms-gateway服务端拿到JWT令牌后，根据JWT令牌中指定的算法与开发者在turms-gateway服务端配置的公钥配置（非对称加密算法：RS256、RS384、RS512、PS256、PS384、PS512、ES256、ES384、ES512）或私钥配置（对称加密算法：HS256、HS384、HS512）对JWT令牌进行校验。</li><li>如果开发者未在turms-gateway服务端配置JWT指定的算法密钥配置，则向客户端返回对应的错误信息，以告知客户端该算法不被支持</li><li>如果JWT令牌校验通过，则根据JWT令牌的认证与授权信息对用户进行认证与授权</li><li>如果JWT令牌校验失败，则向客户端返回对应的错误信息</li></ul><h5 id="jwt正文-payload-格式" tabindex="-1"><a class="header-anchor" href="#jwt正文-payload-格式" aria-hidden="true">#</a> JWT正文（Payload）格式</h5><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;iss&quot;</span><span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token comment">// issuer</span>
    <span class="token property">&quot;sub&quot;</span><span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token comment">// subject</span>
    <span class="token property">&quot;aud&quot;</span><span class="token operator">:</span> array&lt;string&gt;<span class="token punctuation">,</span> <span class="token comment">// audience</span>
    <span class="token property">&quot;exp&quot;</span><span class="token operator">:</span> number<span class="token punctuation">,</span> <span class="token comment">// expiration time</span>
    <span class="token string">&quot;nbf&quot;</span><span class="token punctuation">,</span> number<span class="token punctuation">,</span> <span class="token comment">// not before</span>

    <span class="token property">&quot;authenticated&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;statements&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
        <span class="token property">&quot;effect&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ALLOW&quot;</span><span class="token punctuation">,</span> <span class="token comment">// or &quot;DENY&quot;</span>
        <span class="token property">&quot;actions&quot;</span><span class="token operator">:</span> <span class="token string">&quot;*&quot;</span><span class="token punctuation">,</span> <span class="token comment">// a string of [&quot;*&quot;, &quot;CREATE&quot;, &quot;DELETE&quot;, &quot;UPDATE&quot;, &quot;QUERY&quot;], or an array that contains these strings</span>
        <span class="token property">&quot;resources&quot;</span><span class="token operator">:</span> <span class="token string">&quot;*&quot;</span> <span class="token comment">// a string of [&quot;*&quot;, &quot;USER&quot;, &quot;GROUP_BLOCKED_USER&quot;, ...], or an array that contains these strings</span>
    <span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中：</p><ul><li><p><code>iss</code>、<code>sub</code>、<code>aud</code>、<code>exp</code>与<code>nbf</code>这五个JWT公共声明可用于JWT校验，除<code>sub</code>声明必须存在外，其余四个声明均可以不存在，即不做声明相关的逻辑校验。</p><ul><li><p><code>iss</code>（issuer）：JWT的签发者，如<code>www.my-server.com</code>。可配合配置项<code>turms.gateway.session.identity-access-management.jwt.verification.issuer</code>做校验。</p></li><li><p><code>sub</code>（subject）：JWT所签发给的用户，如<code>123456789</code>。该字段必须与用户的登陆用户ID相同。</p></li><li><p><code>aud</code>（audience）: JWT的接收方，如<code>www.my-turms.com</code>。可配合配置项<code>turms.gateway.session.identity-access-management.jwt.verification.audience</code>做校验。</p></li><li><p><code>exp</code>（expiration time）：JWT的过期时间，如<code>1600000000</code>。在该时间之后，该JWT是无效的。</p></li><li><p><code>nbf</code>（not before）：在该时间之前，该JWT是无效的，如<code>1600000000</code>。</p></li></ul></li><li><p><code>authenticated</code>：私有布尔声明，表示该用户是否通过认证，为<code>true</code>（注意：该<code>true</code>既可以是布尔值，也可以是字符串）时则表示通过认证，反之则没通过。</p></li><li><p><code>statements</code>：私有数组声明，表示该用户拥有的权限，数组长度最大为100。</p><ul><li><p><code>effect</code>字段可以是<code>ALLOW</code>表示“允许的权限”，或<code>DENY</code>表示“禁止的权限”。被<code>DENY</code>禁止的权限生效优先级始终高于被<code>ALLOW</code>允许的权限，而不会受<code>statements</code>申明顺序的影响。</p><p><code>DENY</code>通常配合<code>ALLOW</code>一起使用，如权限“除了CREATE USER与GROUP_BLOCKED_USER资源的权限被禁止，其他权限都被允许”：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">[</span><span class="token punctuation">{</span>
    <span class="token property">&quot;effect&quot;</span><span class="token operator">:</span> <span class="token string">&quot;DENY&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;actions&quot;</span><span class="token operator">:</span> <span class="token string">&quot;CREATE&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;resources&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;USER&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;GROUP_BLOCKED_USER&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>，<span class="token punctuation">{</span>
    <span class="token property">&quot;effect&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ALLOW&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;actions&quot;</span><span class="token operator">:</span> <span class="token string">&quot;*&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;resources&quot;</span><span class="token operator">:</span> <span class="token string">&quot;*&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>actions</code>字段表示授权的行为，其值既可以是下述字符串，也可以是包含下述字符串的数组，如<code>[&quot;CREATE&quot;, &quot;DELETE&quot;]</code>：</p><ul><li><code>*</code>：所有行为</li><li><code>CREATE</code>：创建行为</li><li><code>DELETE</code>：删除行为</li><li><code>UPDATE</code>：更新行为</li><li><code>QUERY</code>：查询行为</li></ul></li><li><p><code>resources</code>字段表示授权的资源（即该用户是否有权限发送这些资源相关的请求），其值既可以是下述字符串，也可以是包含下述字符串的数组，如<code>[&quot;USER&quot;, &quot;MESSAGE&quot;]</code>：</p><ul><li><code>*</code>：所有资源</li><li><code>USER</code>：用户数据相关资源</li><li><code>USER_LOCATION</code>：用户位置相关资源</li><li><code>USER_ONLINE_STATUS</code>：用户在线状态相关资源</li><li><code>USER_PROFILE</code>：用户个人信息相关资源</li><li><code>NEARBY_USER</code>：附近的用户相关资源</li><li><code>RELATIONSHIP</code>：用户关系相关资源</li><li><code>RELATIONSHIP_GROUP</code>：用户关系组相关资源</li><li><code>FRIEND_REQUEST</code>：好友请求相关资源</li><li><code>GROUP</code>：群信息相关资源</li><li><code>GROUP_BLOCKED_USER</code>：群封禁用户相关资源</li><li><code>GROUP_INVITATION</code>：群邀请相关资源</li><li><code>GROUP_JOIN_QUESTION</code>：进群问题相关资源</li><li><code>GROUP_JOIN_QUESTION_ANSWER</code>：进群问题答案相关资源</li><li><code>GROUP_JOIN_REQUEST</code>：进群请求相关资源</li><li><code>GROUP_MEMBER</code>：群成员相关资源</li><li><code>JOINED_GROUP</code>：已加入的群相关资源</li><li><code>MESSAGE</code>：消息相关资源</li><li><code>CONVERSATION</code>：会话相关资源</li><li><code>TYPING_STATUS</code>：输入状态相关资源</li><li><code>RESOURCE</code>：存储资源相关资源</li></ul></li></ul></li></ul><h5 id="相关配置项-2" tabindex="-1"><a class="header-anchor" href="#相关配置项-2" aria-hidden="true">#</a> 相关配置项</h5><table><thead><tr><th>配置名</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>turms.gateway.session.identity-access-management.type</td><td>password</td><td>设置为<code>jwt</code>以开启基于JWT的身份与访问管理机制</td></tr><tr><td>turms.service.message.check-if-target-active-and-not-deleted</td><td>true</td><td>使用<code>JWT</code>机制时，需要将该配置项设置成<code>false</code>，否则因为Turms的数据库中并不存在该用户，因此用户将无法发送消息</td></tr><tr><td>turms.gateway.session.identity-access-management.jwt.verification.issuer</td><td></td><td>该值不为空时，校验JWT的签发者是否等同于该值</td></tr><tr><td>turms.gateway.session.identity-access-management.jwt.verification.audience</td><td></td><td>该值不为空时，校验JWT的接收方是否包含该值</td></tr><tr><td>turms.gateway.session.identity-access-management.jwt.verification.custom-payload-claims</td><td></td><td>该值不为空时，校验JWT中的私有声明是否与该值匹配</td></tr><tr><td>turms.gateway.session.identity-access-management.jwt.authentication.expectation.custom-payload-claims</td><td>{ &quot;authenticated&quot;: true }</td><td>在JWT的私有声明中匹配该值，如果匹配成功，则表明该用户已被认证</td></tr><tr><td>turms.gateway.session.identity-access-management.jwt.algorithm.hmac256.file-path</td><td></td><td>密钥文件路径。开发者只用配置该密钥或下文的P12中的一组</td></tr><tr><td>turms.gateway.session.identity-access-management.jwt.algorithm.hmac256.p12.file-path</td><td></td><td>PKCS#12文件路径</td></tr><tr><td>turms.gateway.session.identity-access-management.jwt.algorithm.hmac256.p12.password</td><td></td><td>PKCS#12密钥</td></tr><tr><td>turms.gateway.session.identity-access-management.jwt.algorithm.hmac256.p12.key-alias</td><td></td><td>密钥别名</td></tr><tr><td>turms.gateway.session.identity-access-management.jwt.algorithm.hmac256.p12.key-password</td><td></td><td>密钥密码。为空时，默认等同于PKCS#12密钥</td></tr><tr><td>turms.gateway.session.identity-access-management.jwt.algorithm.rsa256.pem-file-path</td><td></td><td>PEM文件路径。开发者只用配置该PEM或下文的P12中的一组</td></tr><tr><td>turms.gateway.session.identity-access-management.jwt.algorithm.rsa256.p12.file-path</td><td></td><td>PKCS#12文件路径</td></tr><tr><td>turms.gateway.session.identity-access-management.jwt.algorithm.rsa256.p12.password</td><td></td><td>PKCS#12密钥</td></tr><tr><td>turms.gateway.session.identity-access-management.jwt.algorithm.rsa256.p12.key-alias</td><td></td><td>公钥别名</td></tr><tr><td>rsa384/rsa512/ps256/ps384/ps512/ecdsa256/ecdsa384/ecdsa512的配置与上述的<code>rsa256</code>一样</td><td></td><td></td></tr></tbody></table><h4 id="_4-基于外部http响应的身份与访问管理机制" tabindex="-1"><a class="header-anchor" href="#_4-基于外部http响应的身份与访问管理机制" aria-hidden="true">#</a> 4. 基于外部HTTP响应的身份与访问管理机制</h4><p>HTTP响应中包含了该用户的认证与授权信息。</p><h5 id="工作流程-1" tabindex="-1"><a class="header-anchor" href="#工作流程-1" aria-hidden="true">#</a> 工作流程</h5>`,10),m=t(`<ul><li><p>客户端通过Turms客户端登陆接口<code>turmsClient.userService.login</code>向turms-gateway服务端发送登陆请求</p></li><li><p>turms-gateway服务端会向您的HTTP服务端发送HTTP请求，且请求正文格式为：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;userId&quot;</span><span class="token operator">:</span> number<span class="token punctuation">,</span>
    <span class="token property">&quot;password&quot;</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
    <span class="token property">&quot;loggingInDeviceType&quot;</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
    <span class="token property">&quot;deviceDetails&quot;</span><span class="token operator">:</span> object<span class="token punctuation">,</span>
    <span class="token property">&quot;userStatus&quot;</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
    <span class="token property">&quot;location&quot;</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
    <span class="token property">&quot;ip&quot;</span><span class="token operator">:</span> string
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>您的HTTP服务端按照下文的“HTTP响应格式”返回该用户的认证与授权信息</p></li><li><p>turms-gateway根据该HTTP响应对用户进行认证与授权</p></li></ul><h5 id="http响应格式" tabindex="-1"><a class="header-anchor" href="#http响应格式" aria-hidden="true">#</a> HTTP响应格式</h5><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;authenticated&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;statements&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
        <span class="token property">&quot;effect&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ALLOW&quot;</span><span class="token punctuation">,</span> <span class="token comment">// or &quot;DENY&quot;</span>
        <span class="token property">&quot;actions&quot;</span><span class="token operator">:</span> <span class="token string">&quot;*&quot;</span><span class="token punctuation">,</span> <span class="token comment">// a string of [&quot;*&quot;, &quot;CREATE&quot;, &quot;DELETE&quot;, &quot;UPDATE&quot;, &quot;QUERY&quot;], or an array that contains these strings</span>
        <span class="token property">&quot;resources&quot;</span><span class="token operator">:</span> <span class="token string">&quot;*&quot;</span> <span class="token comment">// a string of [&quot;*&quot;, &quot;USER&quot;, &quot;GROUP_BLOCKED_USER&quot;, ...], or an array that contains these strings</span>
    <span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>authenticated</code>与<code>statements</code>两个字段的含义与上文JWT正文中对应声明的含义相同，故不赘述。</p><h5 id="相关配置项-3" tabindex="-1"><a class="header-anchor" href="#相关配置项-3" aria-hidden="true">#</a> 相关配置项</h5><table><thead><tr><th>配置名</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>turms.gateway.session.identity-access-management.type</td><td>password</td><td>设置为<code>http</code>以开启基于外部HTTP响应的身份与访问管理机制</td></tr><tr><td>turms.service.message.check-if-target-active-and-not-deleted</td><td>true</td><td>使用<code>HTTP</code>机制时，需要将该配置项设置成<code>false</code>，否则因为Turms的数据库中并不存在该用户，因此用户将无法发送消息</td></tr><tr><td>turms.gateway.session.identity-access-management.http.request.url</td><td>&quot;&quot;</td><td>请求URL</td></tr><tr><td>turms.gateway.session.identity-access-management.http.request.headers</td><td>true</td><td>附加的请求头</td></tr><tr><td>turms.gateway.session.identity-access-management.http.request.http-method</td><td>GET</td><td>请求方法</td></tr><tr><td>turms.gateway.session.identity-access-management.http.request.timeout-millis</td><td>30000</td><td>请求超时时长</td></tr><tr><td>turms.gateway.session.identity-access-management.http.authentication.response-expectation.status-codes</td><td>&quot;2??&quot;</td><td>在响应状态码中匹配该值，如果匹配成功，则继续进行其他匹配，否则认证失败</td></tr><tr><td>turms.gateway.session.identity-access-management.http.authentication.response-expectation.headers</td><td></td><td>在响应头中匹配该值，如果匹配成功，则继续进行其他匹配，否则认证失败</td></tr><tr><td>turms.gateway.session.identity-access-management.http.authentication.response-expectation.body-fields</td><td>{ &quot;authenticated&quot;: true }</td><td>在响应正文中匹配该值，如果匹配成功，则继续进行其他匹配，否则认证失败</td></tr></tbody></table><h3 id="基于插件的自定义身份与访问管理实现" tabindex="-1"><a class="header-anchor" href="#基于插件的自定义身份与访问管理实现" aria-hidden="true">#</a> 基于插件的自定义身份与访问管理实现</h3><p>认证插件接口：<code>im.turms.gateway.infra.plugin.extension.UserAuthenticator</code></p><p>授权插件接口：TODO</p>`,9),h={href:"https://turms-im.github.io/docs/for-developers/plugin.html#%E6%8F%92%E4%BB%B6%E5%AE%9E%E7%8E%B0",target:"_blank",rel:"noopener noreferrer"},k=t('<h2 id="业务逻辑的认证与授权" tabindex="-1"><a class="header-anchor" href="#业务逻辑的认证与授权" aria-hidden="true">#</a> 业务逻辑的认证与授权</h2><p>对于客户端发来的权限信息，Turms服务端的态度是“客户端传来的权限信息均不可信”，因此Turms服务端会根据您在Turms服务端处所设定的业务配置，自行做各种必要的权限判断。</p><p>以“修改已发送消息”功能为例，该行为会触发一系列判定逻辑。Turms会先判断目标消息是否确实是由该用户发出的，再根据您在Turms服务端配置的<code>allowEditMessageBySender</code>（默认为true），来判断是否允许用户修改已发送消息，若您设置其为false，则在客户端处会捕获到一个<code>ResponseException</code>（Kotlin）或<code>ResponseError</code>（JavaScript/Swift）对象，而它由业务状态码模型<code>ResponseStatusCode</code>表示（由<code>code</code>与<code>reason</code>描述信息组成）。</p><p>再比如对于一个“简单”的“发送消息”请求，Turms服务端就会判断该消息发送用户是否处于激活状态、是否设置了“允许发送消息给陌生人（非关系人）”、消息发送者是否在黑名单中。如果接收方是群组，那么消息发送者是否是群成员，并且是否处于禁言状态等等逻辑判断。而您仅仅只需调用一个<code>sendMessage(...)</code>接口即可。</p>',4);function q(g,y){const a=n("Mermaid"),d=n("ExternalLinkIcon");return i(),r("div",null,[u,s(a,{id:"mermaid-95",code:"eJxVj7EKwzAMRHd/heieH8gQKO3UDh1aKB2FoyQiie3acoP/vjYJtBkE4t7pxAV6RzKazoy9x1k59MKaHRoBDRjgNDHl/ejcxBqFrdl5UvG8bPRwJ/8hv4NSoEQ/h6pHoQWT0lXTpDrrI3TWw+X5ALEjGZWqTHT9pxSr1DDZng0sLMOPldyDwxAW69uDktWZ33OXtmvZ8m5X4G5FTC2gyRNlyJ1KHWrVF1hDWWc="}),l,s(a,{id:"mermaid-539",code:"eJxVzT0OwjAMBeA9p/AFeoEOlRBsDAxMjFbqFkvND44DCqcnIQx0s9/7pJfokclbOjGugs5EFGXLEb2CBUxw3JjqfYhxY4vKwe+MNqNZXBpWVHph2dWl1beQBa4kTxJjh2nSEbawsjdanzJCTiTAfgni+kAZusKs9zr+2wX08zcKwu8OtUE7wuUMvPxzms0HE0NONw=="}),m,o("p",null,[e("读者可以参考"),o("a",h,[e("插件实现"),s(d)]),e("，实现上述插件接口。")]),k])}const b=c(p,[["render",q],["__file","client-identity-access-management.html.vue"]]);export{b as default};