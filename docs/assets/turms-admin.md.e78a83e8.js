import{_ as e,o as a,c as t,Q as n}from"./chunks/framework.0882ee08.js";const f=JSON.parse('{"title":"turms-admin","description":"","frontmatter":{},"headers":[],"relativePath":"turms-admin.md","filePath":"turms-admin.md"}'),o={name:"turms-admin.md"},s=n('<h1 id="turms-admin" tabindex="-1">turms-admin <a class="header-anchor" href="#turms-admin" aria-label="Permalink to &quot;turms-admin&quot;">​</a></h1><p>turms-admin is a customized backend administration single page application (SPA) for Turms project, specifically including: cluster management (cluster monitoring, cluster configuration), content management, client blacklist, permission control, client terminal, these five major sections.</p><p>Note: turms-admin is positioned only as a visual Web application for the Turms server-side Admin API, so turms-admin itself does not provide any data collection, data analysis and alarm functions.</p><h2 id="deployment-overview" tabindex="-1">Deployment Overview <a class="header-anchor" href="#deployment-overview" aria-label="Permalink to &quot;Deployment Overview&quot;">​</a></h2><p>Turms uses a separate front- and back-end design, so the Turms server is not even &quot;aware&quot; of the existence of the <code>turms-admin</code> front-end project. So users can even open turms-admin directly in the browser and interact with the Turms server through local static HTML files. However, in order to facilitate developers&#39; operation and deployment, the turms-admin project also provides the following two deployment options.</p><h3 id="docker-image-recommended" tabindex="-1">Docker image (recommended) <a class="header-anchor" href="#docker-image-recommended" aria-label="Permalink to &quot;Docker image (recommended)&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-d</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-p</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">6510</span><span style="color:#9ECBFF;">:6510</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ghcr.io/turms-im/turms-admin</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-d</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-p</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">6510</span><span style="color:#032F62;">:6510</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ghcr.io/turms-im/turms-admin</span></span></code></pre></div><p>The image provides static resources for turms-admin externally through the built-in Nginx server. You will be able to access the <a href="http://localhost:6510" target="_blank" rel="noreferrer">http://localhost:6510</a> page after running the command</p><h3 id="simple-web-server" tabindex="-1">Simple web server <a class="header-anchor" href="#simple-web-server" aria-label="Permalink to &quot;Simple web server&quot;">​</a></h3><p>The turms-admin project itself also provides a simple web server based on <code>Node.js</code>. This web server will provide static resources of turms-admin to the public via HTTP interface, and will carry PM2 for turms-admin process management by default.</p><h4 id="installation-and-implementation-steps" tabindex="-1">Installation and Implementation Steps <a class="header-anchor" href="#installation-and-implementation-steps" aria-label="Permalink to &quot;Installation and Implementation Steps&quot;">​</a></h4><ol><li>Install <a href="https://nodejs.org/en" target="_blank" rel="noreferrer">Node.js</a></li><li>In the <code>turms-admin</code> directory, execute the <code>npm run quickstart</code> command, which consists of <code>npm install &amp;&amp; npm run build &amp;&amp; npm run start</code>, including the dependency package installation, front-end build and server-side execution. Wait for PM2 to indicate that the status of turms-admin is <code>online</code>, indicating that the turms-admin server-side process has been started</li><li>Open the browser and visit the <a href="http://localhost:6510" target="_blank" rel="noreferrer">http://localhost:6510</a> page</li></ol><h4 id="common-operations-and-maintenance-commands" tabindex="-1">Common operations and maintenance commands <a class="header-anchor" href="#common-operations-and-maintenance-commands" aria-label="Permalink to &quot;Common operations and maintenance commands&quot;">​</a></h4><p>start: Execute the turms-admin server-side process</p><p>stop: Terminate the turms-admin server process</p><p>delete：Terminate the turms-admin server process and delete its process record in PM2</p><p>restart: restart the turms-admin server</p><p>reload: reload the turms-admin server configuration</p><p>For more commands and server-side configurations, please refer to <a href="https://pm2.keymetrics.io/docs/usage/pm2-doc-single-page" target="_blank" rel="noreferrer">PM2 documentation</a></p><h2 id="introduction-of-the-module" tabindex="-1">Introduction of the module <a class="header-anchor" href="#introduction-of-the-module" aria-label="Permalink to &quot;Introduction of the module&quot;">​</a></h2><p>Cluster management.</p><ul><li>Cluster monitoring: view the real-time operational status of the cluster; view the specific information and metric data of a particular server</li><li>Cluster Configuration: This section corresponds to the global configuration function of the Turms server, which can modify the Turms server configuration in real time with zero downtime</li><li>Cluster Flight Logger: Manage the flight logger of each node of the cluster</li><li>Cluster plug-in: manage the plug-in of each node of the cluster</li></ul><p>Content management: add, delete, change and check various business data</p><p>Client Blacklist: This part corresponds to the global blacklist mechanism of Turms server, which is used to add, delete, and check blacklist records</p><p>Permission control: used to add, delete and change the information and permissions of administrators</p><p>Client terminal: equipped with <code>turms-client-js</code> client implementation, used for administrators to quickly test the real client request and server response</p><p>TODO: post GIF demo image</p>',27),r=[s];function i(l,c,d,m,p,h){return a(),t("div",null,r)}const g=e(o,[["render",i]]);export{f as __pageData,g as default};
