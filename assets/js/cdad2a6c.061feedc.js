(window.webpackJsonp=window.webpackJsonp||[]).push([[200],{268:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return i}));var r=t(3),a=t(7),c=(t(0),t(311)),o={title:"degrade",permalink:"wiki/degrade/",layout:"wiki",tags:["Functions"]},l={unversionedId:"reference/randomness-and-chance/degrade",id:"reference/randomness-and-chance/degrade",isDocsHomePage:!1,title:"degrade",description:"Type:",source:"@site/docs/reference/randomness-and-chance/degrade.md",slug:"/reference/randomness-and-chance/degrade",permalink:"/docs/reference/randomness-and-chance/degrade",editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/reference/randomness-and-chance/degrade.md",version:"current",lastUpdatedBy:"Raphael Forment",lastUpdatedAt:1621614610},p=[],d={toc:p};function i(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"/wiki/Type_signature",title:"wikilink"},"Type"),":"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"degrade :: Pattern a -> Pattern a\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"degrade")," randomly removes events from a pattern, 50% of the time.\nExample usage:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},'d1 $ slow 2 $ degrade $ sound "[[[feel:5*8,feel*3] feel:3*8], feel*4]"\n   # accelerate "-6"\n   # speed "2"\n')),Object(c.b)("h1",{id:"degradeby"},"degradeBy"),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"/wiki/Type_signature",title:"wikilink"},"Type"),":"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-haskell"},"degradeBy :: Double -> Pattern a -> Pattern a\n")),Object(c.b)("p",null,"Similarly to"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"degrade\n")),Object(c.b)("p",null,", ",Object(c.b)("strong",{parentName:"p"},"degradeBy")," allows you to control the percentage of events that are\nremoved. For example, to remove events 90% of the time:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},'d1 $ slow 2 $ degradeBy 0.9 $ sound "[[[feel:5*8,feel*3] feel:3*8], feel*4]"\n   # accelerate "-6"\n   # speed "2"\n')),Object(c.b)("h1",{id:"undegradeby"},"unDegradeBy"),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"/wiki/Type_signature",title:"wikilink"},"Type"),":"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-haskell"},"unDegradeBy :: Double -> Pattern a -> Pattern a\n")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"unDegradeBy\n")),Object(c.b)("p",null,"is"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"degradeBy\n")),Object(c.b)("p",null,"but with the percentage describing how many events to ",Object(c.b)("em",{parentName:"p"},"keep")," on average\nnot ",Object(c.b)("em",{parentName:"p"},"remove"),"."),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"/wiki/Category:Randomness_and_chance",title:"wikilink"},"Category:Randomness and\nchance")))}i.isMDXComponent=!0},311:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=a.a.createContext({}),i=function(e){var n=a.a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},b=function(e){var n=i(e.components);return a.a.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},s=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),b=i(t),s=r,m=b["".concat(o,".").concat(s)]||b[s]||u[s]||c;return t?a.a.createElement(m,l(l({ref:n},d),{},{components:t})):a.a.createElement(m,l({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,o=new Array(c);o[0]=s;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<c;d++)o[d]=t[d];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);