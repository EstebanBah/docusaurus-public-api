---
id: primeros-pasos
sidebar_position: 2
title: Introducción
description: Primeros pasos para interactuar con la API de Bsale Mx
slug: /first-steps
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

👋 ¡Te damos la bienvenida a la documentación de la **API México**! 


Esta página te ayudará a iniciar con nuestra API así puedas orientarte en los distintos endpoints que se encuentran a tu disposición. Comencemos con esta guía rápida.

### Navegación
El **menú lateral izquierdo** te servirá como guía general para encontrar la documentación según el recurso necesites trabajar. 
Cada sección tendrá un **menú lateral derecho**, que te mostrará las partes que componen el recurso.
:::tip
También puedes consultar nuestras [**preguntas frecuentes**](/faq) y [**listado de errores**](/faq#400).
:::

### Autentificación
Si leíste los [**primeros pasos**](/get-started)📎 sabrás que todos los requests deberán ser autentificados mediante un `access_token`, este token debe indicarse en la cabecera de la petición.

### Peticiones
Las peticiones son `HTTP REST` por lo que se debe especificar el **método** que se va a utilizar, junto al método se debe enviar en la cabecera de la petición el token de acceso que permite la autenticación en la API.
- **GET**, para obtener información de un recurso.
- **POST**, para crear un recurso.
- **PUT**, para modificar un recurso.
- **DELETE**, para eliminar un recurso.

### Ejemplo
El envío es simple, este es un ejemplo de la generación de una factura electrónica. La **documentación completa** la encuentras en su sección correspondiente, [**"Documentos > Post un documento"**](/MX/documentos)

<Tabs className="unique-tabs">
  <TabItem value="Request">

  ```js
{
    "documentTypeId": 5,
    "officeId": 1,
    "emissionDate": 1674518400,
    "expirationDate": 1677196800,
    "declare": 1,
    "priceListId": 1,
    "client": {
        "code": "CACX7605101P8",
        "company": "XOCHILT CASAS CHAVEZ",
        "activity": "Giro Informática",
        "city": "Ciudad",
        "address": "Dirección",
        "email": "api@bsale.com.mx",
        "postalCode": "10740",
        "regime": "612"
    },
    "cfdiUse": "CP01",
    "details": [
        {
            "comment": "15",
            "netUnitValue": 86.210000,
            "quantity": 10,
            "taxId": "[1]",
            "discount": 0
        }
    ]
}
```

  </TabItem>
  <TabItem value="Response">

  ```js 
{
    "href": "https://api.bsale.io/v1/documents/187.json",
    "id": 187,
    "emissionDate": 1674518400,
    "expirationDate": 1677196800,
    "generationDate": 1691004130,
    "number": 31,
    "serialNumber": "FE00-31",
    "trackingNumber": null,
    "totalAmount": 1000.04,
    "netAmount": 862.1,
    "taxAmount": 137.94,
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
    "address": "Dirección",
    "district": "Colonia",
    "city": "Ciudad",
    "stamp": null,
    "urlPublicView": "https://app2.bsale.com.mx/view/73776/d3953bbe83df?sfd=99",
    "urlPdf": "https://app2.bsale.com.mx/view/73776/d3953bbe83df.pdf?sfd=99",
    "urlPublicViewOriginal": "https://app2.bsale.com.mx/view/73776/d3953bbe83df",
    "urlPdfOriginal": "https://app2.bsale.com.mx/view/73776/d3953bbe83df.pdf",
    "token": "d3953bbe83df",
    "state": 0,
    "commercialState": 0,
    "urlXml": null,
    "salesId": null,
    "informed": 2,
    "responseMsg": null,
    "document_type": {
        "href": "https://api.bsale.io/v1/document_types/5.json",
        "id": "5"
    },
    "client": {
        "href": "https://api.bsale.io/v1/clients/12.json",
        "id": "12"
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
        "href": "https://api.bsale.io/v1/documents/187/references.json"
    },
    "document_taxes": {
        "href": "https://api.bsale.io/v1/documents/187/document_taxes.json"
    },
    "details": {
        "href": "https://api.bsale.io/v1/documents/187/details.json"
    },
    "sellers": {
        "href": "https://api.bsale.io/v1/documents/187/sellers.json"
    },
    "attributes": {
        "href": "https://api.bsale.io/v1/documents/187/attributes.json"
    }
}
```
  
  </TabItem>
</Tabs>


### Ayuda

- Si necesitas aprender como trabaja Bsale de forma general puedes revisar [**nuestra base de conocimiento**](https://ayuda.bsale.com.mx/support/home).
- Si tienes una duda puedes comunicarte con nosotros ingresando a la comunidad de [**slack**](https://bsaledev.slack.com/join/shared_invite/zt-1h1cqt05g-fqnTiREZYN8g47gf~caO5w#/shared-invite/email) 👋