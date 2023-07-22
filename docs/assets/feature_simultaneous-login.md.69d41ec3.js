import{_ as e,o as t,c as o,U as i}from"./chunks/framework.95a60cb2.js";const h=JSON.parse('{"title":"Simultaneous Login","description":"","frontmatter":{},"headers":[],"relativePath":"feature/simultaneous-login.md","filePath":"feature/simultaneous-login.md"}'),n={name:"feature/simultaneous-login.md"},l=i('<h1 id="simultaneous-login" tabindex="-1">Simultaneous Login <a class="header-anchor" href="#simultaneous-login" aria-label="Permalink to &quot;Simultaneous Login&quot;">​</a></h1><h2 id="login-device-identification-strategy" tabindex="-1">Login device identification strategy <a class="header-anchor" href="#login-device-identification-strategy" aria-label="Permalink to &quot;Login device identification strategy&quot;">​</a></h2><ol><li>Manual configuration. The developer can manually configure the specific login device type when calling the <code>turmsClient.userService.login()</code> interface of the client. For an actual iOS device, specify to log in as <code>Android</code> (this operation is allowed). In addition, you can also manually configure the login device type as <code>UNKNOWN</code>.</li><li>Default configuration. If you do not manually configure the specific login device type, by default, each Turms client will automatically identify the current operating environment and specify the current login device type. <ul><li>turms-client-js will determine whether the current operating environment is a browser or Node.js, if it is a browser, log in as <code>Browser</code>, otherwise log in as <code>Desktop</code></li><li>turms-client-kotlin will judge whether the current operating environment is Android or desktop system, and log in as <code>Android</code> and <code>Desktop</code> respectively</li><li>turms-client-swift logs in as <code>iOS</code> by default</li></ul></li></ol><p>Related configuration class: <code>im.turms.server.common.infra.property.env.gateway.SessionProperties</code></p><h2 id="multi-terminal-login-type" tabindex="-1">Multi-terminal login type <a class="header-anchor" href="#multi-terminal-login-type" aria-label="Permalink to &quot;Multi-terminal login type&quot;">​</a></h2><p>&quot;Device Type&quot; means: Android, iOS, Desktop, Browser, Others, Unknown. The following are common multi-device login types for you to quickly select and implement.</p><p>Configuration property: <code>im.turms.server.common.infra.property.env.gateway.SimultaneousLoginProperties#strategy</code></p><p>Other related configurations: <code>allowDeviceTypeUnknownLogin</code>, <code>allowDeviceTypeOthersLogin</code></p><table><thead><tr><th style="text-align:left;"><strong>self-contained type</strong></th><th>corresponding Enum value</th></tr></thead><tbody><tr><td style="text-align:left;">Allow one device of each device type to be online at the same time</td><td>ALLOW_ONE_DEVICE_OF_EACH_DEVICE_TYPE_ONLINE</td></tr><tr><td style="text-align:left;">Allow only one device of one device type to be online at the same time</td><td>ALLOW_ONE_DEVICE_FOR_ALL_DEVICE_TYPES_ONLINE</td></tr><tr><td style="text-align:left;">Allow one device on Desktop and one device on mobile to be online at the same time</td><td>ALLOW_ONE_DEVICE_OF_DESKTOP_AND_ONE_DEVICE_OF_MOBILE_ONLINE</td></tr><tr><td style="text-align:left;">Allow a device on Desktop or Browser to be online at the same time as a device on mobile</td><td>ALLOW_ONE_DEVICE_OF_DESKTOP_OR_BROWSER_AND_ONE_DEVICE_OF_MOBILE_ONLINE</td></tr><tr><td style="text-align:left;">Allow a device on the Desktop side, a device on the Browser side, and a device on the mobile phone side to be online at the same time</td><td>ALLOW_ONE_DEVICE_OF_DESKTOP_AND_ONE_DEVICE_OF_BROWSER_AND_ONE_DEVICE_OF_MOBILE_ONLINE</td></tr><tr><td style="text-align:left;">Allow one device on Desktop or Mobile to be online at the same time</td><td>ALLOW_ONE_DEVICE_OF_DESKTOP_OR_MOBILE_ONLINE</td></tr><tr><td style="text-align:left;">Allow one device on Desktop, Mobile or Browser to be online at the same time</td><td>ALLOW_ONE_DEVICE_OF_DESKTOP_OR_BROWSER_OR_MOBILE_ONLINE</td></tr></tbody></table><p><strong>Notice</strong></p><ul><li>Any type of multi-terminal login does not allow a user account to have multiple simultaneous login devices on one device</li><li>When the type of user login device has <code>Unkown</code> or <code>Others</code>, additional configuration is required, that is, whether to allow <code>Unkown</code>/<code>Others</code> devices to log in with other known devices at the same time</li></ul><h2 id="multi-terminal-login-conflict-resolution-strategy" tabindex="-1">Multi-terminal login conflict resolution strategy <a class="header-anchor" href="#multi-terminal-login-conflict-resolution-strategy" aria-label="Permalink to &quot;Multi-terminal login conflict resolution strategy&quot;">​</a></h2><p>Configuration property: <code>im.turms.server.common.infra.property.env.gateway.SimultaneousLoginProperties#loginConflictStrategy</code></p><table><thead><tr><th style="text-align:left;"><strong>Type</strong></th><th>Corresponding Enum value</th></tr></thead><tbody><tr><td style="text-align:left;">Offline devices that are already online</td><td>DISCONNECT_LOGGED_IN_DEVICES</td></tr><tr><td style="text-align:left;">Refuse to go online with pre-logged devices</td><td>DISCONNECT_LOGGING_IN_DEVICE</td></tr></tbody></table>',14),a=[l];function r(d,s,c,u,_,g){return t(),o("div",null,a)}const p=e(n,[["render",r]]);export{h as __pageData,p as default};