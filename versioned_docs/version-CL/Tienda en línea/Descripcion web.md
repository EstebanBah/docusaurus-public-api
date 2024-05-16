---
sidebar_position: 41
title: Descripción web
description: Listar información de productos ecommerce
slug: /descripcion-web
---


# Descripción web
Listar productos y servicios que se contengan en la tienda en línea de Bsale.

#### Atributos
| Atributo      | Descripción | Tipo dato |
| ----------- | ----------- | ----------- |
| **id**| id del producto web | Integer |
| **productId**|   Id del producto | Integer |
| **idVariantDefault**|   Id variante por defecto del producto | Integer |
| **urlSlug**|  URL slug del producto | String |
| **name**|   Nombre del producto web | String |
| **description**|   descripción del producto | String |
| **descriptions**|   Nodo que indica las descripciones del producto | String |
| **displayNotice**|  Texto adicional del producto | String | 
| **state**|  estado del producto activo(0) o inactivo (1) | Boolean | 
| **mkProductType**|  | Integer || Integer | Tipo de producto web | String |
| **productType**|  Nodo que indica el tipo de producto  | | 
| **productTaxes**|  Nodo que indica el/los impuesto del producto  | | 
| **urlImg**|   URL imagen producto (asociado a la variante por defecto) | String |
| **pictures**|  Nodo que indica las imágenes asociados al producto web | String |
| **urlVideo**|   Url video del producto web  | | 
| **shippingUnit**|  Unidad  | | 
| **width**|  Peso del producto web | Float |
| **depth**| Profundidad el producto web | Float |
| **lenght**| Largo del producto web | Float |
| **baseInfo**|  Nodo que entrega información del producto   | | 
| **variant**|  Nodo que entrega información de la variante del producto  | | 
| **discounts**|  Nodo que indica los descuentos asociados | | 
| **stocks**|  Nodo que indica el stock del producto web | | 
| **order**|   Posición del producto web | Integer |
| **totalStock**|   Stock total del producto web | Integer |
| **collections**| Nodo que indica las colecciones asociadas al producto web | | 
| **brand**| Nodo que muestra la marca asociada al producto | String / Array |
| **order**| Nodo que indica el orden de despliegue del producto dentro de la colección |Integer|
| **link**|Nodo sociado a la URL donde está publicado|String|

## GET lista de descripciones web

- GET `/v2/products/list/market_info.json` retornará la lista de todos los productos y sus descripciones web.

#### Expanders
Parámetros que permiten que un determinado nodo se expanda. 

:::info
Estos deben ser agregados de dentro del atributo expand. Ej: (`expand=[variantsInfo,variant.salePrice,variant.stock]`)
:::

- **descriptions**, permite desplegar el detalle de las descripciones asociadas a un determinado producto, además de la descripción por defecto.
- **productType**, permite desplegar el tipo de producto y sus características.
- **productTaxes**, permite desplegar los impuestos asociados al producto. Es importante notar que los precios que se despliegan ya contienen estos impuestos.
- **images**, permite desplegar la lista de las imágenes asociadas al producto.
- **baseInfo**, permite desplegar la información base del producto, esta complementa a la descripción web del mismo.
- **variantsInfo**, permite  desplegar la infromación asociada a las variantes que componen el producto.
- **relatedVariants**, permite desplegar las variantes que están definidas como variantes relacionadas al producto.
- **attributeValues**, permite desplegar los atributos dinámicos de la variante, es decir la lista de los atributos definidos por el usuario y que complementan la infromación base del mismo.
- **variant.salePrice**, permite desplegar  los precios de venta de cada una de las variantes asociadas al un producto. Es importante que en los parámetros de debe agregar `priceListId`
- **variant.discount**, permite desplegar los descuentos asociados a cada variante.
- **variant.stock**, permite desplegar el stock asociada a cada variante, disponible en cada sucursal. Esto se puede filtrar por `storeId` el cual debe agregarse como parámetro.
- **variantShipping**, retorna la lista de los volúmenes y pesos de las variantes asociadas al producto.
- **collections**, permite desplegar las especicifaciones de las colecciones en las cuales el productos se encuentra publicado.
- **brand**, permite desplegar la infromación de la marca asociada al producto y su descripción web

#### Parámetros

