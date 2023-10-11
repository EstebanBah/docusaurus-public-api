"use strict";(self.webpackChunkdocusaurus_public_api=self.webpackChunkdocusaurus_public_api||[]).push([[2077],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>b});var a=n(7294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,i=function(t,e){if(null==t)return{};var n,a,i={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var l=a.createContext({}),p=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=p(t.components);return a.createElement(l.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,i=t.mdxType,r=t.originalType,l=t.parentName,d=s(t,["components","mdxType","originalType","parentName"]),u=p(n),c=i,b=u["".concat(l,".").concat(c)]||u[c]||m[c]||r;return n?a.createElement(b,o(o({ref:e},d),{},{components:n})):a.createElement(b,o({ref:e},d))}));function b(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=n.length,o=new Array(r);o[0]=c;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s[u]="string"==typeof t?t:i,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5973:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const r={sidebar_position:50,title:"Atributos din\xe1micos",description:"Listar atributos din\xe1micos",slug:"/atributos-dinamicos"},o="Atributos din\xe1micos",s={unversionedId:"Configuraci\xf3n/Atributos din\xe1micos",id:"version-MX/Configuraci\xf3n/Atributos din\xe1micos",title:"Atributos din\xe1micos",description:"Listar atributos din\xe1micos",source:"@site/versioned_docs/version-MX/Configuraci\xf3n/Atributos din\xe1micos.md",sourceDirName:"Configuraci\xf3n",slug:"/atributos-dinamicos",permalink:"/docusaurus-public-api/MX/atributos-dinamicos",draft:!1,tags:[],version:"MX",sidebarPosition:50,frontMatter:{sidebar_position:50,title:"Atributos din\xe1micos",description:"Listar atributos din\xe1micos",slug:"/atributos-dinamicos"},sidebar:"tutorialSidebar",previous:{title:"Webhooks",permalink:"/docusaurus-public-api/MX/pagos/webhooks"},next:{title:"Descuentos",permalink:"/docusaurus-public-api/MX/descuentos"}},l={},p=[{value:"Estructura JSON",id:"estructura-json",level:2},{value:"Atributos",id:"atributos",level:3},{value:"GET colecci\xf3n de atributos din\xe1micos",id:"get-colecci\xf3n-de-atributos-din\xe1micos",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:4},{value:"Ejemplos",id:"ejemplos",level:4},{value:"GET un atributo din\xe1mico",id:"get-un-atributo-din\xe1mico",level:2},{value:"Par\xe1metros",id:"par\xe1metros-1",level:4},{value:"Ejemplos",id:"ejemplos-1",level:4},{value:"GET detalles de un atributo din\xe1mico",id:"get-detalles-de-un-atributo-din\xe1mico",level:2},{value:"GET un de detalle de un atributo din\xe1mico",id:"get-un-de-detalle-de-un-atributo-din\xe1mico",level:2}],d={toc:p},u="wrapper";function m(t){let{components:e,...n}=t;return(0,i.kt)(u,(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"atributos-din\xe1micos"},"Atributos din\xe1micos"),(0,i.kt)("p",null,"Los atributos din\xe1micos son usados en documentos, formas de pago y clientes. Como atributos opcionales en la mayor\xeda de casos."),(0,i.kt)("h2",{id:"estructura-json"},"Estructura JSON"),(0,i.kt)("p",null,"Al realizar una petici\xf3n ",(0,i.kt)("inlineCode",{parentName:"p"},"HTTP"),", el servicio retornara un JSON con la siguiente estructura:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response /dynamic_attributes/3.json"',title:'"Response','/dynamic_attributes/3.json"':!0},'{\n  "href": "https://api.bsale.io/v1/dynamic_attributes/3.json",\n  "id": 3,\n  "name": "N\xfamero",\n  "tip": "",\n  "type": 4,\n  "isMandatory": 0,\n  "state": 0,\n  "payment_type": {\n    "href": "https://api.bsale.io/v1/payment_types/5.json",\n    "id": "5"\n  }\n}\n')),(0,i.kt)("h3",{id:"atributos"},"Atributos"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Atributo"),(0,i.kt)("th",{parentName:"tr",align:null},"Descripci\xf3n"),(0,i.kt)("th",{parentName:"tr",align:null},"Tipo dato"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"href")),(0,i.kt)("td",{parentName:"tr",align:null},"url del pago"),(0,i.kt)("td",{parentName:"tr",align:null},"String")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"id")),(0,i.kt)("td",{parentName:"tr",align:null},"identificador \xfanico del pago"),(0,i.kt)("td",{parentName:"tr",align:null},"Integer")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"name")),(0,i.kt)("td",{parentName:"tr",align:null},"nombre del atributo din\xe1mico"),(0,i.kt)("td",{parentName:"tr",align:null},"String")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"tip")),(0,i.kt)("td",{parentName:"tr",align:null},"tooltip del atributo din\xe1mico"),(0,i.kt)("td",{parentName:"tr",align:null},"String")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"isMandatory")),(0,i.kt)("td",{parentName:"tr",align:null},"indica si un atributo din\xe1mico es obligatorio No(0) o Si(1)"),(0,i.kt)("td",{parentName:"tr",align:null},"Boolean")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"state")),(0,i.kt)("td",{parentName:"tr",align:null},"estado del atributo din\xe1mico indica si esta activo(0) o inactivo (1)"),(0,i.kt)("td",{parentName:"tr",align:null},"Boolean")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"payment_type")),(0,i.kt)("td",{parentName:"tr",align:null},"nodo que indica la relaci\xf3n con las formas de pago."),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("h2",{id:"get-colecci\xf3n-de-atributos-din\xe1micos"},"GET colecci\xf3n de atributos din\xe1micos"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"GET ",(0,i.kt)("inlineCode",{parentName:"li"},"/v1/dynamic_attributes.json")," retornar\xe1 todos los atributos din\xe1micos.")),(0,i.kt)("h4",{id:"par\xe1metros"},"Par\xe1metros"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"limit"),", limita la cantidad de items de una respuesta JSON, por defecto el limit es 25, el m\xe1ximo permitido es 50."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"offset"),", permite paginar los items de una respuesta JSON, por defecto el offset es 0."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"fields"),", solo devolver atributos espec\xedficos de un recurso"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"expand"),", permite expandir instancias y colecciones para traer relaciones en una sola petici\xf3n."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"name"),", Permite filtrar por nombre del atributo."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"type"),", filtra tipo de atributo."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"state"),", boolean (0 o 1) indica si las listas de precio est\xe1n activas(0) inactivas (1)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"paymenttypeid"),", filtra por la forma de pago."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"documenttypeid"),", filtra por el tipo de documento.")),(0,i.kt)("h4",{id:"ejemplos"},"Ejemplos"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GET /v1/dynamic_attributes.json?limit=10&offset=0")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GET /v1/dynamic_attributes.json?fields=[name,type,state]")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GET /v1/dynamic_attributes.json?paymenttypeid=1")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ET /v1/dynamic_attributes.json?expand=[coin,details]"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response /dynamic_attributes.json "',title:'"Response',"/dynamic_attributes.json":!0,'"':!0},'{\n  "href": "https://api.bsale.io/v1/dynamic_attributes.json",\n  "count": 15,\n  "limit": 4,\n  "offset": 0,\n  "items": [\n    {\n      "href": "https://api.bsale.io/v1/dynamic_attributes/12.json",\n      "id": 12,\n      "name": "Fono Contacto",\n      "tip": "Fono Contacto",\n      "type": 4,\n      "isMandatory": 0,\n      "state": 0,\n      "document_type": {\n        "href": "https://api.bsale.io/v1/document_types/4.json",\n        "id": "4"\n      }\n    },\n    {\n      "href": "https://api.bsale.io/v1/dynamic_attributes/16.json",\n      "id": 16,\n      "name": "Fono Contacto",\n      "tip": "",\n      "type": 4,\n      "isMandatory": 0,\n      "state": 0,\n      "document_type": {\n        "href": "https://api.bsale.io/v1/document_types/10.json",\n        "id": "10"\n      }\n    },\n    {\n      "href": "https://api.bsale.io/v1/dynamic_attributes/15.json",\n      "id": 15,\n      "name": "Nombre Contacto",\n      "tip": "",\n      "type": 4,\n      "isMandatory": 0,\n      "state": 0,\n      "document_type": {\n        "href": "https://api.bsale.io/v1/document_types/10.json",\n        "id": "10"\n      }\n    },\n    {\n      "href": "https://api.bsale.io/v1/dynamic_attributes/3.json",\n      "id": 3,\n      "name": "N\xfamero",\n      "tip": "",\n      "type": 4,\n      "isMandatory": 0,\n      "state": 0,\n      "payment_type": {\n        "href": "https://api.bsale.io/v1/payment_types/5.json",\n        "id": "5"\n      }\n    }\n  ]\n}\n')),(0,i.kt)("h2",{id:"get-un-atributo-din\xe1mico"},"GET un atributo din\xe1mico"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"GET ",(0,i.kt)("inlineCode",{parentName:"li"},"/v1/dynamic_attributes/3.json")," retornar\xe1 un atributo espec\xedfico.")),(0,i.kt)("h4",{id:"par\xe1metros-1"},"Par\xe1metros"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"expand"),", permite expandir instancias y colecciones para traer relaciones en una sola petici\xf3n.")),(0,i.kt)("h4",{id:"ejemplos-1"},"Ejemplos"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GET /v1/dynamic_attributes/3.json?expand=[payment_type]"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response /dynamic_attributes/3.json"',title:'"Response','/dynamic_attributes/3.json"':!0},'{\n  "href": "https://api.bsale.io/v1/dynamic_attributes/3.json",\n  "id": 3,\n  "name": "N\xfamero",\n  "tip": "",\n  "type": 4,\n  "isMandatory": 0,\n  "state": 0,\n  "payment_type": {\n    "href": "https://api.bsale.io/v1/payment_types/5.json",\n    "id": "5"\n  }\n}\n')),(0,i.kt)("h2",{id:"get-detalles-de-un-atributo-din\xe1mico"},"GET detalles de un atributo din\xe1mico"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"GET ",(0,i.kt)("inlineCode",{parentName:"li"},"/v1/dynamic_attributes/8/details.json")," Retornar\xe1 los detalles de un atributo en particular.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'  {\n  "href": "https://api.bsale.io/v1/dynamic_attributes/8/details.json",\n  "count": 9,\n  "limit": 25,\n  "offset": 0,\n  "items": [\n    {\n      "href": "https://api.bsale.io/v1/dynamic_attributes/8/details/1.json",\n      "id": 1,\n      "name": "Operaci\xf3n Constituye Venta",\n      "state": 1\n    },\n    {\n      "href": "https://api.bsale.io/v1/dynamic_attributes/8/details/2.json",\n      "id": 2,\n      "name": "Venta por Efectuar",\n      "state": 1\n    },\n    {\n      "href": "https://api.bsale.io/v1/dynamic_attributes/8/details/3.json",\n      "id": 3,\n      "name": "Consignaciones",\n      "state": 1\n    },\n    {\n      "href": "https://api.bsale.io/v1/dynamic_attributes/8/details/4.json",\n      "id": 4,\n      "name": "Entrega Gratuita",\n      "state": 1\n    },\n    {\n      "href": "https://api.bsale.io/v1/dynamic_attributes/8/details/5.json",\n      "id": 5,\n      "name": "Traslado Interno",\n      "state": 1\n    },\n    {\n      "href": "https://api.bsale.io/v1/dynamic_attributes/8/details/6.json",\n      "id": 6,\n      "name": "Otros Traslados No Venta",\n      "state": 1\n    },\n    {\n      "href": "https://api.bsale.io/v1/dynamic_attributes/8/details/7.json",\n      "id": 7,\n      "name": "Gu\xeda Devoluci\xf3n",\n      "state": 1\n    },\n    {\n      "href": "https://api.bsale.io/v1/dynamic_attributes/8/details/8.json",\n      "id": 8,\n      "name": "Traslado para Exportaci\xf3n",\n      "state": 1\n    },\n    {\n      "href": "https://api.bsale.io/v1/dynamic_attributes/8/details/9.json",\n      "id": 9,\n      "name": "Venta para Exportaci\xf3n",\n      "state": 1\n    }\n  ]\n}\n')),(0,i.kt)("h2",{id:"get-un-de-detalle-de-un-atributo-din\xe1mico"},"GET un de detalle de un atributo din\xe1mico"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"GET ",(0,i.kt)("inlineCode",{parentName:"li"},"/v1/dynamic_attributes/8/details/9.json")," retornar\xe1 un detalle de un atributo din\xe1mico.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "href": "https://api.bsale.io/v1/dynamic_attributes/8/details/9.json",\n  "id": 9,\n  "name": "Venta para Exportaci\xf3n",\n  "state": 1\n}\n')))}m.isMDXComponent=!0}}]);