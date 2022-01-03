"use strict";(self.webpackChunkturms_docs=self.webpackChunkturms_docs||[]).push([[60],{6825:(e,r,a)=>{a.r(r),a.d(r,{default:()=>T});var n=a(6252);const d=(0,n.uE)('<h1 id="turms-admin" tabindex="-1"><a class="header-anchor" href="#turms-admin" aria-hidden="true">#</a> turms-admin</h1><p>turms-admin是一个为Turms项目定制的后台管理单页应用（SPA），具体包括：集群管理（集群监控、集群配置）、内容管理、客户端黑名单、权限控制、客户端终端，这五大版块。</p><p>注意：turms-admin的定位仅仅是Turms服务端Admin API的可视化Web应用，因此turms-admin自身不提供任何数据采集、数据分析与报警等功能。</p><h2 id="部署概要" tabindex="-1"><a class="header-anchor" href="#部署概要" aria-hidden="true">#</a> 部署概要</h2><p>Turms采用了前后端分离设计，对于Turms的服务端而言，它们甚至不“知道”有<code>turms-admin</code>这个前端项目的存在。turms-admin的前端项目只是提供诸如JavaScript、CSS与图像等静态资源文件，因此用户甚至可以通过本地的静态HTML文件，直接在浏览器中打开turms-admin，并与Turms服务端进行交互。但为了方便开发者进行运维与部署，turms-admin项目也提供了以下两个部署方案。</p><h3 id="docker镜像-推荐" tabindex="-1"><a class="header-anchor" href="#docker镜像-推荐" aria-hidden="true">#</a> Docker镜像（推荐）</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>docker run -d -p <span class="token number">6510</span>:6510 ghcr.io/turms-im/turms-admin\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>该镜像通过内置的Nginx服务端对外提供turms-admin的静态资源。您在运行完该指令后，就能访问<code>http://localhost:6510</code>页面了</p><h3 id="简易web服务端" tabindex="-1"><a class="header-anchor" href="#简易web服务端" aria-hidden="true">#</a> 简易Web服务端</h3><p>turms-admin项目自身也提供了基于<code>Node.js</code>的简易Web服务端，这个Web服务端会通过HTTP接口，对外提供turms-admin的静态资源，并默认搭载PM2进行turms-admin的进程管理。</p><h4 id="安装与执行步骤" tabindex="-1"><a class="header-anchor" href="#安装与执行步骤" aria-hidden="true">#</a> 安装与执行步骤</h4>',11),s=(0,n.Uk)("安装"),t={href:"https://nodejs.org/en",target:"_blank",rel:"noopener noreferrer"},l=(0,n.Uk)("Node.js"),i=(0,n._)("li",null,[(0,n.Uk)("在"),(0,n._)("code",null,"turms-admin"),(0,n.Uk)("目录下，执行"),(0,n._)("code",null,"npm run quickstart"),(0,n.Uk)("指令，该指令由"),(0,n._)("code",null,"npm install && npm run build && npm run start"),(0,n.Uk)("组成，包括了依赖包安装、前端构建与服务端执行。等待PM2提示turms-admin的status为"),(0,n._)("code",null,"online"),(0,n.Uk)("，表明turms-admin服务端进程已启动")],-1),u=(0,n._)("li",null,[(0,n.Uk)("打开浏览器，并访问"),(0,n._)("code",null,"http://localhost:6510"),(0,n.Uk)("页面")],-1),m=(0,n._)("h4",{id:"常用运维指令",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#常用运维指令","aria-hidden":"true"},"#"),(0,n.Uk)(" 常用运维指令")],-1),o=(0,n._)("p",null,"start：执行turms-admin服务端进程",-1),c=(0,n._)("p",null,"stop：终止turms-admin服务端进程",-1),h=(0,n._)("p",null,"delete：终止turms-admin服务端进程，并删除其在PM2的进程记录",-1),p=(0,n._)("p",null,"restart：重启turms-admin服务端",-1),b=(0,n._)("p",null,"reload：重新加载turms-admin服务端配置",-1),k=(0,n.Uk)("更多指令与服务端配置，可参考"),_={href:"https://pm2.keymetrics.io/docs/usage/pm2-doc-single-page",target:"_blank",rel:"noopener noreferrer"},f=(0,n.Uk)("PM2文档"),g=(0,n.uE)('<h2 id="版块介绍" tabindex="-1"><a class="header-anchor" href="#版块介绍" aria-hidden="true">#</a> 版块介绍</h2><p>集群管理：</p><ul><li>集群监控：查看集群的实时运行状态；（TODO）查看某一个服务端的具体信息与度量数据</li><li>集群配置：该部分对应着Turms服务端的全局配置功能，可以零停机实时地修改Turms服务端配置</li></ul><p>内容管理：增删改查各种业务数据</p><p>客户端黑名单：该部分对应着Turms服务端的全局黑名单机制，用于增删改查黑名单记录</p><p>权限控制：用于增删改管理员的信息与权限</p><p>客户端终端：搭载<code>turms-client-js</code>客户端实现，用于管理员快速测试真实客户端请求与服务端响应</p><p>TODO：贴GIF演示图</p>',8),v={},T=(0,a(3744).Z)(v,[["render",function(e,r){const a=(0,n.up)("OutboundLink");return(0,n.wg)(),(0,n.iD)(n.HY,null,[d,(0,n._)("ol",null,[(0,n._)("li",null,[s,(0,n._)("a",t,[l,(0,n.Wm)(a)])]),i,u]),m,o,c,h,p,b,(0,n._)("p",null,[k,(0,n._)("a",_,[f,(0,n.Wm)(a)])]),g],64)}]])},3744:(e,r)=>{r.Z=(e,r)=>{for(const[a,n]of r)e[a]=n;return e}},3338:(e,r,a)=>{a.r(r),a.d(r,{data:()=>n});const n={key:"v-1ac3bd6e",path:"/for-developers/turms-admin.html",title:"turms-admin",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"部署概要",slug:"部署概要",children:[{level:3,title:"Docker镜像（推荐）",slug:"docker镜像-推荐",children:[]},{level:3,title:"简易Web服务端",slug:"简易web服务端",children:[]}]},{level:2,title:"版块介绍",slug:"版块介绍",children:[]}],filePathRelative:"for-developers/turms-admin.md",git:{updatedTime:1641202602e3}}}}]);