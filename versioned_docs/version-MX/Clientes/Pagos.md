---
sidebar_position: 31
title: Pagos
description: Crear, editar y pagos de pagos
slug: /pagos
---


# Pagos
Listar pagos, agrupados por forma de pago. Crear pagos a documentos. Pagos de crédito cliente, cheques.

## Estructura JSON

Al realizar una petición `HTTP`, el servicio retornara un JSON con la siguiente estructura:

```json title="Response /payments.json"
{
    "href": "https://api.bsale.io/v1/payments.json",
    "count": 2365,
    "limit": 3,
    "offset": 0,
    "items": [
        {
            "href": "https://api.bsale.io/v1/payments/1280.json",
            "id": 1280,
            "recordDate": "",
            "amount": 68000.0,
            "operationNumber": null,
            "accountingDate": "",
            "checkDate": null,
            "checkNumber": null,
            "checkAmount": null,
            "checkTaken": 0,
            "isCreditPayment": 0,
            "createdAt": 1584993084,
            "state": 0,
            "payment_type": {
                "href": "https://api.bsale.io/v1/payment_types/4.json",
                "id": "4"
            },
            "document": {
                "href": "https://api.bsale.io/v1/documents/1528.json",
                "id": "1528"
            },
            "office": {
                "href": "https://api.bsale.io/v1/offices/1.json",
                "id": "1"
            },
            "user": {
                "href": "https://api.bsale.io/v1/users/2.json",
                "id": "2"
            }
        },
        {
            "href": "https://api.bsale.io/v1/payments/1927.json",
            "id": 1927,
            "recordDate": "",
            "amount": 11900.0,
            "operationNumber": null,
            "accountingDate": "",
            "checkDate": null,
            "checkNumber": null,
            "checkAmount": null,
            "checkTaken": 0,
            "isCreditPayment": 0,
            "createdAt": 1608441509,
            "state": 0,
            "payment_type": {
                "href": "https://api.bsale.io/v1/payment_types/10.json",
                "id": "10"
            },
            "document": {
                "href": "https://api.bsale.io/v1/documents/2343.json",
                "id": "2343"
            },
            "office": {
                "href": "https://api.bsale.io/v1/offices/1.json",
                "id": "1"
            },
            "user": {
                "href": "https://api.bsale.io/v1/users/2.json",
                "id": "2"
            }
        },
        {
            "href": "https://api.bsale.io/v1/payments/1929.json",
            "id": 1929,
            "recordDate": "",
            "amount": 11900.0,
            "operationNumber": null,
            "accountingDate": "",
            "checkDate": null,
            "checkNumber": null,
            "checkAmount": null,
            "checkTaken": 0,
            "isCreditPayment": 0,
            "createdAt": 1608441526,
            "state": 0,
            "payment_type": {
                "href": "https://api.bsale.io/v1/payment_types/10.json",
                "id": "10"
            },
            "document": {
                "href": "https://api.bsale.io/v1/documents/2345.json",
                "id": "2345"
            },
            "office": {
                "href": "https://api.bsale.io/v1/offices/1.json",
                "id": "1"
            },
            "user": {
                "href": "https://api.bsale.io/v1/users/2.json",
                "id": "2"
            }
        }
    ],
    "next": "https://api.bsale.io/v1/payments.json?limit=3&offset=3"
}
```

### Atributos
| Atributo      | Descripción | Tipo dato |
| ----------- | ----------- | ----------- |
| **href**      | url del pago     | String       |
| **id**   | identificador único del pago  | Integer |
| **recordDate**   | fecha en que se realizo el pago | Integer|
| **amount**   | monto del pago | Float|
| **checkDate**   | fecha del cheque | Integer|
| **checkNumber**   | numero del cheque | Integer|
| **checkAmount**   | monto del cheque | Float|
| **checkTaken**   | indica si el cheque con que se realizo el pago fue cobrado | Boolean|
| **isCreditPayment**   | indica si el pago es realizado a un crédito adeudado (0 o 1). | Boolean |
| **createdAt**   | fecha de cuando fue creado el pago | Integer |
| **state**   | (0 o 1) indica si el pago esta activos(0) inactivos(1). | Boolean |
| **payment_type**   | nodo que indica la forma de pago en la cual se realizo el pago. | |
| **document**   | nodo que indica a que documento se le realizo el pago. | |
| **documents**   | arreglo que indica a que documentos se realizó el pago de un crédito adeudado (solo cuando isCreditPayment = 1). | |
| **office**   | nodo que indica la sucursal donde se realizo el pago. | |
| **user**   | nodo que indica el usuario que realizo el pago. | |

