---
title: Primeros pasos
slug: /primeros-pasos
---

# Primeros pasos
Lo primero que debes seguir para conectarte a la API de Bsale es que puedas obtener la autorización para acceder a los recursos de esta. Esta autorización evidentemente la tendrá que dar quien tenga privilegios para ellos y sea el “dueño” de los datos.

## Obtén tu token de acceso.
:::info
Para facilitar la obtención de datos asociados a un Usuario, como los `token` activos que pertenecen a X instancia, bien sea en ambiente de prueba ó productivo debes [crear una cuenta](https://account.bsale.dev/users/create) En una primera instancia el token que devolverá la creación de la cuenta, será un `token` de pruebas. Para `token` productivo, el usuario debe ser asociado a una instancia en producción.
:::

![img alt](/img/copyToken.png)


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
Es importante indicar que este token de acceso es único para cada empresa/usuario.

## Herramientas útiles
- Para realizar peticiones `REST` de forma sencilla pueden utilizar una extensión de un Cliente `REST` del Google Chrome, Postman, insomnia, etc.
- Para ver como se convierte la fecha a enteros pueden revisar 
[epoch converter](https://www.epochconverter.com/)
- Para procesar los ejemplos, utiliza [Postman](https://www.postman.com/).

::: tip
Ante cualquier duda puedes comunicarte con nosotros ingresando a la comunidad de 
[slack] (https://bsaledev.slack.com/join/shared_invite/zt-1h1cqt05g-fqnTiREZYN8g47gf~caO5w#/shared-invite/email)
:::
