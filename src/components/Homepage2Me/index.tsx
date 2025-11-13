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
          <div className={styles.imageContainer}>
            <a href="https://uk.linkedin.com/in/rpmansfield" target="_blank" rel="noopener noreferrer">
              <img 
                src={imagePath} 
                className={`${styles.featureSvg} ${styles.circleImage}`} 
                alt={title} 
              />
              <div className={styles.linkedinIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#333333">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </div>
            </a>
          </div>
        </div>
      )}
      <div className="text--center padding-horiz--md">
        <Heading as="h2">{title}</Heading>
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
