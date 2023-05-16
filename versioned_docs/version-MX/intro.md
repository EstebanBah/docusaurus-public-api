---
id: primeros-pasos
sidebar_position: 2
title: Primeros pasos
description: Primeros pasos para interactuar con la API de Bsale
slug: /primeros-pasos
---

## Enviar un requests
Las peticiones son `HTTP REST` por lo que se debe especificar el método que se va a utilizar, junto al método se debe enviar en la cabecera de la petición el token de acceso que permite la autenticación en la API.

- **GET**, para obtener información de un recurso.
- **POST**, para crear un recurso.
- **PUT**, para modificar un recurso.
- **DELETE**, para eliminar un recurso.

## Ejemplo curl
Un ejemplo en [curl](https://curl.se/) sería:

```json 
curl -i -H "access_token: tutokendeacceso" -X GET https://api.bsale.cl/v1/clients.json
```