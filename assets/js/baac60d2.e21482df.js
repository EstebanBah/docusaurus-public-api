"use strict";(self.webpackChunkdocusaurus_public_api=self.webpackChunkdocusaurus_public_api||[]).push([[5272],{5680:(e,n,a)=>{a.d(n,{xA:()=>d,yg:()=>c});var t=a(6540);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function s(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=t.createContext({}),p=function(e){var n=t.useContext(o),a=n;return e&&(a="function"==typeof e?e(n):s(s({},n),e)),a},d=function(e){var n=p(e.components);return t.createElement(o.Provider,{value:n},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),g=p(a),m=i,c=g["".concat(o,".").concat(m)]||g[m]||u[m]||r;return a?t.createElement(c,s(s({ref:n},d),{},{components:a})):t.createElement(c,s({ref:n},d))}));function c(e,n){var a=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=a.length,s=new Array(r);s[0]=m;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l[g]="string"==typeof e?e:i,s[1]=l;for(var p=2;p<r;p++)s[p]=a[p];return t.createElement.apply(null,s)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1455:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var t=a(8168),i=(a(6540),a(5680));const r={sidebar_position:11,title:"Despachos (Gu\xeda de remisi\xf3n)",description:"Crear, editar y listar despachos",slug:"/documentos/despachos"},s="Despacho (Gu\xeda de remisi\xf3n)",l={unversionedId:"Documentos/Despachos",id:"version-PE/Documentos/Despachos",title:"Despachos (Gu\xeda de remisi\xf3n)",description:"Crear, editar y listar despachos",source:"@site/versioned_docs/version-PE/Documentos/Despachos.md",sourceDirName:"Documentos",slug:"/documentos/despachos",permalink:"/docusaurus-public-api/PE/documentos/despachos",draft:!1,tags:[],version:"PE",sidebarPosition:11,frontMatter:{sidebar_position:11,title:"Despachos (Gu\xeda de remisi\xf3n)",description:"Crear, editar y listar despachos",slug:"/documentos/despachos"},sidebar:"tutorialSidebar",previous:{title:"Documentos",permalink:"/docusaurus-public-api/PE/documentos"},next:{title:"Devoluciones",permalink:"/docusaurus-public-api/PE/devoluciones"}},o={},p=[{value:"Estructura JSON",id:"estructura-json",level:2},{value:"Atributos",id:"atributos",level:3},{value:"GET lista de despachos",id:"get-lista-de-despachos",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:4},{value:"Ejemplos",id:"ejemplos",level:4},{value:"GET \xfanico despacho",id:"get-\xfanico-despacho",level:2},{value:"Par\xe1metros",id:"par\xe1metros-1",level:4},{value:"Ejemplos",id:"ejemplos-1",level:4},{value:"GET detalles de un despacho",id:"get-detalles-de-un-despacho",level:2},{value:"GET un detalle de un despacho",id:"get-un-detalle-de-un-despacho",level:2},{value:"POST un despacho",id:"post-un-despacho",level:2},{value:"Referencias y fechas",id:"referencias-y-fechas",level:3},{value:"A partir de existente",id:"a-partir-de-existente",level:3},{value:"Traslado interno",id:"traslado-interno",level:3},{value:"Env\xedo",id:"env\xedo",level:4},{value:"Respuesta",id:"respuesta",level:4},{value:"Tipo de transporte externo",id:"tipo-de-transporte-externo",level:3},{value:"Env\xedo",id:"env\xedo-1",level:4},{value:"Tipo de transporte privado",id:"tipo-de-transporte-privado",level:3},{value:"Env\xedo",id:"env\xedo-2",level:4},{value:"Par\xe1metros de alias",id:"par\xe1metros-de-alias",level:4},{value:"Categor\xeda M1 o L",id:"categor\xeda-m1-o-l",level:3},{value:"Env\xedo",id:"env\xedo-3",level:4},{value:"Datos opcionales (Externo)",id:"datos-opcionales-externo",level:4},{value:"Datos opcionales (Privado)",id:"datos-opcionales-privado",level:4}],d={toc:p},g="wrapper";function u(e){let{components:n,...a}=e;return(0,i.yg)(g,(0,t.A)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"despacho-gu\xeda-de-remisi\xf3n"},"Despacho (Gu\xeda de remisi\xf3n)"),(0,i.yg)("p",null,"Generaci\xf3n de documentos tipo despacho. ",(0,i.yg)("em",{parentName:"p"},"(ej Gu\xedas de remisi\xf3n electr\xf3nicas)"),", listar despachos generados, detalles incluidos en el despacho. ."),(0,i.yg)("p",null,"C\xf3mo funciona la interfaz de Bsale, mira \xe9stos videos:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Creaci\xf3n de una gu\xeda de remisi\xf3n ",(0,i.yg)("a",{parentName:"li",href:"https://youtu.be/XBAd_W8m_FI"},"Ver")," "),(0,i.yg)("li",{parentName:"ul"},"Creaci\xf3n de una gu\xeda de remisi\xf3n a partir de otro documento ",(0,i.yg)("a",{parentName:"li",href:"https://youtu.be/G6LMsLwv7v0"},"Ver"))),(0,i.yg)("admonition",{type:"info"},(0,i.yg)("p",{parentName:"admonition"},"Un documento del tipo despacho, siempre genera una salida de stock (cuando se controla stock)")),(0,i.yg)("h2",{id:"estructura-json"},"Estructura JSON"),(0,i.yg)("p",null,"Al realizar una petici\xf3n ",(0,i.yg)("inlineCode",{parentName:"p"},"HTTP"),", el servicio retornara un JSON con la siguiente estructura:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-js",metastring:'title="Response /v1/shippings/22.json"',title:'"Response','/v1/shippings/22.json"':!0},'{\n  "href": "https://api.bsale.io/v1/shippings/22.json",\n  "id": 22,\n  "shippingDate": 1370318400,\n  "address": null,\n  "district": "",\n  "city": "",\n  "recipient": null,\n  "state": 0,\n  "office": {\n    "href": "https://api.bsale.io/v1/offices/1.json",\n    "id": "1"\n  },\n  "shipping_type": {\n    "href": "https://api.bsale.io/v1/shipping_types/1.json",\n    "id": "1"\n  },\n  "guide": {\n    "href": "https://api.bsale.io/v1/documents/23.json",\n    "id": "23"\n  },\n  "details": {\n    "href": "https://api.bsale.io/v1/shippings/22/details.json"\n  }\n}\n')),(0,i.yg)("h3",{id:"atributos"},"Atributos"),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"Atributo"),(0,i.yg)("th",{parentName:"tr",align:null},"Descripci\xf3n"),(0,i.yg)("th",{parentName:"tr",align:null},"Tipo dato"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("strong",{parentName:"td"},"href")),(0,i.yg)("td",{parentName:"tr",align:null},"url del documento despacho"),(0,i.yg)("td",{parentName:"tr",align:null},"String")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("strong",{parentName:"td"},"id")),(0,i.yg)("td",{parentName:"tr",align:null},"identificador \xfanico del despacho"),(0,i.yg)("td",{parentName:"tr",align:null},"Integer")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("strong",{parentName:"td"},"shippingDate")),(0,i.yg)("td",{parentName:"tr",align:null},"fecha del despacho"),(0,i.yg)("td",{parentName:"tr",align:null},"Integer")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("strong",{parentName:"td"},"address")),(0,i.yg)("td",{parentName:"tr",align:null},"direcci\xf3n del despacho"),(0,i.yg)("td",{parentName:"tr",align:null},"String")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("strong",{parentName:"td"},"district")),(0,i.yg)("td",{parentName:"tr",align:null},"distrito del despacho"),(0,i.yg)("td",{parentName:"tr",align:null},"String")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("strong",{parentName:"td"},"city")),(0,i.yg)("td",{parentName:"tr",align:null},"ciudad del despacho"),(0,i.yg)("td",{parentName:"tr",align:null},"String")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("strong",{parentName:"td"},"recipient")),(0,i.yg)("td",{parentName:"tr",align:null},"destinatario del despacho"),(0,i.yg)("td",{parentName:"tr",align:null},"String")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("strong",{parentName:"td"},"state")),(0,i.yg)("td",{parentName:"tr",align:null},"estado del descuento indica si el descuento esta activo(0) o inactivo (1)"),(0,i.yg)("td",{parentName:"tr",align:null},"Boolean")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("strong",{parentName:"td"},"received")),(0,i.yg)("td",{parentName:"tr",align:null},"estado de la recepci\xf3n traslado interno (0) No recibida (1) Recibida"),(0,i.yg)("td",{parentName:"tr",align:null},"Boolean")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("strong",{parentName:"td"},"office")),(0,i.yg)("td",{parentName:"tr",align:null},"nodo que indica la relaci\xf3n con la sucursal en la que fue emitida el despacho."),(0,i.yg)("td",{parentName:"tr",align:null})),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("strong",{parentName:"td"},"shipping_type")),(0,i.yg)("td",{parentName:"tr",align:null},"nodo que indica la relaci\xf3n con el tipo de despacho."),(0,i.yg)("td",{parentName:"tr",align:null})),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("strong",{parentName:"td"},"guide")),(0,i.yg)("td",{parentName:"tr",align:null},"nodo que indica el documento gu\xeda de despacho."),(0,i.yg)("td",{parentName:"tr",align:null})),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("strong",{parentName:"td"},"details")),(0,i.yg)("td",{parentName:"tr",align:null},"nodo que indica los detalles del despacho."),(0,i.yg)("td",{parentName:"tr",align:null})))),(0,i.yg)("h2",{id:"get-lista-de-despachos"},"GET lista de despachos"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"GET ",(0,i.yg)("inlineCode",{parentName:"li"},"/v1/shippings.json")," retornar\xe1 todos los despachos.")),(0,i.yg)("h4",{id:"par\xe1metros"},"Par\xe1metros"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"limit"),", limita la cantidad de items de una respuesta JSON, por defecto el limit es 25, el m\xe1ximo permitido es 50."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"offset"),", permite paginar los items de una respuesta JSON, por defecto el offset es 0."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"fields"),", solo devolver atributos espec\xedficos de un recurso"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"expand"),", permite expandir instancias y colecciones para traer relaciones en una sola petici\xf3n."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"shippingdate"),", Permite filtrar por fecha de devoluci\xf3n."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"officeid"),", Permite filtrar por sucursal."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"shippingtypeid"),", filtra por tipo de despacho"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"state"),", boolean (0 o 1) indica si los documentos est\xe1n activos(0) inactivos (1)."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"documentid"),", id documento gu\xeda de remisi\xf3n")),(0,i.yg)("h4",{id:"ejemplos"},"Ejemplos"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"GET /v1/shippings.json?limit=10&offset=0")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"GET /v1/shippings.json?fields=[shippingdate,recipient]")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"GET /v1/shippings.json?expand=[guide,shipping_type,details]"))),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json",metastring:'title="Response /shippings.json "',title:'"Response',"/shippings.json":!0,'"':!0},'{\n  "href": "https://api.bsale.io/v1/shippings.json",\n  "count": 13430,\n  "limit": 3,\n  "offset": 0,\n  "items": [\n    {\n      "href": "https://api.bsale.io/v1/shippings/22.json",\n      "id": 22,\n      "shippingDate": 1370318400,\n      "address": null,\n      "district": "",\n      "city": "",\n      "recipient": null,\n      "state": 0,\n      "office": {\n        "href": "https://api.bsale.io/v1/offices/1.json",\n        "id": "1"\n      },\n      "shipping_type": {\n        "href": "https://api.bsale.io/v1/shipping_types/1.json",\n        "id": "1"\n      },\n      "guide": {\n        "href": "https://api.bsale.io/v1/documents/23.json",\n        "id": "23"\n      },\n      "details": {\n        "href": "https://api.bsale.io/v1/shippings/22/details.json"\n      }\n    },\n    {\n      "href": "https://api.bsale.io/v1/shippings/23.json",\n      "id": 23,\n      "shippingDate": 1370318400,\n      "address": null,\n      "district": "",\n      "city": "",\n      "recipient": null,\n      "state": 0,\n      "office": {\n        "href": "https://api.bsale.io/v1/offices/1.json",\n        "id": "1"\n      },\n      "shipping_type": {\n        "href": "https://api.bsale.io/v1/shipping_types/1.json",\n        "id": "1"\n      },\n      "guide": {\n        "href": "https://api.bsale.io/v1/documents/24.json",\n        "id": "24"\n      },\n      "details": {\n        "href": "https://api.bsale.io/v1/shippings/23/details.json"\n      }\n    },\n    {\n      "href": "https://api.bsale.io/v1/shippings/24.json",\n      "id": 24,\n      "shippingDate": 1370318400,\n      "address": null,\n      "district": "",\n      "city": "",\n      "recipient": null,\n      "state": 0,\n      "office": {\n        "href": "https://api.bsale.io/v1/offices/1.json",\n        "id": "1"\n      },\n      "shipping_type": {\n        "href": "https://api.bsale.io/v1/shipping_types/1.json",\n        "id": "1"\n      },\n      "guide": {\n        "href": "https://api.bsale.io/v1/documents/25.json",\n        "id": "25"\n      },\n      "details": {\n        "href": "https://api.bsale.io/v1/shippings/24/details.json"\n      }\n    }\n  ]\n}\n')),(0,i.yg)("h2",{id:"get-\xfanico-despacho"},"GET \xfanico despacho"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"GET ",(0,i.yg)("inlineCode",{parentName:"li"},"/v1/shippings/22.json ")," retornar\xe1 un despacho espec\xedfico.")),(0,i.yg)("h4",{id:"par\xe1metros-1"},"Par\xe1metros"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"expand"),", permite expandir instancias y colecciones para traer relaciones en una sola petici\xf3n.")),(0,i.yg)("h4",{id:"ejemplos-1"},"Ejemplos"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"GET /v1/shippings/1.json?expand=[details]"))),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json",metastring:'title="Response /shippings/22.json "',title:'"Response',"/shippings/22.json":!0,'"':!0},'{\n  "href": "https://api.bsale.io/v1/shippings/22.json",\n  "id": 22,\n  "shippingDate": 1370318400,\n  "address": null,\n  "district": "",\n  "city": "",\n  "recipient": null,\n  "state": 0,\n  "office": {\n    "href": "https://api.bsale.io/v1/offices/1.json",\n    "id": "1"\n  },\n  "shipping_type": {\n    "href": "https://api.bsale.io/v1/shipping_types/1.json",\n    "id": "1"\n  },\n  "guide": {\n    "href": "https://api.bsale.io/v1/documents/23.json",\n    "id": "23"\n  },\n  "details": {\n    "href": "https://api.bsale.io/v1/shippings/22/details.json"\n  }\n}\n')),(0,i.yg)("h2",{id:"get-detalles-de-un-despacho"},"GET detalles de un despacho"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"GET ",(0,i.yg)("inlineCode",{parentName:"li"},"GET /v1/shippings/22/details.json")," retorna los detalles contenidos en un despacho.")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json",metastring:'title="Response /shippings/22/details.json "',title:'"Response',"/shippings/22/details.json":!0,'"':!0},'{\n  "href": "https://api.bsale.io/v1/shippings/22/details.json",\n  "count": 1,\n  "limit": 25,\n  "offset": 0,\n  "items": [\n    {\n      "href": "https://api.bsale.io/v1/shippings/22/details/31.json",\n      "id": 31,\n      "quantity": 1,\n      "variantStock": 28,\n      "variantCost": 0,\n      "variant": {\n        "href": "https://api.bsale.io/v1/variants/8.json",\n        "id": "8"\n      }\n    }\n  ]\n}\n')),(0,i.yg)("h2",{id:"get-un-detalle-de-un-despacho"},"GET un detalle de un despacho"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"GET ",(0,i.yg)("inlineCode",{parentName:"li"},"/v1/shippings/22/details/31.json")," Retornar\xe1 un detalle espec\xedfico del despacho.")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json",metastring:'title="Response /shippings/22/details/31.json "',title:'"Response',"/shippings/22/details/31.json":!0,'"':!0},'{\n  "href": "https://api.bsale.io/v1/shippings/22/details/31.json",\n  "id": 31,\n  "quantity": 1,\n  "variantStock": 28,\n  "variantCost": 0,\n  "variant": {\n    "href": "https://api.bsale.io/v1/variants/8.json",\n    "id": "8"\n  }\n}\n')),(0,i.yg)("h2",{id:"post-un-despacho"},"POST un despacho"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"POST ",(0,i.yg)("inlineCode",{parentName:"li"},"/v1/shippings.json")," ")),(0,i.yg)("p",null,"Para crear un documento del tipo despacho (manual o electr\xf3nico), se debe enviar un JSON con la siguiente estructura:"),(0,i.yg)("admonition",{type:"caution"},(0,i.yg)("p",{parentName:"admonition"},"La ",(0,i.yg)("strong",{parentName:"p"},"generaci\xf3n de documentos de remisi\xf3n")," est\xe1 en fase de pruebas, por lo que su uso debe ser notificado a ",(0,i.yg)("a",{parentName:"p",href:"mailto:ayuda@bsale.app"},"ayuda@bsale.app")," para mantener su monitoreo y seguimiento.")),(0,i.yg)("h3",{id:"referencias-y-fechas"},"Referencias y fechas"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "documentTypeId": 20,\n  "officeId": 1,\n  "priceListId": 18,\n  "emissionDate": 1603670400,\n}\n')),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"documentTypeId"),", Id del tipo de documento, del tipo despacho. (Integer)."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"officeId"),", Id de la sucursal donde se emite el documento, si no es especificada el documento quedara asignado a la sucursal por defecto del sistema (Integer)."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"priceListId"),", Id de la lista de precio utilizada por el documento, si no es especificada se utilizara la lista de precio por defecto de la sucursal (Integer)."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"emissionDate"),", Fecha de emisi\xf3n del documento (Integer) (no se debe aplicar zona horaria, solo considerar la fecha)."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"shippingTypeId"),", Id tipo de despacho (tipo de traslado) (Integer) "),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"district"),", distrito de despacho (String) "),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"address"),", Direcci\xf3n de despacho (String)"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"recipient"),", Nombre quien recepciona despacho (String)")),(0,i.yg)("admonition",{type:"info"},(0,i.yg)("p",{parentName:"admonition"},"Se deben enviar los datos de direcci\xf3n del cliente como direcciones del despacho")),(0,i.yg)("h3",{id:"a-partir-de-existente"},"A partir de existente"),(0,i.yg)("p",null,"Si se desea generar una gu\xeda a partir de otro documento, se debe enviar el identificador del detalle del documento original:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json",metastring:'"','"':!0},'{\n{\n   "details": [\n       {\n           "detailId": 105,\n           "quantity": 1\n       }\n   ],\n}\n')),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"detailId"),", Id de detalle del documento de referencia"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"quantity"),", Cantidad asociada al detalle")),(0,i.yg)("h3",{id:"traslado-interno"},"Traslado interno"),(0,i.yg)("p",null,"Si se desea generar una gu\xeda de traslado interno, se debe agregar al env\xedo"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json"},'{\n "officeId": 1,\n "destinationOfficeId":3,\n "shippingTypeId": 5\n}\n')),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"officeId"),", Id de sucursal origen (donde se genera el documento)"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"destinationOfficeId"),", Id sucursal destino"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"shippingTypeId"),", Id tipo de despacho")),(0,i.yg)("h4",{id:"env\xedo"},"Env\xedo"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json",metastring:'title="POST /shippings.json"',title:'"POST','/shippings.json"':!0},'{\n  "documentTypeId": 7,\n  "officeId": 1,\n  "emissionDate": 1603670400,\n  "shippingTypeId": 6,\n  "district": "Lima",\n  "city": "Lima",\n  "address": "Miraflores",\n  "declare": 1,\n  "recipient": "Edison Packard",\n  "details": [\n    {\n      "quantity": 500,\n      "code": "1372685554",\n      "netUnitValue": 12000\n    }\n  ],\n  "client": {\n    "code": "123456789",\n    "district": "Lima",\n    "activity": "Arriendo de maquinaria pesada",\n    "company": "Maquinar\xedas Express",\n    "city": "Lima",\n    "email": "apidespachos@bsale.com.pe",\n    "address": "Los Alamos #122"\n  }\n}\n')),(0,i.yg)("h4",{id:"respuesta"},"Respuesta"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json",metastring:'title="201 Response /shippings.json "',title:'"201',Response:!0,"/shippings.json":!0,'"':!0},'{\n  "href": "https://api.bsale.io/v1/shippings/1554.json",\n  "id": 1554,\n  "shippingDate": 1603670400,\n  "address": "Miraflores 1005",\n  "district": "Lima",\n  "city": "Lima",\n  "recipient": "Edison Packard",\n  "state": 0,\n  "office": {\n    "href": "https://api.bsale.io/v1/offices/1.json",\n    "id": "1"\n  },\n  "user": {\n    "href": "https://api.bsale.io/v1/users/257.json",\n    "id": "257"\n  },\n  "shipping_type": {\n    "href": "https://api.bsale.io/v1/shipping_types/6.json",\n    "id": "6"\n  },\n  "guide": {\n    "href": "https://api.bsale.io/v1/documents/61716.json",\n    "id": "61716"\n  },\n  "details": {\n    "href": "https://api.bsale.io/v1/shippings/1554/details.json"\n  }\n}\n')),(0,i.yg)("h3",{id:"tipo-de-transporte-externo"},"Tipo de transporte externo"),(0,i.yg)("p",null,"Si se desea generar una gu\xeda de tipo transporte externo, se debe agregar al env\xedo el nodo de atributos din\xe1micos (dynamicAttributes)."),(0,i.yg)("h4",{id:"env\xedo-1"},"Env\xedo"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json",metastring:'title="POST /shippings.json "',title:'"POST',"/shippings.json":!0,'"':!0},'"dynamicAttributes": [\n    {\n        "alias": "shipmentTransportModeCode",\n        "values": [\n            "01"\n        ]\n    },\n    {\n        "alias": "shipmentCarrierCompanyName",\n        "values": [\n            "SED"\n        ]\n    },\n    {\n        "alias": "shipmentCarrierCode",\n        "values": [\n            "20538856674"\n        ]\n    },\n    {\n        "alias": "shipmentStartDate",\n        "values": [\n            "2023-04-12"\n        ]\n    },\n    {\n        "alias": "shipmentOriginAddressDescription",\n        "values": [\n            "Av Gral Diez Canseco Nro 527 "\n        ]\n    },\n    {\n        "alias": "shipmentOriginAddressId",\n        "values": [\n            "010101"\n        ]\n    },\n    {\n        "alias": "shipmentDeliveryAddressId",\n        "values": [\n            "010102"\n        ]\n    },\n    {\n        "alias": "shipmentGrossWeightMeasure",\n        "values": [\n            "3"\n        ]\n    },\n]\n\n')),(0,i.yg)("h3",{id:"tipo-de-transporte-privado"},"Tipo de transporte privado"),(0,i.yg)("p",null,"Si se desea generar una gu\xeda de tipo transporte privado, se debe agregar al env\xedo el nodo de atributos din\xe1micos (dynamicAttributes)."),(0,i.yg)("h4",{id:"env\xedo-2"},"Env\xedo"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json",metastring:'title="POST /shippings.json "',title:'"POST',"/shippings.json":!0,'"':!0},'"dynamicAttributes": [\n    {\n        "alias": "shipmentTransportModeCode",\n        "values": [\n            "02"\n        ]\n    },\n    {\n        "alias": "shipmentCarrierCompanyName",\n        "values": [\n            "SED"\n        ]\n    },\n    {\n        "alias": "shipmentCarrierDriverCode",\n        "values": [\n            "20538856674"\n        ]\n    },\n    {\n        "alias": "shipmentCarrierDriverCodeType",\n        "values": [\n            "1"\n        ]\n    },\n    {\n        "alias": "shipmentCarrierPlateId",\n        "values": [\n            "HFPD19"\n        ]\n    },\n    {\n        "alias": "shipmentStartDate",\n        "values": [\n            "2023-04-12"\n        ]\n    },\n    {\n        "alias": "shipmentOriginAddressDescription",\n        "values": [\n            "Av Gral Diez Canseco Nro 527 "\n        ]\n    },\n    {\n        "alias": "shipmentOriginAddressId",\n        "values": [\n            "010101"\n        ]\n    },\n    {\n        "alias": "shipmentDeliveryAddressId",\n        "values": [\n            "010102"\n        ]\n    },\n    {\n        "alias": "shipmentGrossWeightMeasure",\n        "values": [\n            "3"\n        ]\n    },\n    {\n        "alias": "shipmentCarrierCompanySurname",\n        "values": [\n            "surname"\n        ]\n    },\n    {\n        "alias": "shipmentCarrierCompanyId",\n        "values": [\n            "123456789"\n        ]\n    }\n]\n\n')),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"dynamicAttributes"),", atributos din\xe1micos de despacho (array)"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"alias"),",  Corresponde al alias del atributo (string)"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"values"),", Corresponde al valor del alias (array)")),(0,i.yg)("h4",{id:"par\xe1metros-de-alias"},"Par\xe1metros de alias"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"shipmentTransportModeCode"),", Modo de transporte"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"shipmentCarrierCompanyName"),", Nombre de transportista"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"shipmentCarrierCode"),", Id empresa de transporte"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"shipmentCarrierDriverCodeType"),", Id Conductor"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"shipmentCarrierPlateId"),", N\xfamero de placa"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"shipmentStartDate"),", Fecha de inicio"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"shipmentOriginAddressDescription"),", Direcci\xf3n de origen"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"shipmentGrossWeightMeasure"),", Peso bruto total KG"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"shipmentCarrierCompanySurname"),", Apellidos del conductor"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"shipmentSupplierCodeType"),", Apellidos del conductor"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"shipmentSupplierCode"),", Id del proveedor"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"shipmentSupplierName"),", Nombre del proveedor"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"shipmentCarrierCompanyId"),", N\xfamero licencia del conductor"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"shipmentOriginAddressId"),", C\xf3digo de ubigeo de origen"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"shipmentDeliveryAddressId"),", C\xf3digo de ubigeo de destino"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"buyerCodeType"),", Tipo id del comprador"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"buyerCode"),", Id del comprador"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"buyerName"),", Nombre del comprador")),(0,i.yg)("h3",{id:"categor\xeda-m1-o-l"},"Categor\xeda M1 o L"),(0,i.yg)("p",null,"Si se desea especificar esta opci\xf3n para la categor\xeda del veh\xedculo seg\xfan el cat\xe1logo de SUNAT,\nse debe enviar la siguiente opci\xf3n con valor ",(0,i.yg)("inlineCode",{parentName:"p"},"02")," dentro del nodo ",(0,i.yg)("inlineCode",{parentName:"p"},"dynamicAttributes")),(0,i.yg)("h4",{id:"env\xedo-3"},"Env\xedo"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json",metastring:'title="POST /shippings.json "',title:'"POST',"/shippings.json":!0,'"':!0},'"dynamicAttributes": [\n   {\n        "alias": "specialInstructions",\n        "values": [\n            "02"\n        ]\n    }\n]\n')),(0,i.yg)("admonition",{type:"info"},(0,i.yg)("p",{parentName:"admonition"},"Con esta opci\xf3n activada, algunos de los datos de transportista ser\xe1n opcionales, dependiendo del ",(0,i.yg)("strong",{parentName:"p"},"Modo de Transporte")," ",(0,i.yg)("inlineCode",{parentName:"p"},"shipmentTransportModeCode"))),(0,i.yg)("h4",{id:"datos-opcionales-externo"},"Datos opcionales (Externo)"),(0,i.yg)("p",null,"Los campos opcinales cuando el Modo de Transporte es Externo (",(0,i.yg)("inlineCode",{parentName:"p"},"shipmentTransportModeCode = 01"),")"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"shipmentCarrierCompanyName"))),(0,i.yg)("h4",{id:"datos-opcionales-privado"},"Datos opcionales (Privado)"),(0,i.yg)("p",null,"Los campos opcinales cuando el Modo de Transporte es Externo (",(0,i.yg)("inlineCode",{parentName:"p"},"shipmentTransportModeCode = 02"),")"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"shipmentCarrierDriverCodeType")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"shipmentCarrierDriverCode")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"shipmentCarrierCompanySurname")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"shipmentCarrierCompanyId")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"shipmentCarrierCompanyId"))))}u.isMDXComponent=!0}}]);