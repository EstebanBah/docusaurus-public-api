---
sidebar_position: 10
title: Factura Global
description: Crear y listar facturas globales
slug: /factura-global
---

# Factura Global
Listar tickets de venta generados en Bsale para confeccionar una factura global. 

:::info
**Crear documentos globales** 
:::

## Estructura JSON

Al realizar una petición `HTTP`, el servicio retornara un JSON con la siguiente estructura:

```js title="Response /ticket_invoice/global.json"
{
    "href": "https://api.bsale.io/v2/ticket_invoice/global.json",
    "count": 1,
    "limit": 25,
    "offset": 0,
    "items": [
        {
            "documentId": 569,
            "numDoc": 26,
            "documentStatus": 0,
            "commercialStatus": 0,
            "docGenerationDate": 1684772084,
            "netAmount": 2353.75,
            "exemptAmount": 0,
            "taxAmount": 188.3,
            "totalAmount": 2542.05,
            "urlPdf": "http://s3.amazonaws.com/bsale/12345/timbres/AAc9fcSS46.png",
            "urlXml": "https://bsale.s3.amazonaws.com/12345/cfdi/646b94f5e0c21fd7f0abc151.xml",
            "documentToken": "AAc9fcSS46",
            "documentType": 37,
            "idClient": 18,
            "idOffice": 3,
            "urlPublicDocument": "https://app.bsale.com.mx/view/12345/AAc9fcSS46",
            "vdtExtra": {
                "id": "646b94c21fd7f0abc151",
                "uuid": "7dfce91a-47ed-4981-8ec1-e94bf4334",
                "cfdStamp": "U8Js+k0WtkIxIknwv55OZkN48QaH4d5NgJE6iAjGgDuOBCVxdF2tnlfNR7RutPQc4QEuKrFnY/NnpO/Eu5ABZumGdlpTPhwrBSxz3ir0hlQ1Urj4uRMWVlCs4oHGxb/oPeh7khdGlkOFHJui3ncLHYRLW7Bd2tnH3jqy2GE0qEK96KNhxPdaREkKHUyvFLAK7FxxkPsvilbipgcH2rL6FIQMoHWA+Sd8dlDgbe4OWZFVXTZbY7Oc8M5cOnojthVZIKYbpVPM396kEQcJoua71l7Lu9aa+KcS4G59T3Y5l5nEC1EG63a8SXunOQg6kiM5su09w==",
                "qrBase64": "iVBORw0KGgoAAAANSAAn0ifiaAAAABlBMVEX///8AAABVwtN+AAACn0lEQVR42rTTwUrzWBQH8HNpSfygmA/ctCjemU27jRTaBKR1dDvgK2Ro0Y1gsZsOdx5WFrKwbahFd/PISQ6thoHVqdodSgBAJ4oN0a7SrXPvb8K6XZO0OajDhhjxWEEhkVHoVifKP14QAEGaSJzeZfdvZrQCrGKweqfP8aDhYZ4WufReUlVKdS78SgIL5/qYPuy1ei4ZUXoixplg67AsfwArHpw11SpXcbL/Dmzm3+akQAtVzh0l60i/3YKbCyN90N4NQa9YOtlwTCIoPjWQejLh/kgP1YvV/W0d1HSNSmTnxrgHP/dfOrGsiNKVy68LRnh2TL7nHCFL3eWYsArOGh/px31o37U1bobbFa0vjBSw65wAshKm74al9JV+UkJrpREeoVe1rceXoEV8DI9NGb43zSXhOizGBAASUVORK5CYII=",
                "satStamp": "hMm/Q8r+ghcWGjwQYMQhT7iTwsJ49DCw/mSzzBmLJP4pZmJ66HtB2n7/gL1mYbnNR2uZYKCN8O8EqxFA27PqplSdxeDRWGsbz6HPZ0LPRA98t3SVke85gNFEFssO+42O+uueMPpZOIyUq5B8T/aR9web2xQKSAuFVU5sUkN2wTbOUohnSEZMycJKWDqVLoES5GO5grz1vj29rxnDVpmHgBnQu3fStk73a/gLeBMYAw09D0/4WRTdLtJyFMuM1JE+HVDuuhgj2OZKLfAiAx4qye8zBfv5LwCuf4mgIyP5yss6apVvNeWGkEJUAkHGg==",
                "stampDate": "2023-05-22T10:14:45",
                "csdCerNumber": "00001000000509963201",
                "satCerNumber": "00001000000509846663",
                "serialNumber": "FG00",
                "originalChain": "||4.0|FG00|26|2023-05-22T07:14:00|04|00001000000509963201|2353.75|MXN|2542.05|I|01|PUE|22427|02|05|2023|SCT166615AM3|SANTA CLAUS CORP|601|XAXX010101000|Publico General|22427|616|S01|01010101|1684772084|1|ACT|Factura global|2353.75|2353.75|02|2353.75|002|Tasa|0.080000|188.300000|2353.75|002|Tasa|0.080000|188.30|188.30||",
                "fullSerialNumber": "FG00-26"
            },
            "period": 2,
            "periodicityMonth": "5",
            "periodicityYear": "2023",
            "informed": 0,
            "expirationDate": 1684713600,
            "emissionDate": 1684713600,
            "cpnId": 12345
        }
    ],
    "totalAmountDocuments": 2542.05
}
```

