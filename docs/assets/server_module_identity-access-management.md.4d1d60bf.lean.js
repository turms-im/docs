import{_ as o,C as l,o as i,c as r,H as n,Q as t,k as s,a as e}from"./chunks/framework.0882ee08.js";const A=JSON.parse('{"title":"Identity and Access Management","description":"","frontmatter":{},"headers":[],"relativePath":"server/module/identity-access-management.md","filePath":"server/module/identity-access-management.md"}'),c={name:"server/module/identity-access-management.md"},p=t("",17),u=t("",6),d=s("table",null,[s("thead",null,[s("tr",null,[s("th",null,"config name"),s("th",null,"default value"),s("th",null,"description")])]),s("tbody",null,[s("tr",null,[s("td",null,"turms.gateway.session.identity-access-management.type"),s("td",null,"password"),s("td",null,[e("Set to "),s("code",null,"jwt"),e(" to enable JWT-based identity and access management")])]),s("tr",null,[s("td",null,"turms.service.message.check-if-target-active-and-not-deleted"),s("td",null,"true"),s("td",null,[e("When using the "),s("code",null,"JWT"),e(" mechanism, you need to set this configuration item to "),s("code",null,"false"),e(", otherwise because it does not exist in the Turms database the user, so the user will not be able to send messages")])]),s("tr",null,[s("td",null,"turms.gateway.session.identity-access-management.jwt.verification.issuer"),s("td"),s("td",null,"When the value is not empty, verify whether the issuer of the JWT is equal to this value")]),s("tr",null,[s("td",null,"turms.gateway.session.identity-access-management.jwt.verification.audience"),s("td"),s("td",null,"When the value is not empty, verify whether the receiver of the JWT contains this value")]),s("tr",null,[s("td",null,"turms.gateway.session.identity-access-management.jwt.verification.custom-payload-claims"),s("td"),s("td",null,"When the value is not empty, verify that the private claims in the JWT match this value")]),s("tr",null,[s("td",null,"turms.gateway.session.identity-access-management.jwt.authentication.expectation.custom-payload-claims"),s("td",{"authenticated:":"",true:""}),s("td",null,"Match this value in the JWT's private claim, if the match is successful, it indicates that the User has been authenticated")]),s("tr",null,[s("td",null,"turms.gateway.session.identity-access-management.jwt.algorithm.hmac256.file-path"),s("td"),s("td",null,"key file path. Developers only need to configure this key or a group in P12 below")]),s("tr",null,[s("td",null,"turms.gateway.session.identity-access-management.jwt.algorithm.hmac256.p12.file-path"),s("td"),s("td",null,"PKCS#12 file path")]),s("tr",null,[s("td",null,"turms.gateway.session.identity-access-management.jwt.algorithm.hmac256.p12.password"),s("td"),s("td",null,"PKCS#12 key")]),s("tr",null,[s("td",null,"turms.gateway.session.identity-access-management.jwt.algorithm.hmac256.p12.key-alias"),s("td"),s("td",null,"key alias")]),s("tr",null,[s("td",null,"turms.gateway.session.identity-access-management.jwt.algorithm.hmac256.p12.key-password"),s("td"),s("td",null,"key password. When empty, it defaults to the PKCS#12 key")]),s("tr",null,[s("td",null,"turms.gateway.session.identity-access-management.jwt.algorithm.rsa256.pem-file-path"),s("td"),s("td",null,"PEM file path. Developers only need to configure the PEM or a set of P12 below")]),s("tr",null,[s("td",null,"turms.gateway.session.identity-access-management.jwt.algorithm.rsa256.p12.file-path"),s("td"),s("td",null,"PKCS#12 file path")]),s("tr",null,[s("td",null,"turms.gateway.session.identity-access-management.jwt.algorithm.rsa256.p12.password"),s("td"),s("td",null,"PKCS#12 key")]),s("tr",null,[s("td",null,"turms.gateway.session.identity-access-management.jwt.algorithm.rsa256.p12.key-alias"),s("td"),s("td",null,"public key alias")]),s("tr",null,[s("td",null,[e("The configuration of rsa384/rsa512/ps256/ps384/ps512/ecdsa256/ecdsa384/ecdsa512 is the same as the above "),s("code",null,"rsa256")]),s("td"),s("td")])])],-1),y=s("h4",{id:"_4-identity-and-access-management-mechanism-based-on-external-http-response",tabindex:"-1"},[e("4. Identity and access management mechanism based on external HTTP response "),s("a",{class:"header-anchor",href:"#_4-identity-and-access-management-mechanism-based-on-external-http-response","aria-label":'Permalink to "4. Identity and access management mechanism based on external HTTP response"'},"​")],-1),h=s("p",null,"The HTTP response contains the user's authentication and authorization information.",-1),E=s("h5",{id:"work-process-1",tabindex:"-1"},[e("work process "),s("a",{class:"header-anchor",href:"#work-process-1","aria-label":'Permalink to "work process"'},"​")],-1),m=t("",5),g=s("table",null,[s("thead",null,[s("tr",null,[s("th",null,"config name"),s("th",null,"default value"),s("th",null,"description")])]),s("tbody",null,[s("tr",null,[s("td",null,"turms.gateway.session.identity-access-management.type"),s("td",null,"password"),s("td",null,[e("Set to "),s("code",null,"http"),e(" to enable identity and access management based on external HTTP responses")])]),s("tr",null,[s("td",null,"turms.service.message.check-if-target-active-and-not-deleted"),s("td",null,"true"),s("td",null,[e("When using the "),s("code",null,"HTTP"),e(" mechanism, you need to set this configuration item to "),s("code",null,"false"),e(", otherwise because it does not exist in the Turms database the user, so the user will not be able to send messages")])]),s("tr",null,[s("td",null,"turms.gateway.session.identity-access-management.http.request.url"),s("td",null,'""'),s("td",null,"Request URL")]),s("tr",null,[s("td",null,"turms.gateway.session.identity-access-management.http.request.headers"),s("td",null,"true"),s("td",null,"additional request headers")]),s("tr",null,[s("td",null,"turms.gateway.session.identity-access-management.http.request.http-method"),s("td",null,"GET"),s("td",null,"request method")]),s("tr",null,[s("td",null,"turms.gateway.session.identity-access-management.http.request.timeout-millis"),s("td",null,"30000"),s("td",null,"Request timeout")]),s("tr",null,[s("td",null,"turms.gateway.session.identity-access-management.http.authentication.response-expectation.status-codes"),s("td",null,'"2??"'),s("td",null,"Match this value in the response status code, if the match is successful, continue to other matches, Otherwise authentication fails")]),s("tr",null,[s("td",null,"turms.gateway.session.identity-access-management.http.authentication.response-expectation.headers"),s("td"),s("td",null,"Match the value in the response header, if the match is successful, continue to other matches, otherwise the authentication fails")]),s("tr",null,[s("td",null,"turms.gateway.session.identity-access-management.http.authentication.response-expectation.body-fields"),s("td",{"authenticated:":"",true:""}),s("td",null,"Match this value in the response body, if the match is successful, continue with other matches , otherwise authentication fails")])])],-1),q=t("",8);function f(b,T,w,C,v,F){const a=l("mermaid");return i(),r("div",null,[p,n(a,{dsl:`sequenceDiagram
participant c as Client Application
participant y as Your Server
participant t as turms-gateway
c->>y: ask for JWT token
y-->>c: JWT token
c->>t: login with JWT token as #quot;password#quot;
t->>t: verify token
t-->>c: OK if verified and authenticated`}),u,d,y,h,E,n(a,{dsl:`sequenceDiagram
participant c as Client Application
participant t as turms-gateway
participant y as Your Server
c->>t: login
t->>y: user information
y-->>t: authentication and authorization
t-->>c: OK if authenticated`}),m,g,q])}const B=o(c,[["render",f]]);export{A as __pageData,B as default};
