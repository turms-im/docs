import{_ as e,c as o,o as a,a3 as r}from"./chunks/framework.ViWktWD6.js";const g=JSON.parse('{"title":"集合结构设计","description":"","frontmatter":{},"headers":[],"relativePath":"zh-CN/design/schema.md","filePath":"zh-CN/design/schema.md"}'),d={name:"zh-CN/design/schema.md"},s=r('<h1 id="集合结构设计" tabindex="-1">集合结构设计 <a class="header-anchor" href="#集合结构设计" aria-label="Permalink to &quot;集合结构设计&quot;">​</a></h1><h2 id="需求分析与集合结构设计" tabindex="-1">需求分析与集合结构设计 <a class="header-anchor" href="#需求分析与集合结构设计" aria-label="Permalink to &quot;需求分析与集合结构设计&quot;">​</a></h2><p>在做架构设计的时候常说“关键需求决定架构设计，次要需求验证架构”（这里指的“需求”包括功能需求、质量属性需求与约束性需求）。但由于Turms作为一款通用即时通讯项目，其需求并不像具体的即时通讯项目那样明确与清晰。因此，面对无穷无尽的业务需求与各种可能的约束性条件，Turms不可能也不应该针对每种场景都做设计。因此，在做Turms设计时，我们尽可能得“<strong>以关键的普适即时通讯需求为主要需求</strong>”为准则来设计Turms的功能。</p><p>而将各种纷繁复杂的需求抽象为实际的业务模型时，就需要搞清楚需求间的主次关系，并最终以集合结构的形式作为这些需求关系在技术架构落地时最为重要的体现。因此务必根据您产品自身需求对Turms默认提供的集合结构进行审阅与必要调整。</p><h2 id="默认的集合索引设计" tabindex="-1">默认的集合索引设计 <a class="header-anchor" href="#默认的集合索引设计" aria-label="Permalink to &quot;默认的集合索引设计&quot;">​</a></h2><p><strong>要点</strong>（如果您的团队需要基于Turms做开发，请牢记以下三点）</p><ul><li><strong>集合索引主要是针对分布式数据分片的特点与约束条件，并根据多查少写、以关键的普适即时通讯需求为主要需求而设计的</strong></li><li><strong>集合索引不针对数据分析做设计</strong>（具体请查阅 <a href="https://turms-im.github.io/docs/zh-CN/server/module/data-analytics" target="_blank" rel="noreferrer">Turms数据分析</a>）</li><li><strong>集合索引不针对管理员接口做设计</strong>（避免不必要的索引开销，代价就是管理员接口的灵活性相对差）</li><li><strong>Turms不采用辅助索引集合来满足拓展的业务功能</strong>（因此如果您的项目有拓展业务功能，您就需要基于Turms进行二次开发。当然，实现起来也很简单，合格的中高级工程师都应该有这样的能力）</li></ul><p>这里特别要强调的就是“<strong>以关键的普适即时通讯需求为主</strong>”，因为它提醒了集合的设计不仅需要开发人员注意，甚至还需要产品经理与甲方的注意。对于涉及到分布式数据分片的场景，一些看似“实现简单”的功能在实际落地时会带来大量的资源消耗并提高开发与运维的难度，因此针对这样“吃力不讨好”的功能，请务必多方确认该需求是否合理，是否必要，是否能承担相应的风险与成本。在确认是否需要实现、能否经过多次迭代后再实现等现实因素后，再考虑是否需要对集合做弹性设计，以方便后期更新，降低推翻重构的风险。</p><p>这里以“查询某用户已加入的群组”功能为例。Turms中的<code>GroupMember</code>集合用于管理群组与用户的关系，该集合在设计上默认是对群组ID进行数据分片，因此若需要在分布式数据库服务端中根据群组ID查找群组相关信息，这对数据库而言是很轻松的事（targeted queries）。但反过来，如果不在创建一个新的辅助集合的前提下，那对于根据某用户ID查找该用户已加入的群组就是非常吃力的事情（scatter gather queries）。因为数据库无法根据用户ID定位相关群组的数据，因此会将该查询请求发送给所有数据库服务端，造成大量无效且冗余的请求，有效请求仅占很小的比例，最终导致分布式数据库架构的有效吞吐量甚至不如单机。</p><p>并且随着用户规模的增加，最终要么因为错误判断主次需求而导致架构需要推翻重做，要么在现有基础上进行自定义拓展（如像ShardingSphere那样，自行实现一个辅助表来帮助做数据定位，但这样的实现很可能又会导致大量的冗余数据与事务操作）。因此务必深入理解Turms默认的集合索引设计，并牢记“默认索引设计主要是针对分布式数据分片的特点与约束条件，并根据多查少写、以关键的普适即时通讯需求为主要需求而设计的”。</p><h2 id="功能丰富的致命代价" tabindex="-1">功能丰富的致命代价 <a class="header-anchor" href="#功能丰富的致命代价" aria-label="Permalink to &quot;功能丰富的致命代价&quot;">​</a></h2><p>在您深刻理解了Turms默认的集合索引设计后，您会发现为什么那么多的大中型即时通讯应用不提供、也不应该提供一些看似“实现简单”的功能，也会更加理解即时通讯在实际落地时需要注意到的点。另一方面，您也应该警惕那些以提供“业务功能丰富”口号的即时通讯技术方案，因为它们很可能只是适用于上百人或上千人的用户规模。若后期您的产品需要扩容，您会发现一些已有的表设计与数据分片设计背道而驰，很可能需要从schema设计层面开始重构，进而导致整个技术实现上的重构，到头来只能另起炉灶踏上自研之路，悔不当初。</p><p>这里以“为了限制每位用户可创建的群组数量，需要服务端具有快速查找该用户所拥有的群组数量的能力”这个功能为例子进行讲解。这看似是一个很“简单”实现的功能。但由于上述所说的Turms默认索引设计原则，Turms默认只给Group群组的ID做数据分片，以实现群组成员快速查找群组信息。</p><p>因此我们无法根据群组拥有者ID通过targeted query来快速查询其所拥有的群组数量。要想实现相对可行的方案大致只有以下三种方案（<strong>特别注意，以下三种方案您可以通过举一反三运用到其他拓展功能设计上</strong>）：</p><ul><li><p>为群组拥有者ID专门创建一个单列索引。虽然无法实现targeted query，但仍可在scatter gather query后通过索引相对快速查询。（注意：这类实现方案是Turms为拓展功能提供的默认实现，但这些实现在默认配置中均关闭）</p></li><li><p>维度建模，创建辅助索引集合，用于专门记录群组拥有者ID与对应群组的ID。可以实现targeted query，但一些关键操作为保证数据的一致性需要使用分布式事务，并且仍有数据冗余。</p></li><li><p>使用静态统计表专门记录每位用户已拥有的群组数量。该方案效率最高、冗余最小。但仍需要分布式事务，并且可拓展性最差。</p></li></ul><p>很明显，为了实现一个很“简单”的功能，我们的三个实现方案不仅对系统资源有着截然不同的要求，甚至连查询的时间复杂度也并非在一个级别上。</p><p>因此要时刻警惕打着“业务功能丰富”口号的即时通讯解决方案。</p><h2 id="集合结构" tabindex="-1">集合结构 <a class="header-anchor" href="#集合结构" aria-label="Permalink to &quot;集合结构&quot;">​</a></h2><p><strong>Turms的集合结构中可能有您产品压根用不上的字段，但这些不被使用的字段并不会存储在数据库中，您无需担心它们会增加数据库开销。</strong></p><h3 id="turms的集合结构是如何设计出来的" tabindex="-1">Turms的集合结构是如何设计出来的 <a class="header-anchor" href="#turms的集合结构是如何设计出来的" aria-label="Permalink to &quot;Turms的集合结构是如何设计出来的&quot;">​</a></h3><p>Turms的集合结构并不是某一个commit或某几天就设计完成的，而是经过长时间的迭代分析与实践，最终整理出来的。步骤大体如下：</p><ol><li>分析业务需求，把握业务之间错综复杂的逻辑并分清需求的主次关系，并且要求不仅能把现有的所有需求，也要尽可能预测未来需要的业务需求与比较确认不需要的业务需求</li><li>分析业务实现的具体代码逻辑，确定需要的字段</li><li>确定字段ID。特别一提的是，复合ID内部又可以独立建立索引。如<code>GroupMember</code>集合的复合ID是<code>group ID + user ID</code>，这两个字段自己又有独立的索引用来实现其他业务功能</li><li>建立索引。首先分别考虑各个字段是否确实需要索引、是否可以做成可选索引，然后再考虑某几个字段可不可以合并成复合索引（包括分析：记录的基数、复合索引的使用频率、查询条件是否能够始终遵循最左匹配原则、是否能够顺便避免回表查询）</li><li>判断集合是否需要做分片设计（Sharding），包括分析集合是否需要做数据冷热分离。如果需要做分片设计，那是否能够基于上述的索引“顺便”对数据进行分片</li></ol><h3 id="集合详解" tabindex="-1">集合详解 <a class="header-anchor" href="#集合详解" aria-label="Permalink to &quot;集合详解&quot;">​</a></h3><h4 id="概要" tabindex="-1">概要 <a class="header-anchor" href="#概要" aria-label="Permalink to &quot;概要&quot;">​</a></h4><p>下述内容只是基本的理论，如同我们在<code>Turms的集合结构是如何设计出来的</code>提到的，实际业务更为复杂多变，因此面对具体的集合索引设计，还需要结合其实际应用场景做分析与设计。</p><h5 id="数据分片" tabindex="-1">数据分片 <a class="header-anchor" href="#数据分片" aria-label="Permalink to &quot;数据分片&quot;">​</a></h5><p>除了诸如<code>管理员</code>（Admin）、<code>群组类型</code>（GroupType）等小集合不需要做数据分片外，其他大部分集合都做了数据分片的支持，比如<code>用户</code>（User）、<code>群组</code>（Group）与<code>消息</code>（Message）等集合，以实现给mongos发送CRUD请求时，mongos能自行做负载均衡、平衡数据负载，同时也是为了支持冷热数据分离。</p><h5 id="记录创建时间索引" tabindex="-1"><code>记录创建时间</code>索引 <a class="header-anchor" href="#记录创建时间索引" aria-label="Permalink to &quot;`记录创建时间`索引&quot;">​</a></h5><p>不少集合的复合索引都带上了<code>记录创建时间</code>字段，这是为了配合Turms的<a href="https://turms-im.github.io/docs/zh-CN/design/status-aware#%E6%84%9F%E7%9F%A5%E6%96%B9%E5%BC%8F" target="_blank" rel="noreferrer">拉模式</a>，以支持快速查询某时间区间的记录，并避免客户端重复查询。这也是为什么Turms客户端大部分查询语句都可以带上一个查询时间区间的参数，而如果客户端请求没带上这参数，那么Turms服务端就会默认赋予一个查询时间区间，以保证查询性能。</p><h5 id="id只使用b-tree索引" tabindex="-1">ID只使用B-tree索引 <a class="header-anchor" href="#id只使用b-tree索引" aria-label="Permalink to &quot;ID只使用B-tree索引&quot;">​</a></h5><p>我们禁止给记录的ID用Hashed索引，这是因为MongoDB不支持通过Hashed索引保证<code>唯一性约束</code>，只能通过B-tree索引保证记录的唯一性，因此就算我们给记录的ID加上了一个Hashed索引，MongoDB也会自动再额外创建一个B-tree索引，得不偿失。</p><h5 id="可选字段与索引" tabindex="-1">可选字段与索引 <a class="header-anchor" href="#可选字段与索引" aria-label="Permalink to &quot;可选字段与索引&quot;">​</a></h5><p>Turms集合中有几十个可选但默认不开启的索引，这是因为：</p><ul><li>虽然很多IM业务需求都很典型，但却是彼此冲突的，比如需要支持<code>消息或请求发送人能查询他自己发送的消息或请求</code>与<code>消息或请求发送人不能查询他自己发送的消息或请求</code>（默认实现）。</li><li>又或者一些IM业务需求虽然典型，但并不是那么常见，比如<code>入群请求的处理者是否能查询他处理过的请求</code>。用于支持该类拓展IM功能的可选索引占大头。</li><li>如果默认开启这些可选索引，那就是往小型IM应用做设计了，对于大点的IM应用而言，那就是犯了我们上面说的“功能丰富的致命代价”的错误。</li></ul><p><strong>而我们选择默认实现方案的原则是：选择不需要额外加字段或索引、存储成本最低且能跟其他IM业务需求保持逻辑一致的方案。而如果您的应用确实需要支持另一个方案，我们一般也提供多套备选方案，需要用户自行配置以替换默认实现。</strong></p><p>您只要把握住这个基本原则，就能反推Turms集合各索引为什么那么设计了。另外，在代码中各模型、各字段其实也都有索引相关的注释，用来指导用户：什么字段，在什么场景下适合有索引，为什么一些字段不使用索引。用户可以参考该注释做设计。</p><p>注意：极个别可选索引是默认开启的，因为这些索引对应的场景非常通用，只有极少应用不需要使用这些场景。另外，Turms目前尚未对未开启这些可选索引的场景做优化，因此目前建议您不要手动关闭它们。</p><p>补充：</p><ul><li><p>这些可选索引可以通过配置<code>turms.service.mongo.[服务名].optional-index.[集合名].[字段名]=true</code>开启，如<code>turms.service.mongo.message.optional-index.message.sender-id=true</code>。</p><p>提醒：IntelliJ IDEA支持配置自动补全</p></li><li><p>用户也能自行直接向MongoDB服务建立自己想用的索引，并且MongoDB增删索引或字段非常简单，因此就算用户配漏了，或者前期需求不清晰，后期有新需求来了，也无需担心没法加新索引或字段。</p><p>额外补充：MongoDB每个版本都会发布一些非常实用的新特性，可能早期一些我们需要完全自研的复杂功能，但在MongoDB的新版本中只需要执行一条命令就能实现了，极大地降低开发与运维难度，并提升功能的可靠性，因此非常推荐您尽可能部署新版本MongoDB。</p></li></ul><h5 id="默认不给请求模型的请求发送者字段加索引" tabindex="-1">默认不给<code>请求</code>模型的<code>请求发送者</code>字段加索引 <a class="header-anchor" href="#默认不给请求模型的请求发送者字段加索引" aria-label="Permalink to &quot;默认不给`请求`模型的`请求发送者`字段加索引&quot;">​</a></h5><p>诸如<code>好友请求</code>、<code>入群请求</code>这两个集合默认是不给<code>请求发送者</code>加索引的。换言之，一旦用户发送完请求，他就无法再查询他已经发送过的请求了，需要客户端本地自行记录。如果您产品确实需要服务端记录并查询用户发送过的请求，则需要自行配置上述的可选索引，让turms-service在初次建表时，添加该索引，或者您也能自行直接在MongoDB服务端中向集合建立索引。</p><h4 id="消息-message" tabindex="-1">消息（Message） <a class="header-anchor" href="#消息-message" aria-label="Permalink to &quot;消息（Message）&quot;">​</a></h4><p><code>消息</code>是目前唯一支持冷热数据分离存储的模型。<strong>而冷热数据分离能极大地节省数据库服务器成本</strong>，比如将热数据放到<code>16核128G</code>服务器中，把冷数据放到<code>4核8G</code>服务器中。另外，其他模型目前均没有冷热数据分离存储的意义，因此其他模型不支持。</p><h5 id="索引" tabindex="-1">索引 <a class="header-anchor" href="#索引" aria-label="Permalink to &quot;索引&quot;">​</a></h5><ul><li><p>业务场景：是否需要支持消息发送人能够查询他自己发送的消息</p><ul><li><p>方案一（默认方案）：不支持该特性，使用<code>消息发送时间 + 收信人ID</code>复合索引</p><p>由于<code>消息</code>需要支持冷热数据分离，因此消息的复合索引是：<code>消息发送时间 + 收信人ID</code>，并且分片键是<code>消息发送时间</code>，以保证之后我们能把不同时间区间的Zones分配给不同的Shards，并实现消息的冷热分离存储。</p><p>（如果<code>消息</code>不需要支持冷热数据分离，那Turms的消息模型的复合索引应该是：<code>收信人ID + 消息发送时间</code>，并且分片键是<code>收信人ID</code>，以保证MongoDB既能对读写请求都做负载均衡，又能保证发给同一个收信人的消息都尽量分在相同的Chunks中，以提升查询速度）</p><p>补充：至于为什么没给<code>添加好友请求</code>与<code>群组邀请请求</code>等集合做冷热数据分离，这是因为虽然这些请求在业务表现上确实与创建时间紧密相关，比如<code>添加好友请求</code>过了一段时间后，在业务上看就是<code>请求已过期，不可处理</code>状态了。但是，对于请求的接收人而言，就算是过期的请求，用户也经常需要通过查询语句快速查询其接收过的所有请求，其访问次数并不会随着时间而递减。举例来说，比如一个用户今年接收到了20个好友请求，去年接收到20个好友请求，客户端每次查询至多50个请求，那数据库就更应该以收信人ID为维度，把相同请求接收者的数据都分在一个Chunk里。而不是根据请求创建时间，把相同请求接收者的数据分到不同的Chunks，并负载到不同的数据库中。因此，我们不对这些集合做冷热数据分离支持。而对于这类集合，我们一般采用<code>请求接收者ID + 请求创建时间</code>这样的复合索引，并以<code>请求接收者ID</code>为分片键，尽可能将一个请求接受者收到的所有请求都放在相同的Chunk中。</p></li><li><p>方案二：支持该特性，使用<code>消息发送时间 + 会话ID</code>复合索引</p><p>如果您的产品需要这套方案，那您只需在turms-service服务端初次启动时，配置<code>turms.service.message.use-conversation-id=true</code>。只是特别注意：如果您已经采用了<code>方案一</code>的方式在数据库中建好了表并创建了消息记录，则Turms服务端目前并不会创建<code>消息发送时间 + 会话ID</code>复合索引，也不会刷一遍消息数据，给消息填充会话ID。</p><p>补充知识：<code>私聊会话ID</code>是16字节长的字节数组，其值由消息发送者ID、消息接收者组成。<code>群聊会话ID</code>是一个8字节长的字节数组，其值由群ID组成。</p></li><li><p>方案三：支持该特性，但通常不推荐，Turms也不提供支持。该方案是：在<code>消息发送时间 + 收信者ID</code>复合索引的方案下，给<code>发送者ID</code>开启可选索引。</p><p>之所以不推荐这方案是因为：用户查询一个会话内的消息是极为常见的场景，而这个方案在查询一个会话的消息时，需要查询两次：一次是查询对方发送的消息，一次是查询自己发送的消息，如此低效，因此Turms不提供支持。</p></li></ul></li><li><p><code>消息删除时间</code>B-tree索引。如果您的产品需要支持逻辑删除，则在“删除”消息时，turms-service会填充该字段的值，否则该字段是不会被用到的。</p></li></ul><p>TODO</p>',46),t=[s];function c(i,l,n,u,h,p){return a(),o("div",null,t)}const D=e(d,[["render",c]]);export{g as __pageData,D as default};
