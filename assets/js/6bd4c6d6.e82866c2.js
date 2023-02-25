"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2178],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),g=a,m=u["".concat(c,".").concat(g)]||u[g]||d[g]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},1331:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(3117),a=(n(7294),n(3905));const i={title:"DAW",id:"connecting_to_a_daw"},o=void 0,l={unversionedId:"configuration/MIDIOSC/connecting_to_a_daw",id:"configuration/MIDIOSC/connecting_to_a_daw",title:"DAW",description:"This page is incomplete. You can help by extending it.",source:"@site/docs/configuration/MIDIOSC/connecting_daw.md",sourceDirName:"configuration/MIDIOSC",slug:"/configuration/MIDIOSC/connecting_to_a_daw",permalink:"/docs/configuration/MIDIOSC/connecting_to_a_daw",draft:!1,editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/configuration/MIDIOSC/connecting_daw.md",tags:[],version:"current",lastUpdatedBy:"Bernard Gray",lastUpdatedAt:1677338999,formattedLastUpdatedAt:"Feb 25, 2023",frontMatter:{title:"DAW",id:"connecting_to_a_daw"},sidebar:"docs",previous:{title:"OSC",permalink:"/docs/configuration/MIDIOSC/osc"},next:{title:"Control Voltage/CV",permalink:"/docs/configuration/MIDIOSC/control-voltage"}},c={},s=[{value:"Ableton",id:"ableton",level:2},{value:"Bitwig",id:"bitwig",level:2},{value:"Renoise",id:"renoise",level:2}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This page is incomplete. You can help by extending it.")),(0,a.kt)("p",null,"Many people are connecting ",(0,a.kt)("strong",{parentName:"p"},"Tidal")," to a ",(0,a.kt)("strong",{parentName:"p"},"DAW")," (",(0,a.kt)("em",{parentName:"p"},"digital audio workstation"),") like the free/open source Ardour software, and proprietary Ableton, Bitwig, Renoise, Reaper, and so on. There are many reasons to do so: using external instruments, sound post-treatment, mixing, etc... For this reason, there are many guides you can find here and there detailing how to connect Tidal with specific DAWs."),(0,a.kt)("h2",{id:"ableton"},"Ableton"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://club.tidalcycles.org/t/using-tidal-with-ableton-live/3135"},"Using Tidal with Ableton")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://club.tidalcycles.org/t/routing-tidal-audio-to-ableton/437"},"Routing Tidal audio to Ableton"))),(0,a.kt)("h2",{id:"bitwig"},"Bitwig"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://club.tidalcycles.org/t/live-stream-8-tidalcycles-x-daws-with-jack-armitage/1495/3"},"Tidal x DAWs (Jack Armitage)"))),(0,a.kt)("h2",{id:"renoise"},"Renoise"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://club.tidalcycles.org/t/tidal-renoise-3-redirt/2400"},"Tidal + Renoise = <3 (redirt)"))))}u.isMDXComponent=!0}}]);