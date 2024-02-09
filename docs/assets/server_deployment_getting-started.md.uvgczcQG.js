import{_ as s,c as e,o as i,V as a}from"./chunks/framework.fogKwqBf.js";const g=JSON.parse('{"title":"Build and Start","description":"","frontmatter":{},"headers":[],"relativePath":"server/deployment/getting-started.md","filePath":"server/deployment/getting-started.md"}'),t={name:"server/deployment/getting-started.md"},n=a(`<h1 id="build-and-start" tabindex="-1">Build and Start <a class="header-anchor" href="#build-and-start" aria-label="Permalink to &quot;Build and Start&quot;">​</a></h1><h2 id="automatically-build-and-start" tabindex="-1">Automatically Build and Start <a class="header-anchor" href="#automatically-build-and-start" aria-label="Permalink to &quot;Automatically Build and Start&quot;">​</a></h2><h3 id="stand-alone-environment" tabindex="-1">Stand-alone Environment <a class="header-anchor" href="#stand-alone-environment" aria-label="Permalink to &quot;Stand-alone Environment&quot;">​</a></h3><p>Applicable scenarios: The construction process is convenient and fast, but it cannot meet the requirements of disaster recovery, elastic expansion, zero downtime upgrade, and load balancing. It is mainly used to build demos for display and serve users who do not require SLA.</p><h4 id="based-on-docker-compose" tabindex="-1">Based on Docker Compose <a class="header-anchor" href="#based-on-docker-compose" aria-label="Permalink to &quot;Based on Docker Compose&quot;">​</a></h4><p>Through the following commands, a complete set of Turms minimal cluster (including turms-gateway, turms-service and turms-admin) and its dependent servers (MongoDB shard cluster and Redis) can be built automatically</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone --depth </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/turms-im/turms.git</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> turms</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> plugin install grafana/loki-docker-driver:latest --alias loki --grant-all-permissions</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Or &quot;ENV=dev,demo docker compose -f docker-compose.standalone.yml --profile monitoring up --force-recreate -d&quot; to run with sidecar services in dev profile</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> compose -f docker-compose.standalone.yml up --force-recreate</span></span></code></pre></div><p>After the cluster is built, you can access the turms-admin background management system through <a href="http://localhost:6510" target="_blank" rel="noreferrer">http://localhost:6510</a>, and enter the account password (the default is <code>turms</code>). If the login is successful, it means that the Turms cluster is built successfully.</p><p>Note: AWS provides cost-effective <code>t4g</code> series EC2 instances, but because the t4g series instances use ARM processors, many applications cannot run on this type of EC2 instances, such as the images provided by <code>bitnami</code>. run on an instance of this class. ~~If you want to run <code>docker-compose.standalone.yml</code> on an ARM processor, you need to execute the following instructions first, compile and install the Loki plugin locally, and then run <code>docker-compose.standalone.yml</code>~ ~ Because <code>Loki</code> itself has a critical level bug (<a href="https://github.com/grafana/loki/issues/2361" target="_blank" rel="noreferrer">https://github.com/grafana/loki/issues/2361</a>), that is, when the log cannot be delivered to the Loki server, it directly freezes our service, so we temporarily The Loki service has been removed, you don&#39;t need to execute the following commands, you can also run <code>docker-compose.standalone.yml</code> directly:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Install Go</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add-apt-repository ppa:longsleep/golang-backports</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt update</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt install golang-go</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Install Loki</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docker plugin install grafana/loki-docker-driver:latest --alias loki --grant-all-permissions</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Build and Enable Loki</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone https://github.com/grafana/loki.git</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> loki</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> checkout &quot;tags/v2.4.1&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -b</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> setup</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> GOOS=linux GOARCH=arm GOARM=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">7</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> go build ./clients/cmd/docker-driver</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Replace &quot;&lt;ALPHA_NUMERIC_FOLDER&gt;&quot; with the real path on your machine</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mv docker-driver /var/lib/docker/plugins/</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ALPHA_NUMERIC_FOLDE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">R</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/rootfs/bin</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docker plugin enable loki</span></span></code></pre></div><p>Notes:</p><ul><li>With <code>--profile monitoring</code> (<code>docker compose -f docker-compose.standalone.yml --profile monitoring up --force-recreate</code>), you can also automatically build Prometheus and Grafana servers.</li><li>The Turms server uses the production environment configuration by default, and will not print logs to the console, only log files, so you cannot view the running logs of the Turms server through <code>docker logs &lt;TURMS_CONTAINER_ID&gt;</code>. To facilitate troubleshooting, you can set the environment variable to <code>ENV=dev</code> when developing and testing locally, and then start <code>docker-compose.standalone.yml</code> again. In the dev environment, Turms will print logs to the console, and automatically generate fake data for testing, and simulate real client TCP connections and requests</li><li>If you pass the above command, <code>docker-compose.standalone.yml</code> cannot be started. Then make sure that the <code>Docker</code> version of the server is <code>20.x.x</code> and the <code>Docker Compose</code> plug-in version is <code>2.x.x</code>,</li><li>The Playground environment and website of Turms are automatically built every time through the command <code>ENV=dev, demo docker compose -f docker-compose.standalone.yml --profile monitoring up --force-recreate -d</code></li></ul><h4 id="based-on-terraform-and-docker-compose" tabindex="-1">Based on Terraform and Docker Compose <a class="header-anchor" href="#based-on-terraform-and-docker-compose" aria-label="Permalink to &quot;Based on Terraform and Docker Compose&quot;">​</a></h4><p>(Because Turms does not currently provide packaged images, it is still necessary to use Docker Compose for environment construction)</p><p>This solution is based on the above-mentioned Docker Compose solution, and introduces the Terraform module customized by Turms to help users automatically open and configure VPC, switches, security groups, and stand-alone ECS preemptive instances. On this ECS, Terraform will install services such as Docker, Docker Compose, and Turms through the user-data system initialization script, and finally start the Turms stand-alone cluster.</p><p>The specific operation commands are as follows:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone --depth </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/turms-im/turms.git</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> turms/terraform/alicloud/playground</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ALICLOUD_ACCESS_KEY</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">your_access_ke</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">y</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ALICLOUD_SECRET_KEY</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">your_secret_ke</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">y</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">terraform</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">terraform</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apply</span></span></code></pre></div><p>After the <code>terraform apply</code> command is executed, wait for about 3 to 15 minutes (Aliyun ECS pulls the ghcr image very slowly), and then visit <code>http://public IP:6510</code> (the public IP can be controlled by viewing If you can access the turms-admin background management system successfully, it means the setup is successful.</p><p>Note: This solution requires the purchase and use of cloud services, and the cost depends on the running time of ECS. Under the default configuration, about 0.1 yuan per hour (the price of preempting instances may fluctuate at any time, so please refer to the price list of cloud services for specific prices)</p><h3 id="cloud-based-cluster-environment" tabindex="-1">Cloud-based Cluster Environment <a class="header-anchor" href="#cloud-based-cluster-environment" aria-label="Permalink to &quot;Cloud-based Cluster Environment&quot;">​</a></h3><p>Applicable scenarios: There are requirements for disaster recovery, elastic expansion, cross-regional deployment, and load balancing. The various capabilities provided by this solution are directly linked to the construction cost, so you usually need to modify the default Terraform module configuration to ensure that the configuration can meet your needs and the construction and operation and maintenance costs are the lowest.</p><p>The specific operation commands are as follows:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone --depth </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/turms-im/turms.git</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> turms/terraform/alicloud/cluster</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ALICLOUD_ACCESS_KEY</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">your_access_ke</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">y</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ALICLOUD_SECRET_KEY</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">your_secret_ke</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">y</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">terraform</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">terraform</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apply</span></span></code></pre></div><p>The Terraform module will deploy cloud services in accordance with the conventional intra-city disaster recovery deployment scheme for Internet applications. Specifically include:</p><ol><li>Set up a <code>VPC</code> in a region, and open 2 <code>switches</code> under the VPC, representing two <code>availability zones</code></li><li>A set of <code>MongoDB Fragmented Cluster Service</code> is deployed by default in the above two availability zones to achieve disaster recovery in the same city</li><li>A set of <code>Redis service</code> is deployed by default in an availability zone</li><li>In order to receive the external network traffic sent to Turms ECS, open <code>SLB service</code></li><li>In order to realize the external network access of Turms ECS, enable <code>NAT service</code></li><li>Build respective <code>security groups</code> for turms-gateway, turms-service and turms-admin servers</li><li>For the turms-gateway server, open an <code>ECS instance</code> without public network bandwidth (the default number is 1). Realize the initialization and execution of the turms-gateway service through user-data, and bind with the above-mentioned SLB, NAT, security group, MongoDB, and Redis services</li><li>For the turms-service server, open an <code>ECS instance</code> without public network bandwidth (the default number is 1). Realize turms-service service initialization and execution through user-data, and bind with the above SLB, NAT, security group, MongoDB, Redis services</li><li>For the turms-admin server, open an <code>ECS instance</code> without public network bandwidth (the default number is 1). Realize the initialization and execution of the turms-admin service through user-data, and bind it to the above-mentioned security group service</li></ol><p>Since then, the entire Turms basic cluster has been built (such as log analysis services will be provided in the future). For more implementation details, please refer to the specific Terraform module configuration in the <code>turms/terraform/alicloud/cluster</code> directory</p><h2 id="manually-build-and-start" tabindex="-1">Manually Build and Start <a class="header-anchor" href="#manually-build-and-start" aria-label="Permalink to &quot;Manually Build and Start&quot;">​</a></h2><p>Applicable scenarios: general purpose, no special restrictions. But generally only suitable for small-scale manual deployment.</p><p>If your network is smooth, it will take about 10-30 minutes to complete all the following operations for the first time. When you are proficient, you can complete the deployment of a whole set of clusters in 1 to 3 minutes.</p><ol><li><p>MongoDB cluster construction (for business data storage, service discovery, configuration management)</p><ul><li><p>Download and install <a href="https://www.mongodb.com/download-center/community" target="_blank" rel="noreferrer">MongoDB</a> (because the Turms server needs to use a fragmented cluster that supports distributed transactions, the minimum version of MongoDB is required to be 4.2. Recommended Users use the latest stable version). Take RHEL/CentOS as an example (for details, please refer to: <a href="https://docs.mongodb.com/manual/tutorial/install-mongodb-on-red-hat" target="_blank" rel="noreferrer">https://docs.mongodb.com/manual/tutorial/install-mongodb-on-red-hat</a>):</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &lt;&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">EO</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">F</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/yum.repos.d/mongodb-org-6.0.repo</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[mongodb-org-6.0]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">MongoDB Repository</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">baseurl</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">https://repo.mongodb.org/yum/redhat/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$releasever</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/mongodb-org/6.0/x86_64/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">gpgcheck</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">enabled</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">gpgkey</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">https://www.mongodb.org/static/pgp/server-6.0.asc</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">EOF</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yum</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install -y mongodb-org</span></span></code></pre></div></li><li><p>Build a MongoDB server shard cluster. Take the tool <a href="https://github.com/rueckstiess/mtools" target="_blank" rel="noreferrer">mtools/mlaunch</a> as an example:</p><p>(For more instructions provided by mlaunch, readers can refer to: <a href="https://rueckstiess.github.io/mtools/mlaunch" target="_blank" rel="noreferrer">mlaunch document</a>)</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pip3</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install mtools [mlaunch]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mlaunch</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init --replicaset --sharded </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> --nodes </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> --config </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> --hostname localhost --port </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">27017</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> --mongos </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span></span></code></pre></div><p>Notice:</p><ul><li>If you encounter an error similar to <code>error: Microsoft Visual C++ 14.0 or greater is required. Get it with &quot;Microsoft C++ Build Tools&quot;</code> when executing the <code>pip3 install mtools[mlaunch]</code> command in the Windows environment, you need to first Under <a href="https://visualstudio.microsoft.com/downloads" target="_blank" rel="noreferrer">https://visualstudio.microsoft.com/downloads</a> page, download <code>Visual Studio Installer</code>, install <code>MSVC build tools</code> through it, and then execute <code>pip3 install mtools[mlaunch]</code> command.</li><li>Please make sure that the MongoDB server is running normally, otherwise the Turms server will throw a <code>MongoSocketOpenException</code> when it starts.</li></ul></li></ul><ol start="2"><li><p>Download, install and start the Redis server (for user status management and &quot;nearby users&quot;). Take RHEL/CentOS as an example:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yum</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install epel-release</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yum</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> update</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yum</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install redis</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start redis</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> enable redis</span></span></code></pre></div><p>For the Windows platform, you can download the Windows version from <a href="https://github.com/tporadowski/redis/releases" target="_blank" rel="noreferrer">tporadowski/redis</a> for local development and testing.</p></li></ol></li><li><p>Turms cluster construction</p><p>Solution 1: Pull the Docker image of the Turms server and run:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Pull and run images</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run -p </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6510</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:6510 ghcr.io/turms-im/turms-admin</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run -p </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">7510</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:7510 -p </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8510</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:8510 ghcr.io/turms-im/turms-service</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run --ulimit nofile=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">102400</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:102400 -p </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">7510</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:7510 -p </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">9510</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:9510 -p </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10510</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:10510 -p </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">11510</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:11510 -p </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">12510</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:12510 ghcr.io/turms-im/turms-gateway</span></span></code></pre></div><p>In addition, you can use custom <code>application.yaml</code> and <code>jvm.options</code> by volume mounting. For example, configure <code>-v /your-custom-config-dir:/opt/turms/turms/config</code>.</p><p>Solution 2: <s>Download and decompress the <a href="https://github.com/turms-im/turms/releases" target="_blank" rel="noreferrer">Turms server</a> compressed package</s> (since v.0.10.0 has not been released on the release page, this scheme is not available at the moment), run according to the following steps:</p><ul><li><p>(If you install the default configuration of both MongoDB and Redis locally, you can skip this step) Configure config/jvm.options, config/application.yaml according to your needs (you can configure Turms custom configuration here parameters, and you can also configure multiple MongoDB or mongos server addresses here. For details, please refer to: <a href="https://docs.mongodb.com/manual/reference/connection-string" target="_blank" rel="noreferrer">https://docs.mongodb.com/manual/reference/connection-string</a>).</p></li><li><p>(Ansible is recommended) On all systems that need to run the Turms server, run the bin/turms script (the default is executed as a Thin package, if you need to execute it as a Fat package, please add the <code>-f</code> parameter when executing the script, Such as: <code>sh run.sh -f</code>. Then run the turms-gateway server. The turms-gateway and turms-service servers will automatically find other server nodes through MongoDB (as a service registry), so the Turms cluster start working.</p></li></ul><p>Solution 3: Clone the source code of the Turms warehouse, and run the turms-gateway and turms-service servers directly through the IDE. (Reference command: <code>git clone --depth 1 https://github.com/turms-im/turms.git</code>)</p></li></ol><p><strong>Notes:</strong></p><ul><li>When the turms-service server is started, it will automatically detect whether there is a super administrator account with the role of <code>ROOT</code> and the account of <code>turms</code> in the database. If it does not exist, the turms-service server will automatically create a role with <code>ROOT</code>, name <code>turms</code> and password <code>turms.security.password.initial-root-password</code> (default: <code>turms</code>) Administrator account. In a production environment, please remember to change the default password.</li><li>The above operations are mainly for your first experience of using Turms clusters. If you need to deploy Turms in a production environment, please be sure to refer to the Wiki manual to understand the meaning of various configuration parameters and customize your own with minimal resource consumption. Business needs and business mix.</li></ul><h2 id="the-general-process-of-turms-server-startup-and-shutdown" tabindex="-1">The general process of Turms server startup and shutdown <a class="header-anchor" href="#the-general-process-of-turms-server-startup-and-shutdown" aria-label="Permalink to &quot;The general process of Turms server startup and shutdown&quot;">​</a></h2><h3 id="start-the-process" tabindex="-1">Start the process <a class="header-anchor" href="#start-the-process" aria-label="Permalink to &quot;Start the process&quot;">​</a></h3><ol><li>Connect and verify mongos and Redis server.</li><li>Check whether MongoDB has created a table. If the table has already been built, skip this step. If not, proceed: create tables, add indexes, add shard keys, and add Zones for separate storage of hot and cold data. If MongoDB&#39;s fake data is enabled, turms-service will automatically generate fake data to MongoDB for development and testing.</li><li>For the turms-service server, it will detect whether there is already a super administrator account with the role <code>ROOT</code> and the account <code>turms</code> in MongoDB. If it does not exist, an administrator account with role <code>ROOT</code>, name <code>turms</code> and password <code>turms.security.password.initial-root-password</code> (default: <code>turms</code>) will be created for MongoDB.</li><li>Register the local Node node to the service registration center. If the registration is successful, pull and apply the global configuration of the cluster, and build an RPC server to receive RPC client connections. If it fails, throw an exception and exit the process.</li><li>Open the Admin HTTP server to receive admin API requests. In addition, for turms-gateway, the gateway server (such as TCP/WebSocket) must be opened to receive client connections and requests.</li><li>For turms-gateway, if the Fake client is enabled, a real client connection is generated and a real client request is randomly sent (random request type, random request parameters) for development and testing.</li></ol><p>At this point, the server is started.</p><h3 id="shutdown-process" tabindex="-1">Shutdown Process <a class="header-anchor" href="#shutdown-process" aria-label="Permalink to &quot;Shutdown Process&quot;">​</a></h3><p>(for turms-gateway)</p><ol><li>Deny new client network connections and client requests.</li><li>Close the fake clients and close the established client sessions.</li><li>Shut down the servers that connects to TCP, UDP, or WebSocket clients and the HTTP admin API server.</li></ol><p>(for turms-gateway and turms-service) 4. Turn off the blocklist synchronization mechanism. 5. Close cluster services (such as the connection between RPC nodes, service registration and discovery service). 6. Turn off the plugin mechanism. 7. After sending requests to Redis and MongoDB, close the network connections from Turms server to Redis and MongoDB. 8. After flushing all logs, close the log service.</p><p>At this point, the server shutdown is complete.</p>`,41),o=[n];function r(l,h,d,p,c,k){return i(),e("div",null,o)}const m=s(t,[["render",r]]);export{g as __pageData,m as default};
