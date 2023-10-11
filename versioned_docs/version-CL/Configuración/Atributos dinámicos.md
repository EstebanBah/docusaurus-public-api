---
sidebar_position: 50
title: Atributos dinámicos
description: Listar atributos dinámicos
slug: /atributos-dinamicos
---


# Atributos dinámicos
Los atributos dinámicos son usados en documentos, formas de pago y clientes. Como atributos opcionales en la mayoría de casos.

## Estructura JSON

Al realizar una petición `HTTP`, el servicio retornara un JSON con la siguiente estructura:

```json title="Response /dynamic_attributes/3.json"
{
  "href": "https://api.bsale.io/v1/dynamic_attributes/3.json",
  "id": 3,
  "name": "Número",
  "tip": "",
  "type": 4,
  "isMandatory": 0,
  "state": 0,
  "payment_type": {
    "href": "https://api.bsale.io/v1/payment_types/5.json",
    "id": "5"
  }
}
```

### Atributos
| Atributo      | Descripción | Tipo dato |
| ----------- | ----------- | ----------- |
| **href**      | url del pago     | String       |
| **id**   | identificador único del pago  | Integer |
| **name**   | nombre del atributo dinámico | String |
| **tip**   | tooltip del atributo dinámico | String |
| **isMandatory**   | indica si un atributo dinámico es obligatorio No(0) o Si(1) | Boolean |
| **state**   | estado del atributo dinámico indica si esta activo(0) o inactivo (1) | Boolean |
| **payment_type**   | nodo que indica la relación con las formas de pago. | |

## GET colección de atributos dinámicos
- GET `/v1/dynamic_attributes.json` retornará todos los atributos dinámicos.

#### Parámetros
- **limit**, limita la cantidad de items de una respuesta JSON, por defecto el limit es 25, el máximo permitido es 50.
- **offset**, permite paginar los items de una respuesta JSON, por defecto el offset es 0.
- **fields**, solo devolver atributos específicos de un recurso
- **expand**, permite expandir instancias y colecciones para traer relaciones en una sola petición.
- **name**, Permite filtrar por nombre del atributo.
- **type**, filtra tipo de atributo.
- **state**, boolean (0 o 1) indica si las listas de precio están activas(0) inactivas (1).
- **paymenttypeid**, filtra por la forma de pago.
- **documenttypeid**, filtra por el tipo de documento.
  
#### Ejemplos
- `GET /v1/dynamic_attributes.json?limit=10&offset=0`
- `GET /v1/dynamic_attributes.json?fields=[name,type,state]`
- `GET /v1/dynamic_attributes.json?paymenttypeid=1`
- `GET /v1/dynamic_attributes.json?expand=[coin,details]`
- `GET /v1/dynamic_attributes.json?documenttypeid=8`


```json title="Response /dynamic_attributes.json "
{
  "href": "https://api.bsale.io/v1/dynamic_attributes.json",
  "count": 15,
  "limit": 4,
  "offset": 0,
  "items": [
    {
      "href": "https://api.bsale.io/v1/dynamic_attributes/12.json",
      "id": 12,
      "name": "Fono Contacto",
      "tip": "Fono Contacto",
      "type": 4,
      "isMandatory": 0,
      "state": 0,
      "document_type": {
        "href": "https://api.bsale.io/v1/document_types/4.json",
        "id": "4"
      }
    },
    {
      "href": "https://api.bsale.io/v1/dynamic_attributes/16.json",
      "id": 16,
      "name": "Fono Contacto",
      "tip": "",
      "type": 4,
      "isMandatory": 0,
      "state": 0,
      "document_type": {
        "href": "https://api.bsale.io/v1/document_types/10.json",
        "id": "10"
      }
    },
    {
      "href": "https://api.bsale.io/v1/dynamic_attributes/15.json",
      "id": 15,
      "name": "Nombre Contacto",
      "tip": "",
      "type": 4,
      "isMandatory": 0,
      "state": 0,
      "document_type": {
        "href": "https://api.bsale.io/v1/document_types/10.json",
        "id": "10"
      }
    },
    {
      "href": "https://api.bsale.io/v1/dynamic_attributes/3.json",
      "id": 3,
      "name": "Número",
      "tip": "",
      "type": 4,
      "isMandatory": 0,
      "state": 0,
      "payment_type": {
        "href": "https://api.bsale.io/v1/payment_types/5.json",
        "id": "5"
      }
    }
  ]
}
```
## GET un atributo dinámico
- GET `/v1/dynamic_attributes/3.json` retornará un atributo específico.

#### Parámetros
- **expand**, permite expandir instancias y colecciones para traer relaciones en una sola petición.
  
#### Ejemplos
- `GET /v1/dynamic_attributes/3.json?expand=[payment_type]`


```json title="Response /dynamic_attributes/3.json"
{
  "href": "https://api.bsale.io/v1/dynamic_attributes/3.json",
  "id": 3,
  "name": "Número",
  "tip": "",
  "type": 4,
  "isMandatory": 0,
  "state": 0,
  "payment_type": {
    "href": "https://api.bsale.io/v1/payment_types/5.json",
    "id": "5"
  }
}
```
## GET detalles de un atributo dinámico
- GET `/v1/dynamic_attributes/8/details.json` Retornará los detalles de un atributo en particular.

```json 
  {
  "href": "https://api.bsale.io/v1/dynamic_attributes/8/details.json",
  "count": 9,
  "limit": 25,
  "offset": 0,
  "items": [
    {
      "href": "https://api.bsale.io/v1/dynamic_attributes/8/details/1.json",
      "id": 1,
      "name": "Operación Constituye Venta",
      "state": 1
    },
    {
      "href": "https://api.bsale.io/v1/dynamic_attributes/8/details/2.json",
      "id": 2,
      "name": "Venta por Efectuar",
      "state": 1
    },
    {
      "href": "https://api.bsale.io/v1/dynamic_attributes/8/details/3.json",
      "id": 3,
      "name": "Consignaciones",
      "state": 1
    },
    {
      "href": "https://api.bsale.io/v1/dynamic_attributes/8/details/4.json",
      "id": 4,
      "name": "Entrega Gratuita",
      "state": 1
    },
    {
      "href": "https://api.bsale.io/v1/dynamic_attributes/8/details/5.json",
      "id": 5,
      "name": "Traslado Interno",
      "state": 1
    },
    {
      "href": "https://api.bsale.io/v1/dynamic_attributes/8/details/6.json",
      "id": 6,
      "name": "Otros Traslados No Venta",
      "state": 1
    },
    {
      "href": "https://api.bsale.io/v1/dynamic_attributes/8/details/7.json",
      "id": 7,
      "name": "Guía Devolución",
      "state": 1
    },
    {
      "href": "https://api.bsale.io/v1/dynamic_attributes/8/details/8.json",
      "id": 8,
      "name": "Traslado para Exportación",
      "state": 1
    },
    {
      "href": "https://api.bsale.io/v1/dynamic_attributes/8/details/9.json",
      "id": 9,
      "name": "Venta para Exportación",
      "state": 1
    }
  ]
}
```
## GET un de detalle de un atributo dinámico
- GET `/v1/dynamic_attributes/8/details/9.json` retornará un detalle de un atributo dinámico.

```json 
{
  "href": "https://api.bsale.io/v1/dynamic_attributes/8/details/9.json",
  "id": 9,
  "name": "Venta para Exportación",
  "state": 1
}
```
