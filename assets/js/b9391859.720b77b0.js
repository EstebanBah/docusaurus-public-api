"use strict";(self.webpackChunkdocusaurus_public_api=self.webpackChunkdocusaurus_public_api||[]).push([[9121],{5680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>f});var a=t(6540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),u=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(l.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(t),m=r,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return t?a.createElement(f,s(s({ref:n},c),{},{components:t})):a.createElement(f,s({ref:n},c))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[p]="string"==typeof e?e:r,s[1]=i;for(var u=2;u<o;u++)s[u]=t[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9365:(e,n,t)=>{t.d(n,{A:()=>s});var a=t(6540),r=t(53);const o={tabItem:"tabItem_Ymn6"};function s(e){let{children:n,hidden:t,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,s),hidden:t},n)}},1470:(e,n,t)=>{t.d(n,{A:()=>T});var a=t(8168),r=t(6540),o=t(53),s=t(3104),i=t(6347),l=t(7485),u=t(1682),c=t(9466);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}function d(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??p(t);return function(e){const n=(0,u.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const a=(0,i.W6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(a.location.search);n.set(o,e),a.replace({...a.location,search:n.toString()})}),[o,a])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,o=d(e),[s,i]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:o}))),[l,u]=f({queryString:t,groupId:a}),[p,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,o]=(0,c.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:a}),b=(()=>{const e=l??p;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),g(e)}),[u,g,o]),tabValues:o}}var b=t(2303);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:n,block:t,selectedValue:i,selectValue:l,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,s.a_)(),d=e=>{const n=e.currentTarget,t=c.indexOf(n),a=u[t].value;a!==i&&(p(n),l(a))},m=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":t},n)},u.map((e=>{let{value:n,label:t,attributes:s}=e;return r.createElement("li",(0,a.A)({role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,key:n,ref:e=>c.push(e),onKeyDown:m,onClick:d},s,{className:(0,o.A)("tabs__item",y.tabItem,s?.className,{"tabs__item--active":i===n})}),t??n)})))}function h(e){let{lazy:n,children:t,selectedValue:a}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a}))))}function N(e){const n=g(e);return r.createElement("div",{className:(0,o.A)("tabs-container",y.tabList)},r.createElement(v,(0,a.A)({},e,n)),r.createElement(h,(0,a.A)({},e,n)))}function T(e){const n=(0,b.A)();return r.createElement(N,(0,a.A)({key:String(n)},e))}},4203:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var a=t(8168),r=(t(6540),t(5680)),o=t(1470),s=t(9365);const i={id:"primeros-pasos",sidebar_position:2,title:"Introducci\xf3n",description:"Primeros pasos para interactuar con la API de Bsale CL",slug:"/first-steps"},l=void 0,u={unversionedId:"primeros-pasos",id:"version-CL/primeros-pasos",title:"Introducci\xf3n",description:"Primeros pasos para interactuar con la API de Bsale CL",source:"@site/versioned_docs/version-CL/intro.md",sourceDirName:".",slug:"/first-steps",permalink:"/docusaurus-public-api/CL/first-steps",draft:!1,tags:[],version:"CL",sidebarPosition:2,frontMatter:{id:"primeros-pasos",sidebar_position:2,title:"Introducci\xf3n",description:"Primeros pasos para interactuar con la API de Bsale CL",slug:"/first-steps"},sidebar:"tutorialSidebar",next:{title:"Documentos",permalink:"/docusaurus-public-api/CL/documentos"}},c={},p=[{value:"Navegaci\xf3n",id:"navegaci\xf3n",level:3},{value:"Autentificaci\xf3n",id:"autentificaci\xf3n",level:3},{value:"Peticiones",id:"peticiones",level:3},{value:"Ejemplo",id:"ejemplo",level:3},{value:"Ayuda",id:"ayuda",level:3}],d={toc:p},m="wrapper";function f(e){let{components:n,...t}=e;return(0,r.yg)(m,(0,a.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"\ud83d\udc4b \xa1Te damos la bienvenida a la documentaci\xf3n de la ",(0,r.yg)("strong",{parentName:"p"},"API Chile"),"! "),(0,r.yg)("p",null,"Esta p\xe1gina te ayudar\xe1 a iniciar con nuestra API as\xed puedas orientarte en los distintos endpoints que se encuentran a tu disposici\xf3n. Comencemos con esta gu\xeda r\xe1pida."),(0,r.yg)("h3",{id:"navegaci\xf3n"},"Navegaci\xf3n"),(0,r.yg)("p",null,"El ",(0,r.yg)("strong",{parentName:"p"},"men\xfa lateral izquierdo")," te servir\xe1 como gu\xeda general para encontrar la documentaci\xf3n seg\xfan el recurso necesites trabajar.\nCada secci\xf3n tendr\xe1 un ",(0,r.yg)("strong",{parentName:"p"},"men\xfa lateral derecho"),", que te mostrar\xe1 las partes que componen el recurso."),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"Tambi\xe9n puedes consultar nuestras ",(0,r.yg)("a",{parentName:"p",href:"/faq"},(0,r.yg)("strong",{parentName:"a"},"preguntas frecuentes"))," y ",(0,r.yg)("a",{parentName:"p",href:"/faq#400"},(0,r.yg)("strong",{parentName:"a"},"listado de errores")),".")),(0,r.yg)("h3",{id:"autentificaci\xf3n"},"Autentificaci\xf3n"),(0,r.yg)("p",null,"Si le\xedste los ",(0,r.yg)("a",{parentName:"p",href:"/get-started"},(0,r.yg)("strong",{parentName:"a"},"primeros pasos")),"\ud83d\udcce sabr\xe1s que todos los requests deber\xe1n ser autentificados mediante un ",(0,r.yg)("inlineCode",{parentName:"p"},"access_token"),", este token debe indicarse en la cabecera de la petici\xf3n."),(0,r.yg)("h3",{id:"peticiones"},"Peticiones"),(0,r.yg)("p",null,"Las peticiones son ",(0,r.yg)("inlineCode",{parentName:"p"},"HTTP REST")," por lo que se debe especificar el ",(0,r.yg)("strong",{parentName:"p"},"m\xe9todo")," que se va a utilizar, junto al m\xe9todo se debe enviar en la cabecera de la petici\xf3n el token de acceso que permite la autenticaci\xf3n en la API."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"GET"),", para obtener informaci\xf3n de un recurso."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"POST"),", para crear un recurso."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"PUT"),", para modificar un recurso."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"DELETE"),", para eliminar un recurso.")),(0,r.yg)("h3",{id:"ejemplo"},"Ejemplo"),(0,r.yg)("p",null,"El env\xedo es simple, este es un ejemplo de la generaci\xf3n de una boleta electr\xf3nica. La ",(0,r.yg)("strong",{parentName:"p"},"documentaci\xf3n completa")," la encuentras en su secci\xf3n correspondiente, ",(0,r.yg)("a",{parentName:"p",href:"/CL/documentos"},(0,r.yg)("strong",{parentName:"a"},'"Documentos > Post un documento"'))),(0,r.yg)(o.A,{className:"unique-tabs",mdxType:"Tabs"},(0,r.yg)(s.A,{value:"Request",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'{\n  "documentTypeId": "1",\n  "officeId": "1",\n  "emissionDate": 1462527931,\n  "details": [\n      {\n          "netUnitValue": 10916,\n          "quantity": 1,\n          "taxes": [\n              {\n                  "code": 14,\n                  "percentage": 19\n              }\n          ],\n          "comment": "el nombre del producto que voy a vender"\n      }\n  ]\n}\n'))),(0,r.yg)(s.A,{value:"Response",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'{\n  "href": "https://api.bsale.io/v1/documents/427529.json",\n  "id": 427529,\n  "emissionDate": 1462492800,\n  "expirationDate": 1462492800,\n  "generationDate": 1691002496,\n  "number": 1451650496937243,\n  "serialNumber": null,\n  "trackingNumber": null,\n  "totalAmount": 12990.0,\n  "netAmount": 10916.0,\n  "taxAmount": 2074.0,\n  "exemptAmount": 0.0,\n  "exportTotalAmount": 0.0,\n  "exportNetAmount": 0.0,\n  "exportTaxAmount": 0.0,\n  "exportExemptAmount": 0.0,\n  "commissionRate": 0.0,\n  "commissionNetAmount": 0.0,\n  "commissionTaxAmount": 0.0,\n  "commissionTotalAmount": 0.0,\n  "percentageTaxWithheld": 0.0,\n  "purchaseTaxAmount": 0.0,\n  "purchaseTotalAmount": 0.0,\n  "address": "",\n  "municipality": "",\n  "city": "",\n  "urlTimbre": null,\n  "urlPublicView": "https://app2.bsale.cl/view/18790/7c0653c5575c?sfd=99",\n  "urlPdf": "https://app2.bsale.cl/view/18790/7c0653c5575c.pdf?sfd=99",\n  "urlPublicViewOriginal": "https://app2.bsale.cl/view/18790/7c0653c5575c",\n  "urlPdfOriginal": "https://app2.bsale.cl/view/18790/7c0653c5575c.pdf",\n  "token": "7c0653c5575c",\n  "state": 0,\n  "commercialState": 0,\n  "urlXml": "https://api.bsale.cl/v1/18790/files/7c0653c5575c.xml",\n  "ted": null,\n  "salesId": null,\n  "informedSii": 2,\n  "responseMsgSii": null,\n  "document_type": {\n      "href": "https://api.bsale.io/v1/document_types/1.json",\n      "id": "1"\n  },\n  "office": {\n      "href": "https://api.bsale.io/v1/offices/1.json",\n      "id": "1"\n  },\n  "user": {\n      "href": "https://api.bsale.io/v1/users/257.json",\n      "id": "257"\n  },\n  "coin": {\n      "href": "https://api.bsale.io/v1/coins/1.json",\n      "id": "1"\n  },\n  "references": {\n      "href": "https://api.bsale.io/v1/documents/427529/references.json"\n  },\n  "document_taxes": {\n      "href": "https://api.bsale.io/v1/documents/427529/document_taxes.json"\n  },\n  "details": {\n      "href": "https://api.bsale.io/v1/documents/427529/details.json"\n  },\n  "sellers": {\n      "href": "https://api.bsale.io/v1/documents/427529/sellers.json"\n  },\n  "attributes": {\n      "href": "https://api.bsale.io/v1/documents/427529/attributes.json"\n  }\n}\n')))),(0,r.yg)("h3",{id:"ayuda"},"Ayuda"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Si necesitas aprender como trabaja Bsale de forma general puedes revisar ",(0,r.yg)("a",{parentName:"li",href:"https://ayuda.bsale.app/support/home"},(0,r.yg)("strong",{parentName:"a"},"nuestra base de conocimiento")),"."),(0,r.yg)("li",{parentName:"ul"},"Si tienes una duda puedes comunicarte con nosotros ingresando a la comunidad de ",(0,r.yg)("a",{parentName:"li",href:"https://bsaledev.slack.com/join/shared_invite/zt-1h1cqt05g-fqnTiREZYN8g47gf~caO5w#/shared-invite/email"},(0,r.yg)("strong",{parentName:"a"},"slack"))," \ud83d\udc4b")))}f.isMDXComponent=!0}}]);