- **limit**, limita la cantidad de ítems de una respuesta JSON, por defecto el limit es 25, el máximo permitido es 50.
- **offset**, permite paginar los ítems de una respuesta JSON, por defecto el offset es 0.
- **productWfId**, permite filtrar por  el Id del producto web, es decir por el Id de su descripción.
- **productId**, permite filtrar por el Id del producto.
- **collId**, permite filtar por coleccion id.
- **code**, permite filtrar por el SKU de una variante, lo cual retorna el productos y todas las variantes de este.
- **productWebType**, permite filtrar los productos asociados a un determinado tipo
- **urlSlug**, permite filtrar por el Slug del producto
- **name**, Permite filtrar por el nombre del producto (se debe tener presente que es una igualdad)
- **prodArray**, Permite filtrar una lista de productos cuyos Id se encuentren en un arreglo de Id's.
- **storeId**, si es que se solicita una expanción del stock del producto se puede filtrar por el Id de una determianda sucursal
- **offices**, si es que se solicita una expanción sel stock del producto se puede filtrar por una arreglo de Store Id's
- **priceListId**, si es que se se solicitó una expanción  del precio de las variantes es **mandatorio** indicar el Id de la lista de precio
- **allVariantShows**, este filtro permite que, si es que se ha expandido para que desplieguen las variantes, se muestren todas las variantes independientemente si están o no marcadas para ser desplegadas en el e-commerce. El valor que espera es 1.
- **allVariantStates**, este filtro permite que, si es que se ha expandido para que desplieguen las variantes, se muestren todas independientemente si estas están o no activas. El valor que espera es 1.

#### Ejemplos
- GET `v2/products/list/market_info.json?&expand=[variantsInfo,variant.salePrice,variant.stock]&storeId=1&limit=50&priceListId=6`


