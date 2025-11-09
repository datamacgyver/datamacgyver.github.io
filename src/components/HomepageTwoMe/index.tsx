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
    title: 'Why us?',
    Svg: require('@site/static/img/workflow_nobackground.svg').default,
    description: (
      <>
        At TwelveFive, we do more than offer data solutions—we provide the expertise and strategic insights needed to help businesses overcome growth barriers and unlock new opportunities. With deep experience in data strategy, advanced analytics, and personalized consulting, we turn complex challenges into actionable strategies.

Our approach is rooted in a pragmatic, hands-on methodology, guiding clients from reactive decision-making to proactive growth. Partnering with TwelveFive means gaining a dedicated team committed to your long-term success, equipped with the tools, insights, and support to help you thrive in a competitive landscape.
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
  }
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--6')}>
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

export default function HomepageTwoMe(): ReactNode {
  return (
    <section className={styles.featuresTwo}>
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
