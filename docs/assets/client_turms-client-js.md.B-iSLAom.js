import{_ as s,c as e,o as i,a3 as a}from"./chunks/framework.ViWktWD6.js";const u=JSON.parse('{"title":"turms-client-js Shared Context","description":"","frontmatter":{},"headers":[],"relativePath":"client/turms-client-js.md","filePath":"client/turms-client-js.md"}'),n={name:"client/turms-client-js.md"},t=a(`<h1 id="turms-client-js-shared-context" tabindex="-1">turms-client-js Shared Context <a class="header-anchor" href="#turms-client-js-shared-context" aria-label="Permalink to &quot;turms-client-js Shared Context&quot;">​</a></h1><h2 id="background" tabindex="-1">Background <a class="header-anchor" href="#background" aria-label="Permalink to &quot;Background&quot;">​</a></h2><p>Since the Turms server does not support and does not plan to support: a user establishes multiple sessions at the same time on the same platform. Therefore, if a user opens multiple tabs in the browser and tries to log in with <strong>the same user ID and device type</strong>, then there is one and only one session that can be successfully established. From the perspective of the browser, there is one and only one tab page that can log in successfully. This scenario is suitable for general social applications.</p><h2 id="application-scenarios" tabindex="-1">Application Scenarios <a class="header-anchor" href="#application-scenarios" aria-label="Permalink to &quot;Application Scenarios&quot;">​</a></h2><p>However, some instant messaging scenarios require support for: from a user&#39;s perspective, the user only needs to log in once on one page, so that clients in other tabs are also logged in. The Turms clients in all tabs should be able to send and receive requests, messages, and notifications with the same user identity. It is suitable for scenarios such as customer service systems.</p><p>To support the above scenarios, a <code>Shared Context</code> needs to be used. Specifically, for Turms clients of the same domain (same protocol; same domain name; same port), same user ID, and same device type in different tabs, they can share the WebSocket connection with the Turms server and logged-in user information.</p><p>Note: Only Turms clients with the same domain, user ID, and device type can share context. Therefore, your client can log in with different user identities in different tabs to support features such as &quot;some tabs share A user&#39;s session, while others share B user&#39;s session.&quot;</p><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><p>turms-client-js does not enable the shared context by default, but if your application needs to use this feature, you can enable it by passing the parameter <code>useSharedContext: true</code> when creating a <code>TurmsClient</code> instance as follows:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> client </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> TurmsClient</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     useSharedContext: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><p>If <code>useSharedContext</code> is <code>true</code>, but the user&#39;s browser does not support <code>Shared Web Workers</code>, <code>new TurmsClient()</code> will directly throw an error.</p><p>If you want to know in advance whether the current browser supports shared context, you can call: <code>TurmsClient.isSharedContextSupported()</code>, this method returns a <code>boolean</code> value, <code>true</code> means support, <code>false</code> means no support.</p><p>Precautions:</p><ul><li>If the <code>Shared Context</code> is enabled, then you will no longer be able to directly call the <code>client.driver.connectionService#connect</code> method by yourself (usually, users do not need to directly call the underlying method). Other than that, you don&#39;t need to modify other logic codes to adapt the shared context.</li></ul><h2 id="supported-browser-versions" tabindex="-1">Supported Browser Versions <a class="header-anchor" href="#supported-browser-versions" aria-label="Permalink to &quot;Supported Browser Versions&quot;">​</a></h2><p>Since turms-client-js uses <code>Shared Web Workers</code> to implement shared context, the version requirements are the same as <a href="https://caniuse.com/sharedworkers" target="_blank" rel="noreferrer">Shared Web Workers</a>.</p><h2 id="code-example" tabindex="-1">Code Example <a class="header-anchor" href="#code-example" aria-label="Permalink to &quot;Code Example&quot;">​</a></h2><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// On the first tab of the same origin</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// The client will create a new WebSocket connection</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> client </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> TurmsClient</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    useSharedContext: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">client.userService.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">login</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    userId: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    password: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;123&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    deviceType: DeviceType.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">BROWSER</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// On the second tab of the same origin</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// The client will share the WebSocket connection with the first tab</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> client </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> TurmsClient</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    useSharedContext: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">client.userService.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">login</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    userId: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    password: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;123&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    deviceType: DeviceType.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">BROWSER</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// On the third tab of the same origin</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// The client will create a new WebSocket connection because it uses a new device type</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> client </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> TurmsClient</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    useSharedContext: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">client.userService.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">login</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    userId: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    password: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;123&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    deviceType: DeviceType.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ANDROID</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div>`,18),l=[t];function h(r,p,o,k,d,c){return i(),e("div",null,l)}const g=s(n,[["render",h]]);export{u as __pageData,g as default};