### Atributos
| Atributo      | Descripción | Tipo dato |
| ----------- | ----------- | ----------- |
| **href**      | url del documento       | String       |
| **documentId**   | Id del documento generado por Bsale       | Integer        |
| **numDoc**   | Número del documento        | Integer        |
|  **documentStatus**   | estado del documento indica si el documento esta activo(0) o inactivo (1)         | Boolean        |
| **commercialStatus**   |          |         |
| **docGenerationDate**   | fecha y hora en que se genero el documento        | Integer        |
| **totalAmount**   | monto total del documento        | Float        |
| **netAmount**   | monto neto del documento        | Float        |
| **taxAmount**   | monto de impuestos del documento        | Float        |
| **exemptAmount**   | monto exento del documento        | Float        |
|  **urlPdf**   | url del pdf del documento, con todas sus copias         | Text        |
|  **urlXml**   | respaldo del documento electrónico         | String        |
|  **documentToken**   | token único del documento        | String        |
| **documentType**   | nodo que indica el tipo del documento al cual pertenece el documento.        | Text        |
| **idClient**   | Id del cliente utilizado en el documento.        | Integer        |
| **client**   | nodo que indica el cliente al cual se le emitió el documento.        | *****        |
| **idOffice**   | Id de la sucursal a la cual se asoció el documento.        | Integer        |
| **office**   | nodo que indica la sucursal a la cual pertenece el documento.        | *****        |
| **urlPublicDocument**   | url publica para visualizar el documento, con todas sus copias         | Text        |
| **id**   | id documento electrónico        | Text        |
| **uuid**   | uuid sat        | Text        |
| **cfdStamp**   | Timbre SAT del documento        | Text        |
| **qrBase64**   | Timbre SAT del documento        | Text        |
| **satStamp**   | Timbre SAT del documento        | Text        |
| **stampDate**   | Fecha timbre SAT del documento        | Float        |
| **csdCerNumber**   | Timbre SAT del documento        | Text        |
| **satCerNumber**   | Timbre SAT del documento        | Text        |
| **serialNumber**   | Número de serie del documento        | Text        |
| **originalChain**   | Cadena original del documento        | Text        |
| **fullSerialNumber**   | Número de serie completo del documento        | Text        |
|  **period**   | Periodicidad del documento        | Integer        |
|  **periodicityMonth**   | Mes del documento        | Integer        |
|  **periodicityYear**   | Año del documento        | Integer        |
|  **informed**   | Estado electrónico del documento        | Integer        |
| **emissionDate**   | fecha de emisión del documento (Integer) (no se debe aplicar zona horaria, solo considerar la fecha).        | Integer        |
| **expirationDate**   | fecha de vencimiento del documento (Integer) (no se debe aplicar zona horaria, solo considerar la fecha)        | Integer        |
|  **cpnId**   | Id único de la empresa (generado por Bsale)        | Integer        |
|  **totalAmountDocuments**   | Suma de los montos de los tickets encontrados ignorando la paginación (siempre se obtiene el total de los tickets encontrados según las fechas y filtros enviados)      | Boolean        |


## GET tickets disponibles
- GET `/v2/documents/ticket_invoice.json` Retorna tickets de venta disponibles para utilizarlos en una factura global.

:::info
Obtiene por defecto los tickets generados en los ultimos 7 dias.
:::

