---
title: Control de cambios API Bsale
slug: /changelog
---

# Liberaciones disponibles
## 09/2023
- Ajuste rate-limit 10 requests por segundo.
- Validación cupo máximo de crédito en ventas
- Validación `PUT` clientes con estado distinto de 0
- Soporte a consumo de stock a variantes que usen series.
- Soporte a lectura de tickets asociados a una Factura Global 🇲🇽.

## 08/2023
- Soporte a estados de despachos entre sucursales `shippings.json`.
- Soporte a Cancelaciones Facturas Globales 🇲🇽.
- Soporte a Devoluciones factura electrónica 🇲🇽.

## 07/2023
- Soporte bajas de documentos 🇵🇪.
- Validación ventas y devoluciones en bodegas
- Soporte a redeclarar documentos

## 05/2023
- Validación al enviar `salesId` previamente registrado, retorna código http 200

## 04/2023
- Soporte Generación de Guías de remisión 🇵🇪.
- Soporte Boleta de anticipo 🇵🇪.
- Soporte a Documentos con forma de Pago Detracción 🇵🇪.
- Soporte `consumptionTypeId` en consumos.
- Soporte `POST` `PUT` series en endpoint `products.json`.

## 03/2023
- Soporte Cancelaciones Facturas electrónicas 🇲🇽.
- Soporte generación factura global 🇲🇽.

## 11/2022
- Soporte generación documentos resolución 66 Anexo SII 🇨🇱.
- Soporte `PUT` `productTypeId` de un producto en endpoint `products.json`.

## 10/2022
- Validación en url xml generación token documento.
- Soporte a  eventos de stock a webhooks, guias de traslado interno.

## 09/2022
- Validación cantidad invalida para series que no son lote - `invalid quantity`
- Soporte de `salesId` para devoluciones.

## 08/2022
- Soporte Listar Tipos de consumo

## 06/2022
- Valida si esta declarado el documento al hacer una devolución 🇵🇪.

## 05/2022
- Soporte Recepción de stock con series.
- Filtro fecha de generación documento.
- Filtro consumos y recepciones, por modificación de stock.
- Filtrar por Tipo de consumo.

## 04/2022
- Soporte a `codesii` y `officeid` en endpoint `summary.json`.
- Soporte `PUT` tipos de documentos.

## 03/2022
- Soporte asociar impuestos en creación de productos, `POST` endpoint `products.json`.
- Sopoprte para obtener detalles de pack de documentos, por producto o variante `/v1/documents/:id_documento/variants.json`.

## 01/2022
- Validación de formas de pago con Nota de crédito, que lleve cliente.
- Soporte eventos webhooks `DELETE` en pagos de crédito.
- Validación de redondeo en impuesto según moneda.

## 12/2021
- Validación de stock doble salida de stock en documentos relacionados.
- Validación stock a detalles de un pack.

## 11/2021
- Optimización filtro `emissiondaterange` de documents en un 90% mas rápido

## 10/2021
- Soporte atributos requeridos de cliente en tipos de documento.  `/v1/document_types/:id/required_client_parameters.json`

## 09/2021
- Filtros `RcofDate` para endpoint `documents.json`.
- Soporte puntos de cliente.
- Validación RUC/DNI sea correcto según tipo de cliente.
- Validación de detalle despachado al hacer documento a partir de otro  🇵🇪 🇨🇱.
- Validación de impuestos en los detalles 🇵🇪.
- Soporte para crédito cuotas 🇵🇪 🇨🇱.

## 08/2021
- Soporte a filtro por series en endopoint de variantes. `variants/:id/serials.json?officeid=1`

## 07/2021
- Soporte campo `note` adicional a `comment` en el arreglo de detalles.

## 05/2021
- Soporte asignar lista de precio por defecto al crear clientes 

:::tip
Si tienes dudas o necesitas se evalúen nuevas funcionalidades, puedes ingresar a la comunidad de [**slack**](https://join.slack.com/t/bsaledev/shared_invite/zt-1h1cqt05g-fqnTiREZYN8g47gf~caO5w) 👋

:::