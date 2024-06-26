import{_ as n,D as l,c as d,I as e,a3 as i,j as s,a as t,o}from"./chunks/framework.ViWktWD6.js";const P=JSON.parse('{"title":"身份与访问管理","description":"","frontmatter":{},"headers":[],"relativePath":"zh-CN/server/module/identity-access-management.md","filePath":"zh-CN/server/module/identity-access-management.md"}'),h={name:"zh-CN/server/module/identity-access-management.md"},r=i("",26),c=i("",6),p=s("table",null,[s("thead",null,[s("tr",null,[s("th",null,"配置名"),s("th",null,"默认值"),s("th",null,"说明")])]),s("tbody",null,[s("tr",null,[s("td",null,"turms.gateway.session.identity-access-management.type"),s("td",null,"password"),s("td",null,[t("设置为"),s("code",null,"jwt"),t("以开启基于JWT的身份与访问管理机制")])]),s("tr",null,[s("td",null,"turms.gateway.session.identity-access-management.jwt.verification.issuer"),s("td"),s("td",null,"该值不为空时，校验JWT的签发者是否等同于该值")]),s("tr",null,[s("td",null,"turms.gateway.session.identity-access-management.jwt.verification.audience"),s("td"),s("td",null,"该值不为空时，校验JWT的接收方是否包含该值")]),s("tr",null,[s("td",null,"turms.gateway.session.identity-access-management.jwt.verification.custom-payload-claims"),s("td"),s("td",null,"该值不为空时，校验JWT中的私有声明是否与该值匹配")]),s("tr",null,[s("td",null,"turms.gateway.session.identity-access-management.jwt.authentication.expectation.custom-payload-claims"),s("td",{"authenticated:":"",true:""}),s("td",null,"在JWT的私有声明中匹配该值，如果匹配成功，则表明该用户已被认证")]),s("tr",null,[s("td",null,"turms.gateway.session.identity-access-management.jwt.algorithm.hmac256.file-path"),s("td"),s("td",null,"密钥文件路径。开发者只用配置该密钥或下文的P12中的一组")]),s("tr",null,[s("td",null,"turms.gateway.session.identity-access-management.jwt.algorithm.hmac256.p12.file-path"),s("td"),s("td",null,"PKCS#12文件路径")]),s("tr",null,[s("td",null,"turms.gateway.session.identity-access-management.jwt.algorithm.hmac256.p12.password"),s("td"),s("td",null,"PKCS#12密钥")]),s("tr",null,[s("td",null,"turms.gateway.session.identity-access-management.jwt.algorithm.hmac256.p12.key-alias"),s("td"),s("td",null,"密钥别名")]),s("tr",null,[s("td",null,"turms.gateway.session.identity-access-management.jwt.algorithm.hmac256.p12.key-password"),s("td"),s("td",null,"密钥密码。为空时，默认等同于PKCS#12密钥")]),s("tr",null,[s("td",null,"turms.gateway.session.identity-access-management.jwt.algorithm.rsa256.pem-file-path"),s("td"),s("td",null,"PEM文件路径。开发者只用配置该PEM或下文的P12中的一组")]),s("tr",null,[s("td",null,"turms.gateway.session.identity-access-management.jwt.algorithm.rsa256.p12.file-path"),s("td"),s("td",null,"PKCS#12文件路径")]),s("tr",null,[s("td",null,"turms.gateway.session.identity-access-management.jwt.algorithm.rsa256.p12.password"),s("td"),s("td",null,"PKCS#12密钥")]),s("tr",null,[s("td",null,"turms.gateway.session.identity-access-management.jwt.algorithm.rsa256.p12.key-alias"),s("td"),s("td",null,"公钥别名")]),s("tr",null,[s("td",null,[t("rsa384/rsa512/ps256/ps384/ps512/ecdsa256/ecdsa384/ecdsa512的配置与上述的"),s("code",null,"rsa256"),t("一样")]),s("td"),s("td")])])],-1),u=s("h4",{id:"_4-基于外部http响应的身份与访问管理机制",tabindex:"-1"},[t("4. 基于外部HTTP响应的身份与访问管理机制 "),s("a",{class:"header-anchor",href:"#_4-基于外部http响应的身份与访问管理机制","aria-label":'Permalink to "4. 基于外部HTTP响应的身份与访问管理机制"'},"​")],-1),k=s("p",null,"HTTP响应中包含了该用户的认证与授权信息。",-1),E=s("h5",{id:"工作流程-1",tabindex:"-1"},[t("工作流程 "),s("a",{class:"header-anchor",href:"#工作流程-1","aria-label":'Permalink to "工作流程"'},"​")],-1),g=i("",5),y=s("table",null,[s("thead",null,[s("tr",null,[s("th",null,"配置名"),s("th",null,"默认值"),s("th",null,"说明")])]),s("tbody",null,[s("tr",null,[s("td",null,"turms.gateway.session.identity-access-management.type"),s("td",null,"password"),s("td",null,[t("设置为"),s("code",null,"http"),t("以开启基于外部HTTP响应的身份与访问管理机制")])]),s("tr",null,[s("td",null,"turms.gateway.session.identity-access-management.http.request.url"),s("td",null,'""'),s("td",null,"请求URL")]),s("tr",null,[s("td",null,"turms.gateway.session.identity-access-management.http.request.headers"),s("td",null,"true"),s("td",null,"附加的请求头")]),s("tr",null,[s("td",null,"turms.gateway.session.identity-access-management.http.request.http-method"),s("td",null,"GET"),s("td",null,"请求方法")]),s("tr",null,[s("td",null,"turms.gateway.session.identity-access-management.http.request.timeout-millis"),s("td",null,"30000"),s("td",null,"请求超时时长")]),s("tr",null,[s("td",null,"turms.gateway.session.identity-access-management.http.authentication.response-expectation.status-codes"),s("td",null,'"2??"'),s("td",null,"在响应状态码中匹配该值，如果匹配成功，则继续进行其他匹配，否则认证失败")]),s("tr",null,[s("td",null,"turms.gateway.session.identity-access-management.http.authentication.response-expectation.headers"),s("td"),s("td",null,"在响应头中匹配该值，如果匹配成功，则继续进行其他匹配，否则认证失败")]),s("tr",null,[s("td",null,"turms.gateway.session.identity-access-management.http.authentication.response-expectation.body-fields"),s("td",{"authenticated:":"",true:""}),s("td",null,"在响应正文中匹配该值，如果匹配成功，则继续进行其他匹配，否则认证失败")])])],-1),m=s("h4",{id:"_5-基于ldap认证",tabindex:"-1"},[t("5. 基于LDAP认证 "),s("a",{class:"header-anchor",href:"#_5-基于ldap认证","aria-label":'Permalink to "5. 基于LDAP认证"'},"​")],-1),q=s("h5",{id:"工作流程-2",tabindex:"-1"},[t("工作流程 "),s("a",{class:"header-anchor",href:"#工作流程-2","aria-label":'Permalink to "工作流程"'},"​")],-1),T=i("",12);function C(F,_,D,f,w,b){const a=l("mermaid");return o(),d("div",null,[r,e(a,{dsl:`sequenceDiagram
participant c as Client Application
participant y as Your Server
participant t as turms-gateway
c->>y: ask for JWT token
y-->>c: JWT token
c->>t: login with JWT token as #quot;password#quot;
t->>t: verify token
t-->>c: OK if verified and authenticated`}),c,p,u,k,E,e(a,{dsl:`sequenceDiagram
participant c as Client Application
participant t as turms-gateway
participant y as Your Server
c->>t: login
t->>y: user information
y-->>t: authentication and authorization
t-->>c: OK if authenticated`}),g,y,m,q,e(a,{dsl:`sequenceDiagram
participant c as Client Application
participant t as turms-gateway
participant l as LDAP Server

c->>t: login
t->>l: search user DN by user ID
l-->>t: result entries
alt count is 0
	t-->>c: unauthenticated
else count is more than 1
	t-->>c: internal error
else count is 1
	t->>l: bind by found user DN and password
	l-->>t: result code
	alt result code is 49
		t-->>c: unauthenticated
	else result code is 0
		t-->>c: authenticated
	else
		t-->>c: internal error
	end
end`}),T])}const B=n(h,[["render",C]]);export{P as __pageData,B as default};