#### Parámetros
- **limit**, limita la cantidad de items de una respuesta JSON, por defecto el limit es 25, el máximo permitido es 50.
- **offset**, permite paginar los items de una respuesta JSON, por defecto el offset es 0.
- **init_date**, fecha inicial del rango (Date) (Formato Unix Timestamp Ej: 1683137041)
- **end_date**, fecha final del rango (Date) (Formato Unix Timestamp Ej: 1683137041)
- **serial_number**,  número de serie del ticket
- **num_ticket**, filtra por número de ticket
- **office_id**, filtra por id de sucursal
- **tickets**, filtra Arreglo de ids venta documento tributarios de tickets determinados, si se usa este filtro, se ignora los demas filtros
- **payment_type_id**, filtra por id de forma de pago
- **document_token**, filtra por token de documento
- **trib_code**, el codigo tributario del tipo de documento del documentos asignado al ticket, por defecto este valor es 'T', pero si se llegase a tener otro tipo de documento destinado a tickets, se debe enviar el codigo tributario de ese documento.
  
#### Ejemplos
- `GET /v2/documents/ticket_invoice.json?limit=3`
- `GET /v2/documents/ticket_invoice.json?serial_number=0000`

#### Respuesta
```js title="Response /ticket_invoice.json"
{
    "href": "https://api.bsale.io/v1/ticket_invoice.json",
    "count": 27,
    "limit": 3,
    "offset": 0,
    "items": [
        {
            "documentId": 573,
            "numDoc": 224,
            "documentStatus": 0,
            "commercialStatus": 0,
            "docGenerationDate": 1684787498,
            "netAmount": 969.44,
            "exemptAmount": 0,
            "taxAmount": 77.56,
            "totalAmount": 1047,
            "documentToken": "9db3baf39b14",
            "documentType": 39,
            "idClient": 101,
            "idOffice": 3,
            "urlPublicDocument": "https://app.bsale.com.mx/view/12345/9db3baf39b14",
            "vdtExtra": {
                "id": "",
                "uuid": "",
                "cfdStamp": "",
                "qrBase64": "",
                "satStamp": "",
                "stampDate": "",
                "csdCerNumber": "",
                "satCerNumber": "",
                "serialNumber": "0000",
                "originalChain": "",
                "fullSerialNumber": "0000-224"
            },
            "informed": 0,
            "expirationDate": 1684713600,
            "emissionDate": 1684713600,
            "cpnId": 12345
        },
        {
            "documentId": 574,
            "numDoc": 225,
            "documentStatus": 0,
            "commercialStatus": 0,
            "docGenerationDate": 1684795930,
            "netAmount": 237.04,
            "exemptAmount": 0,
            "taxAmount": 18.96,
            "totalAmount": 256,
            "documentToken": "a445870db67a",
            "documentType": 39,
            "idClient": 102,
            "idOffice": 3,
            "urlPublicDocument": "https://app.bsale.com.mx/view/12345/a445870db67a",
            "vdtExtra": {
                "id": "",
                "uuid": "",
                "cfdStamp": "",
                "qrBase64": "",
                "satStamp": "",
                "stampDate": "",
                "csdCerNumber": "",
                "satCerNumber": "",
                "serialNumber": "0000",
                "originalChain": "",
                "fullSerialNumber": "0000-225"
            },
            "informed": 0,
            "expirationDate": 1684713600,
            "emissionDate": 1684713600,
            "cpnId": 12345
        },
        {
            "documentId": 575,
            "numDoc": 226,
            "documentStatus": 0,
            "commercialStatus": 0,
            "docGenerationDate": 1684803687,
            "netAmount": 883.62,
            "exemptAmount": 0,
            "taxAmount": 141.38,
            "totalAmount": 1025,
            "documentToken": "36e2736e7fb2",
            "documentType": 39,
            "idClient": 0,
            "idOffice": 3,
            "urlPublicDocument": "https://app.bsale.com.mx/view/12345/36e2736e7fb2",
            "vdtExtra": {
                "id": "",
                "uuid": "",
                "cfdStamp": "",
                "qrBase64": "",
                "satStamp": "",
                "stampDate": "",
                "csdCerNumber": "",
                "satCerNumber": "",
                "serialNumber": "0000",
                "originalChain": "",
                "fullSerialNumber": "0000-226"
            },
            "informed": 0,
            "expirationDate": 1684713600,
            "emissionDate": 1684713600,
            "cpnId": 12345
        }
    ],
    "next": "https://api.bsale.io/v1/ticket_invoice?limit=3&offset=3",
    "totalAmountDocuments": 33916.55
}
```

