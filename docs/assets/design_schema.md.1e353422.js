import{_ as e,o as t,c as o,U as s}from"./chunks/framework.95a60cb2.js";const f=JSON.parse('{"title":"Collection Schema Design","description":"","frontmatter":{},"headers":[],"relativePath":"design/schema.md","filePath":"design/schema.md"}'),i={name:"design/schema.md"},n=s('<h1 id="collection-schema-design" tabindex="-1">Collection Schema Design <a class="header-anchor" href="#collection-schema-design" aria-label="Permalink to &quot;Collection Schema Design&quot;">​</a></h1><h2 id="requirements-analysis-and-collection-schema-design" tabindex="-1">Requirements Analysis and Collection Schema Design <a class="header-anchor" href="#requirements-analysis-and-collection-schema-design" aria-label="Permalink to &quot;Requirements Analysis and Collection Schema Design&quot;">​</a></h2><p>When doing architecture design, it is often said that &quot;key requirements determine architecture design, secondary requirements verify architecture&quot; (here &quot;requirements&quot; include functional requirements, quality attribute requirements, and constraint requirements). However, as Turms is a general instant messaging project, its requirements are not as clear and specific as those of a concrete instant messaging project. Therefore, facing endless business requirements and various possible constraints, Turms cannot and should not design for every scenario. Therefore, when designing Turms, we follow the principle of &quot;prioritizing key universal instant messaging requirements&quot;.</p><p>When abstracting various complex requirements into actual business models, it is necessary to understand the priority relationship between requirements and ultimately express these requirement relationships in the form of collection schemas, which is the most important embodiment of technical architecture implementation. Therefore, it is essential to review and adjust the default collection schemas provided by Turms according to your own product requirements.</p><h2 id="default-collection-index-design" tabindex="-1">Default Collection Index Design <a class="header-anchor" href="#default-collection-index-design" aria-label="Permalink to &quot;Default Collection Index Design&quot;">​</a></h2><p><strong>Key Points</strong> (If your team needs to develop based on Turms, please remember the following three points):</p><ul><li><strong>The index is designed mainly based on the characteristics and constraints of distributed data sharding, and is designed based on the principle of more read and less write and prioritizing key universal instant messaging requirements.</strong></li><li><strong>The index is not designed for data analysis</strong> (please refer to <a href="https://turms-im.github.io/docs/server/module/data-analytics" target="_blank" rel="noreferrer">Turms Data Analytics</a> for details).</li><li><strong>The index is not designed for admin API</strong> (to avoid unnecessary index overhead, at the cost of relatively poor flexibility of the admin API).</li><li><strong>Turms does not use auxiliary indexes to support extra business features</strong> (therefore, if your project has extra business features, you need to develop on top of Turms. Of course, this is also very simple to implement, and qualified intermediate to advanced engineers should have this ability).</li></ul><p>It is particularly important to emphasize the principle of &quot;prioritizing key universal instant messaging requirements&quot;, because it reminds not only developers but also product managers and clients to pay attention to the design of collections. For scenarios involving distributed data sharding, some seemingly &quot;simple-to-implement&quot; features can bring a lot of resource consumption and increase the difficulty of development and operation when actually implemented. Therefore, for such &quot;laborious and futile&quot; features, it is necessary to confirm whether the requirement is reasonable, necessary, and able to bear the corresponding risks and costs through multiple iterations after confirming whether it needs to be implemented. After considering factors such as the need for implementation and the possibility of multiple iterations, it is then appropriate to consider whether to adopt a design with flexibility on the collection to facilitate future updates and reduce the risk of thoroughly refactoring.</p><p>Take the &quot;query groups joined by a user&quot; feature as an example. The <code>GroupMember</code> collection in Turms is used to manage the relationship between groups and users. This collection is designed to shard data based on group IDs by default. Therefore, if you need to find group-related data according to group IDs in a distributed database server, it is very easy for the database (targeted queries). However, conversely, if you need to find the groups that a certain user has joined based on their user ID without creating a new auxiliary collection, it becomes extremely inefficient (scatter gather queries). Because the database cannot locate the relevant group data based on the user ID, it will send the query request to all database servers, causing a large number of invalid and redundant requests, with only a small proportion of valid requests, ultimately resulting in a lower effective throughput of the database cluster than a single database.</p><p>With the increase of the user scale, either due to misjudgment of primary and secondary requirements leading to the need to overturn the architecture and start over, or to customize and expand on the existing basis (such as implementing an auxiliary collection by oneself like ShardingSphere to help with data sharding, but such implementation is likely to cause a large amount of redundant data and transactions). Therefore, it is necessary to have a deep understanding of the default collection index design of Turms and remember that &quot;the default index is designed mainly based on the characteristics and constraints of distributed data sharding, and is designed based on the principle of more read and less write and prioritizing key universal instant messaging requirements&quot;.</p><h2 id="the-cost-of-rich-features" tabindex="-1">The Cost of Rich Features <a class="header-anchor" href="#the-cost-of-rich-features" aria-label="Permalink to &quot;The Cost of Rich Features&quot;">​</a></h2><p>After gaining a deep understanding of Turms&#39; default collection index design, you will understand why so many large and medium-sized instant messaging applications do not provide, and should not provide, some seemingly &quot;simple&quot; features. You will also understand what needs to be paid attention to when implementing an instant messaging application in practice. On the other hand, you should also be wary of instant messaging technology solutions that claim to provide rich business features because they are likely only suitable for user scales of hundreds or thousands. If your product needs to scale up later, you will find that some existing collection designs and data sharding designs are contradictory, and you may need to start refactoring from schemas, which can ultimately lead to a complete reconstruction of the project, forcing you to start over with a self-developed solution.</p><p>Here is an example of explaining a feature: &quot;To limit the number of groups each user can create, the server needs to have the ability to quickly find the number of groups owned by that user.&quot; This seems like a very &quot;simple&quot; feature to implement. However, due to Turms&#39; default index design principle mentioned above, Turms only shards the Group ID for quick group member information retrieval.</p><p>Therefore, we cannot quickly query the number of groups owned by a user based on the group owner ID using a targeted query. To achieve a relatively feasible solution, there are roughly only three options (note that these three solutions can be applied to other extended functional designs through analogy):</p><ol><li><p>Create a single-column index for the group owner ID. Although a targeted query cannot be implemented, it is still possible to query relatively quickly after a scatter query. (Note: this type of implementation is the default implementation provided by Turms for extended functionality but is disabled in the default configuration.)</p></li><li><p>Dimensional modeling, creating an auxiliary index set specifically for recording the group owner ID and the corresponding group ID. A targeted query can be achieved, but some key operations require the use of distributed transactions to ensure data consistency, and there is still data redundancy.</p></li><li><p>Use a static statistical table to specifically record the number of groups each user already owns. This solution is the most efficient and has the minimum redundancy, but it still requires distributed transactions, and has the worst scalability.</p></li></ol><p>It is clear that for implementing a seemingly &quot;simple&quot; feature, our three implementation solutions not only have vastly different requirements for system resources but also have time complexity that is not in the same order of magnitude.</p><p>Therefore, one should always be wary of instant messaging solutions that claim to be &quot;feature-rich&quot;.</p><h2 id="collection-structure" tabindex="-1">Collection Structure <a class="header-anchor" href="#collection-structure" aria-label="Permalink to &quot;Collection Structure&quot;">​</a></h2><p><strong>Turms&#39; collection structure may contain fields that your product does not use at all, but these unused fields are not stored in the database, so you do not need to worry about them increasing database overhead.</strong></p><h3 id="how-turms-collection-structure-was-designed" tabindex="-1">How Turms&#39; Collection Structure was Designed <a class="header-anchor" href="#how-turms-collection-structure-was-designed" aria-label="Permalink to &quot;How Turms&#39; Collection Structure was Designed&quot;">​</a></h3><p>Turms&#39; collection structure was not designed in a single commit or within a few days but was sorted out through a long period of iterative analysis and practice. The process was roughly as follows:</p><ol><li>Analyze business needs, grasp the intricate logic between businesses, and clarify the main and secondary relationships of the needs. It is required not only to cover all existing requirements but also to predict future business needs as much as possible and confirm which business needs are not needed.</li><li>Analyze the specific code logic of the business implementation and determine the necessary fields.</li><li>Determine the field ID. It is worth noting that composite IDs can have independent indices internally. For example, the composite ID of the <code>GroupMember</code> collection is <code>group ID + user ID</code>, and these two fields have their independent indices for implementing other business functions.</li><li>Build indexes. First, consider whether each field indeed needs an index and whether it can be made into an optional index. Then, consider whether several fields can be combined into a composite index (including analyzing the cardinality of records, the frequency of using composite indices, whether the query condition can always follow the leftmost matching principle, and whether it can also avoid table returning queries).</li><li>Determine whether to shard the collection, including analyzing whether the collection needs data cold and hot separation. If sharding is required, whether data can be sharded &quot;incidentally&quot; based on the above index information.</li></ol><h3 id="collection-details" tabindex="-1">Collection Details <a class="header-anchor" href="#collection-details" aria-label="Permalink to &quot;Collection Details&quot;">​</a></h3><h4 id="summary" tabindex="-1">Summary <a class="header-anchor" href="#summary" aria-label="Permalink to &quot;Summary&quot;">​</a></h4><p>The following content is just a basic theory. As we mentioned in <code>How the collection structure of Turms is designed</code>, the actual business is more complex and changeable. Therefore, in the face of specific collection index design, it is necessary to combine its actual application scenarios Do analysis and design.</p><h5 id="data-fragmentation" tabindex="-1">Data Fragmentation <a class="header-anchor" href="#data-fragmentation" aria-label="Permalink to &quot;Data Fragmentation&quot;">​</a></h5><p>Except for small collections such as <code>Admin</code> (Admin), <code>GroupType</code> (GroupType) and other small collections that do not need data sharding, most other collections support data sharding, such as <code>User</code> (User), <code>Group</code> (Group) and <code>Message</code> (Message) are combined to realize that when sending CRUD requests to mongos, mongos can do load balancing and balance data load by itself, and it is also to support the separation of hot and cold data.</p><h5 id="record-creation-time-index" tabindex="-1"><code>record creation time</code> index <a class="header-anchor" href="#record-creation-time-index" aria-label="Permalink to &quot;`record creation time` index&quot;">​</a></h5><p>The composite index of many collections has the <code>record creation time</code> field, which is to match the <a href="https://turms-im.github.io/docs/design/status-aware.html#%E6%84%9F%E7%9F%A5%E6%96%B9%E5%BC%8F" target="_blank" rel="noreferrer">pull mode</a> of Turms, to support quick query of records in a certain time range and avoid repeated query by the client. This is why most query statements on the Turms client can include a query time interval parameter, and if the client request does not include this parameter, the Turms server will assign a query time interval by default to ensure query performance.</p><h5 id="id-only-uses-b-tree-index" tabindex="-1">ID only uses B-tree index <a class="header-anchor" href="#id-only-uses-b-tree-index" aria-label="Permalink to &quot;ID only uses B-tree index&quot;">​</a></h5><p>We prohibit the use of Hashed indexes for record IDs. This is because MongoDB does not support <code>uniqueness constraints</code> through Hashed indexes. Only B-tree indexes can be used to ensure the uniqueness of records. Therefore, even if we add a For the Hashed index, MongoDB will automatically create an additional B-tree index, which is not worth the loss.</p><h5 id="optional-fields-and-indexes" tabindex="-1">Optional fields and indexes <a class="header-anchor" href="#optional-fields-and-indexes" aria-label="Permalink to &quot;Optional fields and indexes&quot;">​</a></h5><p>There are dozens of optional indexes in the Turms collection, but they are not enabled by default, because:</p><ul><li>Although many IM business requirements are typical, they are in conflict with each other. For example, it is necessary to support <code>message or request sender can query the message or request sent by himself</code> and <code>message or request sender cannot query the message sent by himself. or requests</code> (the default implementation).</li><li>Or some IM business requirements are typical, but not so common, such as <code>whether the processor of the group request can query the requests he has processed</code>. The optional indexes used to support such extended IM functions account for the majority.</li><li>If these optional indexes are turned on by default, it is designed for small IM applications. For larger IM applications, it is a mistake that we mentioned above as &quot;the fatal price of rich functions&quot;.</li></ul><p>**The principle for us to choose the default implementation scheme is: choose the scheme that does not require additional fields or indexes, has the lowest storage cost, and can be logically consistent with other IM business requirements. And if your application really needs to support another solution, we generally provide multiple sets of alternative solutions, which need to be configured by the user to replace the default implementation. **</p><p>As long as you grasp this basic principle, you can deduce why the indexes of the Turms collection are so designed. In addition, each model and each field in the code actually has index-related comments, which are used to guide users: what fields are suitable for indexing in which scenarios, and why some fields do not use indexes. Users can design with reference to this note.</p><p>Note: Very few optional indexes are enabled by default, because the scenarios corresponding to these indexes are very common, and only a few applications do not need to use these scenarios. In addition, Turms has not yet optimized the scenarios where these optional indexes are not enabled, so it is currently recommended that you do not manually turn them off.</p><p>Replenish:</p><ul><li><p>These optional indexes can be enabled by configuring <code>turms.service.mongo.[service name].optional-index.[collection name].[field name]=true</code>, such as <code>turms.service.mongo.message. optional-index.message.sender-id=true</code>.</p><p>Reminder: IntelliJ IDEA supports configuration auto-completion</p></li><li><p>Users can also directly create the indexes they want to use on the MongoDB service, and it is very simple to add or delete indexes or fields in MongoDB, so even if the user misses configuration, or the requirements are not clear in the early stage, and new requirements come later, there is no need to worry about being unable to do so Add a new index or field.</p><p>Additional supplement: Each version of MongoDB will release some very practical new features. There may be some complex functions that we need to fully develop ourselves in the early days, but in the new version of MongoDB, we only need to execute one command to realize it, which greatly reduces the development and effort. It is difficult to operate and maintain and improve the reliability of functions, so it is highly recommended that you deploy the new version of MongoDB as much as possible.</p></li></ul><h5 id="by-default-the-request-sender-field-of-the-request-model-is-not-indexed" tabindex="-1">By default, the <code>request sender</code> field of the <code>request</code> model is not indexed <a class="header-anchor" href="#by-default-the-request-sender-field-of-the-request-model-is-not-indexed" aria-label="Permalink to &quot;By default, the `request sender` field of the `request` model is not indexed&quot;">​</a></h5><p>The two collections such as <code>friend request</code> and <code>group request</code> do not index the <code>request sender</code> by default. In other words, once the user sends the request, he can no longer query the requests he has already sent, and the client needs to record it locally. If your product really needs the server to record and query the requests sent by users, you need to configure the above optional index by yourself, and let turms-service add this index when creating the table for the first time, or you can directly add it on the MongoDB server Build an index into the collection.</p><h4 id="message" tabindex="-1">Message <a class="header-anchor" href="#message" aria-label="Permalink to &quot;Message&quot;">​</a></h4><p><code>Message</code> is currently the only model that supports separate storage of hot and cold data. <strong>The separation of hot and cold data can greatly save the cost of the database server</strong>, such as putting hot data in a <code>16-core 128G</code> server, and putting cold data in a <code>4-core 8G</code> server. In addition, other models currently do not have the meaning of separate storage of hot and cold data, so other models do not support it.</p><h5 id="index" tabindex="-1">index <a class="header-anchor" href="#index" aria-label="Permalink to &quot;index&quot;">​</a></h5><ul><li><p>Business scenario: Do you need to support the message sender to be able to query the messages he sent himself?</p><ul><li><p>Scheme 1 (default scheme): This feature is not supported, use <code>message sending time + recipient ID</code> compound index</p><p>Since <code>message</code> needs to support the separation of hot and cold data, the composite index of the message is: <code>message sending time + recipient ID</code>, and the sharding key is <code>message sending time</code>, to ensure that we can combine Zones in different time intervals Allocate to different Shards, and realize the cold and hot separation storage of messages.</p><p>(If <code>message</code> does not need to support the separation of hot and cold data, then the composite index of Turms’ message model should be: <code>recipient ID + message sending time</code>, and the shard key is <code>recipient ID</code>, to ensure that MongoDB can Do load balancing for both read and write requests, and ensure that messages sent to the same recipient are divided into the same Chunks as much as possible to improve query speed)</p><p>Supplement: As for why there is no separation of hot and cold data for collections such as <code>add friend request</code> and <code>group invitation request</code>, this is because although these requests are indeed closely related to the creation time in terms of business performance, for example, <code>add friend request</code> has passed After a period of time, from a business point of view, it is in the state of <code>The request has expired and cannot be processed</code>. However, for the recipient of the request, even if it is an expired request, the user often needs to quickly query all the requests he has received through query statements, and the number of visits will not decrease with time. For example, if a user has received 20 friend requests this year and 20 friend requests last year, and the client can query at most 50 requests each time, then the database should use the recipient ID as the dimension to store the recipients of the same request The data is divided into a Chunk. Instead of dividing the data of the same request receiver into different Chunks and loading them into different databases based on the request creation time. Therefore, we do not support hot and cold data separation for these collections. For this type of collection, we generally use a composite index such as <code>request recipient ID + request creation time</code>, and use <code>request recipient ID</code> as the shard key to collect all requests received by a request recipient as much as possible. Put them in the same Chunk.</p></li><li><p>Solution 2: Support this feature, use <code>message sending time + session ID</code> compound index</p><p>If your product needs this solution, you only need to configure <code>turms.service.message.use-conversation-id=true</code> when the turms-service server starts for the first time. Just pay special attention: if you have already created a table in the database and created a message record in the method of <code>Scheme 1</code>, the Turms server will not create a composite index of <code>message sending time + session ID</code> at present, nor will it The message data will be swiped and the session ID will be filled in the message.</p><p>Supplementary knowledge: <code>Private chat session ID</code> is a 16-byte long byte array, and its value is composed of message sender ID and message receiver. <code>Group chat session ID</code> is an 8-byte long byte array whose value consists of group IDs.</p></li><li><p>Solution 3: This feature is supported, but it is generally not recommended, and Turms does not provide support. The scheme is: under the composite index scheme of <code>message sending time + recipient ID</code>, enable optional index for <code>sender ID</code>.</p><p>The reason why this solution is not recommended is because it is a very common scenario for users to query messages in a session, and this solution needs to query twice when querying messages in a session: one is to query the messages sent by the other party, and the other is to query itself The messages sent, are so inefficient that Turms offers no support.</p></li></ul></li><li><p><code>Message deletion time</code> B-tree index. If your product needs to support logical deletion, turms-service will fill in the value of this field when &quot;deleting&quot; a message, otherwise this field will not be used.</p></li></ul><p>TODO</p>',46),a=[n];function r(d,l,c,u,h,m){return t(),o("div",null,a)}const g=e(i,[["render",r]]);export{f as __pageData,g as default};
