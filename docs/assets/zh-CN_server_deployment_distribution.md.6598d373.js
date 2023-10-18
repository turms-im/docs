import{_ as s,o as e,c as n,Q as a}from"./chunks/framework.0882ee08.js";const h=JSON.parse('{"title":"发布","description":"","frontmatter":{},"headers":[],"relativePath":"zh-CN/server/deployment/distribution.md","filePath":"zh-CN/server/deployment/distribution.md"}'),l={name:"zh-CN/server/deployment/distribution.md"},p=a(`<h1 id="发布" tabindex="-1">发布 <a class="header-anchor" href="#发布" aria-label="Permalink to &quot;发布&quot;">​</a></h1><h2 id="服务端发布包的目录结构" tabindex="-1">服务端发布包的目录结构 <a class="header-anchor" href="#服务端发布包的目录结构" aria-label="Permalink to &quot;服务端发布包的目录结构&quot;">​</a></h2><p>turms-gateway与turms-service服务端发布包的目录结构如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">├─bin</span></span>
<span class="line"><span style="color:#e1e4e8;">│  └─run.sh</span></span>
<span class="line"><span style="color:#e1e4e8;">├─config</span></span>
<span class="line"><span style="color:#e1e4e8;">│  ├─application.yaml</span></span>
<span class="line"><span style="color:#e1e4e8;">│  └─jvm.options</span></span>
<span class="line"><span style="color:#e1e4e8;">├─hprof</span></span>
<span class="line"><span style="color:#e1e4e8;">├─jdk</span></span>
<span class="line"><span style="color:#e1e4e8;">│─jfr</span></span>
<span class="line"><span style="color:#e1e4e8;">│─lib</span></span>
<span class="line"><span style="color:#e1e4e8;">│  ├─turms-gateway.jar (or turms-service.jar)</span></span>
<span class="line"><span style="color:#e1e4e8;">│  └─....jar</span></span>
<span class="line"><span style="color:#e1e4e8;">│─log</span></span>
<span class="line"><span style="color:#e1e4e8;">└─plugins</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">├─bin</span></span>
<span class="line"><span style="color:#24292e;">│  └─run.sh</span></span>
<span class="line"><span style="color:#24292e;">├─config</span></span>
<span class="line"><span style="color:#24292e;">│  ├─application.yaml</span></span>
<span class="line"><span style="color:#24292e;">│  └─jvm.options</span></span>
<span class="line"><span style="color:#24292e;">├─hprof</span></span>
<span class="line"><span style="color:#24292e;">├─jdk</span></span>
<span class="line"><span style="color:#24292e;">│─jfr</span></span>
<span class="line"><span style="color:#24292e;">│─lib</span></span>
<span class="line"><span style="color:#24292e;">│  ├─turms-gateway.jar (or turms-service.jar)</span></span>
<span class="line"><span style="color:#24292e;">│  └─....jar</span></span>
<span class="line"><span style="color:#24292e;">│─log</span></span>
<span class="line"><span style="color:#24292e;">└─plugins</span></span></code></pre></div><table><thead><tr><th>目录</th><th>必须存在</th><th>作用</th></tr></thead><tbody><tr><td>bin</td><td>否</td><td>存放可执行脚本。run.sh用于读取上下文配置，并启动Turms服务端</td></tr><tr><td>config</td><td>是</td><td>存放配置文件。<br>application.yaml用于覆盖与添加应用层配置（如Spring、Turms等配置）；<br>jvm.options用于设置JVM配置。通常情况下，您不需要直接修改该文件，而是通过环境变量<code>TURMS_GATEWAY_JVM_OPTS</code>（或<code>TURMS_SERVICE_JVM_OPTS</code>）来增添JVM配置</td></tr><tr><td>hprof</td><td>否</td><td>存放堆转储快照</td></tr><tr><td>jdk</td><td>否</td><td>存放JDK。bin脚本优先使用<code>JAVA_HOME</code>下的JDK，如果您未设置<code>JAVA_HOME</code>环境变量，则使用该目录下的JDK</td></tr><tr><td>jfr</td><td>否</td><td>存放JFR实时飞行记录信息</td></tr><tr><td>lib</td><td>是</td><td>存放运行时Jar包依赖，不包括自定义的插件实现</td></tr><tr><td>log</td><td>否</td><td>存储日志（包括GC日志、API调用日志、应用日志等）</td></tr><tr><td>plugins</td><td>否</td><td>存放插件的Jar包依赖。注意Turms服务端只会检测<code>plugins</code>目录下，以<code>jar</code>结尾的JAR包是否为插件实现，因此如果您将插件JAR包放到<code>lib</code>目录下，则这些插件将不会被识别与使用</td></tr></tbody></table><p>注意：环境变量<code>TURMS_GATEWAY_HOME</code>（对应turms-gateway服务端）或<code>TURMS_SERVICE_HOME</code>（对应turms-service服务端）对于run.sh脚本与turms服务端的正确读取与存储数据都至关重要。如果您通过run.sh或Docker镜像运行Turms服务端，并且您没有设置上述的环境变量，则run.sh脚本会自动推导出HOME目录位置。如果您不通过上述方式运行（如通过IDE直接启动），则建议您手动配置<code>TURMS_GATEWAY_HOME</code>或<code>TURMS_SERVICE_HOME</code>环境变量，否则Turms服务端将以<code>.</code>（当前目录）作为HOME环境。</p><h2 id="docker镜像" tabindex="-1">Docker镜像 <a class="header-anchor" href="#docker镜像" aria-label="Permalink to &quot;Docker镜像&quot;">​</a></h2><p>强烈建议您使用Docker镜像部署Turms服务端。</p><p>目前Turms服务端Docker镜像版本号均为<code>latest</code>，即暂不提供带具体版本号的镜像。具体拉取镜像的命令如下：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pull</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ghcr.io/turms-im/turms-admin:latest</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pull</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ghcr.io/turms-im/turms-gateway:latest</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pull</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ghcr.io/turms-im/turms-service:latest</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pull</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ghcr.io/turms-im/turms-admin:latest</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pull</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ghcr.io/turms-im/turms-gateway:latest</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pull</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ghcr.io/turms-im/turms-service:latest</span></span></code></pre></div><h2 id="自定义发布制品" tabindex="-1">自定义发布制品 <a class="header-anchor" href="#自定义发布制品" aria-label="Permalink to &quot;自定义发布制品&quot;">​</a></h2><p>用户如果不想使用Turms官方提供的制品（如Docker镜像），也可以自行根据Turms各项目的源码与脚本生成自己所需要的制品。尽管Turms各子项目的打包与发布流程都是开源的，但考虑到如果需要用户自己翻仓库研究的话，学习效率就相对比较低，因此本文总结了各制品的生成方法：</p><table><thead><tr><th>项目</th><th>制品</th><th>参考方法</th></tr></thead><tbody><tr><td>turms-gateway</td><td>Fat/Uber JAR包（包中包括依赖包）</td><td>1. 安装<a href="https://adoptium.net/temurin/releases" target="_blank" rel="noreferrer">Temurin JDK 21</a><br>2. 安装<a href="https://maven.apache.org/download.cgi" target="_blank" rel="noreferrer">Maven 3</a><br>3. 在Turms项目的根目录执行<code>mvn clean package -am -B -DskipUTs -DskipITs -P artifact-fat-jar -pl turms-gateway --no-transfer-progress</code></td></tr><tr><td></td><td>Thin JAR包（包中不包括依赖包）</td><td>1. 安装<a href="https://adoptium.net/temurin/releases" target="_blank" rel="noreferrer">Temurin JDK 21</a><br>2. 安装<a href="https://maven.apache.org/download.cgi" target="_blank" rel="noreferrer">Maven 3</a><br>3. 在Turms项目的根目录执行命令<code>mvn clean package -am -B -DskipUTs -DskipITs -P artifact-thin-jar -pl turms-gateway --no-transfer-progress</code></td></tr><tr><td></td><td>Docker镜像（linux/amd64）</td><td>1. 安装<a href="https://docs.docker.com/engine/install" target="_blank" rel="noreferrer">Docker</a><br>2. 在Turms项目的根目录执行命令<code>docker build --rm=false -t &quot;www.mydomain.com/turms-im/turms-gateway:latest&quot; -f turms-gateway/Dockerfile .</code></td></tr><tr><td></td><td>Docker镜像（linux/arm64）</td><td>（交叉编译）<br>如果用户使用GitHub Action，可以直接复用Turms项目下的<code>.github/workflows/publish-turms-gateway.yml</code>脚本进行镜像打包。<br>如果用户不使用GitHub Action，且系统也不是<code>linux/arm64</code>，则需要进行交叉编译。具体方法如下：<br>1. 安装<a href="https://docs.docker.com/engine/install" target="_blank" rel="noreferrer">Docker</a><br>2. 安装<a href="https://docs.docker.com/build/building/multi-platform" target="_blank" rel="noreferrer">buildx与QEMU</a><br>3. 在Turms项目的根目录执行命令<code>DOCKER_BUILDKIT=1 docker buildx build --platform linux/arm64 --rm=false -t &quot;www.mydomain.com/turms-im/turms-gateway:latest&quot; -f turms-gateway/Dockerfile .</code></td></tr><tr><td>turms-service</td><td>Fat/Uber JAR包（包中包括依赖包）</td><td>1. 安装<a href="https://adoptium.net/temurin/releases" target="_blank" rel="noreferrer">Temurin JDK 21</a><br>2. 安装<a href="https://maven.apache.org/download.cgi" target="_blank" rel="noreferrer">Maven 3</a><br>3. 在Turms项目的根目录执行<code>mvn clean package -am -B -DskipUTs -DskipITs -P artifact-fat-jar -pl turms-service --no-transfer-progress</code></td></tr><tr><td></td><td>Thin JAR包（包中不包括依赖包）</td><td>1. 安装<a href="https://adoptium.net/temurin/releases" target="_blank" rel="noreferrer">Temurin JDK 21</a><br>2. 安装<a href="https://maven.apache.org/download.cgi" target="_blank" rel="noreferrer">Maven 3</a><br>3. 在Turms项目的根目录执行命令<code>mvn clean package -am -B -DskipUTs -DskipITs -P artifact-thin-jar -pl turms-service --no-transfer-progress</code></td></tr><tr><td></td><td>Docker镜像（linux/amd64）</td><td>1. 安装<a href="https://docs.docker.com/engine/install" target="_blank" rel="noreferrer">Docker</a><br>2. 在Turms项目的根目录执行命令<code>docker build --rm=false -t &quot;www.mydomain.com/turms-im/turms-service:latest&quot; -f turms-service/Dockerfile .</code></td></tr><tr><td></td><td>Docker镜像（linux/arm64）</td><td>（交叉编译）<br>如果用户使用GitHub Action，可以直接复用Turms项目下的<code>.github/workflows/publish-turms-service.yml</code>脚本进行镜像打包。<br>如果用户不使用GitHub Action，且系统也不是<code>linux/arm64</code>，则需要进行交叉编译。具体方法如下：<br>1. 安装<a href="https://docs.docker.com/engine/install" target="_blank" rel="noreferrer">Docker</a><br>2. 安装<a href="https://docs.docker.com/build/building/multi-platform" target="_blank" rel="noreferrer">buildx与QEMU</a><br>3. 在Turms项目的根目录执行命令<code>DOCKER_BUILDKIT=1 docker buildx build --platform linux/arm64 --rm=false -t &quot;www.mydomain.com/turms-im/turms-service:latest&quot; -f turms-service/Dockerfile .</code></td></tr><tr><td>turms-admin</td><td>静态资源（如HTML、JavaScript、CSS等文件）</td><td>1. 安装<a href="https://nodejs.org/en/download" target="_blank" rel="noreferrer">Node.js 18</a><br>2. 在turms-admin项目下执行命令<code>npm i --no-optional &amp;&amp; npm run build</code></td></tr><tr><td></td><td>带Nginx服务的Docker镜像（linux/amd64）</td><td>1. 安装<a href="https://docs.docker.com/engine/install" target="_blank" rel="noreferrer">Docker</a><br>2. 在Turms项目的根目录执行命令<code>docker build --rm=false -t &quot;www.mydomain.com/turms-im/turms-admin:latest&quot; -f turms-admin/Dockerfile .</code></td></tr><tr><td></td><td>带Nginx服务的Docker镜像（linux/arm64）</td><td>（交叉编译）<br>如果用户使用GitHub Action，可以直接复用Turms项目下的<code>.github/workflows/publish-turms-admin.yml</code>脚本进行镜像打包。<br>如果用户不使用GitHub Action，且系统也不是<code>linux/arm64</code>，则需要进行交叉编译。具体方法如下：<br>1. 安装<a href="https://docs.docker.com/engine/install" target="_blank" rel="noreferrer">Docker</a><br>2. 安装<a href="https://docs.docker.com/build/building/multi-platform" target="_blank" rel="noreferrer">buildx与QEMU</a><br>3. 在Turms项目的根目录执行命令<code>DOCKER_BUILDKIT=1 docker buildx build --platform linux/arm64 --rm=false -t &quot;www.mydomain.com/turms-im/turms-admin:latest&quot; -f turms-admin/Dockerfile .</code></td></tr><tr><td>turms-client-dart</td><td>无需打包</td><td>无</td></tr><tr><td>turms-client-java</td><td>JAR包</td><td>1. 安装<a href="https://adoptium.net/temurin/releases" target="_blank" rel="noreferrer">Temurin JDK 21</a><br>2. 安装<a href="https://maven.apache.org/download.cgi" target="_blank" rel="noreferrer">Maven 3</a><br>3. 在turms-client-java项目的根目录执行命令<code>mvn clean install</code></td></tr><tr><td>turms-client-js</td><td>静态资源</td><td>1. 安装<a href="https://nodejs.org/en/download" target="_blank" rel="noreferrer">Node.js 18</a><br>2. 在turms-client-js项目下执行命令<code>npm i --no-optional &amp;&amp; npm run build</code></td></tr><tr><td>turms-client-swift</td><td>无需打包</td><td>无</td></tr></tbody></table><h2 id="linux系统的参考配置" tabindex="-1">Linux系统的参考配置 <a class="header-anchor" href="#linux系统的参考配置" aria-label="Permalink to &quot;Linux系统的参考配置&quot;">​</a></h2><h3 id="etc-security-limits-conf" tabindex="-1">/etc/security/limits.conf <a class="header-anchor" href="#etc-security-limits-conf" aria-label="Permalink to &quot;/etc/security/limits.conf&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">*        soft    nofile          1048576</span></span>
<span class="line"><span style="color:#e1e4e8;">*        hard    nofile          1048576</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">*        soft    nofile          1048576</span></span>
<span class="line"><span style="color:#24292e;">*        hard    nofile          1048576</span></span></code></pre></div><ul><li><p>nofile配置为默认最大值1048576（1024*1024），该值受限于<code>fs.nr_open</code>。</p><p>用户如果需要更大的值，可以通过<code>sudo sysctl -w fs.nr_open=2147483584</code>命令，来修改<code>fs.nr_open</code>的值，从而提高<code>nofile</code>的最大值上限。</p></li><li><p>Turms服务端只需要很少的线程就能正常运行，因此运维人员一般无需再专门为Turms服务端修改<code>noproc</code>配置。</p><p>关于为什么Turms服务端只需要很少的线程就能正常运行，读者可以阅读<a href="https://turms-im.github.io/docs/zh-CN/server/module/system-resource-management#%E7%BA%BF%E7%A8%8B%E6%A8%A1%E5%9E%8B" target="_blank" rel="noreferrer">Turms服务端线程模型</a></p></li></ul><p>参考文档：</p><ul><li><a href="https://www.kernel.org/doc/Documentation/sysctl/fs.txt" target="_blank" rel="noreferrer">https://www.kernel.org/doc/Documentation/sysctl/fs.txt</a></li></ul><h3 id="etc-sysctl-conf" tabindex="-1">/etc/sysctl.conf <a class="header-anchor" href="#etc-sysctl-conf" aria-label="Permalink to &quot;/etc/sysctl.conf&quot;">​</a></h3><p>下文配置中提到的默认值来自Ubuntu 20.04 LTS。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 默认值：1629424。系统所有进程一共可以打开的文件描述符数量。一个套接字需要占用一个文件描述符</span></span>
<span class="line"><span style="color:#e1e4e8;">fs.file-max = 1629424</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 默认值：60。当内存使用率不足10%时使用swap。尽量避免使用swap，以减少唤醒软中断进程</span></span>
<span class="line"><span style="color:#e1e4e8;">vm.swappiness = 10</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 默认值：1024。定义SYN半开连接队列的最大长度。此参数过大可能加剧SYN flood攻击效果</span></span>
<span class="line"><span style="color:#e1e4e8;">net.ipv4.tcp_max_syn_backlog = 65536</span></span>
<span class="line"><span style="color:#e1e4e8;"># 默认值：4096。调整accept队列的长度。可以通过命令：netstat -s | grep &quot;listen queue&quot;，来查看有多少个连接因为队列溢出而被丢弃。如果持续不断地有连接因为accept队列溢出被丢弃，就应该调大backlog以及somaxconn参数</span></span>
<span class="line"><span style="color:#e1e4e8;">net.core.somaxconn = 65536</span></span>
<span class="line"><span style="color:#e1e4e8;"># 默认值：1。仅当SYN半连接队列放不下半开连接时，启动SYN Cookie功能。syncookies可以让半开连接跳过SYN队列，并直接建立连接，同时也可以缓解SYN flood攻击</span></span>
<span class="line"><span style="color:#e1e4e8;">net.ipv4.tcp_syncookies = 1</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 默认值：0。不缓存已关闭的TCP连接的指标</span></span>
<span class="line"><span style="color:#e1e4e8;">net.ipv4.tcp_no_metrics_save = 1 </span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 默认值：15。控制TCP的超时重传次数，RFC1122建议对应的超时时间不低于100s，即至少为8</span></span>
<span class="line"><span style="color:#e1e4e8;">net.ipv4.tcp_retries2 = 10</span></span>
<span class="line"><span style="color:#e1e4e8;"># 默认值：6。作为TCP客户端时，重试发送SYN发起握手次数。每次重试前会等待1、2、4秒（共需等待7秒）。内网中通讯时，就可以适当调低重试次数，尽快把错误暴露给应用程序</span></span>
<span class="line"><span style="color:#e1e4e8;">net.ipv4.tcp_syn_retries = 3</span></span>
<span class="line"><span style="color:#e1e4e8;"># 默认值：5。作为TCP服务端时，SYN+ACK报文的重试次数。在每次重试前会等待1、2、4、8、16、32秒（共需等待63秒），如果最后一次重试仍然没有收到ACK，才会关闭连接</span></span>
<span class="line"><span style="color:#e1e4e8;">net.ipv4.tcp_synack_retries = 5</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 默认值：1。开启选择确认，让TCP只重新发送丢失的TCP报文段，不用发送所有未被确认的TCP报文段</span></span>
<span class="line"><span style="color:#e1e4e8;">net.ipv4.tcp_sack = 1</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 默认值：0。设为0在accept队列溢出时，丢弃连接。通过TCP客户端重传ACK，服务端再次尝试将连接放入accept队列。丢弃连接可以提高连接建立的成功率，只有非常肯定accept队列会长期溢出时，才能设置为1，通过向客户端发送RST复位报文，尽快通知客户端连接已经建立失败</span></span>
<span class="line"><span style="color:#e1e4e8;">net.ipv4.tcp_abort_on_overflow = 0</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 默认值：65536。系统中最多有多少个TCP连接不被关联到任何一个进程上（当进程调用close函数关闭连接后，无论该连接是在FIN_WAIT1状态，还是确实关闭了），如果孤儿连接数量大于它，新增的孤儿连接将不再走四次挥手，而是直接发送RST复位报文强制关闭</span></span>
<span class="line"><span style="color:#e1e4e8;">net.ipv4.tcp_max_orphans = 65536</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 默认值：2。启用TIME_WAIT复用，让新连接能够复用TIME_WAIT状态的端口</span></span>
<span class="line"><span style="color:#e1e4e8;">net.ipv4.tcp_tw_reuse = 1</span></span>
<span class="line"><span style="color:#e1e4e8;"># 默认值：1。为了使tcp_tw_reuse生效，需要把timestamps参数设置为1（对端也要打开tcp_timestamps）。该选项提供了较为准确的计算通信双方之间的回路时间（Round Trip Time）RTT的方法</span></span>
<span class="line"><span style="color:#e1e4e8;">net.ipv4.tcp_timestamps = 1</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 默认值：65536。系统同时保持TIME_WAIT套接字的最大数目。当TIME_WAIT的连接数量超过该参数时，新关闭的连接就不再经历TIME_WAIT而直接关闭</span></span>
<span class="line"><span style="color:#e1e4e8;">net.ipv4.tcp_max_tw_buckets = 65536</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 默认值：60。指定状态为FIN_WAIT_2的TCP连接保存多长时间</span></span>
<span class="line"><span style="color:#e1e4e8;">net.ipv4.tcp_fin_timeout = 30</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 保持TCP keepalive相关默认配置，因为Turms的应用层有自己的一套心跳机制</span></span>
<span class="line"><span style="color:#e1e4e8;"># net.ipv4.tcp_keepalive_probes = ...</span></span>
<span class="line"><span style="color:#e1e4e8;"># net.ipv4.tcp_keepalive_intvl = ...</span></span>
<span class="line"><span style="color:#e1e4e8;"># net.ipv4.tcp_keepalive_time = ...</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 默认值1。开启TCP Fast Open，客户端可以在首个SYN报文中就携带请求，以节省1个RTT的时间</span></span>
<span class="line"><span style="color:#e1e4e8;">net.ipv4.tcp_fastopen = 3</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 默认值：1000。当网卡接收数据包的速度大于内核处理的速度时，会有一个backlog缓存这些数据包。这个参数表示该队列的最大值。当backlog溢出时，内核会进行丢包</span></span>
<span class="line"><span style="color:#e1e4e8;">net.core.netdev_max_backlog = 65536</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 定义接收窗口可以使用的最大值，可以根据BDP值进行调节</span></span>
<span class="line"><span style="color:#e1e4e8;">net.core.rmem_max = 16777216</span></span>
<span class="line"><span style="color:#e1e4e8;">net.core.wmem_max = 16777216</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># [low, pressure, high]，单位是页（4096字节）</span></span>
<span class="line"><span style="color:#e1e4e8;"># low: 当所有TCP连接的总已用内存低于该值时，TCP内存不进行自动调节</span></span>
<span class="line"><span style="color:#e1e4e8;"># pressure: 当所有TCP连接的总已用大于pressure时，内核开始调节缓冲区大小</span></span>
<span class="line"><span style="color:#e1e4e8;"># high：当所有TCP连接的总已用内存大于该值时，内核不再为TCP分配新内存，并不再建立新连接。应当保证缓冲区的动态调整上限达到带宽时延积</span></span>
<span class="line"><span style="color:#e1e4e8;"># 不进行自定义配置，使用系统自动计算的默认值</span></span>
<span class="line"><span style="color:#e1e4e8;"># net.ipv4.tcp_mem = ...</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># [min, default, max]，单位是字节</span></span>
<span class="line"><span style="color:#e1e4e8;"># min：指定为每个TCP连接预留用于接收缓冲区的最小内存，即使在pressure模式下TCP连接都至少会预留这部分内存用于接收缓冲</span></span>
<span class="line"><span style="color:#e1e4e8;"># default：指定每个TCP连接用于接收缓冲的初始内存大小</span></span>
<span class="line"><span style="color:#e1e4e8;"># max：指定每个TCP连接用于接收缓冲的最大内存</span></span>
<span class="line"><span style="color:#e1e4e8;"># 缓冲区太小，会降低TCP吞吐量，无法高效利用网络带宽，导致通信延迟升高；缓冲区太大，会导致TCP连接内存占用高以及受限于带宽时延积的瓶颈，从而造成内存浪费</span></span>
<span class="line"><span style="color:#e1e4e8;">net.ipv4.tcp_rmem = 4096 87380 16777216</span></span>
<span class="line"><span style="color:#e1e4e8;">net.ipv4.tcp_wmem = 4096 87380 16777216</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 默认值：1。开启接收缓冲区的调节功能</span></span>
<span class="line"><span style="color:#e1e4e8;">net.ipv4.tcp_moderate_rcvbuf = 1</span></span>
<span class="line"><span style="color:#e1e4e8;"># 默认值：1。TCP使用16位来记录窗口大小，最大值可以是65535B。如果超过该值，就需要开启tcp_window_scaling机制</span></span>
<span class="line"><span style="color:#e1e4e8;">net.ipv4.tcp_window_scaling = 1</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 默认值：1629424。系统所有进程一共可以打开的文件描述符数量。一个套接字需要占用一个文件描述符</span></span>
<span class="line"><span style="color:#24292e;">fs.file-max = 1629424</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 默认值：60。当内存使用率不足10%时使用swap。尽量避免使用swap，以减少唤醒软中断进程</span></span>
<span class="line"><span style="color:#24292e;">vm.swappiness = 10</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 默认值：1024。定义SYN半开连接队列的最大长度。此参数过大可能加剧SYN flood攻击效果</span></span>
<span class="line"><span style="color:#24292e;">net.ipv4.tcp_max_syn_backlog = 65536</span></span>
<span class="line"><span style="color:#24292e;"># 默认值：4096。调整accept队列的长度。可以通过命令：netstat -s | grep &quot;listen queue&quot;，来查看有多少个连接因为队列溢出而被丢弃。如果持续不断地有连接因为accept队列溢出被丢弃，就应该调大backlog以及somaxconn参数</span></span>
<span class="line"><span style="color:#24292e;">net.core.somaxconn = 65536</span></span>
<span class="line"><span style="color:#24292e;"># 默认值：1。仅当SYN半连接队列放不下半开连接时，启动SYN Cookie功能。syncookies可以让半开连接跳过SYN队列，并直接建立连接，同时也可以缓解SYN flood攻击</span></span>
<span class="line"><span style="color:#24292e;">net.ipv4.tcp_syncookies = 1</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 默认值：0。不缓存已关闭的TCP连接的指标</span></span>
<span class="line"><span style="color:#24292e;">net.ipv4.tcp_no_metrics_save = 1 </span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 默认值：15。控制TCP的超时重传次数，RFC1122建议对应的超时时间不低于100s，即至少为8</span></span>
<span class="line"><span style="color:#24292e;">net.ipv4.tcp_retries2 = 10</span></span>
<span class="line"><span style="color:#24292e;"># 默认值：6。作为TCP客户端时，重试发送SYN发起握手次数。每次重试前会等待1、2、4秒（共需等待7秒）。内网中通讯时，就可以适当调低重试次数，尽快把错误暴露给应用程序</span></span>
<span class="line"><span style="color:#24292e;">net.ipv4.tcp_syn_retries = 3</span></span>
<span class="line"><span style="color:#24292e;"># 默认值：5。作为TCP服务端时，SYN+ACK报文的重试次数。在每次重试前会等待1、2、4、8、16、32秒（共需等待63秒），如果最后一次重试仍然没有收到ACK，才会关闭连接</span></span>
<span class="line"><span style="color:#24292e;">net.ipv4.tcp_synack_retries = 5</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 默认值：1。开启选择确认，让TCP只重新发送丢失的TCP报文段，不用发送所有未被确认的TCP报文段</span></span>
<span class="line"><span style="color:#24292e;">net.ipv4.tcp_sack = 1</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 默认值：0。设为0在accept队列溢出时，丢弃连接。通过TCP客户端重传ACK，服务端再次尝试将连接放入accept队列。丢弃连接可以提高连接建立的成功率，只有非常肯定accept队列会长期溢出时，才能设置为1，通过向客户端发送RST复位报文，尽快通知客户端连接已经建立失败</span></span>
<span class="line"><span style="color:#24292e;">net.ipv4.tcp_abort_on_overflow = 0</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 默认值：65536。系统中最多有多少个TCP连接不被关联到任何一个进程上（当进程调用close函数关闭连接后，无论该连接是在FIN_WAIT1状态，还是确实关闭了），如果孤儿连接数量大于它，新增的孤儿连接将不再走四次挥手，而是直接发送RST复位报文强制关闭</span></span>
<span class="line"><span style="color:#24292e;">net.ipv4.tcp_max_orphans = 65536</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 默认值：2。启用TIME_WAIT复用，让新连接能够复用TIME_WAIT状态的端口</span></span>
<span class="line"><span style="color:#24292e;">net.ipv4.tcp_tw_reuse = 1</span></span>
<span class="line"><span style="color:#24292e;"># 默认值：1。为了使tcp_tw_reuse生效，需要把timestamps参数设置为1（对端也要打开tcp_timestamps）。该选项提供了较为准确的计算通信双方之间的回路时间（Round Trip Time）RTT的方法</span></span>
<span class="line"><span style="color:#24292e;">net.ipv4.tcp_timestamps = 1</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 默认值：65536。系统同时保持TIME_WAIT套接字的最大数目。当TIME_WAIT的连接数量超过该参数时，新关闭的连接就不再经历TIME_WAIT而直接关闭</span></span>
<span class="line"><span style="color:#24292e;">net.ipv4.tcp_max_tw_buckets = 65536</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 默认值：60。指定状态为FIN_WAIT_2的TCP连接保存多长时间</span></span>
<span class="line"><span style="color:#24292e;">net.ipv4.tcp_fin_timeout = 30</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 保持TCP keepalive相关默认配置，因为Turms的应用层有自己的一套心跳机制</span></span>
<span class="line"><span style="color:#24292e;"># net.ipv4.tcp_keepalive_probes = ...</span></span>
<span class="line"><span style="color:#24292e;"># net.ipv4.tcp_keepalive_intvl = ...</span></span>
<span class="line"><span style="color:#24292e;"># net.ipv4.tcp_keepalive_time = ...</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 默认值1。开启TCP Fast Open，客户端可以在首个SYN报文中就携带请求，以节省1个RTT的时间</span></span>
<span class="line"><span style="color:#24292e;">net.ipv4.tcp_fastopen = 3</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 默认值：1000。当网卡接收数据包的速度大于内核处理的速度时，会有一个backlog缓存这些数据包。这个参数表示该队列的最大值。当backlog溢出时，内核会进行丢包</span></span>
<span class="line"><span style="color:#24292e;">net.core.netdev_max_backlog = 65536</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 定义接收窗口可以使用的最大值，可以根据BDP值进行调节</span></span>
<span class="line"><span style="color:#24292e;">net.core.rmem_max = 16777216</span></span>
<span class="line"><span style="color:#24292e;">net.core.wmem_max = 16777216</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># [low, pressure, high]，单位是页（4096字节）</span></span>
<span class="line"><span style="color:#24292e;"># low: 当所有TCP连接的总已用内存低于该值时，TCP内存不进行自动调节</span></span>
<span class="line"><span style="color:#24292e;"># pressure: 当所有TCP连接的总已用大于pressure时，内核开始调节缓冲区大小</span></span>
<span class="line"><span style="color:#24292e;"># high：当所有TCP连接的总已用内存大于该值时，内核不再为TCP分配新内存，并不再建立新连接。应当保证缓冲区的动态调整上限达到带宽时延积</span></span>
<span class="line"><span style="color:#24292e;"># 不进行自定义配置，使用系统自动计算的默认值</span></span>
<span class="line"><span style="color:#24292e;"># net.ipv4.tcp_mem = ...</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># [min, default, max]，单位是字节</span></span>
<span class="line"><span style="color:#24292e;"># min：指定为每个TCP连接预留用于接收缓冲区的最小内存，即使在pressure模式下TCP连接都至少会预留这部分内存用于接收缓冲</span></span>
<span class="line"><span style="color:#24292e;"># default：指定每个TCP连接用于接收缓冲的初始内存大小</span></span>
<span class="line"><span style="color:#24292e;"># max：指定每个TCP连接用于接收缓冲的最大内存</span></span>
<span class="line"><span style="color:#24292e;"># 缓冲区太小，会降低TCP吞吐量，无法高效利用网络带宽，导致通信延迟升高；缓冲区太大，会导致TCP连接内存占用高以及受限于带宽时延积的瓶颈，从而造成内存浪费</span></span>
<span class="line"><span style="color:#24292e;">net.ipv4.tcp_rmem = 4096 87380 16777216</span></span>
<span class="line"><span style="color:#24292e;">net.ipv4.tcp_wmem = 4096 87380 16777216</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 默认值：1。开启接收缓冲区的调节功能</span></span>
<span class="line"><span style="color:#24292e;">net.ipv4.tcp_moderate_rcvbuf = 1</span></span>
<span class="line"><span style="color:#24292e;"># 默认值：1。TCP使用16位来记录窗口大小，最大值可以是65535B。如果超过该值，就需要开启tcp_window_scaling机制</span></span>
<span class="line"><span style="color:#24292e;">net.ipv4.tcp_window_scaling = 1</span></span></code></pre></div><p>配置完后，执行<code>sudo sysctl -p</code>以加载sysctl的最新配置。</p><p>特别一提的是：我们在<a href="https://turms-im.github.io/docs/zh-CN/server/module/system-resource-management#%E5%8F%AF%E6%8E%A7%E5%86%85%E5%AD%98-managed-memory-%E7%9A%84%E4%BD%BF%E7%94%A8" target="_blank" rel="noreferrer">系统资源管理</a>提到了Turms服务端会预留部分内存给系统内核，该部分内存主要就是指上述的TCP连接的缓冲区。</p><h3 id="初始拥塞窗口-initcwnd-配置" tabindex="-1">初始拥塞窗口（initcwnd）配置 <a class="header-anchor" href="#初始拥塞窗口-initcwnd-配置" aria-label="Permalink to &quot;初始拥塞窗口（initcwnd）配置&quot;">​</a></h3><p>保持默认值：10MSS。</p><p>参考文档：</p><ul><li><a href="https://www.kernel.org/doc/Documentation/sysctl/net.txt" target="_blank" rel="noreferrer">https://www.kernel.org/doc/Documentation/sysctl/net.txt</a></li><li><a href="https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt" target="_blank" rel="noreferrer">https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt</a></li></ul>`,28),t=[p];function o(r,c,i,d,m,u){return e(),n("div",null,t)}const _=s(l,[["render",o]]);export{h as __pageData,_ as default};
