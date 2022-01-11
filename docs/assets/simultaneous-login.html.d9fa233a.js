import{e as t}from"./app.384ff6f9.js";import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";const d={},r=t('<h1 id="\u591A\u7AEF\u767B\u5F55" tabindex="-1"><a class="header-anchor" href="#\u591A\u7AEF\u767B\u5F55" aria-hidden="true">#</a> \u591A\u7AEF\u767B\u5F55</h1><h2 id="\u767B\u9646\u8BBE\u5907\u8BC6\u522B\u7B56\u7565" tabindex="-1"><a class="header-anchor" href="#\u767B\u9646\u8BBE\u5907\u8BC6\u522B\u7B56\u7565" aria-hidden="true">#</a> \u767B\u9646\u8BBE\u5907\u8BC6\u522B\u7B56\u7565</h2><ol><li>\u624B\u52A8\u914D\u7F6E\u3002\u5F00\u53D1\u8005\u5728\u8C03\u7528\u5BA2\u6237\u7AEF\u7684<code>turmsClient.userService.login()</code>\u63A5\u53E3\u65F6\uFF0C\u53EF\u4EE5\u624B\u52A8\u914D\u7F6E\u5177\u4F53\u7684\u767B\u5F55\u8BBE\u5907\u7C7B\u578B\u3002\u5982\u7ED9\u5B9E\u9645\u4E3AiOS\u7684\u8BBE\u5907\uFF0C\u6307\u5B9A\u4EE5<code>Android</code>\u7684\u8EAB\u4EFD\u8FDB\u884C\u767B\u5F55\uFF08\u8FD9\u79CD\u64CD\u4F5C\u662F\u88AB\u5141\u8BB8\u7684\uFF09\u3002\u53E6\u5916\uFF0C\u60A8\u4E5F\u80FD\u624B\u52A8\u914D\u7F6E\u767B\u5F55\u8BBE\u5907\u7C7B\u578B\u4E3A<code>UNKNOWN</code>\u3002</li><li>\u9ED8\u8BA4\u914D\u7F6E\u3002\u5982\u679C\u60A8\u672A\u624B\u52A8\u914D\u7F6E\u5177\u4F53\u767B\u5F55\u8BBE\u5907\u7C7B\u578B\uFF0C\u5219\u5728\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u5404Turms\u5BA2\u6237\u7AEF\u4F1A\u81EA\u52A8\u8BC6\u522B\u5F53\u524D\u8FD0\u884C\u73AF\u5883\uFF0C\u5E76\u6307\u5B9A\u5F53\u524D\u767B\u5F55\u8BBE\u5907\u7C7B\u578B\u3002 <ul><li>turms-client-js \u4F1A\u5224\u65AD\u5F53\u524D\u8FD0\u884C\u73AF\u5883\u662F\u6D4F\u89C8\u5668\u8FD8\u662FNode.js\uFF0C\u5982\u679C\u662F\u6D4F\u89C8\u5668\uFF0C\u5219\u4EE5<code>Browser</code>\u8EAB\u4EFD\u767B\u5F55\uFF0C\u5426\u5219\u4EE5<code>Desktop</code>\u8EAB\u4EFD\u767B\u5F55</li><li>turms-client-kotlin \u4F1A\u5224\u65AD\u5F53\u524D\u7684\u8FD0\u884C\u73AF\u5883\u662FAndroid\u8FD8\u662F\u684C\u9762\u7CFB\u7EDF\uFF0C\u5206\u522B\u4EE5<code>Android</code>\u3001<code>Desktop</code>\u7684\u8EAB\u4EFD\u767B\u5F55</li><li>turms-client-swift \u5219\u9ED8\u8BA4\u4EE5<code>iOS</code>\u8EAB\u4EFD\u8FDB\u884C\u767B\u5F55</li></ul></li></ol><p>\u76F8\u5173\u914D\u7F6E\u7C7B\uFF1A<code>im.turms.server.common.property.env.gateway.SessionProperties</code></p><h2 id="\u591A\u7AEF\u767B\u5F55\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u591A\u7AEF\u767B\u5F55\u7C7B\u578B" aria-hidden="true">#</a> \u591A\u7AEF\u767B\u5F55\u7C7B\u578B</h2><p>\u201C\u8BBE\u5907\u7C7B\u578B\u201D\u6307\u7684\u662F\uFF1AAndroid\u3001iOS\u3001Desktop\u3001Browser\u3001Others\u3001Unknown\u3002 \u4EE5\u4E0B\u662F\u5E38\u89C1\u7684\u591A\u7AEF\u767B\u9646\u7C7B\u578B\u642D\u914D\uFF0C\u4F9B\u60A8\u5FEB\u901F\u6311\u9009\u5B9E\u73B0\u3002</p><p>\u914D\u7F6E\u5C5E\u6027\uFF1A<code>im.turms.server.common.property.env.gateway.SimultaneousLoginProperties#strategy</code></p><p>\u5176\u4ED6\u76F8\u5173\u914D\u7F6E\uFF1A<code>allowDeviceTypeUnknownLogin</code>\u3001<code>allowDeviceTypeOthersLogin</code></p><table><thead><tr><th style="text-align:left;"><strong>\u81EA\u5E26\u7C7B\u578B</strong></th><th>\u5BF9\u5E94Enum\u503C</th></tr></thead><tbody><tr><td style="text-align:left;">\u5141\u8BB8\u6BCF\u79CD\u8BBE\u5907\u7C7B\u578B\u7684\u4E00\u4E2A\u8BBE\u5907\u90FD\u80FD\u540C\u65F6\u5728\u7EBF</td><td>ALLOW_ONE_DEVICE_OF_EACH_DEVICE_TYPE_ONLINE</td></tr><tr><td style="text-align:left;">\u4EC5\u5141\u8BB8\u4E00\u4E2A\u8BBE\u5907\u7C7B\u578B\u7684\u4E00\u4E2A\u8BBE\u5907\u540C\u65F6\u5728\u7EBF</td><td>ALLOW_ONE_DEVICE_FOR_ALL_DEVICE_TYPES_ONLINE</td></tr><tr><td style="text-align:left;">\u5141\u8BB8Desktop\u7AEF\u7684\u4E00\u4E2A\u8BBE\u5907\u4E0E\u624B\u673A\u7AEF\u7684\u4E00\u4E2A\u8BBE\u5907\u540C\u65F6\u5728\u7EBF</td><td>ALLOW_ONE_DEVICE_OF_DESKTOP_AND_ONE_DEVICE_OF_MOBILE_ONLINE</td></tr><tr><td style="text-align:left;">\u5141\u8BB8Desktop\u7AEF\u6216\u8005Browser\u7AEF\u7684\u4E00\u4E2A\u8BBE\u5907\uFF0C\u4E0E\u624B\u673A\u7AEF\u7684\u4E00\u4E2A\u8BBE\u5907\u540C\u65F6\u5728\u7EBF</td><td>ALLOW_ONE_DEVICE_OF_DESKTOP_OR_BROWSER_AND_ONE_DEVICE_OF_MOBILE_ONLINE</td></tr><tr><td style="text-align:left;">\u5141\u8BB8Desktop\u7AEF\u7684\u4E00\u4E2A\u8BBE\u5907\uFF0C\u4E0EBrowser\u7AEF\u7684\u4E00\u4E2A\u8BBE\u5907\uFF0C\u4E0E\u624B\u673A\u7AEF\u7684\u4E00\u4E2A\u8BBE\u5907\u540C\u65F6\u5728\u7EBF</td><td>ALLOW_ONE_DEVICE_OF_DESKTOP_AND_ONE_DEVICE_OF_BROWSER_AND_ONE_DEVICE_OF_MOBILE_ONLINE</td></tr><tr><td style="text-align:left;">\u5141\u8BB8Desktop\u7AEF\u6216\u624B\u673A\u7AEF\u7684\u4E00\u4E2A\u8BBE\u5907\u540C\u65F6\u5728\u7EBF</td><td>ALLOW_ONE_DEVICE_OF_DESKTOP_OR_MOBILE_ONLINE</td></tr><tr><td style="text-align:left;">\u5141\u8BB8Desktop\u7AEF\u6216\u624B\u673A\u7AEF\u6216Browser\u7AEF\u7684\u4E00\u4E2A\u8BBE\u5907\u540C\u65F6\u5728\u7EBF</td><td>ALLOW_ONE_DEVICE_OF_DESKTOP_OR_BROWSER_OR_MOBILE_ONLINE</td></tr></tbody></table><p><strong>\u6CE8\u610F</strong></p><ul><li>\u4EFB\u4F55\u591A\u7AEF\u767B\u9646\u7C7B\u578B\u90FD\u4E0D\u5141\u8BB8\u4E00\u4E2A\u7528\u6237\u8D26\u53F7\u5728\u4E00\u79CD\u8BBE\u5907\u4E0A\u6709\u591A\u4E2A\u540C\u65F6\u767B\u9646\u7684\u8BBE\u5907</li><li>\u5F53\u7528\u6237\u767B\u9646\u8BBE\u5907\u7684\u7C7B\u578B\u6709<code>Unkown</code>\u6216<code>Others</code>\u60C5\u51B5\u65F6\uFF0C\u9700\u8FDB\u884C\u989D\u5916\u914D\u7F6E\uFF0C\u5373\u662F\u5426\u5141\u8BB8<code>Unkown</code>/<code>Others</code>\u8BBE\u5907\u4E0E\u5176\u4ED6\u5DF2\u77E5\u8BBE\u5907\u540C\u65F6\u767B\u9646</li></ul><h2 id="\u591A\u7AEF\u767B\u9646\u51B2\u7A81\u89E3\u51B3\u7B56\u7565" tabindex="-1"><a class="header-anchor" href="#\u591A\u7AEF\u767B\u9646\u51B2\u7A81\u89E3\u51B3\u7B56\u7565" aria-hidden="true">#</a> \u591A\u7AEF\u767B\u9646\u51B2\u7A81\u89E3\u51B3\u7B56\u7565</h2><p>\u914D\u7F6E\u5C5E\u6027\uFF1A<code>im.turms.server.common.property.env.gateway.SimultaneousLoginProperties#loginConflictStrategy</code></p><table><thead><tr><th style="text-align:left;"><strong>\u7C7B\u578B</strong></th><th>\u5BF9\u5E94Enum\u503C</th></tr></thead><tbody><tr><td style="text-align:left;">\u4E0B\u7EBF\u5DF2\u4E0A\u7EBF\u8BBE\u5907</td><td>DISCONNECT_LOGGED_IN_DEVICES</td></tr><tr><td style="text-align:left;">\u62D2\u7EDD\u9884\u4E0A\u7EBF\u8BBE\u5907\u4E0A\u7EBF</td><td>DISCONNECT_LOGGING_IN_DEVICE</td></tr></tbody></table>',14);function o(_,i){return r}var n=e(d,[["render",o]]);export{n as default};