```json
{
    "code": "200",
    "href": "https://api.bsale.io/v3/products/markets/info.json?&expand=[variantsInfo,variant.salePrice, collections, descriptions]&storeId=1&priceListId=6&store_id=1",
    "count": 357,
    "limit": 1,
    "offset": 0,
    "data": [
        {
            "id": 5,
            "productId": 195,
            "idVariantDefault": 498,
            "urlSlug": "almendra-natural",
            "name": "Almendra Natural",
            "description": "<h3>Semillas de temporada, cultivadas en nuestros campos. Ricas e ideales para cocinar, compartir o comer como snack.</h3>",
            "descriptions": [],
            "displayNotice": "",
            "state": 1,
            "mkProductType": "normal",
            "productType": {
                "id": 2,
                "href": "https://api.bsale.io/v2/product_types/2.json"
            },
            "productTaxes": {
                "href": "https://api.bsale.io/v3/products/195/product_taxes.json"
            },
            "urlImg": "https://dojiw2m9tvv09.cloudfront.net/4210/product/12780.png",
            "pictures": {
                "href": "https://api.bsale.io/v3/products/195/product_images.json"
            },
            "urlVideo": null,
            "shippingUnit": 1,
            "width": 0,
            "depth": 0,
            "length": 0,
            "baseInfo": null,
            "variants": [
                {
                    "id": 109,
                    "productId": 195,
                    "description": "1kg",
                    "unlimitedStock": 0,
                    "allowNegativeStock": 0,
                    "showInEcommerce": 1,
                    "state": 0,
                    "barCode": "1575388264",
                    "code": "1575388264",
                    "imagestionCenterCost": 0,
                    "imagestionAccount": 0,
                    "imagestionConceptCod": 0,
                    "imagestionProyectCod": 0,
                    "imagestionCategoryCod": 0,
                    "imagestionProductId": 0,
                    "serialNumber": 0,
                    "prestashopCombinationId": 0,
                    "prestashopValueId": 0,
                    "prestashopSync": 0,
                    "booticValueId": 0,
                    "booticSync": 0,
                    "attributeValues": [],
                    "prices": [],
                    "salePrices": {
                        "price": "10882.0",
                        "finalPrice": "12950.0",
                        "fpWithoutDiscount": "12950.0",
                        "taxPrice": "2068.0",
                        "taxDiscountPrice": "2068.0",
                        "netDiscountPrice": "10882.0"
                    },
                    "discounts": {
                        "href": "https://api.bsale.io/v2/variants/109/discounts.json"
                    },
                    "stockInfo": {
                        "href": "https://api.bsale.io/v2/stocks.json?variant=109"
                    },
                    "href": "https://api.bsale.io/v2/variants/109.json",
                    "integration": {
                        "meli": "25221674761",
                        "google_shopping": "[]",
                        "facebook_shopping": "[{\"id\": \"4210_93\", \"mk_id\": \"3\"}]"
                    },
                    "variantMarket": {},
                    "shipping": {
                        "href": "https://api.bsale.io/v3/products/markets/info.json?product_id=195&expand=shipping"
                    }
                },
                {
                    "id": 498,
                    "productId": 195,
                    "description": "400g",
                    "unlimitedStock": 0,
                    "allowNegativeStock": 0,
                    "showInEcommerce": 1,
                    "state": 0,
                    "barCode": "7804654580498",
                    "code": "1450283275",
                    "imagestionCenterCost": 0,
                    "imagestionAccount": 0,
                    "imagestionConceptCod": 0,
                    "imagestionProyectCod": 0,
                    "imagestionCategoryCod": 0,
                    "imagestionProductId": 0,
                    "serialNumber": 0,
                    "prestashopCombinationId": 0,
                    "prestashopValueId": 0,
                    "prestashopSync": 0,
                    "booticValueId": 0,
                    "booticSync": 0,
                    "attributeValues": [],
                    "prices": [],
                    "salePrices": {
                        "price": "5252.0",
                        "finalPrice": "6250.0",
                        "fpWithoutDiscount": "6250.0",
                        "taxPrice": "998.0",
                        "taxDiscountPrice": "998.0",
                        "netDiscountPrice": "5252.0"
                    },
                    "discounts": {
                        "href": "https://api.bsale.io/v2/variants/498/discounts.json"
                    },
                    "stockInfo": {
                        "href": "https://api.bsale.io/v2/stocks.json?variant=498"
                    },
                    "href": "https://api.bsale.io/v2/variants/498.json",
                    "integration": {
                        "google_shopping": "[{\"id\": \"online:es:CL:1450283275\", \"mk_id\": \"4\"}]",
                        "facebook_shopping": "[{\"id\": \"4210_93\", \"mk_id\": \"3\"}]"
                    },
                    "variantMarket": {},
                    "shipping": {
                        "href": "https://api.bsale.io/v3/products/markets/info.json?product_id=195&expand=shipping"
                    }
                }
            ],
            "relatedVariants": {
                "href": "https://api.bsale.io/v3/products/195/variants.json"
            },
            "collections": [
                {
                    "id": 9,
                    "name": "Semillas",
                    "urlSlug": "Semillas",
                    "state": 0,
                    "description": null,
                    "image": null,
                    "lyId": null,
                    "mkId": 1,
                    "tdId": null,
                    "integration": null,
                    "href": "https://api.bsale.io/v2/collections/9.json"
                },
                {
                    "id": 18,
                    "name": "Todos los productos",
                    "urlSlug": "todos-los-productos",
                    "state": 0,
                    "description": null,
                    "image": null,
                    "lyId": null,
                    "mkId": 1,
                    "tdId": null,
                    "integration": null,
                    "href": "https://api.bsale.io/v2/collections/18.json"
                },
                {
                    "id": 96,
                    "name": "CYBER",
                    "urlSlug": "cyber",
                    "state": 1,
                    "description": null,
                    "image": null,
                    "lyId": null,
                    "mkId": 3,
                    "tdId": null,
                    "integration": null,
                    "href": "https://api.bsale.io/v2/collections/96.json"
                }
            ],
            "brand": {
                "href": "https://api.bsale.io/v3/products/195/brand.json"
            },
            "variantShipping": {
                "href": "https://api.bsale.io/v3/products/market_info/5/variant_shipping.json"
            },
            "discounts": null,
            "stocks": {
                "href": "https://api.bsale.io/v2/stocks.json?product=195"
            },
            "integration": {
                "order_by": 0,
                "meli-331147323": "MLC462192526"
            },
            "variant": {
                "id": 498,
                "price": null,
                "description": null,
                "finalPrice": null,
                "unlimitedStock": null,
                "allowDecimal": null,
                "allowNegativeStock": null,
                "code": "1450283275",
                "integrations": null,
                "discount": {
                    "percent": null,
                    "minimumQuantity": null
                }
            },
            "order": 10,
            "link": "product/almendra-natural"
        }
    ],
    "next": "https://api.bsale.io//v3/products/markets/info.json?limit=1&offset=1&expand=[variantsInfo,variant.salePrice,collections,descriptions]&storeId=1&priceListId=6&store_id=1"
}
```

## GET descripciones web por tienda
- GET ` /v1/markets/:idMarket/products/market_info.json` retornará las descripciones de productos publicados en un ecommerce

#### Parámetros
- **limit**, limita la cantidad de ítems de una respuesta JSON, por defecto el limit es 25, el máximo permitido es 50.
- **offset**, permite paginar los ítems de una respuesta JSON, por defecto el offset es 0.
- **limit**, limita la cantidad de ítems de una respuesta JSON, por defecto el limit es 25, el máximo permitido es 50.
- **offset**, permite paginar los ítems de una respuesta JSON, por defecto el offset es 0.
- **collId**, permite filtar por coleccion id.
- **accessorieId**, Permite filtrar por id de accesorio relacionado al producto
- **productWfId**, permite filtrar por producto web id.
- **productId**, permite filtrar por producto id.
- **brand**, permite filtrar por marca id.
- **brand_static**, permite filtrar por nombre de marca.
- **with_stock**, Filtra y devuelve los productos que sólo tienen stock en la sucursal asociada al market
- **minPrice**, permite filtrar por el minimo de precio
- **maxPrice**, permite filtrar por el maximo de precio
- **expand**, indicar opcional para expandir nodos (String)
  
