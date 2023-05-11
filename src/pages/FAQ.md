---
title: Preguntas frecuentes
slug: /faq
---

# Preguntas frecuentes

# Errores
Todos los mensajes de error entregan un código de error y un mensaje descriptivo del error.

## Códigos de error http
| Código      | Descripción  |
| ----------- | ----------- | ----------- |
| **400**      | _Bad Request_     | Petición inválida     |
| **401**      | _Unauthorized_     | Access Token incorrecto     |
| **402**      | _Payment Required _    | Instancia bloqueada por no pago    |
| **403**      | _Forbidden_     | No tiene autorización para acceder al recurso solicitado     |
| **404**      | _Not Found _   | Recurso solicitado no pudo ser encontrado     |
| **405**      | _Method Not Allowed_     | El método o acción solicitada no está permitida en el recurso     |
| **500**      | _Internal Server Error_     | Ocurrió un error no esperado en el servidor que procesa la petición   |
| **502**      | _Unknown Error_     | Un error no manejado por la API  |


## Mensajes de error
### 400
<details>
	<summary>Invalid variant</summary>
	<div>
<div><b>Descripción:</b> Verifica la variante del detalle, estado, espacios o guiones están correctamente enviados.</div>
<div><b>Respuesta:</b> 
<code>

"error": invalid variant"
</code>
</div>
  </div>
</details>

<details>
	<summary>The json does not have reference document</summary>
    <div>
        <div><b>Descripción:</b> Verifica la estructura JSON, si estás generando una devolución, ésta debe tener una referencia.</div>
        <div><b>Respuesta:</b> <code>"error": "the json does not have reference document"</code></div>
    </div>
</details>

<details>
	<summary>Invalid variant</summary>
    <div>
        <div><b>Descripción:</b> Verifica la(s) variante(s) que se envian, ej su estado, espacios, guiones o la variante es posible que la variante no exista</div>
<div><b>Respuesta:</b> <code>"error": invalid variant"</code></div>
    </div>
</details>
	


<details>
	<summary>The json does not have reference document</summary>
    <div>
        <div><b>Descripción:</b> Verifica la referencia usada</div>
<div><b>Respuesta:</b> <code>"error": "the json does not have reference document"	</code></div>
    </div>
</details>



<details>
	<summary>Invalid reference detail</summary>
    <div>
        <div><b>Descripción:</b> Verifica la referencia del documento a nivel del detalle debe ser un id válido</div>
<div><b>Respuesta:</b> <code>"error": "invalid reference detail"</code></div>
    </div>
</details>
	


<details>
	<summary>Invalid documentType</summary>
    <div>
        <div><b>Descripción:</b> Verifica el documentType que esté activo. Valida que estás apuntando al recurso correcto (devoluciones a returns.json / ventas a documents.json etc)</div>
<div><b>Respuesta:</b> <code>"error": "invalid documentType"</code></div>
    </div>
</details>
	


<details>
	<summary>Invalid net unit value, zero or negative values are not allowed for this type of document</summary>
    <div>
        <div><b>Descripción:</b> Verifica los valores en los netos, si necesitas generar una línea con valor 0, indica un 100% descuento a la línea</div>
<div><b>Respuesta:</b> <code>"error": "Invalid net unit value, zero or negative values are not allowed for this type of document"</code></div>
    </div>
</details>



<details>
	<summary>Sorry, this request can not be authenticated</summary>
    <div>
        <div><b>Descripción:</b> Verifica el token de acceso utilizado en la petición</div>
<div><b>Respuesta:</b> <code>"error":"Sorry, this request can not be authenticated"</code></div>
    </div>
</details>
	


<details>
	<summary>No implicit conversion of String into Integer</summary>
    <div>
        <div><b>Descripción:</b> Verifica la estructura JSON, respeta nodos y arreglos según corresponda</div>
<div><b>Respuesta:</b> <code>"error": "no implicit conversion of String into Integer"</code></div>
    </div>
</details>
	


<details>
	<summary>Invalid price list</summary>
    <div>
        <div><b>Descripción:</b> Verifica la lista de precios que está referenciando, debe existir y tener estado activo</div>
<div><b>Respuesta:</b> <code>"error": "invalid price list"</code></div>
    </div>
</details>
	


<details>
	<summary>"code" is out of range for ActiveRecord::Type::Integer with limit 4</summary>
    <div>
        <div><b>Descripción:</b> Verifica que el code que estás usando exista en Bsale o tenga estado 0</div>
<div><b>Respuesta:</b> <code>"error":""code" is out of range for ActiveRecord::Type::Integer with limit 4"</code></div>
    </div>
</details>
	


<details>
	<summary>Invalid pack promo detail</summary>
    <div>
        <div><b>Descripción:</b> Verifica que el pack promoción esté asociado por variantes. Valida que el code del pack exista.</div>
<div><b>Respuesta:</b> <code>"error":"invalid pack promo detail"</code></div>
    </div>
</details>
	


