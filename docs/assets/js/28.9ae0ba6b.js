(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{388:function(t,e,l){"use strict";l.r(e);var v=l(24),a=Object(v.a)({},(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[l("h1",{attrs:{id:"群组相关功能"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#群组相关功能"}},[t._v("#")]),t._v(" 群组相关功能")]),t._v(" "),l("p",[t._v("群成员类型包括：群主、管理员、普通成员、游客、匿名游客")]),t._v(" "),l("h2",{attrs:{id:"相关路径与模型"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#相关路径与模型"}},[t._v("#")]),t._v(" 相关路径与模型")]),t._v(" "),l("ul",[l("li",[t._v("管理员API路径：/groups。具体API细节请参考OpenAPI文档")]),t._v(" "),l("li",[t._v("客户端接口：请查阅GroupService类。")]),t._v(" "),l("li",[t._v("底层请求模型：请查阅turms-java-common/src/main/proto/request/group目录下的接口描述文件")]),t._v(" "),l("li",[t._v("配置类：im.turms.server.common.property.env.service.business.GroupProperties")])]),t._v(" "),l("h2",{attrs:{id:"功能列表"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#功能列表"}},[t._v("#")]),t._v(" 功能列表")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[l("strong",[l("div",{staticStyle:{"min-width":"100px"}},[t._v("功能")])])]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[l("strong",[t._v("描述")])]),t._v(" "),l("th",[l("strong",[t._v("相关配置属性名")])])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("新建群组")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("新建群组")]),t._v(" "),l("td",[t._v("activateGroupWhenCreated")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("群主解散群")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("群主可以解散群")]),t._v(" "),l("td",[t._v("shouldDeleteGroupLogicallyByDefault")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("主动退群")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("除群主外，其他用户均可以主动退群。群主需先将群转让给其他群成员才可以进行退群操作")]),t._v(" "),l("td")]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("群主转让群")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("群主可以将群的拥有者权限转给群内的其他成员，转移后， 被转让者变为新的群主，原群主变为普通成员。群主还可以选择在转让的同时，直接退出该群")]),t._v(" "),l("td")]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("修改群组资料")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("支持群组名，群组头像，群组介绍，群组通知，群组类型等字段")]),t._v(" "),l("td")]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("群组禁言")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("群组普通成员在禁言时段无法发送消息，仅有群主与管理员能发送消息")]),t._v(" "),l("td")]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("获取群组信息")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("根据过滤条件（如群组ID），查找群组")]),t._v(" "),l("td")]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("增加群组成员")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("增加群组成员")]),t._v(" "),l("td")]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("发送入群邀请")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("拥有邀请权限角色的群组成员可向指定用户发送入群邀请")]),t._v(" "),l("td",[t._v("groupInvitationContentLimit"),l("br"),t._v("groupInvitationTimeToLiveHours"),l("br"),t._v("expiredGroupInvitationsCheckerCron"),l("br"),t._v("deleteExpiredGroupInvitationsWhenCronTriggered")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("撤销入群邀请")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("群主、管理员与入群邀请发起者可撤销入群邀请")]),t._v(" "),l("td",[t._v("allowRecallingPendingGroupInvitationByOwnerAndManager"),l("br"),t._v("shouldDeleteExpiredGroupInvitationsAutomatically")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("发送入群请求")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",[t._v("groupJoinRequestContentLimit"),l("br"),t._v("groupJoinRequestTimeToLiveHours"),l("br"),t._v("expiredGroupJoinRequestsCheckerCron"),l("br"),t._v("deleteExpiredGroupJoinRequestsWhenCronTriggered")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("撤销入群请求")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",[t._v("allowRecallingJoinRequestSentByOneself"),l("br"),t._v("shouldDeleteExpiredGroupJoinRequestsAutomatically")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("设置入群问题")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("对于入群策略为“入群请求者回答问题正确后加入”的群组，群主与管理员可以设置入群问题。入群问题可以有多个，一个问题可以多个答案")]),t._v(" "),l("td")]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("删除入群问题")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("删除入群问题")]),t._v(" "),l("td")]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("移除群组成员")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("群主和管理员可以移除群组成员，且管理员不能移除群主和其他管理员")]),t._v(" "),l("td")]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("更新群组成员信息")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("根据对应的“群组类型”，指定角色的群组成员可以修改其他群组成员的成员信息（如：群主为群组成员赋予管理员角色）")]),t._v(" "),l("td")]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("群组成员禁言")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("禁言用户可以在群组内，但无法发送消息")]),t._v(" "),l("td")]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("群组成员坐标实时共享")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("群组成员可以将自己的坐标实时地分享给其他群组成员")]),t._v(" "),l("td")]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("群组黑名单")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("用户被拉黑后，将无法再进入群组。如果被拉黑用户在被拉黑之前是当前群组成员，则在拉黑后该用户会自动在群组成员列表中移除")]),t._v(" "),l("td")])])]),t._v(" "),l("h2",{attrs:{id:"群组类型配置"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#群组类型配置"}},[t._v("#")]),t._v(" 群组类型配置")]),t._v(" "),l("p",[t._v("在群组配置方面，Turms使用了“群组类型”这一概念。默认情况下，Turms提供了一种通用的群组类型，同时您也可以通过对“群组类型”做增删改查操作，以满足您定制化的群组类型需求。")]),t._v(" "),l("p",[t._v("对应的管理员API路径：/groups/types。具体API细节请查阅OpenAPI文档\n对应的配置模型：im.turms.turms.workflow.dao.domain.GroupType")]),t._v(" "),l("h3",{attrs:{id:"配置列表"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#配置列表"}},[t._v("#")]),t._v(" 配置列表")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[l("strong",[t._v("属性")])]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[l("strong",[t._v("描述")])]),t._v(" "),l("th",[l("strong",[t._v("配置属性名")])])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("群成员上限人数")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("有效值为1~∞")]),t._v(" "),l("td",[t._v("groupSizeLimit")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("邀请入群策略")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("支持配置：①仅群主可邀请；②群主+管理员可邀请；③群主+管理员与群成员可邀请；④所有人可邀请")]),t._v(" "),l("td",[t._v("invitationStrategy")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("被邀请人同意模式")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("支持配置：①需要被邀请人同意；②不需要被邀请人同意")]),t._v(" "),l("td",[t._v("invitationStrategy")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("入群策略")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("支持配置：①群主与管理员审批入群请求；②入群请求者回答问题正确后加入；③允许任何人加入；④不允许任何人加入")]),t._v(" "),l("td",[t._v("joinStrategy")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("群信息更新策略")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("支持配置：①仅群主可修改；②群主+管理员可修改；③群主+管理员+群成员可修改；④所有人可修改")]),t._v(" "),l("td",[t._v("groupInfoUpdateStrategy")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("群成员信息更新策略")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("群主可以修改所有人的在群组内的成员信息，管理员只能修改群组中普通成员的成员信息")]),t._v(" "),l("td",[t._v("memberInfoUpdateStrategy")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("游客发言")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("可禁止、可允许")]),t._v(" "),l("td",[t._v("guestSpeakable")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("群成员修改自身信息")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("可禁止、可允许")]),t._v(" "),l("td",[t._v("selfInfoUpdatable")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("群消息已读回执")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("可开启、可关闭")]),t._v(" "),l("td",[t._v("enableReadReceipt")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("修改已发送消息")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("可开启、可关闭")]),t._v(" "),l("td",[t._v("messageEditable")])])])])])}),[],!1,null,null,null);e.default=a.exports}}]);