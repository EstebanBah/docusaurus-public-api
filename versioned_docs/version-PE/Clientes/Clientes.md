---
sidebar_position: 30
title: Clientes
description: Crear, editar y listar clientes
slug: /clientes
---


# Clientes
Listar, crear, editar y eliminar clientes. Además podrás consultar pagos a clientes, contar clientes, ver documentos por cliente, agregar direcciones adicionales (casa matriz, sucursal a, b, etc). Endpoints para gestionar tus clientes en Bsale.

Cómo funciona la interfaz de Bsale, mira éstos videos:

- Gestión de clientes [Ver](https://www.youtube.com/watch?v=j5UE9VjaY2w) 

:::info
El RUT, se almacena en el `code`, es importante que valides el identificador antes de enviar.
:::

## Estructura JSON

Al realizar una petición `HTTP`, el servicio retornara un JSON con la siguiente estructura:

```js title="Response /clients.json"
{
  "href": "https://api.bsale.io/v1/clients.json",
  "count": 2,
  "limit": 25,
  "offset": 0,
  "items": [
    {
      "href": "https://api.bsale.io/v1/clients/2.json",
      "id": 2,
      "firstName": "Francisco",
      "lastName": "Pullnm",
      "email": "fpull@gmail.com",
      "state": 0,
      "office": {
        "href": "https://api.bsale.io/v1/offices/1.json",
        "id": "1"
      }
    },
    {
      "href": "https://api.bsale.io/v1/clients/1.json",
      "id": 1,
      "firstName": "Asistente",
      "lastName": "bsale",
      "email": "ayuda@bsale.app",
      "state": 0,
      "office": {
        "href": "https://api.bsale.io/v1/offices/1.json",
        "id": "1"
      }
    }
  ]
}
```

### Atributos
| Atributo      | Descripción | Tipo dato |
| ----------- | ----------- | ----------- |
| **href**      | url del clientes     | String       |
| **id**   | identificador único del clientes   | Integer |
| **firstName** | nombre del cliente | String |
| **lastName** | apellido del cliente | String |
| **code** | rut del cliente | String |
| **phone** | teléfono del cliente | String |
| **company** | empresa del cliente | String |
| **note** | una descripción del cliente | String |
| **facebook** | facebook del cliente | String | 
| **twitter** | twitter del cliente. | String | 
| **hasCredit** | indica si el cliente posee crédito No(0) o Si(1) | Boolean |
| **maxCredit** | monto máximo de crédito del cliente | Float |
| **state** | estado del cliente indica si esta activo(0) o inactivo (1) | Boolean |
| **activity** | giro del cliente | String |
| **city** | ciudad del cliente | String |
| **municipality** | comuna del cliente | String |
| **companyOrPerson** | indica si el cliente es persona natural o empresa (0)Persona o (1)Empresa | Boolean |
| **points** | cantidad de puntos acumulados del cliente | Integer |
| **pointsUpdated** | fecha de la última actualización de puntos | Integer |
| **accumulatePoints** | indica si el cliente acumula puntos No(0) o Si(1) | Boolean |
| **sendDte** | indica si al cliente se le envía el XML del DTE No(0) o Si(1) | Boolean |
| **prestashopClienId** | identificador en prestashop | String |
| **contacts** | nodo que indica la relación con los contactos del cliente. | |
| **attributes** | nodo que indica la relación con los atributos adicionales de un cliente. | | 
| **addresses** | nodo que indica la relación con las direcciones adicionales de un cliente. | |

## GET lista de clientes
- GET `/v1/clients.json` retornará todos los clientes.

#### Parámetros
- **limit**, limita la cantidad de items de una respuesta JSON, por defecto el limit es 25, el máximo permitido es 50.
- **offset**, permite paginar los items de una respuesta JSON, por defecto el offset es 0.
- **fields**, solo devolver atributos específicos de un recurso
- **expand**, permite expandir instancias y colecciones para traer relaciones en una sola petición.
- **code**, Permite filtrar por rut del cliente.
- **firstname**, filtra los clientes por nombre.
- **lastname**, filtra los clientes por apellido.
- **email**, filtra los clientes por email.
- **paymenttypeid**, recupera los clientes con forma de pago.
- **salesconditionid**, recupera los clientes por la condición de venta.
- **state**, boolean (0 o 1) indica si los clientes están activos(0) inactivos (1).
  
#### Ejemplos
- `GET /v1/clients.json?limit=10&offset=0`
- `GET /v1/clients.json?fields=[firstname,lastname]`
- `GET /v1/clients.json?state=0`
- `GET /v1/clients.json?code=12345678-9`
- `GET /v1/clients.json?paymenttypeid=1`
- `GET /v1/clients.json?expand=[contacts,attributes,payment_type]`


```json title="Response /clients.json "
{
  "href": "https://api.bsale.io/v1/clients.json",
  "count": 112,
  "limit": 25,
  "offset": 0,
  "items": [
    {
      "href": "https://api.bsale.io/v1/clients/65.json",
      "id": 65,
      "firstName": "a",
      "lastName": "sa",
      "code": "92.341.000-7",
      "phone": "",
      "company": "a sa",
      "note": "",
      "facebook": "",
      "twitter": "",
      "hasCredit": 1,
      "maxCredit": "10000.0",
      "state": 1,
      "activity": "Sin Giro",
      "city": "",
      "municipality": "",
      "address": "",
      "companyOrPerson": 0,
      "points": 0,
      "pointsUpdated": "",
      "accumulatePoints": 0,
      "sendDte": 0,
      "prestashopClienId": 0,
      "contacts": {
        "href": "https://api.bsale.io/v1/clients/65/contacts.json"
      },
      "attributes": {
        "href": "https://api.bsale.io/v1/clients/65/attributes.json"
      },
      "addresses": {
        "href": "https//api.bsale.io/v1/clients/65/addresses.json"
      }
    },
    {
      "href": "https://api.bsale.io/v1/clients/102.json",
      "id": 102,
      "firstName": "Adriana",
      "lastName": "Talhouk",
      "code": "",
      "phone": "",
      "company": "Adriana Talhouk",
      "note": null,
      "facebook": null,
      "twitter": "",
      "hasCredit": 1,
      "maxCredit": "10000.0",
      "state": 0,
      "activity": "Sin Giro",
      "city": "",
      "municipality": "",
      "address": "",
      "companyOrPerson": 0,
      "points": 0,
      "pointsUpdated": "",
      "accumulatePoints": 0,
      "sendDte": 0,
      "prestashopClienId": 0,
      "contacts": {
        "href": "https://api.bsale.io/v1/clients/102/contacts.json"
      },
      "attributes": {
        "href": "https://api.bsale.io/v1/clients/102/attributes.json"
      },
      "addresses": {
        "href": "https//api.bsale.io/v1/clients/102/addresses.json"
      }
    }
  ]
}
```
## GET un cliente
- GET `/v1/clients/80.json` retornará un cliente específico.

#### Parámetros
- **expand**, permite expandir instancias y colecciones para traer relaciones en una sola petición.
  
#### Ejemplos
- `GET /v1/clients/80.json?expand=[contacts,payment_type]`


```json title="Response /clients/80.json"
{
  "href": "https://api.bsale.io/v1/clients/80.json",
  "id": 80,
  "firstName": "juanito",
  "lastName": "mena",
  "code": "",
  "phone": "",
  "company": "juanito mena",
  "note": null,
  "facebook": null,
  "twitter": "",
  "hasCredit": 1,
  "maxCredit": "10000.0",
  "state": 0,
  "activity": "Sin Giro",
  "city": "",
  "municipality": "",
  "address": "",
  "companyOrPerson": 0,
  "points": 113000,
  "pointsUpdated": 1437577975,
  "accumulatePoints": 1,
  "sendDte": 0,
  "prestashopClienId": 0,
  "contacts": {
    "href": "https://api.bsale.io/v1/clients/80/contacts.json"
  },
  "attributes": {
    "href": "https://api.bsale.io/v1/clients/80/attributes.json"
  },
  "addresses": {
    "href": "https//api.bsale.io/v1/clients/80/addresses.json"
  }
}
```
## GET atributos de un cliente
- GET `/v1/clients/796/attributes.json` Retornará los atributos asociados al cliente.

```json 
{
  "href": "https://api.bsale.io/v1/clients/796/attributes.json",
  "count": 4,
  "limit": 25,
  "offset": 0,
  "items": [
    {
      "href": "https://api.bsale.io/v1/dynamic_attributes/44.json",
      "id": 44,
      "name": "Rubro",
      "value": ""
    },
    {
      "href": "https://api.bsale.io/v1/dynamic_attributes/72.json",
      "id": 72,
      "name": "NOMBRE FANTASIA",
      "value": ""
    },
    {
      "href": "https://api.bsale.io/v1/dynamic_attributes/73.json",
      "id": 73,
      "name": "wefcqwrevgrqebvqerbv",
      "value": ""
    },
    {
      "href": "https://api.bsale.io/v1/dynamic_attributes/76.json",
      "id": 76,
      "name": "Número Cliente",
      "value": ""
    }
  ]
}
```
## GET cantidad de clientes
- GET `/v1/clients/count.json` Retornará cantidades de registros.

- **state**, boolean (0 o 1) indica si los clientess están activos(0) inactivos (1).
  
```json 
{
   "count": 14541
}
```

## Contactos
### GET contactos de un cliente
- GET `/v1/clients/55/contacts.json` retornará los contactos asociados al cliente.

```json
{
  "href": "https://api.bsale.io/v1/clients/4/contacts.json",
  "count": 2,
  "limit": 25,
  "offset": 0,
  "items": [
    {
      "href": "https://api.bsale.io/v1/clients/4/contacts/31.json",
      "id": 31,
      "firstName": "Andres",
      "lastName": "Villanueva",
      "phone": "2220936",
      "email": "a.villanueva@gmail.cl"
    },
    {
      "href": "https://api.bsale.io/v1/clients/4/contacts/32.json",
      "id": 32,
      "firstName": "Juana ",
      "lastName": "Jeldres",
      "phone": "2220928",
      "email": "recepcion@gmail.cl"
    }
  ]
}
```
##### GET un único contacto de un cliente
- GET `/v1/clients/4/contacts/31.json` Retornará un contacto asociado al cliente.
  
```json title="Response /clients/156/attributes/93.json"
{
   "href": "https://api.bsale.io/v1/clients/4/contacts/31.json",
   "id": 31,
   "firstName": "Carlitos",
   "lastName": "Finster ",
   "phone": "2220936",
   "email": "Charles-Chuckie-Finster@rugrats.com"
}
```

### POST un contacto de un cliente
- POST `/v1/clients/55/contacts.json` 

Para crear un contacto de cliente, se debe enviar un JSON con la siguiente estructura:
#### Ejemplo JSON

##### Envío
```json
{
   "firstName": "Tommy",
   "lastName": "Vercetti",
   "phone": "966542311",
   "email": "tvercetti@vc.com"
}
```
##### Respuesta
```json
{
  "href": "https://api.bsale.io/v1/clients/55/contacts/1.json",
  "id": 1,
  "firstName": "Tommy",
  "lastName": "Vercetti",
  "phone": "966542311",
  "email": "tvercetti@vc.com"
}
```
### DELETE un contacto de un cliente
- DELETE `/v1/clients/55/contacts/1.json` Cambia el estado del contacto.

## Direcciones
### GET lista de direcciones de un cliente
- GET `/v1/clients/55/addresses.json` retornará las direcciones asociadas al cliente.

#### Parámetros
- **address**, permite filtrar por dirección (String).
- **city**, permite filtrar por ciudad (String).
- **municipality**, permite filtrar por comuna (String).
- **state**, permite filtrar por estado (Boolean).

#### Ejemplos
- `GET /v1/clients/55/addresses.json?address=la quebrada 1189`
- `GET /v1/clients/55/addresses.json?city=santiago`
- `GET /v1/clients/55/addresses.json?city=santiago&municipality=providencia`
- `GET /v1/clients/55/addresses.json?state=0`

```json
{
  "href": "https://api.bsale.io/v1/clients/55/addresses.json",
  "count": 2,
  "limit": 25,
  "offset": 0,
  "items": [
    {
      "href": "https://api.bsale.io/v1/clients/55/addresses/8.json",
      "id": 8,
      "addressName": "SUC 1",
      "address": "SOTERO SANZ 100",
      "city": "STGO",
      "municipality": "PROVIDENCIA",
      "state": 0
    },
    {
      "href": "https://api.bsale.io/v1/clients/55/addresses/9.json",
      "id": 9,
      "addressName": "SUC 2",
      "address": "PEDRO DE VALDIVIA 200",
      "city": "STGO",
      "municipality": "PROVIDENCIA",
      "state": 0
    }
  ]
}
```
### GET una única dirección de un cliente
- GET `/v1/clients/55/addresses/8.json`

```json
{
  "href": "https://api.bsale.io/v1/clients/55/addresses/8.json",
  "id": 8,
  "addressName": "SUC 1",
  "address": "SOTERO SANZ 100",
  "city": "STGO",
  "municipality": "PROVIDENCIA",
  "state": 0
}
```

### POST una dirección de un cliente
- POST `/v1/clients/55/addresses.json` 

Para crear una dirección de cliente, se debe enviar un JSON con la siguiente estructura:
#### Ejemplo JSON

##### Envío
```json
{
  "addressName": "SUC 3",
  "address": "NUNCIO MONSEÑOR SOTERO SANZ 100, OF. 401",
  "city": "STGO",
  "municipality": "PROVIDENCIA"
}
```
##### Respuesta
```json
{
  "href": "https://api.bsale.io/v1/clients/55/addresses/6.json",
  "id": 6,
  "addressName": "SUC 3",
  "address": "NUNCIO MONSEÑOR SOTERO SANZ 100, OF. 401",
  "city": "STGO",
  "municipality": "PROVIDENCIA",
  "state": 0
}
```

### PUT una dirección de un cliente
- PUT `/v1/clients/55/addresses/6.json` 

Se debe enviar un Json con la siguiente estructura
#### Ejemplo JSON

##### Envío
```json
{
  "addressName": "SUC 4",
  "address": "OF. 401",
  "city": "STGO",
  "municipality": "PROVIDENCIA"
}
```
#### Respuesta
```json
{
  "href": "https://api.bsale.io/v1/clients/55/addresses/6.json",
  "id": 6,
  "addressName": "SUC 4",
  "address": "OF. 401",
  "city": "STGO",
  "municipality": "PROVIDENCIA",
  "state": 0
}
```

### DELETE una dirección de un cliente
- DELETE `/v1/clients/55/addresses/6.json` Cambia el estado de la dirección

#### Respuesta
```json
{
  "href": "https://api.bsale.io/v1/clients/55/addresses/6.json",
  "id": 6,
  "addressName": "SUC 4",
  "address": "OF. 401",
  "city": "STGO",
  "municipality": "PROVIDENCIA",
  "state": 1
}
```

## POST un cliente
- POST `/v1/clients.json` 

Para crear un cliente, se debe enviar un JSON con la siguiente estructura:
### Ejemplo JSON

#### Envío
```json
{
  "facebook": "",
  "municipality": "Las Condes",
  "phone": "66287196",
  "activity": "Venta de ropa",
  "city": "Santiago",
  "maxCredit": 100000,
  "hasCredit": 1,
  "accumulatePoints": 1,
  "lastName": "Paredes",
  "note": "Cliente parodia",
  "firstName": "Armando",
  "company": "Particular",
  "address": "Los trigales 372",
  "email": "armando@paredes.cl",
  "twitter": "",
  "code": "98765432-1"
}
```
 
### Atributos (opcional)
Si se desean crear atributos especiales para el cliente se debe enviar la siguiente estructura.

```json
{
  "facebook": "",
  "municipality": "Las Condes",
  "phone": "66287196",
  "activity": "Venta de ropa",
  "city": "Santiago",
  "maxCredit": 100000,
  "hasCredit": 1,
  "accumulatePoints": 1,
  "lastName": "Muñoz",
  "note": "Cliente premiun",
  "firstName": "Marcela",
  "company": "Particular",
  "address": "Los trigales 372",
  "email": "mmunoz@.email.cl",
  "twitter": "",
  "code": "2-7",
  "dynamicAttributes": [
    {
      "description": "21/03/1983",
      "dynamicAttributeId": 24
    }
  ]
}
```

#### Respuesta
```json
{
  "companyOrPerson": 0,
  "address": "Los trigales 372",
  "lastName": "Muñoz",
  "sendDte": 0,
  "city": "Santiago",
  "state": 0,
  "twitter": "",
  "firstName": "Marcela",
  "id": 67,
  "municipality": "Las Condes",
  "maxCredit": 100000,
  "accumulatePoints": 1,
  "note": "Cliente premiun",
  "phone": "66287196",
  "contacts": {
    "href": "https://api.bsale.io/v1/clients/67/contacts.json"
  },
  "prestashopClienId": 0,
  "activity": "Venta de ropa",
  "hasCredit": 1,
  "facebook": "",
  "company": "Particular",
  "code": "2-7",
  "href": "https://api.bsale.io/v1/clients/67.json"
}
```

#### Cliente extranjero
Si el cliente es extranjero se debe enviar el atributo `isForeigner` en **1**, por defecto este valor es 0, esto es necesario para los documentos de exportación.
```json 
{
  "client": {
    "city": "Hawai",
    "company": "Mountain Apple Company Inc",
    "municipality": "Honolulu",
    "activity": "Musician",
    "address": "izhawaii dot com #100 street",
    "email": "Israel@Kamakawiwo.ole",
    "isForeigner": 1
  }
}
```
:::tip
Los clientes marcados como extranjeros (`isForeigner`) se declararán con el DNI, NIT, PASAPORTE o identificador ingresado en el atributo `code`. Si el dato ingresado supera los 8 digitos sólo se enviarán los últimos 8 digitos registrados.
:::

## PUT un cliente
- PUT `/v1/clients/67.json` 

Se debe enviar un Json con la siguiente estructura
### Ejemplo JSON

#### Envío
```json
{
  "id": "67",
  "facebook": "",
  "municipality": "Puerto Montt",
  "phone": "66287196",
  "activity": "Venta de ropa",
  "city": "Puerto Montt",
  "maxCredit": 100000,
  "hasCredit": 1,
  "lastName": "Muñoz",
  "note": "Cliente premiun",
  "firstName": "Marcela",
  "company": "Particular",
  "address": "Los trigales 372",
  "email": "mmunoz@.email.cl",
  "twitter": "",
  "accumulatePoints": 1,
  "priceListId": 0
}
```
#### Respuesta
```json
{
  "companyOrPerson": 0,
  "address": "Los trigales 372",
  "lastName": "Muñoz",
  "sendDte": 0,
  "city": "Puerto Montt",
  "state": 0,
  "twitter": "",
  "firstName": "Marcela",
  "id": 67,
  "municipality": "Puerto Montt",
  "maxCredit": 100000,
  "accumulatePoints": 1,
  "note": "Cliente premiun",
  "phone": "66287196",
  "contacts": {
    "href": "https://api.bsale.io/v1/clients/67/contacts.json"
  },
  "prestashopClienId": 0,
  "activity": "Venta de ropa",
  "hasCredit": 1,
  "facebook": "",
  "company": "Particular",
  "code": "2-7",
  "href": "https://api.bsale.io/v1/clients/67.json"
}
```

## DELETE un cliente virtualmente
- DELETE `/v1/clients/30.json` 
Cambia el estado del cliente

:::danger
El cliente no estará visible mediante interfaz y tendrá un `state` 99. Sus documentos asociado **NO** se eliminarán.
:::

```json
{
  "href": "https://api.bsale.io/v1/clients/30.json",
  "id": 30,
  "firstName": "Andres",
  "lastName": "Vasquez",
  "code": "1-9",
  "phone": "220800",
  "company": "Servicios varios",
  "note": "",
  "facebook": "",
  "twitter": "",
  "hasCredit": 1,
  "maxCredit": "9100",
  "state": 1,
  "activity": "",
  "city": "Puerto Montt",
  "municipality": "Puerto Montt",
  "address": "Avda. Diego Portales 100",
  "companyOrPerson": 1,
  "sendDte": 0,
  "prestashopClienId": 0,
  "payment_type": {
    "href": "https://api.bsale.io/v1/payment_types/2.json",
    "id": "2"
  },
  "sale_condition": {
    "href": "https://api.bsale.io/v1/sale_conditions/1.json",
    "id": "2"
  },
  "contacts": {
    "href": "https://api.bsale.io/v1/clients/30/contacts.json"
  }
}
```

## PUT puntos de cliente
- PUT `/v1/clients/points.json` 

### Parámetros
- **type**, 0 aumenta, 1  resta puntos (Boolean)
- **clientId**, Id de cliente (integer).
- **description**, Descripción asociada al registro (String)
- **points**, Cantidad de puntos a registrar (integer)
- **orderId**, Id registro asociado (opcional) (String)

```json title="Response /clients/points.json?clientId=54"
{
  "type": 0,
  "clientId": 18,
  "description": "Suma puntos 2",
  "points": 1,
  "orderId": "1"
}
```