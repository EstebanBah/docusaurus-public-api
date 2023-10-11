---
id: primeros-pasos
sidebar_position: 2
title: Introducción
description: Primeros pasos para interactuar con la API de Bsale CL
slug: /first-steps
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

👋 ¡Te damos la bienvenida a la documentación de la **API Chile**! 


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
El envío es simple, este es un ejemplo de la generación de una boleta electrónica. La **documentación completa** la encuentras en su sección correspondiente, [**"Documentos > Post un documento"**](/CL/documentos)

<Tabs className="unique-tabs">
  <TabItem value="Request">

  ```js
{
    "documentTypeId": "1",
    "officeId": "1",
    "emissionDate": 1462527931,
    "details": [
        {
            "netUnitValue": 10916,
            "quantity": 1,
            "taxes": [
                {
                    "code": 14,
                    "percentage": 19
                }
            ],
            "comment": "el nombre del producto que voy a vender"
        }
    ]
}
```

  </TabItem>
  <TabItem value="Response">

  ```js 
{
    "href": "https://api.bsale.io/v1/documents/427529.json",
    "id": 427529,
    "emissionDate": 1462492800,
    "expirationDate": 1462492800,
    "generationDate": 1691002496,
    "number": 1451650496937243,
    "serialNumber": null,
    "trackingNumber": null,
    "totalAmount": 12990.0,
    "netAmount": 10916.0,
    "taxAmount": 2074.0,
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
    "address": "",
    "municipality": "",
    "city": "",
    "urlTimbre": null,
    "urlPublicView": "https://app2.bsale.cl/view/18790/7c0653c5575c?sfd=99",
    "urlPdf": "https://app2.bsale.cl/view/18790/7c0653c5575c.pdf?sfd=99",
    "urlPublicViewOriginal": "https://app2.bsale.cl/view/18790/7c0653c5575c",
    "urlPdfOriginal": "https://app2.bsale.cl/view/18790/7c0653c5575c.pdf",
    "token": "7c0653c5575c",
    "state": 0,
    "commercialState": 0,
    "urlXml": "https://api.bsale.cl/v1/18790/files/7c0653c5575c.xml",
    "ted": null,
    "salesId": null,
    "informedSii": 2,
    "responseMsgSii": null,
    "document_type": {
        "href": "https://api.bsale.io/v1/document_types/1.json",
        "id": "1"
    },
    "office": {
        "href": "https://api.bsale.io/v1/offices/1.json",
        "id": "1"
    },
    "user": {
        "href": "https://api.bsale.io/v1/users/257.json",
        "id": "257"
    },
    "coin": {
        "href": "https://api.bsale.io/v1/coins/1.json",
        "id": "1"
    },
    "references": {
        "href": "https://api.bsale.io/v1/documents/427529/references.json"
    },
    "document_taxes": {
        "href": "https://api.bsale.io/v1/documents/427529/document_taxes.json"
    },
    "details": {
        "href": "https://api.bsale.io/v1/documents/427529/details.json"
    },
    "sellers": {
        "href": "https://api.bsale.io/v1/documents/427529/sellers.json"
    },
    "attributes": {
        "href": "https://api.bsale.io/v1/documents/427529/attributes.json"
    }
}
```
  
  </TabItem>
</Tabs>


### Ayuda

- Si necesitas aprender como trabaja Bsale de forma general puedes revisar [**nuestra base de conocimiento**](https://ayuda.bsale.app/support/home).
- Si tienes una duda puedes comunicarte con nosotros ingresando a la comunidad de [**slack**](https://bsaledev.slack.com/join/shared_invite/zt-1h1cqt05g-fqnTiREZYN8g47gf~caO5w#/shared-invite/email) 👋
