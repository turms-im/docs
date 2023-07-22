import{_ as t,o as e,c as d,U as r}from"./chunks/framework.95a60cb2.js";const b=JSON.parse('{"title":"存储服务","description":"","frontmatter":{},"headers":[],"relativePath":"zh-CN/server/module/storage.md","filePath":"zh-CN/server/module/storage.md"}'),a={name:"zh-CN/server/module/storage.md"},o=r('<h1 id="存储服务" tabindex="-1">存储服务 <a class="header-anchor" href="#存储服务" aria-label="Permalink to &quot;存储服务&quot;">​</a></h1><p>Turms自身并不直接提供存储服务，而是在服务端侧开放了存储服务中常见的接口，以供开发者自行实现，而Turms客户端也提供了相对应的存储服务<code>turmsClient.storageService</code>的API，以供开发者自行调用。</p><p>注意：</p><ul><li>开发者完全可以不用Turms客户端与服务端提供的任何接口，而是自己实现一套应用客户端与您自己服务端的交互存储逻辑。Turms只是自己维护了一套常见存储服务的实现，这样大部分开发者就不用自己从零开发了。即便开发者不打算用Turms的存储实现，由于各存储服务实现都是大同小异的，开发者也可以参考Turms的存储实现流程来实现自己的存储逻辑，以节省自研的时间。</li><li>Turms客户端存储服务提供的功能是Turms服务端官方存储服务插件功能的超集，即：Turms客户端存储服务被设计成既可以与Turms服务端官方存储服务插件进行交互，也可以被拓展与其他第三方插件进行交互。</li></ul><h2 id="插件接口与配置" tabindex="-1">插件接口与配置 <a class="header-anchor" href="#插件接口与配置" aria-label="Permalink to &quot;插件接口与配置&quot;">​</a></h2><p>存储资源目前一共分为三个类型，分别是：<code>User Profile Picture</code>（用户资料图片）、<code>Group Profile Picture</code>（群组资料图片）与<code>Message Attachment</code>（消息附件）。而每个资源都有其对应的增（改）删查三个函数接口，以供开发者实现。</p><h3 id="接口" tabindex="-1">接口 <a class="header-anchor" href="#接口" aria-label="Permalink to &quot;接口&quot;">​</a></h3><p>插件接口：<code>im.turms.service.infra.plugin.extension.StorageServiceProvider</code></p><p>接口函数介绍：</p><table><thead><tr><th>资源类型</th><th>函数名</th><th>预期作用</th><th>返回值说明</th></tr></thead><tbody><tr><td>用户资料图片</td><td>deleteUserProfilePicture</td><td>删除用户资料图片</td><td></td></tr><tr><td></td><td>queryUserProfilePictureUploadInfo</td><td>查询用户资料图片上传信息</td><td>返回值格式为<code>Map&lt;String, String&gt;</code>，插件实现者可以自定义任意返回值</td></tr><tr><td></td><td>queryUserProfilePictureDownloadInfo</td><td>查询用户资料图片下载信息</td><td>返回值格式为<code>Map&lt;String, String&gt;</code>，插件实现者可以自定义任意返回值</td></tr><tr><td>群组资料图片</td><td>deleteGroupProfilePicture</td><td>删除群组资料图片</td><td></td></tr><tr><td></td><td>queryGroupProfilePictureUploadInfo</td><td>查询群组资料图片上传信息</td><td>返回值格式为<code>Map&lt;String, String&gt;</code>，插件实现者可以自定义任意返回值</td></tr><tr><td></td><td>queryGroupProfilePictureDownloadInfo</td><td>查询群组资料图片下载信息</td><td>返回值格式为<code>Map&lt;String, String&gt;</code>，插件实现者可以自定义任意返回值</td></tr><tr><td>消息附件</td><td>deleteMessageAttachment</td><td>删除消息附件</td><td></td></tr><tr><td></td><td>shareMessageAttachmentWithUser</td><td>将消息附件分享给指定用户</td><td></td></tr><tr><td></td><td>shareMessageAttachmentWithGroup</td><td>将消息附件分享给指定群组</td><td></td></tr><tr><td></td><td>unshareMessageAttachmentWithUser</td><td>不再将消息附件分享给指定用户</td><td></td></tr><tr><td></td><td>unshareMessageAttachmentWithGroup</td><td>不再将消息附件分享给指定群组</td><td></td></tr><tr><td></td><td>queryMessageAttachmentUploadInfo</td><td>查询消息附件上传信息</td><td>返回值格式为<code>Map&lt;String, String&gt;</code>，插件实现者可以自定义任意返回值</td></tr><tr><td></td><td>queryMessageAttachmentUploadInfoInPrivateConversation</td><td>查询私聊会话中的消息附件上传信息</td><td></td></tr><tr><td></td><td>queryMessageAttachmentUploadInfoInGroupConversation</td><td>查询群聊会话中的消息附件上传信息</td><td></td></tr><tr><td></td><td>queryMessageAttachmentDownloadInfo</td><td>查询消息附件下载信息</td><td>返回值格式为<code>Map&lt;String, String&gt;</code>，插件实现者可以自定义任意返回值</td></tr><tr><td></td><td>queryMessageAttachmentInfosUploadedByRequester</td><td>查询请求者上传的消息附件</td><td></td></tr><tr><td></td><td>queryMessageAttachmentInfosInPrivateConversations</td><td>查询私聊会话中的消息附件</td><td></td></tr><tr><td></td><td>queryMessageAttachmentInfosInGroupConversations</td><td>查询群聊会话中的消息附件</td><td></td></tr></tbody></table><h3 id="通用配置" tabindex="-1">通用配置 <a class="header-anchor" href="#通用配置" aria-label="Permalink to &quot;通用配置&quot;">​</a></h3><table><thead><tr><th>配置项</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>turms.service.storage.user-profile-picture.expire-after-days</td><td>0</td><td>自创建时间开始，资源的有效时长（天）。0值代表不会过期</td></tr><tr><td>turms.service.storage.user-profile-picture.allowed-referrers</td><td>空</td><td>只允许指定的Referrers访问资源</td></tr><tr><td>turms.service.storage.user-profile-picture.allowed-content-type</td><td><code>*/*</code></td><td>允许上传的资源<code>Content-Type</code>。<code>*/*</code>值代表无限制</td></tr><tr><td>turms.service.storage.user-profile-picture.min-size-bytes</td><td>0</td><td>允许上传的资源最小值。0值代表无限制</td></tr><tr><td>turms.service.storage.user-profile-picture.max-size-bytes</td><td>1MB</td><td>允许上传的资源最大值。0值代表无限制</td></tr><tr><td>turms.service.storage.user-profile-picture.download-url-expire-after-seconds</td><td>300</td><td>资源下载URL的有效时长（秒）</td></tr><tr><td>turms.service.storage.user-profile-picture.upload-url-expire-after-seconds</td><td>300</td><td>资源上传URL的有效时长（秒）</td></tr><tr><td>turms.service.storage.group-profile-picture....</td><td></td><td>同turms.service.storage.user-profile-picture</td></tr><tr><td>turms.service.storage.message-attachment....</td><td></td><td>同turms.service.storage.user-profile-picture</td></tr></tbody></table><h2 id="官方插件实现" tabindex="-1">官方插件实现 <a class="header-anchor" href="#官方插件实现" aria-label="Permalink to &quot;官方插件实现&quot;">​</a></h2><h3 id="bucket的基础设计准则" tabindex="-1">Bucket的基础设计准则 <a class="header-anchor" href="#bucket的基础设计准则" aria-label="Permalink to &quot;Bucket的基础设计准则&quot;">​</a></h3><p>由于对象存储服务提供的功能都大同小异，Turms当前与未来提供的基于对象存储服务的官方插件都会遵循下述的Bucket设计准则。</p><p>如上所述，Turms目前包括三类存储资源，分别是<code>User Profile Picture</code>（用户资料图片）、<code>Group Profile Picture</code>（群组资料图片）与<code>Message Attachment</code>（消息附件），它们各自所对应的Bucket名分别为<code>user-profile-picture</code>、<code>group-profile-picture</code>与<code>message-attachment</code>。其中：</p><ul><li><code>user-profile-picture</code>与<code>group-profile-picture</code>为公开Buckets。对于这些资源的URL，Turms既支持生成规律的URL，以支持客户端自行预测资源URL，避免向Turms服务端发送查询资源URL的请求，也支持生成不规律的URL，以用于反爬虫。具体您的应用需要使用哪种URL，则要根据您产品自身的需求决定。</li><li><code>message-attachment</code>为私有Bucket，通过Presigned URL为授权的用户提供临时访问消息附件用的URL。</li><li>所有资源的上传流程都是基于通过Presigned URL为授权的用户提供临时的Multipart Upload接口实现的。</li></ul><p>当然，以上只是默认配置，当前主流对象存储服务都支持许多实用特性，如数据冷热分离存储（如Amazon S3 Intelligent-Tiering Storage Class）、加密、复杂的权限控制等等，用户可以在Turms创建的Buckets基础上，再自行通过对象存储服务做进行进一步的配置。</p><h3 id="turms-plugin-minio" tabindex="-1">turms-plugin-minio <a class="header-anchor" href="#turms-plugin-minio" aria-label="Permalink to &quot;turms-plugin-minio&quot;">​</a></h3><h4 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h4><p>turms-plugin-minio是一个基于开源对象存储服务<a href="https://min.io" target="_blank" rel="noreferrer">MinIO</a>而开发的turms-service存储服务实现插件。</p><h4 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h4><ul><li><a href="https://min.io/download" target="_blank" rel="noreferrer">MinIO服务端的下载与安装</a></li><li><a href="https://turms-im.github.io/docs/zh-CN/server/development/plugin#%E6%8F%92%E4%BB%B6%E5%8A%A0%E8%BD%BD%E6%96%B9%E5%BC%8F" target="_blank" rel="noreferrer">插件的加载方式</a></li></ul><p>当插件在服务端<code>Start</code>之后，客户端即可调用<code>turmsClient.storageService</code>下对应的API，对存储资源进行增删改查操作。</p><h4 id="客户端调用存储相关接口时的注意事项" tabindex="-1">客户端调用存储相关接口时的注意事项 <a class="header-anchor" href="#客户端调用存储相关接口时的注意事项" aria-label="Permalink to &quot;客户端调用存储相关接口时的注意事项&quot;">​</a></h4><p>由于Turms客户端的存储接口采用的是通用接口设计，并不是为turms-plugin-minio定制的，因此在调用客户端API时，需要注意以下事项：</p><ul><li>当调用<code>queryMessageAttachment</code>接口时，参数<code>fetchDownloadInfo</code>必须为<code>true</code>；当调用<code>queryMessageAttachmentDownloadInfo</code>接口时，参数<code>fetch</code>必须为<code>true</code>。</li></ul><h4 id="业务功能" tabindex="-1">业务功能 <a class="header-anchor" href="#业务功能" aria-label="Permalink to &quot;业务功能&quot;">​</a></h4><h5 id="消息附件功能" tabindex="-1">消息附件功能 <a class="header-anchor" href="#消息附件功能" aria-label="Permalink to &quot;消息附件功能&quot;">​</a></h5><h6 id="上传消息附件" tabindex="-1">上传消息附件 <a class="header-anchor" href="#上传消息附件" aria-label="Permalink to &quot;上传消息附件&quot;">​</a></h6><table><thead><tr><th>功能</th><th>支持</th></tr></thead><tbody><tr><td>不指定任何会话，上传消息附件</td><td>TODO</td></tr><tr><td>上传消息附件给指定单个私聊会话</td><td>✔</td></tr><tr><td>上传消息附件给指定多个私聊会话</td><td></td></tr><tr><td>上传消息附件给指定单个群聊会话</td><td>✔</td></tr><tr><td>上传消息附件给指定多个群聊会话</td><td></td></tr></tbody></table><h6 id="删除消息附件" tabindex="-1">删除消息附件 <a class="header-anchor" href="#删除消息附件" aria-label="Permalink to &quot;删除消息附件&quot;">​</a></h6><table><thead><tr><th>功能</th><th>支持</th></tr></thead><tbody><tr><td>删除任意会话中的消息附件</td><td>TODO</td></tr></tbody></table><h6 id="分享与取消分享" tabindex="-1">分享与取消分享 <a class="header-anchor" href="#分享与取消分享" aria-label="Permalink to &quot;分享与取消分享&quot;">​</a></h6><table><thead><tr><th>功能</th><th>支持</th></tr></thead><tbody><tr><td>分享已上传的消息附件给单个私聊会话</td><td>✔</td></tr><tr><td>分享已上传的消息附件给多个私聊会话</td><td></td></tr><tr><td>分享已上传的消息附件给单个群聊会话</td><td>✔</td></tr><tr><td>分享已上传的消息附件给多个群聊会话</td><td></td></tr><tr><td>取消与单个私聊会话的分享已上传的消息附件给单个私聊会话</td><td>TODO</td></tr><tr><td>取消分享已上传的消息附件给多个私聊会话</td><td></td></tr><tr><td>分享已上传的消息附件给单个群聊会话</td><td>TODO</td></tr><tr><td>分享已上传的消息附件给多个群聊会话</td><td></td></tr></tbody></table><p>对于更高级的分享功能，诸如细致的权限控制、自定义分享时长、加密分享等功能，近期暂无计划支持。</p><h5 id="查询" tabindex="-1">查询 <a class="header-anchor" href="#查询" aria-label="Permalink to &quot;查询&quot;">​</a></h5><table><thead><tr><th>功能</th><th>支持</th></tr></thead><tbody><tr><td>指定单个私聊会话中，对方分享给我的附件</td><td>✔</td></tr><tr><td>指定单个私聊会话中，我发送给对方的附件</td><td>✔</td></tr><tr><td>指定单个私聊会话中，对方分享给我的附件与我发送给对方的附件</td><td>✔</td></tr><tr><td>指定多个私聊会话中，对方分享给我的附件</td><td></td></tr><tr><td>指定多个私聊会话中，我发送给对方的附件</td><td></td></tr><tr><td>指定多个私聊会话中，对方分享给我的附件与我发送给对方的附件</td><td></td></tr><tr><td>所有私聊会话中，对方分享给我的附件</td><td></td></tr><tr><td>所有私聊会话中，我发送给对方的附件</td><td>不支持“只查询私聊会话中，我发送给对方的附件”，<br>但支持“在所有会话中，我分享的附件”</td></tr><tr><td>所有私聊会话中，对方分享给我的附件与我发送给对方的附件</td><td></td></tr><tr><td></td><td></td></tr><tr><td>指定单个群聊会话中，指定单个用户（可以是我自己）分享的附件</td><td>✔</td></tr><tr><td>指定单个群聊会话中，指定多个用户（可以包括我自己）分享的附件</td><td>✔</td></tr><tr><td>指定单个群聊会话中，所有用户分享（包括我自己）的附件</td><td>✔</td></tr><tr><td>指定多个群聊会话中，指定单个用户（可以是我自己）分享的附件</td><td></td></tr><tr><td>指定多个群聊会话中，指定多个用户（可以包括我自己）分享的附件</td><td></td></tr><tr><td>指定多个群聊会话中，所有用户分享（包括我自己）的附件</td><td></td></tr><tr><td>所有群聊会话中，指定单个用户分享的附件</td><td>不支持“所有群聊会话中，指定我分享的附件”，<br>但支持“在所有会话中，我分享的附件”</td></tr><tr><td>所有群聊会话中，指定多个用户（可以包括我自己）分享的附件</td><td></td></tr><tr><td>所有群聊会话中，所有用户分享（包括我自己）的附件</td><td></td></tr><tr><td></td><td></td></tr><tr><td>在所有会话中，我分享的附件</td><td>✔</td></tr><tr><td>在所有会话中，其他各种查询对象</td><td></td></tr></tbody></table><h4 id="权限控制" tabindex="-1">权限控制 <a class="header-anchor" href="#权限控制" aria-label="Permalink to &quot;权限控制&quot;">​</a></h4><ul><li><p>查看消息附件</p><ul><li><p>发送消息附件的用户无论有没有退出私聊或群聊会话，他们始终都有权限查询自己上传的消息附件。</p><p>并且即使上传消息附件的用户退出该会话，该会话中的其他所有用户仍有权限查看该用户上传的消息附件。</p></li><li><p>用户有且仅能查看在已加入的私聊或群聊会话中其他用户分享的消息附件。换言之，如果一位用户先加入了一个会话，而后又退出，则退出后的用户无法查看该会话中的附件。只有当该用户又再次加入该会话，才又有权限查看该会话中的附件。</p></li></ul></li></ul><h4 id="安全" tabindex="-1">安全 <a class="header-anchor" href="#安全" aria-label="Permalink to &quot;安全&quot;">​</a></h4><p>上传限制：TODO</p><h4 id="存储文件数据校验" tabindex="-1">存储文件数据校验 <a class="header-anchor" href="#存储文件数据校验" aria-label="Permalink to &quot;存储文件数据校验&quot;">​</a></h4><p>如果基于云服务来实现存储文件的数据校验，那逻辑的实现会相对简单。如在AWS上，可以通过S3的事件通知来触发自定义的Lambda函数对用户上传的数据做检验，又或者通过在CloudFront侧添加监听<code>origin-response </code>事件的Lambda@Edge函数做校验，除了自定义的校验逻辑需要写一些代码外，其他功能基本靠点鼠标就能实现了。</p><p>但由于MinIO作为独立的存储服务不支持诸如Lambda函数这样的Serverless架构特性，因此相对于Serverless的方案，基于MinIO的事件机制来实现低成本又高可用的数据校验逻辑就麻烦得多了。因此Turms暂不支持对存储文件做数据校验。之后会提供支持。</p><h4 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h4><table><thead><tr><th>配置项</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>turms-plugin.minio.enabled</td><td>true</td><td>是否启动插件</td></tr><tr><td>turms-plugin.minio.endpoint</td><td>&quot;<a href="http://localhost:9000" target="_blank" rel="noreferrer">http://localhost:9000</a>&quot;</td><td>MinIO服务端的地址</td></tr><tr><td>turms-plugin.minio.region</td><td>&quot;&quot;</td><td>MinIO服务端的区域</td></tr><tr><td>turms-plugin.minio.access-key</td><td>minioadmin</td><td>MinIO服务端的Access Key</td></tr><tr><td>turms-plugin.minio.secret-key</td><td>minioadmin</td><td>MinIO服务端的Secret Key</td></tr><tr><td>turms-plugin.minio.retry.enabled</td><td>true</td><td>初始化Buckets失败时，是否重试</td></tr><tr><td>turms-plugin.minio.retry.initial-interval-millis</td><td>30_000</td><td>初始化Buckets失败时，首次重试间隔</td></tr><tr><td>turms-plugin.minio.retry.interval-millis</td><td>30_000</td><td>初始化Buckets失败时，重试间隔</td></tr><tr><td>turms-plugin.minio.retry.max-attempts</td><td>3</td><td>初始化Buckets失败时，最多重试次数</td></tr><tr><td>turms-plugin.minio.resource-id.mac.enabled</td><td>false</td><td>是否对资源的Object Key进行MAC算法加密，以生成不可预测的URL来反爬虫。<br>如果不开启该项，则用户可以通过用户ID或群组ID来获得对应的图片URL<br>最终资源URL为：<code>&lt;bucket&gt;/&lt;base62(object key)&gt;&lt;base62(mac(object key))&gt;</code>。如<code>user-profile-picture/123456789</code> =&gt; <code>user-profile-picture/8M0kX1aEllpuvXRV09grkIEtD4R</code><br>注意：如果开启MAC算法，则客户端在调用<code>queryXXXDownloadInfo</code>系列接口时，要将参数<code>fetch</code>设置为<code>true</code>；在调用<code>queryXXX</code>系列接口时，要将参数<code>fetchDownloadInfo</code>设置为<code>true</code></td></tr><tr><td>turms-plugin.minio.resource-id.mac.base64-key</td><td>&quot;AHR1cm1zLWltL3R1cm1zgA==&quot;</td><td>Base64编码的MAC算法密钥</td></tr><tr><td>turms-plugin.minio.resource-id.base62.enabled</td><td>false</td><td>是否对资源的Object Key进行Base62算法编码，以缩短URL的长度。<br>最终资源URL为：<code>&lt;bucket&gt;/&lt;base62(object key)&gt;</code>，或<code>&lt;bucket&gt;/&lt;base62(object key)&gt;&lt;base62(mac(object key))&gt;</code>。如<code>user-profile-picture/123456789</code> =&gt; <code>message-attachment/8M0kX</code>或<code>user-profile-picture/8M0kX1aEllpuvXRV09grkIEtD4R</code><br>注意：1. 当<code>turms-plugin.minio.resource-key.mac.enabled</code>为<code>true</code>时，Base62算法会始终被应用。<br>2. 如果开启Base62算法，则客户端在调用<code>queryXXXDownloadInfo</code>系列接口时，要将参数<code>fetch</code>设置为<code>true</code>；在调用<code>queryXXX</code>系列接口时，要将参数<code>fetchDownloadInfo</code>设置为<code>true</code></td></tr><tr><td>turms-plugin.minio.resource-id.base62.charset</td><td>...</td><td>Base62算法的字符集</td></tr></tbody></table>',47),i=[o];function s(c,l,u,n,h,m){return e(),d("div",null,i)}const g=t(a,[["render",s]]);export{b as __pageData,g as default};
