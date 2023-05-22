### Liberaciones disponibles por rango de fecha

## 05/2023
Respuesta código 200 al enviar SalesId repetido

## 04/2023
Generación de GRE 🇵🇪.
Boleta de anticipo 🇵🇪.
Documentos con forma de Pago Detracción 🇵🇪.
consumptionTypeId Soportado en consumos.
POST PUT series en productos.

## 03/2023
Cancelaciones SAT 🇲🇽.
Soporte generación factura global SAT 🇲🇽.

## 11/2022
Soporte generación documentos resolución 66 Anexo SII 🇨🇱.
PUT productTypeId de un producto.

## 10/2022
Url xml generación token documento.
Eventos de stock a webhooks, guias de traslado interno.

## 09/2022
Validación cantidad invalida para series que no son lote. (invalid quantity).
Validación salesId para devoluciones.

## 08/2022
Listar Tipos de consumo

## 06/2022
Valida si esta declarado el documento al hacer NC 🇵🇪.

## 05/2022
Recepción de stock con series.
Filtro fecha de generación documento.
Filtro consumos y recepciones, por modificación de stock.
Filtrar por Tipo de consumo.

## 04/2022
codesii y officeid summary.
Editar tipos de documentos.

## 03/2022
Soporte asociar impuestos en creación de productos.
Obtener detalles de pack de documentos, por producto o variante (/v1/documents/:id_documento/variants.json).

## 01/2022
Validación de formas de pago con Nota de crédito, que lleve cliente.
Notificación DELETE en pagos de crédito.
Validación de redondeo en impuesto según moneda.

## 12/2021
Validación de stock para que no se despache doble.
Mensaje validación de stock a detalles de un pack.

## 11/2021
Se optimiza filtro 'emissiondaterange' de documents en un 91%.

## 10/2021
Leer atributos requeridos de cliente.

# 09/2021
Filtros RcofDate.
PUT Puntos de cliente.
Se valida que el Ruc o Dni sea correcto según tipo de cliente.
Validación de detalle despachado al hacer documento a partir de otro  🇵🇪 🇨🇱.
Validación de impuestos en los detalles 🇵🇪.
Serialización para crédito cuotas 🇵🇪 🇨🇱.

## 08/2021
Soporte campo “note” adicional a comment.