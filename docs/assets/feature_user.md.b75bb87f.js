import{_ as e,c as t,o as r,R as o}from"./chunks/framework.b6850781.js";const g=JSON.parse('{"title":"User-related Features","description":"","frontmatter":{},"headers":[],"relativePath":"feature/user.md"}'),s={name:"feature/user.md"},i=o('<h1 id="user-related-features" tabindex="-1">User-related Features <a class="header-anchor" href="#user-related-features" aria-label="Permalink to &quot;User-related Features&quot;">​</a></h1><h2 id="related-paths-and-models" tabindex="-1">Related paths and models <a class="header-anchor" href="#related-paths-and-models" aria-label="Permalink to &quot;Related paths and models&quot;">​</a></h2><ul><li>Admin API path: <code>/users</code>. For specific API details, please refer to the OpenAPI documentation</li><li>Client Interface: Please refer to the <code>UserServiceController</code> class</li><li>The underlying request model: please refer to the interface description file in the <code>https://github.com/turms-im/proto/tree/master/request/user</code> directory</li><li>Configuration class: <code>im.turms.server.common.infra.property.env.service.business.user.UserProperties</code></li></ul><h2 id="user-information-function" tabindex="-1">User information function <a class="header-anchor" href="#user-information-function" aria-label="Permalink to &quot;User information function&quot;">​</a></h2><table><thead><tr><th style="text-align:left;"><strong>Function</strong></th><th><strong>Function Description</strong></th><th><strong>Related Configuration</strong></th></tr></thead><tbody><tr><td style="text-align:left;">Add User</td><td></td><td>turms.service.user.activate-user-when-added</td></tr><tr><td style="text-align:left;">Delete User</td><td></td><td>turms.service.user.delete-user-logically</td></tr><tr><td style="text-align:left;">Modify user profile</td><td>Users modify their own nickname, introduction, avatar URL</td><td></td></tr><tr><td style="text-align:left;">Get user profile</td><td>User view own or other user&#39;s profile</td><td></td></tr><tr><td style="text-align:left;">Set user profile access permissions</td><td>Users can set access permissions for each personal profile. Access rights are: visible to everyone, visible to friends, visible only to yourself</td><td></td></tr><tr><td style="text-align:left;">User permission group</td><td>Administrators can give different permissions to different users</td><td>Configuration model: im.turms.service.domain.user.po.UserPermissionGroup</td></tr></tbody></table><h2 id="user-relationship-hosting" tabindex="-1">User Relationship Hosting <a class="header-anchor" href="#user-relationship-hosting" aria-label="Permalink to &quot;User Relationship Hosting&quot;">​</a></h2><p>concept:</p><ul><li>Relationship: Relationship is divided into one-way relationship and two-way relationship. One-way relationship refers to: the owner of the relationship (relationship owner) has a specific relationship with the Related User (relationship person), such as &quot;one-way friend&quot; (allowing the other party to send messages and friend requests) or &quot;blocking User&quot; (prohibit the other party from sending messages, friend requests, etc.). The establishment of a one-way relationship does not require permission authentication. A two-way relationship means that user A has a one-way relationship with user B, and user B has a one-way relationship with user A. For example, user A blocks user B, and user B can specify not to block user A.</li><li>Related Users: Refers to users who have a one-way or two-way relationship (designate the other party as a friend or block the user). Two users are Strangers if they don&#39;t have a relationship of either kind.</li><li>Relational person group: A relational person group consists of a group name and a group of related persons, and each relationship must exist in at least one related person group. If the client does not perform a group operation on the relationship when creating the relationship, the relationship will be put into the user&#39;s default relationship group. Therefore, special attention should be paid to the fact that there can be both &quot;friends&quot; and &quot;blocked&quot; users in &quot;a related person group&quot;. Of course, you can restrict a group to only have a certain type of related person through business restrictions.</li></ul><p>Additional supplement: In fact, there is no such concept as &quot;friend/block user&quot; in the Turms domain model, and its essence is a bool called &quot;isBlocked&quot;.</p><table><thead><tr><th style="text-align:left;"><strong><div style="min-width:100px;">Function</div></strong></th><th><strong>Function Description</strong></th><th><strong>Related Configuration</strong></th></tr></thead><tbody><tr><td style="text-align:left;">Get relationship</td><td>Get the relationship owned by the current user according to optional filtering (such as specifying user ID, &quot;whether it is a contact&quot;, &quot;whether it is a friend/blocked user&quot;, etc.) and grouping conditions</td><td></td></tr><tr><td style="text-align:left;">Add a relationship (+initiate a friend request)</td><td>①If adding a relationship as a &quot;friend&quot;, according to your customized Turms server configuration, the user can either directly add a &quot;friend&quot; relationship, or initiate a friend request first , the operation of adding a &quot;friend&quot; relationship will not be performed automatically until the requestee&#39;s approval is obtained. <br>② If you add a related person whose relationship is &quot;block user&quot;, no approval is required and it will take effect directly. Users will no longer receive any messages or requests from blocked users.</td><td>turms.service.user.friend-request.content-limit<br>turms.service.user.friend-request.delete-expired-requests-when-cron-triggered<br>turms.service.user.friend -request.allow-send-request-after-declined-or-ignored-or-expired<br>turms.service.user.friend-request.friend-request-expire-after-seconds<br>turms.service .user.friend-request.expired-user-friend-requests-cleanup-cron<br>turms.service.user.friend-request.delete-expired-requests-when-cron-triggered</td></tr><tr><td style="text-align:left;">Approve/Reject Friend Request</td><td>User can approve or reject friend request. If you agree to the friend request, the two will establish a two-way &quot;friend&quot; relationship</td><td></td></tr><tr><td style="text-align:left;">Delete Relation</td><td>According to the optional deletion conditions (such as &quot;is/is not a relation&quot;, &quot;is a friend/block user&quot;), delete a certain type of relation or a designated relation.</td><td>deleteTwoSidedRelationships</td></tr><tr><td style="text-align:left;">Modify the relationship with related parties</td><td>Modify user relationship (friend/block user) information. When modifying the relationship to &quot;friend&quot;, you need to send a friend request by default (you can cancel this step)</td><td></td></tr><tr><td style="text-align:left;">Create relational person group</td><td>When creating a group, you can specify the group name and the relational person to be added at the same time. The same person can be added to multiple groups</td><td></td></tr><tr><td style="text-align:left;">Delete related group</td><td>Delete the related group, and you can choose whether to transfer the related people in the deleted related group to other groups (if not specified, it will be assigned to &quot;default group&quot; by default)</td><td></td></tr><tr><td style="text-align:left;">Rename Relationship Group</td><td>Rename Relationship Group</td><td></td></tr><tr><td style="text-align:left;">Obtain the user&#39;s own related person group information</td><td>Get the user&#39;s own related person group information</td><td></td></tr><tr><td style="text-align:left;">Add a relation to a group</td><td>Add/move a relation to a relation group. If the group does not exist, the operation fails</td><td></td></tr><tr><td style="text-align:left;">Delete a related person from a group</td><td>Delete a related person from a related person group</td><td></td></tr></tbody></table><h2 id="gps" tabindex="-1">GPS <a class="header-anchor" href="#gps" aria-label="Permalink to &quot;GPS&quot;">​</a></h2><p>Configuration class: <code>im.turms.server.common.infra.property.env.common.location.LocationProperties</code></p><table><thead><tr><th><strong>Function</strong></th><th><strong>Function Description</strong></th><th><strong>Related Configuration</strong></th></tr></thead><tbody><tr><td>User location record</td><td>Periodically record user location</td><td>turms.location.enabled<br>turms.location.treat-user-id-and-device-type-as-unique-user</td></tr><tr><td>People Nearby</td><td>Search for other nearby users based on current real-time coordinates</td><td>turms.location.users-nearby-request.default-max-available-nearby-users-number<br>turms.location.users-nearby-request. default-max-distance-meters<br>turms.location.users-nearby-request.max-available-users-nearby-number-limit<br>turms.location.users-nearby-request.max-distance- meters</td></tr></tbody></table><h2 id="statistics-function" tabindex="-1">Statistics function <a class="header-anchor" href="#statistics-function" aria-label="Permalink to &quot;Statistics function&quot;">​</a></h2><p>Configuration class: <code>im.turms.server.common.infra.property.env.service.env.StatisticsProperties</code></p><p>Although Turms provides some basic statistical functions, it is recommended that users collect various statistical data through cloud services, such as Amazon CloudWatch.</p><table><thead><tr><th><strong>Function</strong></th><th><strong>Function Description</strong></th><th><strong>Related Configuration</strong></th></tr></thead><tbody><tr><td>Online user statistics</td><td>The Master node in the Turms cluster will regularly record the number of online users in the cluster in the form of logs</td><td>turms.service.statistics.log-online-users-number<br>turms.service.statistics. online-users-number-logging-cron</td></tr></tbody></table>',17),a=[i];function n(d,l,u,c,h,p){return r(),t("div",null,a)}const m=e(s,[["render",n]]);export{g as __pageData,m as default};