#### Atributos        
| Atributo      | Descripción | Tipo dato |
| ----------- | ----------- | ----------- |
| **href**      | url del documento       | String       |
| **documentId**   | Id del documento generado por Bsale       | Integer        |
| **numDoc**   | Número del documento        | Integer        |
|  **documentStatus**   | estado del documento indica si el documento esta activo(0) o inactivo (1)         | Boolean        |
| **commercialStatus**   |          |         |
| **docGenerationDate**   | fecha y hora en que se genero el documento        | Integer        |
| **totalAmount**   | monto total del documento        | Float        |
| **netAmount**   | monto neto del documento        | Float        |
| **taxAmount**   | monto de impuestos del documento        | Float        |
| **exemptAmount**   | monto exento del documento        | Float        |
|  **documentToken**   | token único del documento        | String        |
| **documentType**   | nodo que indica el tipo del documento al cual pertenece el documento.        | Text        |
| **idClient**   | Id del cliente utilizado en el documento.        | Integer        |
| **idOffice**   | Id de la sucursal a la cual se asoció el documento.        | Integer        |
| **urlPublicDocument**   | url publica para visualizar el documento, con todas sus copias         | Text        |
| **id**   | id documento     | Text        |
| **uuid**   | uuid sat        | Text        |
| **cfdStamp**   | Timbre SAT del documento        | Text        |
| **qrBase64**   | Timbre SAT del documento        | Text        |
| **satStamp**   | Timbre SAT del documento        | Text        |
| **stampDate**   | Fecha timbre SAT del documento        | Float        |
| **csdCerNumber**   | Timbre SAT del documento        | Text        |
| **satCerNumber**   | Timbre SAT del documento        | Text        |
| **serialNumber**   | Número de serie del documento        | Text        |
| **originalChain**   | Cadena original del documento        | Text        |
| **fullSerialNumber**   | Número de serie completo del documento        | Text        |
|  **informed**   | Estado electrónico del documento        | Integer        |
| **emissionDate**   | fecha de emisión del documento (Integer)       | Integer        |
| **expirationDate**   | fecha de vencimiento del documento (Integer)         | Integer        |
|  **cpnId**   | Id único de la empresa (generado por Bsale)        | Integer        |


## GET valida un ticket
- GET `/v2/documents/ticket_invoice/:numDoc/validate.json` Permite validar un ticket de venta para verificar si puede ser facturado globalmente o por autofacturador.

:::info
Se debe enviar como parámetro mínimo el número de ticket, total del ticket y fecha de ticket.
:::

#### Parámetros
- **numDoc**, Número del documento.
- **total**, Total del documento.
- **date**, Fecha del ticket (Formato YYYY-MM-DD)
- **is_id_doc**, indica si el parámetro `numDoc` es el id de venta o el número de documento (1: id, 0: número)

  
#### Ejemplos
- `GET /v2/documents/ticket_invoice/224/validate.json?total=1047&date=2023-05-22`

#### Respuesta
```js title="Response /documents/ticket_invoice/224/validate.json"
{
    "code": 200,
    "data": {
        "documentId": 573,
        "numDoc": 224,
        "documentStatus": 0,
        "docGenerationDate": 0,
        "totalAmount": 1047,
        "documentToken": "9db3baf39ssb14",
        "documentType": 39,
        "idClient": 101,
        "urlPublicDocument": "https://app.bsale.com.mx/view//9db3baf39ssb14",
        "vdtExtra": {
            "id": "",
            "uuid": "",
            "cfdStamp": "",
            "qrBase64": "",
            "satStamp": "",
            "stampDate": "",
            "csdCerNumber": "",
            "satCerNumber": "",
            "serialNumber": "0000",
            "originalChain": "",
            "fullSerialNumber": "0000-224"
        },
        "documentTypeName": "TICKET DE VENTA",
        "expirationDate": 1684713600,
        "emissionDate": 1684713600
    }
}
```

## GET factura global
- GET `/v2/documents/ticket_invoice/global.json` Obtiene listado de facturas globales

:::info
Permite obtener las facturas generadas por el facturador global. Obtiene por defecto las facturas generadas en los ultimos 7 dias.
:::

