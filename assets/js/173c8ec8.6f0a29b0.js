"use strict";(self.webpackChunkdocusaurus_public_api=self.webpackChunkdocusaurus_public_api||[]).push([[6105],{5680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>c});var a=n(6540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),g=p(n),d=r,c=g["".concat(s,".").concat(d)]||g[d]||m[d]||o;return n?a.createElement(c,l(l({ref:t},u),{},{components:n})):a.createElement(c,l({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[g]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8865:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(8168),r=(n(6540),n(5680));const o={sidebar_position:62,title:"Impuestos",description:"Listar Impuestos",slug:"/impuestos"},l="Impuestos",i={unversionedId:"Informaci\xf3n SUNAT/Impuestos",id:"version-PE/Informaci\xf3n SUNAT/Impuestos",title:"Impuestos",description:"Listar Impuestos",source:"@site/versioned_docs/version-PE/Informaci\xf3n SUNAT/Impuestos.md",sourceDirName:"Informaci\xf3n SUNAT",slug:"/impuestos",permalink:"/docusaurus-public-api/PE/impuestos",draft:!1,tags:[],version:"PE",sidebarPosition:62,frontMatter:{sidebar_position:62,title:"Impuestos",description:"Listar Impuestos",slug:"/impuestos"},sidebar:"tutorialSidebar",previous:{title:"C\xf3digos tributarios",permalink:"/docusaurus-public-api/PE/codigos-tributarios"},next:{title:"Pedidos web",permalink:"/docusaurus-public-api/PE/pedidos-web"}},s={},p=[{value:"Estructura JSON",id:"estructura-json",level:2},{value:"Atributos",id:"atributos",level:3},{value:"GET lista de Impuestos",id:"get-lista-de-impuestos",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:4},{value:"Ejemplos",id:"ejemplos",level:4},{value:"GET un impuesto",id:"get-un-impuesto",level:2},{value:"GET cantidad de Impuestos",id:"get-cantidad-de-impuestos",level:2}],u={toc:p},g="wrapper";function m(e){let{components:t,...n}=e;return(0,r.yg)(g,(0,a.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"impuestos"},"Impuestos"),(0,r.yg)("p",null,"Listar impuestos creados en Bsale. "),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("p",{parentName:"admonition"},"Para usar los impuestos creados, usar el nodo taxId o taxes en el env\xedo del documento.")),(0,r.yg)("h2",{id:"estructura-json"},"Estructura JSON"),(0,r.yg)("p",null,"Al realizar una petici\xf3n ",(0,r.yg)("inlineCode",{parentName:"p"},"HTTP"),", el servicio retornara un JSON con la siguiente estructura:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js",metastring:'title="Response /taxes/2.json"',title:'"Response','/taxes/2.json"':!0},'        {\n            "href": "https://api.bsale.io/v1/taxes/2.json",\n            "id": 2,\n            "name": "EXONERADO",\n            "percentage": 0.0,\n            "forAllProducts": 0,\n            "ledgerAccount": null,\n            "code": 9997,\n            "state": 0,\n            "overTax": 0,\n            "amountTax": 0\n        }\n')),(0,r.yg)("h3",{id:"atributos"},"Atributos"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Atributo"),(0,r.yg)("th",{parentName:"tr",align:null},"Descripci\xf3n"),(0,r.yg)("th",{parentName:"tr",align:null},"Tipo dato"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"href")),(0,r.yg)("td",{parentName:"tr",align:null},"url del Impuestos"),(0,r.yg)("td",{parentName:"tr",align:null},"String")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"id")),(0,r.yg)("td",{parentName:"tr",align:null},"identificador \xfanico del Impuestos"),(0,r.yg)("td",{parentName:"tr",align:null},"Integer")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"name")),(0,r.yg)("td",{parentName:"tr",align:null},"nombre del impuesto"),(0,r.yg)("td",{parentName:"tr",align:null},"String")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"percentage")),(0,r.yg)("td",{parentName:"tr",align:null},"porcentaje de impuesto"),(0,r.yg)("td",{parentName:"tr",align:null},"Float")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"forAllProducts")),(0,r.yg)("td",{parentName:"tr",align:null},"indica si es aplicado para todos los productos, No(0) o Si (1)"),(0,r.yg)("td",{parentName:"tr",align:null},"Boolean")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"ledgerAccount")),(0,r.yg)("td",{parentName:"tr",align:null},"cuenta contable del impuesto"),(0,r.yg)("td",{parentName:"tr",align:null},"String")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"code")),(0,r.yg)("td",{parentName:"tr",align:null},"c\xf3digo del impuesto"),(0,r.yg)("td",{parentName:"tr",align:null},"Boolean")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"state")),(0,r.yg)("td",{parentName:"tr",align:null},"estado del impuesto indica si el impuesto esta activo(0) o inactivo (1)"),(0,r.yg)("td",{parentName:"tr",align:null},"Boolean")))),(0,r.yg)("h2",{id:"get-lista-de-impuestos"},"GET lista de Impuestos"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"GET ",(0,r.yg)("inlineCode",{parentName:"li"},"/v1/taxes.json")," retornar\xe1 todos los Impuestos.")),(0,r.yg)("h4",{id:"par\xe1metros"},"Par\xe1metros"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"limit"),", limita la cantidad de items de una respuesta JSON, por defecto el limit es 25, el m\xe1ximo permitido es 50."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"offset"),", permite paginar los items de una respuesta JSON, por defecto el offset es 0."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"fields"),", solo devolver atributos espec\xedficos de un recurso"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"expand"),", permite expandir instancias y colecciones para traer relaciones en una sola petici\xf3n."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"name"),", Permite filtrar por nombre del impuesto."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"percentage"),", filtra por porcentaje de impuesto."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"code"),", filtra c\xf3digo."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"ledgeraccount"),", filtra por cuenta contable."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"state"),", boolean (0 o 1) indica si los impuestos est\xe1n activos(0) inactivos(1).")),(0,r.yg)("h4",{id:"ejemplos"},"Ejemplos"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"GET /v1/taxes.json?limit=10&offset=0")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"GET /v1/taxes.json?fields=[name,percentage,state]"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json",metastring:'title="Response /taxes.json "',title:'"Response',"/taxes.json":!0,'"':!0},'{\n    "href": "https://api.bsale.io/v1/taxes.json",\n    "count": 4,\n    "limit": 25,\n    "offset": 0,\n    "items": [\n        {\n            "href": "https://api.bsale.io/v1/taxes/2.json",\n            "id": 2,\n            "name": "EXONERADO",\n            "percentage": 0.0,\n            "forAllProducts": 0,\n            "ledgerAccount": null,\n            "code": 9997,\n            "state": 0,\n            "overTax": 0,\n            "amountTax": 0\n        },\n        {\n            "href": "https://api.bsale.io/v1/taxes/4.json",\n            "id": 4,\n            "name": "ICBPER",\n            "percentage": 0.3,\n            "forAllProducts": 0,\n            "ledgerAccount": null,\n            "code": 7152,\n            "state": 0,\n            "overTax": 0,\n            "amountTax": 1\n        },\n        {\n            "href": "https://api.bsale.io/v1/taxes/1.json",\n            "id": 1,\n            "name": "IGV",\n            "percentage": 18.0,\n            "forAllProducts": 1,\n            "ledgerAccount": null,\n            "code": 1000,\n            "state": 0,\n            "overTax": 0,\n            "amountTax": 0\n        },\n        {\n            "href": "https://api.bsale.io/v1/taxes/3.json",\n            "id": 3,\n            "name": "PARA EXPORTACION",\n            "percentage": 0.0,\n            "forAllProducts": 0,\n            "ledgerAccount": null,\n            "code": 9995,\n            "state": 0,\n            "overTax": 0,\n            "amountTax": 0\n        }\n    ]\n}\n')),(0,r.yg)("h2",{id:"get-un-impuesto"},"GET un impuesto"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"GET ",(0,r.yg)("inlineCode",{parentName:"li"},"/v1/taxes/1.json")," retornar\xe1 un tipo de impuesto.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json",metastring:'title="Response /taxes/1.json"',title:'"Response','/taxes/1.json"':!0},'        {\n            "href": "https://api.bsale.io/v1/taxes/1.json",\n            "id": 1,\n            "name": "IGV",\n            "percentage": 18.0,\n            "forAllProducts": 1,\n            "ledgerAccount": null,\n            "code": 1000,\n            "state": 0,\n            "overTax": 0,\n            "amountTax": 0\n        }\n')),(0,r.yg)("h2",{id:"get-cantidad-de-impuestos"},"GET cantidad de Impuestos"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"GET ",(0,r.yg)("inlineCode",{parentName:"p"},"/v1/taxes/count.json")," Retornar\xe1 cantidades de registros.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"state"),", boolean (0 o 1) indica si los impuestoss est\xe1n activos(0) inactivos (1)."))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n   "count": 3\n}\n')))}m.isMDXComponent=!0}}]);