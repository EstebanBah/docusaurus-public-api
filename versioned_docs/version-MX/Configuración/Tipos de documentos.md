---
sidebar_position: 55
title: Tipos de documentos
description: Listar y editar Tipos de documentos
slug: /tipos-de-documentos
---
# Tipos de documentos
Listar y editar tipos de documentos configuradas en Bsale.

:::info
Para que un tipo de documento pueda ser referenciado, es importante que su **estado sea 0**. (`state=0`)
:::

## Estructura JSON

Al realizar una petición `HTTP`, el servicio retornara un JSON con la siguiente estructura:

```js title="Response /document_types/1.json"
{
  "href": "https://api.bsale.io/v1/document_types/1.json",
  "id": 1,
  "name": "NOTA VENTA",
  "initialNumber": 1,
  "code": "",
  "isElectronicDocument": 0,
  "breakdownTax": 1,
  "use": 0,
  "isSalesNote": 1,
  "isExempt": 0,
  "restrictsTax": 0,
  "useClient": 1,
  "messageBodyFormat": null,
  "thermalPrinter": 1,
  "state": 0,
  "copyNumber": 3,
  "isCreditNote": 0,
  "continuedHigh": 0,
  "ledgerAccount": null,
  "ipadPrint": 0,
  "ipadPrintHigh": "0"
}
```

### Atributos
| Atributo      | Descripción | Tipo dato |
| ----------- | ----------- | ----------- |
| **href**      | url del Tipos de documentos     | String       |
| **id**   | identificador único del Tipos de documentos   | Integer |
| **name**   |  nombre del del tipo de documento | String |
| **initialNumber**   | folio inicial del tipo de documento | Integer |
| **code**   | código tributario del tipo de documento | String |
| **isElectronicDocument**   | indica si el tipo de documento es electrónico No(0) o Si(1) | Boolean |
| **breakdownTax**   | indica si el tipo de documento desglosa impuesto No(0) o Si(1) | Boolean |
| **use**   | indica si el uso que se le da al tipo de documento venta(0), devolución(1), despacho(2), liquidación(3) | Integer |
| **isSalesNote**   | indica si el tipo de documento es una nota de venta No(0) o Si(1) | Boolean |
| **isExempt**   | indica si el tipo de documento es exento No(0) o Si(1) | Boolean |
| **restrictsTax**   | indica si el tipo de documento restringe impuestos No(0) o Si(1) | Boolean |
| **useClient**   | indica si el tipo de documento requiere un cliente No(0) o Si(1) | Boolean |
| **messageBodyFormat**   | formato del tipo de documento | String |
| **thermalPrinter**   | indica si el tipo de documento es impreso en impresora térmica No(0) o Si(1) | Boolean |
| **state**   | estado del tipo de documento activo(0) o inactivo (1) | Boolean |
| **copyNumber**   | numero de copias del tipo de documento | Integer |
| **isCreditNote**   | indica si el tipo de documento es una nota de crédito No(0) o Si(1) | Boolean |
| **continuedHigh**   | indica si el tipo de documento se imprime con alto continuo No(0) o Si(1) | Boolean |
| **ledgerAccount**   | cuenta contable del tipo de documento | String |
| **ipadPrint**   | configuración para Ipad | Boolean |
| **ipadPrintHigh**   | configuración para Ipad | Boolean |

## GET lista de Tipos de documentos
- GET `/v1/document_types.json` retornará todos los Tipos de documentos.

#### Parámetros
- **limit**, limita la cantidad de items de una respuesta JSON, por defecto el limit es 25, el máximo permitido es 50.
- **offset**, permite paginar los items de una respuesta JSON, por defecto el offset es 0.
- **fields**, solo devolver atributos específicos de un recurso
- **expand**, permite expandir instancias y colecciones para traer relaciones en una sola petición.
- **name**, Permite filtrar por nombre del tipo de documento.
- **code**, filtra por el código tributario del tipo de documento (String).
- **ledgeraccount**, filtra por la cuenta contable del tipo de documento.
- **booktypeid**, filtra por el tipo de libro que pertenece (Integer).
- **iselectronicdocument**, permite filtrar si el tipo de documento es electrónico No(0) o Si(1) (Boolean).
- **issalesnote**, permite filtrar si el tipo de documento es una nota de venta No(0) o Si(1) (Boolean).
- **state**, boolean (0 o 1) indica si los tipos de documento están activos(0) inactivos(1).
  
#### Ejemplos
- `GET /v1/document_types.json?limit=10&offset=0`
- `GET /v1/document_types.json?fields=[code,ledgeraccount,state]`
- `GET /v1/document_types.json?expand=[book_type]`
- `GET /v1/document_types.json?code=33`
- `GET /v1/document_types.json?state=0`

