"use strict";(self.webpackChunkdocusaurus_public_api=self.webpackChunkdocusaurus_public_api||[]).push([[4],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=l(n),m=i,g=c["".concat(p,".").concat(m)]||c[m]||u[m]||s;return n?a.createElement(g,r(r({ref:t},d),{},{components:n})):a.createElement(g,r({ref:t},d))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,r=new Array(s);r[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:i,r[1]=o;for(var l=2;l<s;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3158:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var a=n(7462),i=(n(7294),n(3905));const s={sidebar_position:56,title:"Tipos de despacho",description:"Listar tipos de despacho",slug:"/tipos-de-despacho"},r="Tipos de despacho",o={unversionedId:"Configuraci\xf3n/Tipos de despacho",id:"version-MX/Configuraci\xf3n/Tipos de despacho",title:"Tipos de despacho",description:"Listar tipos de despacho",source:"@site/versioned_docs/version-MX/Configuraci\xf3n/Tipos de despacho.md",sourceDirName:"Configuraci\xf3n",slug:"/tipos-de-despacho",permalink:"/docusaurus-public-api/MX/tipos-de-despacho",draft:!1,tags:[],version:"MX",sidebarPosition:56,frontMatter:{sidebar_position:56,title:"Tipos de despacho",description:"Listar tipos de despacho",slug:"/tipos-de-despacho"},sidebar:"tutorialSidebar",previous:{title:"Tipos de documentos",permalink:"/docusaurus-public-api/MX/tipos-de-documentos"},next:{title:"Formas de pago",permalink:"/docusaurus-public-api/MX/formas-de-pago"}},p={},l=[{value:"Estructura JSON",id:"estructura-json",level:2},{value:"Atributos",id:"atributos",level:3},{value:"GET lista de Tipos de despacho",id:"get-lista-de-tipos-de-despacho",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:4},{value:"Ejemplos",id:"ejemplos",level:4},{value:"GET un tipo de despacho",id:"get-un-tipo-de-despacho",level:2}],d={toc:l},c="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"tipos-de-despacho"},"Tipos de despacho"),(0,i.kt)("p",null,"Listar tipos de despacho en la generaci\xf3n de un documento despacho."),(0,i.kt)("h2",{id:"estructura-json"},"Estructura JSON"),(0,i.kt)("p",null,"Al realizar una petici\xf3n ",(0,i.kt)("inlineCode",{parentName:"p"},"HTTP"),", el servicio retornara un JSON con la siguiente estructura:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Response /shipping_types/6.json"',title:'"Response','/shipping_types/6.json"':!0},'{\n  "href": "https://api.bsale.io/v1/shipping_types/6.json",\n  "id": 6,\n  "name": "Otros traslados no venta",\n  "codeSii": 6,\n  "useDestinationOffice": 0,\n  "state": 0\n}\n')),(0,i.kt)("h3",{id:"atributos"},"Atributos"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Atributo"),(0,i.kt)("th",{parentName:"tr",align:null},"Descripci\xf3n"),(0,i.kt)("th",{parentName:"tr",align:null},"Tipo dato"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"href")),(0,i.kt)("td",{parentName:"tr",align:null},"url del Tipos de despacho"),(0,i.kt)("td",{parentName:"tr",align:null},"String")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"id")),(0,i.kt)("td",{parentName:"tr",align:null},"identificador \xfanico del Tipos de despacho"),(0,i.kt)("td",{parentName:"tr",align:null},"Integer")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"name")),(0,i.kt)("td",{parentName:"tr",align:null},"nombre del tipo de despacho"),(0,i.kt)("td",{parentName:"tr",align:null},"String")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"codeSii")),(0,i.kt)("td",{parentName:"tr",align:null},"c\xf3digo sii del tipo de despacho"),(0,i.kt)("td",{parentName:"tr",align:null},"String")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"useDestinationOffice")),(0,i.kt)("td",{parentName:"tr",align:null},"indica si el tipo de despacho requiere una sucursal de destino No(0) o Si (1)"),(0,i.kt)("td",{parentName:"tr",align:null},"Boolean")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"state")),(0,i.kt)("td",{parentName:"tr",align:null},"estado del tipo de despacho activo(0) o inactivo (1)"),(0,i.kt)("td",{parentName:"tr",align:null},"Boolean")))),(0,i.kt)("h2",{id:"get-lista-de-tipos-de-despacho"},"GET lista de Tipos de despacho"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"GET ",(0,i.kt)("inlineCode",{parentName:"li"},"/v1/shipping_types.json")," retornar\xe1 todos los Tipos de despacho.")),(0,i.kt)("h4",{id:"par\xe1metros"},"Par\xe1metros"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"limit"),", limita la cantidad de items de una respuesta JSON, por defecto el limit es 25, el m\xe1ximo permitido es 50."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"offset"),", permite paginar los items de una respuesta JSON, por defecto el offset es 0."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"fields"),", solo devolver atributos espec\xedficos de un recurso"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"expand"),", permite expandir instancias y colecciones para traer relaciones en una sola petici\xf3n."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"name"),", Permite filtrar por nombre tipo libro."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"codesii"),", filtra por el c\xf3digo tributario del tipo de despacho."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"state"),", boolean (0 o 1) indica si los tipos de libro est\xe1n activos(0) inactivos(1).")),(0,i.kt)("h4",{id:"ejemplos"},"Ejemplos"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GET /v1/shipping_types.json?limit=10&offset=0")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GET /v1/book_types.json?fields=[name,codesii,state]"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response /shipping_types.json "',title:'"Response',"/shipping_types.json":!0,'"':!0},'{\n  "href": "https://api.bsale.io/v1/shipping_types.json",\n  "count": 9,\n  "limit": 25,\n  "offset": 0,\n  "items": [\n    {\n      "href": "https://api.bsale.io/v1/shipping_types/3.json",\n      "id": 3,\n      "name": "Consignaciones",\n      "codeSii": 3,\n      "useDestinationOffice": 0,\n      "state": 0\n    },\n    {\n      "href": "https://api.bsale.io/v1/shipping_types/4.json",\n      "id": 4,\n      "name": "Entrega gratuita",\n      "codeSii": 4,\n      "useDestinationOffice": 0,\n      "state": 0\n    },\n    {\n      "href": "https://api.bsale.io/v1/shipping_types/7.json",\n      "id": 7,\n      "name": "Gu\xeda de devoluci\xf3n",\n      "codeSii": 7,\n      "useDestinationOffice": 0,\n      "state": 0\n    },\n    {\n      "href": "https://api.bsale.io/v1/shipping_types/1.json",\n      "id": 1,\n      "name": "Operaci\xf3n constituye venta",\n      "codeSii": 1,\n      "useDestinationOffice": 0,\n      "state": 0\n    },\n    {\n      "href": "https://api.bsale.io/v1/shipping_types/6.json",\n      "id": 6,\n      "name": "Otros traslados no venta",\n      "codeSii": 6,\n      "useDestinationOffice": 0,\n      "state": 0\n    },\n    {\n      "href": "https://api.bsale.io/v1/shipping_types/5.json",\n      "id": 5,\n      "name": "Traslados internos",\n      "codeSii": 5,\n      "useDestinationOffice": 1,\n      "state": 0\n    },\n    {\n      "href": "https://api.bsale.io/v1/shipping_types/8.json",\n      "id": 8,\n      "name": "Traslado para exportaci\xf3n. (no venta)",\n      "codeSii": 8,\n      "useDestinationOffice": 0,\n      "state": 0\n    },\n    {\n      "href": "https://api.bsale.io/v1/shipping_types/2.json",\n      "id": 2,\n      "name": "Ventas por efectuar",\n      "codeSii": 2,\n      "useDestinationOffice": 0,\n      "state": 0\n    },\n    {\n      "href": "https://api.bsale.io/v1/shipping_types/9.json",\n      "id": 9,\n      "name": "Venta para exportaci\xf3n",\n      "codeSii": 9,\n      "useDestinationOffice": 0,\n      "state": 0\n    }\n  ]\n}\n')),(0,i.kt)("h2",{id:"get-un-tipo-de-despacho"},"GET un tipo de despacho"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"GET ",(0,i.kt)("inlineCode",{parentName:"li"},"/v1/shipping_types/6.json")," retornar\xe1 un tipo de despacho espec\xedfico.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response /shipping_types/6.json"',title:'"Response','/shipping_types/6.json"':!0},'{\n  "href": "https://api.bsale.io/v1/shipping_types/6.json",\n  "id": 6,\n  "name": "Otros traslados no venta",\n  "codeSii": 6,\n  "useDestinationOffice": 0,\n  "state": 0\n}\n')))}u.isMDXComponent=!0}}]);