#### Parámetros
- **init_date**, Fecha inicial del rango (Date) (Formato Unix Timestamp Ej: 1683137041)
- **end_date**, Fecha final del rango (Date) (Formato Unix Timestamp Ej: 1683137041)
- **offset**, Inicio de índice de registros
- **limit**, Cantidad de registros a obtener
- **serial_number**, Filtro por numero de serie de la factura
- **uuid**, Filtro por numero de folio de la factura en el SAT
- **sat_number**, Filtro por numero certificado SAT
- **csd_number**, Filtro por numero certificado CSD
- **payment_type_id**, Filtra por id de forma de pago
- **document_token**, Filtra por token de documento
- **office_id**, Filtra por id de sucursal

  
#### Ejemplos
- `GET /v2/documents/ticket_invoice/global.json?limit=1`
- `GET /v2/documents/ticket_invoice/global.json?document_token=852ec9fc1a46`
- `GET /v2/documents/ticket_invoice/global.json?uuid=7dfce91a-47ed-4981-8ec1-A94bf4334`

#### Respuesta
```js title="Response /ticket_invoice/global.json"
{
    "href": "https://api.bsale.io/v2/ticket_invoice/global.json",
    "count": 1,
    "limit": 25,
    "offset": 0,
    "items": [
        {
            "documentId": 569,
            "numDoc": 26,
            "documentStatus": 0,
            "commercialStatus": 0,
            "docGenerationDate": 1684772084,
            "netAmount": 2353.75,
            "exemptAmount": 0,
            "taxAmount": 188.3,
            "totalAmount": 2542.05,
            "urlPdf": "http://s3.amazonaws.com/bsale/12345/timbres/AAc9fcSS46.png",
            "urlXml": "https://bsale.s3.amazonaws.com/12345/cfdi/646b94f5e0c21fd7f0abc151.xml",
            "documentToken": "AAc9fcSS46",
            "documentType": 37,
            "idClient": 18,
            "idOffice": 3,
            "urlPublicDocument": "https://app.bsale.com.mx/view/12345/AAc9fcSS46",
            "vdtExtra": {
                "id": "646b94c21fd7f0abc151",
                "uuid": "7dfce91a-47ed-4981-8ec1-A94bf4334",
                "cfdStamp": "U8Js+k0WtkIxIknwv55OZkN48QaH4d5NgJE6iAjGgDuOBCVxdF2tnlfNR7RutPQc4QEuKrFnY/NnpO/Eu5ABZumGdlpTPhwrBSxz3ir0hlQ1Urj4uRMWVlCs4oHGxb/oPeh7khdGlkOFHJui3ncLHYRLW7Bd2tnH3jqy2GE0qEK96KNhxPdaREkKHUyvFLAK7FxxkPsvilbipgcH2rL6FIQMoHWA+Sd8dlDgbe4OWZFVXTZbY7Oc8M5cOnojthVZIKYbpVPM396kEQcJoua71l7Lu9aa+KcS4G59T3Y5l5nEC1EG63a8SXunOQg6kiM5su09w==",
                "qrBase64": "iVBORw0KGgoAAAANSAAn0ifiaAAAABlBMVEX///8AAABVwtN+AAACn0lEQVR42rTTwUrzWBQH8HNpSfygmA/ctCjemU27jRTaBKR1dDvgK2Ro0Y1gsZsOdx5WFrKwbahFd/PISQ6thoHVqdodSgBAJ4oN0a7SrXPvb8K6XZO0OajDhhjxWEEhkVHoVifKP14QAEGaSJzeZfdvZrQCrGKweqfP8aDhYZ4WufReUlVKdS78SgIL5/qYPuy1ei4ZUXoixplg67AsfwArHpw11SpXcbL/Dmzm3+akQAtVzh0l60i/3YKbCyN90N4NQa9YOtlwTCIoPjWQejLh/kgP1YvV/W0d1HSNSmTnxrgHP/dfOrGsiNKVy68LRnh2TL7nHCFL3eWYsArOGh/px31o37U1bobbFa0vjBSw65wAshKm74al9JV+UkJrpREeoVe1rceXoEV8DI9NGb43zSXhOizGBAASUVORK5CYII=",
                "satStamp": "hMm/Q8r+ghcWGjwQYMQhT7iTwsJ49DCw/mSzzBmLJP4pZmJ66HtB2n7/gL1mYbnNR2uZYKCN8O8EqxFA27PqplSdxeDRWGsbz6HPZ0LPRA98t3SVke85gNFEFssO+42O+uueMPpZOIyUq5B8T/aR9web2xQKSAuFVU5sUkN2wTbOUohnSEZMycJKWDqVLoES5GO5grz1vj29rxnDVpmHgBnQu3fStk73a/gLeBMYAw09D0/4WRTdLtJyFMuM1JE+HVDuuhgj2OZKLfAiAx4qye8zBfv5LwCuf4mgIyP5yss6apVvNeWGkEJUAkHGg==",
                "stampDate": "2023-05-22T10:14:45",
                "csdCerNumber": "00001000000509963201",
                "satCerNumber": "00001000000509846663",
                "serialNumber": "FG00",
                "originalChain": "||4.0|FG00|26|2023-05-22T07:14:00|04|00001000000509963201|2353.75|MXN|2542.05|I|01|PUE|22427|02|05|2023|SCT166615AM3|SANTA CLAUS CORP|601|XAXX010101000|Publico General|22427|616|S01|01010101|1684772084|1|ACT|Factura global|2353.75|2353.75|02|2353.75|002|Tasa|0.080000|188.300000|2353.75|002|Tasa|0.080000|188.30|188.30||",
                "fullSerialNumber": "FG00-26"
            },
            "period": 2,
            "periodicityMonth": "5",
            "periodicityYear": "2023",
            "informed": 0,
            "expirationDate": 1684713600,
            "emissionDate": 1684713600,
            "cpnId": 12345
        }
    ],
    "totalAmountDocuments": 2542.05
}
```