#### Ejemplos
- `GET /v1/markets/:idMarket/products/market_info.json?limit=10&offset=0`
- `GET /v1/markets/:idMarket/products/market_info.json?collId=22`
- `GET /v2/markets/:idMarket/products/market_info.json?minPrice=22000&maxPrice=230000`

```json title="Response /v1/markets/1/products/market_info.json"
{
  "code": "200",
  "href": "https://api.bsale.io?&productId=2701&mkId=2&priceList=4",
  "count": 1,
  "limit": 25,
  "offset": 0,
  "data": [
    {
      "id": 1010,
      "productId": 2701,
      "idVariantDefault": 10647,
      "urlSlug": "gorro-wonderwink-400a-negro",
      "name": "Gorro Wonderwink 400A Negro",
      "description": "<p>65% Poli&eacute;ster 35% Algod&oacute;n</p><ul><li>Unisex fit.</li><li>Cinta trasera ajustable.</li><li>Banda el&aacute;stica cubierta.</li><li>Banda de pa&ntilde;o para el sudor 100% Algod&oacute;n</li></ul>",
      "descriptions": {
        "href": "https://api.bsale.io/v2/products/market_info/1010.json?expand=[descriptions]"
      },
      "displayNotice": "",
      "state": 1,
      "mkProductType": "normal",
      "productType": {
        "id": 2,
        "href": "https://api.bsale.io/v2/product_types/2.json"
      },
      "productTaxes": {
        "href": "https://api.bsale.io/v2/products/2701/product_taxes.json"
      },
      "urlImg": "https://dojiw2m9tvv09.cloudfront.net/2414/product/400_blac_011246.jpg",
      "pictures": {
        "href": "https://api.bsale.io/v2/products/market_info/1010/pictures.json"
      },
      "urlVideo": null,
      "shippingUnit": null,
      "width": null,
      "depth": null,
      "length": null,
      "baseInfo": {
        "id": 2701,
        "name": "GORRO WW 400A BLACK",
        "classification": 0,
        "stockControl": 0,
        "href": "https://api.bsale.io/v2/products/2701.json"
      },
      "variant": {
        "id": 10647,
        "price": 5462.18487394958,
        "description": "OS",
        "finalPrice": 6500,
        "fpWithoutDiscount": 6500,
        "taxPrice": 1038,
        "taxDiscountPrice": 1038,
        "netDiscountPrice": 5462,
        "unlimitedStock": 0,
        "allowDecimal": 0,
        "allowNegativeStock": 0,
        "code": "1530725900298",
        "discount": {
          "percent": 0,
          "minimumQuantity": 0
        }
      },
      "variants": {
        "href": "https://api.bsale.io/v2/products/market_info/1010/variants.json"
      },
      "discounts": null,
      "stocks": {
        "href": "https://api.bsale.io/v2/stocks.json?product=2701"
      },
      "order": 1,
      "totalStock": 0,
      "collections": {
        "href": "https://api.bsale.io/v2/products/2701/collections.json"
      }
    }
  ]
}
```
## GET Colecciones
- GET `/v1/markets/collections/list.json` retornará colecciones creadas

:::info

Las colecciones son un conjunto de productos web asociados por un criterio basado en el cliente.

:::

#### Parámetros
- **limit** limita la cantidad de ítems de una respuesta JSON, por defecto el limit es 25, el máximo permitido es 50.
- **offset** permite paginar los ítems de una respuesta JSON, por defecto el offset es 0.
- **state** Permite filtrar sólo colecciones activas.
- **integration** Permite obtener  las colecciones asociadla a una integración
  
#### Ejemplos
- `GET /v1/markets/collections/list.json?state=1`


```json title="Response /markets/1/collections.json"
{
  "code": "200",
  "href": "https://api.bsale.io/v2/markets/1/collections.json",
  "count": 40,
  "limit": 25,
  "offset": 0,
  "data": [
    {
      "id": 18,
      "name": "Accesorios de limpieza",
      "urlSlug": "accesorios-de-limpieza",
      "state": 1,
      "lyId": null,
      "mkId": 1,
      "tdId": 26,
      "integration": null
    },
    {
      "id": 11,
      "name": "Accesorios y repuestos para mamaderas",
      "urlSlug": "accesorios-y-repuestos-para-mamaderas",
      "state": 1,
      "lyId": null,
      "mkId": 1,
      "tdId": 19,
      "integration": null
    }
  ],
  "next": "https://api.bsale.io/v2/markets/1/collections.json?limit=25&offset=25"
}
```
### GET una colección
- GET `/v1/markets/:idMarket/products/market_info.json?collId=:id` Retornará las colecciones de productos asociados al market.

