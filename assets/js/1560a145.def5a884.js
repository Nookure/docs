"use strict";(self.webpackChunknookure_docs=self.webpackChunknookure_docs||[]).push([[5417],{3905:(e,t,n)=>{n.d(t,{Zo:()=>f,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},f=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,f=s(e,["components","mdxType","originalType","parentName"]),c=u(n),p=r,g=c["".concat(l,".").concat(p)]||c[p]||d[p]||o;return n?a.createElement(g,i(i({ref:t},f),{},{components:n})):a.createElement(g,i({ref:t},f))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1765:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:2},i="Config",s={unversionedId:"MAStaff/config",id:"MAStaff/config",title:"Config",description:"Language",source:"@site/docs/MAStaff/config.md",sourceDirName:"MAStaff",slug:"/MAStaff/config",permalink:"/docs/MAStaff/config",draft:!1,editUrl:"https://github.com/nookure/docs/tree/master/docs/MAStaff/config.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Let's get started",permalink:"/docs/MAStaff/intro"},next:{title:"Databases",permalink:"/docs/MAStaff/database"}},l={},u=[{value:"Language",id:"language",level:3},{value:"Debug",id:"debug",level:3},{value:"Database",id:"database",level:3}],f={toc:u};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"config"},"Config"),(0,r.kt)("h3",{id:"language"},"Language"),(0,r.kt)("p",null,"Here you can change the language file, the file must to be storage in the lang folder"),(0,r.kt)("h3",{id:"debug"},"Debug"),(0,r.kt)("p",null,"Here you can enable or disable the debug mode\nThis is only util if you have a bug or a problem"),(0,r.kt)("h3",{id:"database"},"Database"),(0,r.kt)("p",null,"see ",(0,r.kt)("a",{parentName:"p",href:"database"},"database")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Config file"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-config"},"#\n#  \u2588\u2588\u2588\u2584 \u2584\u2588\u2588\u2588\u2593 \u2584\u2584\u2584        \u2588\u2588\u2588\u2588\u2588\u2588 \u2584\u2584\u2584\u2588\u2588\u2588\u2588\u2588\u2593 \u2584\u2584\u2584        \u2588\u2588\u2588\u2588\u2588\u2592 \u2588\u2588\u2588\u2588\u2588\u2592\n#  \u2593\u2588\u2588\u2592\u2580\u2588\u2580 \u2588\u2588\u2592\u2592\u2588\u2588\u2588\u2588\u2584    \u2592\u2588\u2588    \u2592 \u2593  \u2588\u2588\u2592 \u2593\u2592\u2592\u2588\u2588\u2588\u2588\u2584    \u2593\u2588\u2588   \u2592\u2593\u2588\u2588   \u2592\n#  \u2593\u2588\u2588    \u2593\u2588\u2588\u2591\u2592\u2588\u2588  \u2580\u2588\u2584  \u2591 \u2593\u2588\u2588\u2584   \u2592 \u2593\u2588\u2588\u2591 \u2592\u2591\u2592\u2588\u2588  \u2580\u2588\u2584  \u2592\u2588\u2588\u2588\u2588 \u2591\u2592\u2588\u2588\u2588\u2588 \u2591\n#  \u2592\u2588\u2588    \u2592\u2588\u2588 \u2591\u2588\u2588\u2584\u2584\u2584\u2584\u2588\u2588   \u2592   \u2588\u2588\u2592\u2591 \u2593\u2588\u2588\u2593 \u2591 \u2591\u2588\u2588\u2584\u2584\u2584\u2584\u2588\u2588 \u2591\u2593\u2588\u2592  \u2591\u2591\u2593\u2588\u2592  \u2591\n#  \u2592\u2588\u2588\u2592   \u2591\u2588\u2588\u2592 \u2593\u2588   \u2593\u2588\u2588\u2592\u2592\u2588\u2588\u2588\u2588\u2588\u2588\u2592\u2592  \u2592\u2588\u2588\u2592 \u2591  \u2593\u2588   \u2593\u2588\u2588\u2592\u2591\u2592\u2588\u2591   \u2591\u2592\u2588\u2591\n#  \u2591 \u2592\u2591   \u2591  \u2591 \u2592\u2592   \u2593\u2592\u2588\u2591\u2592 \u2592\u2593\u2592 \u2592 \u2591  \u2592 \u2591\u2591    \u2592\u2592   \u2593\u2592\u2588\u2591 \u2592 \u2591    \u2592 \u2591\n#  \u2591  \u2591      \u2591  \u2592   \u2592\u2592 \u2591\u2591 \u2591\u2592  \u2591 \u2591    \u2591      \u2592   \u2592\u2592 \u2591 \u2591      \u2591\n#  \u2591      \u2591     \u2591   \u2592   \u2591  \u2591  \u2591    \u2591        \u2591   \u2592    \u2591 \u2591    \u2591 \u2591\n#  \u2591         \u2591  \u2591      \u2591                 \u2591  \u2591\n#\n# This is the Config file for MAStaff Spigot,\n# where you can modify and customize the plugin.\n#\n# Remember to join my Discord server if you need help:\n# https://discord.nookure.com/\n#\n# General configuration for the plugin.\n#\nConfig:\n  # The language file you want to use for the plugin messages.\n  # Included locales: english.yml and spanish.yml\n  language: \"english.yml\"\n  # Enable or disable the debug mode.\n  # If enabled, the plugin will send more information about the plugin status.\n  debug: false\n# Database configuration for the plugin. With the Bungee version, you must use MariaDB or MySQL.\nDatabase:\n  # The type of database you want to use, you can choose between SQLite or MySQL.\n  # The MySQL driver also works with MariaDB\n  type: 'SQLite'\n  # Your database host IP address.\n  host: '127.0.0.1'\n  # Your database host connection port. Default for MariaDB and MySQL is 3306.\n  port: 3306\n  # Name of your database. A database server can contain multiple databases.\n  database: 'mastaff'\n  # Your database host username.\n  user: 'mastaff'\n  # Your database host password.\n  password: 'mastaff'\n\n"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If you modify something remeber to reload the plugin with ",(0,r.kt)("strong",{parentName:"li"},"/mast reload"))))}c.isMDXComponent=!0}}]);