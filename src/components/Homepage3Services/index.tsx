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
    imagePath: '/img/artificial-intelligence.png',
    description: (
        <> Generative AI is transforming how organisations build products, deliver services,
      and make decisions. But successful adoption takes more than turning on a new tool.
      We help teams plan and implement AI effectively - from strategy and governance
      through to implementation and product alignment - ensuring solutions that are ethical,
      practical, and deliver measurable value.
        </>
    ),
  }

const rubberDuck = {
    title: 'Professional Rubber Duck',
    imagePath: '/img/rubber-duck.png',
    description: (
      <>       Sometimes you just need a second pair of eyes. Whether you’re troubleshooting a stubborn
      problem, refining a design, or sense something isn’t quite right, we’ll help you think
      it through. Acting as your professional “rubber duck,” we provide experienced,
      pragmatic feedback to turn uncertainty into clear next steps.
      </>
    ),
  }

const strategy = {
    title: 'Data Strategy Curation',
    imagePath: '/img/data-strategy.png',
    description: (
      <>
      Many organisations either lack a clear data strategy or have one that’s disconnected
      from their business and product goals. We help you define and align a strategy that
      drives measurable outcomes - assessing your current capabilities, identifying gaps,
      and creating a roadmap that turns data into a true enabler of growth.
      </>
    ),
  }

const arch = {
    title: 'Architecture & Technical Planning',
    imagePath: '/img/architecture.png',
    description: (
      <>      The Data and AI landscape changes fast, and connecting the right technologies in a
      secure, scalable way can be challenging. We help you design architectures that balance
      innovation with practicality - whether you’re building from scratch or modernising
      existing systems - ensuring your foundations are built for performance, governance,
      and growth.
      </>
    ),
  }

const modelling = {
    title: 'Data Modelling & Integration',
    imagePath: '/img/modelling.png',
    description: (
      <>  Building effective data models and reliable integrations is about more than choosing
      between Kimball or Data Vault, then building a medallion architecture. We help you design and
      implement data structures that are consistent, discoverable, and aligned with your
      business goals - ensuring your teams can trust and use the data they depend on.
      </>
    ),
  }

const dataSci = {
    title: 'Date Science & Insights',
    imagePath: '/img/data-science.png',
    description: (
      <>
          Data science remains essential for turning information into impact. We help you design
      and implement models, dashboards, and alerting systems that deliver actionable insight,
      not just numbers. Our approach blends statistical rigour with practical engineering to
      ensure results that align with real business value.
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

export default function Homepage3Services({ id }: { id?: string }): ReactNode {
  return (
    <section id={id} className={styles.featuresOne}>
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
