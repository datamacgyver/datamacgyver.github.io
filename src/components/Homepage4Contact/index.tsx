import React, { type ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from '../styles.module.css';

export default function Homepage4Contact(): ReactNode {
  return (
    <section className={styles.featuresTwo}>
      <div className="container">
        <div className="row">
          <div className="col col--12 text--center">
            <Heading as="h2">Contact Us</Heading>
            <p>
              If any of these problems sound familiar, we'd love to hear from you! Get
                in touch to discuss how we can work together.
            </p>
            <div className={clsx(styles.contactLinks)}>
              <a href="mailto:rob.mansfield@twelvefive.co.uk"
                 className="button button--secondary button--lg margin--md">
                Email Me
              </a>
              <a href="https://www.linkedin.com/in/rpmansfield/"
                 target="_blank" rel="noopener noreferrer"
                 className="button button--secondary button--lg margin--md">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}