import{_ as t,o as d,c as _,U as E}from"./chunks/framework.95a60cb2.js";const G=JSON.parse('{"title":"状态码","description":"","frontmatter":{},"headers":[],"relativePath":"zh-CN/reference/status-code.md","filePath":"zh-CN/reference/status-code.md"}'),O={name:"zh-CN/reference/status-code.md"},r=E('<h1 id="状态码" tabindex="-1">状态码 <a class="header-anchor" href="#状态码" aria-label="Permalink to &quot;状态码&quot;">​</a></h1><p>共有两种状态码需要开发者了解，一种是<code>ResponseStatusCode</code>，另一种是<code>SessionCloseStatus</code>。下表内容不需要刻意记忆，只需要在遇见不认识的状态码时，懂得查询即可。</p><h2 id="responsestatuscode" tabindex="-1">ResponseStatusCode <a class="header-anchor" href="#responsestatuscode" aria-label="Permalink to &quot;ResponseStatusCode&quot;">​</a></h2><p>ResponseStatusCode表明请求响应中的处理状态，类似HTTP的状态码。</p><p>每一个请求响应都会包含一个ResponseStatusCode。具体的状态码声明可查阅<code>turms-client-kotlin</code>项目下的<code>im.turms.client.model.ResponseStatusCode</code>类。</p><h3 id="客户端独有状态码" tabindex="-1">客户端独有状态码 <a class="header-anchor" href="#客户端独有状态码" aria-label="Permalink to &quot;客户端独有状态码&quot;">​</a></h3><p>客户端独有状态码不会出现在Turms服务端中，表明客户端请求在客户端本地就被拒绝执行。</p><table><thead><tr><th>类别</th><th>名称</th><th>状态码</th><th>含义</th></tr></thead><tbody><tr><td>连接相关</td><td>CONNECT_TIMEOUT</td><td>1</td><td></td></tr><tr><td>请求相关</td><td>INVALID_REQUEST</td><td>100</td><td></td></tr><tr><td></td><td>CLIENT_REQUESTS_TOO_FREQUENT</td><td>101</td><td></td></tr><tr><td></td><td>REQUEST_TIMEOUT</td><td>102</td><td></td></tr><tr><td></td><td>ILLEGAL_ARGUMENT</td><td>103</td><td></td></tr><tr><td>通知相关</td><td>INVALID_NOTIFICATION</td><td>200</td><td></td></tr><tr><td></td><td>INVALID_RESPONSE</td><td>201</td><td></td></tr><tr><td>会话相关</td><td>CLIENT_SESSION_ALREADY_ESTABLISHED</td><td>300</td><td></td></tr><tr><td></td><td>CLIENT_SESSION_HAS_BEEN_CLOSED</td><td>301</td><td></td></tr><tr><td>消息相关</td><td>MESSAGE_IS_REJECTED</td><td>400</td><td></td></tr><tr><td>存储相关</td><td>QUERY_PROFILE_URL_TO_UPDATE_BEFORE_LOGIN</td><td>500</td><td></td></tr></tbody></table><h3 id="通用状态码" tabindex="-1">通用状态码 <a class="header-anchor" href="#通用状态码" aria-label="Permalink to &quot;通用状态码&quot;">​</a></h3><table><thead><tr><th>类别</th><th>名称</th><th>状态码</th><th>含义</th></tr></thead><tbody><tr><td>成功响应</td><td>OK</td><td>1000</td><td></td></tr><tr><td></td><td>NO_CONTENT</td><td>1001</td><td></td></tr><tr><td></td><td>ALREADY_UP_TO_DATE</td><td>1002</td><td></td></tr><tr><td>客户端请求错误</td><td>INVALID_REQUEST_FROM_SERVER</td><td>1100</td><td></td></tr><tr><td></td><td>CLIENT_REQUESTS_TOO_FREQUENT_FROM_SERVER</td><td>1101</td><td></td></tr><tr><td></td><td>ILLEGAL_ARGUMENT_FROM_SERVER</td><td>1102</td><td></td></tr><tr><td></td><td>RECORD_CONTAINS_DUPLICATE_KEY</td><td>1103</td><td></td></tr><tr><td></td><td>REQUESTED_RECORDS_TOO_MANY</td><td>1104</td><td></td></tr><tr><td></td><td>SEND_REQUEST_FROM_NON_EXISTING_SESSION</td><td>1105</td><td></td></tr><tr><td></td><td>UNAUTHORIZED_REQUEST</td><td>1106</td><td></td></tr><tr><td>服务端错误</td><td>SERVER_INTERNAL_ERROR</td><td>1200</td><td></td></tr><tr><td></td><td>SERVER_UNAVAILABLE</td><td>1201</td><td></td></tr><tr><td>用户登录相关错误</td><td>UNSUPPORTED_CLIENT_VERSION</td><td>2000</td><td></td></tr><tr><td></td><td>LOGIN_TIMEOUT</td><td>2010</td><td></td></tr><tr><td></td><td>LOGIN_AUTHENTICATION_FAILED</td><td>2011</td><td></td></tr><tr><td></td><td>LOGGING_IN_USER_NOT_ACTIVE</td><td>2012</td><td></td></tr><tr><td></td><td>LOGIN_FROM_FORBIDDEN_DEVICE_TYPE</td><td>2013</td><td></td></tr><tr><td>用户会话相关错误</td><td>SESSION_SIMULTANEOUS_CONFLICTS_DECLINE</td><td>2100</td><td></td></tr><tr><td></td><td>SESSION_SIMULTANEOUS_CONFLICTS_NOTIFY</td><td>2101</td><td></td></tr><tr><td></td><td>SESSION_SIMULTANEOUS_CONFLICTS_OFFLINE</td><td>2102</td><td></td></tr><tr><td></td><td>CREATE_EXISTING_SESSION</td><td>2103</td><td></td></tr><tr><td></td><td>UPDATE_NON_EXISTING_SESSION_HEARTBEAT</td><td>2104</td><td></td></tr><tr><td>用户位置相关错误</td><td>USER_LOCATION_RELATED_FEATURES_ARE_DISABLED</td><td>2200</td><td></td></tr><tr><td></td><td>QUERYING_NEAREST_USERS_BY_SESSION_ID_IS_DISABLED</td><td>2201</td><td></td></tr><tr><td>用户信息相关错误</td><td>UPDATE_INFO_OF_NON_EXISTING_USER</td><td>2300</td><td></td></tr><tr><td></td><td>USER_PROFILE_NOT_FOUND</td><td>2301</td><td></td></tr><tr><td></td><td>PROFILE_REQUESTER_NOT_IN_CONTACTS_OR_BLOCKED</td><td>2302</td><td></td></tr><tr><td></td><td>PROFILE_REQUESTER_HAS_BEEN_BLOCKED</td><td>2303</td><td></td></tr><tr><td>用户权限组相关错误</td><td>QUERY_PERMISSION_OF_NON_EXISTING_USER</td><td>2400</td><td></td></tr><tr><td>用户关系相关错误</td><td>ADD_NOT_RELATED_USER_TO_GROUP</td><td>2500</td><td></td></tr><tr><td></td><td>CREATE_EXISTING_RELATIONSHIP</td><td>2501</td><td></td></tr><tr><td>用户好友请求相关错误</td><td>REQUESTER_NOT_FRIEND_REQUEST_RECIPIENT</td><td>2600</td><td></td></tr><tr><td></td><td>CREATE_EXISTING_FRIEND_REQUEST</td><td>2601</td><td></td></tr><tr><td></td><td>FRIEND_REQUEST_SENDER_HAS_BEEN_BLOCKED</td><td>2602</td><td></td></tr><tr><td>群组信息相关错误</td><td>UPDATE_INFO_OF_NON_EXISTING_GROUP</td><td>3000</td><td></td></tr><tr><td></td><td>NOT_OWNER_TO_UPDATE_GROUP_INFO</td><td>3001</td><td></td></tr><tr><td></td><td>NOT_OWNER_OR_MANAGER_TO_UPDATE_GROUP_INFO</td><td>3002</td><td></td></tr><tr><td></td><td>NOT_MEMBER_TO_UPDATE_GROUP_INFO</td><td>3003</td><td></td></tr><tr><td>群组类型相关错误</td><td>NO_PERMISSION_TO_CREATE_GROUP_WITH_GROUP_TYPE</td><td>3100</td><td></td></tr><tr><td></td><td>CREATE_GROUP_WITH_NON_EXISTING_GROUP_TYPE</td><td>3101</td><td></td></tr><tr><td>群组所有权相关错误</td><td>NOT_ACTIVE_USER_TO_CREATE_GROUP</td><td>3200</td><td></td></tr><tr><td></td><td>NOT_OWNER_TO_TRANSFER_GROUP</td><td>3201</td><td></td></tr><tr><td></td><td>NOT_OWNER_TO_DELETE_GROUP</td><td>3202</td><td></td></tr><tr><td></td><td>SUCCESSOR_NOT_GROUP_MEMBER</td><td>3203</td><td></td></tr><tr><td></td><td>OWNER_QUITS_WITHOUT_SPECIFYING_SUCCESSOR</td><td>3204</td><td></td></tr><tr><td></td><td>MAX_OWNED_GROUPS_REACHED</td><td>3205</td><td></td></tr><tr><td></td><td>TRANSFER_NON_EXISTING_GROUP</td><td>3206</td><td></td></tr><tr><td>群组入群问题相关错误</td><td>NOT_OWNER_OR_MANAGER_TO_CREATE_GROUP_QUESTION</td><td>3300</td><td></td></tr><tr><td></td><td>NOT_OWNER_OR_MANAGER_TO_DELETE_GROUP_QUESTION</td><td>3301</td><td></td></tr><tr><td></td><td>NOT_OWNER_OR_MANAGER_TO_UPDATE_GROUP_QUESTION</td><td>3302</td><td></td></tr><tr><td></td><td>NOT_OWNER_OR_MANAGER_TO_ACCESS_GROUP_QUESTION_ANSWER</td><td>3303</td><td></td></tr><tr><td></td><td>CREATE_GROUP_QUESTION_FOR_INACTIVE_GROUP</td><td>3304</td><td></td></tr><tr><td></td><td>CREATE_GROUP_QUESTION_FOR_GROUP_USING_JOIN_REQUEST</td><td>3305</td><td></td></tr><tr><td></td><td>CREATE_GROUP_QUESTION_FOR_GROUP_USING_INVITATION</td><td>3306</td><td></td></tr><tr><td></td><td>CREATE_GROUP_QUESTION_FOR_GROUP_USING_MEMBERSHIP_REQUEST</td><td>3307</td><td></td></tr><tr><td></td><td>GROUP_QUESTION_ANSWERER_HAS_BEEN_BLOCKED</td><td>3308</td><td></td></tr><tr><td></td><td>MEMBER_CANNOT_ANSWER_GROUP_QUESTION</td><td>3309</td><td></td></tr><tr><td></td><td>ANSWER_INACTIVE_QUESTION</td><td>3310</td><td></td></tr><tr><td></td><td>ANSWER_QUESTION_OF_INACTIVE_GROUP</td><td>3311</td><td></td></tr><tr><td>群组成员相关错误</td><td>ADD_USER_TO_GROUP_REQUIRING_INVITATION</td><td>3400</td><td></td></tr><tr><td></td><td>ADD_USER_TO_INACTIVE_GROUP</td><td>3401</td><td></td></tr><tr><td></td><td>ADD_USER_WITH_ROLE_HIGHER_THAN_REQUESTER</td><td>3402</td><td></td></tr><tr><td></td><td>ADD_BLOCKED_USER_TO_GROUP</td><td>3403</td><td></td></tr><tr><td></td><td>ADD_BLOCKED_USER_TO_INACTIVE_GROUP</td><td>3404</td><td></td></tr><tr><td></td><td>NOT_OWNER_OR_MANAGER_TO_REMOVE_GROUP_MEMBER</td><td>3405</td><td></td></tr><tr><td></td><td>NOT_OWNER_TO_REMOVE_GROUP_OWNER_OR_MANAGER</td><td>3406</td><td></td></tr><tr><td></td><td>NOT_OWNER_TO_UPDATE_GROUP_MEMBER_INFO</td><td>3407</td><td></td></tr><tr><td></td><td>NOT_OWNER_OR_MANAGER_TO_UPDATE_GROUP_MEMBER_INFO</td><td>3408</td><td></td></tr><tr><td></td><td>NOT_MEMBER_TO_QUERY_MEMBER_INFO</td><td>3409</td><td></td></tr><tr><td>群组黑名单相关错误</td><td>NOT_OWNER_OR_MANAGER_TO_ADD_BLOCKED_USER</td><td>3500</td><td></td></tr><tr><td></td><td>NOT_OWNER_OR_MANAGER_TO_REMOVE_BLOCKED_USER</td><td>3501</td><td></td></tr><tr><td>群组入群请求相关错误</td><td>GROUP_JOIN_REQUEST_SENDER_HAS_BEEN_BLOCKED</td><td>3600</td><td></td></tr><tr><td></td><td>NOT_JOIN_REQUEST_SENDER_TO_RECALL_REQUEST</td><td>3601</td><td></td></tr><tr><td></td><td>NOT_OWNER_OR_MANAGER_TO_ACCESS_GROUP_REQUEST</td><td>3602</td><td></td></tr><tr><td></td><td>RECALL_NOT_PENDING_GROUP_JOIN_REQUEST</td><td>3603</td><td></td></tr><tr><td></td><td>SEND_JOIN_REQUEST_TO_INACTIVE_GROUP</td><td>3604</td><td></td></tr><tr><td></td><td>SEND_JOIN_REQUEST_TO_GROUP_USING_MEMBERSHIP_REQUEST</td><td>3605</td><td></td></tr><tr><td></td><td>SEND_JOIN_REQUEST_TO_GROUP_USING_INVITATION</td><td>3606</td><td></td></tr><tr><td></td><td>SEND_JOIN_REQUEST_TO_GROUP_USING_QUESTION</td><td>3607</td><td></td></tr><tr><td></td><td>RECALLING_GROUP_JOIN_REQUEST_IS_DISABLED</td><td>3608</td><td></td></tr><tr><td>群组邀请相关错误</td><td>GROUP_INVITER_NOT_MEMBER</td><td>3700</td><td></td></tr><tr><td></td><td>GROUP_INVITEE_ALREADY_GROUP_MEMBER</td><td>3701</td><td></td></tr><tr><td></td><td>NOT_OWNER_OR_MANAGER_TO_RECALL_INVITATION</td><td>3702</td><td></td></tr><tr><td></td><td>NOT_OWNER_OR_MANAGER_TO_ACCESS_INVITATION</td><td>3703</td><td></td></tr><tr><td></td><td>NOT_OWNER_TO_SEND_INVITATION</td><td>3704</td><td></td></tr><tr><td></td><td>NOT_OWNER_OR_MANAGER_TO_SEND_INVITATION</td><td>3705</td><td></td></tr><tr><td></td><td>NOT_MEMBER_TO_SEND_INVITATION</td><td>3706</td><td></td></tr><tr><td></td><td>INVITEE_HAS_BEEN_BLOCKED</td><td>3707</td><td></td></tr><tr><td></td><td>RECALLING_GROUP_INVITATION_IS_DISABLED</td><td>3708</td><td></td></tr><tr><td></td><td>SEND_GROUP_INVITATION_TO_GROUP_NOT_REQUIRE_INVITATION</td><td>3709</td><td></td></tr><tr><td></td><td>RECALL_NOT_PENDING_GROUP_INVITATION</td><td>3710</td><td></td></tr><tr><td>聊天会话相关错误</td><td>UPDATING_TYPING_STATUS_IS_DISABLED</td><td>4000</td><td></td></tr><tr><td></td><td>UPDATING_READ_DATE_IS_DISABLED</td><td>4001</td><td></td></tr><tr><td></td><td>MOVING_READ_DATE_FORWARD_IS_DISABLED</td><td>4002</td><td></td></tr><tr><td>消息发送相关错误</td><td>MESSAGE_RECIPIENT_NOT_ACTIVE</td><td>5000</td><td></td></tr><tr><td></td><td>MESSAGE_SENDER_NOT_IN_CONTACTS_OR_BLOCKED</td><td>5001</td><td></td></tr><tr><td></td><td>PRIVATE_MESSAGE_SENDER_HAS_BEEN_BLOCKED</td><td>5002</td><td></td></tr><tr><td></td><td>GROUP_MESSAGE_SENDER_HAS_BEEN_BLOCKED</td><td>5003</td><td></td></tr><tr><td></td><td>SEND_MESSAGE_TO_INACTIVE_GROUP</td><td>5004</td><td></td></tr><tr><td></td><td>SEND_MESSAGE_TO_MUTED_GROUP</td><td>5005</td><td></td></tr><tr><td></td><td>SENDING_MESSAGES_TO_ONESELF_IS_DISABLED</td><td>5006</td><td></td></tr><tr><td></td><td>MUTED_MEMBER_SEND_MESSAGE</td><td>5007</td><td></td></tr><tr><td></td><td>GUESTS_HAVE_BEEN_MUTED</td><td>5008</td><td></td></tr><tr><td></td><td>MESSAGE_IS_ILLEGAL</td><td>5009</td><td></td></tr><tr><td>消息更新相关错误</td><td>UPDATING_MESSAGE_BY_SENDER_IS_DISABLED</td><td>5100</td><td></td></tr><tr><td></td><td>NOT_SENDER_TO_UPDATE_MESSAGE</td><td>5101</td><td></td></tr><tr><td></td><td>NOT_MESSAGE_RECIPIENT_TO_UPDATE_MESSAGE_READ_DATE</td><td>5102</td><td></td></tr><tr><td>消息撤回相关错误</td><td>RECALL_NON_EXISTING_MESSAGE</td><td>5200</td><td></td></tr><tr><td></td><td>RECALLING_MESSAGE_IS_DISABLED</td><td>5201</td><td></td></tr><tr><td></td><td>MESSAGE_RECALL_TIMEOUT</td><td>5202</td><td></td></tr><tr><td>消息查询相关错误</td><td>NOT_MEMBER_TO_QUERY_GROUP_MESSAGES</td><td>5300</td><td></td></tr><tr><td>存储相关错误</td><td>STORAGE_NOT_IMPLEMENTED = 6000</td><td>6000</td><td></td></tr></tbody></table><h2 id="sessionclosestatus" tabindex="-1">SessionCloseStatus <a class="header-anchor" href="#sessionclosestatus" aria-label="Permalink to &quot;SessionCloseStatus&quot;">​</a></h2><p>SessionCloseStatus表明会话关闭的原因。</p><p>具体的状态码声明可查阅<code>im.turms.server.common.access.common.SessionCloseStatus</code>类。</p><table><thead><tr><th>原因类别</th><th>名称</th><th>状态码</th><th>含义</th></tr></thead><tbody><tr><td>客户端非法行为</td><td>ILLEGAL_REQUEST</td><td>100</td><td>非法请求</td></tr><tr><td></td><td>HEARTBEAT_TIMEOUT</td><td>110</td><td>心跳超时</td></tr><tr><td></td><td>LOGIN_TIMEOUT</td><td>111</td><td>登录超时</td></tr><tr><td></td><td>SWITCH</td><td>112</td><td>会话超时，TCP或WebSocket切换为UDP进入休眠保活状态</td></tr><tr><td>服务端行为</td><td>SERVER_ERROR</td><td>200</td><td>服务端异常错误</td></tr><tr><td></td><td>SERVER_CLOSED</td><td>201</td><td>服务端进入停机状态</td></tr><tr><td></td><td>SERVER_UNAVAILABLE</td><td>202</td><td>服务不可用</td></tr><tr><td>网络层错误</td><td>CONNECTION_CLOSED</td><td>300</td><td>未收到关闭帧，网络层连接被强制关闭</td></tr><tr><td>未知错误</td><td>UNKNOWN_ERROR</td><td>400</td><td>未知的服务端或客户端行为错误</td></tr><tr><td>用户主动关闭</td><td>DISCONNECTED_BY_CLIENT</td><td>500</td><td>当前用户主动请求关闭会话</td></tr><tr><td></td><td>DISCONNECTED_BY_OTHER_DEVICE</td><td>501</td><td>由于当前用户的其他设备上线，导致当前会话关闭</td></tr><tr><td>管理员主动关闭</td><td>DISCONNECTED_BY_ADMIN</td><td>600</td><td>管理员通过API主动关闭会话</td></tr><tr><td>用户状态变更</td><td>USER_IS_DELETED_OR_INACTIVATED</td><td>700</td><td>用户账号被删除或进入未激活状态</td></tr><tr><td></td><td>USER_IS_BLOCKED</td><td>701</td><td>用户IP或用户ID被封禁</td></tr></tbody></table>',14),N=[r];function R(T,S,I,A,U,D){return d(),_("div",null,N)}const C=t(O,[["render",R]]);export{G as __pageData,C as default};