<details>
	<summary>Client attribute required : code,activity,address,city,municipality</summary>
    <div>
        <div><b>Descripción:</b> Verifica los datos de cliente. En caso que no necesitar estos datos, colocate en contacto con ayuda@bsale.app</div>
<div><b>Respuesta:</b> <code>"error":"client attribute required : code,activity,address,city,municipality"</code></div>
    </div>
</details>
	


<details>
	<summary>The amount is higher than deposit available</summary>
    <div>
        <div><b>Descripción:</b> Verifica el monto pagado sea mayor o igual a la deuda</div>
<div><b>Respuesta:</b> <code>"error": "the amount is higher than deposit available"</code></div>
    </div>
</details>
	


<details>
	<summary>Does not have numbers available, check sii caf</summary>
    <div>
        <div><b>Descripción:</b> Verifica los folios electrónicos, en caso de ser necesario cargar nuevos</div>
<div><b>Respuesta:</b> <code>"error": "does not have numbers available, check sii caf"</code></div>
    </div>
</details>
	


<details>
	<summary>The quantity returned (1.0) is higher than the available (0.0) for detail: "id detalle"</summary>
    <div>
        <div><b>Descripción:</b> Verifica la cantidad de la devolución. Valida que no tenga generada una devolución a la misma venta.</div>
<div><b>Respuesta:</b> <code>"error": "The quantity returned (1.0) is higher than the available (0.0) for detail: "id detalle""</code></div>
    </div>
</details>
	


<details>
	<summary>This document may not be removed because it was used</summary>
    <div>
        <div><b>Descripción:</b> Verifica que el documento de referencia esté con estado activo</div>
<div><b>Respuesta:</b> <code>"error": "This document may not be removed because it was used"</code></div>
    </div>
</details>
	


<details>
	<summary>There is a problem with the available quantity for your products</summary>
    <div>
        <div><b>Descripción:</b> Verifica la cantidad de stock</div>
<div><b>Respuesta:</b> <code>"error": "There is a problem with the available quantity for your products"</code></div>
    </div>
</details>
	


<details>
	<summary>There are more than a client with the code "code", client id: "clientId"</summary>
    <div>
        <div><b>Descripción:</b> Verifica que no exista un cliente con el mismo rut / mail</div>
<div><b>Respuesta:</b> <code>"error": "There are more than a client with the code "code", client id: "clientId""</code></div>
    </div>
</details>
	


<details>
	<summary>Invalid exchange rate</summary>
    <div>
        <div><b>Descripción:</b> Verifica la lista de precios asignada a la sucursal</div>
<div><b>Respuesta:</b> <code>"error":"invalid exchange rate"</code></div>
    </div>
</details>
	


<details>
	<summary>Invalid quantity</summary>
    <div>
        <div><b>Descripción:</b> Verifica que respetas la estructura de envío en el detalle (corchetes y comas)</div>
<div><b>Respuesta:</b> <code>"error": "invalid quantity"</code></div>
    </div>
</details>
	


