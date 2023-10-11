"use strict";(self.webpackChunkdocusaurus_public_api=self.webpackChunkdocusaurus_public_api||[]).push([[8981],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=l,k=p["".concat(o,".").concat(m)]||p[m]||u[m]||i;return n?a.createElement(k,r(r({ref:t},d),{},{components:n})):a.createElement(k,r({ref:t},d))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[p]="string"==typeof e?e:l,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2951:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(7462),l=(n(7294),n(3905));const i={sidebar_position:30,title:"Clientes",description:"Crear, editar y listar clientes",slug:"/clientes"},r="Clientes",s={unversionedId:"Clientes/Clientes",id:"version-MX/Clientes/Clientes",title:"Clientes",description:"Crear, editar y listar clientes",source:"@site/versioned_docs/version-MX/Clientes/Clientes.md",sourceDirName:"Clientes",slug:"/clientes",permalink:"/docusaurus-public-api/MX/clientes",draft:!1,tags:[],version:"MX",sidebarPosition:30,frontMatter:{sidebar_position:30,title:"Clientes",description:"Crear, editar y listar clientes",slug:"/clientes"},sidebar:"tutorialSidebar",previous:{title:"Webhooks",permalink:"/docusaurus-public-api/MX/productos-y-servicios/webhooks"},next:{title:"Pagos",permalink:"/docusaurus-public-api/MX/pagos"}},o={},c=[{value:"Estructura JSON",id:"estructura-json",level:2},{value:"Atributos",id:"atributos",level:3},{value:"GET lista de clientes",id:"get-lista-de-clientes",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:4},{value:"Ejemplos",id:"ejemplos",level:4},{value:"GET un cliente",id:"get-un-cliente",level:2},{value:"Par\xe1metros",id:"par\xe1metros-1",level:4},{value:"Ejemplos",id:"ejemplos-1",level:4},{value:"GET atributos de un cliente",id:"get-atributos-de-un-cliente",level:2},{value:"GET cantidad de clientes",id:"get-cantidad-de-clientes",level:2},{value:"Contactos",id:"contactos",level:2},{value:"GET contactos de un cliente",id:"get-contactos-de-un-cliente",level:3},{value:"GET un \xfanico contacto de un cliente",id:"get-un-\xfanico-contacto-de-un-cliente",level:5},{value:"POST un contacto de un cliente",id:"post-un-contacto-de-un-cliente",level:3},{value:"Ejemplo JSON",id:"ejemplo-json",level:4},{value:"Env\xedo",id:"env\xedo",level:5},{value:"Respuesta",id:"respuesta",level:5},{value:"DELETE un contacto de un cliente",id:"delete-un-contacto-de-un-cliente",level:3},{value:"Direcciones",id:"direcciones",level:2},{value:"GET lista de direcciones de un cliente",id:"get-lista-de-direcciones-de-un-cliente",level:3},{value:"Par\xe1metros",id:"par\xe1metros-2",level:4},{value:"Ejemplos",id:"ejemplos-2",level:4},{value:"GET una \xfanica direcci\xf3n de un cliente",id:"get-una-\xfanica-direcci\xf3n-de-un-cliente",level:3},{value:"POST una direcci\xf3n de un cliente",id:"post-una-direcci\xf3n-de-un-cliente",level:3},{value:"Ejemplo JSON",id:"ejemplo-json-1",level:4},{value:"Env\xedo",id:"env\xedo-1",level:5},{value:"Respuesta",id:"respuesta-1",level:5},{value:"PUT una direcci\xf3n de un cliente",id:"put-una-direcci\xf3n-de-un-cliente",level:3},{value:"Ejemplo JSON",id:"ejemplo-json-2",level:4},{value:"Env\xedo",id:"env\xedo-2",level:5},{value:"Respuesta",id:"respuesta-2",level:4},{value:"DELETE una direcci\xf3n de un cliente",id:"delete-una-direcci\xf3n-de-un-cliente",level:3},{value:"Respuesta",id:"respuesta-3",level:4},{value:"POST un cliente",id:"post-un-cliente",level:2},{value:"Ejemplo JSON",id:"ejemplo-json-3",level:3},{value:"Env\xedo",id:"env\xedo-3",level:4},{value:"Atributos (opcional)",id:"atributos-opcional",level:3},{value:"Respuesta",id:"respuesta-4",level:4},{value:"Cliente extranjero",id:"cliente-extranjero",level:4},{value:"PUT un cliente",id:"put-un-cliente",level:2},{value:"Ejemplo JSON",id:"ejemplo-json-4",level:3},{value:"Env\xedo",id:"env\xedo-4",level:4},{value:"Respuesta",id:"respuesta-5",level:4},{value:"DELETE un cliente virtualmente",id:"delete-un-cliente-virtualmente",level:2},{value:"PUT puntos de cliente",id:"put-puntos-de-cliente",level:2},{value:"Par\xe1metros",id:"par\xe1metros-3",level:3}],d={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,l.kt)(p,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"clientes"},"Clientes"),(0,l.kt)("p",null,"Listar, crear, editar y eliminar clientes. Adem\xe1s podr\xe1s consultar pagos a clientes, contar clientes, ver documentos por cliente, agregar direcciones adicionales (casa matriz, sucursal a, b, etc). Endpoints para gestionar tus clientes en Bsale."),(0,l.kt)("p",null,"C\xf3mo funciona la interfaz de Bsale, mira \xe9stos videos:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Gesti\xf3n de clientes ",(0,l.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=j5UE9VjaY2w"},"Ver")," ")),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"El RFC, se almacena en el ",(0,l.kt)("inlineCode",{parentName:"p"},"code"),", es importante que valides los datos antes de enviar.")),(0,l.kt)("h2",{id:"estructura-json"},"Estructura JSON"),(0,l.kt)("p",null,"Al realizar una petici\xf3n ",(0,l.kt)("inlineCode",{parentName:"p"},"HTTP"),", el servicio retornara un JSON con la siguiente estructura:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Response /clients.json"',title:'"Response','/clients.json"':!0},'{\n  "href": "https://api.bsale.io/v1/clients.json",\n  "count": 2,\n  "limit": 25,\n  "offset": 0,\n  "items": [\n    {\n      "href": "https://api.bsale.io/v1/clients/2.json",\n      "id": 2,\n      "firstName": "Francisco",\n      "lastName": "Pullnm",\n      "email": "fpull@gmail.com",\n      "state": 0,\n      "office": {\n        "href": "https://api.bsale.io/v1/offices/1.json",\n        "id": "1"\n      }\n    },\n    {\n      "href": "https://api.bsale.io/v1/clients/1.json",\n      "id": 1,\n      "firstName": "Asistente",\n      "lastName": "bsale",\n      "email": "ayuda@bsale.app",\n      "state": 0,\n      "office": {\n        "href": "https://api.bsale.io/v1/offices/1.json",\n        "id": "1"\n      }\n    }\n  ]\n}\n')),(0,l.kt)("h3",{id:"atributos"},"Atributos"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Atributo"),(0,l.kt)("th",{parentName:"tr",align:null},"Descripci\xf3n"),(0,l.kt)("th",{parentName:"tr",align:null},"Tipo dato"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"href")),(0,l.kt)("td",{parentName:"tr",align:null},"url del clientes"),(0,l.kt)("td",{parentName:"tr",align:null},"String")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"id")),(0,l.kt)("td",{parentName:"tr",align:null},"identificador \xfanico del clientes"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"firstName")),(0,l.kt)("td",{parentName:"tr",align:null},"nombre del cliente"),(0,l.kt)("td",{parentName:"tr",align:null},"String")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"lastName")),(0,l.kt)("td",{parentName:"tr",align:null},"apellido del cliente"),(0,l.kt)("td",{parentName:"tr",align:null},"String")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"code")),(0,l.kt)("td",{parentName:"tr",align:null},"rfc del cliente"),(0,l.kt)("td",{parentName:"tr",align:null},"String")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"phone")),(0,l.kt)("td",{parentName:"tr",align:null},"tel\xe9fono del cliente"),(0,l.kt)("td",{parentName:"tr",align:null},"String")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"company")),(0,l.kt)("td",{parentName:"tr",align:null},"empresa del cliente"),(0,l.kt)("td",{parentName:"tr",align:null},"String")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"note")),(0,l.kt)("td",{parentName:"tr",align:null},"una descripci\xf3n del cliente"),(0,l.kt)("td",{parentName:"tr",align:null},"String")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"facebook")),(0,l.kt)("td",{parentName:"tr",align:null},"facebook del cliente"),(0,l.kt)("td",{parentName:"tr",align:null},"String")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"twitter")),(0,l.kt)("td",{parentName:"tr",align:null},"twitter del cliente."),(0,l.kt)("td",{parentName:"tr",align:null},"String")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"hasCredit")),(0,l.kt)("td",{parentName:"tr",align:null},"indica si el cliente posee cr\xe9dito No(0) o Si(1)"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"maxCredit")),(0,l.kt)("td",{parentName:"tr",align:null},"monto m\xe1ximo de cr\xe9dito del cliente"),(0,l.kt)("td",{parentName:"tr",align:null},"Float")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"state")),(0,l.kt)("td",{parentName:"tr",align:null},"estado del cliente indica si esta activo(0) o inactivo (1)"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"activity")),(0,l.kt)("td",{parentName:"tr",align:null},"giro del cliente"),(0,l.kt)("td",{parentName:"tr",align:null},"String")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"city")),(0,l.kt)("td",{parentName:"tr",align:null},"ciudad del cliente"),(0,l.kt)("td",{parentName:"tr",align:null},"String")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"district")),(0,l.kt)("td",{parentName:"tr",align:null},"colonia del cliente"),(0,l.kt)("td",{parentName:"tr",align:null},"String")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"companyOrPerson")),(0,l.kt)("td",{parentName:"tr",align:null},"indica si el cliente es persona natural o empresa (0)Persona o (1)Empresa"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"points")),(0,l.kt)("td",{parentName:"tr",align:null},"cantidad de puntos acumulados del cliente"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"pointsUpdated")),(0,l.kt)("td",{parentName:"tr",align:null},"fecha de la \xfaltima actualizaci\xf3n de puntos"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"accumulatePoints")),(0,l.kt)("td",{parentName:"tr",align:null},"indica si el cliente acumula puntos No(0) o Si(1)"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"sendDte")),(0,l.kt)("td",{parentName:"tr",align:null},"indica si al cliente se le env\xeda el XML del DTE No(0) o Si(1)"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"prestashopClienId")),(0,l.kt)("td",{parentName:"tr",align:null},"identificador en prestashop"),(0,l.kt)("td",{parentName:"tr",align:null},"String")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"contacts")),(0,l.kt)("td",{parentName:"tr",align:null},"nodo que indica la relaci\xf3n con los contactos del cliente."),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"attributes")),(0,l.kt)("td",{parentName:"tr",align:null},"nodo que indica la relaci\xf3n con los atributos adicionales de un cliente."),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"addresses")),(0,l.kt)("td",{parentName:"tr",align:null},"nodo que indica la relaci\xf3n con las direcciones adicionales de un cliente."),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h2",{id:"get-lista-de-clientes"},"GET lista de clientes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"GET ",(0,l.kt)("inlineCode",{parentName:"li"},"/v1/clients.json")," retornar\xe1 todos los clientes.")),(0,l.kt)("h4",{id:"par\xe1metros"},"Par\xe1metros"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"limit"),", limita la cantidad de items de una respuesta JSON, por defecto el limit es 25, el m\xe1ximo permitido es 50."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"offset"),", permite paginar los items de una respuesta JSON, por defecto el offset es 0."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"fields"),", solo devolver atributos espec\xedficos de un recurso"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"expand"),", permite expandir instancias y colecciones para traer relaciones en una sola petici\xf3n."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"code"),", Permite filtrar por rfc del cliente."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"firstname"),", filtra los clientes por nombre."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"lastname"),", filtra los clientes por apellido."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"email"),", filtra los clientes por email."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"paymenttypeid"),", recupera los clientes con forma de pago."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"salesconditionid"),", recupera los clientes por la condici\xf3n de venta."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"state"),", boolean (0 o 1) indica si los clientes est\xe1n activos(0) inactivos (1).")),(0,l.kt)("h4",{id:"ejemplos"},"Ejemplos"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"GET /v1/clients.json?limit=10&offset=0")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"GET /v1/clients.json?fields=[firstname,lastname]")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"GET /v1/clients.json?state=0")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"GET /v1/clients.json?code=12345678-9")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"GET /v1/clients.json?paymenttypeid=1")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"GET /v1/clients.json?expand=[contacts,attributes,payment_type]"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response /clients.json "',title:'"Response',"/clients.json":!0,'"':!0},'{\n    "href": "https://api.bsale.io/v1/clients.json",\n    "count": 10,\n    "limit": 25,\n    "offset": 0,\n    "items": [\n        {\n            "href": "https://api.bsale.io/v1/clients/1.json",\n            "id": 1,\n            "firstName": "Publico",\n            "lastName": "General",\n            "email": "api@bsale.com.mx",\n            "code": "XAXX010101000",\n            "phone": "",\n            "company": "Inicial Demo",\n            "note": null,\n            "facebook": null,\n            "twitter": "",\n            "hasCredit": 0,\n            "maxCredit": 0.0,\n            "state": 0,\n            "activity": "Sin Giro",\n            "city": "Ciudad",\n            "commerciallyBlocked": 0,\n            "district": "",\n            "address": "calle sin numero",\n            "postal_code": "10740",\n            "companyOrPerson": 0,\n            "accumulatePoints": 1,\n            "points": 0.0,\n            "pointsUpdated": "",\n            "sendDte": 0,\n            "isForeigner": 0,\n            "prestashopClienId": 0,\n            "createdAt": "",\n            "updatedAt": "",\n            "contacts": {\n                "href": "https://api.bsale.io/v1/clients/1/contacts.json"\n            },\n            "attributes": {\n                "href": "https://api.bsale.io/v1/clients/1/attributes.json"\n            },\n            "addresses": {\n                "href": "https://api.bsale.io/v1/clients/1/addresses.json"\n            }\n        }\n    ]\n}\n')),(0,l.kt)("h2",{id:"get-un-cliente"},"GET un cliente"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"GET ",(0,l.kt)("inlineCode",{parentName:"li"},"/v1/clients/80.json")," retornar\xe1 un cliente espec\xedfico.")),(0,l.kt)("h4",{id:"par\xe1metros-1"},"Par\xe1metros"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"expand"),", permite expandir instancias y colecciones para traer relaciones en una sola petici\xf3n.")),(0,l.kt)("h4",{id:"ejemplos-1"},"Ejemplos"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"GET /v1/clients/80.json?expand=[contacts,payment_type]"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response /clients/80.json"',title:'"Response','/clients/80.json"':!0},'{\n  "href": "https://api.bsale.io/v1/clients/80.json",\n  "id": 80,\n  "firstName": "juanito",\n  "lastName": "mena",\n  "code": "",\n  "phone": "",\n  "company": "juanito mena",\n  "note": null,\n  "facebook": null,\n  "twitter": "",\n  "hasCredit": 1,\n  "maxCredit": "10000.0",\n  "state": 0,\n  "activity": "Sin Giro",\n  "city": "",\n  "district": "",\n  "address": "",\n  "companyOrPerson": 0,\n  "points": 113000,\n  "pointsUpdated": 1437577975,\n  "accumulatePoints": 1,\n  "sendDte": 0,\n  "prestashopClienId": 0,\n  "contacts": {\n    "href": "https://api.bsale.io/v1/clients/80/contacts.json"\n  },\n  "attributes": {\n    "href": "https://api.bsale.io/v1/clients/80/attributes.json"\n  },\n  "addresses": {\n    "href": "https//api.bsale.io/v1/clients/80/addresses.json"\n  }\n}\n')),(0,l.kt)("h2",{id:"get-atributos-de-un-cliente"},"GET atributos de un cliente"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"GET ",(0,l.kt)("inlineCode",{parentName:"li"},"/v1/clients/796/attributes.json")," Retornar\xe1 los atributos asociados al cliente.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "href": "https://api.bsale.io/v1/clients/796/attributes.json",\n  "count": 4,\n  "limit": 25,\n  "offset": 0,\n  "items": [\n    {\n      "href": "https://api.bsale.io/v1/dynamic_attributes/44.json",\n      "id": 44,\n      "name": "Rubro",\n      "value": ""\n    },\n    {\n      "href": "https://api.bsale.io/v1/dynamic_attributes/72.json",\n      "id": 72,\n      "name": "NOMBRE FANTASIA",\n      "value": ""\n    },\n    {\n      "href": "https://api.bsale.io/v1/dynamic_attributes/73.json",\n      "id": 73,\n      "name": "wefcqwrevgrqebvqerbv",\n      "value": ""\n    },\n    {\n      "href": "https://api.bsale.io/v1/dynamic_attributes/76.json",\n      "id": 76,\n      "name": "N\xfamero Cliente",\n      "value": ""\n    }\n  ]\n}\n')),(0,l.kt)("h2",{id:"get-cantidad-de-clientes"},"GET cantidad de clientes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"GET ",(0,l.kt)("inlineCode",{parentName:"p"},"/v1/clients/count.json")," Retornar\xe1 cantidades de registros.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"state"),", boolean (0 o 1) indica si los clientess est\xe1n activos(0) inactivos (1)."))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "count": 14541\n}\n')),(0,l.kt)("h2",{id:"contactos"},"Contactos"),(0,l.kt)("h3",{id:"get-contactos-de-un-cliente"},"GET contactos de un cliente"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"GET ",(0,l.kt)("inlineCode",{parentName:"li"},"/v1/clients/55/contacts.json")," retornar\xe1 los contactos asociados al cliente.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "href": "https://api.bsale.io/v1/clients/4/contacts.json",\n  "count": 2,\n  "limit": 25,\n  "offset": 0,\n  "items": [\n    {\n      "href": "https://api.bsale.io/v1/clients/4/contacts/31.json",\n      "id": 31,\n      "firstName": "Andres",\n      "lastName": "Villanueva",\n      "phone": "2220936",\n      "email": "a.villanueva@gmail.cl"\n    },\n    {\n      "href": "https://api.bsale.io/v1/clients/4/contacts/32.json",\n      "id": 32,\n      "firstName": "Juana ",\n      "lastName": "Jeldres",\n      "phone": "2220928",\n      "email": "recepcion@gmail.cl"\n    }\n  ]\n}\n')),(0,l.kt)("h5",{id:"get-un-\xfanico-contacto-de-un-cliente"},"GET un \xfanico contacto de un cliente"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"GET ",(0,l.kt)("inlineCode",{parentName:"li"},"/v1/clients/4/contacts/31.json")," Retornar\xe1 un contacto asociado al cliente.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response /clients/156/attributes/93.json"',title:'"Response','/clients/156/attributes/93.json"':!0},'{\n   "href": "https://api.bsale.io/v1/clients/4/contacts/31.json",\n   "id": 31,\n   "firstName": "Carlitos",\n   "lastName": "Finster ",\n   "phone": "2220936",\n   "email": "Charles-Chuckie-Finster@rugrats.com"\n}\n')),(0,l.kt)("h3",{id:"post-un-contacto-de-un-cliente"},"POST un contacto de un cliente"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"POST ",(0,l.kt)("inlineCode",{parentName:"li"},"/v1/clients/55/contacts.json")," ")),(0,l.kt)("p",null,"Para crear un contacto de cliente, se debe enviar un JSON con la siguiente estructura:"),(0,l.kt)("h4",{id:"ejemplo-json"},"Ejemplo JSON"),(0,l.kt)("h5",{id:"env\xedo"},"Env\xedo"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "firstName": "Tommy",\n   "lastName": "Vercetti",\n   "phone": "966542311",\n   "email": "tvercetti@vc.com"\n}\n')),(0,l.kt)("h5",{id:"respuesta"},"Respuesta"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "href": "https://api.bsale.io/v1/clients/55/contacts/1.json",\n  "id": 1,\n  "firstName": "Tommy",\n  "lastName": "Vercetti",\n  "phone": "966542311",\n  "email": "tvercetti@vc.com"\n}\n')),(0,l.kt)("h3",{id:"delete-un-contacto-de-un-cliente"},"DELETE un contacto de un cliente"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"DELETE ",(0,l.kt)("inlineCode",{parentName:"li"},"/v1/clients/55/contacts/1.json")," Cambia el estado del contacto.")),(0,l.kt)("h2",{id:"direcciones"},"Direcciones"),(0,l.kt)("h3",{id:"get-lista-de-direcciones-de-un-cliente"},"GET lista de direcciones de un cliente"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"GET ",(0,l.kt)("inlineCode",{parentName:"li"},"/v1/clients/55/addresses.json")," retornar\xe1 las direcciones asociadas al cliente.")),(0,l.kt)("h4",{id:"par\xe1metros-2"},"Par\xe1metros"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"address"),", permite filtrar por direcci\xf3n (String)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"city"),", permite filtrar por ciudad (String)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"municipality"),", permite filtrar por comuna (String)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"state"),", permite filtrar por estado (Boolean).")),(0,l.kt)("h4",{id:"ejemplos-2"},"Ejemplos"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"GET /v1/clients/55/addresses.json?address=la quebrada 1189")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"GET /v1/clients/55/addresses.json?city=santiago")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"GET /v1/clients/55/addresses.json?city=santiago&district=providencia")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"GET /v1/clients/55/addresses.json?state=0"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "href": "https://api.bsale.io/v1/clients/55/addresses.json",\n  "count": 2,\n  "limit": 25,\n  "offset": 0,\n  "items": [\n    {\n      "href": "https://api.bsale.io/v1/clients/55/addresses/8.json",\n      "id": 8,\n      "addressName": "SUC 1",\n      "address": "SOTERO SANZ 100",\n      "city": "STGO",\n      "district": "PROVIDENCIA",\n      "state": 0\n    },\n    {\n      "href": "https://api.bsale.io/v1/clients/55/addresses/9.json",\n      "id": 9,\n      "addressName": "SUC 2",\n      "address": "PEDRO DE VALDIVIA 200",\n      "city": "STGO",\n      "district": "PROVIDENCIA",\n      "state": 0\n    }\n  ]\n}\n')),(0,l.kt)("h3",{id:"get-una-\xfanica-direcci\xf3n-de-un-cliente"},"GET una \xfanica direcci\xf3n de un cliente"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"GET ",(0,l.kt)("inlineCode",{parentName:"li"},"/v1/clients/55/addresses/8.json"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "href": "https://api.bsale.io/v1/clients/55/addresses/8.json",\n  "id": 8,\n  "addressName": "SUC 1",\n  "address": "SOTERO SANZ 100",\n  "city": "STGO",\n  "district": "PROVIDENCIA",\n  "state": 0\n}\n')),(0,l.kt)("h3",{id:"post-una-direcci\xf3n-de-un-cliente"},"POST una direcci\xf3n de un cliente"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"POST ",(0,l.kt)("inlineCode",{parentName:"li"},"/v1/clients/55/addresses.json")," ")),(0,l.kt)("p",null,"Para crear una direcci\xf3n de cliente, se debe enviar un JSON con la siguiente estructura:"),(0,l.kt)("h4",{id:"ejemplo-json-1"},"Ejemplo JSON"),(0,l.kt)("h5",{id:"env\xedo-1"},"Env\xedo"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "addressName": "SUC 3",\n  "address": "NUNCIO MONSE\xd1OR SOTERO SANZ 100, OF. 401",\n  "city": "STGO",\n  "district": "PROVIDENCIA"\n}\n')),(0,l.kt)("h5",{id:"respuesta-1"},"Respuesta"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "href": "https://api.bsale.io/v1/clients/55/addresses/6.json",\n  "id": 6,\n  "addressName": "SUC 3",\n  "address": "NUNCIO MONSE\xd1OR SOTERO SANZ 100, OF. 401",\n  "city": "STGO",\n  "district": "PROVIDENCIA",\n  "state": 0\n}\n')),(0,l.kt)("h3",{id:"put-una-direcci\xf3n-de-un-cliente"},"PUT una direcci\xf3n de un cliente"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"PUT ",(0,l.kt)("inlineCode",{parentName:"li"},"/v1/clients/55/addresses/6.json")," ")),(0,l.kt)("p",null,"Se debe enviar un Json con la siguiente estructura"),(0,l.kt)("h4",{id:"ejemplo-json-2"},"Ejemplo JSON"),(0,l.kt)("h5",{id:"env\xedo-2"},"Env\xedo"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "addressName": "SUC 4",\n  "address": "OF. 401",\n  "city": "STGO",\n  "district": "PROVIDENCIA"\n}\n')),(0,l.kt)("h4",{id:"respuesta-2"},"Respuesta"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "href": "https://api.bsale.io/v1/clients/55/addresses/6.json",\n  "id": 6,\n  "addressName": "SUC 4",\n  "address": "OF. 401",\n  "city": "STGO",\n  "district": "PROVIDENCIA",\n  "state": 0\n}\n')),(0,l.kt)("h3",{id:"delete-una-direcci\xf3n-de-un-cliente"},"DELETE una direcci\xf3n de un cliente"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"DELETE ",(0,l.kt)("inlineCode",{parentName:"li"},"/v1/clients/55/addresses/6.json")," Cambia el estado de la direcci\xf3n")),(0,l.kt)("h4",{id:"respuesta-3"},"Respuesta"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "href": "https://api.bsale.io/v1/clients/55/addresses/6.json",\n  "id": 6,\n  "addressName": "SUC 4",\n  "address": "OF. 401",\n  "city": "STGO",\n  "district": "PROVIDENCIA",\n  "state": 1\n}\n')),(0,l.kt)("h2",{id:"post-un-cliente"},"POST un cliente"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"POST ",(0,l.kt)("inlineCode",{parentName:"li"},"/v1/clients.json")," ")),(0,l.kt)("p",null,"Para crear un cliente, se debe enviar un JSON con la siguiente estructura:"),(0,l.kt)("h3",{id:"ejemplo-json-3"},"Ejemplo JSON"),(0,l.kt)("h4",{id:"env\xedo-3"},"Env\xedo"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "facebook": "",\n  "district": "Las Condes",\n  "phone": "66287196",\n  "activity": "Venta de ropa",\n  "city": "Santiago",\n  "maxCredit": 100000,\n  "hasCredit": 1,\n  "accumulatePoints": 1,\n  "lastName": "Paredes",\n  "note": "Cliente parodia",\n  "firstName": "Armando",\n  "company": "Particular",\n  "address": "Los trigales 372",\n  "email": "armando@paredes.cl",\n  "twitter": "",\n  "code": "98765432-1"\n}\n')),(0,l.kt)("h3",{id:"atributos-opcional"},"Atributos (opcional)"),(0,l.kt)("p",null,"Si se desean crear atributos especiales para el cliente se debe enviar la siguiente estructura."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "facebook": "",\n  "district": "Las Condes",\n  "phone": "66287196",\n  "activity": "Venta de ropa",\n  "city": "Santiago",\n  "maxCredit": 100000,\n  "hasCredit": 1,\n  "accumulatePoints": 1,\n  "lastName": "Mu\xf1oz",\n  "note": "Cliente premiun",\n  "firstName": "Marcela",\n  "company": "Particular",\n  "address": "Los trigales 372",\n  "email": "mmunoz@.email.cl",\n  "twitter": "",\n  "code": "2-7",\n  "dynamicAttributes": [\n    {\n      "description": "21/03/1983",\n      "dynamicAttributeId": 24\n    }\n  ]\n}\n')),(0,l.kt)("h4",{id:"respuesta-4"},"Respuesta"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "companyOrPerson": 0,\n  "address": "Los trigales 372",\n  "lastName": "Mu\xf1oz",\n  "sendDte": 0,\n  "city": "Santiago",\n  "state": 0,\n  "twitter": "",\n  "firstName": "Marcela",\n  "id": 67,\n  "district": "Las Condes",\n  "maxCredit": 100000,\n  "accumulatePoints": 1,\n  "note": "Cliente premiun",\n  "phone": "66287196",\n  "contacts": {\n    "href": "https://api.bsale.io/v1/clients/67/contacts.json"\n  },\n  "prestashopClienId": 0,\n  "activity": "Venta de ropa",\n  "hasCredit": 1,\n  "facebook": "",\n  "company": "Particular",\n  "code": "2-7",\n  "href": "https://api.bsale.io/v1/clients/67.json"\n}\n')),(0,l.kt)("h4",{id:"cliente-extranjero"},"Cliente extranjero"),(0,l.kt)("p",null,"Si el cliente es extranjero se debe enviar el atributo ",(0,l.kt)("inlineCode",{parentName:"p"},"isForeigner")," en ",(0,l.kt)("strong",{parentName:"p"},"1"),", por defecto este valor es 0, esto es necesario para los documentos de exportaci\xf3n."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "client": {\n    "city": "Hawai",\n    "company": "Mountain Apple Company Inc",\n    "district": "Honolulu",\n    "activity": "Musician",\n    "address": "izhawaii dot com #100 street",\n    "email": "Israel@Kamakawiwo.ole",\n    "isForeigner": 1\n  }\n}\n')),(0,l.kt)("h2",{id:"put-un-cliente"},"PUT un cliente"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"PUT ",(0,l.kt)("inlineCode",{parentName:"li"},"/v1/clients/67.json")," ")),(0,l.kt)("p",null,"Se debe enviar un Json con la siguiente estructura"),(0,l.kt)("h3",{id:"ejemplo-json-4"},"Ejemplo JSON"),(0,l.kt)("h4",{id:"env\xedo-4"},"Env\xedo"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "67",\n  "facebook": "",\n  "district": "Puerto Montt",\n  "phone": "66287196",\n  "activity": "Venta de ropa",\n  "city": "Puerto Montt",\n  "maxCredit": 100000,\n  "hasCredit": 1,\n  "lastName": "Mu\xf1oz",\n  "note": "Cliente premiun",\n  "firstName": "Marcela",\n  "company": "Particular",\n  "address": "Los trigales 372",\n  "email": "mmunoz@.email.cl",\n  "twitter": "",\n  "accumulatePoints": 1,\n  "priceListId": 0\n}\n')),(0,l.kt)("h4",{id:"respuesta-5"},"Respuesta"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "companyOrPerson": 0,\n  "address": "Los trigales 372",\n  "lastName": "Mu\xf1oz",\n  "sendDte": 0,\n  "city": "Puerto Montt",\n  "state": 0,\n  "twitter": "",\n  "firstName": "Marcela",\n  "id": 67,\n  "district": "Puerto Montt",\n  "maxCredit": 100000,\n  "accumulatePoints": 1,\n  "note": "Cliente premiun",\n  "phone": "66287196",\n  "contacts": {\n    "href": "https://api.bsale.io/v1/clients/67/contacts.json"\n  },\n  "prestashopClienId": 0,\n  "activity": "Venta de ropa",\n  "hasCredit": 1,\n  "facebook": "",\n  "company": "Particular",\n  "code": "2-7",\n  "href": "https://api.bsale.io/v1/clients/67.json"\n}\n')),(0,l.kt)("h2",{id:"delete-un-cliente-virtualmente"},"DELETE un cliente virtualmente"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"DELETE ",(0,l.kt)("inlineCode",{parentName:"li"},"/v1/clients/30.json"),"\nCambia el estado del cliente")),(0,l.kt)("admonition",{type:"danger"},(0,l.kt)("p",{parentName:"admonition"},"El cliente no estar\xe1 visible mediante interfaz y tendr\xe1 un ",(0,l.kt)("inlineCode",{parentName:"p"},"state")," 99. Sus documentos asociado ",(0,l.kt)("strong",{parentName:"p"},"NO")," se eliminar\xe1n.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "href": "https://api.bsale.io/v1/clients/30.json",\n  "id": 30,\n  "firstName": "Andres",\n  "lastName": "Vasquez",\n  "code": "1-9",\n  "phone": "220800",\n  "company": "Servicios varios",\n  "note": "",\n  "facebook": "",\n  "twitter": "",\n  "hasCredit": 1,\n  "maxCredit": "9100",\n  "state": 1,\n  "activity": "",\n  "city": "Puerto Montt",\n  "district": "Puerto Montt",\n  "address": "Avda. Diego Portales 100",\n  "companyOrPerson": 1,\n  "sendDte": 0,\n  "prestashopClienId": 0,\n  "payment_type": {\n    "href": "https://api.bsale.io/v1/payment_types/2.json",\n    "id": "2"\n  },\n  "sale_condition": {\n    "href": "https://api.bsale.io/v1/sale_conditions/1.json",\n    "id": "2"\n  },\n  "contacts": {\n    "href": "https://api.bsale.io/v1/clients/30/contacts.json"\n  }\n}\n')),(0,l.kt)("h2",{id:"put-puntos-de-cliente"},"PUT puntos de cliente"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"PUT ",(0,l.kt)("inlineCode",{parentName:"li"},"/v1/clients/points.json")," ")),(0,l.kt)("h3",{id:"par\xe1metros-3"},"Par\xe1metros"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"type"),", 0 aumenta, 1  resta puntos (Boolean)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"clientId"),", Id de cliente (integer)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"description"),", Descripci\xf3n asociada al registro (String)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"points"),", Cantidad de puntos a registrar (integer)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"orderId"),", Id registro asociado (opcional) (String)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response /clients/points.json?clientId=54"',title:'"Response',"/clients/points.json?clientId":'54"'},'{\n  "type": 0,\n  "clientId": 18,\n  "description": "Suma puntos 2",\n  "points": 1,\n  "orderId": "1"\n}\n')))}u.isMDXComponent=!0}}]);