## GET lista de pagos
- GET `/v1/payments.json` retornará todos los pagos.

#### Parámetros
- **limit**, limita la cantidad de items de una respuesta JSON, por defecto el limit es 25, el máximo permitido es 50.
- **offset**, permite paginar los items de una respuesta JSON, por defecto el offset es 0.
- **fields**, solo devolver atributos específicos de un recurso
- **expand**, permite expandir instancias y colecciones para traer relaciones en una sola petición.
- **recorddate**, Permite filtrar por fecha del pago.
- **documentid**, Permite filtrar por el id del documento.
- **number**, filtra documentos por el folio.
- **state**, boolean (0 o 1) indica si los pagos están activos(0) inactivos(1).
  
#### Ejemplos
- `GET /v1/payments.json?limit=10&offset=0`
- `GET /v1/payments.json?recorddate=1393642800`
- `GET /v1/payments.json?documentid=856`
- `GET /v1/payments.json?codesii=33&number=10`
- `GET /v1/payments.json?expand=[office,payment_type]`


```json title="Response /payments.json "
{
  "href": "https://api.bsale.io/v1/payments.json",
  "count": 155881,
  "limit": 3,
  "offset": 0,
  "items": [
      {
      "href": "https://api.bsale.io/v1/payments/79.json",
      "id": 79,
      "recordDate": 1548720000,
      "amount": 6000,
      "operationNumber": null,
      "accountingDate": "",
      "checkDate": null,
      "checkNumber": null,
      "checkAmount": null,
      "checkTaken": 0,
      "isCreditPayment": 0,
      "createdAt": 1548768524,
      "state": 0,
      "payment_type": {
          "href": "https://api.bsale.io/v1/payment_types/4.json",
          "id": "4"
      },
      "document": {
          "href": "https://api.bsale.io/v1/documents/195.json",
          "id": "195"
      },
      "office": {
          "href": "https://api.bsale.io/v1/offices/1.json",
          "id": "1"
      },
      "user": {
          "href": "https://api.bsale.io/v1/users/1.json",
          "id": "1"
      }
    },
    {
      "href": "https://api.bsale.io/v1/payments/78.json",
      "id": 78,
      "recordDate": 1548720000,
      "amount": 29142,
      "operationNumber": null,
      "accountingDate": "",
      "checkDate": null,
      "checkNumber": null,
      "checkAmount": null,
      "checkTaken": 0,
      "isCreditPayment": 1,
      "createdAt": 1548768418,
      "state": 0,
      "payment_type": {
          "href": "https://api.bsale.io/v1/payment_types/4.json",
          "id": "4"
      },
      "documents": [
          {
              "href": "https://api.bsale.io/v1/documents/194.json",
              "id": "194",
              "amount": 2002
          },
          {
              "href": "https://api.bsale.io/v1/documents/195.json",
              "id": "195",
              "amount": 6000
          },
          {
              "href": "https://api.bsale.io/v1/documents/196.json",
              "id": "196",
              "amount": 21140
          }
      ],
      "office": {
          "href": "https://api.bsale.io/v1/offices/1.json",
          "id": "1"
      },
      "user": {
          "href": "https://api.bsale.io/v1/users/1.json",
          "id": "1"
      }
    }
  ],
  "next": "https://api.bsale.io/v1/payments.json?limit=3\u0026offset=3"
}
```
## GET un pago
- GET `/v1/payments/950.json` retornará un pago específico.

#### Parámetros
- **expand**, permite expandir instancias y colecciones para traer relaciones en una sola petición.
  
#### Ejemplos
- `GET /v1/payments/950.json?expand=[user,office]`


