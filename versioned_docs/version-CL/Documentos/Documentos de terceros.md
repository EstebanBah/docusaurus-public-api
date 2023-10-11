---
sidebar_position: 13
title: Documentos de terceros
description: Listar documentos de compras
slug: /documentos-de-terceros
---


# Documentos de terceros

Listar documentos recepcionados en Bsale, emitidos por proveedores (facturas, notas de crédito, débito etc)

## Estructura JSON

Al realizar una petición `HTTP`, el servicio retornara un JSON con la siguiente estructura:

```js title="Response /third_party_documents/38.json"
{
  "href": "https://api.bsale.io/v1/third_party_documents/38.json",
  "id": 38,
  "codeSii": "34",
  "emissionDate": 1330657200,
  "number": 1179981,
  "clientCode": "89862200-2",
  "clientActivity": "LAN AIRLINES S.A.",
  "exemptAmount": 66488,
  "netAmount": 66488,
  "iva": 19,
  "ivaAmount": 0,
  "ivaOutOfTimeAmount": 0,
  "specificTaxCode": null,
  "specificTaxAmount": "0",
  "additionalTaxAmount": null,
  "ivaNotRecoverableAmount": 0,
  "totalAmount": 66488,
  "bookType": "compra",
  "reportedSii": 0,
  "thirdSii": 0,
  "month": 4,
  "year": 2012,
  "specificTaxRate": null,
  "canceled": 0,
  "ivaAmountWithheld": 0,
  "addBook": 1,
  "urlPdf": null,
  "urlXml": null,
  "fixedAssetAmount": 0,
  "liquidationCode": null,
  "commissionTotalNetAmount": 0,
  "commissionTotalExemptAmount": 0,
  "commissionTotalIvaAmount": 0,
  "docsCount": 0,
  "include": 1,
  "siiReceptionDate": 1546634391,
  "siiInProgress": false,
  "siiStatus": [
    "PAG",
    "ERM"
  ]
}
```

