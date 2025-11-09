import React, { type ReactNode } from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures/styles.module.css';
import Heading from '@theme/Heading';

export default function HomepageSecondSection(): ReactNode {
  return (
    <section className={styles.secondSection}>
      <div className="container">
        <div className="row">
          <div className="col col--6">
            {/* Left frame content */}
            <Heading as="h2">Left Frame Title</Heading>
            <p>Content for the left frame goes here.</p>
          </div>
          <div className="col col--6">
            {/* Right frame content */}
            <Heading as="h2">Right Frame Title</Heading>
            <p>Content for the right frame goes here.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