```json title="Response /payments/950.json"
{
  "href": "https://api.bsale.io/v1/payments/950.json",
  "id": 950,
  "recordDate": 1396494000,
  "amount": "68643.0",
  "checkDate": null,
  "checkNumber": null,
  "checkAmount": "0",
  "state": 0,
  "payment_type": {
    "href": "https://api.bsale.io/v1/payment_types/1.json",
    "id": "1"
  },
  "document": {
    "href": "https://api.bsale.io/v1/documents/3285.json",
    "id": "3285"
  },
  "office": {
    "href": "https://api.bsale.io/v1/offices/2.json",
    "id": "2"
  },
  "user": {
    "href": "https://api.bsale.io/v1/users/7.json",
    "id": "7"
  }
}
```
## GET pagos agrupados por forma de pago
- GET `/v1/payments/group_payment_types.json` Retornará todos los pagos realizados.

#### Parámetros
- **limit**, limita la cantidad de items de una respuesta JSON, por defecto el limit es 25, el máximo permitido es 50.
- **offset**, permite paginar los items de una respuesta JSON, por defecto el offset es 0.
- **fields**, solo devolver atributos específicos de un recurso
- **expand**, permite expandir instancias y colecciones para traer relaciones en una sola petición.
- **recorddate**, Permite filtrar por fecha del pago.
- **codesii**, Código documento basado en los identificadores del SII, pueden ser varios separados por coma.
- **documentid**, Permite filtrar por el id del documento.
- **officeid**, filtra por sucursal.
- **paymenttypeid**, filtra por forma id de pago.

#### Ejemplos
- `GET /v1/payments/group_payment_types.json?limit=10&offset=0` 
- `GET /v1/payments/group_payment_types.json?recorddate=1393642800` 
```json 
  [
  {
    "recordDate": 1396494000,
    "paymentTypeTotalAmount": 40906.0,
    "paymentTypeId": 1,
    "paymentTypeName": "Efectivo",
    "paymentLedgerAccount": null,
    "isCheck": 0,
    "isCreditNote": 0,
    "isClientCredit": 0,
    "isCash": 1,
    "isCreditMemo": 0,
    "codesii": "35",
    "officeId": 1,
    "officeName": "Puerto Varas",
    "officeCostCenter": "",
    "details": [

    ]
  },
  {
    "recordDate": 1396494000,
    "paymentTypeTotalAmount": 174592.0,
    "paymentTypeId": 1,
    "paymentTypeName": "Efectivo",
    "paymentLedgerAccount": null,
    "isCheck": 0,
    "isCreditNote": 0,
    "isClientCredit": 0,
    "isCash": 1,
    "isCreditMemo": 0,
    "codesii": "39",
    "officeId": 2,
    "officeName": "Los Angeles",
    "officeCostCenter": "",
    "details": [

    ]
  },
  {
    "recordDate": 1396494000,
    "paymentTypeTotalAmount": 75204.0,
    "paymentTypeId": 2,
    "paymentTypeName": "Tarjeta de Crédito",
    "paymentLedgerAccount": null,
    "isCheck": 0,
    "isCreditNote": 0,
    "isClientCredit": 0,
    "isCash": 0,
    "isCreditMemo": 0,
    "codesii": "35",
    "officeId": 1,
    "officeName": "Puerto Varas",
    "officeCostCenter": "",
    "details": [
      {
        "name": "Nº Comprobante",
        "value": ""
      }
    ]
  },
  {
    "recordDate": 1396494000,
    "paymentTypeTotalAmount": 54328.0,
    "paymentTypeId": 2,
    "paymentTypeName": "Tarjeta de Crédito",
    "paymentLedgerAccount": null,
    "isCheck": 0,
    "isCreditNote": 0,
    "isClientCredit": 0,
    "isCash": 0,
    "isCreditMemo": 0,
    "codesii": "39",
    "officeId": 2,
    "officeName": "Los Angeles",
    "officeCostCenter": "",
    "details": [
      {
        "name": "Nº Comprobante",
        "value": ""
      }
    ]
  },
  {
    "recordDate": 1396494000,
    "paymentTypeTotalAmount": 816873.0,
    "paymentTypeId": 4,
    "paymentTypeName": "Crédito",
    "paymentLedgerAccount": "",
    "isCheck": 0,
    "isCreditNote": 0,
    "isClientCredit": 1,
    "isCash": 0,
    "isCreditMemo": 0,
    "codesii": "33",
    "officeId": 1,
    "officeName": "Puerto Varas",
    "officeCostCenter": "",
    "details": [

    ]
  },
  {
    "recordDate": 1396494000,
    "paymentTypeTotalAmount": 16373.0,
    "paymentTypeId": 5,
    "paymentTypeName": "Cheque",
    "paymentLedgerAccount": "",
    "isCheck": 1,
    "isCreditNote": 0,
    "isClientCredit": 0,
    "isCash": 0,
    "isCreditMemo": 0,
    "codesii": "39",
    "officeId": 2,
    "officeName": "Los Angeles",
    "officeCostCenter": "",
    "details": [
      {
        "name": "Banco",
        "value": ""
      },
      {
        "name": "Número",
        "value": ""
      }
    ]
  },
  {
    "recordDate": 1396494000,
    "paymentTypeTotalAmount": 32658.0,
    "paymentTypeId": 6,
    "paymentTypeName": "Tarjeta de Débito",
    "paymentLedgerAccount": "",
    "isCheck": 0,
    "isCreditNote": 0,
    "isClientCredit": 0,
    "isCash": 0,
    "isCreditMemo": 0,
    "codesii": "39",
    "officeId": 2,
    "officeName": "Los Angeles",
    "officeCostCenter": "",
    "details": [
      {
        "name": "N Operacion",
        "value": ""
      }
    ]
  }
]
```
## GET documentos de venta
- GET `/v1/clients/purchases.json` retornará los documentos asociados al cliente.

