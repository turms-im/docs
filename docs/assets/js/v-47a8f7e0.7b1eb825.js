(self.webpackChunkturms_docs=self.webpackChunkturms_docs||[]).push([[949],{3316:(s,n,a)=>{"use strict";a.r(n),a.d(n,{default:()=>O});var e=a(6252);const l=(0,e.uE)('<h1 id="quick-start" tabindex="-1"><a class="header-anchor" href="#quick-start" aria-hidden="true">#</a> Quick Start</h1><p>若您网络畅通，第一次完成以下全部操作大概需要花费10~30分钟。当您熟练之后，可在1~3分钟完成各种集群的部署工作。</p><h2 id="全自动搭建步骤" tabindex="-1"><a class="header-anchor" href="#全自动搭建步骤" aria-hidden="true">#</a> 全自动搭建步骤</h2><p>通过以下命令，可以全自动地搭建一套完整的Turms最小集群（包含turms、turms-gateway与turms-admin）及其依赖服务端（MongoDB分片集群与Redis）</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> clone --depth <span class="token number">1</span> https://github.com/turms-im/turms.git\n<span class="token builtin class-name">cd</span> turms\ndocker-compose -f docker-compose.standalone.yml up --force-recreate\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>等集群完成搭建后，可以通过“http://localhost:6510”访问turms-admin后台管理系统，并输入账号密码（默认均为“turms”）。如果登录成功，则说明turms服务端也已经成功启动。</p><h2 id="手动搭建步骤" tabindex="-1"><a class="header-anchor" href="#手动搭建步骤" aria-hidden="true">#</a> 手动搭建步骤</h2>',7),r=(0,e.Wm)("p",null,"MongoDB集群搭建（用于业务数据存储、服务发现、配置管理）",-1),t=(0,e.Uk)("下载并安装"),p={href:"https://www.mongodb.com/download-center/community",target:"_blank",rel:"noopener noreferrer"},o=(0,e.Uk)("MongoDB"),u=(0,e.Uk)("（要求最低版本号为：4.0。推荐版本为最新稳定版）。以RHEL/CentOS为例（具体可参考：https://docs.mongodb.com/manual/tutorial/install-mongodb-on-red-hat）："),m=(0,e.uE)('<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&lt;&lt;</span><span class="token string">EOF<span class="token bash punctuation"> <span class="token operator">&gt;</span> /etc/yum.repos.d/mongodb-org-4.4.repo</span>\n[mongodb-org-4.4]\nname=MongoDB Repository\nbaseurl=https://repo.mongodb.org/yum/redhat/<span class="token variable">$releasever</span>/mongodb-org/4.4/x86_64/\ngpgcheck=1\nenabled=1\ngpgkey=https://www.mongodb.org/static/pgp/server-4.4.asc\nEOF</span>\nyum <span class="token function">install</span> -y mongodb-org\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>',1),i=(0,e.uE)('<li><p>搭建MongoDB服务端集群（以mlaunch为例。关于mlaunch提供的更多指令，请查阅：http://blog.rueckstiess.com/mtools/mlaunch.html）。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pip3 <span class="token function">install</span> mtools<span class="token punctuation">[</span>mlaunch<span class="token punctuation">]</span>\nmlaunch init --replicaset --sharded <span class="token number">1</span> --nodes <span class="token number">1</span> --config <span class="token number">1</span> --hostname localhost --port <span class="token number">27017</span> --mongos <span class="token number">1</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>请确保运行正常，否则Turms会抛出MongoSocketOpenException异常。</p></li>',1),c=(0,e.uE)('<p>下载、安装并启动Redis服务端（用于实现用户状态管理、“附近的用户”，以及turms-client-js服务降级中登录失败与会话失联原因的查询）。以RHEL/CentOS为例：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum <span class="token function">install</span> epel-release\nyum update\nyum <span class="token function">install</span> redis\nsystemctl start redis\nsystemctl <span class="token builtin class-name">enable</span> redis\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>',2),b=(0,e.Uk)("对于Windows平台，可在 "),d={href:"https://github.com/tporadowski/redis/releases",target:"_blank",rel:"noopener noreferrer"},g=(0,e.Uk)("tporadowski/redis"),h=(0,e.Uk)(" 下载Windows版本供本地开发测试用。"),k=(0,e.uE)('<p>Turms集群搭建（以下为手动搭建方案，之后会提供turms-cli做自动化集群部署）</p><p>方案一：拉取Turms服务端Docker镜像，并运行：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Pull images</span>\ndocker pull ghcr.io/turms-im/turms-admin\ndocker pull ghcr.io/turms-im/turms\ndocker pull ghcr.io/turms-im/turms-gateway\n\n<span class="token comment"># Run images</span>\ndocker run -p <span class="token number">6510</span>:6510 ghcr.io/turms-im/turms-admin\ndocker run -p <span class="token number">7510</span>:7510 -p <span class="token number">8510</span>:8510 ghcr.io/turms-im/turms\ndocker run --ulimit <span class="token assign-left variable">nofile</span><span class="token operator">=</span><span class="token number">102400</span>:102400 -p <span class="token number">7510</span>:7510 -p <span class="token number">9510</span>:9510 -p <span class="token number">10510</span>:10510 -p <span class="token number">11510</span>:11510 -p <span class="token number">12510</span>:12510 ghcr.io/turms-im/turms-gateway\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>另外，您可以通过volume挂载的方式来使用自定义的application.yaml与jvm.options配置“-v /your-custom-config-dir:/opt/turms/turms/config”。</p>',4),f=(0,e.Uk)("方案二："),v=(0,e.Uk)("下载并解压"),W={href:"https://github.com/turms-im/turms/releases",target:"_blank",rel:"noopener noreferrer"},y=(0,e.Uk)("Turms服务端"),w=(0,e.Uk)("压缩包"),T=(0,e.Uk)("（由于v.0.10.0尚未发布在release页面中，因此该方案暂不可用），根据下述步骤运行："),U=(0,e.Wm)("ul",null,[(0,e.Wm)("li",null,[(0,e.Wm)("p",null,"（如果您将MongoDB与Redis都安装默认配置安装在本地，可跳过此步骤）根据您的需求配置config/jvm.options、config/application.yaml（您可以在此处配置Turms自定义的配置参数，并且您也可以在此处配置多个MongoDB或mongos的服务端地址。具体可参考：https://docs.mongodb.com/manual/reference/connection-string）。")]),(0,e.Wm)("li",null,[(0,e.Wm)("p",null,"（推荐使用Ansible）在所有需要运行Turms服务端的系统上，运行bin/turms脚本（默认以Thin包形式执行，若需以Fat包形式执行，请在执行脚本时加上“-f”参数，如：“sh turms.sh -f”。之后再运行turms-gateway服务端。turms与turms-gateway服务端会通过MongoDB（作为服务注册中心）来自动寻找其他服务端节点，由此Turms集群开始运作。")])],-1),x=(0,e.Wm)("p",null,"方案三：克隆Turms仓库源码，直接通过IDE运行turms与turms-gateway服务端。（参考命令：git clone --depth 1 https://github.com/turms-im/turms.git）",-1),E=(0,e.Wm)("p",null,[(0,e.Wm)("strong",null,"提醒")],-1),D=(0,e.Wm)("ul",null,[(0,e.Wm)("li",null,"turms服务端在启动时，会自动检测数据库中是否已存在一个角色为“ROOT”，且账号为“turms”的超级管理员账号。如果不存在，则turms服务端会自动创建一个角色为“ROOT”、名称与密码均为“turms”的管理员账号。在生产环境中，请务必记得要修改默认密码。"),(0,e.Wm)("li",null,"上述操作主要用于您初次体验Turms集群使用，若您需将Turms部署在生产环境当中，请务必查阅Wiki手册，了解各种配置参数的意义，以最小的资源消耗，来定制属于您自己的业务需求与业务组合。")],-1),O={render:function(s,n){const a=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.j4)(e.HY,null,[l,(0,e.Wm)("ol",null,[(0,e.Wm)("li",null,[r,(0,e.Wm)("ul",null,[(0,e.Wm)("li",null,[(0,e.Wm)("p",null,[t,(0,e.Wm)("a",p,[o,(0,e.Wm)(a)]),u]),m]),i])]),(0,e.Wm)("li",null,[c,(0,e.Wm)("p",null,[b,(0,e.Wm)("a",d,[g,(0,e.Wm)(a)]),h])]),(0,e.Wm)("li",null,[k,(0,e.Wm)("p",null,[f,(0,e.Wm)("s",null,[v,(0,e.Wm)("a",W,[y,(0,e.Wm)(a)]),w]),T]),U,x])]),E,D],64)}}},8512:(s,n,a)=>{"use strict";a.r(n),a.d(n,{data:()=>e});const e={key:"v-47a8f7e0",path:"/for-developers/quick-start.html",title:"Quick Start",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"全自动搭建步骤",slug:"全自动搭建步骤",children:[]},{level:2,title:"手动搭建步骤",slug:"手动搭建步骤",children:[]}],filePathRelative:"for-developers/quick-start.md",git:{updatedTime:1626134545e3}}}}]);