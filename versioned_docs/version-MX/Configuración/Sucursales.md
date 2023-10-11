---
sidebar_position: 52
title: Sucursales
description: Crear, editar y listar sucursales
slug: /sucursales
---


# sucursales
Listar, editar crear y eliminar sucursales. 


:::info
La creación está condicionada por el [Plan](https://www.bsale.cl/sheet/precios/) asociado a la instancia.
:::

## Estructura JSON

Al realizar una petición `HTTP`, el servicio retornara un JSON con la siguiente estructura:

```js title="Response /offices/1.json"
{
  "href": "https://api.bsale.io/v1/offices/1.json",
  "id": 1,
  "name": "Tienda Online",
  "description": "",
  "address": "",
  "latitude": "",
  "longitude": "",
  "isVirtual": 1,
  "country": null,
  "municipality": "",
  "city": null,
  "zipCode": null,
  "costCenter": "",
  "state": 1,
  "imagestionCellarId": 0
}
```

### Atributos
| Atributo      | Descripción | Tipo dato |
| ----------- | ----------- | ----------- |
| **href**      | url del sucursales     | String       |
| **id**   | identificador único del sucursales   | Integer |
| **name**   | nombre de la sucursal | String |
| **description**   | descripción de la sucursal | String |
| **address**   | dirección de la sucursal | String |
| **latitude**   | latitud de la sucursal | String |
| **longitude**   | longitud la sucursal | String |
| **isVirtual**   | indica si la sucursal estará disponible para trabajar en una pagina web No(0) o Si (1) | Boolean |
| **municipality**   |, comuna de la sucursal | String |
| **city**   | ciudad de la sucursal | String |
| **zipCode**   | código postas de la sucursal | String |
| **costCenter**   | centro de costo de la sucursal | String |
| **state**   | estado de la sucursal activo(0) o inactivo (1) | Boolean |
| **imagestionCellarId**   | identificador de la bodega en imagestion | Integer |

## GET lista de sucursales
- GET `/v1/offices.json` retornará todos las sucursales.

#### Parámetros
- **limit**, limita la cantidad de items de una respuesta JSON, por defecto el limit es 25, el máximo permitido es 50.
- **offset**, permite paginar los items de una respuesta JSON, por defecto el offset es 0.
- **fields**, solo devolver atributos específicos de un recurso
- **expand**, permite expandir instancias y colecciones para traer relaciones en una sola petición.
- **name**, Permite filtrar por nombre de las sucursales.
- **address**, filtra por dirección dde las sucursales.
- **country**, filtra por país de las sucursales.
- **city**, filtra por ciudad de las sucursales.
- **municipality**, filtra por comuna de las sucursales.
- **costcenter**, filtra centro de costo de las sucursales.
- **state**, boolean (0 o 1) indica si las sucursales están activas(0) inactivas (1).
  
#### Ejemplos
- `GET /v1/offices.json?limit=10&offset=0`
- `GET /v1/offices.json?fields=[name,address,costcenter]`
- `GET /v1/offices.json?state=0`


```json title="Response /offices.json "
{
  "href": "https://api.bsale.io/v1/offices.json",
  "count": 4,
  "limit": 25,
  "offset": 0,
  "items": [
    {
      "href": "https://api.bsale.io/v1/offices/2.json",
      "id": 2,
      "name": "Casa Matriz - Cdmx",
      "description": "",
      "address": "Direccion de la sucursal",
      "latitude": "",
      "longitude": "",
      "isVirtual": 0,
      "country": "",
      "municipality": "",
      "city": "",
      "zipCode": "",
      "costCenter": "",
      "state": 0,
      "imagestionCellarId": 0
    },
    {
      "href": "https://api.bsale.io/v1/offices/3.json",
      "id": 3,
      "name": "Casa Matriz Pto. Varas en ($)",
      "description": "",
      "address": "Direccion de la sucursal",
      "latitude": "",
      "longitude": "",
      "isVirtual": 0,
      "country": "",
      "municipality": "",
      "city": "",
      "zipCode": "",
      "costCenter": "",
      "state": 1,
      "imagestionCellarId": 0
    },
    {
      "href": "https://api.bsale.io/v1/offices/4.json",
      "id": 4,
      "name": "Internacional",
      "description": "",
      "address": "",
      "latitude": "",
      "longitude": "",
      "isVirtual": 0,
      "country": "",
      "municipality": "",
      "city": "",
      "zipCode": "",
      "costCenter": "",
      "state": 0,
      "imagestionCellarId": 0
    },
    {
      "href": "https://api.bsale.io/v1/offices/1.json",
      "id": 1,
      "name": "Tienda Online",
      "description": "",
      "address": "",
      "latitude": "",
      "longitude": "",
      "isVirtual": 1,
      "country": null,
      "municipality": "",
      "city": null,
      "zipCode": null,
      "costCenter": "",
      "state": 1,
      "imagestionCellarId": 0
    }
  ]
}
```
## GET una sucursal
- GET `/v1/offices/1.json` retornará una sucursal específica.

```json title="Response /offices/1.json"
{
  "href": "https://api.bsale.io/v1/offices/1.json",
  "id": 1,
  "name": "Tienda Online",
  "description": "",
  "address": "",
  "latitude": "",
  "longitude": "",
  "isVirtual": 1,
  "country": null,
  "municipality": "",
  "city": null,
  "zipCode": null,
  "costCenter": "",
  "state": 1,
  "imagestionCellarId": 0
}
```

## GET cantidad de sucursales
- GET `/v1/offices/count.json` Retornará cantidades de registros.

- **state**, boolean (0 o 1) indica si los sucursaless están activos(0) inactivos (1).
  
```json 
{
   "count": 4
}
```

## POST una sucursal
- POST `/v1/offices.json` 

Para crear un cliente, se debe enviar un JSON con la siguiente estructura:
### Ejemplo JSON

#### Envío
```json
{
  "longitude": "",
  "zipCode": "000000",
  "name": "Imaginex",
  "latitude": "",
  "isVirtual": 0,
  "address": "Santa Rosa 402",
  "country": "México",
  "municipality": "Ciudad de México",
  "city": "Ciudad de México",
  "costCenter": "25",
  "description": "Oficina central"
}
```
 
#### Respuesta
```json
{
  "zipCode": "000000",
  "longitude": "",
  "state": 0,
  "latitude": "",
  "name": "Imaginex",
  "isVirtual": 0,
  "href": "https://api.bsale.io/v1/offices/5.json",
  "address": "Santa Rosa 402",
  "id": 5,
  "city": "Ciudad de México",
  "municipality": "Ciudad de México",
  "country": "México",
  "costCenter": "25",
  "description": "Oficina",
  "imagestionCellarId": 0
}
```

## PUT una sucursal
- PUT `/v1/offices/5.json` 

Se debe enviar un Json con la siguiente estructura
### Ejemplo JSON

#### Envío
```json
{
  "id":"97",
  "name": "Imaginex TI",
  "address": "Santa Rosa 402 oficina B" 
}
```
#### Respuesta
```json
{
  "zipCode": "000000",
  "longitude": "",
  "state": 0,
  "latitude": "",
  "name": "Imaginex TI",
  "isVirtual": 0,
  "href": "https://api.bsale.io/v1/offices/5.json",
  "address": "SSanta Rosa 402 oficina B",
  "id": 5,
  "city": "Ciudad de México",
  "municipality": "Ciudad de México",
  "country": "México",
  "costCenter": "25",
  "description": "Oficina central",
  "imagestionCellarId": 0
}
```

## DELETE una sucursal virtualmente
- DELETE `/v1/offices/5.json` 
Cambia el estado de la sucursal

:::danger
La sucursal no estará visible mediante interfaz y tendrá un `state` 99. Sus documentos asociados **NO** se eliminarán.
:::

```json
{
  "zipCode": "000000",
  "longitude": "",
  "state": 1,
  "latitude": "",
  "name": "Imaginex TI",
  "isVirtual": 0,
  "href": "https://api.bsale.io/v1/offices/5.json",
  "address": "Santa Rosa 402 oficina B",
  "id": 5,
  "city": "Puerto Varas",
  "municipality": "Puerto Varas",
  "country": "Chile",
  "costCenter": "25",
  "description": "Oficina",
  "imagestionCellarId": 0
}
```
