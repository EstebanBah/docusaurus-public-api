---
sidebar_position: 10
title: Documentos
description: Crear, editar y listar documentos
slug: /documentos
---

# Documentos
Listar documentos generados en Bsale, del tipo venta, pre-venta, envíos, etc. Se puede obtener detalles, referencias, datos generales, etc. 

:::info
**Crear documentos** del tipo venta (tickets, facturas) o documentos asociados al proceso de venta (notas de venta, cotizaciones, etc). 

:::

Cómo funciona la interfaz de Bsale, mira éstos videos:
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
  "urlPublicView": "http://app2.bsale.io/view/2/a2d9b4da5128?sfd=99",
  "urlPdf": "http://app2.bsale.io/view/2/a2d9b4da5128.pdf?sfd=99",
  "urlPublicViewOriginal": "http://app2.bsale.io/view/2/a2d9b4da5128",
  "urlPdfOriginal": "http://app2.bsale.io/view/2/a2d9b4da5128.pdf",
  "token": "a2d9b4da5128",
  "state": 0,
  "userId": 2,
  "urlXml": null,
  "address": "INSURGENTES NORTE  123",
  "district": "ÁLVARO OBREGÓN",
  "city": "SAN ÁNGEL",
  "informed": 1,
  "responseMsg": null,
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
|  **address**   | dirección del cliente        | String        |
|  **district**   | Colonia del cliente        | String        |
|  **city**   | ciudad del cliente        | String        |
|  **informed**   | indica si el documento fue informado al SAT, **0 es correcto, 1 es enviado, 2 es rechazado**       | Integer        |
| **responseMsg**   | respuesta de la declaración del documento, en caso de ser electrónico        | String        |
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
- **informed**, filtra documentos si fue declarado, 0 es correcto, 1 es enviado, 2 es rechazado (Integer).
- **totalamount**, filtra documentos por el monto total.
- **referencecode**, filtra documentos por el código tributario de una referencia (ej. el código de una orden de compra).
- **referencenumber**, filtra documentos por el folio de una referencia (ej. el folio de una orden de compra).
- **state**, boolean (0 o 1) indica si los documentos están activos(0) inactivos (1).
  
#### Ejemplos
- `GET /v1/documents.json?limit=50&offset=0`
- `GET /v1/documents.json?fields=[number,totalAmount]`
- `GET /v1/documents.json?number=53`
- `GET /v1/documents.json?documenttypeid=1`
- `GET /v1/documents.json?expand=[document_types,client,office,details,payments]`
- `GET /v1/documents.json?emissiondate=1309478400&-expirationdate=1309478400&state=0`
- `GET /v1/documents.json?emissiondaterange=[1414800000,1417391990]`
- `GET /v1/documents.json?referencenumber=123`
- `GET /v1/documents.json?referencecode=801&referencenumber=123`
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
  "urlPublicView": "http://app2.bsale.io/view/2/f806d6a6ae73?sfd=99",
  "urlPdf": "http://app2.bsale.io/view/2/f806d6a6ae73.pdf?sfd=99",
  "urlPublicViewOriginal": "http://app2.bsale.io/view/2/f806d6a6ae73",
  "urlPdfOriginal": "http://app2.bsale.io/view/2/f806d6a6ae73.pdf",
  "token": "f806d6a6ae73",
  "state": 0,
  "urlXml": null,
  "address": "San Francisco 402, jj perez 7248",
  "district": "ÁLVARO OBREGÓN",
  "city": "SAN ÁNGEL",
  "informed": 2,
  "responseMsg": null,
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

#### Ejemplos
- `GET /v1/documents/costs.json?documentid=145071`

```json title="Response /documents/145071.json "
{
  "href": "https://api.bsale.io/v1/documents/145071.json",
  "id": 145071,
  "name": "TICKET",
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
Retorna los [atributos dinámicos](/MX/atributos-dinamicos) asociados al documento.
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

Para crear un documento de venta ya sea electrónico (ej Factura) o no (ej ticket), se debe enviar un JSON con la siguiente estructura:

### Referencias y fechas

```json
{
  "documentTypeId": 8,
  "officeId": 1,
  "priceListId": 18,
  "emissionDate": 1407715200,
  "expirationDate": 1407715200,
  "declare": 1,
  "cfdiUse": 612
}
```
- **documentTypeId**, [Id del tipo de documento](/MX/tipos-de-documentos) que indicara si es factura, boleta, nota de venta etc. (Integer).
- **officeId**, [Id de la sucursal](/MX/sucursales) donde se emite el documento, si no es especificada el documento quedara asignado a la sucursal por defecto del sistema (Integer).
- **priceListId**, [Id de la lista de precio](/MX/listas-de-precio) utilizada por el documento, si no es especificada se utilizara la lista de precio por defecto de la sucursal (Integer).
- **emissionDate**, Fecha de emisión del documento (Integer) (no se debe aplicar zona horaria, solo considerar la fecha).
- **expirationDate**, Fecha vencimiento del documento (Integer) (no se debe aplicar zona horaria, solo considerar la fecha).
- **declare**, Si se desea declarar el documento ante SAT se envía 1, en caso contrario un 0 (Boolean).
- **cdfiUse**, Código uso cfdi del documento a generar (String).


### Vendedor
Es posible que necesites asociar un vendedor diferente al que hace la petición para crear el documento, para eso debes enviar el atributo `sellerId`, con el `id` vendedor [(Usuario)](/MX/usuarios) en Bsale.
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
    "code": "XA987654321",
    "city": "Capital del Oeste",
    "company": "Capsule Corp",
    "district": "Capital del Oeste",
    "activity": "Development and research",
    "address": "Hoi Poi #750",
    "email": "dr@brief.mx",
    "postalCode": "10740",
    "regime": "612"
  }
}
```

