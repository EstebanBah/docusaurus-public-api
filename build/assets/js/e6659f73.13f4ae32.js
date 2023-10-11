"use strict";(self.webpackChunkdocusaurus_public_api=self.webpackChunkdocusaurus_public_api||[]).push([[1479],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>k});var n=t(7294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),l=function(e){var a=n.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},p=function(e){var a=l(e.components);return n.createElement(c.Provider,{value:a},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(t),m=o,k=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return t?n.createElement(k,r(r({ref:a},p),{},{components:t})):n.createElement(k,r({ref:a},p))}));function k(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=m;var s={};for(var c in a)hasOwnProperty.call(a,c)&&(s[c]=a[c]);s.originalType=e,s[u]="string"==typeof e?e:o,r[1]=s;for(var l=2;l<i;l++)r[l]=t[l];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},354:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=t(7462),o=(t(7294),t(3905));const i={title:"Webhooks",description:"Servicio de notificaciones mediante eventos",slug:"/webhooks"},r=void 0,s={unversionedId:"webhooks",id:"version-CL/webhooks",title:"Webhooks",description:"Servicio de notificaciones mediante eventos",source:"@site/versioned_docs/version-CL/webhooks.md",sourceDirName:".",slug:"/webhooks",permalink:"/docusaurus-public-api/CL/webhooks",draft:!1,tags:[],version:"CL",frontMatter:{title:"Webhooks",description:"Servicio de notificaciones mediante eventos",slug:"/webhooks"},sidebar:"tutorialSidebar",previous:{title:"Env\xedos",permalink:"/docusaurus-public-api/CL/env\xedos"}},c={},l=[{value:"Convenciones utilizadas",id:"convenciones-utilizadas",level:3},{value:"Estructura de notificaciones",id:"estructura-de-notificaciones",level:2},{value:"Webhooks disponibles",id:"webhooks-disponibles",level:2},{value:"Solicitar activaci\xf3n",id:"solicitar-activaci\xf3n",level:2}],p={toc:l},u="wrapper";function d(e){let{components:a,...t}=e;return(0,o.kt)(u,(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"bsale-webkooks"},"Bsale webkooks"),(0,o.kt)("p",null,"El equipo de Bsale ha puesto a disposici\xf3n de la comunidad de desarrolladores un conjunto de notificaciones o Webhooks, la cual permite que puedas estar informado cuando en Bsale se ejecuten determinadas acciones, como la ",(0,o.kt)("strong",{parentName:"p"},"creaci\xf3n de un documento"),", la ",(0,o.kt)("strong",{parentName:"p"},"creaci\xf3n de un producto"),", la ",(0,o.kt)("strong",{parentName:"p"},"actualizaci\xf3n del stock"),", ",(0,o.kt)("strong",{parentName:"p"},"sus precios"),' etc. Esto evitar\xe1 que tengas que estar preguntando cada cierto tiempo si algo ha cambiado en Bsale. Estas notificaciones o "callback\xb4s", son informadas mediante webhooks o tambi\xe9n conocidos como ',(0,o.kt)("inlineCode",{parentName:"p"},"user-defined HTTP callbacks"),", a mediante un ",(0,o.kt)("inlineCode",{parentName:"p"},"POST")," a una URL que configures para ello. De esta manera por ejemplo cada vez que en Bsale se cree un nuevo documento, te avisaremos mediante una llamada ",(0,o.kt)("inlineCode",{parentName:"p"},"POST")," a la URL que definiste, con una estructura ",(0,o.kt)("inlineCode",{parentName:"p"},"JSON")," que contiene la informaci\xf3n que te permitir\xe1 obtener el documento creado."),(0,o.kt)("p",null,"Con los datos enviados en el estructura JSON podr\xe1s llamar a nuestra API."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"Url base")," para consumir las respuestas\n",(0,o.kt)("a",{parentName:"p",href:"https://api.bsale.io"},"https://api.bsale.io"))),(0,o.kt)("h3",{id:"convenciones-utilizadas"},"Convenciones utilizadas"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Se solicita que la notificaci\xf3n POS sea sobre SSL."),(0,o.kt)("li",{parentName:"ul"},"Se usan sustantivos, no verbos."),(0,o.kt)("li",{parentName:"ul"},'Se utiliza dos urls base por recurso "/clients.json", "clients/1.json"'),(0,o.kt)("li",{parentName:"ul"},"Siempre se usa el nombre del recurso en plural."),(0,o.kt)("li",{parentName:"ul"},"Se env\xeda la url del recurso."),(0,o.kt)("li",{parentName:"ul"},"Manejo de versiones en la url."),(0,o.kt)("li",{parentName:"ul"},"Las fechas se trabaja como enteros, por ejemplo 1388545200 corresponde a la fecha 2014-01-01, la conversi\xf3n es realizada utilizando el ","[Tiempo Unix]",".")),(0,o.kt)("h2",{id:"estructura-de-notificaciones"},"Estructura de notificaciones"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"cpnId")," Identificador \xfanico de la instancia (",(0,o.kt)("em",{parentName:"li"},"Empresa"),") en la cual se gener\xf3 la acci\xf3n. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"resource")," Endpoint donde podr\xe1s leer el recurso modificado."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"resourceId")," Identificador \xfanico del recurso modificado."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"topic")," Informaci\xf3n respecto del tipo de recurso modificado (",(0,o.kt)("em",{parentName:"li"},"Documentos, Productos, variantes, stock, precios"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"action")," Acci\xf3n ejecutada sobre el recurso. Para ello se utiliza RESTful como est\xe1ndar (",(0,o.kt)("inlineCode",{parentName:"li"},"POST"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"PUT")," o ",(0,o.kt)("inlineCode",{parentName:"li"},"DELETE"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"send")," fecha en formato de entero (",(0,o.kt)("inlineCode",{parentName:"li"},"UNIX"),")")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Algunas notificaciones contendr\xe1n estructuras JSON con campos extras como por ejemplo ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"officeId")),", en el caso de creaci\xf3n de documentos.")),(0,o.kt)("h2",{id:"webhooks-disponibles"},"Webhooks disponibles"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"configuracion/webhooks",title:"ir a referencia"},"Obtener datos de instancia")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"documentos/webhooks",title:"ir a referencia"},"Webhooks de documentos")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"productos-y-servicios/webhooks#notificaci%C3%B3n-productos",title:"ir a referencia"},"Webhooks de productos")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"productos-y-servicios/webhooks#notificaci%C3%B3n-variantes",title:"ir a referencia"},"Webhooks de variantes")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"productos-y-servicios/webhooks#notificaci%C3%B3n-de-precios",title:"ir a referencia"},"Webhooks de precios")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"productos-y-servicios/webhooks#notificaci%C3%B3n-de-stock",title:"ir a referencia"},"Webhooks de cambios de stock")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"formas-de-pago/webhooks",title:"ir a referencia"},"Webhooks de documentos pagados"))),(0,o.kt)("h2",{id:"solicitar-activaci\xf3n"},"Solicitar activaci\xf3n"),(0,o.kt)("p",null,"Para solicitar la activaci\xf3n, puedes escribirnos a ",(0,o.kt)("a",{parentName:"p",href:"mailto:ayuda@bsale.app"},"ayuda@bsale.app")," indicandonos la URL y el rut o cpnId de empresa a activar."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Los webhooks que se indiquen como ",(0,o.kt)("strong",{parentName:"p"},"beta"),", deben ser solicitados a ",(0,o.kt)("a",{parentName:"p",href:"mailto:ayuda@bsale.app"},"ayuda@bsale.app")," su implementaci\xf3n")))}d.isMDXComponent=!0}}]);