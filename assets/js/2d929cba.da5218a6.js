"use strict";(self.webpackChunkdocusaurus_public_api=self.webpackChunkdocusaurus_public_api||[]).push([[1475],{5680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>g});var a=t(6540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),d=p(t),m=i,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||s;return t?a.createElement(g,o(o({ref:n},c),{},{components:t})):a.createElement(g,o({ref:n},c))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var s=t.length,o=new Array(s);o[0]=m;var r={};for(var l in n)hasOwnProperty.call(n,l)&&(r[l]=n[l]);r.originalType=e,r[d]="string"==typeof e?e:i,o[1]=r;for(var p=2;p<s;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5586:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>p});var a=t(8168),i=(t(6540),t(5680));const s={sidebar_position:23,title:"Stocks",description:"Crear, editar y listar stocks",slug:"/stocks"},o="Stocks",r={unversionedId:"Productos y Servicios/Stocks",id:"version-CL/Productos y Servicios/Stocks",title:"Stocks",description:"Crear, editar y listar stocks",source:"@site/versioned_docs/version-CL/Productos y Servicios/Stocks.md",sourceDirName:"Productos y Servicios",slug:"/stocks",permalink:"/docusaurus-public-api/CL/stocks",draft:!1,tags:[],version:"CL",sidebarPosition:23,frontMatter:{sidebar_position:23,title:"Stocks",description:"Crear, editar y listar stocks",slug:"/stocks"},sidebar:"tutorialSidebar",previous:{title:"Variantes",permalink:"/docusaurus-public-api/CL/variantes"},next:{title:"Listas de precio",permalink:"/docusaurus-public-api/CL/listas-de-precio"}},l={},p=[{value:"Estructura JSON",id:"estructura-json",level:2},{value:"Atributos",id:"atributos",level:3},{value:"GET lista de stocks",id:"get-lista-de-stocks",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:4},{value:"Ejemplos",id:"ejemplos",level:4},{value:"GET un stock de variante",id:"get-un-stock-de-variante",level:2},{value:"Par\xe1metros",id:"par\xe1metros-1",level:4},{value:"Ejemplos",id:"ejemplos-1",level:4},{value:"GET recepciones de stock",id:"get-recepciones-de-stock",level:2},{value:"Ejemplos",id:"ejemplos-2",level:4},{value:"GET una recepci\xf3n",id:"get-una-recepci\xf3n",level:3},{value:"Par\xe1metros",id:"par\xe1metros-2",level:4},{value:"Ejemplos",id:"ejemplos-3",level:4},{value:"GET detalles de una recepci\xf3n",id:"get-detalles-de-una-recepci\xf3n",level:3},{value:"GET un de detalle de una recepci\xf3n",id:"get-un-de-detalle-de-una-recepci\xf3n",level:4},{value:"POST una recepci\xf3n de stock",id:"post-una-recepci\xf3n-de-stock",level:2},{value:"Ejemplo JSON",id:"ejemplo-json",level:3},{value:"Env\xedo",id:"env\xedo",level:4},{value:"Respuesta",id:"respuesta",level:4},{value:"PUT una recepci\xf3n de stock",id:"put-una-recepci\xf3n-de-stock",level:2},{value:"Ejemplo JSON",id:"ejemplo-json-1",level:3},{value:"Env\xedo",id:"env\xedo-1",level:4},{value:"Respuesta",id:"respuesta-1",level:4},{value:"GET consumos de stock",id:"get-consumos-de-stock",level:2},{value:"Par\xe1metros",id:"par\xe1metros-3",level:4},{value:"Ejemplos",id:"ejemplos-4",level:4},{value:"GET un consumo",id:"get-un-consumo",level:3},{value:"Par\xe1metros",id:"par\xe1metros-4",level:4},{value:"Ejemplos",id:"ejemplos-5",level:4},{value:"GET detalles de un consumo",id:"get-detalles-de-un-consumo",level:3},{value:"GET un de detalle de un consumo",id:"get-un-de-detalle-de-un-consumo",level:4},{value:"GET tipos de consumos",id:"get-tipos-de-consumos",level:3},{value:"Ejemplos",id:"ejemplos-6",level:4},{value:"POST un consumo de stock",id:"post-un-consumo-de-stock",level:2},{value:"Ejemplo JSON",id:"ejemplo-json-2",level:3},{value:"Env\xedo",id:"env\xedo-2",level:4},{value:"Respuesta",id:"respuesta-2",level:4}],c={toc:p},d="wrapper";function u(e){let{components:n,...t}=e;return(0,i.yg)(d,(0,a.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"stocks"},"Stocks"),(0,i.yg)("p",null,"Listar, editar y crear stock. Recepci\xf3n, consumo."),(0,i.yg)("p",null,"C\xf3mo funciona la interfaz de Bsale, mira \xe9stos videos:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Recepci\xf3n de stock ",(0,i.yg)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=5LljCaetQuc"},"Ver")," "),(0,i.yg)("li",{parentName:"ul"},"Consumo de stock ",(0,i.yg)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=k_oCSXbr__Y"},"Ver")," ")),(0,i.yg)("admonition",{type:"info"},(0,i.yg)("p",{parentName:"admonition"},"El stock debe ser llamado seg\xfan la variante, osea su ",(0,i.yg)("inlineCode",{parentName:"p"},"id"),", o ",(0,i.yg)("inlineCode",{parentName:"p"},"barCode")," o ",(0,i.yg)("inlineCode",{parentName:"p"},"code"),". ")),(0,i.yg)("h2",{id:"estructura-json"},"Estructura JSON"),(0,i.yg)("p",null,"Al realizar una petici\xf3n ",(0,i.yg)("inlineCode",{parentName:"p"},"HTTP"),", el servicio retornara un JSON con la siguiente estructura:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-js",metastring:'title="Response /stocks/1442.json"',title:'"Response','/stocks/1442.json"':!0},'{\n    "href": "https://api.bsale.io/v1/stocks/1442.json",\n    "id": 1442,\n    "quantity": 0.0,\n    "quantityReserved": 0.0,\n    "quantityAvailable": 0.0,\n    "variant": {\n        "href": "https://api.bsale.io/v1/variants/3960.json",\n        "id": "3960"\n    },\n    "office": {\n        "href": "https://api.bsale.io/v1/offices/1.json",\n        "id": "1"\n    }\n}\n')),(0,i.yg)("h3",{id:"atributos"},"Atributos"),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"Atributo"),(0,i.yg)("th",{parentName:"tr",align:null},"Descripci\xf3n"),(0,i.yg)("th",{parentName:"tr",align:null},"Tipo dato"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("strong",{parentName:"td"},"quantity")),(0,i.yg)("td",{parentName:"tr",align:null},"cantidad real de la variante"),(0,i.yg)("td",{parentName:"tr",align:null},"Float).")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("strong",{parentName:"td"},"quantityReserved")),(0,i.yg)("td",{parentName:"tr",align:null},"cantidad reservada de la variante en borradores o en documento pendientes de despachar"),(0,i.yg)("td",{parentName:"tr",align:null},"Float")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("strong",{parentName:"td"},"quantityAvailable")),(0,i.yg)("td",{parentName:"tr",align:null},"cantidad disponible de la variante"),(0,i.yg)("td",{parentName:"tr",align:null},"Float")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("strong",{parentName:"td"},"variant")),(0,i.yg)("td",{parentName:"tr",align:null},"nodo que indica la relaci\xf3n con la variante."),(0,i.yg)("td",{parentName:"tr",align:null})),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("strong",{parentName:"td"},"office")),(0,i.yg)("td",{parentName:"tr",align:null},"nodo que indica la relaci\xf3n con la sucursal."),(0,i.yg)("td",{parentName:"tr",align:null})))),(0,i.yg)("h2",{id:"get-lista-de-stocks"},"GET lista de stocks"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"GET ",(0,i.yg)("inlineCode",{parentName:"li"},"/v1/stocks.json")," retornar\xe1 todos todos los stocks.")),(0,i.yg)("h4",{id:"par\xe1metros"},"Par\xe1metros"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"limit"),", limita la cantidad de items de una respuesta JSON, por defecto el limit es 25, el m\xe1ximo permitido es 50."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"offset"),", permite paginar los items de una respuesta JSON, por defecto el offset es 0."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"fields"),", solo devolver atributos espec\xedficos de un recurso"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"expand"),", permite expandir instancias y colecciones para traer relaciones en una sola petici\xf3n."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"officeid"),", Permite filtrar por sucursal."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"variantid"),", filtra por el identificador de la variante (Integer)"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"code"),", filtra por el SKU de la variante (String)."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"barcode"),", filtra por el codigo de barras de la variante (String).")),(0,i.yg)("h4",{id:"ejemplos"},"Ejemplos"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"GET /v1/stocks.json?limit=10&offset=0")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"GET /v1/stocks.json?variantid=[1223]")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"GET /v1/stocks.json?code=[892777267]"))),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json",metastring:'title="Response /stocks.json"',title:'"Response','/stocks.json"':!0},'{\n  "href": "https://api.bsale.io/v1/stocks.json",\n  "count": 1049,\n  "limit": 2,\n  "offset": 0,\n  "items": [\n    {\n      "quantity": 60.36,\n      "quantityReserved": 0,\n      "quantityAvailable": 60.36,\n      "variant": {\n        "href": "https://api.bsale.io/v1/variants/351.json",\n        "id": "351"\n      },\n      "office": {\n        "href": "https://api.bsale.io/v1/offices/2.json",\n        "id": "2"\n      }\n    },\n    {\n      "quantity": 0,\n      "quantityReserved": 0,\n      "quantityAvailable": 0,\n      "variant": {\n        "href": "https://api.bsale.io/v1/variants/351.json",\n        "id": "351"\n      },\n      "office": {\n        "href": "https://api.bsale.io/v1/offices/1.json",\n        "id": "1"\n      }\n    }\n  ]\n}\n')),(0,i.yg)("h2",{id:"get-un-stock-de-variante"},"GET un stock de variante"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"GET ",(0,i.yg)("inlineCode",{parentName:"li"},"/v1/stocks/44977.json")," retornar\xe1 un stock espec\xedfico.")),(0,i.yg)("h4",{id:"par\xe1metros-1"},"Par\xe1metros"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"expand"),", permite expandir instancias y colecciones para traer relaciones en una sola petici\xf3n.")),(0,i.yg)("h4",{id:"ejemplos-1"},"Ejemplos"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"GET /v1/stocks/44977.json?expand=[variant,office]")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"GET /v1/stocks/44977.json?officeid=2"))),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json",metastring:'title="Response /stocks/44977.json"',title:'"Response','/stocks/44977.json"':!0},'{\n    "href": "https://api.bsale.io/v1/stocks/44977.json",\n    "id": 44977,\n    "quantity": 4.0,\n    "quantityReserved": 0.0,\n    "quantityAvailable": 4.0,\n    "variant": {\n        "href": "https://api.bsale.io/v1/variants/18855.json",\n        "id": "18855"\n    },\n    "office": {\n        "href": "https://api.bsale.io/v1/offices/2.json",\n        "id": "2"\n    }\n}\n')),(0,i.yg)("admonition",{type:"tip"},(0,i.yg)("p",{parentName:"admonition"},"En el caso de necesitar el stock de un pack, se debe filtrar por un identificador (",(0,i.yg)("inlineCode",{parentName:"p"},"variantid"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"code"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"barcode"),") y adem\xe1s la sucursal requerida ",(0,i.yg)("inlineCode",{parentName:"p"},"officeid"),". El stock de los packs solo considera el stock f\xedsico, lo que quiere decir que no contempla las cantidades por despachar.")),(0,i.yg)("h2",{id:"get-recepciones-de-stock"},"GET recepciones de stock"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"GET ",(0,i.yg)("inlineCode",{parentName:"p"},"/v1/stocks/receptions.json")," retornar\xe1 todos las recepciones..")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"limit"),", limita la cantidad de items de una respuesta JSON, por defecto el limit es 25, el m\xe1ximo permitido es 50.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"offset"),", permite paginar los items de una respuesta JSON, por defecto el offset es 0.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"fields"),", solo devolver atributos espec\xedficos de un recurso")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"expand"),", permite expandir instancias y colecciones para traer relaciones en una sola petici\xf3n.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"admissiondate"),", Permite filtrar por la fecha de la recepci\xf3n.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"documentnumber"),", filtra por el numero del documento de la recepci\xf3n.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"officeid"),", Permite filtrar por sucursal."))),(0,i.yg)("h4",{id:"ejemplos-2"},"Ejemplos"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"GET /v1/stocks/receptions.json?limit=3&offset=0")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"GET /v1/stocks/receptions.json?fields=[admissiondate,document,documentnumber]")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"GET /v1/stocks/receptions.json?expand=[office,details]"))),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "href": "https://api.bsale.io/v1/stocks/receptions.json",\n    "count": 126,\n    "limit": 3,\n    "offset": 0,\n    "items": [\n        {\n            "href": "https://api.bsale.io/v1/stocks/receptions/487.json",\n            "id": 487,\n            "admissionDate": 1583712000,\n            "document": "Sin Documento",\n            "documentNumber": "",\n            "note": "Ajuste de Stock: Soporte  bsale",\n            "imagestionCctId": 0,\n            "imagestionCcDescription": "",\n            "internalDispatchId": 0,\n            "updateStock": 1,\n            "office": {\n                "href": "https://api.bsale.io/v1/offices/1.json",\n                "id": "1"\n            },\n            "user": {\n                "href": "https://api.bsale.io/v1/users/1.json",\n                "id": "1"\n            },\n            "details": {\n                "href": "https://api.bsale.io/v1/stocks/receptions/487/details.json"\n            }\n        },\n        {\n            "href": "https://api.bsale.io/v1/stocks/receptions/492.json",\n            "id": 492,\n            "admissionDate": 1584921600,\n            "document": "Gu\xeda",\n            "documentNumber": "123",\n            "note": "prueba api",\n            "imagestionCctId": 0,\n            "imagestionCcDescription": null,\n            "internalDispatchId": 0,\n            "updateStock": 0,\n            "office": {\n                "href": "https://api.bsale.io/v1/offices/1.json",\n                "id": "1"\n            },\n            "user": {\n                "href": "https://api.bsale.io/v1/users/2.json",\n                "id": "2"\n            },\n            "details": {\n                "href": "https://api.bsale.io/v1/stocks/receptions/492/details.json"\n            }\n        },\n        {\n            "href": "https://api.bsale.io/v1/stocks/receptions/493.json",\n            "id": 493,\n            "admissionDate": 1584921600,\n            "document": "Factura",\n            "documentNumber": "",\n            "note": "Recepcion / Soporte  bsale",\n            "imagestionCctId": 0,\n            "imagestionCcDescription": "",\n            "internalDispatchId": 0,\n            "updateStock": 0,\n            "office": {\n                "href": "https://api.bsale.io/v1/offices/1.json",\n                "id": "1"\n            },\n            "user": {\n                "href": "https://api.bsale.io/v1/users/1.json",\n                "id": "1"\n            },\n            "details": {\n                "href": "https://api.bsale.io/v1/stocks/receptions/493/details.json"\n            }\n        }\n    ],\n    "next": "https://api.bsale.io/v1/stocks/receptions.json?limit=3&offset=3"\n}\n')),(0,i.yg)("h3",{id:"get-una-recepci\xf3n"},"GET una recepci\xf3n"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"GET ",(0,i.yg)("inlineCode",{parentName:"li"},"/v1/stocks/receptions/12.json")," retornar\xe1 una recepci\xf3n espec\xedfica.")),(0,i.yg)("h4",{id:"par\xe1metros-2"},"Par\xe1metros"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"expand"),", permite expandir instancias y colecciones para traer relaciones en una sola petici\xf3n.")),(0,i.yg)("h4",{id:"ejemplos-3"},"Ejemplos"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"GET /v1/stocks/receptions/12.json?expand=details"))),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "href": "https://api.bsale.io/v1/stocks/receptions/487.json",\n    "id": 487,\n    "admissionDate": 1583712000,\n    "document": "Sin Documento",\n    "documentNumber": "",\n    "note": "Ajuste de Stock: Vendedor local",\n    "imagestionCctId": 0,\n    "imagestionCcDescription": "",\n    "internalDispatchId": 0,\n    "updateStock": 1,\n    "office": {\n        "href": "https://api.bsale.io/v1/offices/1.json",\n        "id": "1"\n    },\n    "user": {\n        "href": "https://api.bsale.io/v1/users/1.json",\n        "id": "1"\n    },\n    "details": {\n        "href": "https://api.bsale.io/v1/stocks/receptions/487/details.json"\n    }\n}\n')),(0,i.yg)("h3",{id:"get-detalles-de-una-recepci\xf3n"},"GET detalles de una recepci\xf3n"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"GET ",(0,i.yg)("inlineCode",{parentName:"li"},"/v1/stocks/receptions/12/details.json")," retornar\xe1 detalles de una recepci\xf3n espec\xedfica.")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "href": "https://api.bsale.io/v1/stocks/receptions/12/details.json",\n  "count": 13,\n  "limit": 25,\n  "offset": 0,\n  "items": [\n    {\n      "href": "https://api.bsale.io/v1/stocks/receptions/12/details/65.json",\n      "id": 65,\n      "quantity": 32.02,\n      "cost": 3200,\n      "variantStock": 85.55,\n      "serialNumber": null,\n      "variant": {\n        "href": "https://api.bsale.io/v1/variant/391.json",\n        "id": "391"\n      }\n    },\n    {\n      "href": "https://api.bsale.io/v1/stocks/receptions/12/details/66.json",\n      "id": 66,\n      "quantity": 32.22,\n      "cost": 3200,\n      "variantStock": 185.2,\n      "serialNumber": null,\n      "variant": {\n        "href": "https://api.bsale.io/v1/variant/388.json",\n        "id": "388"\n      }\n    },\n    {\n      "href": "https://api.bsale.io/v1/stocks/receptions/12/details/67.json",\n      "id": 67,\n      "quantity": 14.46,\n      "cost": 3200,\n      "variantStock": 107.84,\n      "serialNumber": null,\n      "variant": {\n        "href": "https://api.bsale.io/v1/variant/393.json",\n        "id": "393"\n      }\n    }\n  ]\n}\n')),(0,i.yg)("h4",{id:"get-un-de-detalle-de-una-recepci\xf3n"},"GET un de detalle de una recepci\xf3n"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"GET ",(0,i.yg)("inlineCode",{parentName:"li"},"/v1/stocks/receptions/12/details/65.json")," retornar\xe1 un detalle de una recepci\xf3n espec\xedfica.")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "href": "https://api.bsale.io/v1/stocks/receptions/12/details/65.json",\n  "id": 65,\n  "quantity": 32.02,\n  "cost": 3200,\n  "variantStock": 85.55,\n  "serialNumber": null,\n  "variant": {\n    "href": "https://api.bsale.io/v1/variant/391.json",\n    "id": "391"\n  }\n}\n')),(0,i.yg)("h2",{id:"post-una-recepci\xf3n-de-stock"},"POST una recepci\xf3n de stock"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"POST ",(0,i.yg)("inlineCode",{parentName:"li"},"/v1/stocks/receptions.json")," ")),(0,i.yg)("p",null,"Para crear una recepci\xf3n (ingresar cantidades de stock), se debe enviar un JSON con la siguiente estructura:"),(0,i.yg)("h3",{id:"ejemplo-json"},"Ejemplo JSON"),(0,i.yg)("h4",{id:"env\xedo"},"Env\xedo"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "document": "Gu\xeda",\n  "officeId": 1,\n  "documentNumber": "123",\n  "note": "prueba api",\n  "details": [\n    {\n      "quantity": 32.22,\n      "code": 629,\n      "cost": 3200\n    }\n  ]\n}\n')),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"document"),", nombre del tipo de documento de ingreso, se visualiza en la interfaz de Bsale (String).",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},'"GU\xcdA", "FACTURA", "OTRO".'))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"officeId"),", Id de la sucursal donde se ingresa el stock (Integer)."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"note"),", comentario de ingreso, se visualiza en la interfaz de Bsale (String)."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"documentNumber"),", n\xfamero de documento de ingreso (Integer)"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"quantity"),", cantidad ingreso de stock"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"cost"),", costo asociado al ingreso")),(0,i.yg)("admonition",{type:"info"},(0,i.yg)("p",{parentName:"admonition"},"En caso de generar una recepci\xf3n de stock de un producto que tiene serie, se debe agregar ",(0,i.yg)("inlineCode",{parentName:"p"},"serialNumber")," (String) con su valor.")),(0,i.yg)("admonition",{type:"tip"},(0,i.yg)("p",{parentName:"admonition"},"Para el ingreso de stock, se puede referenciar al producto mediante ",(0,i.yg)("inlineCode",{parentName:"p"},"id"),", o ",(0,i.yg)("inlineCode",{parentName:"p"},"barCode")," o ",(0,i.yg)("inlineCode",{parentName:"p"},"code"),". ")),(0,i.yg)("h4",{id:"respuesta"},"Respuesta"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "admissionDate": 1407297600,\n  "imagestionCcDescription": null,\n  "href": "https://api.bsale.io/v1/stocks/receptions/831.json",\n  "id": 831,\n  "details": {\n    "href": "https://api.bsale.io/v1/stocks/receptions/831/details.json"\n  },\n  "document": "Gu\xeda",\n  "documentNumber": 123,\n  "office": {\n    "href": "https://api.bsale.io/v1/offices/1.json",\n    "id": "1"\n  },\n  "imagestionCctId": 0,\n  "note": "prueba api",\n  "internalDispatchId": 0\n}\n')),(0,i.yg)("h2",{id:"put-una-recepci\xf3n-de-stock"},"PUT una recepci\xf3n de stock"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"PUT ",(0,i.yg)("inlineCode",{parentName:"li"},"/v1/stocks/receptions/831.json")," ")),(0,i.yg)("p",null,"Se debe enviar un Json con la siguiente estructura: "),(0,i.yg)("h3",{id:"ejemplo-json-1"},"Ejemplo JSON"),(0,i.yg)("h4",{id:"env\xedo-1"},"Env\xedo"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "document": "Gu\xeda",\n  "officeId": 2,\n  "documentNumber": "123",\n  "note": "Prueba de ingreso v\xeda api",\n  "details": [\n    {\n      "quantity": 27,\n      "variantId": 629,\n      "cost": 2970\n    }\n  ]\n}\n')),(0,i.yg)("h4",{id:"respuesta-1"},"Respuesta"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "admissionDate": 1407297600,\n  "imagestionCcDescription": null,\n  "href": "https://api.bsale.io/v1/stocks/receptions/831.json",\n  "id": 831,\n  "details": {\n    "href": "https://api.bsale.io/v1/stocks/receptions/831/details.json"\n  },\n  "document": "Gu\xeda",\n  "documentNumber": 123,\n  "office": {\n    "href": "https://api.bsale.io/v1/offices/1.json",\n    "id": "1"\n  },\n  "imagestionCctId": 0,\n  "note": "prueba api",\n  "internalDispatchId": 0\n}\n')),(0,i.yg)("h2",{id:"get-consumos-de-stock"},"GET consumos de stock"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"GET ",(0,i.yg)("inlineCode",{parentName:"li"},"/v1/stocks/consumptions.json"),"  retornar\xe1 los consumos.")),(0,i.yg)("h4",{id:"par\xe1metros-3"},"Par\xe1metros"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"limit"),", limita la cantidad de items de una respuesta JSON, por defecto el limit es 25, el m\xe1ximo permitido es 50."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"offset"),", permite paginar los items de una respuesta JSON, por defecto el offset es 0."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"fields"),", solo devolver atributos espec\xedficos de un recurso."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"expand"),", permite expandir instancias y colecciones."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"consumptiondate"),", Permite filtrar por la fecha del consumo."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"officeid"),", Permite filtrar por sucursal.")),(0,i.yg)("h4",{id:"ejemplos-4"},"Ejemplos"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"GET /v1/stocks/consumptions.json?limit=3&offset=0")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"GET /v1/stocks/consumptions.json?fields=[consumptiondate,note]")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"GET /v1/stocks/consumptions.json?expand=[details]"))),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "href": "https://api.bsale.io/v1/stocks/consumptions.json",\n    "count": 9,\n    "limit": 3,\n    "offset": 0,\n    "items": [\n        {\n            "href": "https://api.bsale.io/v1/stocks/consumptions/1.json",\n            "id": 1,\n            "consumptionDate": 1600646400,\n            "note": "a",\n            "imagestionCcdescription": "",\n            "imagestionCenterCostId": 0,\n            "updateStock": 0,\n            "consumptionTypeId": 1,\n            "office": {\n                "href": "https://api.bsale.io/v1/offices/1.json",\n                "id": "1"\n            },\n            "user": {\n                "href": "https://api.bsale.io/v1/users/1.json",\n                "id": "1"\n            },\n            "details": {\n                "href": "https://api.bsale.io/v1/stocks/consumptions/1/details.json"\n            }\n        },\n        {\n            "href": "https://api.bsale.io/v1/stocks/consumptions/2.json",\n            "id": 2,\n            "consumptionDate": 1615334400,\n            "note": "Inventory: Soporte  bsale",\n            "imagestionCcdescription": "",\n            "imagestionCenterCostId": 0,\n            "updateStock": 0,\n            "consumptionTypeId": 1,\n            "office": {\n                "href": "https://api.bsale.io/v1/offices/1.json",\n                "id": "1"\n            },\n            "user": {\n                "href": "https://api.bsale.io/v1/users/1.json",\n                "id": "1"\n            },\n            "details": {\n                "href": "https://api.bsale.io/v1/stocks/consumptions/2/details.json"\n            }\n        },\n        {\n            "href": "https://api.bsale.io/v1/stocks/consumptions/3.json",\n            "id": 3,\n            "consumptionDate": 1620864000,\n            "note": "Ajuste de Stock: Soporte  bsale",\n            "imagestionCcdescription": "",\n            "imagestionCenterCostId": 0,\n            "updateStock": 1,\n            "consumptionTypeId": 1,\n            "office": {\n                "href": "https://api.bsale.io/v1/offices/1.json",\n                "id": "1"\n            },\n            "user": {\n                "href": "https://api.bsale.io/v1/users/1.json",\n                "id": "1"\n            },\n            "details": {\n                "href": "https://api.bsale.io/v1/stocks/consumptions/3/details.json"\n            }\n        }\n    ],\n    "next": "https://api.bsale.io/v1/stocks/consumptions.json?limit=3&offset=3"\n}\n')),(0,i.yg)("h3",{id:"get-un-consumo"},"GET un consumo"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"GET ",(0,i.yg)("inlineCode",{parentName:"li"},"/v1/stocks/consumptions/1.json")," retornar\xe1 un consumo espec\xedfico.")),(0,i.yg)("h4",{id:"par\xe1metros-4"},"Par\xe1metros"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"expand"),", permite expandir instancias y colecciones para traer relaciones en una sola petici\xf3n.")),(0,i.yg)("h4",{id:"ejemplos-5"},"Ejemplos"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"GET /v1/stocks/consumptions/8.json?expand=details"))),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "href": "https://api.bsale.io/v1/stocks/consumptions/8.json",\n    "id": 8,\n    "consumptionDate": 1664841600,\n    "note": "Ajuste de Stock: Inventario",\n    "imagestionCcdescription": "",\n    "imagestionCenterCostId": 0,\n    "updateStock": 1,\n    "consumptionTypeId": 1,\n    "office": {\n        "href": "https://api.bsale.io/v1/offices/1.json",\n        "id": "1"\n    },\n    "user": {\n        "href": "https://api.bsale.io/v1/users/1.json",\n        "id": "1"\n    },\n    "details": {\n        "href": "https://api.bsale.io/v1/stocks/consumptions/8/details.json"\n    }\n}\n')),(0,i.yg)("h3",{id:"get-detalles-de-un-consumo"},"GET detalles de un consumo"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"GET ",(0,i.yg)("inlineCode",{parentName:"li"},"/v1/stocks/consumptions/1/details.json")," retornar\xe1 detalles de un consumo espec\xedfico.")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "href": "https://api.bsale.io/v1/stocks/consumptions/1/details.json",\n  "count": 2,\n  "limit": 25,\n  "offset": 0,\n  "items": [\n    {\n      "href": "https://api.bsale.io/v1/stocks/consumptions/1/details/1.json",\n      "id": 1,\n      "quantity": 36.78,\n      "cost": 3200,\n      "variantStock": 42.2,\n      "variant": {\n        "href": "https://api.bsale.io/v1/variant/355.json",\n        "id": "355"\n      }\n    },\n    {\n      "href": "https://api.bsale.io/v1/stocks/consumptions/2/details/2.json",\n      "id": 2,\n      "quantity": 78.64,\n      "cost": 1311.08850457782,\n      "variantStock": 106.56,\n      "variant": {\n        "href": "https://api.bsale.io/v1/variant/388.json",\n        "id": "388"\n      }\n    }\n  ]\n}\n')),(0,i.yg)("h4",{id:"get-un-de-detalle-de-un-consumo"},"GET un de detalle de un consumo"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"GET ",(0,i.yg)("inlineCode",{parentName:"li"},"/v1/stocks/consumptions/1/details/1.json")," retornar\xe1 un detalle de un consumo espec\xedfica.")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "href": "https://api.bsale.io/v1/stocks/consumptions/1/details/1.json",\n  "id": 1,\n  "quantity": 36.78,\n  "cost": 3200,\n  "variantStock": 42.2,\n  "variant": {\n    "href": "https://api.bsale.io/v1/variant/355.json",\n    "id": "355"\n  }\n}\n')),(0,i.yg)("h3",{id:"get-tipos-de-consumos"},"GET tipos de consumos"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"GET ",(0,i.yg)("inlineCode",{parentName:"li"},"/v1/stock_consumption_types.json")," retornar\xe1 los tipos de consumos creados.")),(0,i.yg)("admonition",{type:"note"},(0,i.yg)("p",{parentName:"admonition"},"Es posible solicitar la creaci\xf3n de nuevos tipos de consumo, a ",(0,i.yg)("a",{parentName:"p",href:"mailto:ayuda@bsale.app"},"ayuda@bsale.app"))),(0,i.yg)("h4",{id:"ejemplos-6"},"Ejemplos"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"GET /v1/stock_consumption_types.json"))),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "href": "https://api.bsale.io/v1/stock_consumption_types.json",\n    "count": 10,\n    "limit": 25,\n    "offset": 0,\n    "items": [\n        {\n            "cntId": 1,\n            "cntI18nName": "consumption_type.retiro",\n            "cntActive": 1,\n            "cntCode": "12"\n        },\n        {\n            "cntId": 2,\n            "cntI18nName": "consumption_type.mermas",\n            "cntActive": 1,\n            "cntCode": "13"\n        },\n        {\n            "cntId": 3,\n            "cntI18nName": "consumption_type.desmedro",\n            "cntActive": 1,\n            "cntCode": "14"\n        },\n        {\n            "cntId": 4,\n            "cntI18nName": "consumption_type.destruccion",\n            "cntActive": 1,\n            "cntCode": "15"\n        },\n        {\n            "cntId": 5,\n            "cntI18nName": "Eventos internos",\n            "cntActive": 1,\n            "cntCode": "16"\n        }\n    ]\n}\n')),(0,i.yg)("h2",{id:"post-un-consumo-de-stock"},"POST un consumo de stock"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"POST ",(0,i.yg)("inlineCode",{parentName:"li"},"/v1/stocks/consumptions.json")," ")),(0,i.yg)("p",null,"Para crear un consumo (restar cantidades de stock), se debe enviar un JSON con la siguiente estructura:"),(0,i.yg)("h3",{id:"ejemplo-json-2"},"Ejemplo JSON"),(0,i.yg)("h4",{id:"env\xedo-2"},"Env\xedo"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "note": "prueba de consumo api",\n  "officeId": 1,\n  "details": [\n    {\n      "quantity": 13,\n      "variantId": 629\n    }\n  ]\n}\n')),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"officeId"),", Id de la sucursal donde se ingresa el stock (Integer)."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"note"),", comentario de ingreso, se visualiza en la interfaz de Bsale (String)."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"documentNumber"),", n\xfamero de documento de ingreso (Integer)"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"quantity"),", cantidad ingreso de stock")),(0,i.yg)("admonition",{type:"info"},(0,i.yg)("p",{parentName:"admonition"},"En caso de generar un consumo de stock de un producto que tiene serie, se debe agregar ",(0,i.yg)("inlineCode",{parentName:"p"},"serialNumber"),"(String) con su valor.")),(0,i.yg)("admonition",{type:"tip"},(0,i.yg)("p",{parentName:"admonition"},"Para el consumo de stock, se puede referenciar al producto mediante ",(0,i.yg)("inlineCode",{parentName:"p"},"id"),", o ",(0,i.yg)("inlineCode",{parentName:"p"},"barCode")," o ",(0,i.yg)("inlineCode",{parentName:"p"},"code"),". ")),(0,i.yg)("h4",{id:"respuesta-2"},"Respuesta"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "office": {\n    "id": "1",\n    "href": "https://api.bsale.io/v1/offices/1.json"\n  },\n  "imagestionCenterCostId": null,\n  "details": {\n    "href": "https://api.bsale.io/v1/stocks/consumptions/593/details.json"\n  },\n  "note": "prueba api",\n  "consumptionDate": 1407297600,\n  "imagestionCcdescription": null,\n  "id": 593,\n  "href": "https://api.bsale.io/v1/stocks/consumptions/593.json"\n}\n')))}u.isMDXComponent=!0}}]);