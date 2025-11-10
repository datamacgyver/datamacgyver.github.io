import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Homepage1Expertise from '@site/src/components/Homepage1Expertise';
import Homepage2Me from '@site/src/components/Homepage2Me';
import Heading from '@theme/Heading';

import styles from './index.module.css';
import Homepage3Services from "@site/src/components/Homepage3Services";
import Homepage4Contact from "@site/src/components/Homepage4Contact";

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="#contact-section">
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="TwelveFive<head />">
      <HomepageHeader />
      <main>
        <Homepage1Expertise />
        <Homepage2Me/>
        <Homepage3Services/>
        <Homepage4Contact id="contact-section"/>
      </main>
    </Layout>
  );
}