- **code**, RFC del cliente (String).
- **city**, Ciudad del cliente  (String).
- **company**, Nombre, denominación o razón social (String)
- **district**, Colonia del cliente (String).
- **activity**, Giro del cliente (String).
- **address**, Dirección del cliente (String). 
- **email**, indica el correo electronico del cliente  (String).
- **companyOrPerson**, indica si el cliente es persona natural o empresa (0)Persona o (1)Empresa (Boolean).
- **firstName**, Nombre de persona (String).
- **lastName**, Apellido de persona (String).
- **postalCode**, Código postal del cliente (String).
- **regime**, Código régimen del cliente (String).

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
    "code": "987654321",
    "city": "Capital del Oeste",
    "company": "Capsule Corp",
    "district": "Capital del Oeste",
    "activity": "Development and research",
    "address": "Hoi Poi #750",
    "email": "dr@brief.mx",
    "companyOrPerson": 1
  },
  "sendEmail": 1
}
```

### Detalles

:::caution
`netUnitValue` **no debe registrarse valores negativos**, si se envía será rechazado por la entidad tributaria (SAT) .
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
En el caso de solo necesitar **declarar documentos en el SAT con Bsale**, el detalle tendría una estructura similar a:
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
- **paymentTypeId**, [Id de la forma de pago](/MX/formas-de-pago) utilizada en el pago del documento (Integer).
- **amount**, monto del pago del documento (Integer).
- **recordDate**, Fecha en la cual se realizo el pago del documento, se envía en formato GMT (Integer).

:::info
En caso de no enviar Bsale detectara la forma de pago por defecto y asignara el monto total del documento a esa forma de pago.
:::

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
    "documentTypeId": 5,
    "officeId": 1,
    "emissionDate": 1690848000,
    "declare": 1,
    "priceListId": 1,
    "client": {
        "code": "CACX7600101P8",
        "company": "XOCHILT CASAS CHAVEZ",
        "activity": "Giro Informática",
        "district": "Colonia",
        "city": "Ciudad de Méxic",
        "address": "Varsovia No. 1000",
        "email": "api@bsale.com.mx",
        "postalCode": "10740",
        "regime": "612"
    },
    "cfdiUse": "CP01",
    "details": [
        {
            "variantId": 15,
            "netUnitValue": 6974.13,
            "quantity": 1,
            "taxId": "[1]",
            "discount": 0
        }
    ],
    "payments": [
        {
            "recordDate": 1690848000,
            "amount": 8090,
            "paymentTypeId": 1
        }
    ]
}
```

#### Respuesta

```json title="201 Response /documents.json "
{
    "href": "https://api.bsale.io/v1/documents/9241.json",
    "id": 9241,
    "emissionDate": 1690848000,
    "expirationDate": 1690848000,
    "generationDate": 1690936236,
    "number": 3409,
    "serialNumber": "0000-3409",
    "trackingNumber": "",
    "totalAmount": 8090.0,
    "netAmount": 6974.137931,
    "taxAmount": 1115.862069,
    "exemptAmount": 0.0,
    "notExemptAmount": 6974.137931,
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
    "address": "Varsovia No. 1000",
    "district": "Juarez",
    "city": "Ciudad de México",
    "stamp": "https://s3.amazonaws.com/bsale/8888/timbres/00816afe6b0.png",
    "urlPublicView": "https://app2.bsale.com.mx/view/8888/00816afe6b0?sfd=99",
    "urlPdf": "https://app2.bsale.com.mx/view/8888/00816afe6b0.pdf?sfd=99",
    "urlPublicViewOriginal": "https://app2.bsale.com.mx/view/8888/00816afe6b0",
    "urlPdfOriginal": "https://app2.bsale.com.mx/view/8888/00816afe6b0.pdf",
    "token": "00816afe6b0",
    "state": 0,
    "commercialState": 0,
    "urlXml": "https://bsale.s3.amazonaws.com/8888/cfdi/64c9a3adb163e8b2316bded3.xml",
    "salesId": null,
    "informed": 0,
    "responseMsg": null,
    "document_type": {
        "href": "https://api.bsale.io/v1/document_types/5.json",
        "id": "5"
    },
    "client": {
        "href": "https://api.bsale.io/v1/clients/30.json",
        "id": "30"
    },
    "office": {
        "href": "https://api.bsale.io/v1/offices/1.json",
        "id": "1"
    },
    "user": {
        "href": "https://api.bsale.io/v1/users/2.json",
        "id": "2"
    },
    "coin": {
        "href": "https://api.bsale.io/v1/coins/1.json",
        "id": "1"
    },
    "references": {
        "href": "https://api.bsale.io/v1/documents/9241/references.json"
    },
    "document_taxes": {
        "href": "https://api.bsale.io/v1/documents/9241/document_taxes.json"
    },
    "details": {
        "href": "https://api.bsale.io/v1/documents/9241/details.json"
    },
    "sellers": {
        "href": "https://api.bsale.io/v1/documents/9241/sellers.json"
    },
    "attributes": {
        "href": "https://api.bsale.io/v1/documents/9241/attributes.json"
    }
}
```

## DELETE un documento

DELETE `/v1/documents/:id.json?officeId=2`, elimina un documento no electrónico

- **id**, id del documento en Bsale

:::tip

Se debe enviar **la sucursal** `officeId` en la cual se eliminará el documento requerido

:::