#### Parámetros
- **clientid**, Permite filtrar por id del cliente.
- **code**, Permite filtrar por rfc del cliente.
  
#### Ejemplos
- `GET /v1/clients/purchases.json?code=XAXX010101000`
- `GET /v1/clients/purchases.json?clientid=7`


```json title="Response /clients/purchases.json"
{
  "href": "https://api.bsale.io/v1/documents.json",
  "count": 43,
  "limit": 3,
  "offset": 0,
  "items": [
    {
      "href": "https://api.bsale.io/v1/documents/1.json",
      "id": 1,
      "emissionDate": 1519084800,
      "expirationDate": 1519084800,
      "generationDate": 1519147082,
      "number": 1,
      "totalAmount": 12979,
      "netAmount": 10907,
      "taxAmount": 2072,
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
      "address": "Cerro El Plomo 5855, Las Condes, Mx",
      "municipality": "Las Condes",
      "city": "Mx",
      "urlTimbre": null,
      "ted": null,
      "urlPublicView": "http://app2.bsale.cl/view/18790/d132cb4d5f82?sfd=99",
      "urlPdf": "http://app2.bsale.cl/view/18790/d132cb4d5f82.pdf?sfd=99",
      "urlPublicViewOriginal": "http://app2.bsale.cl/view/18790/d132cb4d5f82",
      "urlPdfOriginal": "http://app2.bsale.cl/view/18790/d132cb4d5f82.pdf",
      "token": "d132cb4d5f82",
      "state": 0,
      "urlXml": "https://api.bsale.io/v1/18790/files/d132cb4d5f82.xml",
      "informedSii": 2,
      "responseMsgSii": null,
      "document_type": {
        "href": "https://api.bsale.io/v1/document_types/5.json",
        "id": "5"
      },
      "client": {
        "href": "https://api.bsale.io/v1/payments/412.json",
        "id": "412"
      },
      "office": {
        "href": "https://api.bsale.io/v1/offices/1.json",
        "id": "1"
      },
      "user": {
        "href": "https://api.bsale.io/v1/users/5.json",
        "id": "5"
      },
      "coin": {
        "href": "https://api.bsale.io/v1/coins/1.json",
        "id": "1"
      },
      "references": {
        "href": "https://api.bsale.io/v1/documents/1/references.json"
      },
      "document_taxes": {
        "href": "https://api.bsale.io/v1/documents/1/document_taxes.json"
      },
      "details": {
        "href": "https://api.bsale.io/v1/documents/1/details.json"
      },
      "sellers": {
        "href": "https://api.bsale.io/v1/documents/1/sellers.json"
      },
      "attributes": {
        "href": "https://api.bsale.io/v1/documents/1/attributes.json"
      }
    },
    {
      "href": "https://api.bsale.io/v1/documents/25.json",
      "id": 25,
      "emissionDate": 1519257600,
      "expirationDate": 1519257600,
      "generationDate": 1519309484,
      "number": 1,
      "totalAmount": 123456789,
      "netAmount": 103745201,
      "taxAmount": 19711588,
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
      "address": "Cerro El Plomo 5855, Las Condes, Mx",
      "municipality": "Las Condes",
      "city": "Mx",
      "urlTimbre": null,
      "ted": null,
      "urlPublicView": "http://app2.bsale.cl/view/18790/8a350bb0a82d?sfd=99",
      "urlPdf": "http://app2.bsale.cl/view/18790/8a350bb0a82d.pdf?sfd=99",
      "urlPublicViewOriginal": "http://app2.bsale.cl/view/18790/8a350bb0a82d",
      "urlPdfOriginal": "http://app2.bsale.cl/view/18790/8a350bb0a82d.pdf",
      "token": "8a350bb0a82d",
      "state": 0,
      "urlXml": "https://api.bsale.io/v1/18790/files/8a350bb0a82d.xml",
      "informedSii": 2,
      "responseMsgSii": null,
      "document_type": {
        "href": "https://api.bsale.io/v1/document_types/3.json",
        "id": "3"
      },
      "client": {
        "href": "https://api.bsale.io/v1/payments/412.json",
        "id": "412"
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
        "href": "https://api.bsale.io/v1/documents/25/references.json"
      },
      "document_taxes": {
        "href": "https://api.bsale.io/v1/documents/25/document_taxes.json"
      },
      "details": {
        "href": "https://api.bsale.io/v1/documents/25/details.json"
      },
      "sellers": {
        "href": "https://api.bsale.io/v1/documents/25/sellers.json"
      },
      "attributes": {
        "href": "https://api.bsale.io/v1/documents/25/attributes.json"
      }
    },
    {
      "href": "https://api.bsale.io/v1/documents/2.json",
      "id": 2,
      "emissionDate": 1519084800,
      "expirationDate": 1519084800,
      "generationDate": 1519147134,
      "number": 2,
      "totalAmount": 3570,
      "netAmount": 3000,
      "taxAmount": 570,
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
      "address": "Cerro El Plomo 5855, Las Condes, Mx",
      "municipality": "Las Condes",
      "city": "Mx",
      "urlTimbre": null,
      "ted": null,
      "urlPublicView": "http://app2.bsale.cl/view/18790/960ca7eb7519?sfd=99",
      "urlPdf": "http://app2.bsale.cl/view/18790/960ca7eb7519.pdf?sfd=99",
      "urlPublicViewOriginal": "http://app2.bsale.cl/view/18790/960ca7eb7519",
      "urlPdfOriginal": "http://app2.bsale.cl/view/18790/960ca7eb7519.pdf",
      "token": "960ca7eb7519",
      "state": 0,
      "urlXml": "https://api.bsale.io/v1/18790/files/960ca7eb7519.xml",
      "informedSii": 2,
      "responseMsgSii": null,
      "document_type": {
        "href": "https://api.bsale.io/v1/document_types/5.json",
        "id": "5"
      },
      "client": {
        "href": "https://api.bsale.io/v1/payments/412.json",
        "id": "412"
      },
      "office": {
        "href": "https://api.bsale.io/v1/offices/1.json",
        "id": "1"
      },
      "user": {
        "href": "https://api.bsale.io/v1/users/5.json",
        "id": "5"
      },
      "coin": {
        "href": "https://api.bsale.io/v1/coins/1.json",
        "id": "1"
      },
      "references": {
        "href": "https://api.bsale.io/v1/documents/2/references.json"
      },
      "document_taxes": {
        "href": "https://api.bsale.io/v1/documents/2/document_taxes.json"
      },
      "details": {
        "href": "https://api.bsale.io/v1/documents/2/details.json"
      },
      "sellers": {
        "href": "https://api.bsale.io/v1/documents/2/sellers.json"
      },
      "attributes": {
        "href": "https://api.bsale.io/v1/documents/2/attributes.json"
      }
    }
  ],
  "next": "https://api.bsale.io/v1/documents.json?limit=3&offset=3"
}
```

