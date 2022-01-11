import{r as t,o as d,c as o,a as e,b as a,F as i,e as r,d as n}from"./app.384ff6f9.js";import{_ as c}from"./plugin-vue_export-helper.21dcd24c.js";const l={},m=r(`<h1 id="turms-admin" tabindex="-1"><a class="header-anchor" href="#turms-admin" aria-hidden="true">#</a> turms-admin</h1><p>turms-admin\u662F\u4E00\u4E2A\u4E3ATurms\u9879\u76EE\u5B9A\u5236\u7684\u540E\u53F0\u7BA1\u7406\u5355\u9875\u5E94\u7528\uFF08SPA\uFF09\uFF0C\u5177\u4F53\u5305\u62EC\uFF1A\u96C6\u7FA4\u7BA1\u7406\uFF08\u96C6\u7FA4\u76D1\u63A7\u3001\u96C6\u7FA4\u914D\u7F6E\uFF09\u3001\u5185\u5BB9\u7BA1\u7406\u3001\u5BA2\u6237\u7AEF\u9ED1\u540D\u5355\u3001\u6743\u9650\u63A7\u5236\u3001\u5BA2\u6237\u7AEF\u7EC8\u7AEF\uFF0C\u8FD9\u4E94\u5927\u7248\u5757\u3002</p><p>\u6CE8\u610F\uFF1Aturms-admin\u7684\u5B9A\u4F4D\u4EC5\u4EC5\u662FTurms\u670D\u52A1\u7AEFAdmin API\u7684\u53EF\u89C6\u5316Web\u5E94\u7528\uFF0C\u56E0\u6B64turms-admin\u81EA\u8EAB\u4E0D\u63D0\u4F9B\u4EFB\u4F55\u6570\u636E\u91C7\u96C6\u3001\u6570\u636E\u5206\u6790\u4E0E\u62A5\u8B66\u7B49\u529F\u80FD\u3002</p><h2 id="\u90E8\u7F72\u6982\u8981" tabindex="-1"><a class="header-anchor" href="#\u90E8\u7F72\u6982\u8981" aria-hidden="true">#</a> \u90E8\u7F72\u6982\u8981</h2><p>Turms\u91C7\u7528\u4E86\u524D\u540E\u7AEF\u5206\u79BB\u8BBE\u8BA1\uFF0C\u5BF9\u4E8ETurms\u7684\u670D\u52A1\u7AEF\u800C\u8A00\uFF0C\u5B83\u4EEC\u751A\u81F3\u4E0D\u201C\u77E5\u9053\u201D\u6709<code>turms-admin</code>\u8FD9\u4E2A\u524D\u7AEF\u9879\u76EE\u7684\u5B58\u5728\u3002turms-admin\u7684\u524D\u7AEF\u9879\u76EE\u53EA\u662F\u63D0\u4F9B\u8BF8\u5982JavaScript\u3001CSS\u4E0E\u56FE\u50CF\u7B49\u9759\u6001\u8D44\u6E90\u6587\u4EF6\uFF0C\u56E0\u6B64\u7528\u6237\u751A\u81F3\u53EF\u4EE5\u901A\u8FC7\u672C\u5730\u7684\u9759\u6001HTML\u6587\u4EF6\uFF0C\u76F4\u63A5\u5728\u6D4F\u89C8\u5668\u4E2D\u6253\u5F00turms-admin\uFF0C\u5E76\u4E0ETurms\u670D\u52A1\u7AEF\u8FDB\u884C\u4EA4\u4E92\u3002\u4F46\u4E3A\u4E86\u65B9\u4FBF\u5F00\u53D1\u8005\u8FDB\u884C\u8FD0\u7EF4\u4E0E\u90E8\u7F72\uFF0Cturms-admin\u9879\u76EE\u4E5F\u63D0\u4F9B\u4E86\u4EE5\u4E0B\u4E24\u4E2A\u90E8\u7F72\u65B9\u6848\u3002</p><h3 id="docker\u955C\u50CF-\u63A8\u8350" tabindex="-1"><a class="header-anchor" href="#docker\u955C\u50CF-\u63A8\u8350" aria-hidden="true">#</a> Docker\u955C\u50CF\uFF08\u63A8\u8350\uFF09</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> run -d -p <span class="token number">6510</span>:6510 ghcr.io/turms-im/turms-admin
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u8BE5\u955C\u50CF\u901A\u8FC7\u5185\u7F6E\u7684Nginx\u670D\u52A1\u7AEF\u5BF9\u5916\u63D0\u4F9Bturms-admin\u7684\u9759\u6001\u8D44\u6E90\u3002\u60A8\u5728\u8FD0\u884C\u5B8C\u8BE5\u6307\u4EE4\u540E\uFF0C\u5C31\u80FD\u8BBF\u95EE<code>http://localhost:6510</code>\u9875\u9762\u4E86</p><h3 id="\u7B80\u6613web\u670D\u52A1\u7AEF" tabindex="-1"><a class="header-anchor" href="#\u7B80\u6613web\u670D\u52A1\u7AEF" aria-hidden="true">#</a> \u7B80\u6613Web\u670D\u52A1\u7AEF</h3><p>turms-admin\u9879\u76EE\u81EA\u8EAB\u4E5F\u63D0\u4F9B\u4E86\u57FA\u4E8E<code>Node.js</code>\u7684\u7B80\u6613Web\u670D\u52A1\u7AEF\uFF0C\u8FD9\u4E2AWeb\u670D\u52A1\u7AEF\u4F1A\u901A\u8FC7HTTP\u63A5\u53E3\uFF0C\u5BF9\u5916\u63D0\u4F9Bturms-admin\u7684\u9759\u6001\u8D44\u6E90\uFF0C\u5E76\u9ED8\u8BA4\u642D\u8F7DPM2\u8FDB\u884Cturms-admin\u7684\u8FDB\u7A0B\u7BA1\u7406\u3002</p><h4 id="\u5B89\u88C5\u4E0E\u6267\u884C\u6B65\u9AA4" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u4E0E\u6267\u884C\u6B65\u9AA4" aria-hidden="true">#</a> \u5B89\u88C5\u4E0E\u6267\u884C\u6B65\u9AA4</h4>`,11),u=n("\u5B89\u88C5"),h={href:"https://nodejs.org/en",target:"_blank",rel:"noopener noreferrer"},p=n("Node.js"),_=e("li",null,[n("\u5728"),e("code",null,"turms-admin"),n("\u76EE\u5F55\u4E0B\uFF0C\u6267\u884C"),e("code",null,"npm run quickstart"),n("\u6307\u4EE4\uFF0C\u8BE5\u6307\u4EE4\u7531"),e("code",null,"npm install && npm run build && npm run start"),n("\u7EC4\u6210\uFF0C\u5305\u62EC\u4E86\u4F9D\u8D56\u5305\u5B89\u88C5\u3001\u524D\u7AEF\u6784\u5EFA\u4E0E\u670D\u52A1\u7AEF\u6267\u884C\u3002\u7B49\u5F85PM2\u63D0\u793Aturms-admin\u7684status\u4E3A"),e("code",null,"online"),n("\uFF0C\u8868\u660Eturms-admin\u670D\u52A1\u7AEF\u8FDB\u7A0B\u5DF2\u542F\u52A8")],-1),b=e("li",null,[n("\u6253\u5F00\u6D4F\u89C8\u5668\uFF0C\u5E76\u8BBF\u95EE"),e("code",null,"http://localhost:6510"),n("\u9875\u9762")],-1),f=e("h4",{id:"\u5E38\u7528\u8FD0\u7EF4\u6307\u4EE4",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u5E38\u7528\u8FD0\u7EF4\u6307\u4EE4","aria-hidden":"true"},"#"),n(" \u5E38\u7528\u8FD0\u7EF4\u6307\u4EE4")],-1),x=e("p",null,"start\uFF1A\u6267\u884Cturms-admin\u670D\u52A1\u7AEF\u8FDB\u7A0B",-1),g=e("p",null,"stop\uFF1A\u7EC8\u6B62turms-admin\u670D\u52A1\u7AEF\u8FDB\u7A0B",-1),k=e("p",null,"delete\uFF1A\u7EC8\u6B62turms-admin\u670D\u52A1\u7AEF\u8FDB\u7A0B\uFF0C\u5E76\u5220\u9664\u5176\u5728PM2\u7684\u8FDB\u7A0B\u8BB0\u5F55",-1),T=e("p",null,"restart\uFF1A\u91CD\u542Fturms-admin\u670D\u52A1\u7AEF",-1),v=e("p",null,"reload\uFF1A\u91CD\u65B0\u52A0\u8F7Dturms-admin\u670D\u52A1\u7AEF\u914D\u7F6E",-1),N=n("\u66F4\u591A\u6307\u4EE4\u4E0E\u670D\u52A1\u7AEF\u914D\u7F6E\uFF0C\u53EF\u53C2\u8003"),P={href:"https://pm2.keymetrics.io/docs/usage/pm2-doc-single-page",target:"_blank",rel:"noopener noreferrer"},j=n("PM2\u6587\u6863"),M=r('<h2 id="\u7248\u5757\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u7248\u5757\u4ECB\u7ECD" aria-hidden="true">#</a> \u7248\u5757\u4ECB\u7ECD</h2><p>\u96C6\u7FA4\u7BA1\u7406\uFF1A</p><ul><li>\u96C6\u7FA4\u76D1\u63A7\uFF1A\u67E5\u770B\u96C6\u7FA4\u7684\u5B9E\u65F6\u8FD0\u884C\u72B6\u6001\uFF1B\u67E5\u770B\u67D0\u4E00\u4E2A\u670D\u52A1\u7AEF\u7684\u5177\u4F53\u4FE1\u606F\u4E0E\u5EA6\u91CF\u6570\u636E</li><li>\u96C6\u7FA4\u914D\u7F6E\uFF1A\u8BE5\u90E8\u5206\u5BF9\u5E94\u7740Turms\u670D\u52A1\u7AEF\u7684\u5168\u5C40\u914D\u7F6E\u529F\u80FD\uFF0C\u53EF\u4EE5\u96F6\u505C\u673A\u5B9E\u65F6\u5730\u4FEE\u6539Turms\u670D\u52A1\u7AEF\u914D\u7F6E</li></ul><p>\u5185\u5BB9\u7BA1\u7406\uFF1A\u589E\u5220\u6539\u67E5\u5404\u79CD\u4E1A\u52A1\u6570\u636E</p><p>\u5BA2\u6237\u7AEF\u9ED1\u540D\u5355\uFF1A\u8BE5\u90E8\u5206\u5BF9\u5E94\u7740Turms\u670D\u52A1\u7AEF\u7684\u5168\u5C40\u9ED1\u540D\u5355\u673A\u5236\uFF0C\u7528\u4E8E\u589E\u5220\u6539\u67E5\u9ED1\u540D\u5355\u8BB0\u5F55</p><p>\u6743\u9650\u63A7\u5236\uFF1A\u7528\u4E8E\u589E\u5220\u6539\u7BA1\u7406\u5458\u7684\u4FE1\u606F\u4E0E\u6743\u9650</p><p>\u5BA2\u6237\u7AEF\u7EC8\u7AEF\uFF1A\u642D\u8F7D<code>turms-client-js</code>\u5BA2\u6237\u7AEF\u5B9E\u73B0\uFF0C\u7528\u4E8E\u7BA1\u7406\u5458\u5FEB\u901F\u6D4B\u8BD5\u771F\u5B9E\u5BA2\u6237\u7AEF\u8BF7\u6C42\u4E0E\u670D\u52A1\u7AEF\u54CD\u5E94</p><p>TODO\uFF1A\u8D34GIF\u6F14\u793A\u56FE</p>',8);function S(A,I){const s=t("ExternalLinkIcon");return d(),o(i,null,[m,e("ol",null,[e("li",null,[u,e("a",h,[p,a(s)])]),_,b]),f,x,g,k,T,v,e("p",null,[N,e("a",P,[j,a(s)])]),M],64)}var B=c(l,[["render",S]]);export{B as default};
