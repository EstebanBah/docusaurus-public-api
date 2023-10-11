"use strict";(self.webpackChunkdocusaurus_public_api=self.webpackChunkdocusaurus_public_api||[]).push([[4831],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(f,s(s({ref:t},c),{},{components:n})):a.createElement(f,s({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:r,s[1]=i;for(var u=2;u<o;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(7294),r=n(6010);const o={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,s),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(7462),r=n(7294),o=n(6010),s=n(2466),i=n(6550),l=n(1980),u=n(7392),c=n(12);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=d(e),[s,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[l,u]=f({queryString:n,groupId:a}),[p,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),v=(()=>{const e=l??p;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{v&&i(v)}),[v]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),b(e)}),[u,b,o]),tabValues:o}}var v=n(2389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:n,selectedValue:i,selectValue:l,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,s.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==i&&(p(t),l(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:s}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},s,{className:(0,o.Z)("tabs__item",h.tabItem,s?.className,{"tabs__item--active":i===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=b(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",h.tabList)},r.createElement(g,(0,a.Z)({},e,t)),r.createElement(k,(0,a.Z)({},e,t)))}function N(e){const t=(0,v.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}},6083:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var a=n(7462),r=(n(7294),n(3905)),o=n(4866),s=n(5162);const i={id:"primeros-pasos",sidebar_position:2,title:"Introducci\xf3n",description:"Primeros pasos para interactuar con la API de Bsale PE",slug:"/first-steps"},l=void 0,u={unversionedId:"primeros-pasos",id:"version-PE/primeros-pasos",title:"Introducci\xf3n",description:"Primeros pasos para interactuar con la API de Bsale PE",source:"@site/versioned_docs/version-PE/intro.md",sourceDirName:".",slug:"/first-steps",permalink:"/docusaurus-public-api/PE/first-steps",draft:!1,tags:[],version:"PE",sidebarPosition:2,frontMatter:{id:"primeros-pasos",sidebar_position:2,title:"Introducci\xf3n",description:"Primeros pasos para interactuar con la API de Bsale PE",slug:"/first-steps"},sidebar:"tutorialSidebar",next:{title:"Documentos",permalink:"/docusaurus-public-api/PE/documentos"}},c={},p=[{value:"Navegaci\xf3n",id:"navegaci\xf3n",level:3},{value:"Autentificaci\xf3n",id:"autentificaci\xf3n",level:3},{value:"Peticiones",id:"peticiones",level:3},{value:"Ejemplo",id:"ejemplo",level:3},{value:"Ayuda",id:"ayuda",level:3}],d={toc:p},m="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\ud83d\udc4b \xa1Te damos la bienvenida a la documentaci\xf3n de la ",(0,r.kt)("strong",{parentName:"p"},"API Per\xfa"),"! "),(0,r.kt)("p",null,"Esta p\xe1gina te ayudar\xe1 a iniciar con nuestra API as\xed puedas orientarte en los distintos endpoints que se encuentran a tu disposici\xf3n. Comencemos con esta gu\xeda r\xe1pida."),(0,r.kt)("h3",{id:"navegaci\xf3n"},"Navegaci\xf3n"),(0,r.kt)("p",null,"El ",(0,r.kt)("strong",{parentName:"p"},"men\xfa lateral izquierdo")," te servir\xe1 como gu\xeda general para encontrar la documentaci\xf3n seg\xfan el recurso necesites trabajar.\nCada secci\xf3n tendr\xe1 un ",(0,r.kt)("strong",{parentName:"p"},"men\xfa lateral derecho"),", que te mostrar\xe1 las partes que componen el recurso."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Tambi\xe9n puedes consultar nuestras ",(0,r.kt)("a",{parentName:"p",href:"/faq"},(0,r.kt)("strong",{parentName:"a"},"preguntas frecuentes"))," y ",(0,r.kt)("a",{parentName:"p",href:"/faq#400"},(0,r.kt)("strong",{parentName:"a"},"listado de errores")),".")),(0,r.kt)("h3",{id:"autentificaci\xf3n"},"Autentificaci\xf3n"),(0,r.kt)("p",null,"Si le\xedste los ",(0,r.kt)("a",{parentName:"p",href:"/get-started"},(0,r.kt)("strong",{parentName:"a"},"primeros pasos")),"\ud83d\udcce sabr\xe1s que todos los requests deber\xe1n ser autentificados mediante un ",(0,r.kt)("inlineCode",{parentName:"p"},"access_token"),", este token debe indicarse en la cabecera de la petici\xf3n."),(0,r.kt)("h3",{id:"peticiones"},"Peticiones"),(0,r.kt)("p",null,"Las peticiones son ",(0,r.kt)("inlineCode",{parentName:"p"},"HTTP REST")," por lo que se debe especificar el ",(0,r.kt)("strong",{parentName:"p"},"m\xe9todo")," que se va a utilizar, junto al m\xe9todo se debe enviar en la cabecera de la petici\xf3n el token de acceso que permite la autenticaci\xf3n en la API."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"GET"),", para obtener informaci\xf3n de un recurso."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"POST"),", para crear un recurso."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"PUT"),", para modificar un recurso."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"DELETE"),", para eliminar un recurso.")),(0,r.kt)("h3",{id:"ejemplo"},"Ejemplo"),(0,r.kt)("p",null,"El env\xedo es simple, este es un ejemplo de la generaci\xf3n de una factura electr\xf3nica. La ",(0,r.kt)("strong",{parentName:"p"},"documentaci\xf3n completa")," la encuentras en su secci\xf3n correspondiente, ",(0,r.kt)("a",{parentName:"p",href:"/PE/documentos"},(0,r.kt)("strong",{parentName:"a"},'"Documentos > Post un documento"'))),(0,r.kt)(o.Z,{className:"unique-tabs",mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"Request",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "documentTypeId": 85,\n  "officeId": 1,\n  "emissionDate": 1686614400,\n  "client": {\n      "code": "987654321",\n      "city": "Capital del Oeste",\n      "company": "Capsule Corp",\n      "municipality": "Capital del Oeste",\n      "activity": "Development and research",\n      "address": "Hoi Poi #750",\n      "email": "dr@brief.pe"\n  },\n  "details": [\n      {\n          "netUnitValue": 9900,\n          "quantity": 1,\n          "taxId": "[1]",\n          "discount": 0,\n          "comment": "product example"\n      }\n  ]\n}\n'))),(0,r.kt)(s.Z,{value:"Response",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "href": "https://api.bsale.io/v1/documents/47121.json",\n  "id": 47121,\n  "emissionDate": 1686614400,\n  "expirationDate": 1686614400,\n  "generationDate": 1691003759,\n  "number": 12437,\n  "serialNumber": "F001-12437",\n  "trackingNumber": null,\n  "totalAmount": 11682.0,\n  "netAmount": 9900.0,\n  "taxAmount": 1782.0,\n  "exemptAmount": 0.0,\n  "exportTotalAmount": 0.0,\n  "exportNetAmount": 0.0,\n  "exportTaxAmount": 0.0,\n  "exportExemptAmount": 0.0,\n  "commissionRate": 0.0,\n  "commissionNetAmount": 0.0,\n  "commissionTaxAmount": 0.0,\n  "commissionTotalAmount": 0.0,\n  "percentageTaxWithheld": 0.0,\n  "purchaseTaxAmount": 0.0,\n  "purchaseTotalAmount": 0.0,\n  "address": "Hoi Poi #750",\n  "district": "Capital del Oeste",\n  "city": "Capital del Oeste",\n  "stamp": null,\n  "urlPublicView": "https://app2.bsale.com.pe/view/18618/23d6ec33120b?sfd=99",\n  "urlPdf": "https://app2.bsale.com.pe/view/18618/23d6ec33120b.pdf?sfd=99",\n  "urlPublicViewOriginal": "https://app2.bsale.com.pe/view/18618/23d6ec33120b",\n  "urlPdfOriginal": "https://app2.bsale.com.pe/view/18618/23d6ec33120b.pdf",\n  "token": "23d6ec33120b",\n  "state": 0,\n  "commercialState": 0,\n  "urlXml": null,\n  "salesId": null,\n  "informed": 2,\n  "responseMsg": null,\n  "document_type": {\n      "href": "https://api.bsale.io/v1/document_types/85.json",\n      "id": "85"\n  },\n  "client": {\n      "href": "https://api.bsale.io/v1/clients/20923.json",\n      "id": "20923"\n  },\n  "office": {\n      "href": "https://api.bsale.io/v1/offices/1.json",\n      "id": "1"\n  },\n  "user": {\n      "href": "https://api.bsale.io/v1/users/224.json",\n      "id": "224"\n  },\n  "coin": {\n      "href": "https://api.bsale.io/v1/coins/1.json",\n      "id": "1"\n  },\n  "references": {\n      "href": "https://api.bsale.io/v1/documents/47121/references.json"\n  },\n  "document_taxes": {\n      "href": "https://api.bsale.io/v1/documents/47121/document_taxes.json"\n  },\n  "details": {\n      "href": "https://api.bsale.io/v1/documents/47121/details.json"\n  },\n  "sellers": {\n      "href": "https://api.bsale.io/v1/documents/47121/sellers.json"\n  },\n  "attributes": {\n      "href": "https://api.bsale.io/v1/documents/47121/attributes.json"\n  }\n}\n')))),(0,r.kt)("h3",{id:"ayuda"},"Ayuda"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Si necesitas aprender como trabaja Bsale de forma general puedes revisar ",(0,r.kt)("a",{parentName:"li",href:"https://ayuda.bsale.com.pe/support/home"},(0,r.kt)("strong",{parentName:"a"},"nuestra base de conocimiento")),"."),(0,r.kt)("li",{parentName:"ul"},"Si tienes una duda puedes comunicarte con nosotros ingresando a la comunidad de ",(0,r.kt)("a",{parentName:"li",href:"https://bsaledev.slack.com/join/shared_invite/zt-1h1cqt05g-fqnTiREZYN8g47gf~caO5w#/shared-invite/email"},(0,r.kt)("strong",{parentName:"a"},"slack"))," \ud83d\udc4b")))}f.isMDXComponent=!0}}]);