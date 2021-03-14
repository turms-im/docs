(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{437:function(t,s,a){"use strict";a.r(s);var e=a(25),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h4",{attrs:{id:"部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部署"}},[t._v("#")]),t._v(" 部署")]),t._v(" "),a("p",[t._v("注意：turms服务端只部署在内网环境，不应该暴露访问地址给外网。turms-gateway服务端可以暴露外网给用户访问。如果您使用HAProxy、Nginx等负载均衡服务端，则turms-gateway也可以部署在内网。")]),t._v(" "),a("p",[t._v("以下操作之后会集成到turms-cli里面，为用户做全自动分发、配置、安装、运维。")]),t._v(" "),a("p",[t._v("分发")]),t._v(" "),a("p",[t._v("Turms的发布包设计并没有采用"),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Filesystem_Hierarchy_Standard",target:"_blank",rel:"noopener noreferrer"}},[t._v("Filesystem Hierarchy Standard"),a("OutboundLink")],1),t._v("中所述的各种不同类型的数据存放在不同的目录下，而采用单一目录管理所有不同类型的数据，因此推荐将Turms发布包解压放置在/opt/turms目录下（非强制），具体：")]),t._v(" "),a("p",[t._v("/opt/turms/turms （软链接）")]),t._v(" "),a("p",[t._v("/opt/turms/turms-gateway （软链接）")]),t._v(" "),a("p",[t._v("/opt/turms/turms-0.10.0-SNAPSHOT")]),t._v(" "),a("p",[t._v("/opt/turms/turms-gateway-0.10.0-SNAPSHOT")]),t._v(" "),a("p",[t._v("Turms")]),t._v(" "),a("p",[t._v("灰度发布")]),t._v(" "),a("p",[t._v("Turms支持用户无感知的灰度发布。具体参考步骤如下：")]),t._v(" "),a("ol",[a("li")]),t._v(" "),a("p",[t._v("https://blog.csdn.net/bytxl/article/details/46437363")]),t._v(" "),a("p",[t._v("https://blog.csdn.net/lijinqi1987/article/details/74545851?utm_medium=distribute.pc_relevant_right.none-task-blog-BlogCommendFromMachineLearnPai2-2.nonecase&depth_1-utm_source=distribute.pc_relevant_right.none-task-blog-BlogCommendFromMachineLearnPai2-2.nonecase")]),t._v(" "),a("p",[t._v("https://zhuanlan.zhihu.com/p/89620832")]),t._v(" "),a("h3",{attrs:{id:"turms内部"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#turms内部"}},[t._v("#")]),t._v(" Turms内部")]),t._v(" "),a("h2",{attrs:{id:"同步系统时间"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#同步系统时间"}},[t._v("#")]),t._v(" 同步系统时间")]),t._v(" "),a("p",[t._v("推荐两种方法：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("使用Ansible中的https://github.com/geerlingguy/ansible-role-ntp角色来批量为Linux集群安装并启动NTP服务。")])]),t._v(" "),a("li",[a("p",[t._v("安装并启动Chrony客户端。以RHEL/CentOS系统为例（补充资料："),a("a",{attrs:{href:"https://chrony.tuxfamily.org/comparison.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Comparison of NTP implementations"),a("OutboundLink")],1),t._v("）：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("yum -y "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" chrony\nsystemctl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("enable")]),t._v(" chronyd "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# enable chrony daemon upon boot")]),t._v("\nsystemctl status chronyd "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# check the status of chronyd")]),t._v("\n")])])])])]),t._v(" "),a("h2",{attrs:{id:"linux优化配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux优化配置"}},[t._v("#")]),t._v(" Linux优化配置")]),t._v(" "),a("p",[t._v("https://www.nginx.com/blog/tuning-nginx/")]),t._v(" "),a("p",[t._v("https://www.nginx.com/blog/performance-tuning-tips-tricks/")]),t._v(" "),a("h3",{attrs:{id:"关闭swap"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关闭swap"}},[t._v("#")]),t._v(" 关闭swap")]),t._v(" "),a("p",[t._v("第一步关闭swap分区:\nswapoff /mnt/swap")]),t._v(" "),a("p",[t._v("第二步修改配置文件 - /etc/fstab\n删除 /mnt/swap swap swap defaults 0 0 这一行或者注释掉这一行")]),t._v(" "),a("p",[t._v("第三步确认swap已经关闭\nfree -m\n若都显示 0 则表示关闭成功")]),t._v(" "),a("p",[t._v("第四步调整 swappiness 参数\necho 0 > /proc/sys/vm/swappiness   # 临时生效\nvim /etc/sysctl.conf                           # 永久生效")]),t._v(" "),a("p",[t._v("修改 vm.swappiness 的修改为 0")]),t._v(" "),a("p",[t._v("vm.swappiness=0\nsysctl -p                                            # 使配置生效")]),t._v(" "),a("p",[t._v("swapoff /mnt/swap")]),t._v(" "),a("h4",{attrs:{id:"配置linux-oom-killer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置linux-oom-killer"}},[t._v("#")]),t._v(" 配置Linux OOM Killer")]),t._v(" "),a("p",[t._v("$jps")]),t._v(" "),a("p",[t._v("1849 Elasticsearch")]),t._v(" "),a("p",[t._v("$cat /proc/1849/oom_score_adj0")]),t._v(" "),a("p",[t._v("$sudo echo -17 > /proc/1849/oom_score_adj")]),t._v(" "),a("p",[t._v("可以将这个信息写到ES的启动脚本中自动执行。")]),t._v(" "),a("h4",{attrs:{id:"平均单个用户消耗-x内存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#平均单个用户消耗-x内存"}},[t._v("#")]),t._v(" 平均单个用户消耗：X内存")]),t._v(" "),a("h4",{attrs:{id:"最大打开文件数-max-open-files"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#最大打开文件数-max-open-files"}},[t._v("#")]),t._v(" 最大打开文件数(Max Open Files)")]),t._v(" "),a("h4",{attrs:{id:"全局限制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#全局限制"}},[t._v("#")]),t._v(" 全局限制")]),t._v(" "),a("p",[t._v("/etc/sysctl.conf")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("fs.file-max = 1020000\nnet.ipv4.ip_conntrack_max = 1020000\nnet.ipv4.netfilter.ip_conntrack_max = 1020000\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ sudo sysctl -p /etc/sysctl.conf \n")])])]),a("h4",{attrs:{id:"进程限制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进程限制"}},[t._v("#")]),t._v(" 进程限制")]),t._v(" "),a("p",[t._v("/etc/security/limits.conf")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# /etc/security/limits.conf\n*         hard    nofile      1020000\n*         soft    nofile      1020000\n")])])]),a("h3",{attrs:{id:"带宽需求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#带宽需求"}},[t._v("#")]),t._v(" 带宽需求")]),t._v(" "),a("p",[t._v("假设百万连接中有 20% 是活跃的, 每个连接每秒传输 1KB 的数据, 那么需要的网络带宽是 0.2M x 1KB/s x 8 = 1.6Gbps, 要求服务器至少是万兆网卡(10Gbps).")]),t._v(" "),a("p",[t._v("从理论计算BDP（带宽时延积） 0.02秒*(100Mb/8)=250Kb 所以SO_SNDBUF为256Kb的时候基本能跑满带宽了，再大实际意义也不大了。也就是前面所说的仓库足够后瓶颈在带宽上了。")]),t._v(" "),a("p",[t._v("因为BDP是250K，也就是拥塞窗口（带宽、接收窗口和rt决定的）即将成为新的瓶颈，所以调大buffer没意义了。")]),t._v(" "),a("p",[t._v("默认情况下Linux系统会自动调整这个buffer（net.ipv4.tcp_wmem）, 也就是不推荐程序中主动去设置SO_SNDBUF，除非明确知道设置的值是最优的。")]),t._v(" "),a("h5",{attrs:{id:"灰度发布"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#灰度发布"}},[t._v("#")]),t._v(" 灰度发布")]),t._v(" "),a("p",[t._v("Jenkins https://www.alibabacloud.com/help/zh/doc-detail/42988.htm?spm=a2c63.p38356.b99.131.5744455flvJHO5")])])}),[],!1,null,null,null);s.default=r.exports}}]);