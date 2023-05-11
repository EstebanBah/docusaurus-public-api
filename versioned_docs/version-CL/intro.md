---
id: primeros-pasos
sidebar_position: 2
title: Primeros pasos
description: Primeros pasos para interactuar con la API de Bsale
slug: /primeros-pasos
---

# Primeros pasos

Lo primero que debes seguir para conectarte a la API de Bsale es que puedas obtener la autorización para acceder a los recursos de esta. Esta autorización evidentemente la tendrá que dar quien tenga privilegios para ellos y sea el “dueño” de los datos.

## Obtén tu token de acceso

### Token de pruebas
Para obtener tu `access_token` a un **ambiente de pruebas**, [crea una cuenta](https://account.bsale.dev/users/create) para obtenerlo.

![img alt](/img/copyToken.png)

### Token producción
Para obtener tu `access_token` y conectar un **ambiente en producción**, debes solicitar al mail ayuda@bsale.app.

### OAuth 2.0
:::caution
**Deberás implementar OAuth 2.0 cuando la integración esté lista** y desees que tus clientes conecten ambas apps sin necesidad de pedir un token por mail. 
:::
#### Cómo funciona OAuth 2.0

<details>
  <summary>Un poco de historia 🎓 </summary>
  <div>
    <div>OAuth es un estándar abierto que permite la autorización segura mediante el uso de un API. En la actualidad se usa desde octubre de 2012, en su versión OAuth 2.0 donde sus principales mejoras son que ahora proporciona flujos de autorización para aplicaciones web, de escritorio, teléfonos móviles. Actualmente servicios como Google, Facebook, Azure Active Directory, Github solo admiten el protocolo OAuth 2.0.<br/>
    Recordemos que OAuth 2.0 es realmente un framework de autorización, que lo que hace es permitir que las aplicaciones obtengan acceso limitado a las cuentas de usuario de algunos servicios como la API de Bsale. Su funcionamiento básicamente consiste en delegar el permiso de autenticación del usuario al servicio que gestiona dichas cuentas, de modo que es el propio servicio, quien otorga acceso a las aplicaciones de terceros
    </div>
    <br/>
    <details>
      <summary>
        Este protocolo cuenta con <b>3 componentes básicos</b> que interactúan en el proceso de autorización:
      </summary>
      <div><table>
<tbody>
  <tr>
    <td><b>Cliente</b></td>
    <td>Es la aplicación que quiere acceder a un a instancia de Bsale, mediante el “consumo” de los “Endpoints” contenidos en la API de BSale</td>
  </tr>
  <tr>
    <td><b>Usuario</b></td>
    <td>El usuario es quien autoriza a la aplicación a acceder a  su instancia, mediante una pantalla en el mismo Bsale. Es importante tener presente que el usuario deberá loguearse en Bsale, para dar esta autorización.</td>
  </tr>
  <tr>
    <td><b>Servidor</b></td>
    <td>El servidor de autorización recibe las peticiones de acceso de aplicaciones que desean usar el inicio de sesión Bsale. Este servidor se encarga de verificar la identidad del usuario y del servicio que solicita acceso, permitiendo o denegando la solicitud, luego de lo cual enviará al solicitante un código de autorización, con el cual podrá solicitar el token de acceso definitivo</td>
  </tr>
</tbody>
</table>
      </div>
    </details>
  </div>
</details>


## Obtener accesos como aplicación

Perfecto ahora que tenemos claro cómo funciona el protocolo veamos en términos específicos que debes hacer.
Para ello vamos a dividir el proceso en 3 etapas:

## Etapa I: Grant request
En esta etapa es en la que se valida al usuario que dará acceso a la aplicación a la cuenta. Lo primero que debes hacer es  redirigir al usuario a la pantalla de autorización:

```curl
https://oauth.bsale.io/login?app_id=xxx&redirect_uri=https://xxxxx&client_code=xxxxx
```

Esta llamada debe contener  3 parámetros:

- **app_id** Corresponde  al ID de la aplicación, el cual lo obtienes al registrarla.
- **redirect_uri** URL al cual se redireccionará  una vez que el usuario autorice.
- **client_code** Corresponde al código que identifica la instancia, en Perú por ejemplo será el RUC y en Chile el RUT.
  
![img alt](/img/loginOauth.png)

En esta pantalla el usuario que aprobará deberá loguearse con sus credenciales de Bsale

:::info
Si las credenciales son correctas el usuario será dirigido a una pantalla donde podrá autorizar el acceso de  la aplicación a los recursos de la empresa o instancia.
:::

![img alt](/img/authOauth.png)

## Etapa II: Authorization Grant
Luego que el usuario autorizó a la aplicación , este será redirigido a la URL que se definió en el parámetro `redirect_uri` y se le concatenará un el código de autorización, el cual podrá usar la aplicación para solicitar su token.

```curl
https://ejemplo/v1/oauth/test/?code=xxxx
```
Donde
- **code** código de autorización para ser utilizado en la solicitud de obtención del token.

## Etapa III: Request Access Token
Excelente ya casi hemos terminado. Ahora   el servidor de autorización te mandó concatenada en tu URL el código el cual podrás utilizar para solicitar el token de acceso.

Con este código deberás hacer una última llamada a la API de autorización mediante un request a :

- POST `https://oauth.bsale.io/gateway/oauth_response.json`

**Body**
```json
{
    "code": "4be422802a2f9976da1f6947e04fac437f1bce91f",
    "usrToken": "xxxxxxx",
    "appId": "xxxx"
}
```
**Donde**
- **code** Corresponde al código de autorización que te llegó en el redireccionamiento.
- **usrToken** Corresponde al token  del integrador (se asigna cuando uno de inscribe como integrador).
- **appId** Identificador único de la aplicación que quiere acceder

Un ejemplo de respuesta sería:

```json
{
   "code": 200,
   "data": {
       "accessToken": "xxxx",
       "clientName": "Bsale test",
       "clientCode": "88888888-8"
   }
}
```

Y como respuesta tendrás el `access_token` que servirá para autentificar las peticiones a la API