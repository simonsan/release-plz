"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[541],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),f=a,g=u["".concat(i,".").concat(f)]||u[f]||d[f]||o;return r?n.createElement(g,c(c({ref:t},l),{},{components:r})):n.createElement(g,c({ref:t},l))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=f;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:a,c[1]=s;for(var p=2;p<o;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2057:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={},c="Yanked packages",s={unversionedId:"extra/yanked-packages",id:"extra/yanked-packages",title:"Yanked packages",description:"Due to this",source:"@site/docs/extra/yanked-packages.md",sourceDirName:"extra",slug:"/extra/yanked-packages",permalink:"/docs/extra/yanked-packages",draft:!1,editUrl:"https://github.com/MarcoIeni/release-plz/tree/main/website/docs/extra/yanked-packages.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Single changelog",permalink:"/docs/extra/single-changelog"}},i={},p=[],l={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"yanked-packages"},"Yanked packages"),(0,a.kt)("p",null,"Due to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rust-lang/cargo/issues/11693"},"this"),"\nissue, release-plz can't detect yanked packages."),(0,a.kt)("p",null,"If you run release-plz on a package that has been yanked, you will see the message:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-txt"},"the local package has already a different version with respect to the registry package,\nso release-plz will not update it\n")),(0,a.kt)("p",null,"This is because release-plz thinks that the latest published version of your packages is the latest\nnon-yanked version."),(0,a.kt)("p",null,"If the current version of your package is yanked,\nplease update the version of your package to the next version manually.\nTo do this, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"cargo set-version")," command from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/killercup/cargo-edit"},"cargo-edit"),"."))}d.isMDXComponent=!0}}]);