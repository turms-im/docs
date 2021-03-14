(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{459:function(r,t,s){"use strict";s.r(t);var e=s(24),v=Object(e.a)({},(function(){var r=this,t=r.$createElement,s=r._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[s("h1",{attrs:{id:"集合结构设计"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#集合结构设计"}},[r._v("#")]),r._v(" 集合结构设计")]),r._v(" "),s("h2",{attrs:{id:"需求分析与集合结构设计"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#需求分析与集合结构设计"}},[r._v("#")]),r._v(" 需求分析与集合结构设计")]),r._v(" "),s("p",[r._v("在做架构设计的时候常说“关键需求决定架构设计，次要需求验证架构”（这里指的“需求”包括功能需求、质量属性需求与约束性需求）。但由于Turms作为一款通用即时通讯项目，其需求并不像具体的即时通讯项目那样明确与清晰。因此，面对无穷无尽的业务需求与各种可能的约束性条件，Turms不可能也不应该针对每种场景都做设计。因此，在做Turms设计时，我们尽可能得**“以关键的普适即时通讯需求为主要需求”**为准则来设计Turms的功能。")]),r._v(" "),s("p",[r._v("而将各种纷繁复杂的需求抽象为实际的业务模型时，就需要搞清楚需求间的主次关系，并最终以集合结构的形式作为这些需求关系在技术架构落地时最为重要的体现。因此务必根据您产品自身需求对Turms默认提供的集合结构进行审阅与必要调整。")]),r._v(" "),s("h2",{attrs:{id:"默认的集合索引设计"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#默认的集合索引设计"}},[r._v("#")]),r._v(" 默认的集合索引设计")]),r._v(" "),s("p",[s("strong",[r._v("要点")]),r._v("（如果您的团队需要基于Turms做开发，请牢记以下三点）")]),r._v(" "),s("ul",[s("li",[s("strong",[r._v("集合索引主要是针对分布式数据分片的特点与约束条件，并根据多查少写、以关键的普适即时通讯需求为主要需求而设计的")])]),r._v(" "),s("li",[s("strong",[r._v("集合索引不针对数据分析做设计")]),r._v("（具体请查阅 "),s("a",{attrs:{href:"https://turms-im.github.io/docs/for-developers/data-analytics.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("Turms数据分析"),s("OutboundLink")],1),r._v("）")]),r._v(" "),s("li",[s("strong",[r._v("Turms不采用辅助索引集合来满足拓展的业务功能")]),r._v("（因此如果您的项目有拓展业务功能，您就需要基于Turms进行二次开发。当然，实现起来也很简单，合格的中高级工程师都应该有这样的能力）")])]),r._v(" "),s("p",[r._v("这里特别要强调的就是“"),s("strong",[r._v("以关键的普适即时通讯需求为主")]),r._v("”，因为它提醒了集合的设计不仅需要开发人员注意，甚至还需要产品经理与甲方的注意。对于涉及到分布式数据分片的场景，一些看似“实现简单”的功能在实际落地时会带来大量的资源消耗并提高开发与运维的难度，因此针对这样“吃力不讨好”的功能，请务必多方确认该需求是否合理，是否必要，是否能承担相应的风险与成本。在确认是否需要实现、能否经过多次迭代后再实现等现实因素后，再考虑是否需要对集合做弹性设计，以方便后期更新，降低推翻重构的风险。")]),r._v(" "),s("p",[r._v("这里以“查询某用户已加入的群组”功能为例（特别一提的，如今不少产品都没提供这样的功能，也是因为出于下述考虑）。Turms中的GroupMember集合用于管理群组与用户的关系，该集合在设计上默认是对群组ID进行数据分片，因此若需要在分布式数据库服务端中根据群组ID查找群组相关信息，这对数据库而言是很轻松的事（targeted queries）。但反过来，如果不在创建一个新的辅助集合的前提下，那对于根据某用户ID查找该用户已加入的群组就是非常吃力的事情（scatter queries）。因为数据库无法根据用户ID定位相关群组的数据，因此会将该查询请求发送给所有数据库服务端，造成大量无效且冗余的请求，有效请求仅占很小的比例，最终导致分布式数据库架构的有效吞吐量甚至不如单机。")]),r._v(" "),s("p",[r._v("并且随着用户规模的增加，最终要么因为错误判断主次需求而导致架构需要推翻重做，要么在现有基础上进行自定义拓展（如像ShardingSphere那样，自行实现一个辅助表来帮助做数据定位，但这样的实现很可能又会导致大量的冗余数据与事务操作）。因此务必深入理解Turms默认的集合索引设计，并牢记“默认索引设计主要是针对分布式数据分片的特点与约束条件，并根据多查少写、以关键的普适即时通讯需求为主要需求而设计的”。")]),r._v(" "),s("h2",{attrs:{id:"功能丰富的致命代价"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#功能丰富的致命代价"}},[r._v("#")]),r._v(" 功能丰富的致命代价")]),r._v(" "),s("p",[r._v("在您深刻理解了Turms默认的集合索引设计后，您会发现为什么那么多的大中型即时通讯应用不提供、也不应该提供一些看似“实现简单”的功能，也会更加理解即时通讯在实际落地时需要注意到的点。另一方面，您也应该警惕那些以提供“业务功能丰富”口号的即时通讯技术方案，因为它们很可能只是适用于上百人或上千人的用户规模。若后期您的产品需要扩容，您会发现一些已有的表设计与数据分片设计背道而驰，很可能需要从schema设计层面开始重构，进而导致整个技术实现上的重构，到头来只能另起炉灶踏上自研之路，悔不当初。")]),r._v(" "),s("p",[r._v("这里以“为了限制每位用户可创建的群组数量，需要服务端具有快速查找该用户所拥有的群组数量的能力”这个功能为例子进行讲解（再次强调，如今不少产品都没提供这样的功能，也是因为出于下述考虑）。这看似是一个很“简单”实现的功能。但由于上述所说的Turms默认索引设计原则，Turms默认只给Group群组的ID做数据分片，以实现群组成员快速查找群组信息。")]),r._v(" "),s("p",[r._v("因此我们无法根据群组拥有者ID通过targeted query来快速查询其所拥有的群组数量。要想实现相对可行的方案大致只有以下三种方案（"),s("strong",[r._v("特别注意，以下三种方案您可以通过举一反三运用到其他拓展功能设计上")]),r._v("）：")]),r._v(" "),s("ul",[s("li",[s("p",[r._v("为群组拥有者ID专门创建一个单列索引。虽然无法实现targeted query，但仍可在scatter query后通过索引相对快速查询。（注意：这类实现方案是Turms为拓展功能提供的默认实现，但这些实现在默认配置中均关闭）")])]),r._v(" "),s("li",[s("p",[r._v("维度建模，创建辅助索引集合（业界主流方案），用于专门记录群组拥有者ID与对应群组的ID。可以实现targeted query，但一些关键操作为保证数据的一致性需要使用分布式事务，并且仍有数据冗余。")])]),r._v(" "),s("li",[s("p",[r._v("使用静态统计表专门记录每位用户已拥有的群组数量。该方案效率最高、冗余最小。但仍需要分布式事务，并且可拓展性最差。")])])]),r._v(" "),s("p",[r._v("很明显，为了实现一个很“简单”的功能，我们的三个实现方案不仅对系统资源有着截然不同的要求，甚至连查询的时间复杂度也并非在一个级别上。")]),r._v(" "),s("p",[r._v("因此要时刻警惕打着“业务功能丰富”口号的即时通讯解决方案。")]),r._v(" "),s("h2",{attrs:{id:"索引详解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#索引详解"}},[r._v("#")]),r._v(" 索引详解")]),r._v(" "),s("p",[r._v("TODO")])])}),[],!1,null,null,null);t.default=v.exports}}]);