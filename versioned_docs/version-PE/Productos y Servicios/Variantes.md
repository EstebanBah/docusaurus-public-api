---
sidebar_position: 22
title: Variantes
description: Crear, editar y listar variantes
slug: /variantes
---

# Variantes
Listar variante(s), costos, cantidades, crear, editar y eliminar variantes.

Cómo funciona la interfaz de Bsale, mira éstos videos:

- Creación variantes [Ver](https://www.youtube.com/watch?v=eY3YBu3b-j0) 

:::info
Una variante sólo puede tener 1 producto "padre", pero 1 producto puede tener 1 o más variantes. Ej, (Nombre Producto) Poleron Blanco, (Nombre Variantes) Talla L, Talla M, Talla S. 

El producto debe ser creado antes de crear la variante. Para vender un producto/variante creado, se debe indicar en el nodo details del documento.
:::

## Estructura JSON

Al realizar una petición `HTTP`, el servicio retornara un JSON con la siguiente estructura:

```js title="Response /variants/2373.json"
{
  "href": "https://api.bsale.io/v1/variants/2373.json",
  "id": 2373,
  "description": "240 ML",
  "unlimitedStock": 0,
  "allowNegativeStock": 0,
  "state": 0,
  "barCode": "1441310864",
  "code": "1441310864",
  "imagestionCenterCost": 0,
  "imagestionAccount": 0,
  "imagestionConceptCod": 0,
  "imagestionProyectCod": 0,
  "imagestionCategoryCod": 0,
  "imagestionProductId": 0,
  "serialNumber": 0,
  "prestashopCombinationId": 0,
  "prestashopValueId": 0,
  "product": {
    "href": "https://api.bsale.io/v1/products/656.json",
    "id": "656"
  },
  "attribute_values": {
    "href": "https://api.bsale.io/v1/variants/2373/attribute_values.json"
  },
  "costs": {
    "href": "https://api.bsale.io/v1/variants/2373/costs.json"
  }
}
```

### Atributos
| Atributo      | Descripción | Tipo dato |
| ----------- | ----------- | ----------- |
| **href**      | url del tipo de producto     | String       |
| **id**   | identificador único del tipo de producto   | Integer |
| **description**   | nombre de la variante | String | 
| **unlimitedStock**   | indica si la variante posee stock ilimitado No(0) o Si (1) | Boolean | 
| **allowNegativeStock**   | indica si la variante permite stock negativo No(0) o Si (1) | Boolean | 
| **state**   | estado de la variante activo(0) o inactivo (1) | Boolean | 
| **barCode**   | código de barras de la variante | String | 
| **code**   | SKU de la variante | String |
| **imagestionCenterCost**   | centro de costo imagestion | String | 
| **imagestionAccount**   | cuenta imagestion | String | 
| **imagestionConceptCod**   | concepto imagestion | String | 
| **imagestionProyectCod**   | proyecto imagestion | String | 
| **imagestionCategoryCod**   | categoría imagestion | Integer | 
| **imagestionProductId**   | producto imagestion | Integer | 
| **serialNumber**   | indica si la variante posee numero de serie No(0) Si(1) | Integer | 
| **prestashopCombinationId**   | identificador en prestashop _legacy_| Integer | 
| **prestashopValueId**   | identificador en prestashop _legacy_ | Integer | 
| **product**   | nodo que indica la relación con el producto | |
| **attribute_values**   | nodo que indica los valores de los atributos del tipo de producto | |
| **costs**   | nodo que indica el costo de la variante | |

## GET lista de variantes
- GET `/v1/variants.json` retornará todos todas las variantes.

#### Parámetros
- **limit**, limita la cantidad de items de una respuesta JSON, por defecto el limit es 25, el máximo permitido es 50.
- **offset**, permite paginar los items de una respuesta JSON, por defecto el offset es 0.
- **fields**, solo devolver atributos específicos de un recurso
- **expand**, permite expandir instancias y colecciones para traer relaciones en una sola petición.
- **description**, Permite filtrar por nombre de la variante.
- **barcode**, filtra por código de barra de la variante.
- **code**, filtra por código (SKU) de la variante.
- **serialnumber**, filtra por numero de serie de la variante.
- **productid**, filtra variantes por el id del producto.
- **state**, boolean (0 o 1) indica si las variantes están activas(0) o inactivas (1).
  
#### Ejemplos
- `GET /v1/variants.json?limit=10&offset=0`
- `GET /v1/variants.json?fields=[description,barCode,code]`
- `GET /v1/variants.json?state=0`
- `GET /v1/variants.json?productid=26`
- `GET /v1/variants.json?expand=[product]`


```json title="Response /variants.json "
{
  "href": "https://api.bsale.io/v1/variants.json",
  "count": 868,
  "limit": 3,
  "offset": 0,
  "items": [
    {
      "href": "https://api.bsale.io/v1/variants/1548.json",
      "id": 1548,
      "description": "120 ML",
      "unlimitedStock": 0,
      "allowNegativeStock": 0,
      "state": 0,
      "barCode": "1401291513",
      "code": "1401291513",
      "imagestionCenterCost": 0,
      "imagestionAccount": 0,
      "imagestionConceptCod": 0,
      "imagestionProyectCod": 0,
      "imagestionCategoryCod": 0,
      "imagestionProductId": 0,
      "serialNumber": 0,
      "prestashopCombinationId": 0,
      "prestashopValueId": 0,
      "product": {
        "href": "https://api.bsale.io/v1/products/416.json",
        "id": "416"
      },
      "attribute_values": {
        "href": "https://api.bsale.io/v1/variants/1548/attribute_values.json"
      },
      "costs": {
        "href": "https://api.bsale.io/v1/variants/1548/costs.json"
      }
    },
    {
      "href": "https://api.bsale.io/v1/variants/1555.json",
      "id": 1555,
      "description": "150 ML",
      "unlimitedStock": 0,
      "allowNegativeStock": 0,
      "state": 0,
      "barCode": "1400786476",
      "code": "1400786476",
      "imagestionCenterCost": 0,
      "imagestionAccount": 0,
      "imagestionConceptCod": 0,
      "imagestionProyectCod": 0,
      "imagestionCategoryCod": 0,
      "imagestionProductId": 0,
      "serialNumber": 0,
      "prestashopCombinationId": 0,
      "prestashopValueId": 0,
      "product": {
        "href": "https://api.bsale.io/v1/products/420.json",
        "id": "420"
      },
      "attribute_values": {
        "href": "https://api.bsale.io/v1/variants/1555/attribute_values.json"
      },
      "costs": {
        "href": "https://api.bsale.io/v1/variants/1555/costs.json"
      }
    },
    {
      "href": "https://api.bsale.io/v1/variants/2101.json",
      "id": 2101,
      "description": "300 ML",
      "unlimitedStock": 0,
      "allowNegativeStock": 0,
      "state": 0,
      "barCode": "1423687401",
      "code": "1423687401",
      "imagestionCenterCost": 0,
      "imagestionAccount": 0,
      "imagestionConceptCod": 0,
      "imagestionProyectCod": 0,
      "imagestionCategoryCod": 0,
      "imagestionProductId": 0,
      "serialNumber": 0,
      "prestashopCombinationId": 0,
      "prestashopValueId": 0,
      "product": {
        "href": "https://api.bsale.io/v1/products/588.json",
        "id": "588"
      },
      "attribute_values": {
        "href": "https://api.bsale.io/v1/variants/2101/attribute_values.json"
      },
      "costs": {
        "href": "https://api.bsale.io/v1/variants/2101/costs.json"
      }
    }
  ],
  "next": "https://api.bsale.io/v1/variants.json?limit=3&offset=3"
}
```
## GET una variante
- GET `/v1/variants/2373.json` retornará una variante específica.

#### Parámetros
- **expand**, permite expandir instancias y colecciones para traer relaciones en una sola petición.

#### Ejemplos
- `GET /v1/variants/5730.json?expand=[product]`


```json title="Response /variants/2373.json"
{
  "href": "https://api.bsale.io/v1/variants/2373.json",
  "id": 2373,
  "description": "240 ML",
  "unlimitedStock": 0,
  "allowNegativeStock": 0,
  "state": 0,
  "barCode": "1441310864",
  "code": "1441310864",
  "imagestionCenterCost": 0,
  "imagestionAccount": 0,
  "imagestionConceptCod": 0,
  "imagestionProyectCod": 0,
  "imagestionCategoryCod": 0,
  "imagestionProductId": 0,
  "serialNumber": 0,
  "prestashopCombinationId": 0,
  "prestashopValueId": 0,
  "product": {
    "href": "https://api.bsale.io/v1/products/656.json",
    "id": "656"
  },
  "attribute_values": {
    "href": "https://api.bsale.io/v1/variants/2373/attribute_values.json"
  },
  "costs": {
    "href": "https://api.bsale.io/v1/variants/2373/costs.json"
  }
}
```

## GET cantidad de variantes
- GET `/v1/variants/count.json` Retornará cantidades de registros.

- **state**, boolean (0 o 1) indica si los tipos de productos están activos(0) inactivos (1).
  
```json 
{
   "count": 8001
}
```

## GET valores de atributos de una variante
- GET `/v1/variants/5730/attribute_values.json` retorna la información almacenada en los atributos de una variante.

```json
{
  "href": "https://api.bsale.io/v1/variants/5730/attribute_values.json",
  "count": 4,
  "limit": 25,
  "offset": 0,
  "items": [
    {
      "href": "https://api.bsale.io/v1/variants/5730/attribute_values/34192.json",
      "id": 34192,
      "description": "Microsoft",
      "attribute": {
        "href": "https://api.bsale.io/v1/product_types/6/attributes/25.json",
        "id": "25"
      }
    },
    {
      "href": "https://api.bsale.io/v1/variants/5730/attribute_values/34193.json",
      "id": 34193,
      "description": "14-09-2010",
      "attribute": {
        "href": "https://api.bsale.io/v1/product_types/6/attributes/28.json",
        "id": "28"
      }
    },
    {
      "href": "https://api.bsale.io/v1/variants/5730/attribute_values/34194.json",
      "id": 34194,
      "description": "Multi idiomas (Región Latinoamerica) ",
      "attribute": {
        "href": "https://api.bsale.io/v1/product_types/6/attributes/29.json",
        "id": "29"
      }
    },
    {
      "href": "https://api.bsale.io/v1/variants/5730/attribute_values/34195.json",
      "id": 34195,
      "description": "365 / 24hrs",
      "attribute": {
        "href": "https://api.bsale.io/v1/product_types/6/attributes/24.json",
        "id": "24"
      }
    }
  ]
}
```

#### GET un valor de atributo especifico de una variante
- GET `/v1/variants/531/attribute_values/2.json` Retornará un atributo asociados a la variante.
  
```json title="Response /variants/531/attribute_values/2.json"
{
  "href": "https://api.bsale.io/v1/variants/531/attribute_values/2.json",
  "id": 2,
  "description": "SI",
  "attribute": {
    "href": "https://api.bsale.io/v1/product_types/8/attributes/12.json",
    "id": "12"
  }
}
```

## GET costo de una variante
- GET `/v1/variants/2375/costs.json` Retornará el costo previamente asignado a la variante.
  
```json title="Response /variants/2375/costs.json"
{
  "averageCost": "4140.0",
  "history": [
    {
      "reception_detail": {
        "href": "https://api.bsale.io/v1/stocks/receptions/2539/details/7734.json",
        "id": 7734
      },
      "admissionDate": 1441238400,
      "cost": 4140,
      "availableFifo": 1
    },
    {
      "reception_detail": {
        "href": "https://api.bsale.io/v1/stocks/receptions/2542/details/7744.json",
        "id": 7744
      },
      "admissionDate": 1441324800,
      "cost": 4140,
      "availableFifo": 1
    }
  ]
}
```
- **averageCost**, costo promedio de una variante (Float).
- **history**, nodo que indica el costo de la variante en cada recepción que ha tenido.
- **reception_detail**, no que indica el detalle de recepción de la variante.
- **admissionDate**, fecha de recepción (Integer).
- **cost**, costo de la variante al momento de la recepción (Float).
- **availableFifo**, cantidad disponible de la variante de una recepción específica (Integer).

## POST una variante
- POST `/v1/variants.json` 

Para crear una variante, se debe enviar un JSON con la siguiente estructura:
### Ejemplo JSON

#### Envío
```json
{
   "productId": 595,
   "description": "Age of empires II"
}
```
- **name**, nombre del tipo de producto (String).
 
### Atributos (opcional)
Si el tipo de producto al que pertenece la variante posee atributos, se deben enviar los valores que estos van a tener, junto con el `id` del atributo.

```json
{
  "productId": 595,
  "description": "Age of empires II",
  "attribute_values": [
    {
      "description": "Windows",
      "attributeId": 46
    },
    {
      "description": "Estrategia",
      "attributeId": 47
    }
  ]
}
```
- **description**, Valor del atributo (String).
- **attributeId**, identificador único del atributo esto viene del tipo de producto (Integer). 

#### Respuesta
```json
{
  "href": "https://api.bsale.io/v1/variants/2110.json",
  "id": 2110,
  "description": "Age of empires II",
  "unlimitedStock": 0,
  "allowNegativeStock": 0,
  "state": 0,
  "barCode": 1415381671,
  "code": 1415381671,
  "imagestionCenterCost": 0,
  "imagestionAccount": 0,
  "imagestionConceptCod": 0,
  "imagestionProyectCod": 0,
  "imagestionCategoryCod": 0,
  "imagestionProductId": 0,
  "serialNumber": 0,
  "prestashopCombinationId": 0,
  "prestashopValueId": 0,
  "product": {
    "href": "https://api.bsale.io/v1/products/595.json",
    "id": "595"
  },
  "attribute_values": {
    "href": "https://api.bsale.io/v1/variants/2110/attribute_values.json"
  }
}
```

## PUT una variante
- PUT `/v1/variants/2110.json` 

Se debe enviar un Json con la siguiente estructura: 
### Ejemplo JSON

#### Envío
```json
{
  "id": 2110,
  "productId": 595,
  "description": "Age of empires 2",
  "attribute_values": [
    {
      "description": "Windows OS",
      "attributeId": 46
    },
    {
      "description": "Estrategia",
      "attributeId": 47
    }
  ]
}
```
#### Respuesta
```json
{
  "href": "https://api.bsale.io/v1/variants/2110.json",
  "id": 2110,
  "description": "Age of empires 2",
  "unlimitedStock": 0,
  "allowNegativeStock": 0,
  "state": 0,
  "barCode": 1415381671,
  "code": 1415381671,
  "imagestionCenterCost": 0,
  "imagestionAccount": 0,
  "imagestionConceptCod": 0,
  "imagestionProyectCod": 0,
  "imagestionCategoryCod": 0,
  "imagestionProductId": 0,
  "serialNumber": 0,
  "prestashopCombinationId": 0,
  "prestashopValueId": 0,
  "product": {
    "href": "https://api.bsale.io/v1/products/595.json",
    "id": "595"
  },
  "attribute_values": {
    "href": "https://api.bsale.io/v1/variants/2110/attribute_values.json"
  }
}
```

## DELETE una variante virtualmente
- DELETE `/v1/variants/2110.json` 
Cambia el estado de la variante

:::danger
La variante no estará visible mediante interfaz y tendrá un `state` 99
:::

```json
{
  "href": "https://api.bsale.io/v1/variants/2110.json",
  "id": 2110,
  "description": "Nintendo Wii U Basic Controller",
  "unlimitedStock": 0,
  "allowNegativeStock": 0,
  "state": 1,
  "barCode": 1415381671,
  "code": 1415381671,
  "imagestionCenterCost": 0,
  "imagestionAccount": 0,
  "imagestionConceptCod": 0,
  "imagestionProyectCod": 0,
  "imagestionCategoryCod": 0,
  "imagestionProductId": 0,
  "serialNumber": 0,
  "prestashopCombinationId": 0,
  "prestashopValueId": 0,
  "product": {
    "href": "https://api.bsale.io/v1/products/595.json",
    "id": "595"
  },
  "attribute_values": {
    "href": "https://api.bsale.io/v1/variants/2110/attribute_values.json"
  }
}
```