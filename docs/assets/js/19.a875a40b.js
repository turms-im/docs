(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{378:function(t,s,a){"use strict";a.r(s);var n=a(24),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"quick-start"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#quick-start"}},[t._v("#")]),t._v(" Quick Start")]),t._v(" "),a("p",[t._v("若您网络畅通，第一次完成以下全部操作大概需要花费10~30分钟。当您熟练之后，可在1~3分钟完成各种集群的部署工作（之后会提供turms-cli来实现一键全自动跨主机搭建Turms集群的功能）")]),t._v(" "),a("h2",{attrs:{id:"步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#步骤"}},[t._v("#")]),t._v(" 步骤")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("MongoDB集群搭建（用于业务数据存储、服务发现、配置管理）")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("下载并安装"),a("a",{attrs:{href:"https://www.mongodb.com/download-center/community",target:"_blank",rel:"noopener noreferrer"}},[t._v("MongoDB"),a("OutboundLink")],1),t._v("（要求最低版本为：4.0。推荐版本为最新稳定版）。以RHEL/CentOS为例（具体可参考：https://docs.mongodb.com/manual/tutorial/install-mongodb-on-red-hat）：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("EOF"),a("span",{pre:!0,attrs:{class:"token bash punctuation"}},[t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" /etc/yum.repos.d/mongodb-org-4.4.repo")]),t._v("\n[mongodb-org-4.4]\nname=MongoDB Repository\nbaseurl=https://repo.mongodb.org/yum/redhat/"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$releasever")]),t._v("/mongodb-org/4.4/x86_64/\ngpgcheck=1\nenabled=1\ngpgkey=https://www.mongodb.org/static/pgp/server-4.4.asc\nEOF")]),t._v("\nyum "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y mongodb-org\n")])])])]),t._v(" "),a("li",[a("p",[t._v("搭建MongoDB服务端集群（以mlaunch为例。关于mlaunch提供的更多指令，请查阅：http://blog.rueckstiess.com/mtools/mlaunch.html）。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("pip3 "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" mtools"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("mlaunch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nmlaunch init --replicaset --sharded "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" --nodes "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" --config "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" --hostname localhost --port "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("29510")]),t._v(" --mongos "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n")])])]),a("p",[t._v("请确保运行正常，否则Turms会抛出MongoSocketOpenException异常。")])])])]),t._v(" "),a("li",[a("p",[t._v("下载、安装并启动Redis服务端（用于实现用户状态管理、“附近的用户”，以及turms-client-js服务降级中登录失败与会话失联原因的查询）。以RHEL/CentOS为例：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("yum "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" epel-release\nyum update\nyum "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" redis\nsystemctl start redis\nsystemctl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("enable")]),t._v(" redis\n")])])]),a("p",[t._v("对于Windows平台，可在 "),a("a",{attrs:{href:"https://github.com/tporadowski/redis/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("tporadowski/redis"),a("OutboundLink")],1),t._v(" 下载Windows版本供本地开发测试用。")])]),t._v(" "),a("li",[a("p",[t._v("Turms集群搭建（以下为手动搭建方案，之后会提供turms-cli做自动化集群部署）")]),t._v(" "),a("p",[t._v("方案一："),a("s",[t._v("下载并解压"),a("a",{attrs:{href:"https://github.com/turms-im/turms/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("Turms服务端"),a("OutboundLink")],1),t._v("压缩包")]),t._v("（由于v.0.10.0尚未发布在release页面，目前只能通过方案二运行Turms集群）")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("（如果您将MongoDB与Redis都安装默认配置安装在本地，可跳过此步骤）根据您的需求配置config/jvm.options、config/application.yaml（您可以在此处配置Turms自定义的配置参数，并且您也可以在此处配置多个MongoDB或mongos的服务端地址。具体可参考：https://docs.mongodb.com/manual/reference/connection-string）。")])]),t._v(" "),a("li",[a("p",[t._v("（推荐使用Ansible）在所有需要运行Turms服务端的系统上，运行bin/turms脚本（默认以Thin包形式执行，若需以Fat包形式执行，请在执行脚本时加上“-f”参数，如：“sh turms.sh -f”。之后再运行turms-gateway服务端。turms与turms-gateway服务端会通过MongoDB（作为服务注册中心）来自动寻找其他服务端节点，由此Turms集群开始运作。")])])]),t._v(" "),a("p",[t._v("方案二：克隆Turms仓库源码，直接通过IDE运行turms与turms-gateway服务端。（参考命令：git clone --depth 1 https://github.com/turms-im/turms.git）")])])]),t._v(" "),a("p",[a("strong",[t._v("提醒")])]),t._v(" "),a("ul",[a("li",[t._v("turms服务端在启动时，会自动检测数据库中是否已存在一个角色为“ROOT”，且账号为“turms”的超级管理员账号。如果不存在，则turms服务端会自动创建一个角色为“ROOT”、名称与密码均为“turms”的管理员账号。在生产环境中，请务必记得要修改默认密码。")]),t._v(" "),a("li",[t._v("上述操作主要用于您初次体验Turms集群使用，若您需将Turms部署在生产环境当中，请务必查阅Wiki手册，了解各种配置参数的意义，以最小的资源消耗，来定制属于您自己的业务需求与业务组合。")])])])}),[],!1,null,null,null);s.default=e.exports}}]);