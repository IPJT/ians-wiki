"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[751],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>y});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(r),y=a,g=d["".concat(p,".").concat(y)]||d[y]||u[y]||o;return r?n.createElement(g,i(i({ref:t},l),{},{components:r})):n.createElement(g,i({ref:t},l))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8271:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:1},i="Type Predicates",s={unversionedId:"PersonalWiki/tutorial-basics/Typescript/type-predicates",id:"PersonalWiki/tutorial-basics/Typescript/type-predicates",title:"Type Predicates",description:"With the use of type predicates we can change types/narrow them down throughout the code. Consider the following example:",source:"@site/docs/PersonalWiki/tutorial-basics/Typescript/type-predicates.md",sourceDirName:"PersonalWiki/tutorial-basics/Typescript",slug:"/PersonalWiki/tutorial-basics/Typescript/type-predicates",permalink:"/ians-wiki/docs/PersonalWiki/tutorial-basics/Typescript/type-predicates",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/PersonalWiki/tutorial-basics/Typescript/type-predicates.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"personalWiki",previous:{title:"Typescript",permalink:"/ians-wiki/docs/category/typescript"},next:{title:"Git",permalink:"/ians-wiki/docs/category/git"}},p={},c=[],l={toc:c};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"type-predicates"},"Type Predicates"),(0,a.kt)("p",null,"With the use of type predicates we can change types/narrow them down throughout the code. Consider the following example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'type Dog = {\n  bark: () => void;\n};\n\ntype Cat = {\n  mjau: () => void;\n};\n\nfunction isDog(pet: Dog | Cat): pet is Dog {\n  //The return type of the function is a type predicate\n  //return type is a type predicate\n  return (pet as Dog).bark !== undefined;\n}\n\nconst randomPet = {} as Dog | Cat;\n\nif (Math.random() < 0.5) {\n  (randomPet as Cat).mjau = () => console.log("Mjau");\n} else {\n  (randomPet as Dog).bark = () => console.log("Wof");\n}\n\nif (isDog(randomPet)) {\n  randomPet.bark(); //Due to the isDog having a having a return type that is a "type predicate" we know that the "randomPet" is a Dog\n} else {\n  randomPet.mjau(); //Due to the isDog having a having a return type that is a "type predicate" we know that the "randomPet" is a Cat\n}\n')),(0,a.kt)("p",null,"Not declaring the return type as a type predicate implies what is showcased in the following image:\n",(0,a.kt)("img",{alt:"Without type predicate",src:r(5043).Z,width:"1461",height:"819"})),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/play?#code/C4TwDgpgBAIg9gcygXigbwFBWzgRgQwCcBrALigAoBKZAPgDc4BLAEwwF8MNRIoBhfMBTosObAFsAVvgCu5anUasOXAGYyAdgGNgTOBqhMAzvAQVIwcqagAffoKrkLho7ETooAek+EIwGYQGPNDGUPhQwVBgvixMWoIQor7+gZTO+K6mVAB0BCRQAITIqJosEKpMGhBsnBha+kZChPgaLHDiAAp+wmjsYZnudgLAXEyqFACyggAW2c2t7dRQADxQAAzZAKxUmGLYFPNtnd0Z9sA5UrLCS3RQ9RpGcAA2ENlPiBQARBPSMp9UHCgECeRmguz2BxaRy6QlOWVyRGI1yoKFodwaz1e7zMnwA6nBVP8VBgxhRjKZIQtjucdqIxId2jCESQlt4YDJoMA4BFpiETO5pvh6JUkOFBcKNKKoMkAkFwJzBUJQuFPpFotU4glPlAAO7QYgaOA6nmCHnQT4M6na5VuJCA4GgkR7aVQxl+bKXGTUNkciLc4C8lzWcUisJQEOSsMy1KRAOmm2q+VRGKa4AQbV6qAGo0moQB82WmHW1zhYZQDhAA"},"Link to sandbox environment")))}u.isMDXComponent=!0},5043:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/type_predicate-ee893e26f36d7e83584272644d7e7ea8.png"}}]);