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
    title: 'Service 1',
    imagePath: '/img/path-to-image1.svg',
    description: (
      <>
          Description for Service 1
      </>
    ),
  },
  {
    title: 'Service 2',
    imagePath: '/img/path-to-image2.svg',
    description: (
      <>
          Description for Service 2
      </>
    ),
  },
  {
    title: 'Service 3',
    imagePath: '/img/path-to-image3.svg',
    description: (
      <>
          Description for Service 3
      </>
    ),
  },
  {
    title: 'Service 4',
    imagePath: '/img/path-to-image4.svg',
    description: (
      <>
          Description for Service 4
      </>
    ),
  }
];

function Feature({title, imagePath, description}: FeatureItem) {
  return (
    <div className={clsx('col col--6')}>
      <div className="row">
        <div className="col col--4">
          {imagePath && (
            <div className="text--center">
              <img src={imagePath} className={styles.featureSvg} alt={title} />
            </div>
          )}
        </div>
        <div className="col col--8">
          <div className="padding-horiz--md">
            <Heading as="h3">{title}</Heading>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Homepage3Services(): ReactNode {
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
