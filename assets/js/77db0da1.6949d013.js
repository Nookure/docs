"use strict";(self.webpackChunknookure_docs=self.webpackChunknookure_docs||[]).push([[2849],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>f});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function m(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var i=n.createContext({}),s=function(t){var e=n.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},u=function(t){var e=s(t.components);return n.createElement(i.Provider,{value:e},t.children)},p="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,i=t.parentName,u=m(t,["components","mdxType","originalType","parentName"]),p=s(a),c=r,f=p["".concat(i,".").concat(c)]||p[c]||d[c]||o;return a?n.createElement(f,l(l({ref:e},u),{},{components:a})):n.createElement(f,l({ref:e},u))}));function f(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,l=new Array(o);l[0]=c;var m={};for(var i in e)hasOwnProperty.call(e,i)&&(m[i]=e[i]);m.originalType=t,m[p]="string"==typeof t?t:r,l[1]=m;for(var s=2;s<o;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},3099:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>m,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_position:2},l="Custom Items",m={unversionedId:"MAStaff/modules/items/custom",id:"MAStaff/modules/items/custom",title:"Custom Items",description:"Here you can add custom items to the game.",source:"@site/docs/MAStaff/modules/items/custom.md",sourceDirName:"MAStaff/modules/items",slug:"/MAStaff/modules/items/custom",permalink:"/docs/MAStaff/modules/items/custom",draft:!1,editUrl:"https://github.com/nookure/docs/tree/master/docs/MAStaff/modules/items/custom.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Internal Items",permalink:"/docs/MAStaff/modules/items/internal"},next:{title:"Glow",permalink:"/docs/MAStaff/modules/glow"}},i={},s=[{value:"Params",id:"params",level:3}],u={toc:s};function p(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"custom-items"},"Custom Items"),(0,r.kt)("p",null,"Here you can add custom items to the game.\nYou can add as many items as you want."),(0,r.kt)("p",null,"Remember to join my Discord server if you need help:\n",(0,r.kt)("a",{parentName:"p",href:"https://discord.nookure.com/"},"https://discord.nookure.com/")),(0,r.kt)("h3",{id:"params"},"Params"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Explanation"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"enabled"),(0,r.kt)("td",{parentName:"tr",align:null},"enable/disable the item")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"permission"),(0,r.kt)("td",{parentName:"tr",align:null},"The permission that must have the player to get the item")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"The item name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"material"),(0,r.kt)("td",{parentName:"tr",align:null},"The material of the item see: ",(0,r.kt)("a",{parentName:"td",href:"https://javadocs.angelillo15.es/javadocs/mastaff/es/angelillo15/mast/api/material/XMaterial.html"},"javadoc material enum"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"slot"),(0,r.kt)("td",{parentName:"tr",align:null},"The slot to put the item")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lore"),(0,r.kt)("td",{parentName:"tr",align:null},"the item lore that will have the item")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"type"),(0,r.kt)("td",{parentName:"tr",align:null},"The item type (COMMAND or COMMAND_TARGET)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"command"),(0,r.kt)("td",{parentName:"tr",align:null},"The command to execute use {player} placeholder to get player name and {target} to get target name if the type is COMMAND_TARGET")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Config file"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"#\n# Here you can add custom items to the game.\n# You can add as many items as you want.\n#\n# Remember to join my Discord server if you need help:\n# https://discord.nookure.com/\n#\nStaffItems:\n  staffList:\n    enabled: true\n    permission: 'mast.item.stafflist'\n    name: '&bStaff List'\n    type: 'COMMAND'\n    command: 'staff staffList'\n    material: 'CLOCK'\n    slot: 7\n    lore:\n      - '&7Click to open the'\n      - '&7staff list.'\n  banTarget:\n    enabled: true\n    permission: 'mast.item.kick'\n    name: '&bKick Target'\n    type: 'COMMAND_TARGET'\n    command: 'kick {target} kicked by {player}'\n    material: 'REDSTONE_BLOCK'\n    slot: 2\n    lore:\n      - '&7Click to ban the'\n      - '&7player you are looking at.'\n"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If you modify something remeber to reload the plugin with ",(0,r.kt)("strong",{parentName:"li"},"/mast reload"))))}p.isMDXComponent=!0}}]);