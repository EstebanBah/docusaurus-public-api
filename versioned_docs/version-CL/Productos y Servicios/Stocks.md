---
sidebar_position: 23
title: Stocks
description: Crear, editar y listar stocks
slug: /stocks
---

# Stocks
Listar, editar y crear stock. Recepción, consumo.

Cómo funciona la interfaz de Bsale, mira éstos videos:

- Recepción de stock [Ver](https://www.youtube.com/watch?v=5LljCaetQuc) 
- Consumo de stock [Ver](https://www.youtube.com/watch?v=k_oCSXbr__Y) 

:::info
El stock debe ser llamado según la variante, osea su `id`, o `barCode` o `code`. 
:::

## Estructura JSON

Al realizar una petición `HTTP`, el servicio retornara un JSON con la siguiente estructura:

```js title="Response /stocks/1442.json"
{
    "href": "https://api.bsale.io/v1/stocks/1442.json",
    "id": 1442,
    "quantity": 0.0,
    "quantityReserved": 0.0,
    "quantityAvailable": 0.0,
    "variant": {
        "href": "https://api.bsale.io/v1/variants/3960.json",
        "id": "3960"
    },
    "office": {
        "href": "https://api.bsale.io/v1/offices/1.json",
        "id": "1"
    }
}
```

### Atributos
| Atributo      | Descripción | Tipo dato |
| ----------- | ----------- | ----------- |
| **quantity** | cantidad real de la variante | Float).
| **quantityReserved** | cantidad reservada de la variante en borradores o en documento pendientes de despachar | Float |
| **quantityAvailable** | cantidad disponible de la variante | Float |
| **variant** | nodo que indica la relación con la variante. | |
| **office** | nodo que indica la relación con la sucursal. | |

## GET lista de stocks
- GET `/v1/stocks.json` retornará todos todos los stocks.

#### Parámetros
- **limit**, limita la cantidad de items de una respuesta JSON, por defecto el limit es 25, el máximo permitido es 50.
- **offset**, permite paginar los items de una respuesta JSON, por defecto el offset es 0.
- **fields**, solo devolver atributos específicos de un recurso
- **expand**, permite expandir instancias y colecciones para traer relaciones en una sola petición.
- **officeid**, Permite filtrar por sucursal.
- **variantid**, filtra por el identificador de la variante (Integer)
- **code**, filtra por el SKU de la variante (String).
- **barcode**, filtra por el codigo de barras de la variante (String).
  
#### Ejemplos
- `GET /v1/stocks.json?limit=10&offset=0`
- `GET /v1/stocks.json?variantid=[1223]`
- `GET /v1/stocks.json?code=[892777267]`


```json title="Response /stocks.json"
{
  "href": "https://api.bsale.io/v1/stocks.json",
  "count": 1049,
  "limit": 2,
  "offset": 0,
  "items": [
    {
      "quantity": 60.36,
      "quantityReserved": 0,
      "quantityAvailable": 60.36,
      "variant": {
        "href": "https://api.bsale.io/v1/variants/351.json",
        "id": "351"
      },
      "office": {
        "href": "https://api.bsale.io/v1/offices/2.json",
        "id": "2"
      }
    },
    {
      "quantity": 0,
      "quantityReserved": 0,
      "quantityAvailable": 0,
      "variant": {
        "href": "https://api.bsale.io/v1/variants/351.json",
        "id": "351"
      },
      "office": {
        "href": "https://api.bsale.io/v1/offices/1.json",
        "id": "1"
      }
    }
  ]
}
```
## GET un stock de variante
- GET `/v1/stocks/44977.json` retornará un stock específico.

#### Parámetros
- **expand**, permite expandir instancias y colecciones para traer relaciones en una sola petición.

#### Ejemplos
- `GET /v1/variants/44977.json?expand=[variant,office]`
- `GET /v1/variants/44977.json?officeid=2`

```json title="Response /stocks/44977.json"
{
    "href": "https://api.bsale.io/v1/stocks/44977.json",
    "id": 44977,
    "quantity": 4.0,
    "quantityReserved": 0.0,
    "quantityAvailable": 4.0,
    "variant": {
        "href": "https://api.bsale.io/v1/variants/18855.json",
        "id": "18855"
    },
    "office": {
        "href": "https://api.bsale.io/v1/offices/2.json",
        "id": "2"
    }
}
```
:::tip
En el caso de necesitar el stock de un pack, se debe filtrar por un identificador (`variantid`, `code`, `barcode`) y además la sucursal requerida `officeid`. El stock de los packs solo considera el stock físico, lo que quiere decir que no contempla las cantidades por despachar.
:::

## GET recepciones de stock
- GET `/v1/stocks/receptions.json` retornará todos las recepciones..

- **limit**, limita la cantidad de items de una respuesta JSON, por defecto el limit es 25, el máximo permitido es 50.
- **offset**, permite paginar los items de una respuesta JSON, por defecto el offset es 0.
- **fields**, solo devolver atributos específicos de un recurso
- **expand**, permite expandir instancias y colecciones para traer relaciones en una sola petición.
- **admissiondate**, Permite filtrar por la fecha de la recepción.
- **documentnumber**, filtra por el numero del documento de la recepción.
- **officeid**, Permite filtrar por sucursal.
  
#### Ejemplos
- `GET /v1/stocks/receptions.json?limit=3&offset=0`
- `GET /v1/stocks/receptions.json?fields=[admissiondate,document,documentnumber]`
- `GET /v1/stocks/receptions.json?expand=[office,details]`

```json 
{
    "href": "https://api.bsale.io/v1/stocks/receptions.json",
    "count": 126,
    "limit": 3,
    "offset": 0,
    "items": [
        {
            "href": "https://api.bsale.io/v1/stocks/receptions/487.json",
            "id": 487,
            "admissionDate": 1583712000,
            "document": "Sin Documento",
            "documentNumber": "",
            "note": "Ajuste de Stock: Soporte  bsale",
            "imagestionCctId": 0,
            "imagestionCcDescription": "",
            "internalDispatchId": 0,
            "updateStock": 1,
            "office": {
                "href": "https://api.bsale.io/v1/offices/1.json",
                "id": "1"
            },
            "user": {
                "href": "https://api.bsale.io/v1/users/1.json",
                "id": "1"
            },
            "details": {
                "href": "https://api.bsale.io/v1/stocks/receptions/487/details.json"
            }
        },
        {
            "href": "https://api.bsale.io/v1/stocks/receptions/492.json",
            "id": 492,
            "admissionDate": 1584921600,
            "document": "Guía",
            "documentNumber": "123",
            "note": "prueba api",
            "imagestionCctId": 0,
            "imagestionCcDescription": null,
            "internalDispatchId": 0,
            "updateStock": 0,
            "office": {
                "href": "https://api.bsale.io/v1/offices/1.json",
                "id": "1"
            },
            "user": {
                "href": "https://api.bsale.io/v1/users/2.json",
                "id": "2"
            },
            "details": {
                "href": "https://api.bsale.io/v1/stocks/receptions/492/details.json"
            }
        },
        {
            "href": "https://api.bsale.io/v1/stocks/receptions/493.json",
            "id": 493,
            "admissionDate": 1584921600,
            "document": "Factura",
            "documentNumber": "",
            "note": "Recepcion / Soporte  bsale",
            "imagestionCctId": 0,
            "imagestionCcDescription": "",
            "internalDispatchId": 0,
            "updateStock": 0,
            "office": {
                "href": "https://api.bsale.io/v1/offices/1.json",
                "id": "1"
            },
            "user": {
                "href": "https://api.bsale.io/v1/users/1.json",
                "id": "1"
            },
            "details": {
                "href": "https://api.bsale.io/v1/stocks/receptions/493/details.json"
            }
        }
    ],
    "next": "https://api.bsale.io/v1/stocks/receptions.json?limit=3&offset=3"
}
```

### GET una recepción
- GET `/v1/stocks/receptions/12.json` retornará una recepción específica.

#### Parámetros
- **expand**, permite expandir instancias y colecciones para traer relaciones en una sola petición.
  
#### Ejemplos
- `GET /v1/stocks/receptions/12.json?expand=details`

```json 
{
    "href": "https://api.bsale.io/v1/stocks/receptions/487.json",
    "id": 487,
    "admissionDate": 1583712000,
    "document": "Sin Documento",
    "documentNumber": "",
    "note": "Ajuste de Stock: Vendedor local",
    "imagestionCctId": 0,
    "imagestionCcDescription": "",
    "internalDispatchId": 0,
    "updateStock": 1,
    "office": {
        "href": "https://api.bsale.io/v1/offices/1.json",
        "id": "1"
    },
    "user": {
        "href": "https://api.bsale.io/v1/users/1.json",
        "id": "1"
    },
    "details": {
        "href": "https://api.bsale.io/v1/stocks/receptions/487/details.json"
    }
}
```
### GET detalles de una recepción
- GET `/v1/stocks/receptions/12/details.json` retornará detalles de una recepción específica.

```json 
{
  "href": "https://api.bsale.io/v1/stocks/receptions/12/details.json",
  "count": 13,
  "limit": 25,
  "offset": 0,
  "items": [
    {
      "href": "https://api.bsale.io/v1/stocks/receptions/12/details/65.json",
      "id": 65,
      "quantity": 32.02,
      "cost": 3200,
      "variantStock": 85.55,
      "serialNumber": null,
      "variant": {
        "href": "https://api.bsale.io/v1/variant/391.json",
        "id": "391"
      }
    },
    {
      "href": "https://api.bsale.io/v1/stocks/receptions/12/details/66.json",
      "id": 66,
      "quantity": 32.22,
      "cost": 3200,
      "variantStock": 185.2,
      "serialNumber": null,
      "variant": {
        "href": "https://api.bsale.io/v1/variant/388.json",
        "id": "388"
      }
    },
    {
      "href": "https://api.bsale.io/v1/stocks/receptions/12/details/67.json",
      "id": 67,
      "quantity": 14.46,
      "cost": 3200,
      "variantStock": 107.84,
      "serialNumber": null,
      "variant": {
        "href": "https://api.bsale.io/v1/variant/393.json",
        "id": "393"
      }
    }
  ]
}
```

#### GET un de detalle de una recepción
- GET `/v1/stocks/receptions/12/details/65.json` retornará un detalle de una recepción específica.

```json 
{
  "href": "https://api.bsale.io/v1/stocks/receptions/12/details/65.json",
  "id": 65,
  "quantity": 32.02,
  "cost": 3200,
  "variantStock": 85.55,
  "serialNumber": null,
  "variant": {
    "href": "https://api.bsale.io/v1/variant/391.json",
    "id": "391"
  }
}
```

## POST una recepción de stock
- POST `/v1/stocks/receptions.json` 

Para crear una recepción (ingresar cantidades de stock), se debe enviar un JSON con la siguiente estructura:
### Ejemplo JSON

#### Envío
```json
{
  "document": "Guía",
  "officeId": 1,
  "documentNumber": "123",
  "note": "prueba api",
  "details": [
    {
      "quantity": 32.22,
      "code": 629,
      "cost": 3200
    }
  ]
}
```
- **document**, nombre del tipo de documento de ingreso, se visualiza en la interfaz de Bsale (String).
  - "GUÍA", "FACTURA", "OTRO".
- **officeId**, Id de la sucursal donde se ingresa el stock (Integer).
- **note**, comentario de ingreso, se visualiza en la interfaz de Bsale (String).
- **documentNumber**, número de documento de ingreso (Integer)
- **quantity**, cantidad ingreso de stock
- **cost**, costo asociado al ingreso

:::info
En caso de generar una recepción de stock de un producto que tiene serie, se debe agregar `serialNumber` (String) con su valor.
:::

:::tip
Para el ingreso de stock, se puede referenciar al producto mediante `id`, o `barCode` o `code`. 
:::

#### Respuesta
```json
{
  "admissionDate": 1407297600,
  "imagestionCcDescription": null,
  "href": "https://api.bsale.io/v1/stocks/receptions/831.json",
  "id": 831,
  "details": {
    "href": "https://api.bsale.io/v1/stocks/receptions/831/details.json"
  },
  "document": "Guía",
  "documentNumber": 123,
  "office": {
    "href": "https://api.bsale.io/v1/offices/1.json",
    "id": "1"
  },
  "imagestionCctId": 0,
  "note": "prueba api",
  "internalDispatchId": 0
}
```

## PUT una recepción de stock
- PUT `/v1/stocks/receptions/831.json` 

Se debe enviar un Json con la siguiente estructura: 
### Ejemplo JSON

#### Envío
```json
{
  "document": "Guía",
  "officeId": 2,
  "documentNumber": "123",
  "note": "Prueba de ingreso vía api",
  "details": [
    {
      "quantity": 27,
      "variantId": 629,
      "cost": 2970
    }
  ]
}
```
#### Respuesta
```json
{
  "admissionDate": 1407297600,
  "imagestionCcDescription": null,
  "href": "https://api.bsale.io/v1/stocks/receptions/831.json",
  "id": 831,
  "details": {
    "href": "https://api.bsale.io/v1/stocks/receptions/831/details.json"
  },
  "document": "Guía",
  "documentNumber": 123,
  "office": {
    "href": "https://api.bsale.io/v1/offices/1.json",
    "id": "1"
  },
  "imagestionCctId": 0,
  "note": "prueba api",
  "internalDispatchId": 0
}
```

## GET consumos de stock
- GET `/v1/stocks/consumptions.json`  retornará los consumos.
#### Parámetros
- **limit**, limita la cantidad de items de una respuesta JSON, por defecto el limit es 25, el máximo permitido es 50.
- **offset**, permite paginar los items de una respuesta JSON, por defecto el offset es 0.
- **fields**, solo devolver atributos específicos de un recurso.
- **expand**, permite expandir instancias y colecciones.
- **consumptiondate**, Permite filtrar por la fecha del consumo.
- **officeid**, Permite filtrar por sucursal.
  
#### Ejemplos
- `GET /v1/stocks/consumptions.json?limit=3&offset=0`
- `GET /v1/stocks/consumptions.json?fields=[consumptiondate,note]`
- `GET /v1/stocks/consumptions.json?expand=[details]`

```json 
{
    "href": "https://api.bsale.io/v1/stocks/consumptions.json",
    "count": 9,
    "limit": 3,
    "offset": 0,
    "items": [
        {
            "href": "https://api.bsale.io/v1/stocks/consumptions/1.json",
            "id": 1,
            "consumptionDate": 1600646400,
            "note": "a",
            "imagestionCcdescription": "",
            "imagestionCenterCostId": 0,
            "updateStock": 0,
            "consumptionTypeId": 1,
            "office": {
                "href": "https://api.bsale.io/v1/offices/1.json",
                "id": "1"
            },
            "user": {
                "href": "https://api.bsale.io/v1/users/1.json",
                "id": "1"
            },
            "details": {
                "href": "https://api.bsale.io/v1/stocks/consumptions/1/details.json"
            }
        },
        {
            "href": "https://api.bsale.io/v1/stocks/consumptions/2.json",
            "id": 2,
            "consumptionDate": 1615334400,
            "note": "Inventory: Soporte  bsale",
            "imagestionCcdescription": "",
            "imagestionCenterCostId": 0,
            "updateStock": 0,
            "consumptionTypeId": 1,
            "office": {
                "href": "https://api.bsale.io/v1/offices/1.json",
                "id": "1"
            },
            "user": {
                "href": "https://api.bsale.io/v1/users/1.json",
                "id": "1"
            },
            "details": {
                "href": "https://api.bsale.io/v1/stocks/consumptions/2/details.json"
            }
        },
        {
            "href": "https://api.bsale.io/v1/stocks/consumptions/3.json",
            "id": 3,
            "consumptionDate": 1620864000,
            "note": "Ajuste de Stock: Soporte  bsale",
            "imagestionCcdescription": "",
            "imagestionCenterCostId": 0,
            "updateStock": 1,
            "consumptionTypeId": 1,
            "office": {
                "href": "https://api.bsale.io/v1/offices/1.json",
                "id": "1"
            },
            "user": {
                "href": "https://api.bsale.io/v1/users/1.json",
                "id": "1"
            },
            "details": {
                "href": "https://api.bsale.io/v1/stocks/consumptions/3/details.json"
            }
        }
    ],
    "next": "https://api.bsale.io/v1/stocks/consumptions.json?limit=3&offset=3"
}
```

### GET un consumo
- GET `/v1/stocks/consumptions/1.json` retornará un consumo específico.

#### Parámetros
- **expand**, permite expandir instancias y colecciones para traer relaciones en una sola petición.
  
#### Ejemplos
- `GET /v1/stocks/consumptions/8.json?expand=details`

```json 
{
    "href": "https://api.bsale.io/v1/stocks/consumptions/8.json",
    "id": 8,
    "consumptionDate": 1664841600,
    "note": "Ajuste de Stock: Inventario",
    "imagestionCcdescription": "",
    "imagestionCenterCostId": 0,
    "updateStock": 1,
    "consumptionTypeId": 1,
    "office": {
        "href": "https://api.bsale.io/v1/offices/1.json",
        "id": "1"
    },
    "user": {
        "href": "https://api.bsale.io/v1/users/1.json",
        "id": "1"
    },
    "details": {
        "href": "https://api.bsale.io/v1/stocks/consumptions/8/details.json"
    }
}
```
### GET detalles de un consumo
- GET `/v1/stocks/consumptions/1/details.json` retornará detalles de un consumo específico.

```json 
{
  "href": "https://api.bsale.io/v1/stocks/consumptions/1/details.json",
  "count": 2,
  "limit": 25,
  "offset": 0,
  "items": [
    {
      "href": "https://api.bsale.io/v1/stocks/consumptions/1/details/1.json",
      "id": 1,
      "quantity": 36.78,
      "cost": 3200,
      "variantStock": 42.2,
      "variant": {
        "href": "https://api.bsale.io/v1/variant/355.json",
        "id": "355"
      }
    },
    {
      "href": "https://api.bsale.io/v1/stocks/consumptions/2/details/2.json",
      "id": 2,
      "quantity": 78.64,
      "cost": 1311.08850457782,
      "variantStock": 106.56,
      "variant": {
        "href": "https://api.bsale.io/v1/variant/388.json",
        "id": "388"
      }
    }
  ]
}
```

#### GET un de detalle de un consumo
- GET `/v1/stocks/consumptions/1/details/1.json` retornará un detalle de un consumo específica.

```json 
{
  "href": "https://api.bsale.io/v1/stocks/consumptions/1/details/1.json",
  "id": 1,
  "quantity": 36.78,
  "cost": 3200,
  "variantStock": 42.2,
  "variant": {
    "href": "https://api.bsale.io/v1/variant/355.json",
    "id": "355"
  }
}
```

### GET tipos de consumos
- GET `/v1/stock_consumption_types.json` retornará los tipos de consumos creados.

:::note

Es posible solicitar la creación de nuevos tipos de consumo, a ayuda@bsale.app

:::

#### Ejemplos
- `GET /v1/stock_consumption_types.json`

```json 
{
    "href": "https://api.bsale.io/v1/stock_consumption_types.json",
    "count": 10,
    "limit": 25,
    "offset": 0,
    "items": [
        {
            "cntId": 1,
            "cntI18nName": "consumption_type.retiro",
            "cntActive": 1,
            "cntCode": "12"
        },
        {
            "cntId": 2,
            "cntI18nName": "consumption_type.mermas",
            "cntActive": 1,
            "cntCode": "13"
        },
        {
            "cntId": 3,
            "cntI18nName": "consumption_type.desmedro",
            "cntActive": 1,
            "cntCode": "14"
        },
        {
            "cntId": 4,
            "cntI18nName": "consumption_type.destruccion",
            "cntActive": 1,
            "cntCode": "15"
        },
        {
            "cntId": 5,
            "cntI18nName": "Eventos internos",
            "cntActive": 1,
            "cntCode": "16"
        }
    ]
}
```

## POST un consumo de stock
- POST `/v1/stocks/consumptions.json` 

Para crear un consumo (restar cantidades de stock), se debe enviar un JSON con la siguiente estructura:
### Ejemplo JSON

#### Envío
```json
{
  "note": "prueba de consumo api",
  "officeId": 1,
  "details": [
    {
      "quantity": 13,
      "variantId": 629
    }
  ]
}
```
- **officeId**, Id de la sucursal donde se ingresa el stock (Integer).
- **note**, comentario de ingreso, se visualiza en la interfaz de Bsale (String).
- **documentNumber**, número de documento de ingreso (Integer)
- **quantity**, cantidad ingreso de stock

:::info
En caso de generar un consumo de stock de un producto que tiene serie, se debe agregar `serialNumber`(String) con su valor.
:::

:::tip
Para el consumo de stock, se puede referenciar al producto mediante `id`, o `barCode` o `code`. 
:::

#### Respuesta
```json
{
  "office": {
    "id": "1",
    "href": "https://api.bsale.io/v1/offices/1.json"
  },
  "imagestionCenterCostId": null,
  "details": {
    "href": "https://api.bsale.io/v1/stocks/consumptions/593/details.json"
  },
  "note": "prueba api",
  "consumptionDate": 1407297600,
  "imagestionCcdescription": null,
  "id": 593,
  "href": "https://api.bsale.io/v1/stocks/consumptions/593.json"
}
```
