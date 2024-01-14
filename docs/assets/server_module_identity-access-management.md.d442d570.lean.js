import{_ as o,C as l,o as r,c as i,H as n,Q as t,k as e,a as s}from"./chunks/framework.0882ee08.js";const P=JSON.parse('{"title":"Identity and Access Management","description":"","frontmatter":{},"headers":[],"relativePath":"server/module/identity-access-management.md","filePath":"server/module/identity-access-management.md"}'),c={name:"server/module/identity-access-management.md"},p=t("",17),u=t("",6),d=e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"Property"),e("th",null,"Default Value"),e("th",null,"Description")])]),e("tbody",null,[e("tr",null,[e("td",null,"turms.gateway.session.identity-access-management.type"),e("td",null,"password"),e("td",null,[s("Set to "),e("code",null,"jwt"),s(" to enable JWT-based identity and access management")])]),e("tr",null,[e("td",null,"turms.service.message.check-if-target-active-and-not-deleted"),e("td",null,"true"),e("td",null,[s("When using the "),e("code",null,"JWT"),s(" mechanism, you need to set this configuration item to "),e("code",null,"false"),s(", otherwise because it does not exist in the Turms database the user, so the user will not be able to send messages")])]),e("tr",null,[e("td",null,"turms.gateway.session.identity-access-management.jwt.verification.issuer"),e("td"),e("td",null,"When the value is not empty, verify whether the issuer of the JWT is equal to this value")]),e("tr",null,[e("td",null,"turms.gateway.session.identity-access-management.jwt.verification.audience"),e("td"),e("td",null,"When the value is not empty, verify whether the receiver of the JWT contains this value")]),e("tr",null,[e("td",null,"turms.gateway.session.identity-access-management.jwt.verification.custom-payload-claims"),e("td"),e("td",null,"When the value is not empty, verify that the private claims in the JWT match this value")]),e("tr",null,[e("td",null,"turms.gateway.session.identity-access-management.jwt.authentication.expectation.custom-payload-claims"),e("td",{"authenticated:":"",true:""}),e("td",null,"Match this value in the JWT's private claim, if the match is successful, it indicates that the User has been authenticated")]),e("tr",null,[e("td",null,"turms.gateway.session.identity-access-management.jwt.algorithm.hmac256.file-path"),e("td"),e("td",null,"key file path. Developers only need to configure this key or a group in P12 below")]),e("tr",null,[e("td",null,"turms.gateway.session.identity-access-management.jwt.algorithm.hmac256.p12.file-path"),e("td"),e("td",null,"PKCS#12 file path")]),e("tr",null,[e("td",null,"turms.gateway.session.identity-access-management.jwt.algorithm.hmac256.p12.password"),e("td"),e("td",null,"PKCS#12 key")]),e("tr",null,[e("td",null,"turms.gateway.session.identity-access-management.jwt.algorithm.hmac256.p12.key-alias"),e("td"),e("td",null,"key alias")]),e("tr",null,[e("td",null,"turms.gateway.session.identity-access-management.jwt.algorithm.hmac256.p12.key-password"),e("td"),e("td",null,"key password. When empty, it defaults to the PKCS#12 key")]),e("tr",null,[e("td",null,"turms.gateway.session.identity-access-management.jwt.algorithm.rsa256.pem-file-path"),e("td"),e("td",null,"PEM file path. Developers only need to configure the PEM or a set of P12 below")]),e("tr",null,[e("td",null,"turms.gateway.session.identity-access-management.jwt.algorithm.rsa256.p12.file-path"),e("td"),e("td",null,"PKCS#12 file path")]),e("tr",null,[e("td",null,"turms.gateway.session.identity-access-management.jwt.algorithm.rsa256.p12.password"),e("td"),e("td",null,"PKCS#12 key")]),e("tr",null,[e("td",null,"turms.gateway.session.identity-access-management.jwt.algorithm.rsa256.p12.key-alias"),e("td"),e("td",null,"public key alias")]),e("tr",null,[e("td",null,[s("The configuration of rsa384/rsa512/ps256/ps384/ps512/ecdsa256/ecdsa384/ecdsa512 is the same as the above "),e("code",null,"rsa256")]),e("td"),e("td")])])],-1),h=e("h4",{id:"_4-identity-and-access-management-mechanism-based-on-external-http-response",tabindex:"-1"},[s("4. Identity and access management mechanism based on external HTTP response "),e("a",{class:"header-anchor",href:"#_4-identity-and-access-management-mechanism-based-on-external-http-response","aria-label":'Permalink to "4. Identity and access management mechanism based on external HTTP response"'},"​")],-1),y=e("p",null,"The HTTP response contains the user's authentication and authorization information.",-1),E=e("h5",{id:"workflow-1",tabindex:"-1"},[s("Workflow "),e("a",{class:"header-anchor",href:"#workflow-1","aria-label":'Permalink to "Workflow"'},"​")],-1),m=t("",5),g=e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"Property"),e("th",null,"Default Value"),e("th",null,"Description")])]),e("tbody",null,[e("tr",null,[e("td",null,"turms.gateway.session.identity-access-management.type"),e("td",null,"password"),e("td",null,[s("Set to "),e("code",null,"http"),s(" to enable identity and access management based on external HTTP responses")])]),e("tr",null,[e("td",null,"turms.service.message.check-if-target-active-and-not-deleted"),e("td",null,"true"),e("td",null,[s("When using the "),e("code",null,"HTTP"),s(" mechanism, you need to set this configuration item to "),e("code",null,"false"),s(", otherwise because it does not exist in the Turms database the user, so the user will not be able to send messages")])]),e("tr",null,[e("td",null,"turms.gateway.session.identity-access-management.http.request.url"),e("td",null,'""'),e("td",null,"Request URL")]),e("tr",null,[e("td",null,"turms.gateway.session.identity-access-management.http.request.headers"),e("td",null,"true"),e("td",null,"additional request headers")]),e("tr",null,[e("td",null,"turms.gateway.session.identity-access-management.http.request.http-method"),e("td",null,"GET"),e("td",null,"request method")]),e("tr",null,[e("td",null,"turms.gateway.session.identity-access-management.http.request.timeout-millis"),e("td",null,"30000"),e("td",null,"Request timeout")]),e("tr",null,[e("td",null,"turms.gateway.session.identity-access-management.http.authentication.response-expectation.status-codes"),e("td",null,'"2??"'),e("td",null,"Match this value in the response status code, if the match is successful, continue to other matches, Otherwise authentication fails")]),e("tr",null,[e("td",null,"turms.gateway.session.identity-access-management.http.authentication.response-expectation.headers"),e("td"),e("td",null,"Match the value in the response header, if the match is successful, continue to other matches, otherwise the authentication fails")]),e("tr",null,[e("td",null,"turms.gateway.session.identity-access-management.http.authentication.response-expectation.body-fields"),e("td",{"authenticated:":"",true:""}),e("td",null,"Match this value in the response body, if the match is successful, continue with other matches , otherwise authentication fails")])])],-1),q=e("h4",{id:"_5-ldap-based-authentication",tabindex:"-1"},[s("5. LDAP-based Authentication "),e("a",{class:"header-anchor",href:"#_5-ldap-based-authentication","aria-label":'Permalink to "5. LDAP-based Authentication"'},"​")],-1),f=e("h5",{id:"workflow-2",tabindex:"-1"},[s("Workflow "),e("a",{class:"header-anchor",href:"#workflow-2","aria-label":'Permalink to "Workflow"'},"​")],-1),b=t("",12);function w(T,v,D,A,_,C){const a=l("mermaid");return r(),i("div",null,[p,n(a,{dsl:`sequenceDiagram
participant c as Client Application
participant y as Your Server
participant t as turms-gateway
c->>y: ask for JWT token
y-->>c: JWT token
c->>t: login with JWT token as #quot;password#quot;
t->>t: verify token
t-->>c: OK if verified and authenticated`}),u,d,h,y,E,n(a,{dsl:`sequenceDiagram
participant c as Client Application
participant t as turms-gateway
participant y as Your Server
c->>t: login
t->>y: user information
y-->>t: authentication and authorization
t-->>c: OK if authenticated`}),m,g,q,f,n(a,{dsl:`sequenceDiagram
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
end`}),b])}const B=o(c,[["render",w]]);export{P as __pageData,B as default};
