"use strict";(self.webpackChunkdocusaurus_public_api=self.webpackChunkdocusaurus_public_api||[]).push([[4756],{3905:(e,a,t)=>{t.d(a,{Zo:()=>u,kt:()=>g});var A=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(e);a&&(A=A.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,A)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,A,n=function(e,a){if(null==e)return{};var t,A,n={},r=Object.keys(e);for(A=0;A<r.length;A++)t=r[A],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(A=0;A<r.length;A++)t=r[A],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=A.createContext({}),s=function(e){var a=A.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},u=function(e){var a=s(e.components);return A.createElement(l.Provider,{value:a},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return A.createElement(A.Fragment,{},a)}},p=A.forwardRef((function(e,a){var t=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(t),p=n,g=c["".concat(l,".").concat(p)]||c[p]||d[p]||r;return t?A.createElement(g,o(o({ref:a},u),{},{components:t})):A.createElement(g,o({ref:a},u))}));function g(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=t.length,o=new Array(r);o[0]=p;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i[c]="string"==typeof e?e:n,o[1]=i;for(var s=2;s<r;s++)o[s]=t[s];return A.createElement.apply(null,o)}return A.createElement.apply(null,t)}p.displayName="MDXCreateElement"},8763:(e,a,t)=>{t.r(a),t.d(a,{contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var A=t(7462),n=(t(7294),t(3905));const r={title:"OAuth 2.0",slug:"/oauth"},o="Accesos en producci\xf3n",i={type:"mdx",permalink:"/docusaurus-public-api/oauth",source:"@site/src/pages/oauth.md",title:"OAuth 2.0",description:"Lo primero que debes seguir para conectarte a la API de Bsale es que puedas obtener la autorizaci\xf3n para acceder a los recursos de esta. Esta autorizaci\xf3n evidentemente la tendr\xe1 que dar quien tenga privilegios para ellos y sea el \u201cdue\xf1o\u201d de los datos.",frontMatter:{title:"OAuth 2.0",slug:"/oauth"}},l=[{value:"OAuth 2.0",id:"oauth-20",level:3},{value:"C\xf3mo funciona OAuth 2.0",id:"c\xf3mo-funciona-oauth-20",level:4},{value:"Obtener accesos como aplicaci\xf3n",id:"obtener-accesos-como-aplicaci\xf3n",level:2},{value:"Etapa I: Grant request",id:"etapa-i-grant-request",level:3},{value:"Etapa II: Authorization Grant",id:"etapa-ii-authorization-grant",level:3},{value:"Etapa III: Request Access Token",id:"etapa-iii-request-access-token",level:3}],s={toc:l},u="wrapper";function c(e){let{components:a,...r}=e;return(0,n.kt)(u,(0,A.Z)({},s,r,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"accesos-en-producci\xf3n"},"Accesos en producci\xf3n"),(0,n.kt)("p",null,"Lo primero que debes seguir para conectarte a la API de Bsale es que puedas obtener la autorizaci\xf3n para acceder a los recursos de esta. Esta autorizaci\xf3n evidentemente la tendr\xe1 que dar quien tenga privilegios para ellos y sea el \u201cdue\xf1o\u201d de los datos."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Hay ",(0,n.kt)("strong",{parentName:"p"},"2 formas")," de obtener ",(0,n.kt)("inlineCode",{parentName:"p"},"access_token")," en ",(0,n.kt)("strong",{parentName:"p"},"producci\xf3n"),". ",(0,n.kt)("em",{parentName:"p"},"(Si buscas un token para pruebas \ud83d\udc49 ",(0,n.kt)("a",{parentName:"em",href:"/get-started"},"l\xe9e ac\xe1"),")")),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"Solicitando el token por correo a ",(0,n.kt)("a",{parentName:"li",href:"mailto:ayuda@bsale.app"},"ayuda@bsale.app")),(0,n.kt)("li",{parentName:"ul"},"O que el usuario se autentifique en tu aplicaci\xf3n mediante el OAuth, que es lo que explicaremos de aqui en adelante \ud83d\udc47"))),(0,n.kt)("h3",{id:"oauth-20"},"OAuth 2.0"),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"Deber\xe1s implementar OAuth 2.0 cuando tu integraci\xf3n est\xe9 lista")," y desees que tus clientes conecten ambas apps sin necesidad de pedir un token por mail. ")),(0,n.kt)("h4",{id:"c\xf3mo-funciona-oauth-20"},"C\xf3mo funciona OAuth 2.0"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Un poco de historia \ud83c\udf93 "),(0,n.kt)("div",null,(0,n.kt)("div",null,"OAuth es un est\xe1ndar abierto que permite la autorizaci\xf3n segura mediante el uso de un API. En la actualidad se usa desde octubre de 2012, en su versi\xf3n OAuth 2.0 donde sus principales mejoras son que ahora proporciona flujos de autorizaci\xf3n para aplicaciones web, de escritorio, tel\xe9fonos m\xf3viles. Actualmente servicios como Google, Facebook, Azure Active Directory, Github solo admiten el protocolo OAuth 2.0.",(0,n.kt)("br",null),"Recordemos que OAuth 2.0 es realmente un framework de autorizaci\xf3n, que lo que hace es permitir que las aplicaciones obtengan acceso limitado a las cuentas de usuario de algunos servicios como la API de Bsale. Su funcionamiento b\xe1sicamente consiste en delegar el permiso de autenticaci\xf3n del usuario al servicio que gestiona dichas cuentas, de modo que es el propio servicio, quien otorga acceso a las aplicaciones de terceros"),(0,n.kt)("br",null),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Este protocolo cuenta con ",(0,n.kt)("b",null,"3 componentes b\xe1sicos")," que interact\xfaan en el proceso de autorizaci\xf3n:"),(0,n.kt)("div",null,(0,n.kt)("table",null,(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("b",null,"Cliente")),(0,n.kt)("td",null,"Es la aplicaci\xf3n que quiere acceder a un a instancia de Bsale, mediante el \u201cconsumo\u201d de los \u201cEndpoints\u201d contenidos en la API de BSale")),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("b",null,"Usuario")),(0,n.kt)("td",null,"El usuario es quien autoriza a la aplicaci\xf3n a acceder a  su instancia, mediante una pantalla en el mismo Bsale. Es importante tener presente que el usuario deber\xe1 loguearse en Bsale, para dar esta autorizaci\xf3n.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("b",null,"Servidor")),(0,n.kt)("td",null,"El servidor de autorizaci\xf3n recibe las peticiones de acceso de aplicaciones que desean usar el inicio de sesi\xf3n Bsale. Este servidor se encarga de verificar la identidad del usuario y del servicio que solicita acceso, permitiendo o denegando la solicitud, luego de lo cual enviar\xe1 al solicitante un c\xf3digo de autorizaci\xf3n, con el cual podr\xe1 solicitar el token de acceso definitivo")))))))),(0,n.kt)("h2",{id:"obtener-accesos-como-aplicaci\xf3n"},"Obtener accesos como aplicaci\xf3n"),(0,n.kt)("p",null,"Perfecto ahora que tenemos claro c\xf3mo funciona el protocolo veamos en t\xe9rminos espec\xedficos que debes hacer.\nPara ello vamos a dividir el proceso en 3 etapas:"),(0,n.kt)("h3",{id:"etapa-i-grant-request"},"Etapa I: Grant request"),(0,n.kt)("p",null,"En esta etapa es en la que se valida al usuario que dar\xe1 acceso a la aplicaci\xf3n a la cuenta. Lo primero que debes hacer es  redirigir al usuario a la pantalla de autorizaci\xf3n:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-curl"},"https://oauth.bsale.io/login?app_id=xxx&redirect_uri=https://xxxxx&client_code=xxxxx\n")),(0,n.kt)("p",null,"Esta llamada debe contener  3 par\xe1metros:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"app_id")," Corresponde  al ID de la aplicaci\xf3n, el cual lo obtienes al registrarla."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"redirect_uri")," URL al cual se redireccionar\xe1  una vez que el usuario autorice."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"client_code")," Corresponde al c\xf3digo que identifica la instancia productiva en Bsale. RUT, RUC o RFC.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"img alt",src:t(9473).Z,width:"538",height:"296"})),(0,n.kt)("p",null,"En esta pantalla el usuario que aprobar\xe1 deber\xe1 loguearse con sus credenciales de Bsale"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Si las credenciales son correctas el usuario ser\xe1 dirigido a una pantalla donde podr\xe1 autorizar el acceso de  la aplicaci\xf3n a los recursos de la empresa o instancia.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"img alt",src:t(4511).Z,width:"797",height:"720"})),(0,n.kt)("h3",{id:"etapa-ii-authorization-grant"},"Etapa II: Authorization Grant"),(0,n.kt)("p",null,"Luego que el usuario autoriz\xf3 a la aplicaci\xf3n , este ser\xe1 redirigido a la URL que se defini\xf3 en el par\xe1metro ",(0,n.kt)("inlineCode",{parentName:"p"},"redirect_uri")," y se le concatenar\xe1 un el c\xf3digo de autorizaci\xf3n, el cual podr\xe1 usar la aplicaci\xf3n para solicitar su token."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-curl"},"https://ejemplo/v1/oauth/test/?code=xxxx\n")),(0,n.kt)("p",null,"Donde"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"code")," c\xf3digo de autorizaci\xf3n para ser utilizado en la solicitud de obtenci\xf3n del token.")),(0,n.kt)("h3",{id:"etapa-iii-request-access-token"},"Etapa III: Request Access Token"),(0,n.kt)("p",null,"Excelente ya casi hemos terminado. Ahora   el servidor de autorizaci\xf3n te mand\xf3 concatenada en tu URL el c\xf3digo el cual podr\xe1s utilizar para solicitar el token de acceso."),(0,n.kt)("p",null,"Con este c\xf3digo deber\xe1s hacer una \xfaltima llamada a la API de autorizaci\xf3n mediante un request a :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"POST ",(0,n.kt)("inlineCode",{parentName:"li"},"https://oauth.bsale.io/gateway/oauth_response.json"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Body")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "code": "4be422802a2f9976da1f6947e04fac437f1bce91f",\n    "usrToken": "xxxxxxx",\n    "appId": "xxxx"\n}\n')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Donde")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"code")," Corresponde al c\xf3digo de autorizaci\xf3n que te lleg\xf3 en el redireccionamiento."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"usrToken")," Corresponde al token  del integrador (se asigna cuando uno de inscribe como integrador)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"appId")," Identificador \xfanico de la aplicaci\xf3n que quiere acceder")),(0,n.kt)("p",null,"Un ejemplo de respuesta ser\xeda:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "code": 200,\n   "data": {\n       "accessToken": "xxxx",\n       "clientName": "Bsale test",\n       "clientCode": "88888888-8"\n   }\n}\n')),(0,n.kt)("p",null,"Y como respuesta tendr\xe1s el ",(0,n.kt)("inlineCode",{parentName:"p"},"access_token")," que servir\xe1 para autentificar las peticiones a la API"),(0,n.kt)("admonition",{type:"danger"},(0,n.kt)("p",{parentName:"admonition"},"Para solicitar tu ",(0,n.kt)("strong",{parentName:"p"},"app_id")," y utilizar ",(0,n.kt)("strong",{parentName:"p"},"OAuth"),", deber\xe1s completar ",(0,n.kt)("a",{parentName:"p",href:"https://forms.gle/Ucjd6aEb4jY6t89r7"},(0,n.kt)("strong",{parentName:"a"},"este formulario de google")),". Y te responderemos con las credenciales necesarias para utilizar el servicio y autentificar nuevos clientes de forma mas simple.")))}c.isMDXComponent=!0},4511:(e,a,t)=>{t.d(a,{Z:()=>A});const A=t.p+"assets/images/authOauth2-031de5c833a76a757eab251aac4d63a3.png"},9473:(e,a,t)=>{t.d(a,{Z:()=>A});const A="data:image/png;base64,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"}}]);