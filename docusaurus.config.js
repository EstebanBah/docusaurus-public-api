// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Documentación API Bsale',
  tagline: 'Conoce nuestras documentaciones para el desarrollo de integraciones.',
  url: 'https://EstebanBah.github.io',
  baseUrl: '/docusaurus-public-api/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'EstebanBah', // Usually your GitHub org/user name.
  projectName: 'docusaurus-public-api', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          includeCurrentVersion:false,
          versions: {
            CL: {
              banner: "none",
              label: '🌎 CL',
              badge: true,
              path: '/CL',
            },
            PE: {
              banner: "none",
              label: '🌎 PE',
            },
            MX: {
              label: '🌎 MX',
              banner: "unmaintained"
            }
          }
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          showReadingTime: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Inicio',
        logo: {
          alt: 'logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: '/primeros-pasos',
            position: 'left',
            label: 'Primeros Pasos',
          },
          {
            to: '/oauth',
            position: 'left',
            label: 'OAuth',
          },
         {
            to: '/faq',
            position: 'left',
            label: 'faq',
          },
          {
            to: '/changelog',
            position: 'right',
            label: 'Changelog',
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
          },
 //         {to: '/blog', label: 'Blog', position: 'left'},
          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Primeros pasos',
                to: '/CL/primeros-pasos',
              },
              {
                label: 'Casos de uso',
                to: '/blog',
              },
            ],
          },
          {
            title: 'Enlaces',
            items: [
              {
                label: 'Sitio web Bsale Developers',
                href: 'https://www.bsale.dev',
              },
              {
                label: 'Canal Slack',
                href: 'https://join.slack.com/t/bsaledev/shared_invite/zt-1h1cqt05g-fqnTiREZYN8g47gf~caO5w',
              },
              {
                label: 'Formulario contacto',
                href: 'https://bsalehelp.zendesk.com/hc/es/requests/new',
              },
            ],
          },
          {
            title: 'Más',
            items: [
              {
                label: 'Bsale 🇨🇱',
                href: 'https://www.bsale.cl',
              },
              {
                label: 'Bsale 🇵🇪',
                href: 'https://www.bsale.com.pe',
              },
              {
                label: 'Bsale 🇲🇽',
                href: 'https://www.bsale.com.mx',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Documentation API Bsale. Built with Docusaurus.🦖`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
    plugins: [require.resolve("@cmfcmf/docusaurus-search-local")],
};

module.exports = config;
