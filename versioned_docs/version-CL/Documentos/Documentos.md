---
sidebar_position: 9
title: Documentos
description: Crear, editar y listar documentos
slug: /documentos
---

# Documentos
Listar documentos generados en Bsale, del tipo venta, pre-venta, despachos, etc. Se puede obtener detalles, referencias, datos generales, etc. 

:::info
**Crear documentos** del tipo venta (Boleta, Factura electrónica, etc) o documentos asociados al proceso de venta (notas de venta, cotizaciones, etc). 
Para la **creación** de documentos como [notas de crédito](/CL/devoluciones#post-una-devolución), [despachos](/CL/documentos/despachos#post-un-despacho). Ver su documentación asociada.
:::

Cómo funciona la interfaz de Bsale, mira éstos videos:

- Creación de factura [Ver](https://www.youtube.com/watch?v=oHOyQud9Vq4) 
- Creación de boleta [Ver](https://www.youtube.com/watch?v=UfxkD3EkrXc)
- Creación de pre-venta [Ver](https://www.youtube.com/watch?v=pqaaaI25EKo)

## Estructura JSON

Al realizar una petición `HTTP`, el servicio retornara un JSON con la siguiente estructura:

```js title="Response /documents.json"
{
  "href": "https://api.bsale.io/v1/documents/382.json",
  "id": 382,
  "emissionDate": 1463540400,
  "expirationDate": 1464663600,
  "generationDate": 1463593575,
  "rcofDate": 1464663600,
  "number": 1,
  "totalAmount": 14280,
  "netAmount": 12000,
  "taxAmount": 2280,
  "exemptAmount": 0,
  "exportTotalAmount": 0,
  "exportNetAmount": 0,
  "exportTaxAmount": 0,
  "exportExemptAmount": 0,
  "commissionRate": 0,
  "commissionNetAmount": 0,
  "commissionTaxAmount": 0,
  "commissionTotalAmount": 0,
  "percentageTaxWithheld": 0,
  "purchaseTaxAmount": 0,
  "purchaseTotalAmount": 0,
  "urlTimbre": null,
  "ted": null,
  "urlPublicView": "http://app2.bsale.cl/view/2/a2d9b4da5128?sfd=99",
  "urlPdf": "http://app2.bsale.cl/view/2/a2d9b4da5128.pdf?sfd=99",
  "urlPublicViewOriginal": "http://app2.bsale.cl/view/2/a2d9b4da5128",
  "urlPdfOriginal": "http://app2.bsale.cl/view/2/a2d9b4da5128.pdf",
  "token": "a2d9b4da5128",
  "state": 0,
  "userId": 2,
  "urlXml": null,
  "address": null,
  "municipality": null,
  "city": null,
  "informedSii": 1,
  "responseMsgSii": null,
  "document_type": {
    "href": "https://api.bsale.io/v1/document_types/1.json",
    "id": "1"
  },
  "client": {
    "href": "https://api.bsale.io/v1/clients/7.json",
    "id": "7"
  },
  "office": {
    "href": "https://api.bsale.io/v1/offices/2.json",
    "id": "2"
  },
  "user": {
    "href": "https://api.bsale.io/v1/users/2.json",
    "id": "2"
  },
  "references": {
    "href": "https://api.bsale.io/v1/documents/382/references.json"
  },
  "document_taxes": {
    "href": "https://api.bsale.io/v1/documents/382/document_taxes.json"
  },
  "details": {
    "href": "https://api.bsale.io/v1/documents/382/details.json"
  },
  "sellers": {
    "href": "https://api.bsale.io/v1/documents/382/sellers.json"
  }
}
```

### Atributos
| Atributo      | Descripción | Tipo dato |
| ----------- | ----------- | ----------- |
| **href**      | url del documento       | String       |
| **emissionDate**   | fecha de emisión del documento (Integer) (no se debe aplicar zona horaria, solo considerar la fecha).        | Integer        |
| **expirationDate**   | fecha de vencimiento del documento (Integer) (no se debe aplicar zona horaria, solo considerar la fecha)        | Integer        |
| **generationDate**   | fecha y hora en que se genero el documento        | Integer        |
| **rcofDate**   | fecha de envío RCOF        | Integer        |
| **number**   | folio del documento        | Integer        |
| **totalAmount**   | monto total del documento        | Float        |
| **netAmount**   | monto neto del documento        | Float        |
| **taxAmount**   | monto de impuestos del documento        | Float        |
| **exemptAmount**   | monto exento del documento        | Float        |
| **exportTotalAmount**   | monto total del documento de exportación        | Float        |
| **exportNetAmount**   | monto neto del documento de exportación        | Float        |
| **exportTaxAmount**   | monto de impuestos del documento de exportación        | Float        |
| **exportExemptAmount**   | porcentaje de la comisión en la liquidación del documento         | Float        |
| **commissionRate**   | porcentaje de la comisión en la liquidación del documento         | Float        |
| **commissionNetAmount**   | monto neto de la comisión en la liquidación del documento        | Float        |
| **commissionTaxAmount**   | monto de impuesto de la comisión en la liquidación del documento        | Float        |
| **commissionTotalAmount**   |  monto total de la comisión en la liquidación del documento        | Float        |
| **percentageTaxWithheld**   | porcentaje de impuesto retenido para los documentos de compra        | Float        |
|  **purchaseTaxAmount**   | monto de impuesto retenido para los documentos de compra        | Float        |
|  **purchaseTotalAmount**   | monto total del documento de compra         | Float        |
|  **ted**   | ted del documento en caso de ser electrónico.        | Text        |
|  **urlTimbre**   | url de la firma de un documento        | Text        |
| **urlPublicView**   | url publica para visualizar el documento, con todas sus copias         | Text        |
|  **urlPdf**   | url del pdf del documento, con todas sus copias         | Text        |
|  **urlPublicViewOriginal**   | url publica para visualizar el documento, solo muestra el original        | Text        |
|  **urlPdfOriginal**   | url del pdf del documento, solo muestra el original        | Text        |
|  **token**   | token único del documento        | String        |
|  **state**   | estado del documento indica si el documento esta activo(0) o inactivo (1)         | Boolean        |
|  **urlXml**   | respaldo del documento electrónico         | String        |
|  **address**   | dirección del documento        | String        |
|  **municipality**   | comuna del documento        | String        |
|  **city**   | ciudad del documento        | String        |
|  **informedSii**   | indica si el documento fue informado al SII, 0 es correcto, 1 es enviado, 2 es rechazado        | Integer        |
| **responseMsgSii**   | respuesta de la declaración del documento al SII en caso de ser electrónico        | String        |
| **document_type**   | nodo que indica el tipo del documento al cual pertenece el documento.        | Text        |
| **client**   | nodo que indica el cliente al cual se le emitió el documento.        | Text        |
| **office**   | nodo que indica la sucursal a la cual pertenece el documento.        | Text        |
| **user**   | nodo que indica el usuario que emitió el documento.        | Text        |
| **references**   | nodo que indica las referencias de un documento.        | Text        |
| **document_taxes**   | nodo que indica el detalle de impuesto de un documento.        | Text        |
| **details**   | nodo que indica los detalles de un documento.        | Text        |
| **relatedDetailId**   | id detalle relacionado al documento.         | Text        |
| **sellers**   | nodo que indica los vendedores de un documento, pueden ser mas de 1 por ejemplo al emitir un documento a partir de varias notas de venta.        | Text        |

## GET lista de documentos
- GET `/v1/documents.json` retorna todos los documentos.

#### Parámetros
- **limit**, limita la cantidad de items de una respuesta JSON, por defecto el limit es 25, el máximo permitido es 50.
- **offset**, permite paginar los items de una respuesta JSON, por defecto el offset es 0.
- **fields**, solo devolver atributos específicos de un recurso
- **expand**, permite expandir instancias y colecciones para traer relaciones en una sola petición.
- **emissiondate**, filtra documentos por la fecha de emisión.
- **expirationdate**, filtra documentos por la fecha de vencimiento.
- **emissiondaterange**, filtra documentos por un rango de fecha.
- **number**, filtra documentos por el folio.
- **token**, filtra documentos por el token.
- **documenttypeid**, filtra documentos por el tipo de documento.
- **clientid**, filtra documentos por el cliente.
- **clientcode**, filtra rut del cliente.
- **officeid**, filtra documentos por la sucursal.
- **saleconditionid**, filtra documentos por la condición de venta.
- **informedsii**, filtra documentos si fue declarado en el SII, 0 es correcto, 1 es enviado, 2 es rechazado (Integer).
- **codesii**, filtra documentos por el código tributario.
- **totalamount**, filtra documentos por el monto total.
- **referencecode**, filtra documentos por el código tributario de una referencia (ej. el código de una orden de compra).
- **referencenumber**, filtra documentos por el folio de una referencia (ej. el folio de una orden de compra).
- **state**, boolean (0 o 1) indica si los documentos están activos(0) inactivos (1).
  
#### Ejemplos
- `GET /v1/documents.json?limit=50&offset=0`
- `GET /v1/documents.json?fields=[number,totalAmount]`
- `GET /v1/documents.json?number=53`
- `GET /v1/documents.json?documenttypeid=1`
- `GET /v1/documents.json?informedsii=0`
- `GET /v1/documents.json?expand=[document_types,client,office,details,payments]`
- `GET /v1/documents.json?emissiondate=1309478400&-expirationdate=1309478400&state=0`
- `GET /v1/documents.json?emissiondaterange=[1414800000,1417391990]`
- `GET /v1/documents.json?codesii=33&totalamount=14280`
- `GET /v1/documents.json?referencecode=801`
- `GET /v1/documents.json?referencenumber=123`
- `GET /v1/documents.json?referencecode=801&referencenumber=123`
- `GET /v1/documents.json?rcofdate=1629244800`
- `GET /v1/documents.json?detailid=5350`
- `GET /v1/documents.json?expand=details,payments`  

## GET único documento
- GET `/v1/documents/421.json` retorna un único documento.

#### Parámetros
- **expand**, permite expandir instancias y colecciones.

#### Ejemplos
- `GET /v1/documents/421.json?expand=[document_type,office]`
- `GET /v1/documents/421.json?expand=details,payments`

```json title="Response /documents/421.json "
{
  "href": "https://api.bsale.io/v1/documents/421.json",
  "id": 421,
  "emissionDate": 1351652400,
  "expirationDate": 1351652400,
  "rcofDate": 1351652400,
  "number": 1,
  "totalAmount": 5117000,
  "netAmount": 4300000,
  "taxAmount": 817000,
  "exemptAmount": 0,
  "exportTotalAmount": 0,
  "exportNetAmount": 0,
  "exportTaxAmount": 0,
  "exportExemptAmount": 0,
  "commissionRate": 0,
  "commissionNetAmount": 0,
  "commissionTaxAmount": 0,
  "commissionTotalAmount": 0,
  "percentageTaxWithheld": 0,
  "purchaseTaxAmount": 0,
  "purchaseTotalAmount": 0,
  "urlTimbre": null,
  "ted": null,
  "urlPublicView": "http://app2.bsale.cl/view/2/f806d6a6ae73?sfd=99",
  "urlPdf": "http://app2.bsale.cl/view/2/f806d6a6ae73.pdf?sfd=99",
  "urlPublicViewOriginal": "http://app2.bsale.cl/view/2/f806d6a6ae73",
  "urlPdfOriginal": "http://app2.bsale.cl/view/2/f806d6a6ae73.pdf",
  "token": "f806d6a6ae73",
  "state": 0,
  "urlXml": null,
  "address": "San Francisco 402, jj perez 7248",
  "municipality": "Santiago",
  "city": "Santiago",
  "informedSii": 2,
  "responseMsgSii": null,
  "document_type": {
    "href": "https://api.bsale.io/v1/document_types/4.json",
    "id": "4"
  },
  "client": {
    "href": "https://api.bsale.io/v1/clients/7.json",
    "id": "7"
  },
  "office": {
    "href": "https://api.bsale.io/v1/offices/2.json",
    "id": "2"
  },
  "user": {
    "href": "https://api.bsale.io/v1/users/2.json",
    "id": "2"
  },
  "references": {
    "href": "https://api.bsale.io/v1/documents/421/references.json"
  },
  "document_taxes": {
    "href": "https://api.bsale.io/v1/documents/421/document_taxes.json"
  },
  "details": {
    "href": "https://api.bsale.io/v1/documents/421/details.json"
  },
  "sellers": {
    "href": "https://api.bsale.io/v1/documents/421/sellers.json"
  }
}
```
## Resúmenes
### GET resumen de documentos emitidos
- GET `/v1/documents/summary.json` retorna resumen de documentos.

#### Parámetros
- **limit**, limita la cantidad de items de una respuesta JSON, por defecto el limit es 25, el máximo permitido es 50.
- **offset**, permite paginar los items de una respuesta JSON, por defecto el offset es 0.
- **fields**, solo devolver atributos específicos de un recurso
- **expand**, permite expandir instancias y colecciones.
- **emissiondaterange**, filtra por rango de fecha de emisión.
- **generationdaterange**, filtra por rango de fecha de generación.
- **codesii**, Código documento basado en los identificadores del SII, pueden ser varios separados por coma.
- **perdocument**, Boolean (0 o 1) indica si el resultado lo agrupa por documento.

#### Ejemplos
- `GET /v1/documents.json?limit=10&offset=0`
- `GET /v1/documents/summary.json?emissiondaterange=[1404187200,1406779200]`
- `GET /v1/documents/summary.json?generationdaterange=[1404187200,1406779200]`
- `GET /v1/documents/summary.json?codesii=[33,31]`
- `GET /v1/documents/summary.json?perdocument=1`
- `GET /v1/documents/summary.json?rcofdaterange=[1627776000,1627862400]&codesii=[39]`

```json title="Response /documents/summary.json?codesii=[39]"
[
  {
    "generationDate": "",
    "emissionDate": "",
    "documentTypeName": "Boleta Electrónica",
    "codeSii": "39",
    "month": 7,
    "year": 2014,
    "officeId": 2,
    "officeName": "Los Angeles",
    "officeCostCenter": "",
    "count": 1,
    "totalNetAmount": 2791,
    "totalTaxAmount": 530,
    "totalAmount": 3321,
    "totalExemptAmount": 0,
    "taxes": [
      {
        "taxId": 1,
        "taxName": "IVA",
        "taxAmount": 530
      }
    ],
    "details": [
      {
        "itemLedgerAccount": "",
        "totalNetAmount": 2791
      }
    ],
    "documentId": 10383,
    "documentNumber": 9093
  },
  {
    "generationDate": "",
    "emissionDate": "",
    "documentTypeName": "Boleta Electrónica",
    "codeSii": "39",
    "month": 7,
    "year": 2014,
    "officeId": 2,
    "officeName": "Los Angeles",
    "officeCostCenter": "",
    "count": 1,
    "totalNetAmount": 15132,
    "totalTaxAmount": 2875,
    "totalAmount": 18007,
    "totalExemptAmount": 0,
    "taxes": [
      {
        "taxId": 1,
        "taxName": "IVA",
        "taxAmount": 2875
      }
    ],
    "details": [
      {
        "itemLedgerAccount": "",
        "totalNetAmount": 15132
      }
    ],
    "documentId": 10384,
    "documentNumber": 9094
  }
]
```
### GET resumen de ventas Boletas electrónicas
- GET `/v1/documents/summary/ticket.json` retorna resumen de boletas.

#### Parámetros
- **rcofdaterange**, Filtra por rango de fecha de RCOF

#### Ejemplos
- `GET /v1/documents/summary/ticket.json?rcofdaterange=[1635724800,1638230400]`

```json title="Response /documents/summary/ticket.json?rcofdaterange=[1635724800,1638230400]"
[
  {
    "codeSii": "39",
    "documentTypeName": "BOLETA ELECTRÓNICA T",
    "count": 233,
    "totalNetAmount": 432340,
    "totalExemptAmount": 123333,
    "totalIvaAmount": 324344,
    "totalAmount": 7787654
  }
]
```
### GET cantidad de documentos
- GET `/v1/documents/count.json` retorna cantidad de registros.

#### Parámetros
- **state**, permite filtrar por estado, activos (0) inactivos (1).

#### Ejemplos
- `GET /v1/documents/count.json?state=0`

```json title="Response /documents/count.json?state=0 "
{
   "count": 1449
}
```
### GET costos de una venta
- GET `/v1/documents/costs.json` retorna los costos asociados a la venta.

:::info
Entrega los costos asociados a una venta solo si los productos fueron despachados (`dispatch=1`).
:::

#### Parámetros
- **documentid**, filtra por el id del documento.
- **number**, filtra documentos por el folio.
- **codesii**, filtra documentos por el código tributario.

#### Ejemplos
- `GET /v1/documents/costs.json?documentid=145071`
- `GET /v1/documents/costs.json?codesii=33&number=320`


```json title="Response /documents/145071.json "
{
  "href": "https://api.bsale.io/v1/documents/145071.json",
  "id": 145071,
  "name": "FACTURA ELECTRONICA",
  "number": 320,
  "totalCost": 37949,
  "cost_detail": [
    {
      "variant": {
        "href": "https://api.bsale.io/v1/variants/6884.json",
        "id": 6884,
        "description": "Morado",
        "code": "DD1009M"
      },
      "shipping_detail": {
        "href": "https://api.bsale.io/v1/shippings/121576/details/290425.json",
        "id": 290425,
        "quantity": 1,
        "variantStock": 0,
        "variantCost": 25611,
        "variantTotalCost": 25611
      }
    },
    {
      "variant": {
        "href": "https://api.bsale.io/v1/variants/11272.json",
        "id": 11272,
        "description": "Morado",
        "code": "CE3703"
      },
      "shipping_detail": {
        "href": "https://api.bsale.io/v1/shippings/121576/details/290426.json",
        "id": 290426,
        "quantity": 1,
        "variantStock": 0,
        "variantCost": 4948,
        "variantTotalCost": 4948
      }
    },
    {
      "variant": {
        "href": "https://api.bsale.io/v1/variants/6949.json",
        "id": 6949,
        "description": "Rojo",
        "code": "HB1026"
      },
      "shipping_detail": {
        "href": "https://api.bsale.io/v1/shippings/121576/details/290427.json",
        "id": 290427,
        "quantity": 2,
        "variantStock": 15,
        "variantCost": 3695,
        "variantTotalCost": 7390
      }
    }
  ]
}
```
## Detalles
### GET detalles de un documento
- GET `/v1/documents/12644/details.json` retorna todos los detalles de un documento.

```json title="Response /documents/4139/details.json"
{
    "href": "https://api.bsale.io/v1/documents/4139/details.json",
    "count": 1,
    "limit": 25,
    "offset": 0,
    "items": [
        {
            "href": "https://api.bsale.io/v1/documents/4139/details/6182.json",
            "id": 6182,
            "lineNumber": 0,
            "quantity": 1.0,
            "netUnitValue": 15285.0,
            "totalUnitValue": 27500.0,
            "netAmount": 15285.0,
            "taxAmount": 12215.0,
            "totalAmount": 27500.0,
            "netDiscount": 0.0,
            "totalDiscount": 0.0,
            "variant": {
                "href": "https://api.bsale.io/v1/variants/8045.json",
                "id": 8045,
                "description": "Standard",
                "code": "1661885024042"
            },
            "note": "",
            "relatedDetailId": 0
        }
    ]
}
```
### GET un detalle de un documento
- GET `/v1/documents/2467/details/3216.json` retorna un único detalle.

```json title="Response /documents/4139/details/6182.json"
{
    "href": "https://api.bsale.io/v1/documents/4139/details/6182.json",
    "id": 6182,
    "lineNumber": 0,
    "quantity": 1.0,
    "netUnitValue": 15285.0,
    "totalUnitValue": 27500.0,
    "netAmount": 15285.0,
    "taxAmount": 12215.0,
    "totalAmount": 27500.0,
    "netDiscount": 0.0,
    "totalDiscount": 0.0,
    "variant": {
        "href": "https://api.bsale.io/v1/variants/8045.json",
        "id": 8045,
        "description": "Standard",
        "code": "1661885024042"
    },
    "note": "",
    "relatedDetailId": 0
}
```
## Relaciones
### GET referencias de un documento
- GET `/v1/documents/11561/references.json` retorna referencias del documento.

:::info

Retorna sólo referencias electrónicas (**XML**).

:::
```json title="Response /documents/4139/references.json "
{
  "href": "https://api.bsale.io/v1/documents/4139/references.json",
  "count": 2,
  "limit": 25,
  "offset": 0,
  "items": [
    {
      "href": "https://api.bsale.io/v1/documents/4139/references/5.json",
      "id": 5,
      "referenceDate": 1407643200,
      "number": "123",
      "reason": "Orden de Compra 123",
      "dte_code": {
        "href": "https://api.bsale.io/v1/dte_codes/20.json",
        "id": "20"
      }
    },
    {
      "href": "https://api.bsale.io/v1/documents/4139/references/6.json",
      "id": 6,
      "referenceDate": 1407643200,
      "number": "456",
      "reason": "Guia despacho 456",
      "dte_code": {
        "href": "https://api.bsale.io/v1/dte_codes/15.json",
        "id": "15"
      }
    }
  ]
}
```

### GET una referencia de un documento
- GET `/v1/documents/11561/references/5.json` retorna una única referencia.

```json title="Response /documents/11561/references/5.json "
{
  "href": "https://api.bsale.io/v1/documents/11561/references/5.json",
  "id": 5,
  "referenceDate": 1407643200,
  "number": "123",
  "reason": "Orden de Compra 123",
  "dte_code": {
    "href": "https://api.bsale.io/v1/dte_codes/20.json",
    "id": "20"
  }
}
```
### GET impuestos de un documento
- GET `/v1/documents/12644/document_taxes.json` retorna los impuestos asociados al documento.

```json title="Response /documents/12644/document_taxes.json "
{
  "href": "https://api.bsale.io/v1/documents/12644/document_taxes.json",
  "count": 1,
  "limit": 25,
  "offset": 0,
  "items": [
    {
      "href": "https://api.bsale.io/v1/documents/12644/document_taxes/12626.json",
      "id": 12626,
      "totalAmount": 797,
      "exemptAmount": 0,
      "tax": {
        "href": "https://api.bsale.io/v1/taxes/1.json",
        "id": "1"
      }
    }
  ]
}
```
### GET un impuesto de un documento
- GET `/v1/documents/12644/document_taxes/12626.json` retorna un único impuesto asociado al documento.

```json title="Response /documents/12644/document_taxes/12626.json "
{
  "href": "https://api.bsale.io/v1/documents/12644/document_taxes/12626.json",
  "id": 12626,
  "totalAmount": 797,
  "exemptAmount": 0,
  "tax": {
    "href": "https://api.bsale.io/v1/taxes/1.json",
    "id": "1"
  }
}
```
### GET vendedores de un documento
- GET `/v1/documents/421/sellers.json` retorna vendedor del documento.

```json title="Response /documents/421/sellers.json "
{
  "href": "https://api.bsale.io/v1/documents/421/sellers.json",
  "count": 1,
  "limit": 25,
  "offset": 0,
  "items": [
    {
      "href": "https://api.bsale.io/v1/users/2.json",
      "id": 2,
      "firstName": "Vendedor Demo",
      "lastName": "Bsale"
    }
  ]
}
```
### GET atributos dinamicos de un documento
- GET `/v1/documents/9682/attributes.json` 

:::info
Retorna los [atributos dinámicos](/atributos-dinamicos) asociados al documento, **no electrónicos**.
:::

```json title="Response /documents/9682/attributes.json "
{
  "href": "https://api.bsale.io/v1/documents/9682/attributes.json",
  "count": 3,
  "limit": 25,
  "offset": 0,
  "items": [
    {
      "href": "https://api.bsale.io/v1/dynamic_attributes/70.json",
      "id": 70,
      "name": "DETALLE DE PAGO",
      "value": ""
    },
    {
      "href": "https://api.bsale.io/v1/dynamic_attributes/90.json",
      "id": 90,
      "name": "Tipo Descuento",
      "value": ""
    },
    {
      "href": "https://api.bsale.io/v1/dynamic_attributes/92.json",
      "id": 92,
      "name": "SubTotal Venta",
      "value": ""
    }
  ]
}
```

## POST un documento
- POST `/v1/documents.json`

Para crear un documento de venta ya sea electrónico (Factura y Boleta Electrónica) o no (Nota de venta, Factura y Boleta manual), se debe enviar un JSON con la siguiente estructura:

### Referencias y fechas

```json
{
  "documentTypeId": 8,
  "officeId": 1,
  "priceListId": 18,
  "emissionDate": 1407715200,
  "expirationDate": 1407715200,
  "declareSii": 1
}
```
- **documentTypeId**, [Id del tipo de documento](/CL/tipos-de-documentos) que indicara si es factura, boleta, nota de venta etc. (Integer).
- **officeId**, [Id de la sucursal](/CL/sucursales) donde se emite el documento, si no es especificada el documento quedara asignado a la sucursal por defecto del sistema (Integer).
- **priceListId**, [Id de la lista de precio](/CL/listas-de-precio) utilizada por el documento, si no es especificada se utilizara la lista de precio por defecto de la sucursal (Integer).
- **emissionDate**, Fecha de emisión del documento (Integer) (no se debe aplicar zona horaria, solo considerar la fecha).
- **expirationDate**, Fecha vencimiento del documento (Integer) (no se debe aplicar zona horaria, solo considerar la fecha).
- **declareSii**, Si se desea declarar el documento al Servicio de impuestos internos se envía 1, en caso contrario un 0 (Boolean).

:::note
Opcionalmente puedes utilizar el parámetro **codeSii** en vez de **documentTypeId** si conoces el código tributario del documento.
:::

#### Liquidación de factura
Si se necesita generar una **liquidación de factura**, se debe enviar el porcentaje de la comisión (`commissionRate`) junto al tipo de documento que se desea liquidar (`commissionCodeSii`).
```json title="POST /documents.json "
{
  "codeSii": 39,
  "officeId": 1,
  "priceListId": 18,
  "emissionDate": 1407715200,
  "expirationDate": 1407715200,
  "declareSii": 1,
  "commissionRate": 20,
  "commissionCodeSii": 33
}
```
#### Factura de compra
Si se necesita generar una **factura de compra**, puedes enviar el porcentaje de impuesto que deseas retener (`percentageTaxWithheld`) en este caso es 35%.
```json title="POST /documents.json "
{
  "codeSii": 46,
  "officeId": 1,
  "priceListId": 18,
  "emissionDate": 1407715200,
  "expirationDate": 1407715200,
  "declareSii": 1,
  "percentageTaxWithheld": 35
}
```
#### Factura de exportación
Si se necesita generar una **factura de exportación**, se deben enviar valores propios de una exportación, ejemplo:
```json title="POST /documents.json "
{
    "documentTypeId": 16,
    "officeId": 1,
    "coinId": 2,
    "hasCustomsData": 1,
    "exchangeRate": 800,
    "exportNetAmount": 32.60,
    "exportTaxAmount": 0,
    "exportTotalAmount": 32.60,
    "exportExemptAmount": 32.60,
    "emissionDate": 1604431469,
    "expirationDate": 1604431469,
    "observation": "Aditional text..",
    "clientId": 65,
    "details": [
        {
            "netUnitValue": 7.5,
            "quantity": 1,
            "comment": "fish fillet- trout (Oncorhynchus mykiss) code:877363655355CL",
            "discount": 0,
            "exportNetAmount": 7.5,
            "exportTaxAmount": 0,
            "exportTotalAmount": 7.5
        },
        {
            "netUnitValue": 25.1,
            "quantity": 1,
            "comment": "Despacho",
            "discount": 0,
            "exportNetAmount": 25.1,
            "exportTaxAmount": 0,
            "exportTotalAmount": 25.1
        }
    ],
    "payments": [
        {
            "paymentTypeId": 8,
            "amount": 32.56,
            "recordDate": 1604431469
        }
    ],
    "customsData": {
        "clauseCode": "CIF",
        "clauseAmount": 175175.78,
        "saleModeId": 3,
        "countryCode": "225",
        "transportPathId": 4,
        "totalPackages": 480
    }
}
```
##### Parámetros
- **observation**, Glosa descriptiva documento
- **exchangeRate**, Tipo de cambio a fecha de emisión
- **clauseCode**, clausula de venta
- **clauseAmount**, Monto clausula
- **saleModeId**, Modalidad venta
- **countryCode**, id del pais destino
- **transportPatchId**, id via transporte
- **totalPackages**, paquetes totales

:::tip
En el ejemplo se usa `clientId` para asociar un cliente. En caso de crearlo desde el documento, como **cliente extranjero**, mira [esta referencia](/CL/clientes#cliente-extranjero).
:::

### Vendedor
Es posible que necesites asociar un vendedor diferente al que hace la petición para crear el documento, para eso debes enviar el atributo `sellerId`, con el `id` vendedor (usuario) en Bsale.
```json 
{
   "sellerId": 5
}
```
### Descuento stock
Puedes manejar si el documento, resta o no stock de tu inventario.
Si vas a entregar inmediatamente tus productos puedes enviar el atributos `dispatch` en **1**, el cual despacha y rebaja el stock de los productos.

:::note
Esto funcionara siempre y cuando el producto tenga stock en la sucursal indicada.
**No funciona** con el envío de glosas (`comment`).
:::

```json 
{
   "dispatch": 1
}
```

### Renovaciones en nota de venta 
Para documentos pre-venta, es posible que desees facturar de forma recurrente, puedes enviar una renovación a la pre-venta para que en cierta fecha esté disponible a facturar. (Ver más)
```json 
{
   "renovationId": 1,
   "renovationDate": 1585160716
}
```
- **renovationId**, Identificador del evento de renovación.
- **renovationDate**, Fecha de la renovación. 

### Cliente del documento 
:::note
En algunos documentos no es necesario agregar el cliente como en el caso de la boleta, sin embargo, para la **factura es obligatorio**.
:::

#### Cliente 
```json 
{
  "client": {
    "code": "98765432-1",
    "city": "Capital del Oeste",
    "company": "Capsule Corp",
    "municipality": "Capital del Oeste",
    "activity": "Development and research",
    "address": "Hoi Poi #750",
    "email": "dr@brief.cl",
    "companyOrPerson": 1
  }
}
```
- **code**, Rut del cliente (String).
- **city**, Ciudad del cliente  (String).
- **company**, Razón social del cliente (String).
- **municipality**, Comuna del cliente (String).
- **activity**, Giro del cliente (String).
- **address**, Dirección del cliente (String). 
- **email**, indica el correo electronico del cliente  (String).
- **companyOrPerson**, indica si el cliente es persona natural o empresa (0)Persona o (1)Empresa (Boolean).
- **firstName**, Nombre de persona (String).
- **lastName**, Apellido de persona (String).

:::tip
Opcionalmente puedes utilizar el parámetro `clientId` si el cliente ya esta creado en Bsale y conoces su identificador.
```json 
{
   "clientId": 24
}
```
:::

:::tip
Si tienes una dirección ya ingresada en Bsale para ese cliente, puedes enviar el id de esa dirección en el parámetro `addressId`.
```json 
{
  "clientId": 24,
  "addressId": 8
}
```
:::

Si necesitas que Bsale **envie el documento al correo del cliente** puedes agregar a la raíz del `JSON` el atributo `sendEmail`, es decir, fuera del nodo `client`, ejemplo:
```json 
{
  "client": {
    "code": "98765432-1",
    "city": "Capital del Oeste",
    "company": "Capsule Corp",
    "municipality": "Capital del Oeste",
    "activity": "Development and research",
    "address": "Hoi Poi #750",
    "email": "dr@brief.cl",
    "companyOrPerson": 1
  },
  "sendEmail": 1
}
```

### Detalles

:::caution
`netUnitValue` **no debe registrarse valores negativos**, si se envía será rechazado por la entidad tributaria (SII).
:::

```json 
{
   "details": [
       {
           "variantId": 157,
           "netUnitValue": 53975,
           "quantity": 1,
           "taxId": "[1]",
           "discount": 50,
       }
   ]
}
```
- **variantId**, Id de la variante que indicara cual variante es la que se esta vendiendo de la variante (Integer).
- **code**, De forma alternativa al Id, se puede utilizar el SKU de la variante  (String).
- **barCode**, De forma alternativa al Id, se puede utilizar el código de barras de la variante (String).
- **netUnitValue**, Valor unitario neto de la variante, este valor es sin impuestos (Float).
- **quantity**, Cantidad de la variante que se esta vendiendo (Integer).
- **taxId**, Arreglo de identificadores de los impuestos a utilizar, estos tienen que ir dentro de "[]"  (String).
- **comment**, Descripción breve de la variante  (String).
- **discount**, Porcentaje del descuento si se desea aplicar uno (Float).

#### Con control de stock
En el caso de **manejar tu stock con Bsale**, el detalle tendría una estructura similar a:

```json 
{
   "details": [
       {
           "code": 157,
           "netUnitValue": 53975,
           "quantity": 1
       }
   ]
}
```
:::tip
Si controlas stock, puedes usar `code` o `variantId` o `barCode` para referenciar a tu producto existente en Bsale.
:::

#### Sin control de stock
En el caso de solo necesitar **declarar documentos en el SII con Bsale**, el detalle tendría una estructura similar a:
```json 
{
   "details": [
       {
           "comment": "El nombre del producto que se muestra en la línea del documento",
           "netUnitValue": 53975,
           "quantity": 1,
           "taxId": "[1]"
       }
   ]
}
```

### Impuestos
:::caution
Es **muy importante** que se envíen los impuestos por cada detalle, de lo contrario el detalle del documento saldrá exento.
:::
#### Referencia por id
Puedes usar el arreglo `taxId` para referenciar los id's de impuestos configurados en Bsale
```json 
{
   "details": [
       {
           "comment": "El nombre del producto que se muestra en la línea del documento",
           "netUnitValue": 53975,
           "quantity": 1,
           "taxId": "[1,2]",
           "discount": 0,
       }
   ]
}
```

#### Referencia por código tributario
También es posible especificar los impuestos, enviando su código tributario y el porcentaje que se le quiere aplicar al producto. Dentro del arreglo `taxes`.
```json 
{
  "details": [
    {
      "netUnitValue": 53975,
      "quantity": 1,
      "taxes": [
        {
          "code": 14,
          "percentage": 19
        },
        {
          "code": 35,
          "percentage": 46.9
        }
      ],
      "comment": "el nombre del producto que voy a vender",
      "discount": 5
    }
  ]
}
```
:::note
El `percentage` enviado, actualizará el porcentaje usado en la configuración de Bsale.
:::

### A partir de existente
Si se desea generar un documento a partir de otro, se debe enviar el identificador del detalle del documento original:
```json 
{
  "details": [
    {
      "detailId": 1050,
      "quantity": 1
    }
  ]
}
```

### Forma de pago (opcional)
Se pueden especificar los pagos asociados al documento, se requiere un nodo similar a:
```json 
{
  "payments": [
    {
      "paymentTypeId": 1,
      "amount": 70000,
      "recordDate": 1407715200
    }
  ]
}
```
- **paymentTypeId**, [Id de la forma de pago](/CL/formas-de-pago) utilizada en el pago del documento (Integer).
- **amount**, monto del pago del documento (Integer).
- **recordDate**, Fecha en la cual se realizo el pago del documento, se envía en formato GMT (Integer).

:::info
En caso de no enviar Bsale detectara la forma de pago por defecto y asignara el monto total del documento a esa forma de pago.
:::
### Referencias electrónicas (opcional)
Se pueden enviar referencias par aun documento como ordenes de compra, guías de despacho etc. Se requiere un nodo similar a:
```json 
{
  "references": [
    {
      "number": "123",
      "referenceDate": 1407715200,
      "reason": "Orden de Compra 123",
      "codeSii": 801
    }
  ]
}
```
- **number**, Folio del documento de referencia (String).
- **referenceDate**, Fecha del documento de referencia (Integer).
- **reason**, Razón del documento (String).
- **codeSii**, Código tributario del documento de referencia (Integer).

### Atributos dinámicos (opcional)
En el caso de necesitar agregar atributos adicionales al documento, se necesita un nodo similar a:
```json 
{
  "dynamicAttributes": [
    {
      "description": "098",
      "dynamicAttributeId": 17
    },
    {
      "description": "nombre",
      "dynamicAttributeId": 18
    }
  ]
}
```
- **description**, Valor del atributo (String).
- **dynamicAttributeId**, Id de la atributo dinámico (Integer).

:::tip
Para usar atributos adicionales deben primero deben crearse y referenciar su id.
:::

### Id externo (opcional)
Se pueden enviar un id de referencia propio de su sistema para evitar duplicidad de emisión en un tipo de documento. La API buscará por el id al hacer POST de un documento, si ya existe el id en los registros del asociados a un tipo de documento, retornará el documento que se generó previamente en vez de generar uno nuevo.
```json 
{
   "salesId": "AAA000012"
}
```
- **salesId**, ID de referencia (String 255).

### Ejemplo JSON

#### Envío
```json title="POST /documents.json "
{
  "documentTypeId": 8,
  "officeId": 1,
  "emissionDate": 1407715200,
  "expirationDate": 1407715200,
  "declareSii": 1,
  "priceListId": 18,
  "client": {
    "code": "12345678-9",
    "city": "Puerto Varas",
    "company": "Imaginex",
    "municipality": "comuna",
    "activity": "giro",
    "address": "direccion"
  },
  "details": [
    {
      "variantId": 1,
      "netUnitValue": 23438,
      "quantity": 1,
      "taxId": "[1,2]",
      "comment": "Producto 1",
      "discount": 0
    }
  ],
  "payments": [
    {
      "paymentTypeId": 1,
      "amount": 27891,
      "recordDate": 1407715200
    }
  ],
  "references": [
    {
      "number": 123,
      "referenceDate": 1407715200,
      "reason": "Orden de Compra 123",
      "codeSii": 801
    }
  ],
  "dynamicAttributes": [
    {
      "description": "098 codigo servicio",
      "dynamicAttributeId": 17
    },
    {
      "description": "Observacion nomal, sin anotaciones",
      "dynamicAttributeId": 18
    }
  ]
}
```

#### Respuesta

```json title="201 Response /documents.json "
{
    "href": "https://api.bsale.io/v1/documents/8135.json",
    "id": 8135,
    "emissionDate": 1407715200,
    "expirationDate": 1407715200,
    "generationDate": 1407715200,
    "rcofDate": 1407715200,
    "number": 732,
    "trackingNumber": "",
    "totalAmount": 27891.0,
    "netAmount": 23438.0,
    "taxAmount": 4453.0,
    "exemptAmount": 0.0,
    "exportTotalAmount": 0.0,
    "exportNetAmount": 0.0,
    "exportTaxAmount": 0.0,
    "exportExemptAmount": 0.0,
    "commissionRate": 0.0,
    "commissionNetAmount": 0.0,
    "commissionTaxAmount": 0.0,
    "commissionTotalAmount": 0.0,
    "percentageTaxWithheld": 0.0,
    "purchaseTaxAmount": 0.0,
    "purchaseTotalAmount": 0.0,
    "address": "La Mezquita 90881",
    "municipality": "MAIPU",
    "city": "Maipú, RM (Metropolitana), Chile",
    "urlTimbre": "https://s3.amazonaws.com/bsale/8888/timbres/2414bddfb871.png",
    "urlPublicView": "https://app2.bsale.cl/view/8888/2414bddfb871?sfd=99",
    "urlPdf": "https://app2.bsale.cl/view/8888/2414bddfb871.pdf?sfd=99",
    "urlPublicViewOriginal": "https://app2.bsale.cl/view/8888/2414bddfb871",
    "urlPdfOriginal": "https://app2.bsale.cl/view/8888/2414bddfb871.pdf",
    "token": "2414bddfb871",
    "state": 0,
    "commercialState": 0,
    "urlXml": "https://api.bsale.cl/v1/8888/files/2414bddfb871.xml",
    "ted": "<TED version=\"1.0\"><DD><RE>12345678-K</RE><TD>61</TD><F>732</F><FE>2023-07-20</FE><RR>12345678</RR><RSR>CRISTOPHER NOLAN</RSR><MNT>27891</MNT><IT1>RELOJ DE MUJER CASIO LA-670WA-7 RELOJ D</IT1><CAF version=\"1.0\"><DA><RE>77068949-K</RE><RS>GRUPO 2 MULTIMEDIAS CINE SPA</RS><TD>33</TD><RNG><D>732</D><H>890</H></RNG><FA>2020-01-01</FA><RSAPK><M>zvZvlCgG3WI+W5gkLlN8V9G7Sfrg6XOKwy7Jv/YQ6JXpwa7KzMsxeeas3D6wgygfjIYjaCACk2OR+rBTFBjjzw==</M><E>Aw==</E></RSAPK><IDK>300</IDK></DA><FRMA algoritmo=\"SHA1withRSA\">f4E8/ElrXhPy7qtXIy2a07BdUx5ReHDrvUyq1slPtRAzHEWy4noI0jjSBcw67LEt1E2SdIKsyq9B0DI+TA==</FRMA></CAF><TSTED>2023-07-20T09:28:17</TSTED></DD><FRMT algoritmo=\"SHA1withRSA\">duKTNpvhXwZl8bLR6J7VGlNMzJp1bpJ/SJoPuBVDfKvxqudnsIIrIm7fulGT0Igt3tFBTt4fUaPzjiycTw==</FRMT></TED>",
    "salesId": null,
    "informedSii": 0,
    "responseMsgSii": "Proceso Finalizado Correctamente!",
    "document_type": {
        "href": "https://api.bsale.io/v1/document_types/5.json",
        "id": "5"
    },
    "client": {
        "href": "https://api.bsale.io/v1/clients/6098.json",
        "id": "6098"
    },
    "office": {
        "href": "https://api.bsale.io/v1/offices/1.json",
        "id": "1"
    },
    "user": {
        "href": "https://api.bsale.io/v1/users/3.json",
        "id": "3"
    },
    "coin": {
        "href": "https://api.bsale.io/v1/coins/1.json",
        "id": "1"
    },
    "references": {
        "href": "https://api.bsale.io/v1/documents/8135/references.json"
    },
    "document_taxes": {
        "href": "https://api.bsale.io/v1/documents/8135/document_taxes.json"
    },
    "details": {
        "href": "https://api.bsale.io/v1/documents/8135/details.json"
    },
    "sellers": {
        "href": "https://api.bsale.io/v1/documents/8135/sellers.json"
    },
    "attributes": {
        "href": "https://api.bsale.io/v1/documents/8135/attributes.json"
    }
}
```

## DELETE un documento

DELETE `/v1/documents/30.json?officeId=2`, elimina un documento no electrónico

- Se debe enviar la sucursal en la cual se eliminara el documento

