"use strict";(self.webpackChunkturms_docs=self.webpackChunkturms_docs||[]).push([[574],{5276:(n,a,s)=>{s.r(a),s.d(a,{default:()=>e});const t=(0,s(6252).uE)('<h1 id="自定义插件" tabindex="-1"><a class="header-anchor" href="#自定义插件" aria-hidden="true">#</a> 自定义插件</h1><h2 id="目前支持的插件" tabindex="-1"><a class="header-anchor" href="#目前支持的插件" aria-hidden="true">#</a> 目前支持的插件</h2><ul><li><h3 id="用户类" tabindex="-1"><a class="header-anchor" href="#用户类" aria-hidden="true">#</a> 用户类</h3><ul><li>UserAuthenticator：用户登陆认证。当客户端向turms-gateway请求登录时，turms-gateway会调用该插件以实现自定义的登录认证逻辑。</li><li>UserOnlineStatusChangeHandler： 用户在线状态变更Handler。当任意一位用户进入上线或离线状态时，turms-gateway会调用该接口。</li></ul></li><li><h3 id="请求类" tabindex="-1"><a class="header-anchor" href="#请求类" aria-hidden="true">#</a> 请求类</h3><ul><li>ClientRequestHandler：客户端业务请求处理器。用于修改请求参数（甚至可以转变成其他业务请求）与自定义请求实现。当turms收到客户端业务请求时会调用该Handler。</li></ul></li><li><h3 id="通知与消息类" tabindex="-1"><a class="header-anchor" href="#通知与消息类" aria-hidden="true">#</a> 通知与消息类</h3><ul><li>NotificationHandler。通知Handler。当由于某行为的发生需要通知给相关用户时，turms-gateway会调用该Handler。常用于集成自定义的第三方推送服务。</li><li>ExpiredMessageAutoDeletionNotificationHandler： 过期消息自动删除通知处理器。当Turms自动定期删除过期消息时，Turms服务端会调用该接口，告知该插件实现方所有将要被删除的消息。常用于开发者备份消息。</li></ul></li><li><h3 id="服务实现类" tabindex="-1"><a class="header-anchor" href="#服务实现类" aria-hidden="true">#</a> 服务实现类</h3><ul><li>StorageServiceProvider：存储服务Provider。Turms项目本身没有存储服务的具体实现，仅对外暴露了存储服务相关的接口，供该插件实现。（可参考turms-plugin-minio）</li></ul></li><li><h3 id="业务模型生命周期类-todo" tabindex="-1"><a class="header-anchor" href="#业务模型生命周期类-todo" aria-hidden="true">#</a> 业务模型生命周期类（TODO）</h3></li></ul><h2 id="实现步骤" tabindex="-1"><a class="header-anchor" href="#实现步骤" aria-hidden="true">#</a> 实现步骤</h2><ol><li><p>搭建插件项目</p><ul><li><p>方案一（推荐）：克隆<code>turms-plugin-demo</code>项目到本地，基于该模板进行开发，以减少不必要的重复工作。</p></li><li><p>方案二：手动搭建。具体步骤如下：</p><ol><li><p>Clone Turms的仓库，并在Turms服务端项目的目录下，通过<code>mvn install</code>命令将其安装到本地的Maven仓库中</p></li><li><p>新建一个Maven项目，并在<code>pom.xml</code>中添加依赖（实现turms服务端的插件，则添加turms依赖。实现turms-gateway的插件，则添加turms-gateway的依赖）：</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>im.turms<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>turms<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>0.10.0-SNAPSHOT<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">&gt;</span></span>provided<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>im.turms<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>turms-gateway<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>0.10.0-SNAPSHOT<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">&gt;</span></span>provided<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div></li><li><p>新建一个extends自TurmsPlugin的类（例如：public class MyPlugin extends TurmsPlugin）</p></li><li><p>在resources目录下，新建一个名称为<code>plugin.properties</code>的文件，并添加以下插件描述信息（具体的参数值是您自定义插件的信息）</p><div class="language-properties ext-properties line-numbers-mode"><pre class="language-properties"><code><span class="token attr-name">plugin.class</span><span class="token punctuation">=</span><span class="token attr-value">com.mydomain.MyPlugin</span>\n<span class="token attr-name">plugin.dependencies</span><span class="token punctuation">=</span>\n<span class="token attr-name">plugin.id</span><span class="token punctuation">=</span><span class="token attr-value">com.mydomain.MyPlugin</span>\n<span class="token attr-name">plugin.provider</span><span class="token punctuation">=</span>\n<span class="token attr-name">plugin.version</span><span class="token punctuation">=</span><span class="token attr-value">0.0.1</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></li></ol></li></ul></li><li><p>在自定义的<code>TurmsPlugin</code>子类内部，定义您想要实现的接口插件静态子类（例如：<code>public static class MyTurmsRequestHandler extends ClientRequestHandler</code>），并在该静态类上添加<code>@Extension</code>注释，之后就可以编写您自定义的逻辑代码。</p></li><li><p>用Maven打包项目，并将打包好的jar包放入turms的<code>plugins</code>目录下</p></li><li><p>启动turms或turms-gateway服务端，它们会在服务端启动时自动加载plugins目录下的所有插件</p></li></ol>',5),e={render:function(n,a){return t}}},3230:(n,a,s)=>{s.r(a),s.d(a,{data:()=>t});const t={key:"v-20c4959a",path:"/for-developers/custom-plugin.html",title:"自定义插件",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"目前支持的插件",slug:"目前支持的插件",children:[{level:3,title:"用户类",slug:"用户类",children:[]},{level:3,title:"请求类",slug:"请求类",children:[]},{level:3,title:"通知与消息类",slug:"通知与消息类",children:[]},{level:3,title:"服务实现类",slug:"服务实现类",children:[]},{level:3,title:"业务模型生命周期类（TODO）",slug:"业务模型生命周期类-todo",children:[]}]},{level:2,title:"实现步骤",slug:"实现步骤",children:[]}],filePathRelative:"for-developers/custom-plugin.md",git:{updatedTime:1629210536e3}}}}]);