### Atributos
| Atributo      | Descripción | Tipo dato |
| ----------- | ----------- | ----------- |
| **href**      | url del documento       | String       |
| **id** |   identificador único del documento  | Integer |
| **codeSii** |   código tributario del documento | String |
| **emissionDate** |   fecha de emisión del documento | Integer |
| **number** |   folio del documento | Integer |
| **clientCode** |   rut del cliente | String |
| **clientActivity** |   razón social del cliente | String |
| **exemptAmount** |   monto exento del documento | Float |
| **netAmount** |   monto neto del documento | Float |
| **iva** |   porcentaje de IVA | Float |
| **ivaAmount** |   monto iva del documento | Float |
| **ivaOutOfTimeAmount** |   monto iva fuera de plazo del documento | Float |
| **specificTaxCode** |   código del impuesto especifico |String |
| **specificTaxAmount** |   monto del impuesto especifico | String |
| **additionalTaxAmount** |   monto de impuestos adicionales | String |
| **ivaNotRecoverableAmount** |   monto de iva no recuperable | Float |
| **totalAmount** |   monto total del documento.
| **bookType** |   tipo de libro al que pertenece el documento | String |
| **reportedSii** |   indica si el documento fue infomado al SII, 0 es correcto, 1 es enviado, 2 es rechazado | Integer |
| **thirdSii** |   indica si el documento es de compra No(0) Si(1) | Boolean |
| **month** |   mes al cual pertenece el documento | Integer |
| **year** |   año al cual pertenece el documento | Integer |
| **specificTaxRate** |   tasa de impuesto especifico | String |
| **canceled** |   indica si el documento esta anulado No(0) Si(1) | Boolean |
| **ivaAmountWithheld** |   monto de iva retenido | Float |
| **addBook** |   indica si el documento fue agregado al libro No(0) Si(1) | Boolean |
| **urlPdf** |   url Pdf del documento | String |
| **urlXml** |   url Xml del Documento | String |
| **fixedAssetAmount** |   monto del activo fijo | Float |
| **liquidationCode** |   rut de liquidación | String |
| **commissionTotalNetAmount** |   monto total neto de la comisión | Float |
| **commissionTotalExemptAmount** |   monto total exento de la comisión | Float |
| **commissionTotalIvaAmount** |   monto total iva de la comisión | Float |
| **docsCount** |   cantidad de documentos | Integer |
| **include** |   indica si el documento está marcado como "no considerar" en Bsale. Considerar(1) no considerar(0 |
| **siiReceptionDate** |   Fecha de recepción del documento en el SII | Integer |
| **siiInProgress** |   indicador de aceptación/reclamo en proceso | boolean |
| **siiStatus** |   Lista de estados del documento en el SII | Array |
### siiStatus
- **ACD**: Acepta Contenido del Documento
- **RCD**: Reclamo al Contenido del Documento
- **ERM**: Otorga Recibo de Mercaderías o Servicios
- **RFP**: Reclamo por Falta Parcial de Mercaderías
- **RFT**: Reclamo por Falta Total de Mercaderías
- **RFX**: Reclamo por Falta total y parcial de Mercaderías
- **PAG**: Aceptación por pago al contado

## GET lista de documentos de terceros
- GET `/v1/third_party_documents.json` retornará todos los documentos de terceros..

#### Parámetros
- **limit**, limita la cantidad de items de una respuesta JSON, por defecto el limit es 25, el máximo permitido es 50.
- **offset**, permite paginar los items de una respuesta JSON, por defecto el offset es 0.
- **fields**, solo devolver atributos específicos de un recurso
- **expand**, permite expandir instancias y colecciones para traer relaciones en una sola petición.
- **limit**, limita la cantidad de items de una respuesta JSON, por defecto el limit es 25, el máximo permitido es 50.
- **offset**, permite paginar los items de una respuesta JSON, por defecto el offset es 0.
- **fields**, solo devolver atributos específicos de un recurso
- **expand**, permite expandir instancias y colecciones.
- **emissiondate**, filtra documentos por la fecha de emisión.
- **codesii**, filtra por el código tributario del documento.
- **number**, filtra por el número de folio del documento.
- **clientcode**, permite filtrar por rut del cliente.
- **year**, permite filtrar por año del documento.
- **month**, permite filtrar por mes del documento.
- **receptiondate**, permite filtrar por fecha de recepción del documento en el SII.
  
#### Ejemplos
- `GET /v1/third_party_documents.json?limit=10&offset=0`
- `GET /v1/third_party_documents.json?fields=[emissiondate,number,totalAmount]`
- `GET /v1/third_party_documents.json?year=2014`
- `GET /v1/third_party_documents.json?codesii=31`

## GET un documento de tercero
- GET `/v1/third_party_documents/38.json` retorna un único documento.

```json title="Response /third_party_documents/38.json "
{
  "href": "https://api.bsale.io/v1/third_party_documents/38.json",
  "id": 38,
  "codeSii": "34",
  "emissionDate": 1330657200,
  "number": 1179981,
  "clientCode": "89862200-2",
  "clientActivity": "LAN AIRLINES S.A.",
  "exemptAmount": 66488,
  "netAmount": 66488,
  "iva": 19,
  "ivaAmount": 0,
  "ivaOutOfTimeAmount": 0,
  "specificTaxCode": null,
  "specificTaxAmount": "0",
  "additionalTaxAmount": null,
  "ivaNotRecoverableAmount": 0,
  "totalAmount": 66488,
  "bookType": "compra",
  "reportedSii": 0,
  "thirdSii": 0,
  "month": 4,
  "year": 2012,
  "specificTaxRate": null,
  "canceled": 0,
  "ivaAmountWithheld": 0,
  "addBook": 1,
  "urlPdf": null,
  "urlXml": null,
  "fixedAssetAmount": 0,
  "liquidationCode": null,
  "commissionTotalNetAmount": 0,
  "commissionTotalExemptAmount": 0,
  "commissionTotalIvaAmount": 0,
  "docsCount": 0,
  "include": 1,
  "siiReceptionDate": 1546634391,
  "siiInProgress": false,
  "siiStatus": [
    "PAG",
    "ERM"
  ]
}
```

## GET cantidad de documentos de terceros
- GET `/v1/third_party_documents/count.json` retornara la cantidad de documentos de terceros.

```json title="Response /third_party_documents/38.json "
{
   "count": 135
}
```


## POST aceptación o reclamo
- POST `/v1/dtes/claims.json` Para aceptar o reclamar un documento

### Ejemplo JSON

#### Envío

```json title="POST  /dtes/claims.json"
{
   "document":{
      "issuer":{
         "code":"96798520-1"
      },
      "code":"33",
      "number":1502570
   },
   "actionCode":"ERM"
}
```

-   **document.issuer.code**, Numero identificador.
-   **document.code**, Código del documento.
-   **document.number**, Numero del documento.
-   **actionCode**, Acción que se realizara.


#### Respuesta

```json title="Response /dtes/claims.json"
{
    "code": 200,
    "data": {
        "cpn": {
            "date": "2022-12-11T05:37:53.876+00:00",
            "id": 4,
            "code": "76136144-9"
        },
        "document": {
            "number": "78632",
            "code": "43",
            "issuer": {
                "code": "77398220-1"
            }
        },
        "events": [],
        "trackingNumber": "EVENT1686865973440C4CL"
    }
}
```

:::info
Guarda el `trackingNumber` para después consultar sobre el estado del documento
:::

## GET estado de aceptación o reclamo
- GET `/v1/dtes/claims.json` Para obtener el estado del documento mediante Querys Params

#### Parámetros

-   **tracking_number**, Tracking Number del documento.
-   **document_number**, Numero del documento.
-   **document_code**, Código del documento.

#### Ejemplos

-   `GET /v1/dtes/claims.json?tracking_number=EVENT1688564392667C4CL`


```json title="Response /dtes/claims.json?tracking_number=EVENT1688564392667C4CL"
{
    "code": 200,
    "data": {
        "trackingNumber": "EVENT1671341479154C15248",
        "cpnCode": "16077551-3",
        "issuerCode": "78876140-6",
        "actionCode": "ERM",
        "documentCode": "33",
        "documentNumber": "930010",
        "response": {
                "code": "0",
                "description": "Accion Completada OK"
         },
        "generationDate": 1671341479
    }
}
```
-   `GET /v1/dtes/claims.json?document_code=33&document_number=1502570`


```json title="Response /dtes/claims.json?document_code=33&document_number=1502570"
{
    "code": 200,
    "data": [
        {
            "trackingNumber": "EVENT1671341479154C15248",
            "cpnCode": "16077551-3",
            "issuerCode": "78876140-6",
            "actionCode": "ERM",
            "documentCode": "33",
            "documentNumber": "930010",
            "response": {
                "code": "0",
                "description": "Accion Completada OK"
            },
            "generationDate": 1671341479
        },
        {
            "trackingNumber": "EVENT1671341479154C15248",
            "cpnCode": "16077551-3",
            "issuerCode": "78876140-6",
            "actionCode": "ERM",
            "documentCode": "33",
            "documentNumber": "930010",
            "response": {
                "code": "0",
                "description": "Accion Completada OK"
            },
            "generationDate": 1671341479
        }
    ]
}
```

:::info
- Si buscar por `tracking_number` no necesitas agregar `document_code` o `document_number`
- Si buscas por `document_code` necesitas también agregar el `document_number`.
:::
