"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[740],{3905:function(e,t,o){o.d(t,{Zo:function(){return u},kt:function(){return f}});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(o),f=r,h=p["".concat(c,".").concat(f)]||p[f]||d[f]||a;return o?n.createElement(h,i(i({ref:t},u),{},{components:o})):n.createElement(h,i({ref:t},u))}));function f(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=o[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"},7108:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var n=o(7462),r=o(3366),a=(o(7294),o(3905)),i=["components"],s={sidebar_position:1},c="Get started",l={unversionedId:"tutorial-module-bridge/get-started",id:"tutorial-module-bridge/get-started",isDocsHomePage:!1,title:"Get started",description:"About the Zodiac Bridge Module",source:"@site/docs/tutorial-module-bridge/get-started.md",sourceDirName:"tutorial-module-bridge",slug:"/tutorial-module-bridge/get-started",permalink:"/zodiac/docs/tutorial-module-bridge/get-started",editUrl:"https://github.com/gnosis/zodiac/edit/master/website/docs/tutorial-module-bridge/get-started.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Zodiac Introduction",permalink:"/zodiac/docs/intro"},next:{title:"Finalize parameters",permalink:"/zodiac/docs/tutorial-module-bridge/finalize-parameters"}},u=[{value:"About the Zodiac Bridge Module",id:"about-the-zodiac-bridge-module",children:[]},{value:"Setup a Gnosis Safe",id:"setup-a-gnosis-safe",children:[]},{value:"Navigate to the Zodiac App",id:"navigate-to-the-zodiac-app",children:[]}],d={toc:u};function p(e){var t=e.components,s=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"get-started"},"Get started"),(0,a.kt)("h2",{id:"about-the-zodiac-bridge-module"},"About the Zodiac Bridge Module"),(0,a.kt)("p",null,"This module allows an address on one chain to control an avatar on another chain using an Arbitrary Message Bridge (AMB). This enables a DAO on one chain to control assets and interact with systems like a Gnosis Safe on a different chain."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/gnosis/zodiac-module-bridge"},"Read more here"),". For a more technical guide on how to use the Bridge Module beyond the Zodiac App interface, see the Github repo ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/gnosis/zodiac-module-bridge/blob/main/docs/setup_guide.md"},"Setup Guide"),"."),(0,a.kt)("h2",{id:"setup-a-gnosis-safe"},"Setup a Gnosis Safe"),(0,a.kt)("p",null,"If you've already set up a Gnosis Safe you'd like to use for this tutorial, skip to the next step below."),(0,a.kt)("p",null,"If not, check out the Gnosis Safe Help Center. The ",(0,a.kt)("a",{parentName:"p",href:"https://help.gnosis-safe.io/en/articles/3876461-create-a-safe"},"Create a Safe")," tutorial will walk you through the full process of creating a new Gnosis Safe account in just 60 seconds."),(0,a.kt)("p",null,"Note that for the purposes of this tutorial, we'll be using a Gnosis Safe deployed on the Rinkeby testnetwork. You can create a Gnosis Safe on Rinkeby at ",(0,a.kt)("a",{parentName:"p",href:"http://rinkeby.gnosis-safe.io/"},"http://rinkeby.gnosis-safe.io"),"."),(0,a.kt)("h2",{id:"navigate-to-the-zodiac-app"},"Navigate to the Zodiac App"),(0,a.kt)("p",null,"On your Gnosis Safe's left menu, click the ",(0,a.kt)("inlineCode",{parentName:"p"},"APPS")," option. Here you'll find apps available through Gnosis Safe. Scroll to the end of this list, and you'll find the Zodiac App."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Zodiac App in Safe Apps",src:o(3299).Z})),(0,a.kt)("p",null,"Once entering the Zodiac App, you'll see the current Zodiac compliant collection of tools that have a Zodiac App interface."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Zodiac App",src:o(6505).Z})))}p.isMDXComponent=!0},3299:function(e,t,o){t.Z=o.p+"assets/images/zodiac_app-be2d9b813bff8ee907089dd2955a291e.png"},6505:function(e,t,o){t.Z=o.p+"assets/images/zodiac_app_2-179e6a5cbc4fdb84aed095f0c2e05483.png"}}]);