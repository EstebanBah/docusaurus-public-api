---

title: Webhooks
description: Servicio de notificaciones mediante eventos
slug: /webhooks
---
[Obtener datos de instancia]: configuracion/webhooks  "ir a referencia"
[Webhooks de documentos]: documentos/webhooks  "ir a referencia"
[Webhooks de productos]: productos-y-servicios/webhooks#notificación-productos  "ir a referencia"
[Webhooks de variantes]: productos-y-servicios/webhooks#notificación-variantes  "ir a referencia"
[Webhooks de precios]: productos-y-servicios/webhooks#notificación-de-precios  "ir a referencia"
[Webhooks de cambios de stock]: productos-y-servicios/webhooks#notificación-de-stock  "ir a referencia"
[Webhooks de documentos pagados]: formas-de-pago/webhooks  "ir a referencia"

# Bsale webkooks

El equipo de Bsale ha puesto a disposición de la comunidad de desarrolladores un conjunto de notificaciones o Webhooks, la cual permite que puedas estar informado cuando en Bsale se ejecuten determinadas acciones, como la **creación de un documento**, la **creación de un producto**, la **actualización del stock**, **sus precios** etc. Esto evitará que tengas que estar preguntando cada cierto tiempo si algo ha cambiado en Bsale. Estas notificaciones o "callback´s", son informadas mediante webhooks o también conocidos como `user-defined HTTP callbacks`, a mediante un `POST` a una URL que configures para ello. De esta manera por ejemplo cada vez que en Bsale se cree un nuevo documento, te avisaremos mediante una llamada `POST` a la URL que definiste, con una estructura `JSON` que contiene la información que te permitirá obtener el documento creado.

Con los datos enviados en el estructura JSON podrás llamar a nuestra API.

:::info
**Url base** para consumir las respuestas
https://api.bsale.io
:::
### Convenciones utilizadas
- Se solicita que la notificación POS sea sobre SSL.
- Se usan sustantivos, no verbos.
- Se utiliza dos urls base por recurso "/clients.json", "clients/1.json"
- Siempre se usa el nombre del recurso en plural.
- Se envía la url del recurso.
- Manejo de versiones en la url.
- Las fechas se trabaja como enteros, por ejemplo 1388545200 corresponde a la fecha 2014-01-01, la conversión es realizada utilizando el [Tiempo Unix].

## Estructura de notificaciones
- **cpnId** Identificador único de la instancia (_Empresa_) en la cual se generó la acción. 
- **resource** Endpoint donde podrás leer el recurso modificado.
- **resourceId** Identificador único del recurso modificado.
- **topic** Información respecto del tipo de recurso modificado. (_Documentos, Productos, variantes, stock, precios_)
- **action** Acción ejecutada sobre el recurso. Para ello se utiliza RESTful como estándar. (`POST`, `PUT` o `DELETE`)
- **send** fecha en formato de entero. (`UNIX`)

:::tip
Algunas notificaciones contendrán estructuras JSON con campos extras como por ejemplo **`officeId`**, en el caso de creación de documentos.
:::

## Webhooks disponibles
- [Obtener datos de instancia]
- [Webhooks de documentos]
- [Webhooks de productos]
- [Webhooks de variantes]
- [Webhooks de precios]
- [Webhooks de cambios de stock]
- [Webhooks de documentos pagados]


## Solicitar activación
Para solicitar la activación, puedes escribirnos a ayuda@bsale.app indicandonos la URL y el rut o cpnId de empresa a activar.

:::note

Los webhooks que se indiquen como **beta**, deben ser solicitados a ayuda@bsale.app su implementación.

:::