## GET documentos pendientes de pago
- GET `/v1/clients/unpaid_documents.json` retornará los documentos pendientes de pago asociados al cliente.

#### Parámetros
- **clientid**, Permite filtrar por id del cliente.
- **code**, Permite filtrar por rfc del cliente.
- **comparisondate**, Permite separar los documentos vencidos de los por vencer, por defecto es la fecha del momento de la consulta
  
#### Ejemplos
- `GET /v1/clients/unpaid_documents.json?code=XAXX010101000`
- `GET /v1/clients/unpaid_documents.json?clientid=1`
- `GET /v1/clients/unpaid_documents.json?comparisondate=1437436800`
- `GET /v1/clients/unpaid_documents.json?code=XAXX010101000&comparisondate=1437436800`

```json title="Response /payments/purchases.json"
{
  "overdueDebt": 40000,
  "upcomingDebt": 30000,
  "totalDebt": 70000,
  "client": {
    "href": "https://api.bsale.io/v1/payments/1.json",
    "id": 1,
    "firstName": "Roberto",
    "lastName": "",
    "code": "XAXX010101000",
    "company": "Público en general"
  },
  "overdue_documents": [
    {
      "href": "https://api.bsale.io/v1/documents/6514.json",
      "id": 6514,
      "name": "Factura Electronica",
      "number": 123123123217,
      "emissionDate": 1437436800,
      "expirationDate": 1437436800,
      "totalAmount": 20000,
      "totalAmountOwed": 20000
    },
    {
      "href": "https://api.bsale.io/v1/documents/6515.json",
      "id": 6515,
      "name": "Factura Electronica",
      "number": 123123123218,
      "emissionDate": 1437436800,
      "expirationDate": 1437436800,
      "totalAmount": 20000,
      "totalAmountOwed": 20000
    }
  ],
  "upcoming_documents": [
    {
      "href": "https://api.bsale.io/v1/documents/6520.json",
      "id": 6520,
      "name": "Factura Electronica",
      "number": 123123123220,
      "emissionDate": 1437523200,
      "expirationDate": 1440201600,
      "totalAmount": 30000,
      "totalAmountOwed": 30000
    }
  ]
}
```
- **overdueDebt**, deuda vencida (Float).
- **upcomingDebt**, deuda por vencer (Float).
- **totalDebt**, deuda total (Float).
- **client**, nodo que indica el cliente al cual se le emitieron los documentos.
- **overdue_documents**, nodo que indica los documentos vencidos.
- **upcoming_documents**, nodo que indica los documentos por vencer.