## POST Factura Global
- POST `/v1/documents.json`

:::note
La generación de una factura global, consta de dos partes:
- Crear el documento factura global
- Asociar tickets al documento factura global
:::


### Crear factura global

```json
{
  "documentTypeId": 8,
  "officeId": 1,
  "priceListId": 18,
  "emissionDate": 1407715200,
  "declare": 1,
  "cfdiUse": "CP01",
}
```
- **documentTypeId**, [Id del tipo de documento](/MX/tipos-de-documentos) que indicará a la factura global. (Integer).
- **officeId**, [Id de la sucursal](/MX/sucursales) donde se emite el documento, si no es especificada el documento quedara asignado a la sucursal por defecto del sistema (Integer).
- **emissionDate**, Fecha de emisión del documento (Integer) (no se debe aplicar zona horaria, solo considerar la fecha).
- **declare**, Si se desea declarar el documento ante SAT se envía 1, en caso contrario un 0 (Boolean).
- **cfdiUse**, Código uso cfdi del documento a generar (String).
- **cfdiPaymentTypeCode**, Código de forma de pago (String).
- **cfdiOrigin**, Origen de cfdi, servirá para identificar el origen. Se visualiza en reportes. (Integer)
- **globalCfdiPeriodicity**, Periodicidad del cfdi (Integer)
  - 1, diaria. 
  - 2, Semanal. 
  - 3, Quincenal. 
  - 4, Mensual
- **globalCfdiMonth**, Mes del cfdi global (Integer)
- **globalCfdiYear**,  Año del cfdi global (Integer)


### Cliente del documento 
:::note
Para la emisión de una factura global el cliente es `PUBLICO GENERAL`, Bsale tiene reservado el **clientId=1** para este efecto.
:::

#### Cliente 
```json 
{
   "clientId": 1
}
```

### Detalles

:::caution
`netUnitValue`: **no debe registrarse valores negativos**, si se envía será rechazado por la entidad tributaria (SAT), debe indicarse el valor sin impuestos según el monto obtenido de la cantidad de tickets a facturarse.
:::

```json 
{
    "details": [
        {
            "netUnitValue": 100,
            "quantity": 1,
            "comment": "Factura global",
            "taxId": "[1]"
        },
        {
            "netUnitValue": 200,
            "quantity": 1,
            "comment": "Factura global",
            "taxId": "[2]"
        }
    ]
}
```
- **netUnitValue**, Valor unitario neto de la variante, este valor es sin impuestos (Float).
- **quantity**, Cantidad de la variante que se esta vendiendo (Integer).
- **taxId**, Arreglo de identificadores de los impuestos a utilizar, estos tienen que ir dentro de "[]"  (String).
- **comment**, Descripción breve de la variante  (String).

