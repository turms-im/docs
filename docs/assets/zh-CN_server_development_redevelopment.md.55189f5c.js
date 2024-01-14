import{_ as e,o as s,c as a,Q as l}from"./chunks/framework.0882ee08.js";const b=JSON.parse('{"title":"关于二次开发","description":"","frontmatter":{},"headers":[],"relativePath":"zh-CN/server/development/redevelopment.md","filePath":"zh-CN/server/development/redevelopment.md"}'),t={name:"zh-CN/server/development/redevelopment.md"},o=l(`<h1 id="关于二次开发" tabindex="-1">关于二次开发 <a class="header-anchor" href="#关于二次开发" aria-label="Permalink to &quot;关于二次开发&quot;">​</a></h1><h2 id="基于turms做二次开发的原因" tabindex="-1">基于Turms做二次开发的原因 <a class="header-anchor" href="#基于turms做二次开发的原因" aria-label="Permalink to &quot;基于Turms做二次开发的原因&quot;">​</a></h2><h3 id="客观原因" tabindex="-1">客观原因 <a class="header-anchor" href="#客观原因" aria-label="Permalink to &quot;客观原因&quot;">​</a></h3><ul><li><p>唯一性。Turms解决方案是全球即时通讯开源领域内，唯一一个基于现代化架构与现代化工程技术，并且适合中大规模部署的解决方案。而其他数十款IM开源项目仍处于刀耕火种时代，多是强调企业通讯、或端到端安全的IM项目，通常只能获得企业用户的青睐。除Turms之外，全球开源界尚未有一款面向常规互联网应用设计的中大型IM开源项目。</p></li><li><p>规范性。由于Turms的架构设计是标准商用即时通讯架构的变种，因此如果您的专业团队是以常见的商用标准为要求，您的团队设计出来的架构也与Turms现在的架构相差不多的，没有必要另起炉灶从零自研。</p></li><li><p>简易性。Turms整个架构与各个模块的实现其实都比较简洁与轻量的，二次开发难度不高。</p></li><li><p>可控性。Turms基于Apache V2协议进行开发，100%开源，并对很多基础中间件进行了自研，保证了底层技术的可控，避免了项目后期发展动力不足。</p></li><li><p>文档齐全。其中包括了诸如消息感知、可观察性体系、敏感词过滤、防刷限流、全局黑名单等等模块的设计文档。我们在写Turms文档时，是秉着“就怕没写明白”的态度写的，Turms文档不仅会写“做了什么”、“怎么做”，还会写“为什么要这么做”，通过提供设计理念与思路与核心要点帮助开发者理解各种功能模块，这在开源圈其实都是比较少见的。而部分开源IM项目的人员为了赚取咨询费与担心被抄袭，秉着“就怕用户能明白”了的态度写着，因此不愿意写好文档。</p><p>提醒：设计文档对开发者与架构师的重要性不言而喻，读者在使用各种开源IM项目时，可以自行进行检验一个项目的文档是“就怕没写明白”，还是“就怕用户能明白”。</p></li><li><p>IM系统自身细节繁多，而开发人员水平又参差不齐，很难保证做出来的项目质量如何。实现用户A能给用户B/群B发消息最多也只是实现IM系统功能的1%功能，并且这些功能模块不像是一些通用的依赖库可以随意插拔而是要定制实现，如Turms基于双数组Trie AC自动机算法的敏感词过滤功能，且各实现环环相扣（其实就连Turms的文档都是互相引用、环环相扣的），因此各模块都要自研，要求设计人员与开发人员有很强的功底。</p><p>（若想了解一个完整的IM系统具体有多少细节功能，可以继续阅读Turms的文档。当然，IM系统的功能可以更加丰富，这些是我们上面说过的：IM不仅是复杂，而且是可以几乎无止尽的复杂。）</p><p>而Turms基本已经实现了一个完整的IM服务端系统，基本用户能想到的，与没想到的，我们都已经实现了，或者已经打好底子了，就算是不实现的功能我们一般也已经写明了为什么故意不实现，保证透明。</p><p>另外，Turms的一些实现方案可能看起来是“理所当然”的方案，但其实我们在设计与实现一个方案时，通常是已经推翻了其他众多方案了，其背后是大量的推导与实践，用户看到的只是一个最终方案，然后觉得“这是理所当然的方案”而已。关于这点，Turms各模块的设计文档都有做相关的说明。</p></li><li><p>代码质量高。Turms服务端在代码实现上能始终保持着高级工程师应有的水平，能在代码性能与可读性中取得平衡。具体请看Turms的服务端源码与各模块的设计文档。我们之所以敢说Turms服务端能达到Java生态的极限，除了Turms服务端自身实现本来就非常高效外，我们对很多低效但关键的依赖库（如<code>mongo-java-driver</code>与<code>lettuce</code>）进行了重构，甚至自研实现（如日志实现/集群实现），以保证极致的性能。</p><p>特别一提，部分开源项目自称性能很好，但其实一看代码就露馅了。这里给读者介绍三个判断开源作者编码水平的比较通用、快速且实用的方法，供读者参考：</p><ul><li>（初级）语法、数据结构与编程范式的合理使用。</li><li>（中级）通过类名、变量名、函数名等，观察作者的词汇量+用词准确度。词汇量与用词准确度是很难伪装的东西，通过这个方法一般很容易反推出项目作者的技术背景、技术水平与编码经验。如果作者词汇量丰富且用词都比较准确，那编码水平通常不会差。</li><li>（高级）反范式设计（如反设计模式设计、反常规算法设计与Unsafe操作等）。合理使用设计模式可以看出作者是否有设计思维，而敢于反范式设计通常是作者自己心中有明确的编码目标，且对相关的设计与底层代码非常熟悉，洞察到常规设计中的不足，并有勇气回答“为什么不按照标准套路做设计”的质问，才敢于反范式做设计。</li></ul><p>当然，上述方法仅供读者参考，实际的考察点可以更多。</p></li><li><p>技术方案具有前瞻性。作为软件工程师，我们深有体会的一点是：可能今天众星拱月的知名技术方案，明天就成了昨日黄花，成了“技术负债”。诸如服务端侧的Hadoop，Web侧的Bootstrap、Backbone.js与Ember.js。而Turms在做技术选型时，不仅会考虑当前的现状，如<a href="https://turms-im.github.io/docs/zh-CN/server/module/cluster#%E7%BA%AF%E8%87%AA%E7%A0%94%E7%9A%84%E5%8E%9F%E5%9B%A0" target="_blank" rel="noreferrer">集群的设计与实现</a>，还会考虑未来技术的发展进程，如<a href="https://turms-im.github.io/docs/zh-CN/server/module/system-resource-management#%E5%86%85%E5%AD%98%E7%AE%A1%E7%90%86" target="_blank" rel="noreferrer">系统资源管理</a>提到的Valhalla项目与Loom项目。</p></li><li><p>自研IM服务的市场需求大。即便现在到各招聘网站查询IM工程师相关岗位，也能发现国内外还有大量企业招聘IM相关人才，各公司投入上百或千万从零或基于古老的IM开源项目自研，重复造IM服务，社会资源利用率低。</p></li></ul><p>另外，如果您还在犹豫是否要采用其他开源IM项目，那我们非常推荐您将Turms与它们做对比，在您大概读过Turms与另外开源IM项目的文档与源码，相信您心中会有明确的答案。</p><h3 id="主观原因" tabindex="-1">主观原因 <a class="header-anchor" href="#主观原因" aria-label="Permalink to &quot;主观原因&quot;">​</a></h3><ul><li>您项目的核心业务与即时通讯相关，或者有深耕于即时通讯业务的计划。</li><li>您项目所需要的拓展功能Turms目前暂未提供，尤其是需要通过辅助索引表来实现的拓展功能（关于辅助索引表，可查看<a href="https://turms-im.github.io/docs/zh-CN/design/schema" target="_blank" rel="noreferrer">Turms集合设计</a>）。</li><li>您项目存在大量项目独有的IM实现细节。Turms虽然提供了上百个配置项，但这些也只是普适的配置。根据具体业务需求的不同，IM相关功能的具体实现极其丰富，但Turms不可能直接提供这些相对小众业务功能的实现，否则代码量将会指数级增加，因此需要您自行做二次开发。</li></ul><h2 id="项目引入" tabindex="-1">项目引入 <a class="header-anchor" href="#项目引入" aria-label="Permalink to &quot;项目引入&quot;">​</a></h2><ol><li><p>拉取Turms仓库：<code>git clone https://github.com/turms-im/turms.git</code></p></li><li><p>由于Turms各子项目的proto模型文件放在一个独立的仓库之中，因此您还需要在Turms项目的根目录下，通过以下命令来拉取submodule中的代码。</p></li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">git submodule update --init --recursive</span></span>
<span class="line"><span style="color:#e1e4e8;">git submodule foreach git pull origin master</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">git submodule update --init --recursive</span></span>
<span class="line"><span style="color:#24292e;">git submodule foreach git pull origin master</span></span></code></pre></div><ol start="3"><li>（可选）如果您使用的是IntelliJ IDEA，则可以通过<code>File</code> -&gt; <code>New</code> -&gt; <code>Project from Existing Source</code>引入整个Turms项目。IDEA将自动识别整个Turms项目的目录结构，并引入对应的Maven依赖库。</li></ol><h2 id="搭建开发环境" tabindex="-1">搭建开发环境 <a class="header-anchor" href="#搭建开发环境" aria-label="Permalink to &quot;搭建开发环境&quot;">​</a></h2><p>除了Turms服务端外，Turms其他子项目的搭建都非常常规与简单，故不赘述。</p><p>Turms服务端开发环境的搭建其实也非常简单，具体步骤包括：</p><ol><li><p>安装<a href="https://adoptium.net/" target="_blank" rel="noreferrer">JDK 21</a>以开发Turms服务端</p></li><li><p>下载、安装并启动Redis服务端。以RHEL/CentOS为例：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">yum</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">epel-release</span></span>
<span class="line"><span style="color:#B392F0;">yum</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">update</span></span>
<span class="line"><span style="color:#B392F0;">yum</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">redis</span></span>
<span class="line"><span style="color:#B392F0;">systemctl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">start</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">redis</span></span>
<span class="line"><span style="color:#B392F0;">systemctl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">enable</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">redis</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">yum</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">epel-release</span></span>
<span class="line"><span style="color:#6F42C1;">yum</span><span style="color:#24292E;"> </span><span style="color:#032F62;">update</span></span>
<span class="line"><span style="color:#6F42C1;">yum</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">redis</span></span>
<span class="line"><span style="color:#6F42C1;">systemctl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">start</span><span style="color:#24292E;"> </span><span style="color:#032F62;">redis</span></span>
<span class="line"><span style="color:#6F42C1;">systemctl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">enable</span><span style="color:#24292E;"> </span><span style="color:#032F62;">redis</span></span></code></pre></div><p>对于Windows平台，可在 <a href="https://github.com/tporadowski/redis/releases" target="_blank" rel="noreferrer">tporadowski/redis</a> 下载Windows版本供本地开发测试用。</p></li><li><p>下载、安装并启动MongoDB分片集群</p><ul><li>下载<a href="https://www.mongodb.com/try/download/community" target="_blank" rel="noreferrer">MongoDB 4.4</a></li><li>启动MongoDB分片集群：推荐安装<code>mtools</code>以全自动搭建MongoDB分片集群，其安装指令为：<code>pip3 install mtools[mlaunch]</code>。在安装完<code>mtools</code>后，只需运行<code>mlaunch init --replicaset --sharded 1 --nodes 1 --config 1 --hostname localhost --port 27017 --mongos 1</code>这一条指令，并等待数秒，即可完成MongoDB分片集群的搭建</li></ul></li><li><p>确认Redis服务端与MongoDB分片集群都正常运行后，即可启动Turms服务端</p></li></ol><p>补充：</p><ul><li>对于Redis、MongoDB的启动，可以设置成开机自启服务，这样就不用每次重启电脑后再手动搭建了。另外，就算是手动搭建，其实开发者多操作几次，基本也可以在10~30秒完成Redis与MongoDB分片集群的搭建，搭建与启动流程非常简单。</li><li>在进行服务端开发时，推荐将<code>turms-gateway</code>与<code>turms-service</code>两个项目下的<code>application.yaml</code>中的<code>spring.profiles.active=prod</code>改为<code>dev</code>。这是因为： <ul><li>在默认生产环境配置下，Turms服务端是不会在控制台打印日志的，因此不方便开发者进行调试</li><li><code>dev</code>环境下，turms-service会自动向MongoDB数据库生成Fake数据，并且turms-gateway也会自动创建基于TCP的Fake客户端，这些客户端会随机地（请求类型随机、请求参数随机）向turms-gateway发送真实客户端请求，以方便开发者测试。</li></ul></li><li>如果您想替换MongoDB服务端的端口，您只需在Turms项目下全局替换<code>27017</code>为您的目标端口即可。</li></ul><h2 id="关于任务难度" tabindex="-1">关于任务难度 <a class="header-anchor" href="#关于任务难度" aria-label="Permalink to &quot;关于任务难度&quot;">​</a></h2><p>对于准备基于Turms做二次开发（改Turms项目自身的源码）的团队，可以参考下述的任务难度表，给成员分配任务。</p><p>任务的难度值为0~10，其中：</p><ul><li>0表示极其简单</li><li>1~3表示简单</li><li>4~6表示中等</li><li>7~9表示难</li><li>10表示无法实现</li></ul><h3 id="服务端" tabindex="-1">服务端 <a class="header-anchor" href="#服务端" aria-label="Permalink to &quot;服务端&quot;">​</a></h3><p>“代码实现难度”主要从两个角度考虑，一个是逻辑复杂度，另一个则是工作量（繁琐程度，主要依靠“体力”实现）。比如等量自研一套<code>spring-webflux</code>的实现，其逻辑复杂度算1~3，但工作量算是5~6，二者综合下来就算5~6。而算法实现则一般是高逻辑复杂度、低工作量。</p><table><thead><tr><th></th><th>需求分析</th><th>相关流程设计</th><th>代码实现难度（前提：代码实现必须高效）</th></tr></thead><tbody><tr><td>IM基础业务功能</td><td>3~7。需要考虑所有IM业务特性是否逻辑一致、以及是否能够高效实现（由实现反推或限制IM业务需求）等</td><td>4~6：初期阶段。如消息用读扩散、写扩散、读写混合技术选型。各种通知推、拉、推拉混合技术选型<br>1~2：目前阶段</td><td>1~3。绝大部分就是常规的CRUD操作。个别为3的任务难在其要平衡代码优雅与高效实现之间的矛盾，偏代码设计问题。</td></tr><tr><td>拓展功能</td><td>2~5</td><td>3~4：初期阶段<br>1~2：目前阶段</td><td>2：限流防刷机制<br>4~5：全局黑名单<br>7~8：敏感词实现</td></tr><tr><td>中间件实现与基础库</td><td>1~3</td><td>1~3</td><td>1~4。<br>1：如度量、分布式雪花ID分发器<br>2~3：如日志、分布式配置中心<br>3~4：如插件机制、RPC、服务注册与发现<br></td></tr><tr><td>改BUG</td><td>0~3</td><td>0~3</td><td>1：绝大部分常规Bug<br>Turms很少孤立地改Bug，一般改Bug前要推演导致这Bug的业务流程设计合不合理，有没有优化空间，其次才是改这Bug。<br>并且难改的Bug一般跟代码实现没什么关系，一般难改的Bug是因为流程设计出了漏洞。<br>比如要是架构设计出了问题，本应该用读扩散的架构，但却用了写扩散。底层设计出错，上层再怎么改也只是隔靴搔痒。</td></tr><tr><td>定制算法与数据结构</td><td>1</td><td>1~2</td><td>1：常规定制数据结构。如<code>im.turms.server.common.infra.collection.FastEnumMap</code><br>2：无锁线程安全的定制数据结构，如：<code>im.turms.server.common.infra.collection.ConcurrentEnumMap</code>、<code>im.turms.server.common.infra.throttle.TokenBucket</code><br>4~5：无锁线程安全的定制Growable数据结构，如<code>im.turms.server.common.infra.collection.SpscGrowableLongRingBuffer</code><br>8：敏感词中的<code>im.turms.plugin.antispam.ac.AhoCorasickDoubleArrayTrie</code></td></tr></tbody></table><p>总评：</p><ul><li>IM功能的难点在于需求分析与概要设计，新加一个IM特性既要考虑它对其他IM业务特性是否逻辑一致，又要考虑当前架构是否能对其进行高效实现、需不需要分布式事务、是否需要增添数据库中的集合字段等等众多问题。而对于代码分包分层，其在早期阶段比较复杂，但这些问题目前都已经解决且比较稳定了，因此新的任务一般不会遇到代码流程设计上的难点。而具体的代码实现一般都很常规，个别实现可能相对繁琐。</li><li>定制中间件与基础库的实现基本没难点，相对要注意的主要也是需求分析（当然，中间件需求分析的难度跟IM业务功能的需求分析相比，简单非常多）。</li><li>大部分Bug本身没有什么难度，但需要有反推导致这Bug的Root Cause，并思考该业务流程有没有优化空间的能力（其实到底还是难在需求分析）</li><li>除基于双数组Trie的AC自动机算法比较难实现，其他大部分定制算法都比较容易实现。并且其实需要定制的算法与数据结构很少，因此二开团队应该不会遇到算法与数据结构相关的难题。</li></ul><p>特别一提：不做一个功能也是要需求分析的。比如Turms有一些功能的流程都设计完了，其代码实现也写完了。但最终考虑到该需求可能与其他的需求逻辑发生冲突，或者较大性能损耗而该需求又是可有可无的，因此这些功能会一直处于实现了但不发布的悬垂状态。</p><h3 id="turms-admin" tabindex="-1">turms-admin <a class="header-anchor" href="#turms-admin" aria-label="Permalink to &quot;turms-admin&quot;">​</a></h3><p>turms-admin本身没有技术难点，代码层次与实现都比较规范，不存在中大型前端项目中因为历史遗留原因而存在的大量异构子项目嵌套问题（比如根项目用Backbone，而嵌套在这个根项目的子项目混合使用Vue、Angular、React等，以及各种依赖版本冲突），因此初级前端工程师就应该有能力上手并做二开。</p><p>而做一个新UI特性的时间占比一般是：需求分析(40%) &gt; UI设计(30%) &gt;= 代码实现(30%)</p><h3 id="turms-client" tabindex="-1">turms-client <a class="header-anchor" href="#turms-client" aria-label="Permalink to &quot;turms-client&quot;">​</a></h3><p>turms-client本身没有技术难点，代码层次与实现都比较规范，初级工程师就应该有能力上手并做二开。</p><p>turms-client的难点相对来说，是API接口设计“尽量让接口顾名思义，同时又保证开发者有拓展底层的能力”。</p>`,33),r=[o];function n(p,i,c,d,u,m){return s(),a("div",null,r)}const g=e(t,[["render",n]]);export{b as __pageData,g as default};