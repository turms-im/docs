import{_ as t,c as e,o,R as r}from"./chunks/framework.b6850781.js";const m=JSON.parse('{"title":"Group-related Features","description":"","frontmatter":{},"headers":[],"relativePath":"feature/group.md"}'),i={name:"feature/group.md"},n=r('<h1 id="group-related-features" tabindex="-1">Group-related Features <a class="header-anchor" href="#group-related-features" aria-label="Permalink to &quot;Group-related Features&quot;">​</a></h1><p>Types of group members include: group owner, administrator, ordinary member, visitor, anonymous visitor</p><h2 id="related-paths-and-models" tabindex="-1">Related paths and models <a class="header-anchor" href="#related-paths-and-models" aria-label="Permalink to &quot;Related paths and models&quot;">​</a></h2><ul><li>Admin API path: <code>/groups</code>. For specific API details, please refer to the OpenAPI documentation</li><li>Client Interface: Please refer to the <code>GroupServiceController</code> class.</li><li>The underlying request model: please refer to the interface description file in the <code>https://github.com/turms-im/proto/tree/master/request/group</code> directory</li><li>Configuration class: <code>im.turms.server.common.infra.property.env.service.business.group.GroupProperties</code></li></ul><h2 id="function-list" tabindex="-1">function list <a class="header-anchor" href="#function-list" aria-label="Permalink to &quot;function list&quot;">​</a></h2><table><thead><tr><th style="text-align:left;"><strong><div style="min-width:100px;">Function</div></strong></th><th><strong>Description</strong></th><th><strong>Related configuration attribute name</strong></th></tr></thead><tbody><tr><td style="text-align:left;">New Group</td><td>New Group</td><td>turms.service.group.activate-group-when-created</td></tr><tr><td style="text-align:left;">The group owner dismisses the group</td><td>The group owner can dismiss the group</td><td>turms.service.group.delete-group-logically-by-default</td></tr><tr><td style="text-align:left;">Actively withdraw from the group</td><td>Except for the group owner, other users can actively withdraw from the group. The group owner needs to transfer the group to other group members before they can withdraw from the group</td><td></td></tr><tr><td style="text-align:left;">Group owner transfer group</td><td>The group owner can transfer the owner authority of the group to other members in the group. After the transfer, the transferred person becomes the new group owner, and the original group owner becomes an ordinary member. The group owner can also choose to quit the group directly while transferring</td><td></td></tr><tr><td style="text-align:left;">Modify group information</td><td>Support group name, group avatar, group introduction, group notification, group type and other fields</td><td></td></tr><tr><td style="text-align:left;">Group ban</td><td>Ordinary members of the group cannot send messages during the mute period, only the group owner and administrator can send messages</td><td></td></tr><tr><td style="text-align:left;">Get group information</td><td>Find groups based on filter conditions (such as group ID)</td><td></td></tr><tr><td style="text-align:left;">Add group members</td><td>Add group members</td><td></td></tr><tr><td style="text-align:left;">Send invitation to join the group</td><td>Group members with the role of invitation permission can send invitation to the specified user</td><td>turms.service.group.invitation.content-limit<br>turms.service.group.invitation.expire-after- seconds<br>turms.service.group.invitation.expired-invitations-cleanup-cron<br>turms.service.group.invitation.delete-expired-invitations-when-cron-triggered<br></td></tr><tr><td style="text-align:left;">Cancel the invitation to join the group</td><td>The group owner, administrator and initiator of the invitation to join the group can cancel the invitation to join the group</td><td>turms.service.group.invitation.allow-recall-pending-invitation-by-owner-and-manager</td></tr><tr><td style="text-align:left;">Send group request</td><td></td><td>turms.service.group.join-request.content-limit<br>turms.service.group.join-request.expire-after-seconds<br>turms.service.group.join -request.expired-join-requests-cleanup-cron<br>turms.service.group.join-request.delete-expired-join-requests-when-cron-triggered</td></tr><tr><td style="text-align:left;">Cancel group join request</td><td></td><td>turms.service.group.join-request.allow-recall-join-request-sent-by-oneself</td></tr><tr><td style="text-align:left;">Set group entry questions</td><td>For groups whose group entry policy is &quot;join after the group entry requester answers the questions correctly&quot;, group owners and administrators can set group entry questions. There can be multiple questions for entering the group, and one question can have multiple answers</td><td>turms.service.group.question.answer-content-limit<br>turms.service.group.question.max-answer-count<br>turms .service.group.question.question-content-limit</td></tr><tr><td style="text-align:left;">Delete group entry question</td><td>Delete group entry question</td><td></td></tr><tr><td style="text-align:left;">Remove group members</td><td>Group owners and administrators can remove group members, and administrators cannot remove group owners and other administrators</td><td></td></tr><tr><td style="text-align:left;">Update group member information</td><td>According to the corresponding &quot;group type&quot;, group members with specified roles can modify the member information of other group members (for example: the group owner assigns administrator roles to group members)</td><td></td></tr><tr><td style="text-align:left;">Muting group members</td><td>Muted users can be in the group, but cannot send messages</td><td></td></tr><tr><td style="text-align:left;">Group member coordinates sharing in real time</td><td>Group members can share their coordinates with other group members in real time</td><td></td></tr><tr><td style="text-align:left;">Group Blacklist</td><td>After a user is blacklisted, he will no longer be able to enter the group. If the blocked user is a current group member before being blocked, the user will be automatically removed from the group member list after being blocked</td><td></td></tr></tbody></table><h2 id="group-type-configuration" tabindex="-1">Group type configuration <a class="header-anchor" href="#group-type-configuration" aria-label="Permalink to &quot;Group type configuration&quot;">​</a></h2><p>In terms of group configuration, Turms uses the concept of &quot;group types&quot;. By default, Turms provides a general group type, and you can also add, delete, modify and query the &quot;group type&quot; to meet your customized group type needs.</p><p>Corresponding admin API: <code>/groups/types</code>. For specific API details, please refer to the OpenAPI documentation Corresponding configuration model: <code>im.turms.service.domain.group.po.GroupType</code></p><h3 id="configuration-list" tabindex="-1">Configuration list <a class="header-anchor" href="#configuration-list" aria-label="Permalink to &quot;Configuration list&quot;">​</a></h3><table><thead><tr><th style="text-align:left;"><strong>Attribute</strong></th><th><strong>Description</strong></th><th><strong>Configuration attribute name</strong></th></tr></thead><tbody><tr><td style="text-align:left;">Maximum number of group members</td><td>Valid value is 1~∞</td><td>groupSizeLimit</td></tr><tr><td style="text-align:left;">Group Invitation Policy</td><td>Support configuration:<br>①Only the group owner can invite: <code>OWNER</code>, <code>OWNER_REQUIRING_APPROVAL</code>;<br>②The group owner + administrator can invite: <code>OWNER_MANAGER</code>, <code>OWNER_MANAGER_REQUIRING_APPROVAL</code>;&lt; br /&gt;③Group owner + administrator and group members can invite: <code>OWNER_MANAGER_MEMBER</code>, <code>OWNER_MANAGER_MEMBER_REQUIRING_APPROVAL</code>;<br>④Everyone can invite: <code>ALL</code>, <code>ALL_REQUIRING_APPROVAL</code></td><td>invitationStrategy</td></tr><tr><td style="text-align:left;">Invitee&#39;s Consent Mode</td><td>Support configuration:<br>①The invitee&#39;s consent is required: the inviter sends an invitation to the invitee. If the invitee agrees to the invitation, it will automatically join the group: the strategy with <code>_REQUIRING_APPROVAL</code>;<br>②The invitee&#39;s consent is not required: the inviter is prohibited from sending invitations to the invitee. The inviter can directly add the invitee to the group: strategy without <code>_REQUIRING_APPROVAL</code></td><td>invitationStrategy</td></tr><tr><td style="text-align:left;">Group Joining Policy</td><td>Supported configuration:<br>①After the group owner or administrator approves the group joining request, the group requester can join: <code>JOIN_REQUEST</code>;<br>②After the group joining requester answers the questions correctly , automatically join: <code>QUESTION</code>;<br>③Allow unblocked users to actively join:<code>MEMBERSHIP_REQUEST</code>;<br>④No user is allowed to actively join, the group owner or administrator needs to send an invitation or directly pull Entering the group: <code>INVITATION</code></td><td>joinStrategy</td></tr><tr><td style="text-align:left;">Group information update strategy</td><td>Supported configuration:<br>①Only the group owner can modify;<br>②Group owner + administrator can modify;<br>③Group owner+administrator+group members can modify;<br> br /&gt;④ Everyone can modify</td><td>groupInfoUpdateStrategy</td></tr><tr><td style="text-align:left;">Group member information update strategy</td><td>The group owner can modify the member information of everyone in the group, and the administrator can only modify the member information of ordinary members in the group</td><td>memberInfoUpdateStrategy</td></tr><tr><td style="text-align:left;">Guest Speak</td><td>Prohibited, Allowed</td><td>guestSpeakable</td></tr><tr><td style="text-align:left;">Group members modify their own information</td><td>Can be prohibited, allowed</td><td>selfInfoUpdatable</td></tr><tr><td style="text-align:left;">Group message read receipt</td><td>Can be turned on and off</td><td>enableReadReceipt</td></tr><tr><td style="text-align:left;">Modify sent messages</td><td>Can be turned on and off</td><td>messageEditable</td></tr></tbody></table><p>remind:</p><ul><li><p>There is no mutually exclusive relationship between the above &quot;invitation policy&quot;, &quot;invitee consent mode&quot; and &quot;group policy&quot;, and they are all compatible with each other, so developers can match them according to their own application scenarios .</p></li><li><p>If the administrator modifies the invitation policy or joining policy of a group type, which leads to a change in the policy corresponding to the group, the data corresponding to the old policy will be archived and will not be deleted by the system. Authorized users can still delete, modify and query these data.</p><p>For example, a group originally allowed new users to join the group based on the policy of &quot;approving group entry requests&quot;, and the group has received some group entry requests. If the system administrator (note: users do not have permission to modify the group type) modify the group policy to &quot;question-and-answer based&quot; policy to allow new users to join the group, then the previously received request to join the group will not be deleted by the system. When the group administrator tries to approve these group entry requests, the server will also notify the group policy of the change and reject the approval. But group administrators can still delete, modify and query these group requests.</p><p>In addition, some users may think that the group policy of Turms is more complicated, but this kind of &quot;complexity&quot; has nothing to do with users. Users only need to configure according to their own application scenarios. It is very simple to use, just the development of Turms It is more complicated to implement these dynamic combination strategies.</p></li><li><p>We have no plan to support the feature of &quot;users block groups to refuse to receive group invitations and be pulled into groups&quot;.</p></li></ul><h2 id="scene-introduction" tabindex="-1">Scene introduction <a class="header-anchor" href="#scene-introduction" aria-label="Permalink to &quot;Scene introduction&quot;">​</a></h2><h3 id="user-joins-a-group" tabindex="-1">User joins a group <a class="header-anchor" href="#user-joins-a-group" aria-label="Permalink to &quot;User joins a group&quot;">​</a></h3><ol><li><p>The client queries the group information of the specified group through <code>turmsClient.groupService.queryGroups(...)</code>.</p></li><li><p>Obtain group type information based on the relationship between the local hard-coded group type ID and group type information.</p><p>Replenish:</p><ul><li>Here, the client does not support dynamic query of group type information because the group type of most applications is fixed, and there is no need to dynamically pull information.</li><li>If your application only uses one group type, you can directly hard-code the group type information on the client side, skip steps ① and ②, and go directly to the next step.</li></ul></li><li><p>According to the group entry policy in the group type information, determine which client API needs to be called to join the group:</p><ul><li>If it is <code>JOIN_REQUEST</code> policy, you need to call <code>turmsClient.groupService.createJoinRequest(...)</code> to send the request to join the group, and wait for the approval of the group administrator.</li><li>If it is <code>QUESTION</code> strategy, you need to call <code>turmsClient.groupService.queryGroupJoinQuestions(...)</code> to query group questions, and then use <code>turmsClient.groupService.answerGroupQuestions(...)</code> to answer group questions, when the score reaches After the group administrator sets the entry threshold, you can automatically join the group.</li><li>If it is <code>MEMBERSHIP_REQUEST</code> policy, call <code>turmsClient.groupService.joinGroup(...)</code> to directly join the group without any approval.</li><li>If it is <code>INVITATION</code> strategy, you need to wait for the group administrator to send the current user an invitation to join the group.</li></ul></li></ol>',16),a=[n];function d(s,u,l,p,c,g){return o(),e("div",null,a)}const f=t(i,[["render",d]]);export{m as __pageData,f as default};