## GET cantidad de pagos
- GET `/v1/payments/count.json` Retornará cantidades de registros.

- **state**, boolean (0 o 1) indica si los pagoss están activos(0) inactivos (1).
  
```json 
{
   "count": 1989
}
```

## POST un pago
- POST `/v1/payments.json` 

:::note

Se espera que un pago sea posterior, siempre y cuando el documento a pagar, en su concepción, su forma de pago (`paymentTypeId`) sea del tipo **crédito**.

:::

Para crear un pago, se debe enviar un JSON con la siguiente estructura:
### Ejemplo JSON

#### Envío
```json
{
  "recordDate": 1436214454,
  "amount": 3791,
  "documentId": 3004,
  "paymentTypeId": 11
}
```
- **recorddate**, Fecha en formato UNIX del pago.
- **documentid**, id del documento a pagar.
- **amount**, monto del pago.
- **paymentTypeId**, id forma de pago asociada

### Atributos (opcional)
Si se desean crear atributos especiales para el pagose debe enviar la siguiente estructura.
```json
{
  "recordDate": 1436214454,
  "amount": 3791,
  "documentId": 3004,
  "paymentTypeId": 11,
  "dynamicAttributes": [
      {
        "description": "comprobante 123456",
        "dynamicAttributeId": 1
      }
  ]
}
```
- **description**, Descripción del pago (String).
- **dynamicAttributeId**, id del atributo (Integer).
#### Respuesta
```json
{
  "href": "https://api.bsale.io/v1/payments/4873.json",
  "id": 4873,
  "recordDate": 1436214454,
  "amount": 3791,
  "checkDate": null,
  "checkNumber": null,
  "checkAmount": null,
  "checkTaken": 0,
  "state": 0,
  "payment_type": {
    "href": "https://api.bsale.io/v1/payment_types/11.json",
    "id": "11"
  },
  "document": {
    "href": "https://api.bsale.io/v1/documents/3004.json",
    "id": "3004"
  },
  "office": {
    "href": "https://api.bsale.io/v1/offices/2.json",
    "id": "2"
  },
  "user": {
    "href": "https://api.bsale.io/v1/users/2.json",
    "id": "2"
  }
}
```