##### Ejemplos
- `GET /v1/markets/1/products/market_info.json?collId=23`

```json 
{
    "code": "200",
    "href": "https://api.bsale.io//v2/markets/1/products/market_info.json?&collId=2894&mkId=1&priceList=5",
    "count": 1,
    "limit": 25,
    "offset": 0,
    "data": [
        {
            "id": 342,
            "productId": 145,
            "idVariantDefault": 253,
            "urlSlug": "bicicleta-mtb-limited-talla-l",
            "name": "Bicicleta MTB Limited Talla L",
            "description": "<p>Bicicleta MTB Limited Talla L Aro 29\"<br>Bicicleta Mountain Bike Modelo Limited de marco Talla L con Aro 29\", marca Ram.</p>",
            "descriptions": {
                "href": "https://api.bsale.io/v2/products/market_info/342.json?expand=[descriptions]"
            },
            "displayNotice": "",
            "state": 1,
            "mkProductType": "normal",
            "productType": {
                "id": 5,
                "href": "https://api.bsale.io/v2/product_types/5.json"
            },
            "productTaxes": {
                "href": "https://api.bsale.io/v2/products/145/product_taxes.json"
            },
            "urlImg": "https://dojiw2m9tvv09.cloudfront.net/69237/product/tallal7785.jpg",
            "pictures": {
                "href": "https://api.bsale.io/v2/products/market_info/342/pictures.json"
            },
            "urlVideo": null,
            "shippingUnit": null,
            "width": null,
            "depth": null,
            "length": null,
            "baseInfo": {
                "id": 145,
                "name": "Bicicleta Hombre",
                "classification": 0,
                "stockControl": 0,
                "href": "https://api.bsale.io/v2/products/145.json"
            },
            "variant": {
                "id": 253,
                "price": 243697.478991597,
                "description": "L",
                "finalPrice": 290000,
                "fpWithoutDiscount": 290000,
                "taxPrice": 46302.52,
                "taxDiscountPrice": 46302.52,
                "netDiscountPrice": 243697.48,
                "unlimitedStock": 0,
                "allowDecimal": 0,
                "allowNegativeStock": 0,
                "code": "1654607597922",
                "discount": {
                    "percent": 0,
                    "minimumQuantity": 0
                }
            },
            "variants": {
                "href": "https://api.bsale.io/v2/products/market_info/342/variants.json"
            },
            "discounts": null,
            "stocks": {
                "href": "https://api.bsale.io/v2/stocks.json?product=145"
            },
            "integration": {
                "order_by": 4
            },
            "order": 1,
            "totalStock": 160,
            "collections": {
                "href": "https://api.bsale.io/v2/products/145/collections.json"
            }
        }
    ]
}
```

## GET imágenes de productos web
- GET `/v2/products/market_info/23/pictures.json` Retornará las imagenes del producto web.

#### Parámetros
- **limit** limita la cantidad de ítems de una respuesta JSON, por defecto el limit es 25, el máximo permitido es 50.
- **offset** permite paginar los ítems de una respuesta JSON, por defecto el offset es 0.
- **productId** id del producto (int)
- **expand** indicar opcional para expandir nodos (String)

```json 
{
  "code": 200,
  "href": "https://api.bsale.io?&id=23",
  "count": 3,
  "limit": 0,
  "offset": 25,
  "data": [
    {
      "id": 46,
      "href": "https://dojiw2m9tvv09.cloudfront.net/2414/product/601_red_sil_fv3665.jpg",
      "state": 1,
      "legendImage": " "
    },
    {
      "id": 47,
      "href": "https://dojiw2m9tvv09.cloudfront.net/2414/product/601_sk_5x7_hr3666.jpg",
      "state": 1,
      "legendImage": " "
    },
    {
      "id": 1347,
      "href": "https://dojiw2m9tvv09.cloudfront.net/2414/product/601_red_part_fv_m6145.jpg",
      "state": 1,
      "legendImage": " "
    }
  ],
  "previous": "https://api.bsale.io?limit=0&offset=-25&id=23"
}
```
- **id** id de la imagen asociado al producto web (Integer)
- **href**  URL de imagen (String)
- **state** estado de la imagen del producto web,  activo(1) o inactivo (0) (Boolean)
- **legendImage** Descripción de imagen (String)
 
## GET un producto web
- GET ` /v2/products/market_info/23.json` Retornará información asociada a un producto específico

