---
id: primeros-pasos
sidebar_position: 2
title: Introducción
description: Primeros pasos para interactuar con la API de Bsale PE
slug: /first-steps
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

👋 ¡Te damos la bienvenida a la documentación de la **API Perú**! 


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
El envío es simple, este es un ejemplo de la generación de una factura electrónica. La **documentación completa** la encuentras en su sección correspondiente, [**"Documentos > Post un documento"**](/PE/documentos)

<Tabs className="unique-tabs">
  <TabItem value="Request">

  ```js
{
    "documentTypeId": 85,
    "officeId": 1,
    "emissionDate": 1686614400,
    "client": {
        "code": "987654321",
        "city": "Capital del Oeste",
        "company": "Capsule Corp",
        "municipality": "Capital del Oeste",
        "activity": "Development and research",
        "address": "Hoi Poi #750",
        "email": "dr@brief.pe"
    },
    "details": [
        {
            "netUnitValue": 9900,
            "quantity": 1,
            "taxId": "[1]",
            "discount": 0,
            "comment": "product example"
        }
    ]
}
```

  </TabItem>
  <TabItem value="Response">

  ```js 
{
    "href": "https://api.bsale.io/v1/documents/47121.json",
    "id": 47121,
    "emissionDate": 1686614400,
    "expirationDate": 1686614400,
    "generationDate": 1691003759,
    "number": 12437,
    "serialNumber": "F001-12437",
    "trackingNumber": null,
    "totalAmount": 11682.0,
    "netAmount": 9900.0,
    "taxAmount": 1782.0,
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
    "address": "Hoi Poi #750",
    "district": "Capital del Oeste",
    "city": "Capital del Oeste",
    "stamp": null,
    "urlPublicView": "https://app2.bsale.com.pe/view/18618/23d6ec33120b?sfd=99",
    "urlPdf": "https://app2.bsale.com.pe/view/18618/23d6ec33120b.pdf?sfd=99",
    "urlPublicViewOriginal": "https://app2.bsale.com.pe/view/18618/23d6ec33120b",
    "urlPdfOriginal": "https://app2.bsale.com.pe/view/18618/23d6ec33120b.pdf",
    "token": "23d6ec33120b",
    "state": 0,
    "commercialState": 0,
    "urlXml": null,
    "salesId": null,
    "informed": 2,
    "responseMsg": null,
    "document_type": {
        "href": "https://api.bsale.io/v1/document_types/85.json",
        "id": "85"
    },
    "client": {
        "href": "https://api.bsale.io/v1/clients/20923.json",
        "id": "20923"
    },
    "office": {
        "href": "https://api.bsale.io/v1/offices/1.json",
        "id": "1"
    },
    "user": {
        "href": "https://api.bsale.io/v1/users/224.json",
        "id": "224"
    },
    "coin": {
        "href": "https://api.bsale.io/v1/coins/1.json",
        "id": "1"
    },
    "references": {
        "href": "https://api.bsale.io/v1/documents/47121/references.json"
    },
    "document_taxes": {
        "href": "https://api.bsale.io/v1/documents/47121/document_taxes.json"
    },
    "details": {
        "href": "https://api.bsale.io/v1/documents/47121/details.json"
    },
    "sellers": {
        "href": "https://api.bsale.io/v1/documents/47121/sellers.json"
    },
    "attributes": {
        "href": "https://api.bsale.io/v1/documents/47121/attributes.json"
    }
}
```
  
  </TabItem>
</Tabs>


### Ayuda

- Si necesitas aprender como trabaja Bsale de forma general puedes revisar [**nuestra base de conocimiento**](https://ayuda.bsale.com.pe/support/home).
- Si tienes una duda puedes comunicarte con nosotros ingresando a la comunidad de [**slack**](https://bsaledev.slack.com/join/shared_invite/zt-1h1cqt05g-fqnTiREZYN8g47gf~caO5w#/shared-invite/email) 👋