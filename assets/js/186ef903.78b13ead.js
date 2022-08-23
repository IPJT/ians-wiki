"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1714],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(r),y=a,m=d["".concat(c,".").concat(y)]||d[y]||u[y]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8128:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:1},i="Objects",s={unversionedId:"Javascript/Object",id:"Javascript/Object",title:"Objects",description:"Property identifier",source:"@site/docs/Javascript/Object.md",sourceDirName:"Javascript",slug:"/Javascript/Object",permalink:"/ians-wiki/docs/Javascript/Object",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Javascript/Object.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Arrays",permalink:"/ians-wiki/docs/Javascript/Arrays"},next:{title:"Git",permalink:"/ians-wiki/docs/category/git"}},c={},l=[{value:"Property identifier",id:"property-identifier",level:2},{value:"Computed property names",id:"computed-property-names",level:2},{value:"Shorthand property names",id:"shorthand-property-names",level:2}],p={toc:l};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"objects"},"Objects"),(0,a.kt)("h2",{id:"property-identifier"},"Property identifier"),(0,a.kt)("p",null,"In JavaScript, objects can be seen as a collection of properties. Proerties are identified using key values. A key value is either a String value or a Symbol value.\nThe code below shows how an object can be created using the object initializer syntax with different ways to declare property names."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const a = "city";\nconst b = "Sweden";\n\nconst exampleObject = {\n  firstName: "Ian", //key is valid JS identifier - will evaluate as sting\n  lastName: "Thorslund", //key is a string\n  ["age"]: 1, //key is a string\n  [a]: "Stockholm", //a will evaluate as "city" at runtime\n  [Symbol.for("country")]: b, //key value is a Symbol value. Note that the value should not be enclosed in brackets to be computed and evaluated as "Sweden"\n};\n\nconsole.log(Object.getOwnPropertyNames(testObject)); // ["firstName", "lastName", "age", "city"] in which the typeof of each entry is"string"\nconsole.log(Object.getOwnPropertySymbols(testObject)); // [Symbol(country)] in which the typeof of the entry is "symbol"\n')),(0,a.kt)("p",null,"As seen above each property in the created object is identified using a key value that is either a String value or a Symbol value."),(0,a.kt)("h2",{id:"computed-property-names"},"Computed property names"),(0,a.kt)("p",null,"Allows you to put an expression in brackets [], that will be computed and used as the property name."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'var a = "b";\nvar c = { [a]: "d" }; //object initializer syntax\n')),(0,a.kt)("p",null,"is equivalent to:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'var a = "b";\nvar c = {};\nc[a] = "d"; //property accessor syntax\n')),(0,a.kt)("h2",{id:"shorthand-property-names"},"Shorthand property names"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'var s = "abc";\nvar n = 1;\nvar o = { s, n }; // This is equivalent to { s: s, n: n }\n')))}u.isMDXComponent=!0}}]);