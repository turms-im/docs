import{_ as t,c as d,o as _,R as r}from"./chunks/framework.b6850781.js";const A=JSON.parse('{"title":"Status Code","description":"","frontmatter":{},"headers":[],"relativePath":"reference/status-code.md"}'),E={name:"reference/status-code.md"},e=r('<h1 id="status-code" tabindex="-1">Status Code <a class="header-anchor" href="#status-code" aria-label="Permalink to &quot;Status Code&quot;">​</a></h1><p>There are two status codes that developers need to understand, one is <code>ResponseStatusCode</code>, and the other is <code>SessionCloseStatus</code>. The content in the following table does not need to be memorized deliberately. You only need to know how to query when encountering an unfamiliar status code.</p><h2 id="responsestatuscode" tabindex="-1">ResponseStatusCode <a class="header-anchor" href="#responsestatuscode" aria-label="Permalink to &quot;ResponseStatusCode&quot;">​</a></h2><p>ResponseStatusCode indicates the processing status in the request response, similar to the HTTP status code.</p><p>Each request response will contain a ResponseStatusCode. For the specific status code declaration, please refer to the <code>im.turms.client.model.ResponseStatusCode</code> class under the <code>turms-client-kotlin</code> project.</p><h3 id="client-unique-status-code" tabindex="-1">Client unique status code <a class="header-anchor" href="#client-unique-status-code" aria-label="Permalink to &quot;Client unique status code&quot;">​</a></h3><p>The client-specific status code will not appear in the Turms server, indicating that the client request is rejected locally on the client.</p><table><thead><tr><th>Category</th><th>Name</th><th>Status Code</th><th>Meaning</th></tr></thead><tbody><tr><td>Connection related</td><td>CONNECT_TIMEOUT</td><td>1</td><td></td></tr><tr><td>Request related</td><td>INVALID_REQUEST</td><td>100</td><td></td></tr><tr><td></td><td>CLIENT_REQUESTS_TOO_FREQUENT</td><td>101</td><td></td></tr><tr><td></td><td>REQUEST_TIMEOUT</td><td>102</td><td></td></tr><tr><td></td><td>ILLEGAL_ARGUMENT</td><td>103</td><td></td></tr><tr><td>Notification Related</td><td>INVALID_NOTIFICATION</td><td>200</td><td></td></tr><tr><td></td><td>INVALID_RESPONSE</td><td>201</td><td></td></tr><tr><td>Session related</td><td>CLIENT_SESSION_ALREADY_ESTABLISHED</td><td>300</td><td></td></tr><tr><td></td><td>CLIENT_SESSION_HAS_BEEN_CLOSED</td><td>301</td><td></td></tr><tr><td>Message related</td><td>MESSAGE_IS_REJECTED</td><td>400</td><td></td></tr><tr><td>Storage related</td><td>QUERY_PROFILE_URL_TO_UPDATE_BEFORE_LOGIN</td><td>500</td><td></td></tr></tbody></table><h3 id="common-status-codes" tabindex="-1">Common Status Codes <a class="header-anchor" href="#common-status-codes" aria-label="Permalink to &quot;Common Status Codes&quot;">​</a></h3><table><thead><tr><th>Category</th><th>Name</th><th>Status Code</th><th>Meaning</th></tr></thead><tbody><tr><td>Successful Response</td><td>OK</td><td>1000</td><td></td></tr><tr><td></td><td>NO_CONTENT</td><td>1001</td><td></td></tr><tr><td></td><td>ALREADY_UP_TO_DATE</td><td>1002</td><td></td></tr><tr><td>Client request error</td><td>INVALID_REQUEST_FROM_SERVER</td><td>1100</td><td></td></tr><tr><td></td><td>CLIENT_REQUESTS_TOO_FREQUENT_FROM_SERVER</td><td>1101</td><td></td></tr><tr><td></td><td>ILLEGAL_ARGUMENT_FROM_SERVER</td><td>1102</td><td></td></tr><tr><td></td><td>RECORD_CONTAINS_DUPLICATE_KEY</td><td>1103</td><td></td></tr><tr><td></td><td>REQUESTED_RECORDS_TOO_MANY</td><td>1104</td><td></td></tr><tr><td></td><td>SEND_REQUEST_FROM_NON_EXISTING_SESSION</td><td>1105</td><td></td></tr><tr><td></td><td>UNAUTHORIZED_REQUEST</td><td>1106</td><td></td></tr><tr><td>Server Error</td><td>SERVER_INTERNAL_ERROR</td><td>1200</td><td></td></tr><tr><td></td><td>SERVER_UNAVAILABLE</td><td>1201</td><td></td></tr><tr><td>User login related errors</td><td>UNSUPPORTED_CLIENT_VERSION</td><td>2000</td><td></td></tr><tr><td></td><td>LOGIN_TIMEOUT</td><td>2010</td><td></td></tr><tr><td></td><td>LOGIN_AUTHENTICATION_FAILED</td><td>2011</td><td></td></tr><tr><td></td><td>LOGGING_IN_USER_NOT_ACTIVE</td><td>2012</td><td></td></tr><tr><td></td><td>LOGIN_FROM_FORBIDDEN_DEVICE_TYPE</td><td>2013</td><td></td></tr><tr><td>User session related errors</td><td>SESSION_SIMULTANEOUS_CONFLICTS_DECLINE</td><td>2100</td><td></td></tr><tr><td></td><td>SESSION_SIMULTANEOUS_CONFLICTS_NOTIFY</td><td>2101</td><td></td></tr><tr><td></td><td>SESSION_SIMULTANEOUS_CONFLICTS_OFFLINE</td><td>2102</td><td></td></tr><tr><td></td><td>CREATE_EXISTING_SESSION</td><td>2103</td><td></td></tr><tr><td></td><td>UPDATE_NON_EXISTING_SESSION_HEARTBEAT</td><td>2104</td><td></td></tr><tr><td>User location related errors</td><td>USER_LOCATION_RELATED_FEATURES_ARE_DISABLED</td><td>2200</td><td></td></tr><tr><td></td><td>QUERYING_NEAREST_USERS_BY_SESSION_ID_IS_DISABLED</td><td>2201</td><td></td></tr><tr><td>User information related errors</td><td>UPDATE_INFO_OF_NON_EXISTING_USER</td><td>2300</td><td></td></tr><tr><td></td><td>USER_PROFILE_NOT_FOUND</td><td>2301</td><td></td></tr><tr><td></td><td>PROFILE_REQUESTER_NOT_IN_CONTACTS_OR_BLOCKED</td><td>2302</td><td></td></tr><tr><td></td><td>PROFILE_REQUESTER_HAS_BEEN_BLOCKED</td><td>2303</td><td></td></tr><tr><td>User permission group related errors</td><td>QUERY_PERMISSION_OF_NON_EXISTING_USER</td><td>2400</td><td></td></tr><tr><td>User relation related errors</td><td>ADD_NOT_RELATED_USER_TO_GROUP</td><td>2500</td><td></td></tr><tr><td></td><td>CREATE_EXISTING_RELATIONSHIP</td><td>2501</td><td></td></tr><tr><td>User friend request related error</td><td>REQUESTER_NOT_FRIEND_REQUEST_RECIPIENT</td><td>2600</td><td></td></tr><tr><td></td><td>CREATE_EXISTING_FRIEND_REQUEST</td><td>2601</td><td></td></tr><tr><td></td><td>FRIEND_REQUEST_SENDER_HAS_BEEN_BLOCKED</td><td>2602</td><td></td></tr><tr><td>Group information related errors</td><td>UPDATE_INFO_OF_NON_EXISTING_GROUP</td><td>3000</td><td></td></tr><tr><td></td><td>NOT_OWNER_TO_UPDATE_GROUP_INFO</td><td>3001</td><td></td></tr><tr><td></td><td>NOT_OWNER_OR_MANAGER_TO_UPDATE_GROUP_INFO</td><td>3002</td><td></td></tr><tr><td></td><td>NOT_MEMBER_TO_UPDATE_GROUP_INFO</td><td>3003</td><td></td></tr><tr><td>Group type related errors</td><td>NO_PERMISSION_TO_CREATE_GROUP_WITH_GROUP_TYPE</td><td>3100</td><td></td></tr><tr><td></td><td>CREATE_GROUP_WITH_NON_EXISTING_GROUP_TYPE</td><td>3101</td><td></td></tr><tr><td>Group ownership related errors</td><td>NOT_ACTIVE_USER_TO_CREATE_GROUP</td><td>3200</td><td></td></tr><tr><td></td><td>NOT_OWNER_TO_TRANSFER_GROUP</td><td>3201</td><td></td></tr><tr><td></td><td>NOT_OWNER_TO_DELETE_GROUP</td><td>3202</td><td></td></tr><tr><td></td><td>SUCCESSOR_NOT_GROUP_MEMBER</td><td>3203</td><td></td></tr><tr><td></td><td>OWNER_QUITS_WITHOUT_SPECIFYING_SUCCESSOR</td><td>3204</td><td></td></tr><tr><td></td><td>MAX_OWNED_GROUPS_REACHED</td><td>3205</td><td></td></tr><tr><td></td><td>TRANSFER_NON_EXISTING_GROUP</td><td>3206</td><td></td></tr><tr><td>Errors related to group entry questions</td><td>NOT_OWNER_OR_MANAGER_TO_CREATE_GROUP_QUESTION</td><td>3300</td><td></td></tr><tr><td></td><td>NOT_OWNER_OR_MANAGER_TO_DELETE_GROUP_QUESTION</td><td>3301</td><td></td></tr><tr><td></td><td>NOT_OWNER_OR_MANAGER_TO_UPDATE_GROUP_QUESTION</td><td>3302</td><td></td></tr><tr><td></td><td>NOT_OWNER_OR_MANAGER_TO_ACCESS_GROUP_QUESTION_ANSWER</td><td>3303</td><td></td></tr><tr><td></td><td>CREATE_GROUP_QUESTION_FOR_INACTIVE_GROUP</td><td>3304</td><td></td></tr><tr><td></td><td>CREATE_GROUP_QUESTION_FOR_GROUP_USING_JOIN_REQUEST</td><td>3305</td><td></td></tr><tr><td></td><td>CREATE_GROUP_QUESTION_FOR_GROUP_USING_INVITATION</td><td>3306</td><td></td></tr><tr><td></td><td>CREATE_GROUP_QUESTION_FOR_GROUP_USING_MEMBERSHIP_REQUEST</td><td>3307</td><td></td></tr><tr><td></td><td>GROUP_QUESTION_ANSWERER_HAS_BEEN_BLOCKED</td><td>3308</td><td></td></tr><tr><td></td><td>MEMBER_CANNOT_ANSWER_GROUP_QUESTION</td><td>3309</td><td></td></tr><tr><td></td><td>ANSWER_INACTIVE_QUESTION</td><td>3310</td><td></td></tr><tr><td></td><td>ANSWER_QUESTION_OF_INACTIVE_GROUP</td><td>3311</td><td></td></tr><tr><td>Group membership related errors</td><td>ADD_USER_TO_GROUP_REQUIRING_INVITATION</td><td>3400</td><td></td></tr><tr><td></td><td>ADD_USER_TO_INACTIVE_GROUP</td><td>3401</td><td></td></tr><tr><td></td><td>ADD_USER_WITH_ROLE_HIGHER_THAN_REQUESTER</td><td>3402</td><td></td></tr><tr><td></td><td>ADD_BLOCKED_USER_TO_GROUP</td><td>3403</td><td></td></tr><tr><td></td><td>ADD_BLOCKED_USER_TO_INACTIVE_GROUP</td><td>3404</td><td></td></tr><tr><td></td><td>NOT_OWNER_OR_MANAGER_TO_REMOVE_GROUP_MEMBER</td><td>3405</td><td></td></tr><tr><td></td><td>NOT_OWNER_TO_REMOVE_GROUP_OWNER_OR_MANAGER</td><td>3406</td><td></td></tr><tr><td></td><td>NOT_OWNER_TO_UPDATE_GROUP_MEMBER_INFO</td><td>3407</td><td></td></tr><tr><td></td><td>NOT_OWNER_OR_MANAGER_TO_UPDATE_GROUP_MEMBER_INFO</td><td>3408</td><td></td></tr><tr><td></td><td>NOT_MEMBER_TO_QUERY_MEMBER_INFO</td><td>3409</td><td></td></tr><tr><td>Group blacklist related errors</td><td>NOT_OWNER_OR_MANAGER_TO_ADD_BLOCKED_USER</td><td>3500</td><td></td></tr><tr><td></td><td>NOT_OWNER_OR_MANAGER_TO_REMOVE_BLOCKED_USER</td><td>3501</td><td></td></tr><tr><td>Group join request related errors</td><td>GROUP_JOIN_REQUEST_SENDER_HAS_BEEN_BLOCKED</td><td>3600</td><td></td></tr><tr><td></td><td>NOT_JOIN_REQUEST_SENDER_TO_RECALL_REQUEST</td><td>3601</td><td></td></tr><tr><td></td><td>NOT_OWNER_OR_MANAGER_TO_ACCESS_GROUP_REQUEST</td><td>3602</td><td></td></tr><tr><td></td><td>RECALL_NOT_PENDING_GROUP_JOIN_REQUEST</td><td>3603</td><td></td></tr><tr><td></td><td>SEND_JOIN_REQUEST_TO_INACTIVE_GROUP</td><td>3604</td><td></td></tr><tr><td></td><td>SEND_JOIN_REQUEST_TO_GROUP_USING_MEMBERSHIP_REQUEST</td><td>3605</td><td></td></tr><tr><td></td><td>SEND_JOIN_REQUEST_TO_GROUP_USING_INVITATION</td><td>3606</td><td></td></tr><tr><td></td><td>SEND_JOIN_REQUEST_TO_GROUP_USING_QUESTION</td><td>3607</td><td></td></tr><tr><td></td><td>RECALLING_GROUP_JOIN_REQUEST_IS_DISABLED</td><td>3608</td><td></td></tr><tr><td>Group invite related errors</td><td>GROUP_INVITER_NOT_MEMBER</td><td>3700</td><td></td></tr><tr><td></td><td>GROUP_INVITEE_ALREADY_GROUP_MEMBER</td><td>3701</td><td></td></tr><tr><td></td><td>NOT_OWNER_OR_MANAGER_TO_RECALL_INVITATION</td><td>3702</td><td></td></tr><tr><td></td><td>NOT_OWNER_OR_MANAGER_TO_ACCESS_INVITATION</td><td>3703</td><td></td></tr><tr><td></td><td>NOT_OWNER_TO_SEND_INVITATION</td><td>3704</td><td></td></tr><tr><td></td><td>NOT_OWNER_OR_MANAGER_TO_SEND_INVITATION</td><td>3705</td><td></td></tr><tr><td></td><td>NOT_MEMBER_TO_SEND_INVITATION</td><td>3706</td><td></td></tr><tr><td></td><td>INVITEE_HAS_BEEN_BLOCKED</td><td>3707</td><td></td></tr><tr><td></td><td>RECALLING_GROUP_INVITATION_IS_DISABLED</td><td>3708</td><td></td></tr><tr><td></td><td>SEND_GROUP_INVITATION_TO_GROUP_NOT_REQUIRE_INVITATION</td><td>3709</td><td></td></tr><tr><td></td><td>RECALL_NOT_PENDING_GROUP_INVITATION</td><td>3710</td><td></td></tr><tr><td>Chat session related errors</td><td>UPDATING_TYPING_STATUS_IS_DISABLED</td><td>4000</td><td></td></tr><tr><td></td><td>UPDATING_READ_DATE_IS_DISABLED</td><td>4001</td><td></td></tr><tr><td></td><td>MOVING_READ_DATE_FORWARD_IS_DISABLED</td><td>4002</td><td></td></tr><tr><td>Message sending related error</td><td>MESSAGE_RECIPIENT_NOT_ACTIVE</td><td>5000</td><td></td></tr><tr><td></td><td>MESSAGE_SENDER_NOT_IN_CONTACTS_OR_BLOCKED</td><td>5001</td><td></td></tr><tr><td></td><td>PRIVATE_MESSAGE_SENDER_HAS_BEEN_BLOCKED</td><td>5002</td><td></td></tr><tr><td></td><td>GROUP_MESSAGE_SENDER_HAS_BEEN_BLOCKED</td><td>5003</td><td></td></tr><tr><td></td><td>SEND_MESSAGE_TO_INACTIVE_GROUP</td><td>5004</td><td></td></tr><tr><td></td><td>SEND_MESSAGE_TO_MUTED_GROUP</td><td>5005</td><td></td></tr><tr><td></td><td>SENDING_MESSAGES_TO_ONESELF_IS_DISABLED</td><td>5006</td><td></td></tr><tr><td></td><td>MUTED_MEMBER_SEND_MESSAGE</td><td>5007</td><td></td></tr><tr><td></td><td>GUESTS_HAVE_BEEN_MUTED</td><td>5008</td><td></td></tr><tr><td></td><td>MESSAGE_IS_ILLEGAL</td><td>5009</td><td></td></tr><tr><td>Message update related error</td><td>UPDATING_MESSAGE_BY_SENDER_IS_DISABLED</td><td>5100</td><td></td></tr><tr><td></td><td>NOT_SENDER_TO_UPDATE_MESSAGE</td><td>5101</td><td></td></tr><tr><td></td><td>NOT_MESSAGE_RECIPIENT_TO_UPDATE_MESSAGE_READ_DATE</td><td>5102</td><td></td></tr><tr><td>Message recall related error</td><td>RECALL_NON_EXISTING_MESSAGE</td><td>5200</td><td></td></tr><tr><td></td><td>RECALLING_MESSAGE_IS_DISABLED</td><td>5201</td><td></td></tr><tr><td></td><td>MESSAGE_RECALL_TIMEOUT</td><td>5202</td><td></td></tr><tr><td>Message query related errors</td><td>NOT_MEMBER_TO_QUERY_GROUP_MESSAGES</td><td>5300</td><td></td></tr><tr><td>Storage related errors</td><td>STORAGE_NOT_IMPLEMENTED = 6000</td><td>6000</td><td></td></tr></tbody></table><h2 id="sessionclosestatus" tabindex="-1">SessionCloseStatus <a class="header-anchor" href="#sessionclosestatus" aria-label="Permalink to &quot;SessionCloseStatus&quot;">​</a></h2><p>SessionCloseStatus indicates why the session was closed.</p><p>For the specific status code declaration, please refer to <code>im.turms.server.common.access.common.SessionCloseStatus</code> class.</p><table><thead><tr><th>Cause Category</th><th>Name</th><th>Status Code</th><th>Meaning</th></tr></thead><tbody><tr><td>Illegal client behavior</td><td>ILLEGAL_REQUEST</td><td>100</td><td>Illegal request</td></tr><tr><td></td><td>HEARTBEAT_TIMEOUT</td><td>110</td><td>Heartbeat timeout</td></tr><tr><td></td><td>LOGIN_TIMEOUT</td><td>111</td><td>Login timeout</td></tr><tr><td></td><td>SWITCH</td><td>112</td><td>Session timeout, TCP or WebSocket switches to UDP and enters dormant keep-alive state</td></tr><tr><td>Server behavior</td><td>SERVER_ERROR</td><td>200</td><td>Server exception error</td></tr><tr><td></td><td>SERVER_CLOSED</td><td>201</td><td>The server enters shutdown state</td></tr><tr><td></td><td>SERVER_UNAVAILABLE</td><td>202</td><td>Service Unavailable</td></tr><tr><td>Network layer error</td><td>CONNECTION_CLOSED</td><td>300</td><td>No close frame received, the network layer connection is forcibly closed</td></tr><tr><td>Unknown error</td><td>UNKNOWN_ERROR</td><td>400</td><td>Unknown server or client behavior error</td></tr><tr><td>Closed by the user</td><td>DISCONNECTED_BY_CLIENT</td><td>500</td><td>The current user actively requests to close the session</td></tr><tr><td></td><td>DISCONNECTED_BY_OTHER_DEVICE</td><td>501</td><td>The current session is closed because the current user&#39;s other device is online</td></tr><tr><td>The administrator actively closes</td><td>DISCONNECTED_BY_ADMIN</td><td>600</td><td>The administrator actively closes the session through the API</td></tr><tr><td>User status change</td><td>USER_IS_DELETED_OR_INACTIVATED</td><td>700</td><td>User account is deleted or enters inactive state</td></tr><tr><td></td><td>USER_IS_BLOCKED</td><td>701</td><td>User IP or User ID is blocked</td></tr></tbody></table>',14),O=[e];function N(R,T,S,s,I,o){return _(),d("div",null,O)}const U=t(E,[["render",N]]);export{A as __pageData,U as default};
