(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"9d8Q":function(e,t,a){},Kvkj:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"c",(function(){return u})),a.d(t,"a",(function(){return m})),a.d(t,"d",(function(){return s}));var n=a("q1tI"),l=a.n(n),r=a("Wbzz"),i=(a("9d8Q"),a("PGGC"),function(e){var t=e.siteTitle,a=e.menuLinks;return l.a.createElement("header",{className:"header"},l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("h1",{className:"site-title"},l.a.createElement(r.a,{to:"/"},t)),l.a.createElement("div",null,l.a.createElement("nav",null,l.a.createElement("ul",null,a.map((function(e){return l.a.createElement("li",{key:e.name,className:"link"},l.a.createElement(r.a,{to:e.link,activeClassName:"active"},e.name))}))))))))});i.defaultProps={siteTitle:""};var c=i,u=function(e){var t,a,n=e.children,i=Object(r.c)("1947816842");return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"site"},l.a.createElement(c,{siteTitle:(null===(t=i.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",menuLinks:null===(a=i.site.siteMetadata)||void 0===a?void 0:a.menuLinks}),l.a.createElement("div",{className:"site-content"},l.a.createElement("main",null,n)),l.a.createElement(m,null)))},m=function(){return l.a.createElement("div",{className:"footer"},l.a.createElement("footer",null,"© ",(new Date).getFullYear()," - Team110"," ",l.a.createElement("a",{href:"https://20f.comp110.com"},"(Fall 2020)")))},s=function(e){var t=e.links;return l.a.createElement("div",{className:"sidebar"},l.a.createElement("div",{className:"sidebar-links"},t.map((function(e,t){return l.a.createElement("div",{key:t+20},l.a.createElement("a",{href:e.link,key:t},e.name))}))))}},PGGC:function(e,t,a){},vSVU:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return c})),a.d(t,"pageQuery",(function(){return u}));var n=a("q1tI"),l=a.n(n),r=a("Kvkj"),i=function(e){var t=e.value.replace(/[^\w\s]/gi,"");return t=t.split(" ").join("-"),{depth:e.depth,value:e.value,id:"#"+t}};function c(e){var t=e.data.markdownRemark,a=t.frontmatter,n=t.html,c=t.headings.map(i).map((function(e){return{name:(t=e.value,-1!==t.indexOf("?")?t.split("?")[0]+"?":t.split(":")[0]),link:e.id};var t}));return l.a.createElement(r.c,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("section",null,l.a.createElement("h1",null,a.title),l.a.createElement("p",null,a.date),l.a.createElement("div",{className:"markdown-content",dangerouslySetInnerHTML:{__html:n}})),a.author.length>0&&l.a.createElement("section",{className:"contributors"},l.a.createElement("h4",null,"Contributors:"),a.author.map((function(e,t){return l.a.createElement("li",{key:t},e," ",t+1!==a.author.length?"  |":"")})))),l.a.createElement(r.d,{links:c}))}var u="1077636560"}}]);
//# sourceMappingURL=component---src-templates-markdown-js-34214244fcdb14867670.js.map