```json 
{
  "code": 200,
  "data": {
    "id": 39,
    "productId": 40,
    "classification": 0,
    "idVariantDefault": 44,
    "urlSlug": "coca-cola-zero-desechable",
    "name": "COCA COLA ZERO DESECHABLE",
    "description": "",
    "descriptions": {
      "href": "https://api.bsale.io/v2/products/market_info/39.json?expand=[descriptions]"
    },
    "displayNotice": "",
    "state": 1,
    "mkProductType": "normal",
    "productType": {
      "id": 5,
      "href": "https://api.bsale.io/v2/product_types/5.json"
    },
    "productTaxes": {
      "href": "https://api.bsale.io/v2/products/40/product_taxes.json"
    },
    "urlImg": "https://dojiw2m9tvv09.cloudfront.net/11132/product/cocazero9766.jpg",
    "pictures": [
      {
        "id": 39,
        "href": "https://dojiw2m9tvv09.cloudfront.net/11132/product/cocazero9766.jpg",
        "state": 1,
        "legendImage": " "
      }
    ],
    "urlVideo": null,
    "shippingUnit": null,
    "width": 0,
    "depth": 0,
    "length": 0,
    "baseInfo": {
      "id": 40,
      "prestashopProductId": 0,
      "prestashopAttributeId": 0,
      "name": "COCA COLA ZERO DESECHABLE",
      "description": null,
      "classification": 0,
      "basePrice": 0.840336134453782,
      "state": 0,
      "ledgerAccount": "",
      "costCenter": "",
      "allowDecimal": 0,
      "stockControl": 1,
      "printDetailPack": 0,
      "href": "https://api.bsale.io/v2/products/40.json"
    },
    "variants": [
      {
        "id": 44,
        "productId": 40,
        "description": "1500 CC",
        "unlimitedStock": 0,
        "allowNegativeStock": 0,
        "showInEcommerce": 1,
        "state": 0,
        "barCode": "123456825",
        "code": "123456825",
        "imagestionCenterCost": 0,
        "imagestionAccount": 0,
        "imagestionConceptCod": 0,
        "imagestionProyectCod": 0,
        "imagestionCategoryCod": 0,
        "imagestionProductId": 0,
        "serialNumber": 0,
        "prestashopCombinationId": 0,
        "prestashopValueId": 0,
        "prestashopSync": 0,
        "booticValueId": 0,
        "booticSync": 0,
        "attributeValues": [
          {
            "id": 29,
            "name": "Marca",
            "value": "COCA COLA",
            "required": 0,
            "integration": null
          }
        ],
        "prices": [],
        "salePrices": [],
        "discounts": [],
        "stockInfo": {
          "href": "https://api.bsale.io/v2/stocks.json?variant=44"
        },
        "shipping": {
          "href": "https://api.bsale.io/v2/products/market_info/39.json?expand=[shipping]"
        },
        "marketDescription": null,
        "pictures": null,
        "integration": {
          "meli": "33501327162"
        },
        "href": "https://api.bsale.io/v2/variants/44.json"
      }
    ],
    "relatedVariants": [
      {
        "id": 44,
        "href": "https://api.bsale.io/v2/variants/44.json"
      }
    ],
    "collections": [
      {
        "id": 5,
        "name": "BEBIDAS",
        "urlSlug": "bebidas",
        "state": 1,
        "description": null,
        "image": null,
        "lyId": null,
        "mkId": 1,
        "tdId": null,
        "integration": null,
        "href": "https://api.bsale.io/v2/collections/5.json"
      },
      {
        "id": 25,
        "name": "WISEPI",
        "urlSlug": "wisepi",
        "state": 0,
        "description": null,
        "image": null,
        "lyId": null,
        "mkId": 1,
        "tdId": null,
        "integration": null,
        "href": "https://api.bsale.io/v2/collections/25.json"
      },
      {
        "id": 181,
        "name": "General",
        "urlSlug": "general",
        "state": 1,
        "description": null,
        "image": null,
        "lyId": null,
        "mkId": 2,
        "tdId": null,
        "integration": null,
        "href": "https://api.bsale.io/v2/collections/181.json"
      },
      {
        "id": 183,
        "name": "ABIOTICA",
        "urlSlug": "abiotica",
        "state": 1,
        "description": null,
        "image": null,
        "lyId": null,
        "mkId": 1,
        "tdId": null,
        "integration": null,
        "href": "https://api.bsale.io/v2/collections/183.json"
      }
    ],
    "discounts": [],
    "stocks": {
      "href": "https://api.bsale.io/v2/stocks.json?product=40"
    },
    "integration": {
      "meli-281088268": "MLC479123576"
    },
    "brand": {
      "id": 5,
      "name": ""
    }
  }
}
```
## POST Descripción Web
- POST `/v2/products/market_info.json` Genera un registro de Descripción Web asociado a un producto.

Existen dos tipos de descripción web.
- **normal:** Crea descripción web asociando todas las variantes que contenga el producto.
- **virtual:** Crea descripción única de una variante de producto.