```json title="Response /document_types.json "
{
    "href": "https://api.bsale.io/v1/document_types.json",
    "count": 8,
    "limit": 3,
    "offset": 0,
    "items": [
        {
            "href": "https://api.bsale.io/v1/document_types/36.json",
            "id": 36,
            "name": "COMPLEMENTO DE PAGO",
            "initialNumber": 1,
            "code": "P",
            "isElectronicDocument": 0,
            "breakdownTax": 0,
            "use": 10,
            "isSalesNote": 0,
            "isExempt": 0,
            "restrictsTax": 0,
            "useClient": 1,
            "messageBodyFormat": null,
            "thermalPrinter": 1,
            "state": 0,
            "copyNumber": 0,
            "isCreditNote": 0,
            "continuedHigh": 0,
            "ledgerAccount": "",
            "ipadPrint": 0,
            "ipadPrintHigh": 0,
            "restrictClientType": 2,
            "useMaxDays": 0,
            "maxDays": -1
        },
        {
            "href": "https://api.bsale.io/v1/document_types/24.json",
            "id": 24,
            "name": "COTIZACIÓN",
            "initialNumber": 1,
            "code": "",
            "isElectronicDocument": 0,
            "breakdownTax": 1,
            "use": 0,
            "isSalesNote": 1,
            "isExempt": 0,
            "restrictsTax": 0,
            "useClient": 1,
            "messageBodyFormat": null,
            "thermalPrinter": 1,
            "state": 0,
            "copyNumber": 0,
            "isCreditNote": 0,
            "continuedHigh": 0,
            "ledgerAccount": "",
            "ipadPrint": 0,
            "ipadPrintHigh": 0,
            "restrictClientType": 2,
            "useMaxDays": 0,
            "maxDays": -1
        },
        {
            "href": "https://api.bsale.io/v1/document_types/5.json",
            "id": 5,
            "name": "FACTURA",
            "initialNumber": 1,
            "code": "I",
            "isElectronicDocument": 1,
            "breakdownTax": 0,
            "use": 0,
            "isSalesNote": 0,
            "isExempt": 0,
            "restrictsTax": 0,
            "useClient": 1,
            "messageBodyFormat": "<p><span style=\"font-family: arial,helvetica,sans-serif; font-size: large;\"><strong>&nbsp; Estimado #{NOMBRE_DESTINATARIO}#:</strong></span></p>\n<p><span style=\"font-family: arial,helvetica,sans-serif; font-size: large;\">&nbsp; Hemos generado a tu nombre la<strong> #{TIPO_DOCUMENTO}# N&ordm; #{NUMERO_DOCUMENTO}#</strong> por un monto de  #{MONTO_DOCUMENTO}# , cuya fecha de&nbsp; vencimiento es el <strong> #{FECHA_VENCIMIENTO}#</strong></span><br /><br /><span style=\"font-family: arial,helvetica,sans-serif; font-size: large;\">&nbsp; Para ver y descargar el documento haz click en el siguiente link: <span style=\"color: #000000;\"> #{LINK_DOCUMENTO}#</span></span><br /><br /><span style=\"font-family: arial,helvetica,sans-serif; font-size: large;\">&nbsp; Atentamente,</span><br /><span style=\"font-family: arial,helvetica,sans-serif; font-size: large;\">&nbsp; #{NOMBRE_USUARIO}#</span><br /><span style=\"font-family: arial,helvetica,sans-serif; font-size: large;\">&nbsp; #{NOMBRE_EMPRESA}#</span></p>",
            "thermalPrinter": 1,
            "state": 0,
            "copyNumber": 0,
            "isCreditNote": 0,
            "continuedHigh": 0,
            "ledgerAccount": "",
            "ipadPrint": 0,
            "ipadPrintHigh": 0,
            "restrictClientType": 2,
            "useMaxDays": 0,
            "maxDays": -1,
            "book_type": {
                "href": "https://api.bsale.io/v1/book_types/1.json",
                "id": "1"
            }
        }
    ],
    "next": "https://api.bsale.io/v1/document_types.json?limit=3&offset=3"
}
```
## GET un tipo de documento
- GET `/v1/document_types/1.json` retornará un tipo de documento específico.
#### Parámetros

- **expand**, permite expandir instancias y colecciones.

#### Ejemplos
- `GET /v1/document_types/1.json?expand=[book_type]`

```json title="Response /document_types/1.json"
{
  "href": "https://api.bsale.io/v1/document_types/1.json",
  "id": 1,
  "name": "NOTA VENTA",
  "initialNumber": 1,
  "code": "",
  "isElectronicDocument": 0,
  "breakdownTax": 1,
  "use": 0,
  "isSalesNote": 1,
  "isExempt": 0,
  "restrictsTax": 0,
  "useClient": 1,
  "messageBodyFormat": null,
  "thermalPrinter": 1,
  "state": 0,
  "copyNumber": 3,
  "isCreditNote": 0,
  "continuedHigh": 0,
  "ledgerAccount": null,
  "ipadPrint": 0,
  "ipadPrintHigh": "0"
}
```
## GET cantidad de tipos de documentos
- GET `/v1/document_types/count.json` Retornará cantidades de registros.

- **state**, boolean (0 o 1) indica si los clientess están activos(0) inactivos (1).
  
```json 
{
   "count": 13
}
```

## PUT un tipo de documento
- PUT `/v1/document_types.json` 

:::note
Solo es posible editar "Nombre del documento", "Estado" y "Si requiere datos de cliente"
:::

#### Envío
```json
{
   "name": "TICKET DE VENTA T",
   "state": 1,
   "useClient": 1
}
```
#### Respuesta
```json
{
  "href": "https://api.bsale.io/v1/document_types/10.json",
  "id": 10,
  "name": "TICKET DE VENTA T",
  "initialNumber": 1,
  "code": "I",
  "isElectronicDocument": 0,
  "breakdownTax": 0,
  "use": 0,
  "isSalesNote": 0,
  "isExempt": 0,
  "restrictsTax": 1,
  "useClient": 1,
  "messageBodyFormat": null,
  "thermalPrinter": 1,
  "state": 1,
  "copyNumber": 0,
  "isCreditNote": 0,
  "continuedHigh": 1,
  "ledgerAccount": "",
  "ipadPrint": 0,
  "ipadPrintHigh": 0,
  "restrictClientType": 2,
  "useMaxDays": 0,
  "maxDays": -1,
  "book_type": {
    "href": "https://api.bsale.io/v1/book_types/1.json",
    "id": "1"
  }
}
```