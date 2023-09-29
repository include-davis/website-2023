/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-array-index-key */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-pascal-case */
import { ReactElement, useRef, RefObject } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import styles from '../styles/services/services.module.scss';

import FAQ from './components/services/faq';
import ContactForm from './components/services/form';

import FAQS from '../json/services/faqs.json';
import PHASES from '../json/services/process_phases.json';

const faqs_col1 = FAQS.col1;
const faqs_col2 = FAQS.col2;
const phaseList = PHASES.phases;

export default function Services(): ReactElement {
  const faqs = (
    <div className={styles.content}>
      <FAQ faqList={faqs_col1} />
      <FAQ faqList={faqs_col2} />
    </div>
  );

  const formRef = useRef<HTMLInputElement>(null);

  // adapted from sam's code for the scroll line:
  const boxVariant = {
    // used for bullet point transitions
    visible: { opacity: 2, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 },
  };

  // used to create bullet w/ animation
  const bullet = (
    <motion.div variants={boxVariant} initial="hidden" whileInView="visible">
      <div className={styles.outerCircle}>
        <div className={styles.innerCircle}></div>
      </div>
    </motion.div>
  );
  // used to create line with animation
  const line = (
    <motion.div variants={boxVariant} initial="hidden" whileInView="visible">
      <div className={styles.line}></div>
    </motion.div>
  );

  // eslint-disable-next-line unicorn/consistent-function-scoping
  const handleScroll = (ref: RefObject<HTMLInputElement>) => {
    if (ref.current)
      window.scrollTo({
        top: ref.current.offsetTop,
        left: 0,
        behavior: 'smooth',
      });
  };

  return (
    <>
      <Head>
        <title>Our Services</title>
        <meta name="description" content="What we can do for you" />
      </Head>
      <div className={styles.page}>
        <div className={styles.main_content}>
          <div className={styles.start_box}>
            <div className={styles.text}>
              <p>OUR SERVICES</p>
              <h1>Start a project</h1>
            </div>
            <button type="button" onClick={(): void => handleScroll(formRef)}>
              <p>Start a project</p>
            </button>
          </div>
          <div className={styles.process_box}>
            <img src="/assets/services/process.png" alt="process" />
            <h2>Process</h2>
            <div className={styles.timeline}>
              <div className={styles.scrollLine}>
                {bullet}
                {line}
                {bullet}
                {line}
                {bullet}
                {line}
                {bullet}
                {line}
                {bullet}
                {line}
                {bullet}
              </div>
              <div className={styles.phases}>
                {phaseList?.map((phase, index) => (
                  <div key={index} className={styles.phase}>
                    <div className={styles.text}>
                      <h3>{phase.title}</h3>
                      <p className="p-small">{phase.desc}</p>
                    </div>
                    <img src={phase.img} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.form_box}>
            <ContactForm formRef={formRef} />
          </div>
        </div>
        <div className={styles.faq_box}>
          <h2>Frequently Asked Questions</h2>
          {faqs}
        </div>
      </div>
    </>
  );
}
