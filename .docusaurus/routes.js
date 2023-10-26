import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/docusaurus-public-api/blog',
    component: ComponentCreator('/docusaurus-public-api/blog', '45c'),
    exact: true
  },
  {
    path: '/docusaurus-public-api/blog/archive',
    component: ComponentCreator('/docusaurus-public-api/blog/archive', '30c'),
    exact: true
  },
  {
    path: '/docusaurus-public-api/blog/first-blog-post',
    component: ComponentCreator('/docusaurus-public-api/blog/first-blog-post', 'bbc'),
    exact: true
  },
  {
    path: '/docusaurus-public-api/blog/long-blog-post',
    component: ComponentCreator('/docusaurus-public-api/blog/long-blog-post', '0a9'),
    exact: true
  },
  {
    path: '/docusaurus-public-api/blog/mdx-blog-post',
    component: ComponentCreator('/docusaurus-public-api/blog/mdx-blog-post', 'b94'),
    exact: true
  },
  {
    path: '/docusaurus-public-api/blog/tags',
    component: ComponentCreator('/docusaurus-public-api/blog/tags', 'be3'),
    exact: true
  },
  {
    path: '/docusaurus-public-api/blog/tags/docusaurus',
    component: ComponentCreator('/docusaurus-public-api/blog/tags/docusaurus', '2db'),
    exact: true
  },
  {
    path: '/docusaurus-public-api/blog/tags/facebook',
    component: ComponentCreator('/docusaurus-public-api/blog/tags/facebook', '2e9'),
    exact: true
  },
  {
    path: '/docusaurus-public-api/blog/tags/hello',
    component: ComponentCreator('/docusaurus-public-api/blog/tags/hello', '0e0'),
    exact: true
  },
  {
    path: '/docusaurus-public-api/blog/tags/hola',
    component: ComponentCreator('/docusaurus-public-api/blog/tags/hola', '866'),
    exact: true
  },
  {
    path: '/docusaurus-public-api/blog/welcome',
    component: ComponentCreator('/docusaurus-public-api/blog/welcome', 'cc6'),
    exact: true
  },
  {
<<<<<<< Updated upstream
    path: '/docusaurus-public-api/Changelog',
    component: ComponentCreator('/docusaurus-public-api/Changelog', 'd6e'),
    exact: true
  },
  {
=======
>>>>>>> Stashed changes
    path: '/docusaurus-public-api/CL/tags',
    component: ComponentCreator('/docusaurus-public-api/CL/tags', '3d6'),
    exact: true
  },
  {
    path: '/docusaurus-public-api/CL/tags/webhooks',
    component: ComponentCreator('/docusaurus-public-api/CL/tags/webhooks', '5a2'),
    exact: true
  },
  {
    path: '/docusaurus-public-api/FAQ',
    component: ComponentCreator('/docusaurus-public-api/FAQ', '378'),
    exact: true
  },
  {
    path: '/docusaurus-public-api/markdown-page',
    component: ComponentCreator('/docusaurus-public-api/markdown-page', '058'),
    exact: true
  },
  {
    path: '/docusaurus-public-api/MX/tags',
    component: ComponentCreator('/docusaurus-public-api/MX/tags', '6f7'),
    exact: true
  },
  {
    path: '/docusaurus-public-api/MX/tags/webhooks',
    component: ComponentCreator('/docusaurus-public-api/MX/tags/webhooks', '346'),
    exact: true
  },
  {
    path: '/docusaurus-public-api/Oauth',
    component: ComponentCreator('/docusaurus-public-api/Oauth', '4ff'),
    exact: true
  },
  {
    path: '/docusaurus-public-api/PE/tags',
    component: ComponentCreator('/docusaurus-public-api/PE/tags', '828'),
    exact: true
  },
  {
    path: '/docusaurus-public-api/PE/tags/webhooks',
    component: ComponentCreator('/docusaurus-public-api/PE/tags/webhooks', '691'),
    exact: true
  },
  {
    path: '/docusaurus-public-api/Primeros-pasos',
    component: ComponentCreator('/docusaurus-public-api/Primeros-pasos', '421'),
    exact: true
  },
  {
    path: '/docusaurus-public-api/CL',
    component: ComponentCreator('/docusaurus-public-api/CL', 'fc4'),
    routes: [
      {
        path: '/docusaurus-public-api/CL/atributos-dinamicos',
        component: ComponentCreator('/docusaurus-public-api/CL/atributos-dinamicos', 'a21'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-public-api/CL/clientes',
        component: ComponentCreator('/docusaurus-public-api/CL/clientes', 'fff'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-public-api/CL/codigos-tributarios',
        component: ComponentCreator('/docusaurus-public-api/CL/codigos-tributarios', 'd8c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-public-api/CL/condicion-de-venta',
        component: ComponentCreator('/docusaurus-public-api/CL/condicion-de-venta', '139'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-public-api/CL/configuracion/webhooks',
        component: ComponentCreator('/docusaurus-public-api/CL/configuracion/webhooks', '798'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-public-api/CL/descripcion-web',
        component: ComponentCreator('/docusaurus-public-api/CL/descripcion-web', '28f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-public-api/CL/descuentos',
        component: ComponentCreator('/docusaurus-public-api/CL/descuentos', 'fcc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-public-api/CL/devoluciones',
        component: ComponentCreator('/docusaurus-public-api/CL/devoluciones', '798'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-public-api/CL/documentos',
        component: ComponentCreator('/docusaurus-public-api/CL/documentos', '3f4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-public-api/CL/documentos-de-terceros',
        component: ComponentCreator('/docusaurus-public-api/CL/documentos-de-terceros', 'a31'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-public-api/CL/documentos/despachos',
        component: ComponentCreator('/docusaurus-public-api/CL/documentos/despachos', '747'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-public-api/CL/documentos/webhooks',
        component: ComponentCreator('/docusaurus-public-api/CL/documentos/webhooks', 'e40'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-public-api/CL/envíos',
        component: ComponentCreator('/docusaurus-public-api/CL/envíos', 'ef4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-public-api/CL/formas-de-pago',
        component: ComponentCreator('/docusaurus-public-api/CL/formas-de-pago', '6de'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-public-api/CL/formas-de-pago/webhooks',
        component: ComponentCreator('/docusaurus-public-api/CL/formas-de-pago/webhooks', '585'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-public-api/CL/impuestos',
        component: ComponentCreator('/docusaurus-public-api/CL/impuestos', '886'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-public-api/CL/listas-de-precio',
        component: ComponentCreator('/docusaurus-public-api/CL/listas-de-precio', '905'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-public-api/CL/monedas',
        component: ComponentCreator('/docusaurus-public-api/CL/monedas', '9a0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-public-api/CL/pagos',
        component: ComponentCreator('/docusaurus-public-api/CL/pagos', '1c6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-public-api/CL/pagos/webhooks',
        component: ComponentCreator('/docusaurus-public-api/CL/pagos/webhooks', 'ed2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-public-api/CL/pedidos-web',
        component: ComponentCreator('/docusaurus-public-api/CL/pedidos-web', '218'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-public-api/CL/primeros-pasos',
        component: ComponentCreator('/docusaurus-public-api/CL/primeros-pasos', '50a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-public-api/CL/productos-y-servicios',
        component: ComponentCreator('/docusaurus-public-api/CL/productos-y-servicios', '084'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-public-api/CL/productos-y-servicios/webhooks',
        component: ComponentCreator('/docusaurus-public-api/CL/productos-y-servicios/webhooks', 'a7d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-public-api/CL/stocks',
        component: ComponentCreator('/docusaurus-public-api/CL/stocks', 'b70'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-public-api/CL/sucursales',
        component: ComponentCreator('/docusaurus-public-api/CL/sucursales', '0f0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-public-api/CL/tipos-de-despacho',
        component: ComponentCreator('/docusaurus-public-api/CL/tipos-de-despacho', 'f39'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-public-api/CL/tipos-de-documentos',
        component: ComponentCreator('/docusaurus-public-api/CL/tipos-de-documentos', '82f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-public-api/CL/tipos-de-libros',
        component: ComponentCreator('/docusaurus-public-api/CL/tipos-de-libros', 'd2a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-public-api/CL/tipos-de-productos-y-servicios',
        component: ComponentCreator('/docusaurus-public-api/CL/tipos-de-productos-y-servicios', '4f8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-public-api/CL/usuarios',
        component: ComponentCreator('/docusaurus-public-api/CL/usuarios', '22a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-public-api/CL/variantes',
        component: ComponentCreator('/docusaurus-public-api/CL/variantes', 'd50'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-public-api/CL/webhooks',
        component: ComponentCreator('/docusaurus-public-api/CL/webhooks', '8c3'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/docusaurus-public-api/MX',
    component: ComponentCreator('/docusaurus-public-api/MX', '6d0'),
    routes: [
      {
        path: '/docusaurus-public-api/MX/atributos-dinamicos',
        component: ComponentCreator('/docusaurus-public-api/MX/atributos-dinamicos', 'ba9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-public-api/MX/clientes',
        component: ComponentCreator('/docusaurus-public-api/MX/clientes', '365'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-public-api/MX/codigos-tributarios',
        component: ComponentCreator('/docusaurus-public-api/MX/codigos-tributarios', 'e04'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-public-api/MX/condicion-de-venta',
        component: ComponentCreator('/docusaurus-public-api/MX/condicion-de-venta', 'a82'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-public-api/MX/configuracion/webhooks',
        component: ComponentCreator('/docusaurus-public-api/MX/configuracion/webhooks', 'cce'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-public-api/MX/descripcion-web',
        component: ComponentCreator('/docusaurus-public-api/MX/descripcion-web', 'e0c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-public-api/MX/descuentos',
        component: ComponentCreator('/docusaurus-public-api/MX/descuentos', 'f22'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-public-api/MX/devoluciones',
        component: ComponentCreator('/docusaurus-public-api/MX/devoluciones', '035'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-public-api/MX/documentos',
        component: ComponentCreator('/docusaurus-public-api/MX/documentos', 'aed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-public-api/MX/documentos-de-terceros',
        component: ComponentCreator('/docusaurus-public-api/MX/documentos-de-terceros', '1af'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-public-api/MX/documentos/despachos',
        component: ComponentCreator('/docusaurus-public-api/MX/documentos/despachos', '7b1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-public-api/MX/documentos/webhooks',
        component: ComponentCreator('/docusaurus-public-api/MX/documentos/webhooks', '099'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-public-api/MX/envíos',
        component: ComponentCreator('/docusaurus-public-api/MX/envíos', '5ec'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-public-api/MX/formas-de-pago',
        component: ComponentCreator('/docusaurus-public-api/MX/formas-de-pago', '833'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-public-api/MX/formas-de-pago/webhooks',
        component: ComponentCreator('/docusaurus-public-api/MX/formas-de-pago/webhooks', '423'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-public-api/MX/impuestos',
        component: ComponentCreator('/docusaurus-public-api/MX/impuestos', '744'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-public-api/MX/listas-de-precio',
        component: ComponentCreator('/docusaurus-public-api/MX/listas-de-precio', '048'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-public-api/MX/monedas',
        component: ComponentCreator('/docusaurus-public-api/MX/monedas', '7d7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-public-api/MX/pagos',
        component: ComponentCreator('/docusaurus-public-api/MX/pagos', 'c72'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-public-api/MX/pagos/webhooks',
        component: ComponentCreator('/docusaurus-public-api/MX/pagos/webhooks', '04d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-public-api/MX/pedidos-web',
        component: ComponentCreator('/docusaurus-public-api/MX/pedidos-web', '40d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-public-api/MX/primeros-pasos',
        component: ComponentCreator('/docusaurus-public-api/MX/primeros-pasos', '1b3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-public-api/MX/productos-y-servicios',
        component: ComponentCreator('/docusaurus-public-api/MX/productos-y-servicios', '851'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-public-api/MX/productos-y-servicios/webhooks',
        component: ComponentCreator('/docusaurus-public-api/MX/productos-y-servicios/webhooks', '2dd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-public-api/MX/stocks',
        component: ComponentCreator('/docusaurus-public-api/MX/stocks', '781'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-public-api/MX/sucursales',
        component: ComponentCreator('/docusaurus-public-api/MX/sucursales', 'fd7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-public-api/MX/tipos-de-despacho',
        component: ComponentCreator('/docusaurus-public-api/MX/tipos-de-despacho', '1e2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-public-api/MX/tipos-de-documentos',
        component: ComponentCreator('/docusaurus-public-api/MX/tipos-de-documentos', 'f06'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-public-api/MX/tipos-de-libros',
        component: ComponentCreator('/docusaurus-public-api/MX/tipos-de-libros', '670'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-public-api/MX/tipos-de-productos-y-servicios',
        component: ComponentCreator('/docusaurus-public-api/MX/tipos-de-productos-y-servicios', 'b15'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-public-api/MX/usuarios',
        component: ComponentCreator('/docusaurus-public-api/MX/usuarios', 'e9b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-public-api/MX/variantes',
        component: ComponentCreator('/docusaurus-public-api/MX/variantes', 'e55'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-public-api/MX/webhooks',
        component: ComponentCreator('/docusaurus-public-api/MX/webhooks', 'f40'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/docusaurus-public-api/PE',
    component: ComponentCreator('/docusaurus-public-api/PE', '25d'),
    routes: [
      {
        path: '/docusaurus-public-api/PE/atributos-dinamicos',
        component: ComponentCreator('/docusaurus-public-api/PE/atributos-dinamicos', '0c6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-public-api/PE/clientes',
        component: ComponentCreator('/docusaurus-public-api/PE/clientes', 'c8d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-public-api/PE/codigos-tributarios',
        component: ComponentCreator('/docusaurus-public-api/PE/codigos-tributarios', 'be2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-public-api/PE/condicion-de-venta',
        component: ComponentCreator('/docusaurus-public-api/PE/condicion-de-venta', '74c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-public-api/PE/configuracion/webhooks',
        component: ComponentCreator('/docusaurus-public-api/PE/configuracion/webhooks', '684'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-public-api/PE/descripcion-web',
        component: ComponentCreator('/docusaurus-public-api/PE/descripcion-web', 'e4b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-public-api/PE/descuentos',
        component: ComponentCreator('/docusaurus-public-api/PE/descuentos', 'dbf'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-public-api/PE/devoluciones',
        component: ComponentCreator('/docusaurus-public-api/PE/devoluciones', 'ecf'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-public-api/PE/documentos',
        component: ComponentCreator('/docusaurus-public-api/PE/documentos', 'cb9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-public-api/PE/documentos/despachos',
        component: ComponentCreator('/docusaurus-public-api/PE/documentos/despachos', '8e4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-public-api/PE/documentos/webhooks',
        component: ComponentCreator('/docusaurus-public-api/PE/documentos/webhooks', '9e7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-public-api/PE/envíos',
        component: ComponentCreator('/docusaurus-public-api/PE/envíos', '20a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-public-api/PE/formas-de-pago',
        component: ComponentCreator('/docusaurus-public-api/PE/formas-de-pago', '6ee'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-public-api/PE/formas-de-pago/webhooks',
        component: ComponentCreator('/docusaurus-public-api/PE/formas-de-pago/webhooks', 'a14'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-public-api/PE/impuestos',
        component: ComponentCreator('/docusaurus-public-api/PE/impuestos', 'd03'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-public-api/PE/listas-de-precio',
        component: ComponentCreator('/docusaurus-public-api/PE/listas-de-precio', '542'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-public-api/PE/monedas',
        component: ComponentCreator('/docusaurus-public-api/PE/monedas', '93d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-public-api/PE/pagos',
        component: ComponentCreator('/docusaurus-public-api/PE/pagos', '739'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-public-api/PE/pagos/webhooks',
        component: ComponentCreator('/docusaurus-public-api/PE/pagos/webhooks', '4d4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-public-api/PE/pedidos-web',
        component: ComponentCreator('/docusaurus-public-api/PE/pedidos-web', 'cd2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-public-api/PE/primeros-pasos',
        component: ComponentCreator('/docusaurus-public-api/PE/primeros-pasos', '254'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-public-api/PE/productos-y-servicios',
        component: ComponentCreator('/docusaurus-public-api/PE/productos-y-servicios', 'ff4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-public-api/PE/productos-y-servicios/webhooks',
        component: ComponentCreator('/docusaurus-public-api/PE/productos-y-servicios/webhooks', 'cd9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-public-api/PE/stocks',
        component: ComponentCreator('/docusaurus-public-api/PE/stocks', 'ec1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-public-api/PE/sucursales',
        component: ComponentCreator('/docusaurus-public-api/PE/sucursales', '686'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-public-api/PE/tipos-de-despacho',
        component: ComponentCreator('/docusaurus-public-api/PE/tipos-de-despacho', '8c4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-public-api/PE/tipos-de-documentos',
        component: ComponentCreator('/docusaurus-public-api/PE/tipos-de-documentos', 'c56'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-public-api/PE/tipos-de-productos-y-servicios',
        component: ComponentCreator('/docusaurus-public-api/PE/tipos-de-productos-y-servicios', '04d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-public-api/PE/usuarios',
        component: ComponentCreator('/docusaurus-public-api/PE/usuarios', '086'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-public-api/PE/variantes',
        component: ComponentCreator('/docusaurus-public-api/PE/variantes', '2c2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-public-api/PE/webhooks',
        component: ComponentCreator('/docusaurus-public-api/PE/webhooks', '338'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/docusaurus-public-api/',
    component: ComponentCreator('/docusaurus-public-api/', '224'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
