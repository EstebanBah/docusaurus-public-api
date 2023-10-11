---
sidebar_position: 11
title: Despachos
description: Crear, editar y listar despachos
slug: /documentos/despachos
---


# Despacho

Generación de documentos tipo despacho. _(ej Guías de despacho electrónicas)_, listar despachos generados, detalles incluidos en el despacho. .

Cómo funciona la interfaz de Bsale, mira éstos videos:

- Creación de una guía de despacho [Ver](https://youtu.be/XBAd_W8m_FI) 
- Creación de una guía de despacho a partir de otro documento [Ver](https://youtu.be/G6LMsLwv7v0)

:::info
Un documento del tipo despacho, siempre genera una salida de stock (cuando se controla stock)
:::

## Estructura JSON

Al realizar una petición `HTTP`, el servicio retornara un JSON con la siguiente estructura:

```js title="Response /v1/shippings/22.json"
{
  "href": "https://api.bsale.io/v1/shippings/22.json",
  "id": 22,
  "shippingDate": 1370318400,
  "address": null,
  "municipality": "",
  "city": "",
  "recipient": null,
  "state": 0,
  "office": {
    "href": "https://api.bsale.io/v1/offices/1.json",
    "id": "1"
  },
  "shipping_type": {
    "href": "https://api.bsale.io/v1/shipping_types/1.json",
    "id": "1"
  },
  "guide": {
    "href": "https://api.bsale.io/v1/documents/23.json",
    "id": "23"
  },
  "details": {
    "href": "https://api.bsale.io/v1/shippings/22/details.json"
  }
}
```

### Atributos
| Atributo      | Descripción | Tipo dato |
| ----------- | ----------- | ----------- |
| **href**      | url del documento despacho     | String       |
| **id**   | identificador único del despacho   | Integer |
| **shippingDate**   | fecha del despacho   | Integer |
| **address**   | dirección del despacho   | String |
| **municipality**   | comuna del despacho  | String |
| **city**   | ciudad del despacho   | String |
| **recipient**   | destinatario del despacho    | String |
| **state**   | estado del descuento indica si el descuento esta activo(0) o inactivo (1)   | Boolean |
| **received**   | estado de la recepción traslado interno (0) No recibida (1) Recibida   | Boolean |
| **office**   | nodo que indica la relación con la sucursal en la que fue emitida el despacho.   |  |
| **shipping_type**   | nodo que indica la relación con el tipo de despacho.  |  |
| **guide**   | nodo que indica el documento guía de despacho.  |  |
| **details**   | nodo que indica los detalles del despacho.  |  |

## GET lista de despachos
- GET `/v1/shippings.json` retornará todos los despachos.

#### Parámetros
- **limit**, limita la cantidad de items de una respuesta JSON, por defecto el limit es 25, el máximo permitido es 50.
- **offset**, permite paginar los items de una respuesta JSON, por defecto el offset es 0.
- **fields**, solo devolver atributos específicos de un recurso
- **expand**, permite expandir instancias y colecciones para traer relaciones en una sola petición.
- **shippingdate**, Permite filtrar por fecha de devolución.
- **officeid**, Permite filtrar por sucursal.
- **shippingtypeid**, filtra por documento de referencia.
- **state**, boolean (0 o 1) indica si los documentos están activos(0) inactivos (1).
  
#### Ejemplos
- `GET /v1/shippings.json?limit=10&offset=0`
- `GET /v1/shippings.json?fields=[shippingdate,recipient]`
- `GET /v1/shippings.json?expand=[guide,shipping_type,details]`

```json title="Response /shippings.json "
{
  "href": "https://api.bsale.io/v1/shippings.json",
  "count": 13430,
  "limit": 3,
  "offset": 0,
  "items": [
    {
      "href": "https://api.bsale.io/v1/shippings/22.json",
      "id": 22,
      "shippingDate": 1370318400,
      "address": null,
      "municipality": "",
      "city": "",
      "recipient": null,
      "state": 0,
      "office": {
        "href": "https://api.bsale.io/v1/offices/1.json",
        "id": "1"
      },
      "shipping_type": {
        "href": "https://api.bsale.io/v1/shipping_types/1.json",
        "id": "1"
      },
      "guide": {
        "href": "https://api.bsale.io/v1/documents/23.json",
        "id": "23"
      },
      "details": {
        "href": "https://api.bsale.io/v1/shippings/22/details.json"
      }
    },
    {
      "href": "https://api.bsale.io/v1/shippings/23.json",
      "id": 23,
      "shippingDate": 1370318400,
      "address": null,
      "municipality": "",
      "city": "",
      "recipient": null,
      "state": 0,
      "office": {
        "href": "https://api.bsale.io/v1/offices/1.json",
        "id": "1"
      },
      "shipping_type": {
        "href": "https://api.bsale.io/v1/shipping_types/1.json",
        "id": "1"
      },
      "guide": {
        "href": "https://api.bsale.io/v1/documents/24.json",
        "id": "24"
      },
      "details": {
        "href": "https://api.bsale.io/v1/shippings/23/details.json"
      }
    },
    {
      "href": "https://api.bsale.io/v1/shippings/24.json",
      "id": 24,
      "shippingDate": 1370318400,
      "address": null,
      "municipality": "",
      "city": "",
      "recipient": null,
      "state": 0,
      "office": {
        "href": "https://api.bsale.io/v1/offices/1.json",
        "id": "1"
      },
      "shipping_type": {
        "href": "https://api.bsale.io/v1/shipping_types/1.json",
        "id": "1"
      },
      "guide": {
        "href": "https://api.bsale.io/v1/documents/25.json",
        "id": "25"
      },
      "details": {
        "href": "https://api.bsale.io/v1/shippings/24/details.json"
      }
    }
  ]
}
```
## GET único despacho
- GET `/v1/shippings/22.json ` retornará un despacho específico.

#### Parámetros
- **expand**, permite expandir instancias y colecciones para traer relaciones en una sola petición.

#### Ejemplos
- `GET /v1/shippings/1.json?expand=[details]`

```json title="Response /shippings/22.json "
{
  "href": "https://api.bsale.io/v1/shippings/22.json",
  "id": 22,
  "shippingDate": 1370318400,
  "address": null,
  "municipality": "",
  "city": "",
  "recipient": null,
  "state": 0,
  "office": {
    "href": "https://api.bsale.io/v1/offices/1.json",
    "id": "1"
  },
  "shipping_type": {
    "href": "https://api.bsale.io/v1/shipping_types/1.json",
    "id": "1"
  },
  "guide": {
    "href": "https://api.bsale.io/v1/documents/23.json",
    "id": "23"
  },
  "details": {
    "href": "https://api.bsale.io/v1/shippings/22/details.json"
  }
}
```

## GET detalles de un despacho
- GET `GET /v1/shippings/22/details.json` retorna los detalles contenidos en un despacho.

```json title="Response /shippings/22/details.json "
{
  "href": "https://api.bsale.io/v1/shippings/22/details.json",
  "count": 1,
  "limit": 25,
  "offset": 0,
  "items": [
    {
      "href": "https://api.bsale.io/v1/shippings/22/details/31.json",
      "id": 31,
      "quantity": 1,
      "variantStock": 28,
      "variantCost": 0,
      "variant": {
        "href": "https://api.bsale.io/v1/variants/8.json",
        "id": "8"
      }
    }
  ]
}
```

## GET un detalle de un despacho
- GET `/v1/shippings/22/details/31.json` Retornará un detalle específico del despacho.

```json title="Response /shippings/22/details/31.json "
{
  "href": "https://api.bsale.io/v1/shippings/22/details/31.json",
  "id": 31,
  "quantity": 1,
  "variantStock": 28,
  "variantCost": 0,
  "variant": {
    "href": "https://api.bsale.io/v1/variants/8.json",
    "id": "8"
  }
}
```

