"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[510],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},976:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:1},a="Misc Encountered Challenges",c={unversionedId:"Projects/ParkingTicketWarner/misc-encountered-challenges",id:"Projects/ParkingTicketWarner/misc-encountered-challenges",title:"Misc Encountered Challenges",description:"Executing an .exe (Windows executable) from a function app",source:"@site/docs/Projects/ParkingTicketWarner/misc-encountered-challenges.md",sourceDirName:"Projects/ParkingTicketWarner",slug:"/Projects/ParkingTicketWarner/misc-encountered-challenges",permalink:"/ians-wiki/docs/Projects/ParkingTicketWarner/misc-encountered-challenges",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Projects/ParkingTicketWarner/misc-encountered-challenges.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"projects",previous:{title:"About",permalink:"/ians-wiki/docs/Projects/HemnetScraper/About"},next:{title:"Development Ideas",permalink:"/ians-wiki/docs/Projects/ParkingTicketWarner/Ideas"}},s={},l=[{value:"Executing an .exe (Windows executable) from a function app",id:"executing-an-exe-windows-executable-from-a-function-app",level:2}],u={toc:l};function p(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"misc-encountered-challenges"},"Misc Encountered Challenges"),(0,o.kt)("h2",{id:"executing-an-exe-windows-executable-from-a-function-app"},"Executing an .exe (Windows executable) from a function app"),(0,o.kt)("p",null,"I didn't have any issues having the function execute the .exe when running it locally. However, when publishing the function to an Azure Function App I had trouble publishing the .exe itself and sucessfully referencing it from the code now running on the function app. Key was to make sure the executable was properly ",(0,o.kt)("a",{parentName:"p",href:"https://social.technet.microsoft.com/wiki/contents/articles/53248.visual-studio-copying-files-to-debug-or-release-folder.aspx"},"copied to the debug/release folder"),":"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Copyexe",src:n(7466).Z,width:"808",height:"491"}),"\n",(0,o.kt)("em",{parentName:"p"},"This file should not be manually updated. What is seen in the image is the result after updating the properties for the file suggested by the link above.")),(0,o.kt)("p",null,"The full solution can be found as the accepted answer to ",(0,o.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/46537758/including-a-file-when-i-publish-my-azure-function-in-visual-studio"},"this")," stackoverflow question."))}p.isMDXComponent=!0},7466:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/copyresources-bc634586394b3d1950341cbf376ec7b1.png"}}]);