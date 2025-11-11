import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from '../styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Data Processing & Management',
    Svg: require('@site/static/img/workflow_nobackground.svg').default,
    description: (
      <>
        We specialise in data ingestion, standardisation, and hygiene across multiple sources. Our
          process ensures your data is ready for analysis, driving meaningful insights and reducing
          the friction between raw data and actionable intelligence.
      </>
    ),
  },
  {
    title: 'Analytics, Insights & Knowledge',
    Svg: require('@site/static/img/chat.svg').default,
    description: (
      <>
        Harness the power of data through advanced analytics, including GenAI-driven
          insights, predictive modeling, and diagnostic tools. Our solutions help you
          understand what’s happened, why it happened, and what’s likely to happen
          next—empowering you to make data-informed decisions.
      </>
    ),
  },
  {
    title: 'Strategic Consulting',
    Svg: require('@site/static/img/strategy.svg').default,
    description: (
      <>
        We align your data strategy with business objectives, ensuring your infrastructure
          supports both current needs and future growth. From digital transformation to process
          optimisation, we provide the direction and tools to keep you competitive.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function Homepage1Expertise(): ReactNode {
  return (
    <section className={styles.featuresOne}>
      <Heading as="h2">Experience</Heading>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