### Forma de pago 
Se pueden especificar los pagos asociados al documento, se requiere un nodo similar a:
```json 
{
    "cfdiPaymentTypeCode": "03",
}
```
- **cfdiPaymentTypeCode**, Código de la forma de pago SAT

:::info
La factura global sólo defina una forma de pago asociada al documento
:::

### Ejemplo JSON

#### Envío
```json title="POST /documents.json "
{
    "documentTypeId": 39,
    "officeId": 1,
    "emissionDate": 1685318400,
    "cfdiUse": "CP01",
    "cfdiPaymentTypeCode": "03",
    "cfdiOrigin": "1",
    "globalCfdiPeriodicity": 1,
    "globalCfdiMonth": 5,
    "globalCfdiYear": 2023,
    "clientId": "1",
    "details": [
        {
            "netUnitValue": 100,
            "quantity": 1,
            "comment": "Factura global",
            "taxId": "[1]"
        },
        {
            "netUnitValue": 200,
            "quantity": 1,
            "comment": "Factura global",
            "taxId": "[2]"
        }
    ]
}
```

#### Respuesta

```json title="201 Response /documents.json "
{
    "href": "https://api.bsale.io/v1/documents/137.json",
    "id": 137,
    "emissionDate": 1685318400,
    "expirationDate": 1685318400,
    "generationDate": 1685388817,
    "number": 3,
    "serialNumber": "FG00-3",
    "trackingNumber": null,
    "totalAmount": 369.0,
    "netAmount": 300.0,
    "taxAmount": 69.0,
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
    "address": "VARSOVIA 36",
    "district": "JUAREZ",
    "city": "Ciudad de México",
    "stamp": null,
    "urlPublicView": "https://app2.bsale.com.mx/view/12345/4efc6219cf6c?sfd=99",
    "urlPdf": "https://app2.bsale.com.mx/view/12345/4efc6219cf6c.pdf?sfd=99",
    "urlPublicViewOriginal": "https://app2.bsale.com.mx/view/12345/4efc6219cf6c",
    "urlPdfOriginal": "https://app2.bsale.com.mx/view/12345/4efc6219cf6c.pdf",
    "token": "4efc6219cf6c",
    "state": 0,
    "commercialState": 0,
    "urlXml": null,
    "salesId": null,
    "informed": 2,
    "responseMsg": null,
    "document_type": {
        "href": "https://api.bsale.io/v1/document_types/39.json",
        "id": "39"
    },
    "client": {
        "href": "https://api.bsale.io/v1/clients/1.json",
        "id": "1"
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
        "href": "https://api.bsale.io/v1/documents/137/references.json"
    },
    "document_taxes": {
        "href": "https://api.bsale.io/v1/documents/137/document_taxes.json"
    },
    "details": {
        "href": "https://api.bsale.io/v1/documents/137/details.json"
    },
    "sellers": {
        "href": "https://api.bsale.io/v1/documents/137/sellers.json"
    },
    "attributes": {
        "href": "https://api.bsale.io/v1/documents/137/attributes.json"
    }
}
```

:::tip

Una vez **creada la Factura Global**, la API responderá el `id` de esta, te servirá para asociar los tickets. Lo debes referenciar como `idDocInvoice`.
:::

### Asociar tickets a factura global
- POST `/v2/documents/ticket_invoice/global.json` Asociar tickets a una factura global


```json
{
    "idDocInvoice": 137, 
    "tickets": [
        {
            "idDocTicket": 612,
            "numTicket": 245
        }
    ],
    "period": 1 
}
```
- **idDocInvoice**, Id de la factura que se asociará con los tickets
- **tickets**, Arreglo de Id's y numeros de tickets (Array)
- **period**, Periodicidad del cfdi (Integer)
  - 1, diaria. 
  - 2, Semanal. 
  - 3, Quincenal. 
  - 4, Mensual

#### Respuesta 
```json 
{
    "code": 201,
    "data": {
        "message": "Tickets guardados correctamente",
        "idDocTicketsSuccess": [
            612
        ],
        "idDocTicketsFailed": []
    }
}
```
- **message**, Detalle de la operacion (String)
- **idDocTicketsSuccess**, Arreglo de Id's de los tickets **asociados** a la factura exitosamente (Array)
- **idDocTicketsFailed**, Arreglo de Id's de los tickets que **no** se asociaron a la factura (Array)
