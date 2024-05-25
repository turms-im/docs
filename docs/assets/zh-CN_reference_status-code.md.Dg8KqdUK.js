import{_ as t,c as d,o as _,a3 as E}from"./chunks/framework.ViWktWD6.js";const D=JSON.parse('{"title":"状态码","description":"","frontmatter":{},"headers":[],"relativePath":"zh-CN/reference/status-code.md","filePath":"zh-CN/reference/status-code.md"}'),O={name:"zh-CN/reference/status-code.md"},R=E('<h1 id="状态码" tabindex="-1">状态码 <a class="header-anchor" href="#状态码" aria-label="Permalink to &quot;状态码&quot;">​</a></h1><p>共有两种状态码需要开发者了解，一种是<code>ResponseStatusCode</code>，另一种是<code>SessionCloseStatus</code>。下表内容不需要刻意记忆，只需要在遇见不认识的状态码时，懂得查询即可。</p><h2 id="responsestatuscode" tabindex="-1">ResponseStatusCode <a class="header-anchor" href="#responsestatuscode" aria-label="Permalink to &quot;ResponseStatusCode&quot;">​</a></h2><p>ResponseStatusCode表明请求响应中的处理状态，类似HTTP的状态码。</p><p>每一个请求响应都会包含一个ResponseStatusCode。具体的状态码声明可查阅<code>turms-client-kotlin</code>项目下的<code>im.turms.client.model.ResponseStatusCode</code>类。</p><h3 id="客户端独有状态码" tabindex="-1">客户端独有状态码 <a class="header-anchor" href="#客户端独有状态码" aria-label="Permalink to &quot;客户端独有状态码&quot;">​</a></h3><p>客户端独有状态码不会出现在Turms服务端中，表明客户端请求在客户端本地就被拒绝执行。</p><table><thead><tr><th>类别</th><th>名称</th><th>状态码</th><th>含义</th></tr></thead><tbody><tr><td>连接相关</td><td>CONNECT_TIMEOUT</td><td>1</td><td></td></tr><tr><td>请求相关</td><td>INVALID_REQUEST</td><td>100</td><td></td></tr><tr><td></td><td>CLIENT_REQUESTS_TOO_FREQUENT</td><td>101</td><td></td></tr><tr><td></td><td>REQUEST_TIMEOUT</td><td>102</td><td></td></tr><tr><td></td><td>ILLEGAL_ARGUMENT</td><td>103</td><td></td></tr><tr><td>通知相关</td><td>INVALID_NOTIFICATION</td><td>200</td><td></td></tr><tr><td></td><td>INVALID_RESPONSE</td><td>201</td><td></td></tr><tr><td>会话相关</td><td>CLIENT_SESSION_ALREADY_ESTABLISHED</td><td>300</td><td></td></tr><tr><td></td><td>CLIENT_SESSION_HAS_BEEN_CLOSED</td><td>301</td><td></td></tr><tr><td>消息相关</td><td>MESSAGE_IS_REJECTED</td><td>400</td><td></td></tr><tr><td>存储相关</td><td>QUERY_PROFILE_URL_TO_UPDATE_BEFORE_LOGIN</td><td>500</td><td></td></tr></tbody></table><h3 id="通用状态码" tabindex="-1">通用状态码 <a class="header-anchor" href="#通用状态码" aria-label="Permalink to &quot;通用状态码&quot;">​</a></h3><table><thead><tr><th>类别</th><th>名称</th><th>状态码</th><th>含义</th></tr></thead><tbody><tr><td>成功响应</td><td>OK</td><td>1000</td><td></td></tr><tr><td></td><td>NO_CONTENT</td><td>1001</td><td></td></tr><tr><td></td><td>ALREADY_UP_TO_DATE</td><td>1002</td><td></td></tr><tr><td>客户端请求错误</td><td>INVALID_REQUEST</td><td>1100</td><td></td></tr><tr><td></td><td>CLIENT_REQUESTS_TOO_FREQUENT</td><td>1101</td><td></td></tr><tr><td></td><td>ILLEGAL_ARGUMENT</td><td>1102</td><td></td></tr><tr><td></td><td>RECORD_CONTAINS_DUPLICATE_KEY</td><td>1103</td><td></td></tr><tr><td></td><td>REQUESTED_RECORDS_TOO_MANY</td><td>1104</td><td></td></tr><tr><td></td><td>SEND_REQUEST_FROM_NONEXISTENT_SESSION</td><td>1105</td><td></td></tr><tr><td></td><td>UNAUTHORIZED_REQUEST</td><td>1106</td><td></td></tr><tr><td>服务端错误</td><td>SERVER_INTERNAL_ERROR</td><td>1200</td><td></td></tr><tr><td></td><td>SERVER_UNAVAILABLE</td><td>1201</td><td></td></tr><tr><td>管理员接口 - 通用错误</td><td>UNAUTHORIZED</td><td>1300</td><td></td></tr><tr><td></td><td>NO_FILTER_FOR_DELETE_OPERATION</td><td>1301</td><td></td></tr><tr><td></td><td>RESOURCE_NOT_FOUND</td><td>1302</td><td></td></tr><tr><td></td><td>DUPLICATE_RESOURCE</td><td>1303</td><td></td></tr><tr><td></td><td>ADMIN_REQUESTS_TOO_FREQUENT</td><td>1304</td><td></td></tr><tr><td>管理员接口 - JFR相关错误</td><td>DUMP_JFR_IN_ILLEGAL_STATUS</td><td>1310</td><td></td></tr><tr><td>管理员接口 - 插件相关错误</td><td>JAVASCRIPT_PLUGIN_IS_DISABLED</td><td>1320</td><td></td></tr><tr><td></td><td>SAVING_JAVA_PLUGIN_IS_DISABLED</td><td>1321</td><td></td></tr><tr><td></td><td>SAVING_JAVASCRIPT_PLUGIN_IS_DISABLED</td><td>1322</td><td></td></tr><tr><td>管理员接口 - 封禁相关错误</td><td>IP_BLOCKLIST_IS_DISABLED</td><td>1400</td><td></td></tr><tr><td></td><td>USER_ID_BLOCKLIST_IS_DISABLED</td><td>1401</td><td></td></tr><tr><td>管理员接口 - 集群 - 主节点相关错误</td><td>NONEXISTENT_MEMBER_TO_BE_LEADER</td><td>1800</td><td></td></tr><tr><td></td><td>NO_QUALIFIED_MEMBER_TO_BE_LEADER</td><td>1801</td><td></td></tr><tr><td></td><td>NOT_QUALIFIED_MEMBER_TO_BE_LEADER</td><td>1802</td><td></td></tr><tr><td>用户 - 登陆相关错误</td><td>UNSUPPORTED_CLIENT_VERSION</td><td>2000</td><td></td></tr><tr><td></td><td>LOGIN_TIMEOUT</td><td>2010</td><td></td></tr><tr><td></td><td>LOGIN_AUTHENTICATION_FAILED</td><td>2011</td><td></td></tr><tr><td></td><td>LOGGING_IN_USER_NOT_ACTIVE</td><td>2012</td><td></td></tr><tr><td></td><td>LOGIN_FROM_FORBIDDEN_DEVICE_TYPE</td><td>2013</td><td></td></tr><tr><td>用户 - 会话相关错误</td><td>SESSION_SIMULTANEOUS_CONFLICTS_DECLINE</td><td>2100</td><td></td></tr><tr><td></td><td>SESSION_SIMULTANEOUS_CONFLICTS_NOTIFY</td><td>2101</td><td></td></tr><tr><td></td><td>SESSION_SIMULTANEOUS_CONFLICTS_OFFLINE</td><td>2102</td><td></td></tr><tr><td></td><td>CREATE_EXISTING_SESSION</td><td>2103</td><td></td></tr><tr><td></td><td>UPDATE_HEARTBEAT_OF_NONEXISTENT_SESSION</td><td>2104</td><td></td></tr><tr><td>用户 - 位置相关错误</td><td>USER_LOCATION_RELATED_FEATURES_ARE_DISABLED</td><td>2200</td><td></td></tr><tr><td></td><td>QUERYING_NEAREST_USERS_BY_SESSION_ID_IS_DISABLED</td><td>2201</td><td></td></tr><tr><td>用户 - 信息相关错误</td><td>UPDATE_INFO_OF_NONEXISTENT_USER</td><td>2300</td><td></td></tr><tr><td></td><td>NOT_FRIEND_TO_QUERY_USER_PROFILE</td><td>2301</td><td></td></tr><tr><td></td><td>BLOCKED_USER_TO_QUERY_USER_PROFILE</td><td>2302</td><td></td></tr><tr><td>用户 - 权限组相关错误</td><td>QUERY_PERMISSION_OF_NONEXISTENT_USER</td><td>2400</td><td></td></tr><tr><td>用户 - 关系相关错误</td><td>ADD_NON_RELATED_USER_TO_GROUP</td><td>2500</td><td></td></tr><tr><td></td><td>CREATE_EXISTING_RELATIONSHIP</td><td>2501</td><td></td></tr><tr><td></td><td>CANNOT_BLOCK_ONESELF</td><td>2502</td><td></td></tr><tr><td>用户 - 好友请求相关错误</td><td>CREATE_EXISTING_FRIEND_REQUEST</td><td>2600</td><td></td></tr><tr><td></td><td>BLOCKED_USER_TO_SEND_FRIEND_REQUEST</td><td>2601</td><td></td></tr><tr><td></td><td>RECALL_NON_PENDING_FRIEND_REQUEST</td><td>2602</td><td></td></tr><tr><td></td><td>RECALLING_FRIEND_REQUEST_IS_DISABLED</td><td>2603</td><td></td></tr><tr><td></td><td>NOT_SENDER_TO_RECALL_FRIEND_REQUEST</td><td>2604</td><td></td></tr><tr><td></td><td>UPDATE_NON_PENDING_FRIEND_REQUEST</td><td>2605</td><td></td></tr><tr><td></td><td>NOT_RECIPIENT_TO_UPDATE_FRIEND_REQUEST</td><td>2606</td><td></td></tr><tr><td>群组 - 信息相关错误</td><td>UPDATE_INFO_OF_NONEXISTENT_GROUP</td><td>3000</td><td></td></tr><tr><td></td><td>NOT_GROUP_OWNER_TO_UPDATE_GROUP_INFO</td><td>3001</td><td></td></tr><tr><td></td><td>NOT_GROUP_OWNER_OR_MANAGER_TO_UPDATE_GROUP_INFO</td><td>3002</td><td></td></tr><tr><td></td><td>NOT_GROUP_MEMBER_TO_UPDATE_GROUP_INFO</td><td>3003</td><td></td></tr><tr><td>群组 - 类型相关错误</td><td>NO_PERMISSION_TO_CREATE_GROUP_WITH_GROUP_TYPE</td><td>3100</td><td></td></tr><tr><td></td><td>CREATE_GROUP_WITH_NONEXISTENT_GROUP_TYPE</td><td>3101</td><td></td></tr><tr><td></td><td>UPDATING_GROUP_TYPE_IS_DISABLED</td><td>3102</td><td></td></tr><tr><td></td><td>NOT_GROUP_OWNER_TO_UPDATE_GROUP_TYPE</td><td>3103</td><td></td></tr><tr><td></td><td>NO_PERMISSION_TO_UPDATE_GROUP_TO_GROUP_TYPE</td><td>3104</td><td></td></tr><tr><td></td><td>UPDATE_GROUP_TO_NONEXISTENT_GROUP_TYPE</td><td>3105</td><td></td></tr><tr><td>群组 - 所有权相关错误</td><td>NOT_ACTIVE_USER_TO_CREATE_GROUP</td><td>3200</td><td></td></tr><tr><td></td><td>NOT_GROUP_OWNER_TO_TRANSFER_GROUP</td><td>3201</td><td></td></tr><tr><td></td><td>NOT_GROUP_OWNER_TO_DELETE_GROUP</td><td>3202</td><td></td></tr><tr><td></td><td>GROUP_SUCCESSOR_NOT_GROUP_MEMBER</td><td>3203</td><td></td></tr><tr><td></td><td>GROUP_OWNER_QUIT_WITHOUT_SPECIFYING_SUCCESSOR</td><td>3204</td><td></td></tr><tr><td></td><td>MAX_OWNED_GROUPS_REACHED</td><td>3205</td><td></td></tr><tr><td></td><td>TRANSFER_NONEXISTENT_GROUP</td><td>3206</td><td></td></tr><tr><td>群组 - 入群问题相关错误</td><td>NOT_GROUP_OWNER_OR_MANAGER_TO_CREATE_GROUP_QUESTION</td><td>3300</td><td></td></tr><tr><td></td><td>NOT_GROUP_OWNER_OR_MANAGER_TO_DELETE_GROUP_QUESTION</td><td>3301</td><td></td></tr><tr><td></td><td>NOT_GROUP_OWNER_OR_MANAGER_TO_UPDATE_GROUP_QUESTION</td><td>3302</td><td></td></tr><tr><td></td><td>NOT_GROUP_OWNER_OR_MANAGER_TO_QUERY_GROUP_QUESTION_ANSWER</td><td>3303</td><td></td></tr><tr><td></td><td>CREATE_GROUP_QUESTION_FOR_INACTIVE_GROUP</td><td>3304</td><td></td></tr><tr><td></td><td>CREATE_GROUP_QUESTION_FOR_GROUP_USING_JOIN_REQUEST</td><td>3305</td><td></td></tr><tr><td></td><td>CREATE_GROUP_QUESTION_FOR_GROUP_USING_INVITATION</td><td>3306</td><td></td></tr><tr><td></td><td>CREATE_GROUP_QUESTION_FOR_GROUP_USING_MEMBERSHIP_REQUEST</td><td>3307</td><td></td></tr><tr><td></td><td>GROUP_QUESTION_ANSWERER_HAS_BEEN_BLOCKED</td><td>3308</td><td></td></tr><tr><td></td><td>GROUP_MEMBER_ANSWER_GROUP_QUESTION</td><td>3309</td><td></td></tr><tr><td></td><td>ANSWER_INACTIVE_GROUP_QUESTION</td><td>3310</td><td></td></tr><tr><td></td><td>ANSWER_GROUP_QUESTION_OF_INACTIVE_GROUP</td><td>3311</td><td></td></tr><tr><td>群组 - 成员相关错误</td><td>ADD_USER_TO_GROUP_REQUIRING_USERS_APPROVAL</td><td>3400</td><td></td></tr><tr><td></td><td>ADD_USER_TO_INACTIVE_GROUP</td><td>3401</td><td></td></tr><tr><td></td><td>NOT_GROUP_OWNER_TO_ADD_GROUP_MANAGER</td><td>3402</td><td></td></tr><tr><td></td><td>ADD_USER_TO_GROUP_WITH_SIZE_LIMIT_REACHED</td><td>3403</td><td></td></tr><tr><td></td><td>ADD_BLOCKED_USER_TO_GROUP</td><td>3404</td><td></td></tr><tr><td></td><td>NOT_GROUP_OWNER_TO_ADD_GROUP_MEMBER</td><td>3405</td><td></td></tr><tr><td></td><td>NOT_GROUP_OWNER_OR_MANAGER_TO_ADD_GROUP_MEMBER</td><td>3406</td><td></td></tr><tr><td></td><td>NOT_GROUP_MEMBER_TO_ADD_GROUP_MEMBER</td><td>3407</td><td></td></tr><tr><td></td><td>NOT_GROUP_OWNER_OR_MANAGER_TO_REMOVE_GROUP_MEMBER</td><td>3408</td><td></td></tr><tr><td></td><td>NOT_GROUP_OWNER_TO_REMOVE_GROUP_OWNER_OR_MANAGER</td><td>3409</td><td></td></tr><tr><td></td><td>NOT_GROUP_OWNER_TO_UPDATE_GROUP_MEMBER_ROLE</td><td>3410</td><td></td></tr><tr><td></td><td>UPDATE_GROUP_MEMBER_ROLE_OF_NONEXISTENT_GROUP</td><td>3411</td><td></td></tr><tr><td></td><td>NOT_GROUP_OWNER_TO_UPDATE_GROUP_MEMBER_INFO</td><td>3412</td><td></td></tr><tr><td></td><td>NOT_GROUP_OWNER_OR_MANAGER_TO_UPDATE_GROUP_MEMBER_INFO</td><td>3413</td><td></td></tr><tr><td></td><td>NOT_GROUP_MEMBER_TO_UPDATE_GROUP_MEMBER_INFO</td><td>3414</td><td></td></tr><tr><td></td><td>UPDATE_GROUP_MEMBER_INFO_OF_NONEXISTENT_GROUP</td><td>3415</td><td></td></tr><tr><td></td><td>UPDATE_INFO_OF_NONEXISTENT_GROUP_MEMBER</td><td>3416</td><td></td></tr><tr><td></td><td>NOT_GROUP_OWNER_OR_MANAGER_TO_MUTE_GROUP_MEMBER</td><td>3417</td><td></td></tr><tr><td></td><td>MUTE_GROUP_MEMBER_WITH_ROLE_EQUAL_TO_OR_HIGHER_THAN_REQUESTER</td><td>3418</td><td></td></tr><tr><td></td><td>MUTE_GROUP_MEMBER_OF_NONEXISTENT_GROUP</td><td>3419</td><td></td></tr><tr><td></td><td>MUTE_NONEXISTENT_GROUP_MEMBER</td><td>3420</td><td></td></tr><tr><td></td><td>NOT_GROUP_MEMBER_TO_QUERY_GROUP_MEMBER_INFO</td><td>3421</td><td></td></tr><tr><td></td><td>USER_JOIN_GROUP_WITHOUT_ACCEPTING_GROUP_INVITATION</td><td>3422</td><td></td></tr><tr><td></td><td>USER_JOIN_GROUP_WITHOUT_ANSWERING_GROUP_QUESTION</td><td>3423</td><td></td></tr><tr><td></td><td>USER_JOIN_GROUP_WITHOUT_SENDING_GROUP_JOIN_REQUEST</td><td>3424</td><td></td></tr><tr><td>群组 - 黑名单相关错误</td><td>NOT_GROUP_OWNER_OR_MANAGER_TO_ADD_BLOCKED_USER</td><td>3500</td><td></td></tr><tr><td></td><td>NOT_GROUP_OWNER_OR_MANAGER_TO_REMOVE_BLOCKED_USER</td><td>3501</td><td></td></tr><tr><td>群组 - 入群请求相关错误</td><td>BLOCKED_USER_SEND_GROUP_JOIN_REQUEST</td><td>3600</td><td></td></tr><tr><td></td><td>GROUP_MEMBER_SEND_GROUP_JOIN_REQUEST</td><td>3601</td><td></td></tr><tr><td></td><td>NOT_SENDER_TO_RECALL_GROUP_JOIN_REQUEST</td><td>3602</td><td></td></tr><tr><td></td><td>NOT_GROUP_OWNER_OR_MANAGER_TO_QUERY_GROUP_JOIN_REQUEST</td><td>3603</td><td></td></tr><tr><td></td><td>RECALL_NON_PENDING_GROUP_JOIN_REQUEST</td><td>3604</td><td></td></tr><tr><td></td><td>SEND_GROUP_JOIN_REQUEST_TO_INACTIVE_GROUP</td><td>3605</td><td></td></tr><tr><td></td><td>SEND_GROUP_JOIN_REQUEST_TO_GROUP_USING_MEMBERSHIP_REQUEST</td><td>3606</td><td></td></tr><tr><td></td><td>SEND_GROUP_JOIN_REQUEST_TO_GROUP_USING_INVITATION</td><td>3607</td><td></td></tr><tr><td></td><td>SEND_GROUP_JOIN_REQUEST_TO_GROUP_USING_QUESTION</td><td>3608</td><td></td></tr><tr><td></td><td>RECALLING_GROUP_JOIN_REQUEST_IS_DISABLED</td><td>3609</td><td></td></tr><tr><td></td><td>UPDATE_NON_PENDING_GROUP_JOIN_REQUEST</td><td>3610</td><td></td></tr><tr><td></td><td>NOT_GROUP_OWNER_OR_MANAGER_TO_UPDATE_GROUP_JOIN_REQUEST</td><td>3611</td><td></td></tr><tr><td>群组 - 邀请相关错误</td><td>SEND_GROUP_INVITATION_TO_GROUP_MEMBER</td><td>3700</td><td></td></tr><tr><td></td><td>SEND_GROUP_INVITATION_TO_BLOCKED_USER</td><td>3701</td><td></td></tr><tr><td></td><td>SEND_GROUP_INVITATION_TO_GROUP_NOT_REQUIRING_USERS_APPROVAL</td><td>3702</td><td></td></tr><tr><td></td><td>NOT_GROUP_OWNER_TO_SEND_GROUP_INVITATION</td><td>3703</td><td></td></tr><tr><td></td><td>NOT_GROUP_OWNER_OR_MANAGER_TO_SEND_GROUP_INVITATION</td><td>3704</td><td></td></tr><tr><td></td><td>NOT_GROUP_MEMBER_TO_SEND_GROUP_INVITATION</td><td>3705</td><td></td></tr><tr><td></td><td>RECALLING_GROUP_INVITATION_IS_DISABLED</td><td>3706</td><td></td></tr><tr><td></td><td>NOT_GROUP_OWNER_OR_MANAGER_TO_RECALL_GROUP_INVITATION</td><td>3707</td><td></td></tr><tr><td></td><td>NOT_GROUP_OWNER_OR_MANAGER_OR_SENDER_TO_RECALL_GROUP_INVITATION</td><td>3708</td><td></td></tr><tr><td></td><td>RECALL_NON_PENDING_GROUP_INVITATION</td><td>3709</td><td></td></tr><tr><td></td><td>UPDATE_NON_PENDING_GROUP_INVITATION</td><td>3710</td><td></td></tr><tr><td></td><td>NOT_INVITEE_TO_UPDATE_GROUP_INVITATION</td><td>3711</td><td></td></tr><tr><td></td><td>NOT_GROUP_OWNER_OR_MANAGER_TO_QUERY_GROUP_INVITATION</td><td>3712</td><td></td></tr><tr><td>聊天会话 - 查阅时间相关错误</td><td>UPDATING_READ_DATE_IS_DISABLED</td><td>4000</td><td></td></tr><tr><td></td><td>UPDATING_READ_DATE_IS_DISABLED_BY_GROUP</td><td>4001</td><td></td></tr><tr><td></td><td>UPDATING_READ_DATE_OF_NONEXISTENT_GROUP_CONVERSATION</td><td>4002</td><td></td></tr><tr><td></td><td>NOT_GROUP_MEMBER_TO_UPDATE_READ_DATE_OF_GROUP_CONVERSATION</td><td>4003</td><td></td></tr><tr><td></td><td>MOVING_READ_DATE_FORWARD_IS_DISABLED</td><td>4004</td><td></td></tr><tr><td>聊天会话 - 输入状态相关错误</td><td>UPDATING_TYPING_STATUS_IS_DISABLED</td><td>4100</td><td></td></tr><tr><td></td><td>NOT_GROUP_MEMBER_TO_SEND_TYPING_STATUS</td><td>4101</td><td></td></tr><tr><td></td><td>NOT_FRIEND_TO_SEND_TYPING_STATUS</td><td>4102</td><td></td></tr><tr><td>消息 - 发送相关错误</td><td>MESSAGE_RECIPIENT_NOT_ACTIVE</td><td>5000</td><td></td></tr><tr><td></td><td>NOT_FRIEND_TO_SEND_PRIVATE_MESSAGE</td><td>5001</td><td></td></tr><tr><td></td><td>BLOCKED_USER_SEND_PRIVATE_MESSAGE</td><td>5002</td><td></td></tr><tr><td></td><td>BLOCKED_USER_SEND_GROUP_MESSAGE</td><td>5003</td><td></td></tr><tr><td></td><td>SEND_MESSAGE_TO_INACTIVE_GROUP</td><td>5004</td><td></td></tr><tr><td></td><td>SEND_MESSAGE_TO_MUTED_GROUP</td><td>5005</td><td></td></tr><tr><td></td><td>SEND_MESSAGE_TO_NONEXISTENT_GROUP</td><td>5006</td><td></td></tr><tr><td></td><td>SENDING_MESSAGES_TO_ONESELF_IS_DISABLED</td><td>5007</td><td></td></tr><tr><td></td><td>MUTED_GROUP_MEMBER_SEND_MESSAGE</td><td>5008</td><td></td></tr><tr><td></td><td>NOT_SPEAKABLE_GROUP_GUEST_TO_SEND_MESSAGE</td><td>5009</td><td></td></tr><tr><td></td><td>MESSAGE_IS_ILLEGAL</td><td>5010</td><td></td></tr><tr><td></td><td>NOT_MESSAGE_RECIPIENT_OR_SENDER_TO_FORWARD_MESSAGE</td><td>5011</td><td></td></tr><tr><td>消息 - 更新相关错误</td><td>UPDATING_MESSAGE_BY_SENDER_IS_DISABLED</td><td>5100</td><td></td></tr><tr><td></td><td>NOT_SENDER_TO_UPDATE_MESSAGE</td><td>5101</td><td></td></tr><tr><td></td><td>UPDATE_MESSAGE_OF_NONEXISTENT_GROUP</td><td>5102</td><td></td></tr><tr><td></td><td>UPDATING_GROUP_MESSAGE_BY_SENDER_IS_DISABLED</td><td>5103</td><td></td></tr><tr><td>消息 - 撤回相关错误</td><td>RECALL_NONEXISTENT_MESSAGE</td><td>5200</td><td></td></tr><tr><td></td><td>RECALLING_MESSAGE_IS_DISABLED</td><td>5201</td><td></td></tr><tr><td></td><td>NOT_SENDER_TO_RECALL_MESSAGE</td><td>5202</td><td></td></tr><tr><td></td><td>RECALL_MESSAGE_OF_NONEXISTENT_GROUP</td><td>5203</td><td></td></tr><tr><td></td><td>MESSAGE_RECALL_TIMEOUT</td><td>5204</td><td></td></tr><tr><td>消息 - 查询相关错误</td><td>NOT_GROUP_MEMBER_TO_QUERY_GROUP_MESSAGES</td><td>5300</td><td></td></tr><tr><td>存储 - 通用错误</td><td>STORAGE_NOT_IMPLEMENTED</td><td>6000</td><td></td></tr><tr><td>存储 - 消息附件相关错误</td><td>NOT_FRIEND_TO_UPLOAD_MESSAGE_ATTACHMENT_IN_PRIVATE_CONVERSATION</td><td>6100</td><td></td></tr><tr><td></td><td>NOT_GROUP_MEMBER_TO_UPLOAD_MESSAGE_ATTACHMENT_IN_GROUP_CONVERSATION</td><td>6101</td><td></td></tr><tr><td></td><td>NOT_UPLOADER_TO_SHARE_MESSAGE_ATTACHMENT</td><td>6102</td><td></td></tr><tr><td></td><td>NOT_UPLOADER_OR_GROUP_MANAGER_TO_UNSHARE_MESSAGE_ATTACHMENT_IN_GROUP_CONVERSATION</td><td>6103</td><td></td></tr><tr><td></td><td>NOT_UPLOADER_TO_UNSHARE_MESSAGE_ATTACHMENT_IN_PRIVATE_CONVERSATION</td><td>6104</td><td></td></tr><tr><td></td><td>NOT_UPLOADER_OR_GROUP_MANAGER_TO_DELETE_MESSAGE_ATTACHMENT_IN_GROUP_CONVERSATION</td><td>6105</td><td></td></tr><tr><td></td><td>NOT_UPLOADER_TO_DELETE_MESSAGE_ATTACHMENT_IN_PRIVATE_CONVERSATION</td><td>6106</td><td></td></tr><tr><td></td><td>NOT_UPLOADER_OR_SHARED_WITH_USER_TO_DOWNLOAD_MESSAGE_ATTACHMENT</td><td>6107</td><td></td></tr><tr><td>存储 - 消息附件信息相关错误</td><td>NOT_FRIEND_TO_QUERY_MESSAGE_ATTACHMENT_INFO_IN_PRIVATE_CONVERSATION</td><td>6130</td><td></td></tr><tr><td></td><td>NOT_GROUP_MEMBER_TO_QUERY_MESSAGE_ATTACHMENT_INFO_IN_GROUP_CONVERSATION</td><td>6131</td><td></td></tr></tbody></table><h2 id="sessionclosestatus" tabindex="-1">SessionCloseStatus <a class="header-anchor" href="#sessionclosestatus" aria-label="Permalink to &quot;SessionCloseStatus&quot;">​</a></h2><p>SessionCloseStatus表明会话关闭的原因。</p><p>具体的状态码声明可查阅<code>im.turms.server.common.access.common.SessionCloseStatus</code>类。</p><table><thead><tr><th>原因类别</th><th>名称</th><th>状态码</th><th>含义</th></tr></thead><tbody><tr><td>客户端非法行为</td><td>ILLEGAL_REQUEST</td><td>100</td><td>非法请求</td></tr><tr><td></td><td>HEARTBEAT_TIMEOUT</td><td>110</td><td>心跳超时</td></tr><tr><td></td><td>LOGIN_TIMEOUT</td><td>111</td><td>登录超时</td></tr><tr><td></td><td>SWITCH</td><td>112</td><td>会话超时，TCP或WebSocket切换为UDP进入休眠保活状态</td></tr><tr><td>服务端行为</td><td>SERVER_ERROR</td><td>200</td><td>服务端异常错误</td></tr><tr><td></td><td>SERVER_CLOSED</td><td>201</td><td>服务端进入停机状态</td></tr><tr><td></td><td>SERVER_UNAVAILABLE</td><td>202</td><td>服务不可用</td></tr><tr><td>网络层错误</td><td>CONNECTION_CLOSED</td><td>300</td><td>未收到关闭帧，网络层连接被强制关闭</td></tr><tr><td>未知错误</td><td>UNKNOWN_ERROR</td><td>400</td><td>未知的服务端或客户端行为错误</td></tr><tr><td>用户主动关闭</td><td>DISCONNECTED_BY_CLIENT</td><td>500</td><td>当前用户主动请求关闭会话</td></tr><tr><td></td><td>DISCONNECTED_BY_OTHER_DEVICE</td><td>501</td><td>由于当前用户的其他设备上线，导致当前会话关闭</td></tr><tr><td>管理员主动关闭</td><td>DISCONNECTED_BY_ADMIN</td><td>600</td><td>管理员通过API主动关闭会话</td></tr><tr><td>用户状态变更</td><td>USER_IS_DELETED_OR_INACTIVATED</td><td>700</td><td>用户账号被删除或进入未激活状态</td></tr><tr><td></td><td>USER_IS_BLOCKED</td><td>701</td><td>用户IP或用户ID被封禁</td></tr></tbody></table>',14),N=[R];function T(r,S,I,U,A,G){return _(),d("div",null,N)}const M=t(O,[["render",T]]);export{D as __pageData,M as default};
