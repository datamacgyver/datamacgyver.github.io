import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from '../styles.module.css';

type FeatureItem = {
  title: string;
  imagePath?: string; // Path to the image file (optional)
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Why us?',
    description: (
      <>
          At TwelveFive, we do more than offer data solutions - we provide the expertise and strategic insights needed to
          help businesses overcome growth barriers and unlock new opportunities. With deep experience in data strategy,
          advanced analytics, and personalized consulting, we turn complex challenges into actionable strategies.

          Our approach is rooted in a pragmatic, hands-on methodology, guiding clients from reactive decision-making
          to proactive growth. Partnering with TwelveFive means gaining a dedicated team committed to your long-term
          success, equipped with the tools, insights, and support to help you thrive in a competitive landscape.
      </>
    ),
  },
  {
    title: 'Rob Mansfield, PhD',
    imagePath: require('@site/static/img/rob_m_bw_square_2025.jpg').default,
    description: (
      <>
          18+ years solving data and AI challenges for clients, working at the interface between technology and business value.
      </>
    ),
  }
];

function Feature({title, imagePath, description}: FeatureItem) {
  return (
    <div className={clsx('col col--6')}>
      {imagePath && (
        <div className="text--center">
          <img src={imagePath} className={styles.featureSvg} alt={title} />
        </div>
      )}
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function Homepage2Me(): ReactNode {
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
