---
sidebar_position: 41
title: Descripción web
description: Listar información de productos ecommerce
slug: /descripcion-web
---


# Descripción web
Listar productos y servicios que se contengan en la tienda en línea de Bsale. Para ello debes conocer el ID del Martket. Este dato puedes obtenerlo con el Endpoint
https://credential.bsale.io/v1/instances/basic/:access_token.json sustituyendo el :access_token por el tuyo.

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

## GET descripciones web
- GET ` /v1/markets/:idMarket/products/market_info.json` retornará las descripciones de productos publicados en el ecommerce

#### Parámetros
- **limit**, limita la cantidad de items de una respuesta JSON, por defecto el limit es 25, el máximo permitido es 50.
- **offset**, permite paginar los items de una respuesta JSON, por defecto el offset es 0.
- **limit**, limita la cantidad de items de una respuesta JSON, por defecto el limit es 25, el máximo permitido es 50.
- **offset**, permite paginar los items de una respuesta JSON, por defecto el offset es 0.
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
- **limit** limita la cantidad de items de una respuesta JSON, por defecto el limit es 25, el máximo permitido es 50.
- **offset** permite paginar los items de una respuesta JSON, por defecto el offset es 0.
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
- **limit** limita la cantidad de items de una respuesta JSON, por defecto el limit es 25, el máximo permitido es 50.
- **offset** permite paginar los items de una respuesta JSON, por defecto el offset es 0.
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