:::note
Sólo es posible crear una descripción **"normal"** y múltiples **"virtuales"**.
:::

- **productId:** Id del producto (Obligatorio)
- **idVariantDefault:** Id de la variante que se mostrará por defecto (Obligatorio)
- **name:** Nombre del producto web (Obligatorio)
- **displayNotice:** Texto a destacar dentro de la publicación (NO Obligatorio)
- **urlImg:** Imágen por defecto del producto - se entrega la Url de la imagen almacenada previamente en un servicio, formato jpeg, png (NO Obligatorio)
- **urlVideo:** Video asociado al producto - se entrega la Url del video donde esté almacenado (NO Obligatorio)
- **description:** Texto descriptivo del producto (NO Obligatorio)
- **variantShippingAll:** (1) Asigna las mismas medidas a todas las variantes normales. (Obligatorio)
- **order:** Importancia dentro de la colección web (NO Obligatorio)
- **productType:** Tipo de la descripción web. (Obligatorio)
- **orderedVariants:** En base a la desc web normal, se ordenan las variantes según tantas creadas (NO Obligatorio)
- **descriptions:** Agregar descripciones adicionales, en caso que tenga creadas más de una. ( NO Obligatorio )
- **pictures:** Imágenes relacionadas al producto, se agregan tantas como se desee, en nodos separados (NO obligatorio)
- **width:** Ancho del producto (NO obligatorio)
- **depth:** Profundidad del producto (NO obligatorio)
- **length:** Largo del producto (NO obligatorio)
- **integration:** Orden de la variante ascendente, descendente ( Opcional )
- **state:** 1 activo - 0 inactivo (Obligatorio)
- **legendImage:** Fotos asociadas a la variante por sku con coma. Ejemplo: [1222,1233]( Opcional )
- **order:** Relacionado a “pictures” carga de múltiples imágenes, las ordena en base a las variantes.

**Ejemplo de orden de Variantes.**
``` json
"orderedVariants": [
    {
        "id": 2, // id de la variante
        "order": 2, // orden de la variante según tantas creadas
        "show": 1 // Mostrar
    }
],
```
#### Ejemplo JSON

```json
{
    "productId": 9,
    "idVariantDefault": 53,
    "name": "test Api000012",
    "displayNotice": "",
    "urlImg": "https://wilsonstore.cl/cdn/shop/files/WILWR8024301001_1_604x.jpg?v=1695307375",
    "urlVideo": "null",
    "description": "test api999",
    "variantShippingAll": 1,
    "order": 1,
    "state": 1,
    "productType": "normal",
    "integration": {
        "order_by": 4
    },
    "orderedVariants": [
        {
            "id": 2,
            "order": 2,
            "show": 1
        }
    ],
    "variantsShipping": [
        {
            "width": 2.0,
            "depth": 1.5,
            "length": 0.8
        }
    ],
    "pictures": [
        {
            "href": "https://wilsonstore.cl/cdn/shop/files/WILWR8024301001_1_604x.jpg?v=1695307375",
            "legendImage": "legendImage",
            "order": 0
        }
    ]
}
```

#### Response
```json
{
    "code": 200,
    "data": {
        "id": 57,
        "productId": 9,
        "idVariantDefault": 53,
        "urlSlug": "test-api000012",
        "name": "test Api000012",
        "description": "test api999",
        "descriptions": {
            "href": "https://api.bsale.io/v3/products/market_info/57/descriptors.json"
        },
        "displayNotice": "",
        "state": 1,
        "mkProductType": "normal",
        "productType": {
            "id": 4,
            "href": "https://api.bsale.io/v2/product_types/4.json"
        },
        "productTaxes": {
            "href": "https://api.bsale.io/v3/products/9/product_taxes.json"
        },
        "urlImg": "https://wilsonstore.cl/cdn/shop/files/WILWR8024301001_1_604x.jpg?v=1695307375",
        "pictures": {
            "href": "https://api.bsale.io/v3/products/9/product_images.json"
        },
        "urlVideo": "",
        "shippingUnit": 0,
        "width": 0,
        "depth": 0,
        "length": 0,
        "baseInfo": null,
        "variants": {
            "href": "https://api.bsale.io/v3/products/market_info/57/variants.json"
        },
        "relatedVariants": {
            "href": "https://api.bsale.io/v3/products/9/variants.json"
        },
        "collections": {
            "href": "https://api.bsale.io/v3/products/market_info/57/collections.json"
        },
        "brand": {
            "href": "https://api.bsale.io/v3/products/9/brand.json"
        },
        "variantShipping": {
            "href": "https://api.bsale.io/v3/products/market_info/57/variant_shipping.json"
        },
        "discounts": null,
        "stocks": {
            "href": "https://api.bsale.io/v2/stocks.json?product=9"
        },
        "integration": {
            "order_by": "4"
        },
        "variant": {
            "id": 53,
            "price": null,
            "description": null,
            "finalPrice": null,
            "unlimitedStock": null,
            "allowDecimal": null,
            "allowNegativeStock": null,
            "code": null,
            "integrations": null,
            "discount": {
                "percent": null,
                "minimumQuantity": null
            }
        },
        "order": null,
        "link": "product/test-api000012"
    }
}
```

