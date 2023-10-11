---
sidebar_position: 12
title: Devoluciones
description: Crear y listar devoluciones
slug: /devoluciones
---
# Devoluciones
Endpoint para la generación de documentos del tipo devolución/anulaciones de ventas. (_Nota de crédito electrónica, nota de débito electrónica_). 

:::info
Siempre se debe referenciar el `id` del documento venta que se desea devolver junto a sus detalles. 
:::


Cómo funciona la interfaz de Bsale, mira éstos videos:

- Creación de nota de crédito [Ver](https://youtu.be/Oo6KCvIhyeQ) 

## Estructura JSON

Al realizar una petición `HTTP`, el servicio retornara un JSON con la siguiente estructura:

```js title="Response /returns/1.json"
{
  "href": "https://api.bsale.io/v1/returns/1.json",
  "id": 1,
  "code": "137615600351",
  "returnDate": 1376107200,
  "motive": "Cambio a Factura",
  "type": 1,
  "priceAdjustment": 0,
  "editTexts": 0,
  "amount": 27541,
  "office": {
    "href": "https://api.bsale.io/v1/offices/1.json",
    "id": "1"
  },
  "reference_document": {
    "href": "https://api.bsale.io/v1/documents/472.json",
    "id": "472"
  },
  "credit_note": {
    "href": "https://api.bsale.io/v1/documents/477.json",
    "id": "477"
  },
  "details": {
    "href": "https://api.bsale.io/v1/returns/1/details.json"
  }
}
```

### Atributos
| Atributo      | Descripción | Tipo dato |
| ----------- | ----------- | ----------- |
| **href**      | url de la devolución       | String       |
| **id**      | identificador único de la devolución | Integer       |
| **code**      | código interno único de la la devolución | String       |
| **returnDate**      | fecha de la devolución | Integer |
| **motive**      | razón de por que fue efectuada la devolución| String       |
| **type**      | identifica si la forma de pago de la devolución  | Integer |
| **priceAdjustment**      | indica si la nota de crédito relacionada fue por ajuste de precio No(0) o Si(1) | Boolean |
| **editTexts**      | indica si la nota de crédito relacionada fue por corrección de texto (forma) No(0) o Si(1) | Boolean |
| **amount**      | monto total de la devolución | Float       |
| **office**      | nodo que indica la relación con la sucursal en la que fue emitida la devolución. | |
| **reference_document**      | nodo que indica la relación con el documento de referencia que se devuelve. |  |
| **credit_note**      | nodo que indica el documento nota de crédito. |  |
| **details**      | nodo que indica los detalles de la devolución. |  |

## GET lista de devoluciones
- GET `/v1/returns.json` retorna todas las devoluciones.

#### Parámetros
- **limit**, limita la cantidad de items de una respuesta JSON, por defecto el limit es 25, el máximo permitido es 50.
- **offset**, permite paginar los items de una respuesta JSON, por defecto el offset es 0.
- **fields**, solo devolver atributos específicos de un recurso
- **expand**, permite expandir instancias y colecciones para traer relaciones en una sola petición.
- **returndate**, Permite filtrar por fecha de devolución.
- **code**, filtra por código de la devolución.
- **type**, filtra por tipo de devolución.
- **officeid**, Permite filtrar por sucursal.
- **referencedocumentid**, filtra por documento de referencia.
- **creditnoteid**, filtra por el id de la nota de crédito.
  
#### Ejemplos
- `GET /v1/returns.json?limit=10&offset=0`
- `GET /v1/returns.json?fields=[returndate,motive]`
- `GET /v1/returns.json?expand=[reference_document,credit_note,details]`

```json title="Response /returns.json "
{
  "href": "https://api.bsale.io/v1/returns.json",
  "count": 49,
  "limit": 2,
  "offset": 0,
  "items": [
    {
      "href": "https://api.bsale.io/v1/returns/1.json",
      "id": 1,
      "code": "137615600351",
      "returnDate": 1376107200,
      "motive": "Cambio a Factura",
      "type": 1,
      "priceAdjustment": 0,
      "editTexts": 0,
      "amount": 27541,
      "office": {
        "href": "https://api.bsale.io/v1/offices/1.json",
        "id": "1"
      },
      "reference_document": {
        "href": "https://api.bsale.io/v1/documents/472.json",
        "id": "472"
      },
      "credit_note": {
        "href": "https://api.bsale.io/v1/documents/477.json",
        "id": "477"
      },
      "details": {
        "href": "https://api.bsale.io/v1/returns/1/details.json"
      }
    },
    {
      "href": "https://api.bsale.io/v1/returns/2.json",
      "id": 2,
      "code": "137668322351",
      "returnDate": 1376625600,
      "motive": "error de ventas",
      "type": 0,
      "priceAdjustment": 0,
      "editTexts": 0,
      "amount": 21488,
      "office": {
        "href": "https://api.bsale.io/v1/offices/1.json",
        "id": "1"
      },
      "reference_document": {
        "href": "https://api.bsale.io/v1/documents/527.json",
        "id": "527"
      },
      "credit_note": {
        "href": "https://api.bsale.io/v1/documents/529.json",
        "id": "529"
      },
      "details": {
        "href": "https://api.bsale.io/v1/returns/2/details.json"
      }
    }
  ]
} 
```

## GET una devolución
- GET `/v1/returns/1.json` retorna una única devolución.

#### Parámetros
- **expand**, permite expandir instancias y colecciones.

#### Ejemplos
- `GET /v1/returns/1.json?expand=[credit_note]`

```json title="Response /returns.json "
{
  "href": "https://api.bsale.io/v1/returns/1.json",
  "id": 1,
  "code": "137615600351",
  "returnDate": 1376107200,
  "motive": "Cambio a Factura",
  "type": 1,
  "priceAdjustment": 0,
  "editTexts": 0,
  "amount": 27541,
  "office": {
    "href": "https://api.bsale.io/v1/offices/1.json",
    "id": "1"
  },
  "reference_document": {
    "href": "https://api.bsale.io/v1/documents/472.json",
    "id": "472"
  },
  "credit_note": {
    "href": "https://api.bsale.io/v1/documents/477.json",
    "id": "477"
  },
  "details": {
    "href": "https://api.bsale.io/v1/returns/1/details.json"
  }
}
```
## GET detalles de una devolución
- GET `/v1/returns/1/details.json` 

```json title="Response /returns/1/details.json "
{
  "href": "https://api.bsale.io/v1/returns/1/details.json",
  "count": 2,
  "limit": 25,
  "offset": 0,
  "items": [
    {
      "href": "https://api.bsale.io/v1/returns/1/details/1.json",
      "id": 1,
      "quantity": 2.8,
      "quantityDevStock": 2.8,
      "variantStock": 59.37,
      "variantCost": 3200
    },
    {
      "href": "https://api.bsale.io/v1/returns/1/details/2.json",
      "id": 2,
      "quantity": 1.64,
      "quantityDevStock": 1.64,
      "variantStock": 45.44,
      "variantCost": 3200
    }
  ]
}
```

## GET un detalle de una devolución
- GET `/v1/returns/1/details/1.json` 

```json title="Response /returns/1/details/1.json"
{
   "href": "https://api.bsale.io/v1/returns/1/details/1.json",
   "id": 1,
   "quantity": 2.8,
   "quantityDevStock": 2.8,
   "variantStock": 59.37,
   "variantCost": 3200.0
}
```

## POST una devolución
- POST `/v1/returns.json`
Para crear una devolución y su respectiva nota da crédito se debe enviar un JSON con la siguiente estructura:

### Referencias y fechas

```json
{
  "documentTypeId": 9,
  "officeId": 1,
  "referenceDocumentId": 11528,
  "expirationDate": 1407384000,
  "emissionDate": 1407384000,
  "motive": "prueba api",
  "declareSii": 1,
  "priceAdjustment": 0,
  "editTexts": 0,
  "type": 1
}
```
- **documentTypeId**, Id del tipo de documento que indicara si es factura, boleta, nota de venta etc. (Integer).
- **officeId**, Id de la sucursal donde se emite el documento, si no es especificada el documento quedara asignado a la sucursal por defecto del sistema (Integer).
- **referenceDocumentId**, Id del documento original al cual se le va hacer la devolución (Integer).
- **emissionDate**, Fecha de emisión de la devolución, se envía en formato GMT (Integer).
- **expirationDate**, Fecha vencimiento de la devolución, se envía en formato GMT (Integer).
- **motive**, Indica el motivo de la devolución (String).
- **declareSii**, Si se desea declarar el documento al Servicio de impuestos internos se envía 1, en caso contrario un 0 (Boolean).
- **priceAdjustment**, Si la devolución corresponde a un ajuste de precio de los productos se envía 1, en caso contrario 0 (Boolean).
- **editTexts**, Si la devolución corresponde a una corrección de texto (por forma) se envía 1, en caso contrario 0 (Boolean).
- **type**, Indica como se va a devolver el dinero del documento, 0 para devolución dinero, 1 para forma pago nueva venta, 2 para abono linea de crédito, 3 para otra devolución (Integer).

### Cliente de una devolución
Para las notas de crédito es obligatorio especificar el cliente.

:::note
Para le generación de devoluciones, el cliente es obligatorio. Si el documento de referencia tiene asociado datos de cliente, se deben indicar los mismos datos en la devolución.
:::

```json 
{
  "client": {
    "code": "1-9",
    "city": "Puerto Varas",
    "municipality": "comuna",
    "activity": "giro",
    "address": "direccion"
  }
}
```
- **code**, Rut del cliente (String).
- **city**, Ciudad del cliente  (String).
- **company**, Razón social del cliente (String).
- **municipality**, Comuna del cliente (String).
- **activity**, Giro del cliente (String).
- **address**, Dirección del cliente (String). 
- **firstName**, Nombre de persona (String).
- **lastName**, Apellido de persona (String).


### Detalles de la devolución
#### Tres clases de la devolución

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="quant" label="Devolver cantidades" default>
    Si se desea crear una devolución solo para retornar productos, se debe enviar el editTexts en 0 y el priceAdjustment en 0, ademas de enviar en el nodo details solo los detalles que van a cambiar de cantidad del documento original (quantity = nueva cantidad, unitValue = 0).
  </TabItem>
  <TabItem value="price" label="Ajustar precios">
    Si se desea crear una devolución para ajustar el precio de los productos, se debe enviar el editTexts en 0 y el priceAdjustment en 1, ademas de enviar en el nodo details solo los detalles que van a cambiar de precio del documento original (quantity = 0, unitValue = nuevo precio)
  </TabItem>
  <TabItem value="texts" label="Editar textos">
    Si se desea crear una devolución para corregir información, se debe enviar el editTexts en 1 y el priceAdjustment en 0, ademas de enviar en el nodo details todos los detalles originales del documento (quantity = 0, unitValue = 0).
  </TabItem>
</Tabs>


:::tip
Además de indicar el `referenceDocumentId` se debe referenciar el id de detalle de la venta: `documentDetailId`
:::

```json title=" Ejemplo devolución cantidades"
{
  "details": [
    {
      "documentDetailId": 21493,
      "quantity": 1,
      "unitValue": 0
    }
  ]
}
```
:::tip
Opcionalmente si generas una nota de crédito que ajusta el precio del documento original, puedes cambiar la descripcion del del item con el atributo comment
:::

```json title="Ejemplo ajuste de precios"
{
  "details": [
    {
      "documentDetailId": 21493,
      "comment": "Nueva descripción del item",
      "quantity": 1,
      "unitValue": 0
    }
  ]
}
```

- **documentDetailId**, Id del [detalle del documento] original que se va a devolver (Integer).
- **quantity**, Cantidad a devolver (Float).
- **unitValue**, Valor unitario neto del detalle (String). [detalle del documento]

### Forma de pago en nueva venta
:::tip
Para generar este tipo de devolución es obligatorio especificar el cliente.
:::


```json 
    "payments": [
        {
            "recordDate": 1639667641,
            "amount": 11900,
            "paymentTypeId": 3,
            "documentTypeId": 9,
            "number": 125
        }
    ]
```
- **documentTypeId**, Id del tipo de documento de la nota de crédito (Integer).
- **number**, folio de la nota de crédito devolución (Integer).

## Ejemplo JSON
### Envío
```json title="POST /returns.json "
{
  "documentTypeId": 9,
  "officeId": 1,
  "expirationDate": 1407384000,
  "emissionDate": 1407384000,
  "referenceDocumentId": 11528,
  "motive": "prueba api",
  "declareSii": 1,
  "priceAdjustment": 0,
  "editTexts": 0,
  "type": 1,
  "client": {
    "code": "1-9",
    "city": "Puerto Varas",
    "municipality": "comuna",
    "activity": "giro",
    "address": "direccion"
  },
  "details": [
    {
      "documentDetailId": 21493,
      "quantity": 1,
      "unitValue": 0
    }
  ]
}
```

### Respuesta
```json title="201 Response /returns.json "
{
  "credit_note": {
    "href": "https://api.bsale.io/v1/documents/11539.json",
    "id": "11539"
  },
  "reference_document": {
    "href": "https://api.bsale.io/v1/documents/11528.json",
    "id": "11528"
  },
  "amount": 6490,
  "code": "140745397411",
  "type": 1,
  "editTexts": 0,
  "href": "https://api.bsale.io/v1/returns/71.json",
  "returnDate": 1407384000,
  "details": {
    "href": "https://api.bsale.io/v1/returns/71/details.json"
  },
  "office": {
    "href": "https://api.bsale.io/v1/offices/1.json",
    "id": "1"
  },
  "motive": "prueba api",
  "priceAdjustment": 0,
  "id": 71
}
```

## POST anular devolución
- POST `/v1/returns/146/annulments.json` 

:::info
En la url de la petición se debe especificar el id de la devolución, en este caso es 146. Para anular una devolución y generar la **nota de débito** correspondiente se debe enviar un JSON con la siguiente estructura:
:::
## Ejemplo JSON
### Envío
```json title="Response /returns/:id/annulments.json"
{
  "documentTypeId": 37,
  "referenceDocumentId": 3733,
  "emissionDate": 1414501200,
  "expirationDate": 1417179600,
  "declareSii": 1
}
```
- **documentTypeId**, Id del tipo de documento, en este caso, uno que sea nota de débito (Integer).
- **referenceDocumentId**, Id de la nota de crédito original al cual se le va hacer la anulación (Integer).
- **emissionDate**, Fecha de emisión de la anulación, se envía en formato GMT (Integer).
- **expirationDate**, Fecha vencimiento de la anulación, se envía en formato GMT (Integer).
- **declareSii**, Si se desea declarar la nota de débito al servicio de impuestos internos se envía 1, en caso contrario un 0 (Boolean).

### Respuesta
```json title="201 Response /returns/:id/annulments.json"
{
  "href": "https://api.bsale.io/v1/returns/146/annulments/16.json",
  "id": 16,
  "annulmentDate": 1414551600,
  "amount": 65465465,
  "office": {
    "href": "https://api.bsale.io/v1/offices/2.json",
    "id": "2"
  },
  "debit_note": {
    "href": "https://api.bsale.io/v1/documents/3734.json",
    "id": "3734"
  }
}
```