"use strict";(self.webpackChunkdocusaurus_public_api=self.webpackChunkdocusaurus_public_api||[]).push([[2015],{5680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>m});var r=n(6540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),g=p(n),c=o,m=g["".concat(s,".").concat(c)]||g[c]||u[c]||a;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[g]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7471:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(8168),o=(n(6540),n(5680));const a={sidebar_position:60,title:"Tipos de libro",description:"Listar Tipos de libro",slug:"/tipos-de-libros"},i="Tipos de libro",l={unversionedId:"Informaci\xf3n SII/Tipos de libros",id:"version-CL/Informaci\xf3n SII/Tipos de libros",title:"Tipos de libro",description:"Listar Tipos de libro",source:"@site/versioned_docs/version-CL/Informaci\xf3n SII/Tipos de libros.md",sourceDirName:"Informaci\xf3n SII",slug:"/tipos-de-libros",permalink:"/docusaurus-public-api/CL/tipos-de-libros",draft:!1,tags:[],version:"CL",sidebarPosition:60,frontMatter:{sidebar_position:60,title:"Tipos de libro",description:"Listar Tipos de libro",slug:"/tipos-de-libros"},sidebar:"tutorialSidebar",previous:{title:"Webhooks",permalink:"/docusaurus-public-api/CL/configuracion/webhooks"},next:{title:"C\xf3digos tributarios",permalink:"/docusaurus-public-api/CL/codigos-tributarios"}},s={},p=[{value:"Estructura JSON",id:"estructura-json",level:2},{value:"Atributos",id:"atributos",level:3},{value:"GET lista de Tipos de libro",id:"get-lista-de-tipos-de-libro",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:4},{value:"Ejemplos",id:"ejemplos",level:4},{value:"GET un tipo de libro",id:"get-un-tipo-de-libro",level:2},{value:"GET cantidad de Tipos de libro",id:"get-cantidad-de-tipos-de-libro",level:2}],d={toc:p},g="wrapper";function u(e){let{components:t,...n}=e;return(0,o.yg)(g,(0,r.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"tipos-de-libro"},"Tipos de libro"),(0,o.yg)("p",null,"Listar, libros. Podr\xe1s obtener informaci\xf3n de libros que Bsale acumula seg\xfan compras y ventas se registran. "),(0,o.yg)("admonition",{type:"info"},(0,o.yg)("p",{parentName:"admonition"},"Los libros, fueron los registros que se llevaban como los registros de compra y venta que acumula SII.")),(0,o.yg)("h2",{id:"estructura-json"},"Estructura JSON"),(0,o.yg)("p",null,"Al realizar una petici\xf3n ",(0,o.yg)("inlineCode",{parentName:"p"},"HTTP"),", el servicio retornara un JSON con la siguiente estructura:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js",metastring:'title="Response /book_types/1.json"',title:'"Response','/book_types/1.json"':!0},'{\n   "href": "https://api.bsale.io/v1/book_types/1.json",\n   "id": 1,\n   "name": "Libro Venta",\n   "dteProcess": "Venta",\n   "code": "0",\n   "state": 1\n}\n')),(0,o.yg)("h3",{id:"atributos"},"Atributos"),(0,o.yg)("table",null,(0,o.yg)("thead",{parentName:"table"},(0,o.yg)("tr",{parentName:"thead"},(0,o.yg)("th",{parentName:"tr",align:null},"Atributo"),(0,o.yg)("th",{parentName:"tr",align:null},"Descripci\xf3n"),(0,o.yg)("th",{parentName:"tr",align:null},"Tipo dato"))),(0,o.yg)("tbody",{parentName:"table"},(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("strong",{parentName:"td"},"href")),(0,o.yg)("td",{parentName:"tr",align:null},"url del Tipos de libro"),(0,o.yg)("td",{parentName:"tr",align:null},"String")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("strong",{parentName:"td"},"id")),(0,o.yg)("td",{parentName:"tr",align:null},"identificador \xfanico del Tipos de libro"),(0,o.yg)("td",{parentName:"tr",align:null},"Integer")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("strong",{parentName:"td"},"name")),(0,o.yg)("td",{parentName:"tr",align:null},"nombre del del tipo de libro"),(0,o.yg)("td",{parentName:"tr",align:null},"String")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("strong",{parentName:"td"},"dteProcess")),(0,o.yg)("td",{parentName:"tr",align:null},"proceso al que pertenece el tipo de libro"),(0,o.yg)("td",{parentName:"tr",align:null},"String")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("strong",{parentName:"td"},"code")),(0,o.yg)("td",{parentName:"tr",align:null},"c\xf3digo interno del tipo de libro"),(0,o.yg)("td",{parentName:"tr",align:null},"String")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("strong",{parentName:"td"},"state")),(0,o.yg)("td",{parentName:"tr",align:null},"estado del tipo de documento activo(0) o inactivo (1)"),(0,o.yg)("td",{parentName:"tr",align:null},"Boolean")))),(0,o.yg)("h2",{id:"get-lista-de-tipos-de-libro"},"GET lista de Tipos de libro"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"GET ",(0,o.yg)("inlineCode",{parentName:"li"},"/v1/book_types.json")," retornar\xe1 todos los Tipos de libro.")),(0,o.yg)("h4",{id:"par\xe1metros"},"Par\xe1metros"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"limit"),", limita la cantidad de items de una respuesta JSON, por defecto el limit es 25, el m\xe1ximo permitido es 50."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"offset"),", permite paginar los items de una respuesta JSON, por defecto el offset es 0."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"fields"),", solo devolver atributos espec\xedficos de un recurso"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"expand"),", permite expandir instancias y colecciones para traer relaciones en una sola petici\xf3n."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"name"),", Permite filtrar por nombre tipo libro."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"dteprocess"),", filtra por proceso."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"code"),", filtra por c\xf3digo interno."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"state"),", boolean (0 o 1) indica si los tipos de libro est\xe1n activos(0) inactivos(1).")),(0,o.yg)("h4",{id:"ejemplos"},"Ejemplos"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"GET /v1/book_types.json?limit=10&offset=0")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"GET /v1/book_types.json?fields=[name,code,state]"))),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-json",metastring:'title="Response /book_types.json "',title:'"Response',"/book_types.json":!0,'"':!0},'{\n  "href": "https://api.bsale.io/v1/book_types.json",\n  "count": 3,\n  "limit": 25,\n  "offset": 0,\n  "items": [\n    {\n      "href": "https://api.bsale.io/v1/book_types/3.json",\n      "id": 3,\n      "name": "Libro Boleta",\n      "dteProcess": "Boleta",\n      "code": "2",\n      "state": 0\n    },\n    {\n      "href": "https://api.bsale.io/v1/book_types/2.json",\n      "id": 2,\n      "name": "Libro Compra",\n      "dteProcess": "Compra",\n      "code": "1",\n      "state": 1\n    },\n    {\n      "href": "https://api.bsale.io/v1/book_types/1.json",\n      "id": 1,\n      "name": "Libro Venta",\n      "dteProcess": "Venta",\n      "code": "0",\n      "state": 1\n    }\n  ]\n}\n')),(0,o.yg)("h2",{id:"get-un-tipo-de-libro"},"GET un tipo de libro"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"GET ",(0,o.yg)("inlineCode",{parentName:"li"},"/v1/book_types/1.json")," retornar\xe1 un tipo de libro espec\xedfico.")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-json",metastring:'title="Response /book_types/1.json"',title:'"Response','/book_types/1.json"':!0},'{\n  "href": "https://api.bsale.io/v1/book_types/1.json",\n  "id": 1,\n  "name": "Libro Venta",\n  "dteProcess": "Venta",\n  "code": "0",\n  "state": 1\n}\n')),(0,o.yg)("h2",{id:"get-cantidad-de-tipos-de-libro"},"GET cantidad de Tipos de libro"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"GET ",(0,o.yg)("inlineCode",{parentName:"p"},"/v1/book_types/count.json")," Retornar\xe1 cantidades de registros.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"state"),", boolean (0 o 1) indica si los Tipos de libros est\xe1n activos(0) inactivos (1)."))),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-json"},'{\n   "count": 3\n}\n')))}u.isMDXComponent=!0}}]);