## PUT Descripcion Web

- PUT /v2/products/market_info/58.json

Se debe enviar un json con la siguiente estructura.

#### Ejemplo Json

```json
{
    "name": "cambio de nombre prueba 1",
    "description": "prueba de cambio de descripcion",
    "displayNotice": "prueba de cambio de descripcion (1)"
}
```

#### Response

```json
{
    "code": 201,
    "data": {
        "id": 58,
        "productId": 9,
        "idVariantDefault": 53,
        "urlSlug": "cambio-de-nombre-prueba-1",
        "name": "cambio de nombre prueba 1",
        "description": "prueba de cambio de descripcion",
        "descriptions": {
            "href": "https://api.bsale.io/v3/products/market_info/58/descriptors.json"
        },
        "displayNotice": "prueba de cambio de descripcion (1)",
        "state": 1,
        "mkProductType": "normal",
        "productType": null,
        "productTaxes": {
            "href": "https://api.bsale.io/v3/products/9/product_taxes.json"
        },
        "urlImg": "https://wilsonstore.cl/cdn/shop/files/WILWR8024301001_1_604x.jpg?v=1695307375",
        "pictures": {
            "href": "https://api.bsale.io/v3/products/9/product_images.json"
        },
        "urlVideo": "https://youtu.be/a0zseMeIQsA?feature=shared",
        "shippingUnit": 0,
        "width": 0,
        "depth": 0,
        "length": 0,
        "baseInfo": null,
        "variants": {
            "href": "https://api.bsale.io/v3/products/market_info/58/variants.json"
        },
        "relatedVariants": {
            "href": "https://api.bsale.io/v3/products/9/variants.json"
        },
        "collections": {
            "href": "https://api.bsale.io/v3/products/market_info/58/collections.json"
        },
        "brand": {
            "href": "https://api.bsale.io/v3/products/9/brand.json"
        },
        "variantShipping": {
            "href": "https://api.bsale.io/v3/products/market_info/58/variant_shipping.json"
        },
        "discounts": null,
        "stocks": {
            "href": "https://api.bsale.io/v2/stocks.json?product=9"
        },
        "integration": null,
        "variant": {
            "id": 53,
            "price": null,
            "description": null,
            "finalPrice": null,
            "unlimitedStock": null,
            "allowDecimal": null,
            "allowNegativeStock": null,
            "code": null,
            "integrations": null,
            "discount": {
                "percent": null,
                "minimumQuantity": null
            }
        },
        "order": 1,
        "link": "product/cambio-de-nombre-prueba-1"
    }
}
```
## POST un producto en colección

- POST /v1/collections/1/products.json

- **code:** SKU de la variante

Se debe enviar un json con la siguiente estructura.

```json
{
    "code": "1642607135"
}
```
#### Response

```json
{
    "code": 200,
    "data": {
        "id": 38,
        "pwfId": 44,
        "productId": null,
        "collId": 1,
        "mkCollection": null,
        "href": "https://api.bsale.io/v3/collections_related/38.json"
    }
}
```

## POST medidas producto web

- POST /v2/variants/shipping.json

#### Parámetros

- **match:** Nodo que indica cuando una descripción web tiene medidas iguales para todas sus variantes ó no (Obligatorio)  
**1:** Cada variante tiene medidas propias  
**0:** Todas las variantes poseen medidas iguales

Se deje enviar un json con la siguiente estructura.

```json
{
    "productVariantId": 53,
    "weight": 20,
    "width": 14,
    "deph": 14,
    "length": 14,
    "match": 1 
}
```
#### Response

```json
{
    "code": 201,
    "data": {
        "id": 26,
        "weight": 20,
        "width": 14,
        "deph": 14,
        "length": 14,
        "match": 1,
        "productVariantId": 53
    }
}
```
## PUT medidas un producto web

- PUT /v2/variants/53/shipping.json

#### Parámetros

- **match:** Al enviarlo, modifica las medidas asociadas a todas las variantes (No obligatorio)

Se debe enviar un Json con la siguiente estructura

```json
{
"productVariantId": 53,
"weight": 20,
"width": 14,
"deph": 14,
"length": 14
}
```

#### Response

```json
{
"code": 200,
"data": {
"id": 19,
"weight": 20,
"width": 14,
"deph": 14,
"length": 14,
"match": 1,
"productVariantId": 53
}
}
```