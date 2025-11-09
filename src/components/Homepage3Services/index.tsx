import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from '../styles.module.css';

type FeatureItem = {
  title: string;
  imagePath?: string; // Path to the image file (optional)
  description: ReactNode;
};

const GenAI = {
    title: 'Generative AI Enablement',
    imagePath: '/img/path-to-image1.svg',
    description: (
        <> You may have heard there's some new technology out and that it's going to change the
           world. Well, there is - and it is - but you can't just turn it on, as you may well
           have already found out! If you need a hand with Implementation, Governance, Strategy
           or Product Alignment we can help!
        </>
    ),
  }

const rubberDuck = {
    title: 'Professional Rubber Duck',
    imagePath: '/img/path-to-image1.svg',
    description: (
      <> Sometimes you know it's broken but you aren't sure why, sometimes you think you know
          what you want to do but need someone who's been there and done that to help clarify
          your plans. That someone is probably us!
      </>
    ),
  }

const strategy = {
    title: 'Data Strategy Curation',
    imagePath: '/img/path-to-image1.svg',
    description: (
      <>
          Many companies don't have a data strategy, many more have one that no one reads or
          worse, one that's independent of their business and product strategy. We are able to do
          a full review of where you are, and what you need to get to where you are going.
      </>
    ),
  }

const arch = {
    title: 'Architecture & Technical Planning',
    imagePath: '/img/path-to-image2.svg',
    description: (
      <>Data & AI technology moves apace, today there's more snakeoil out there than useful
          tech and attaching it all together can feel ferociously complicated. We can help
          you navigate this quagmire, whether you are after a brown- or green-field
          implementation.
      </>
    ),
  }

const modelling = {
    title: 'Data Modelling & Integration',
    imagePath: '/img/path-to-image3.svg',
    description: (
      <>
          Do we use Kimball or Data Vault? Is a medallion architecture suitable for our
          business? Why is it that our analysts can never find what they need? Who manages
          all these data anyway? If these are questions you recognise then we can help!
      </>
    ),
  }

const dataSci = {
    title: 'Date Science & Insights',
    imagePath: '/img/path-to-image4.svg',
    description: (
      <>
          Once the sexiest job of the 21st Century, before AI became the hot kid on the block.
          Data Science is still vital, as are dashboards and alerts. Implementing these
          properly can be complicated if you approach them as a "normal" software
          engineering. We can help you get tangible results aligned to real value.
      </>
    ),
  }

const FeatureList: FeatureItem[] = [GenAI, rubberDuck, strategy, arch, modelling, dataSci];

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
    <section className={styles.featuresOne}>
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
