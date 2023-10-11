---
title: Primeros pasos
slug: /get-started
---

# Primeros pasos

## Generalidades 
El equipo de Bsale ha puesto a disposición de la comunidad de desarrolladores una API, la cual permite acceder a un conjunto de métodos orientados a facilitar la integración, desde sistemas externos hacia Bsale.

Estos métodos permitirán obtener información desde Bsale o enviar información hacia la aplicación. Así, por ejemplo, se puede generar documentos tributarios, obtener los documentos generados, productos, clientes etc.

### Acceso a pruebas
Para obtener tu `access_token` a un **ambiente de pruebas** o **sandbox**, deberás [crear una cuenta](https://account.bsale.dev/users/create) para generarlo, no te tomará mas de 1 minuto.

![img alt](/img/copyToken.png)

### Autentificación
Para autenticar una petición se utiliza un token de acceso, el cual deberá acompañar cada llamada en la cabecera de la petición.
- Un ejemplo en [curl](https://curl.se/) sería:

```json 
curl -i -H "access_token: tutokendeacceso" -X GET https://api.bsale.io/v1/clients.json
```
:::note
Es importante indicar que este token de acceso es único para cada **usuario**.
:::

### Enviar un requests
Las peticiones son `HTTP REST` por lo que se debe especificar el método que se va a utilizar, junto al método se debe enviar en la cabecera de la petición el token de acceso que permite la autenticación en la API.

- **GET**, para obtener información de un recurso.
- **POST**, para crear un recurso.
- **PUT**, para modificar un recurso.
- **DELETE**, para eliminar un recurso.


- Un ejemplo en [curl](https://curl.se/) de un **POST** sería:

```js 
curl --location --request POST 'https://api.bsale.io/v1/products.json' \
--header 'access_token: tutokendeacceso' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "Monthly subscription #01AZ",
    "classification": 1,
    "productTypeId": 5
}'
```

## Convenciones utilizadas
- Peticiones sobre `SSL`
- Se usan sustantivos, no verbos.
- Se utilizan dos urls base por recurso `/clients.json`, `clients/1.json`
- Siempre se usa el nombre del recurso en plural.
- Se envía la url del recurso.
- Respuesta en una estructura `JSON` con los atributos en [camelCase](https://es.wikipedia.org/wiki/Camel_case)
- Todas las respuestas se retornan en inglés (atributos y mensajes).
- Manejo de versiones en la url.
- Manejo de errores y estados en las respuestas.
- Paginación de la respuesta `JSON`.
- Permitir acceder a las relaciones de un recurso a través de la variable `expand` en una sola petición.
- Las fechas se trabaja como enteros, por ejemplo `1388545200` corresponde a la fecha 2014-01-01, la conversión es realizada utilizando el Tiempo `Unix`.

:::tip
Si necesitas aprender como trabaja Bsale de forma general puedes revisar nuestros videos de [capacitación](https://www.youtube.com/user/BsaleWS/playlists)
:::

## Herramientas útiles
- Para realizar peticiones `REST` de forma sencilla pueden utilizar una extensión de un Cliente `REST` del Google Chrome, Postman, insomnia, etc.
- Para ver como se convierte la fecha a enteros pueden revisar [epoch converter](https://www.epochconverter.com/)
- Para procesar los ejemplos, utiliza [Postman](https://www.postman.com/).

:::note
_Si buscas un token ya en producción 👉 [lée acá](/oauth)_

:::

## Ayuda
:::info
Ante cualquier duda puedes comunicarte con nosotros ingresando a la comunidad de [**slack**](https://bsaledev.slack.com/join/shared_invite/zt-1h1cqt05g-fqnTiREZYN8g47gf~caO5w#/shared-invite/email) 👋

:::


