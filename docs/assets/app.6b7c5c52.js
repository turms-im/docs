import{_ as p,Y as i,o as c,c as l,n as m,V as o,a4 as f,a5 as h,a6 as g,a7 as _,a8 as v,a9 as A,aa as k,ab as M,ac as b,ad as y,d as w,u as P,j as E,A as O,ae as C,af as D,ag as L,ah as R}from"./chunks/framework.95a60cb2.js";import{t as T}from"./chunks/theme.65979e52.js";let z=1;const $={props:{dsl:{type:String,required:!0}},data:()=>({svg:"",mermaid:null,zoomed:!1,darkModeObserver:null,isDarkMode:!1}),async mounted(){this.mermaid=(await i(()=>import("./chunks/mermaid.core.9fc5c154.js").then(e=>e.aP),["assets/chunks/mermaid.core.9fc5c154.js","assets/chunks/framework.95a60cb2.js"])).default,this.darkModeObserver=new MutationObserver(this.render),this.darkModeObserver.observe(document.documentElement,{attributeFilter:["class"]}),await this.render()},unmounted(){this.darkModeObserver.disconnect()},methods:{async render(){const e=document.documentElement.classList.contains("dark");this.isDarkMode=e;const t=e?"dark":"default";this.mermaid.initialize({startOnLoad:!1,theme:t});const{svg:a}=await this.mermaid.render(`diagram_${z++}`,this.dsl);this.svg=a},toggleZoom(){this.zoomed=!this.zoomed}}},x=["innerHTML"];function S(e,t,a,n,q,r){return c(),l("figure",{class:m(["mermaid-diagram",{zoomed:e.zoomed,dark:e.isDarkMode}]),onClick:t[0]||(t[0]=(...u)=>r.toggleZoom&&r.toggleZoom(...u)),innerHTML:e.svg},null,10,x)}const V=p($,[["render",S]]),j=e=>{e.component("mermaid",V)};const F={extends:T,enhanceApp(e){const t=e.app;j(t)}};function d(e){if(e.extends){const t=d(e.extends);return{...t,...e,async enhanceApp(a){t.enhanceApp&&await t.enhanceApp(a),e.enhanceApp&&await e.enhanceApp(a)}}}return e}const s=d(F),B=w({name:"VitePressApp",setup(){const{site:e}=P();return E(()=>{O(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),C(),D(),L(),s.setup&&s.setup(),()=>R(s.Layout)}});async function H(){const e=Z(),t=I();t.provide(h,e);const a=g(e.route);return t.provide(_,a),t.component("Content",v),t.component("ClientOnly",A),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return a.frontmatter.value}},$params:{get(){return a.page.value.params}}}),s.enhanceApp&&await s.enhanceApp({app:t,router:e,siteData:k}),{app:t,router:e,data:a}}function I(){return M(B)}function Z(){let e=o,t;return b(a=>{let n=y(a);return n?(e&&(t=n),(e||t===n)&&(n=n.replace(/\.js$/,".lean.js")),o&&(e=!1),i(()=>import(n),[])):null},s.NotFound)}o&&H().then(({app:e,router:t,data:a})=>{t.go().then(()=>{f(t.route,a.site),e.mount("#app")})});export{H as createApp};
