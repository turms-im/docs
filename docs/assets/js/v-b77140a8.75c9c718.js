"use strict";(self.webpackChunkturms_docs=self.webpackChunkturms_docs||[]).push([[769],{1745:(e,r,t)=>{t.r(r),t.d(r,{default:()=>a});const s=(0,t(6252).uE)('<h1 id="发布" tabindex="-1"><a class="header-anchor" href="#发布" aria-hidden="true">#</a> 发布</h1><h2 id="服务端发布目录结构" tabindex="-1"><a class="header-anchor" href="#服务端发布目录结构" aria-hidden="true">#</a> 服务端发布目录结构</h2><p>turms-gateway与turms-service服务端的发布目录结构如下：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>├─bin\n│  └─run.sh\n├─config\n│  ├─application.yaml\n│  └─jvm.options\n├─hprof\n├─jdk\n│─jfr\n│─lib\n│  ├─turms-gateway.jar (or turms-service.jar)\n│  └─....jar\n└─log\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><table><thead><tr><th>目录</th><th>必须存在</th><th>作用</th></tr></thead><tbody><tr><td>bin</td><td>否</td><td>存放可执行脚本。run.sh用于读取上下文配置，并启动Turms服务端</td></tr><tr><td>config</td><td>是</td><td>存放配置文件。<br>application.yaml用于覆盖与添加应用层配置（如Spring、Turms等配置）；<br>jvm.options用于设置JVM配置。通常情况下，您不需要直接修改该文件，而是通过环境变量<code>TURMS_GATEWAY_JVM_OPTS</code>（或<code>TURMS_SERVICE_JVM_OPTS</code>）来增添JVM配置</td></tr><tr><td>hprof</td><td>否</td><td>存放堆转储快照</td></tr><tr><td>jdk</td><td>否</td><td>存放JDK。bin脚本优先使用<code>JAVA_HOME</code>下的JDK，如果您未设置<code>JAVA_HOME</code>环境变量，则使用该目录下的JDK</td></tr><tr><td>jfr</td><td>否</td><td>存放JFR实时飞行记录信息</td></tr><tr><td>lib</td><td>是</td><td>存放运行时Jar包依赖，包括自定义的插件实现</td></tr><tr><td>log</td><td>否</td><td>存储日志（包括GC日志、API调用日志、应用日志等）</td></tr></tbody></table><p>注意：环境变量<code>TURMS_GATEWAY_HOME</code>（对应turms-gateway服务端）或<code>TURMS_SERVICE_HOME</code>（对应turms-service服务端）对于run.sh脚本与turms服务端的正确读取与存储数据都至关重要。如果您通过run.sh或Docker镜像运行Turms服务端，并且您没有设置上述的环境变量，则run.sh脚本会自动推导出HOME目录位置。如果您不通过上述方式运行（如通过IDE直接启动），则建议您手动配置<code>TURMS_GATEWAY_HOME</code>或<code>TURMS_SERVICE_HOME</code>环境变量，否则Turms服务端将以<code>.</code>（当前目录）作为HOME环境。</p><h2 id="docker镜像" tabindex="-1"><a class="header-anchor" href="#docker镜像" aria-hidden="true">#</a> Docker镜像</h2><p>强烈建议您使用Docker镜像部署Turms服务端。</p><p>目前Turms服务端Docker镜像版本号均为“latest”，即暂不提供带具体版本号的镜像。具体镜像拉取地址如下：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>docker pull ghcr.io/turms-im/turms-admin:latest\ndocker pull ghcr.io/turms-im/turms-gateway:latest\ndocker pull ghcr.io/turms-im/turms-service:latest\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>',10),n={},a=(0,t(3744).Z)(n,[["render",function(e,r){return s}]])},3744:(e,r)=>{r.Z=(e,r)=>{for(const[t,s]of r)e[t]=s;return e}},1875:(e,r,t)=>{t.r(r),t.d(r,{data:()=>s});const s={key:"v-b77140a8",path:"/for-developers/distribution.html",title:"发布",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"服务端发布目录结构",slug:"服务端发布目录结构",children:[]},{level:2,title:"Docker镜像",slug:"docker镜像",children:[]}],filePathRelative:"for-developers/distribution.md",git:{updatedTime:1640778396e3}}}}]);