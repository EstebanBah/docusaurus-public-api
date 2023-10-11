"use strict";(self.webpackChunkdocusaurus_public_api=self.webpackChunkdocusaurus_public_api||[]).push([[8299],{3905:(e,a,t)=>{t.d(a,{Zo:()=>u,kt:()=>k});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),c=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},u=function(e){var a=c(e.components);return n.createElement(s.Provider,{value:a},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),m=r,k=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return t?n.createElement(k,i(i({ref:a},u),{},{components:t})):n.createElement(k,i({ref:a},u))}));function k(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7160:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=t(7462),r=(t(7294),t(3905));const o={id:"primeros-pasos",sidebar_position:2,title:"Primeros pasos",description:"Primeros pasos para interactuar con la API de Bsale",slug:"/primeros-pasos"},i="Primeros pasos",l={unversionedId:"primeros-pasos",id:"version-MX/primeros-pasos",title:"Primeros pasos",description:"Primeros pasos para interactuar con la API de Bsale",source:"@site/versioned_docs/version-MX/intro.md",sourceDirName:".",slug:"/primeros-pasos",permalink:"/docusaurus-public-api/MX/primeros-pasos",draft:!1,tags:[],version:"MX",sidebarPosition:2,frontMatter:{id:"primeros-pasos",sidebar_position:2,title:"Primeros pasos",description:"Primeros pasos para interactuar con la API de Bsale",slug:"/primeros-pasos"},sidebar:"tutorialSidebar",next:{title:"Documentos",permalink:"/docusaurus-public-api/MX/documentos"}},s={},c=[{value:"Obt\xe9n tu token de acceso",id:"obt\xe9n-tu-token-de-acceso",level:2},{value:"Token de pruebas",id:"token-de-pruebas",level:3},{value:"Token producci\xf3n",id:"token-producci\xf3n",level:3},{value:"OAuth 2.0",id:"oauth-20",level:3},{value:"C\xf3mo funciona OAuth 2.0",id:"c\xf3mo-funciona-oauth-20",level:4},{value:"Obtener accesos como aplicaci\xf3n",id:"obtener-accesos-como-aplicaci\xf3n",level:2},{value:"Etapa I: Grant request",id:"etapa-i-grant-request",level:2},{value:"Etapa II: Authorization Grant",id:"etapa-ii-authorization-grant",level:2},{value:"Etapa III: Request Access Token",id:"etapa-iii-request-access-token",level:2}],u={toc:c},p="wrapper";function d(e){let{components:a,...o}=e;return(0,r.kt)(p,(0,n.Z)({},u,o,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"primeros-pasos"},"Primeros pasos"),(0,r.kt)("p",null,"Lo primero que debes seguir para conectarte a la API de Bsale es que puedas obtener la autorizaci\xf3n para acceder a los recursos de esta. Esta autorizaci\xf3n evidentemente la tendr\xe1 que dar quien tenga privilegios para ellos y sea el \u201cdue\xf1o\u201d de los datos."),(0,r.kt)("h2",{id:"obt\xe9n-tu-token-de-acceso"},"Obt\xe9n tu token de acceso"),(0,r.kt)("h3",{id:"token-de-pruebas"},"Token de pruebas"),(0,r.kt)("p",null,"Para obtener tu ",(0,r.kt)("inlineCode",{parentName:"p"},"access_token")," a un ",(0,r.kt)("strong",{parentName:"p"},"ambiente de pruebas"),", ",(0,r.kt)("a",{parentName:"p",href:"https://account.bsale.dev/users/create"},"crea una cuenta")," para obtenerlo."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img alt",src:t(1206).Z,width:"618",height:"142"})),(0,r.kt)("h3",{id:"token-producci\xf3n"},"Token producci\xf3n"),(0,r.kt)("p",null,"Para obtener tu ",(0,r.kt)("inlineCode",{parentName:"p"},"access_token")," y conectar un ",(0,r.kt)("strong",{parentName:"p"},"ambiente en producci\xf3n"),", debes solicitar al mail ",(0,r.kt)("a",{parentName:"p",href:"mailto:ayuda@bsale.app"},"ayuda@bsale.app"),"."),(0,r.kt)("h3",{id:"oauth-20"},"OAuth 2.0"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Deber\xe1s implementar OAuth 2.0 cuando la integraci\xf3n est\xe9 lista")," y desees que tus clientes conecten ambas apps sin necesidad de pedir un token por mail. ")),(0,r.kt)("h4",{id:"c\xf3mo-funciona-oauth-20"},"C\xf3mo funciona OAuth 2.0"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Un poco de historia \ud83c\udf93 "),(0,r.kt)("div",null,(0,r.kt)("div",null,"OAuth es un est\xe1ndar abierto que permite la autorizaci\xf3n segura mediante el uso de un API. En la actualidad se usa desde octubre de 2012, en su versi\xf3n OAuth 2.0 donde sus principales mejoras son que ahora proporciona flujos de autorizaci\xf3n para aplicaciones web, de escritorio, tel\xe9fonos m\xf3viles. Actualmente servicios como Google, Facebook, Azure Active Directory, Github solo admiten el protocolo OAuth 2.0.",(0,r.kt)("br",null),"Recordemos que OAuth 2.0 es realmente un framework de autorizaci\xf3n, que lo que hace es permitir que las aplicaciones obtengan acceso limitado a las cuentas de usuario de algunos servicios como la API de Bsale. Su funcionamiento b\xe1sicamente consiste en delegar el permiso de autenticaci\xf3n del usuario al servicio que gestiona dichas cuentas, de modo que es el propio servicio, quien otorga acceso a las aplicaciones de terceros"),(0,r.kt)("br",null),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Este protocolo cuenta con ",(0,r.kt)("b",null,"3 componentes b\xe1sicos")," que interact\xfaan en el proceso de autorizaci\xf3n:"),(0,r.kt)("div",null,(0,r.kt)("table",null,(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"Cliente")),(0,r.kt)("td",null,"Es la aplicaci\xf3n que quiere acceder a un a instancia de Bsale, mediante el \u201cconsumo\u201d de los \u201cEndpoints\u201d contenidos en la API de BSale")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"Usuario")),(0,r.kt)("td",null,"El usuario es quien autoriza a la aplicaci\xf3n a acceder a  su instancia, mediante una pantalla en el mismo Bsale. Es importante tener presente que el usuario deber\xe1 loguearse en Bsale, para dar esta autorizaci\xf3n.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"Servidor")),(0,r.kt)("td",null,"El servidor de autorizaci\xf3n recibe las peticiones de acceso de aplicaciones que desean usar el inicio de sesi\xf3n Bsale. Este servidor se encarga de verificar la identidad del usuario y del servicio que solicita acceso, permitiendo o denegando la solicitud, luego de lo cual enviar\xe1 al solicitante un c\xf3digo de autorizaci\xf3n, con el cual podr\xe1 solicitar el token de acceso definitivo")))))))),(0,r.kt)("h2",{id:"obtener-accesos-como-aplicaci\xf3n"},"Obtener accesos como aplicaci\xf3n"),(0,r.kt)("p",null,"Perfecto ahora que tenemos claro c\xf3mo funciona el protocolo veamos en t\xe9rminos espec\xedficos que debes hacer.\nPara ello vamos a dividir el proceso en 3 etapas:"),(0,r.kt)("h2",{id:"etapa-i-grant-request"},"Etapa I: Grant request"),(0,r.kt)("p",null,"En esta etapa es en la que se valida al usuario que dar\xe1 acceso a la aplicaci\xf3n a la cuenta. Lo primero que debes hacer es  redirigir al usuario a la pantalla de autorizaci\xf3n:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-curl"},"https://oauth.bsale.io/login?app_id=xxx&redirect_uri=https://xxxxx&client_code=xxxxx\n")),(0,r.kt)("p",null,"Esta llamada debe contener  3 par\xe1metros:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"app_id")," Corresponde  al ID de la aplicaci\xf3n, el cual lo obtienes al registrarla."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"redirect_uri")," URL al cual se redireccionar\xe1  una vez que el usuario autorice."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"client_code")," Corresponde al c\xf3digo que identifica la instancia, en Per\xfa por ejemplo ser\xe1 el RUC y en Chile el RUT.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img alt",src:t(3035).Z,width:"920",height:"363"})),(0,r.kt)("p",null,"En esta pantalla el usuario que aprobar\xe1 deber\xe1 loguearse con sus credenciales de Bsale"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Si las credenciales son correctas el usuario ser\xe1 dirigido a una pantalla donde podr\xe1 autorizar el acceso de  la aplicaci\xf3n a los recursos de la empresa o instancia.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img alt",src:t(3900).Z,width:"736",height:"664"})),(0,r.kt)("h2",{id:"etapa-ii-authorization-grant"},"Etapa II: Authorization Grant"),(0,r.kt)("p",null,"Luego que el usuario autoriz\xf3 a la aplicaci\xf3n , este ser\xe1 redirigido a la URL que se defini\xf3 en el par\xe1metro ",(0,r.kt)("inlineCode",{parentName:"p"},"redirect_uri")," y se le concatenar\xe1 un el c\xf3digo de autorizaci\xf3n, el cual podr\xe1 usar la aplicaci\xf3n para solicitar su token."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-curl"},"https://ejemplo/v1/oauth/test/?code=xxxx\n")),(0,r.kt)("p",null,"Donde"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"code")," c\xf3digo de autorizaci\xf3n para ser utilizado en la solicitud de obtenci\xf3n del token.")),(0,r.kt)("h2",{id:"etapa-iii-request-access-token"},"Etapa III: Request Access Token"),(0,r.kt)("p",null,"Excelente ya casi hemos terminado. Ahora   el servidor de autorizaci\xf3n te mand\xf3 concatenada en tu URL el c\xf3digo el cual podr\xe1s utilizar para solicitar el token de acceso."),(0,r.kt)("p",null,"Con este c\xf3digo deber\xe1s hacer una \xfaltima llamada a la API de autorizaci\xf3n mediante un request a :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"POST ",(0,r.kt)("inlineCode",{parentName:"li"},"https://oauth.bsale.io/gateway/oauth_response.json"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Body")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "code": "4be422802a2f9976da1f6947e04fac437f1bce91f",\n    "usrToken": "xxxxxxx",\n    "appId": "xxxx"\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Donde")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"code")," Corresponde al c\xf3digo de autorizaci\xf3n que te lleg\xf3 en el redireccionamiento."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"usrToken")," Corresponde al token  del integrador (se asigna cuando uno de inscribe como integrador)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"appId")," Identificador \xfanico de la aplicaci\xf3n que quiere acceder")),(0,r.kt)("p",null,"Un ejemplo de respuesta ser\xeda:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "code": 200,\n   "data": {\n       "accessToken": "xxxx",\n       "clientName": "Bsale test",\n       "clientCode": "88888888-8"\n   }\n}\n')),(0,r.kt)("p",null,"Y como respuesta tendr\xe1s el ",(0,r.kt)("inlineCode",{parentName:"p"},"access_token")," que servir\xe1 para autentificar las peticiones a la API"))}d.isMDXComponent=!0},3900:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/authOauth-2835f3f5b68686b0f4a078f4ce45ca1c.png"},1206:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/copyToken-bbde53e483920eac7ca29f2e650eb432.png"},3035:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/loginOauth-cd52521c875f7b15c014bcafa993bc60.png"}}]);