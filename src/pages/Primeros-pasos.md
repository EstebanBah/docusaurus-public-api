---
title: Primeros pasos
slug: /primeros-pasos
---

# Primeros pasos
## Generalidades 
El equipo de Bsale ha puesto a disposición de la comunidad de desarrolladores una API, la cual permite acceder a un conjunto de métodos orientados a facilitar la integración, desde sistemas externos hacia Bsale.

Estos métodos permitirán obtener información desde Bsale o enviar información hacia la aplicación. Así, por ejemplo, se puede generar documentos tributarios, obtener los documentos generados, productos, clientes etc.

:::info
Esta API permite llamadas del tipo [**REST**](https://es.wikipedia.org/wiki/Transferencia_de_Estado_Representacional) y utiliza [**JSON**](https://www.json.org/json-en.html) para el envío y recepción de información.
:::



## Convenciones utilizadas
- Peticiones sobre `SSL`
- Se usan sustantivos, no verbos.
- Se utilizan dos urls base por recurso "`/clients.json`", "`clients/1.json`"
- Siempre se usa el nombre del recurso en plural.
- Se envía la url del recurso.
- Respuesta en una estructura `JSON` con los atributos en camelCase.
todas las respuestas son en ingles (atributos y mensajes).
- Manejo de versiones en la url.
- Manejo de errores y estados en las respuestas.
- Paginación de la respuesta `JSON`.
- Permitir acceder a las relaciones de un recurso a través de la variable expand en una sola petición.
- Permitir devolver solo los atributos requeridos a través de la variable fields.
- Las fechas se trabaja como enteros, por ejemplo `1388545200` corresponde a la fecha 2014-01-01, la conversión es realizada utilizando el Tiempo Unix.

:::tip
Si necesitas aprender como trabaja Bsale puedes revisar nuestros videos de [capacitación](https://www.youtube.com/user/BsaleWS/playlists)

:::

## Seguridad
Para autenticar una petición se utiliza un token de acceso, el cual deberá acompañar cada llamada en la cabecera de la petición. 

:::tip

Lée sobre cómo obtener tu token de acceso. 👉 [Ir](/primeros-pasos#token-producción).

:::

Es importante indicar que este token de acceso es único para cada empresa/usuario.

## Enviar un requests
Las peticiones son `HTTP REST` por lo que se debe especificar el método que se va a utilizar, junto al método se debe enviar en la cabecera de la petición el token de acceso que permite la autenticación en la API.

- **GET**, para obtener información de un recurso.
- **POST**, para crear un recurso.
- **PUT**, para modificar un recurso.
- **DELETE**, para eliminar un recurso.

## Ejemplo curl
Un ejemplo en [curl](https://curl.se/) sería:

```json 
curl -i -H "access_token: tutokendeacceso" -X GET https://api.bsale.cl/v1/clients.json
```

## Herramientas útiles
- Para realizar peticiones `REST` de forma sencilla pueden utilizar una extensión de un Cliente `REST` del Google Chrome, Postman, insomnia, etc.
- Para ver como se convierte la fecha a enteros pueden revisar 
[epoch converter](https://www.epochconverter.com/)
- Para procesar los ejemplos, utiliza [Postman](https://www.postman.com/).