<details>
	<summary>Invalid JSON object</summary>
    <div>
        <div><b>Descripción:</b> Verifica que estás cerrando con coma (,) y comillas (") cada atributos que lo requiera</div>
<div><b>Respuesta:</b> <code>"error": "Invalid JSON object"</code></div>
    </div>
</details>
	


<details>
	<summary>The return already been nullified</summary>
    <div>
        <div><b>Descripción:</b> Verifica que la devolución esté disponible a anular</div>
<div><b>Respuesta:</b> <code>"error": "the return already been nullified"</code></div>
    </div>
</details>
	
<details>
	<summary>Unavailable document number</summary>
    <div>
        <div><b>Descripción:</b> Verifica el folio del documento. Contacta a soporte ayuda@bsale.app</div>
<div><b>Respuesta:</b> <code>"error": "unavailable document number"	</code></div>
    </div>
</details>

<details>
	<summary>Price list not found</summary>
    <div>
        <div><b>Descripción:</b> Verifica el priceListId enviado en tu json, valida que este activo</div>
<div><b>Respuesta:</b> <code>"error": "price list not found"</code></div>
    </div>
</details>
	
<details>
	<summary>the number of details allowed for this document is "número"</summary>
    <div>
        <div><b>Descripción:</b> Verifica la configuración del tipo de documento, cada tipo de documento se configura según sus necesidades</div>
<div><b>Respuesta:</b> <code>"error": "the number of details allowed for this document is "número""</code></div>
    </div>
</details>
	
<details>
	<summary>The client is required for this type of document if the amount is greater than or equal 10.0</summary>
    <div>
        <div><b>Descripción:</b> Verifica la configuración del tipo de documento, cada tipo de documento se configura según sus necesidades</div>
<div><b>Respuesta:</b> <code>"error": "The client is required for this type of document if the amount is greater than or equal 10.0"</code></div>
    </div>
</details>
	
<details>
	<summary>This document type has the following client attributes required: "Rut del Cliente"</summary>
    <div>
        <div><b>Descripción:</b> Verifica la configuración del tipo de documento. En caso que no necesitar estos datos, colocate en contacto con ayuda@bsale.app</div>
<div><b>Respuesta:</b> <code>"error": "This document type has the following client attributes required: "Rut del Cliente""</code></div>
    </div>
</details>
	
<details>
	<summary>Couldn't find ListaPrecio with 'id_lista_precio'= </summary>
    <div>
        <div><b>Descripción:</b> Verifica que la sucursal tenga definida una lista de precios por defecto</div>
<div><b>Respuesta:</b> <code>"error": "Couldn't find ListaPrecio with 'id_lista_precio'= "</code></div>
    </div>
</details>
	
<details>
	<summary>Max sku exceeded</summary>
    <div>
        <div><b>Descripción:</b> Verifica la cantidad de skus en tu plan contratado, contacta a tu ejecutivo</div>
<div><b>Respuesta:</b> <code>"error": "max sku exceeded"</code></div>
    </div>
</details>
	
<details>
	<summary>Sku maximum reached, contact emontero@imaginex.cl</summary>
    <div>
        <div><b>Descripción:</b> Verifica la cantidad de skus en tu plan contratado</div>
<div><b>Respuesta:</b> <code>"error": "sku maximum reached, contact emontero@imaginex.cl"</code></div>
    </div>
</details>

<details>
	<summary>The document amount is higher than the client deposit amount</summary>
    <div>
        <div><b>Descripción:</b> Verifica que el cliente no tiene un monto de abono igual al usado en el tipo de pago</div>
<div><b>Respuesta:</b> <code>"error": "The document amount is higher than the client deposit amount"</code></div>
    </div>
</details>

<details>
	<summary>This document only allow clients with companyOrPerson = 1</summary>
    <div>
        <div><b>Descripción:</b> Verifica la configuración del tipo de documento. Valida la restricción de uso de cliente</div>
<div><b>Respuesta:</b> <code>"error": "This document only allow clients with companyOrPerson = 1"</code></div>
    </div>
</details>

<details>
	<summary>Invalid percentage, negative values are not allowed for this type of document</summary>
    <div>
        <div><b>Descripción:</b> Verifica la configuración del tipo de documento</div>
<div><b>Respuesta:</b> <code>"error": "Invalid percentage, negative values are not allowed for this type of document"</code></div>
    </div>
</details>
	
<details>
	<summary>The sii caf used is expired, you must request and upload a new one</summary>
    <div>
        <div><b>Descripción:</b> Verifica los folios electrónicos, en caso de ser necesario cargar nuevos</div>
<div><b>Respuesta:</b> <code>"error": "The sii caf used is expired, you must request and upload a new one"</code></div>
    </div>
</details>
	
<details>
	<summary>Undefined method `has_key?' for Array:0x005644a47c1610 </summary>
    <div>
        <div><b>Descripción:</b> Verifica que que no estés enviando arreglos en nodos</div> 
<div><b>Respuesta:</b> <code>"error": "undefined method `has_key?' for Array:0x005644a47c1610"</code></div>
    </div>
</details>
	
<details>
	<summary>Document amount is less than the minimum allowed</summary>
    <div>
        <div><b>Descripción:</b> Verifica el monto mínimo del documento (Configuración tipo documento)</div>
<div><b>Respuesta:</b> <code>"error": "document amount is less than the minimum allowed"</code></div>
    </div>
</details>
	
<details>
	<summary>Invalid country code in customsData</summary>
    <div>
        <div><b>Descripción:</b> Verifica las propiedades de la factura de exportación</div>
<div><b>Respuesta:</b> <code>"error": "invalid country code in customsData"</code></div>
    </div>
</details>

<details>
	<summary>Invalid sale mode in customsData</summary>
    <div>
        <div><b>Descripción:</b> Verifica las propiedades de la factura de exportación</div>
<div><b>Respuesta:</b> <code>"error": "invalid sale mode in customsData"</code></div>
    </div>
</details>

<details>
	<summary>There is no stock for this products: "code"</summary>
    <div>
        <div><b>Descripción:</b> Verifica el code devuelto por la respuesta, debe tener stock para ser vendido</div>
<div><b>Respuesta:</b> <code>"error": "There is no stock for this products: "code""</code></div>
    </div>
</details>

<details>
	<summary>Use 'comment' to especify the serie of detailid to dispatch</summary>
    <div>
        <div><b>Descripción:</b> Verifica que estás ingresando una serie en el detalle del documento, como indica la respuesta (comment)</div>
<div><b>Respuesta:</b> <code>"error": "Use 'comment' to especify the serie of detailid to dispatch."</code></div>
    </div>
</details>

### 500
<details>
	<summary>The requested resource is not available</summary>
    <div>
        <div><b>Descripción:</b> Verifica que estás ingresando una url válida</div>
<div><b>Respuesta:</b> <code>"error": "The requested resource is not available"</code></div>
    </div>
</details>