"use strict";(self.webpackChunkdocusaurus_public_api=self.webpackChunkdocusaurus_public_api||[]).push([[9783],{3905:(e,n,o)=>{o.d(n,{Zo:()=>l,kt:()=>m});var t=o(7294);function a(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function r(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function i(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?r(Object(o),!0).forEach((function(n){a(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function s(e,n){if(null==e)return{};var o,t,a=function(e,n){if(null==e)return{};var o,t,a={},r=Object.keys(e);for(t=0;t<r.length;t++)o=r[t],n.indexOf(o)>=0||(a[o]=e[o]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)o=r[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var c=t.createContext({}),p=function(e){var n=t.useContext(c),o=n;return e&&(o="function"==typeof e?e(n):i(i({},n),e)),o},l=function(e){var n=p(e.components);return t.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var o=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(o),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||r;return o?t.createElement(f,i(i({ref:n},l),{},{components:o})):t.createElement(f,i({ref:n},l))}));function m(e,n){var o=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<r;p++)i[p]=o[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,o)}d.displayName="MDXCreateElement"},9216:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var t=o(7462),a=(o(7294),o(3905));const r={sidebar_position:59,title:"Webhooks",description:"Servicio de notificaciones de pagos",slug:"/formas-de-pago/webhooks",tags:["webhooks"]},i="Webhooks pagos (BETA)",s={unversionedId:"Configuraci\xf3n/Formas de pago/Webhooks relacionado",id:"version-PE/Configuraci\xf3n/Formas de pago/Webhooks relacionado",title:"Webhooks",description:"Servicio de notificaciones de pagos",source:"@site/versioned_docs/version-PE/Configuraci\xf3n/Formas de pago/Webhooks relacionado.md",sourceDirName:"Configuraci\xf3n/Formas de pago",slug:"/formas-de-pago/webhooks",permalink:"/docusaurus-public-api/PE/formas-de-pago/webhooks",draft:!1,tags:[{label:"webhooks",permalink:"/docusaurus-public-api/PE/tags/webhooks"}],version:"PE",sidebarPosition:59,frontMatter:{sidebar_position:59,title:"Webhooks",description:"Servicio de notificaciones de pagos",slug:"/formas-de-pago/webhooks",tags:["webhooks"]},sidebar:"tutorialSidebar",previous:{title:"Condici\xf3n de venta",permalink:"/docusaurus-public-api/PE/condicion-de-venta"},next:{title:"Webhooks",permalink:"/docusaurus-public-api/PE/configuracion/webhooks"}},c={},p=[{value:"Notificaci\xf3n productos",id:"notificaci\xf3n-productos",level:2},{value:"Esructura JSON",id:"esructura-json",level:3},{value:"Par\xe1metros",id:"par\xe1metros",level:3}],l={toc:p};function u(e){let{components:n,...o}=e;return(0,a.kt)("wrapper",(0,t.Z)({},l,o,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"webhooks-pagos-beta"},"Webhooks pagos (BETA)"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Para consumir los recursos notificados, se debe usar ",(0,a.kt)("inlineCode",{parentName:"p"},"https://api.bsale.io")," como ",(0,a.kt)("strong",{parentName:"p"},"url base"))),(0,a.kt)("h2",{id:"notificaci\xf3n-productos"},"Notificaci\xf3n productos"),(0,a.kt)("h3",{id:"esructura-json"},"Esructura JSON"),(0,a.kt)("p",null,"Cada vez que en Bsale se ejecuta una acci\xf3n sobre la informaci\xf3n asociada a un pago, recibir\xe1s una notificaci\xf3n. En el caso en el que se cree un pago o se elimine recibir\xe1s el siguiente ",(0,a.kt)("inlineCode",{parentName:"p"},"JSON")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "cpnId": 8849,\n  "resource": "/v1/payments/3229.json",\n  "resourceId": "3229",\n  "topic": "payment",\n  "action": "post",\n  "send": 1646914861\n}\n')),(0,a.kt)("p",null,"En el caso que en bsale se haga una actualizaci\xf3n de la informaci\xf3n de un pago, recibir\xe1s:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "cpnId": 8849,\n  "resource": "/v1/payments/3223.json",\n  "resourceId": "3223",\n  "topic": "payment",\n  "action": "put",\n  "send": 1647012534\n}\n')),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Es importante que tengas presente que no existir\xe1n notificaciones asociadas a acciones del tipo ",(0,a.kt)("inlineCode",{parentName:"p"},"DELETE")," ya que Bsale entiende como edici\xf3n del pago, proceso que es informado mediante una notificaci\xf3n ",(0,a.kt)("inlineCode",{parentName:"p"},"PUT"),".")),(0,a.kt)("h3",{id:"par\xe1metros"},"Par\xe1metros"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"cpnId"),", Identificador de la instancia en la cual se gener\xf3 la acci\xf3n (Empresa)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"resource"),", Indicar\xe1 donde puedes obtener el detalle del recurso que se notific\xf3"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"resourceId"),", Identificador \xfanico de producto"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"topic"),", Informaci\xf3n respecto del tipo de recurso modificado, en este caso un ",(0,a.kt)("inlineCode",{parentName:"li"},"payment"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"action"),", Identifica el tipo de acci\xf3n en este caso son posible s\xf3lo acciones ",(0,a.kt)("inlineCode",{parentName:"li"},"POST")," y ",(0,a.kt)("inlineCode",{parentName:"li"},"PUT"))))}u.isMDXComponent=!0}}]);