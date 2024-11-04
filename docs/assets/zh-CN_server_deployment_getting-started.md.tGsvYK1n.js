import{_ as s,c as i,o as a,a3 as e}from"./chunks/framework.ViWktWD6.js";const g=JSON.parse('{"title":"搭建与启动","description":"","frontmatter":{},"headers":[],"relativePath":"zh-CN/server/deployment/getting-started.md","filePath":"zh-CN/server/deployment/getting-started.md"}'),t={name:"zh-CN/server/deployment/getting-started.md"},n=e(`<h1 id="搭建与启动" tabindex="-1">搭建与启动 <a class="header-anchor" href="#搭建与启动" aria-label="Permalink to &quot;搭建与启动&quot;">​</a></h1><h2 id="自动搭建与启动" tabindex="-1">自动搭建与启动 <a class="header-anchor" href="#自动搭建与启动" aria-label="Permalink to &quot;自动搭建与启动&quot;">​</a></h2><h3 id="单机环境" tabindex="-1">单机环境 <a class="header-anchor" href="#单机环境" aria-label="Permalink to &quot;单机环境&quot;">​</a></h3><p>适用场景：搭建流程方便快捷，但无法满足容灾、弹性扩展、零宕机升级与负载均衡等需求，主要用于搭建Demo用于展示，与服务对SLA无要求的用户。</p><h4 id="基于docker-compose" tabindex="-1">基于Docker Compose <a class="header-anchor" href="#基于docker-compose" aria-label="Permalink to &quot;基于Docker Compose&quot;">​</a></h4><p>通过以下命令，可以全自动地搭建一套完整的Turms最小集群（包含turms-gateway、turms-service与turms-admin）及其依赖服务端（MongoDB分片集群与Redis）</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --depth</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/turms-im/turms.git</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> turms</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> plugin</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> grafana/loki-docker-driver:latest</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --alias</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> loki</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --grant-all-permissions</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Or &quot;ENV=dev,demo docker compose -f docker-compose.standalone.yml --profile monitoring up --force-recreate -d&quot; to run with sidecar services in dev profile</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> compose</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docker-compose.standalone.yml</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> up</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --force-recreate</span></span></code></pre></div><p>等集群完成搭建后，可以通过<a href="http://localhost:6510" target="_blank" rel="noreferrer">http://localhost:6510</a>访问turms-admin后台管理系统，并输入账号密码（默认均为<code>turms</code>）。如果登录成功，则说明Turms集群搭建成功。</p><p>注意：AWS提供了高性价比的<code>t4g</code>系列EC2实例，但由于t4g系列实例使用了ARM处理器，因此很多应用都无法运行在该类EC2实例上，如<code>bitnami</code>所提供的镜像就均无法运行在该类实例上。<s>如果您想要在ARM处理器上运行<code>docker-compose.standalone.yml</code>，您需要先执行下方指令，在本地编译并安装Loki插件，然后才能运行<code>docker-compose.standalone.yml</code></s> 由于<code>Loki</code>自身有个Critical级别的Bug（<a href="https://github.com/grafana/loki/issues/2361%EF%BC%89%EF%BC%8C%E5%8D%B3%E5%BD%93%E6%97%A5%E5%BF%97%E6%97%A0%E6%B3%95%E9%80%81%E8%BE%BELoki%E6%9C%8D%E5%8A%A1%E7%AB%AF%E6%97%B6%EF%BC%8C%E7%9B%B4%E6%8E%A5Freeze%E6%88%91%E4%BB%AC%E7%9A%84%E6%9C%8D%E5%8A%A1%EF%BC%8C%E5%9B%A0%E6%AD%A4%E6%88%91%E4%BB%AC%E6%9A%82%E6%97%B6%E7%A7%BB%E9%99%A4%E4%BA%86Loki%E6%9C%8D%E5%8A%A1%EF%BC%8C%E6%82%A8%E7%9B%AE%E5%89%8D%E4%B8%8D%E9%9C%80%E8%A6%81%E6%89%A7%E8%A1%8C%E4%B8%8B%E8%BF%B0%E5%91%BD%E4%BB%A4%EF%BC%8C%E4%B9%9F%E5%8F%AF%E7%9B%B4%E6%8E%A5%E8%BF%90%E8%A1%8C%60docker-compose.standalone.yml%60%EF%BC%9A" target="_blank" rel="noreferrer">https://github.com/grafana/loki/issues/2361），即当日志无法送达Loki服务端时，直接Freeze我们的服务，因此我们暂时移除了Loki服务，您目前不需要执行下述命令，也可直接运行\`docker-compose.standalone.yml\`：</a></p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Install Go</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add-apt-repository</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ppa:longsleep/golang-backports</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> update</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> golang-go</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Install Loki</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> plugin</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> grafana/loki-docker-driver:latest</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --alias</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> loki</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --grant-all-permissions</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Build and Enable Loki</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/grafana/loki.git</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> loki</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> checkout</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;tags/v2.4.1&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -b</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> setup</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> GOOS=linux</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> GOARCH=arm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> GOARM=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">7</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> go</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./clients/cmd/docker-driver</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Replace &quot;&lt;ALPHA_NUMERIC_FOLDER&gt;&quot; with the real path on your machine</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mv</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docker-driver</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /var/lib/docker/plugins/</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ALPHA_NUMERIC_FOLDE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">R</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/rootfs/bin</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> plugin</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> enable</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> loki</span></span></code></pre></div><p>补充：</p><ul><li>配合<code>--profile monitoring</code>（<code>docker compose -f docker-compose.standalone.yml --profile monitoring up --force-recreate</code>），还可以额外自动搭建Prometheus与Grafana服务端。</li><li>Turms服务端默认使用生产环境配置，不会向控制台打印日志，只会打印日志文件，因此您通过<code>docker logs &lt;TURMS_CONTAINER_ID&gt;</code>是无法查看到Turms服务端的运行日志的。为了方便排查问题，您可以在本地开发测试时，把环境变量设置为<code>ENV=dev</code>，然后再次启动<code>docker-compose.standalone.yml</code>。在dev环境下，Turms会向控制台打印日志，并自动生成测试用的Fake数据，与模拟真实客户端TCP连接与请求</li><li>如果您通过上述指令，无法启动<code>docker-compose.standalone.yml</code>。则确保服务器的<code>Docker</code>版本为<code>20.x.x</code>与<code>Docker Compose</code>插件版本为<code>2.x.x</code>，</li><li>Turms的Playground环境与网站每次都是通过<code>ENV=dev,demo docker compose -f docker-compose.standalone.yml --profile monitoring up --force-recreate -d</code>这一条命令自动搭建的</li></ul><h4 id="基于terraform与docker-compose" tabindex="-1">基于Terraform与Docker Compose <a class="header-anchor" href="#基于terraform与docker-compose" aria-label="Permalink to &quot;基于Terraform与Docker Compose&quot;">​</a></h4><p>（由于Turms目前并没有提供封装好的镜像，因此仍需要使用Docker Compose进行环境搭建）</p><p>该方案是在上述Docker Compose方案的基础上，引入了Turms自定义的Terraform模块，以帮助用户自动开通并配置VPC、交换机、安全组与单机ECS抢占式实例。在这台ECS上，Terraform会通过user-data系统初始化脚本，来安装Docker、Docker Compose与Turms等服务，并最终启动Turms单机集群。</p><p>具体操作命令如下：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --depth</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/turms-im/turms.git</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> turms/terraform/alicloud/playground</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ALICLOUD_ACCESS_KEY</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">your_access_key</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ALICLOUD_SECRET_KEY</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">your_secret_key</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">terraform</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">terraform</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apply</span></span></code></pre></div><p>在<code>terraform apply</code>命令执行完毕后，等待约3~15分钟（阿里云ECS拉取ghcr镜像很慢），然后再访问<code>http://公网IP:6510</code>（公网IP可以通过查看控制台输出的<code>public_ip</code>或查看云服务的ECS控制台获得），如果可以成功访问turms-admin后台管理系统，则表明搭建成功。</p><p>注意：该方案需要购买与使用云服务，而其开销取决于ECS的运行时长。默认配置下，约一小时0.1元（抢占实例的价格随时有可能波动，因此具体价格请查阅云服务的价目表）</p><h3 id="基于云服务的集群环境" tabindex="-1">基于云服务的集群环境 <a class="header-anchor" href="#基于云服务的集群环境" aria-label="Permalink to &quot;基于云服务的集群环境&quot;">​</a></h3><p>适用场景：有容灾、弹性扩展、跨地域部署与负载均衡等需求。该方案提供的各种能力直接与搭建成本挂钩，因此您通常需要修改默认提供的Terraform module配置，以保证配置既能满足您的需求，同时搭建与运维成本最低。</p><p>具体操作命令如下：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --depth</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/turms-im/turms.git</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> turms/terraform/alicloud/cluster</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ALICLOUD_ACCESS_KEY</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">your_access_key</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ALICLOUD_SECRET_KEY</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">your_secret_key</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">terraform</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">terraform</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apply</span></span></code></pre></div><p>该Terraform模块会进行按照互联网应用的常规同城容灾级的部署方案，进行云服务的部署。具体而言包括：</p><ol><li>在一个地域内搭建一个<code>VPC</code>，该VPC下开通2台<code>交换机</code>，代表两个<code>可用区</code></li><li>在上述两个可用区内默认部署一套<code>MongoDB分片集群服务</code>，实现同城容灾</li><li>在一个可用区内默认部署一套<code>Redis服务</code></li><li>为接收发送给Turms ECS的外网流量，开通<code>SLB服务</code></li><li>为实现Turms ECS的外网访问，开通<code>NAT服务</code></li><li>为turms-gateway、turms-service与turms-admin服务端分别搭建各自的<code>安全组</code></li><li>为turms-gateway服务端，开通无公网带宽的<code>ECS实例</code>（默认数量为1）。通过user-data实现turms-gateway服务初始化与执行，并与上述SLB、NAT、安全组、MongoDB、Redis服务绑定</li><li>为turms-service服务端，开通无公网带宽的<code>ECS实例</code>（默认数量为1）。通过user-data实现turms-service服务初始化与执行，并与上述SLB、NAT、安全组、MongoDB、Redis服务绑定</li><li>为turms-admin服务端，开通无公网带宽的<code>ECS实例</code>（默认数量为1）。通过user-data实现turms-admin服务初始化与执行，并与上述安全组服务绑定</li></ol><p>自此整套Turms基础集群搭建完成（未来还会提供诸如日志分析服务等）。若希望了解更多实现细节，请查阅<code>turms/terraform/alicloud/cluster</code>目录下的具体Terraform模块配置</p><h2 id="手动搭建与启动" tabindex="-1">手动搭建与启动 <a class="header-anchor" href="#手动搭建与启动" aria-label="Permalink to &quot;手动搭建与启动&quot;">​</a></h2><p>适用场景：通用，无特别限制场景。但一般只适用于小规模手动部署。</p><p>若您网络畅通，第一次完成以下全部操作大概需要花费10~30分钟。当您熟练之后，可在1~3分钟完成一整套集群的部署工作。</p><ol><li><p>MongoDB集群搭建（用于业务数据存储、服务发现、配置管理）</p><ul><li><p>下载并安装<a href="https://www.mongodb.com/download-center/community" target="_blank" rel="noreferrer">MongoDB</a>（因为Turms服务端需要使用支持分布式事务的分片集群，所以要求MongoDB的最低版本为4.2。推荐用户使用最新稳定版）。以RHEL/CentOS为例（具体可参考：<a href="https://docs.mongodb.com/manual/tutorial/install-mongodb-on-red-hat%EF%BC%89%EF%BC%9A" target="_blank" rel="noreferrer">https://docs.mongodb.com/manual/tutorial/install-mongodb-on-red-hat）：</a></p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cat</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">EOF</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/yum.repos.d/mongodb-org-6.0.repo</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">[mongodb-org-6.0]</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">name=MongoDB Repository</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">baseurl=https://repo.mongodb.org/yum/redhat/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$releasever</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/mongodb-org/6.0/x86_64/</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">gpgcheck=1</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">enabled=1</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">gpgkey=https://www.mongodb.org/static/pgp/server-6.0.asc</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">EOF</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yum</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mongodb-org</span></span></code></pre></div></li><li><p>搭建MongoDB服务端分片集群。以基于工具<a href="https://github.com/rueckstiess/mtools" target="_blank" rel="noreferrer">mtools/mlaunch</a>搭建为例：</p><p>（关于mlaunch提供的更多指令，读者可查阅：<a href="https://rueckstiess.github.io/mtools/mlaunch" target="_blank" rel="noreferrer">mlaunch文档</a>)</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pip3</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mtools[mlaunch]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mlaunch</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --replicaset</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --sharded</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --nodes</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --config</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --hostname</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> localhost</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --port</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 27017</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --mongos</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span></code></pre></div><p>注意：</p><ul><li>如果在Windows环境执行<code>pip3 install mtools[mlaunch]</code>命令时，遇到类似<code>error: Microsoft Visual C++ 14.0 or greater is required. Get it with &quot;Microsoft C++ Build Tools&quot;</code>的错误，则您需要先在<a href="https://visualstudio.microsoft.com/downloads%E9%A1%B5%E9%9D%A2%E4%B8%8B%EF%BC%8C%E4%B8%8B%E8%BD%BD%60Visual" target="_blank" rel="noreferrer">https://visualstudio.microsoft.com/downloads页面下，下载\`Visual</a> Studio Installer<code>，并通过它安装</code>MSVC build tools<code>，然后再执行</code>pip3 install mtools[mlaunch]\`指令。</li><li>请确保MongoDB服务端运行正常，否则Turms服务端在启动时会抛出<code>MongoSocketOpenException</code>异常。</li></ul></li></ul></li><li><p>下载、安装并启动Redis服务端（用于实现用户状态管理以及“附近的用户”）。以RHEL/CentOS为例：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yum</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> epel-release</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yum</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> update</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yum</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> redis</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> redis</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> enable</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> redis</span></span></code></pre></div><p>对于Windows平台，可在 <a href="https://github.com/tporadowski/redis/releases" target="_blank" rel="noreferrer">tporadowski/redis</a> 下载Windows版本供本地开发测试用。</p></li><li><p>Turms集群搭建</p><p>方案一：拉取Turms服务端Docker镜像，并运行：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Pull and run images</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 6510:6510</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ghcr.io/turms-im/turms-admin</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 7510:7510</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 8510:8510</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ghcr.io/turms-im/turms-service</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --ulimit</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nofile=102400:102400</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 7510:7510</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 9510:9510</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 10510:10510</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 11510:11510</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 12510:12510</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ghcr.io/turms-im/turms-gateway</span></span></code></pre></div><p>另外，您可以通过volume挂载的方式来使用自定义的<code>application.yaml</code>与<code>jvm.options</code>。如配置<code>-v /your-custom-config-dir:/opt/turms/turms/config</code>。</p><p>方案二：<s>下载并解压<a href="https://github.com/turms-im/turms/releases" target="_blank" rel="noreferrer">Turms服务端</a>压缩包</s>（由于v.0.10.0尚未发布在release页面中，因此该方案暂不可用），根据下述步骤运行：</p><ul><li><p>（如果您将MongoDB与Redis都安装默认配置安装在本地，可跳过此步骤）根据您的需求配置config/jvm.options、config/application.yaml（您可以在此处配置Turms自定义的配置参数，并且您也可以在此处配置多个MongoDB或mongos的服务端地址。具体可参考：<a href="https://docs.mongodb.com/manual/reference/connection-string%EF%BC%89%E3%80%82" target="_blank" rel="noreferrer">https://docs.mongodb.com/manual/reference/connection-string）。</a></p></li><li><p>（推荐使用Ansible）在所有需要运行Turms服务端的系统上，运行bin/turms脚本（默认以Thin包形式执行，若需以Fat包形式执行，请在执行脚本时加上<code>-f</code>参数，如：<code>sh run.sh -f</code>。之后再运行turms-gateway服务端。turms-gateway与turms-service服务端会通过MongoDB（作为服务注册中心）来自动寻找其他服务端节点，由此Turms集群开始运作。</p></li></ul><p>方案三：克隆Turms仓库源码，直接通过IDE运行turms-gateway与turms-service服务端。（参考命令：<code>git clone --depth 1 https://github.com/turms-im/turms.git</code>）</p></li></ol><p><strong>提醒</strong></p><ul><li>turms-service服务端在启动时，会自动检测数据库中是否已存在一个角色为<code>ROOT</code>，且账号为<code>turms</code>的超级管理员账号。如果不存在，则turms-service服务端会自动创建一个角色为<code>ROOT</code>、名称为<code>turms</code>与密码为<code>turms.security.password.initial-root-password</code>（默认为：<code>turms</code>）的管理员账号。在生产环境中，请务必记得要修改默认密码。</li><li>上述操作主要用于您初次体验Turms集群使用，若您需将Turms部署在生产环境当中，请务必查阅Wiki手册，了解各种配置参数的意义，以最小的资源消耗，来定制属于您自己的业务需求与业务组合。</li></ul><h2 id="turms服务端启动与关闭的大致流程" tabindex="-1">Turms服务端启动与关闭的大致流程 <a class="header-anchor" href="#turms服务端启动与关闭的大致流程" aria-label="Permalink to &quot;Turms服务端启动与关闭的大致流程&quot;">​</a></h2><h3 id="启动流程" tabindex="-1">启动流程 <a class="header-anchor" href="#启动流程" aria-label="Permalink to &quot;启动流程&quot;">​</a></h3><ol><li>连接并校验mongos与Redis服务端。</li><li>检测MongoDB是否已建表，如果已经建好表了，则跳过这步。如果没有就进行：建表、添加索引、添加分片键、添加Zones用于冷热数据分离存储。如果开启了MongoDB的Fake数据，则turms-service会自动向MongoDB生成Fake数据，用于开发测试。</li><li>对于turms-service服务端，它会检测MongoDB中是否已存在一个角色为<code>ROOT</code>，且账号为<code>turms</code>的超级管理员账号。如果不存在，则会向MongoDB创建一个角色为<code>ROOT</code>、名称为<code>turms</code>与密码为<code>turms.security.password.initial-root-password</code>（默认为：<code>turms</code>）的管理员账号。</li><li>注册本地Node节点到服务注册中心，如果注册成功，则拉取并应用集群全局配置，并搭建RPC服务端，用于接收RPC客户端连接。如果失败，则抛异常并退出进程。</li><li>开启Admin HTTP服务端，用于接收管理员API请求。另外，对于turms-gateway，还要开启网关服务端（如TCP/WebSocket），用于接收客户端连接与请求。</li><li>对于turms-gateway，如果开启了Fake客户端，则生成真实的客户端连接并随机发送真实客户端请求（请求类型随机、请求参数随机），用于开发测试。</li></ol><p>至此，服务端启动完毕。</p><h3 id="关闭流程" tabindex="-1">关闭流程 <a class="header-anchor" href="#关闭流程" aria-label="Permalink to &quot;关闭流程&quot;">​</a></h3><p>（对于turms-gateway）</p><ol><li>拒绝新客户端网络连接与客户端请求。</li><li>关闭Fake客户端，关闭已建立的客户端会话连接。</li><li>关闭对接TCP/UDP/WebSocket客户端连接的服务端，与HTTP管理员API服务端。</li></ol><p>（对于turms-gateway与turms-service） 4. 关闭黑名单同步机制。 5. 关闭集群服务（如RPC节点间的连接、服务注册与发现服务）。 6. 关闭插件机制。 7. 发送完Redis/MongoDB客户端请求后，关闭Turms服务端连接到Redis和MongoDB的网络连接。 8. 打印完日志，关闭日志服务。</p><p>至此，服务端关闭完成。</p>`,41),l=[n];function h(p,r,k,o,d,F){return a(),i("div",null,l)}const C=s(t,[["render",h]]);export{g as __pageData,C as default};