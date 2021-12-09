"use strict";(self.webpackChunkturms_docs=self.webpackChunkturms_docs||[]).push([[517],{2586:(s,n,e)=>{e.r(n),e.d(n,{default:()=>D});var a=e(6252);const r=(0,a.uE)('<h1 id="搭建与启动" tabindex="-1"><a class="header-anchor" href="#搭建与启动" aria-hidden="true">#</a> 搭建与启动</h1><h2 id="自动搭建与启动" tabindex="-1"><a class="header-anchor" href="#自动搭建与启动" aria-hidden="true">#</a> 自动搭建与启动</h2><h3 id="单机环境" tabindex="-1"><a class="header-anchor" href="#单机环境" aria-hidden="true">#</a> 单机环境</h3><p>适用场景：搭建流程方便快捷，但无法满足容灾、弹性扩展、零宕机升级与负载均衡等需求，主要用于搭建Demo用于展示，与服务对SLA无要求的用户。</p><h4 id="基于docker-compose" tabindex="-1"><a class="header-anchor" href="#基于docker-compose" aria-hidden="true">#</a> 基于docker-compose</h4><p>通过以下命令，可以全自动地搭建一套完整的Turms最小集群（包含turms-gateway、turms-service与turms-admin）及其依赖服务端（MongoDB分片集群与Redis）</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> clone --depth <span class="token number">1</span> https://github.com/turms-im/turms.git\n<span class="token builtin class-name">cd</span> turms\ndocker plugin <span class="token function">install</span> grafana/loki-docker-driver:latest --alias loki --grant-all-permissions\ndocker-compose -f docker-compose.standalone.yml up --force-recreate\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>等集群完成搭建后，可以通过 http://localhost:6510 访问turms-admin后台管理系统，并输入账号密码（默认均为<code>turms</code>）。如果登录成功，则说明Turms集群搭建成功。</p><p>补充：</p><ul><li>配合<code>--profile monitoring</code>（<code>docker-compose -f docker-compose.standalone.yml --profile monitoring up --force-recreate</code>），还可以额外自动搭建Prometheus与Grafana服务端。</li><li>Turms的Demo网站就是通过这几条命令自动搭建的</li></ul><h4 id="基于terraform与docker-compose" tabindex="-1"><a class="header-anchor" href="#基于terraform与docker-compose" aria-hidden="true">#</a> 基于Terraform与docker-compose</h4><p>（由于Turms目前并没有提供封装好的镜像，因此仍需要使用docker-compose进行环境搭建）</p><p>该方案是在上述docker-compose方案的基础上，引入了Turms自定义的Terraform模块，以帮助用户自动开通并配置VPC、交换机、安全组与单机ECS抢占式实例。在这台ECS上，Terraform会通过user-data系统初始化脚本，来安装docker-compose与Turms等服务，并最终启动Turms单机集群。</p><p>具体操作命令如下：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> clone --depth <span class="token number">1</span> https://github.com/turms-im/turms.git\n<span class="token builtin class-name">cd</span> turms/terraform/alicloud/playground\n<span class="token builtin class-name">export</span> <span class="token assign-left variable">ALICLOUD_ACCESS_KEY</span><span class="token operator">=</span><span class="token operator">&lt;</span>your_access_key<span class="token operator">&gt;</span>\n<span class="token builtin class-name">export</span> <span class="token assign-left variable">ALICLOUD_SECRET_KEY</span><span class="token operator">=</span><span class="token operator">&lt;</span>your_secret_key<span class="token operator">&gt;</span>\nterraform init\nterraform apply\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>在<code>terraform apply</code>命令执行完毕后，等待约3~15分钟（阿里云ECS拉取ghcr镜像很慢），然后再访问<code>http://公网IP:6510</code>（公网IP可以通过查看控制台输出的<code>public_ip</code>或查看云服务的ECS控制台获得），如果可以成功访问turms-admin后台管理系统，则表明搭建成功。</p><p>注意：该方案需要购买与使用云服务，而其开销取决于ECS的运行时长。默认配置下，约一小时0.1元（抢占实例的价格随时有可能波动，因此具体价格请查阅云服务的价目表）</p><h3 id="基于云服务的集群环境" tabindex="-1"><a class="header-anchor" href="#基于云服务的集群环境" aria-hidden="true">#</a> 基于云服务的集群环境</h3><p>适用场景：有容灾、弹性扩展、跨地域部署与负载均衡等需求。该方案提供的各种能力直接与搭建成本挂钩，因此您通常需要修改默认提供的Terraform module配置，以保证配置既能满足您的需求，同时搭建与运维成本最低。</p><p>具体操作命令如下：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> clone --depth <span class="token number">1</span> https://github.com/turms-im/turms.git\n<span class="token builtin class-name">cd</span> turms/terraform/alicloud/cluster\n<span class="token builtin class-name">export</span> <span class="token assign-left variable">ALICLOUD_ACCESS_KEY</span><span class="token operator">=</span><span class="token operator">&lt;</span>your_access_key<span class="token operator">&gt;</span>\n<span class="token builtin class-name">export</span> <span class="token assign-left variable">ALICLOUD_SECRET_KEY</span><span class="token operator">=</span><span class="token operator">&lt;</span>your_secret_key<span class="token operator">&gt;</span>\nterraform init\nterraform apply\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>该Terraform模块会进行按照互联网应用的常规同城容灾级的部署方案，进行云服务的部署。具体而言包括：</p><ol><li>在一个地域内搭建一个<code>VPC</code>，该VPC下开通2台<code>交换机</code>，代表两个<code>可用区</code></li><li>在上述两个可用区内默认部署一套<code>MongoDB分片集群服务</code>，实现同城容灾</li><li>在一个可用区内默认部署一套<code>Redis服务</code></li><li>为接收发送给Turms ECS的外网流量，开通<code>SLB服务</code></li><li>为实现Turms ECS的外网访问，开通<code>NAT服务</code></li><li>为turms-gateway、turms-service与turms-admin服务端分别搭建各自的<code>安全组</code></li><li>为turms-gateway服务端，开通无公网带宽的<code>ECS实例</code>（默认数量为1）。通过user-data实现turms-gateway服务初始化与执行，并与上述SLB、NAT、安全组、MongoDB、Redis服务绑定</li><li>为turms-service服务端，开通无公网带宽的<code>ECS实例</code>（默认数量为1）。通过user-data实现turms-service服务初始化与执行，并与上述SLB、NAT、安全组、MongoDB、Redis服务绑定</li><li>为turms-admin服务端，开通无公网带宽的<code>ECS实例</code>（默认数量为1）。通过user-data实现turms-admin服务初始化与执行，并与上述安全组服务绑定</li></ol><p>自此整套Turms基础集群搭建完成（未来还会提供诸如日志分析服务等）。若希望了解更多实现细节，请查阅<code>turms/terraform/alicloud/cluster</code>目录下的具体Terraform模块配置</p><h2 id="手动搭建与启动" tabindex="-1"><a class="header-anchor" href="#手动搭建与启动" aria-hidden="true">#</a> 手动搭建与启动</h2><p>适用场景：通用，无特别限制场景。但一般只适用于小规模手动部署。</p><p>若您网络畅通，第一次完成以下全部操作大概需要花费10~30分钟。当您熟练之后，可在1~3分钟完成一整套集群的部署工作。</p>',27),o=(0,a._)("p",null,"MongoDB集群搭建（用于业务数据存储、服务发现、配置管理）",-1),l=(0,a.Uk)("下载并安装"),t={href:"https://www.mongodb.com/download-center/community",target:"_blank",rel:"noopener noreferrer"},p=(0,a.Uk)("MongoDB"),c=(0,a.Uk)("（要求最低版本号为：4.0。推荐版本为最新稳定版）。以RHEL/CentOS为例（具体可参考：https://docs.mongodb.com/manual/tutorial/install-mongodb-on-red-hat）："),i=(0,a.uE)('<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&lt;&lt;</span><span class="token string">EOF<span class="token bash punctuation"> <span class="token operator">&gt;</span> /etc/yum.repos.d/mongodb-org-4.4.repo</span>\n[mongodb-org-4.4]\nname=MongoDB Repository\nbaseurl=https://repo.mongodb.org/yum/redhat/<span class="token variable">$releasever</span>/mongodb-org/4.4/x86_64/\ngpgcheck=1\nenabled=1\ngpgkey=https://www.mongodb.org/static/pgp/server-4.4.asc\nEOF</span>\nyum <span class="token function">install</span> -y mongodb-org\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>',1),u=(0,a.uE)('<li><p>搭建MongoDB服务端集群（以mlaunch为例。关于mlaunch提供的更多指令，请查阅：http://blog.rueckstiess.com/mtools/mlaunch.html）。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pip3 <span class="token function">install</span> mtools<span class="token punctuation">[</span>mlaunch<span class="token punctuation">]</span>\nmlaunch init --replicaset --sharded <span class="token number">1</span> --nodes <span class="token number">1</span> --config <span class="token number">1</span> --hostname localhost --port <span class="token number">27017</span> --mongos <span class="token number">1</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>注意：</p><ul><li>如果在Windows环境执行<code>pip3 install mtools[mlaunch]</code>命令时，遇到类似<code>error: Microsoft Visual C++ 14.0 or greater is required. Get it with &quot;Microsoft C++ Build Tools&quot;</code>的错误，则您需要先在https://visualstudio.microsoft.com/downloads页面下，下载<code>Visual Studio Installer</code>，并通过它安装<code>MSVC build tools</code>，然后再执行<code>pip3 install mtools[mlaunch]</code>指令。</li><li>请确保MongoDB服务端运行正常，否则Turms服务端启动时会抛出<code>MongoSocketOpenException</code>异常。</li></ul></li>',1),m=(0,a.uE)('<p>下载、安装并启动Redis服务端（用于实现用户状态管理以及“附近的用户”）。以RHEL/CentOS为例：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum <span class="token function">install</span> epel-release\nyum update\nyum <span class="token function">install</span> redis\nsystemctl start redis\nsystemctl <span class="token builtin class-name">enable</span> redis\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>',2),d=(0,a.Uk)("对于Windows平台，可在 "),b={href:"https://github.com/tporadowski/redis/releases",target:"_blank",rel:"noopener noreferrer"},g=(0,a.Uk)("tporadowski/redis"),h=(0,a.Uk)(" 下载Windows版本供本地开发测试用。"),k=(0,a.uE)('<p>Turms集群搭建</p><p>方案一：拉取Turms服务端Docker镜像，并运行：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Pull and run images</span>\ndocker run -p <span class="token number">6510</span>:6510 ghcr.io/turms-im/turms-admin\ndocker run -p <span class="token number">7510</span>:7510 -p <span class="token number">8510</span>:8510 ghcr.io/turms-im/turms-service\ndocker run --ulimit <span class="token assign-left variable">nofile</span><span class="token operator">=</span><span class="token number">102400</span>:102400 -p <span class="token number">7510</span>:7510 -p <span class="token number">9510</span>:9510 -p <span class="token number">10510</span>:10510 -p <span class="token number">11510</span>:11510 -p <span class="token number">12510</span>:12510 ghcr.io/turms-im/turms-gateway\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>另外，您可以通过volume挂载的方式来使用自定义的<code>application.yaml</code>与<code>jvm.options</code>。如配置<code>-v /your-custom-config-dir:/opt/turms/turms/config</code>。</p>',4),f=(0,a.Uk)("方案二："),v=(0,a.Uk)("下载并解压"),_={href:"https://github.com/turms-im/turms/releases",target:"_blank",rel:"noopener noreferrer"},y=(0,a.Uk)("Turms服务端"),T=(0,a.Uk)("压缩包"),E=(0,a.Uk)("（由于v.0.10.0尚未发布在release页面中，因此该方案暂不可用），根据下述步骤运行："),C=(0,a._)("ul",null,[(0,a._)("li",null,[(0,a._)("p",null,"（如果您将MongoDB与Redis都安装默认配置安装在本地，可跳过此步骤）根据您的需求配置config/jvm.options、config/application.yaml（您可以在此处配置Turms自定义的配置参数，并且您也可以在此处配置多个MongoDB或mongos的服务端地址。具体可参考：https://docs.mongodb.com/manual/reference/connection-string）。")]),(0,a._)("li",null,[(0,a._)("p",null,[(0,a.Uk)("（推荐使用Ansible）在所有需要运行Turms服务端的系统上，运行bin/turms脚本（默认以Thin包形式执行，若需以Fat包形式执行，请在执行脚本时加上"),(0,a._)("code",null,"-f"),(0,a.Uk)("参数，如："),(0,a._)("code",null,"sh run.sh -f"),(0,a.Uk)("。之后再运行turms-gateway服务端。turms-gateway与turms-service服务端会通过MongoDB（作为服务注册中心）来自动寻找其他服务端节点，由此Turms集群开始运作。")])])],-1),S=(0,a._)("p",null,[(0,a.Uk)("方案三：克隆Turms仓库源码，直接通过IDE运行turms-gateway与turms-service服务端。（参考命令："),(0,a._)("code",null,"git clone --depth 1 https://github.com/turms-im/turms.git"),(0,a.Uk)("）")],-1),w=(0,a.uE)("<p><strong>提醒</strong></p><ul><li>turms-service服务端在启动时，会自动检测数据库中是否已存在一个角色为<code>ROOT</code>，且账号为<code>turms</code>的超级管理员账号。如果不存在，则turms-service服务端会自动创建一个角色为<code>ROOT</code>、名称与密码均为<code>turms</code>的管理员账号。在生产环境中，请务必记得要修改默认密码。</li><li>上述操作主要用于您初次体验Turms集群使用，若您需将Turms部署在生产环境当中，请务必查阅Wiki手册，了解各种配置参数的意义，以最小的资源消耗，来定制属于您自己的业务需求与业务组合。</li></ul>",2),x={},D=(0,e(3744).Z)(x,[["render",function(s,n){const e=(0,a.up)("OutboundLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[r,(0,a._)("ol",null,[(0,a._)("li",null,[o,(0,a._)("ul",null,[(0,a._)("li",null,[(0,a._)("p",null,[l,(0,a._)("a",t,[p,(0,a.Wm)(e)]),c]),i]),u])]),(0,a._)("li",null,[m,(0,a._)("p",null,[d,(0,a._)("a",b,[g,(0,a.Wm)(e)]),h])]),(0,a._)("li",null,[k,(0,a._)("p",null,[f,(0,a._)("s",null,[v,(0,a._)("a",_,[y,(0,a.Wm)(e)]),T]),E]),C,S])]),w],64)}]])},3744:(s,n)=>{n.Z=(s,n)=>{for(const[e,a]of n)s[e]=a;return s}},2843:(s,n,e)=>{e.r(n),e.d(n,{data:()=>a});const a={key:"v-90dd12ac",path:"/for-developers/getting-started.html",title:"搭建与启动",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"自动搭建与启动",slug:"自动搭建与启动",children:[{level:3,title:"单机环境",slug:"单机环境",children:[]},{level:3,title:"基于云服务的集群环境",slug:"基于云服务的集群环境",children:[]}]},{level:2,title:"手动搭建与启动",slug:"手动搭建与启动",children:[]}],filePathRelative:"for-developers/getting-started.md",git:{updatedTime:1639091272e3}}}}]);