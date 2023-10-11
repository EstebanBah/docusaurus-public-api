import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/CL/first-steps">
            API Chile <img src="img/clemoji.png"
     alt="logo chile"
     width="20"
     height="20"></img>
          </Link>
          &nbsp;
          &nbsp;
          <Link
            className="button button--secondary button--lg"
            to="/PE/first-steps">
            API Perú <img src="img/peemoji.png"
     alt="logo Perú"
     width="20"
     height="20"></img>
          </Link>
          &nbsp;
          &nbsp;
          <Link
            className="button button--secondary button--lg"
            to="/MX/first-steps">
            API México <img src="img/mxemoji.png"
     alt="logo México"
     width="20"
     height="20"></img>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Inicio ${siteConfig.title}`}
      description="Conoce nuestras API's para el desarrollo de integraciones con Bsale. <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
