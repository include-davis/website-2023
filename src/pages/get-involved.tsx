import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import NumberScroll from './components/get-involved/number-scroll';
import OpportunityCard from './components/get-involved/opportunity-card';
import styles from '../styles/get-involved/get-involved.module.scss';
import data from '../json/get-involved.json';

export default function GetInvolved(): React.JSX.Element {
  const boxVariant = {
    // used for bullet point transitions
    visible: { opacity: 2, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 },
  };

  const bullet = (
    <motion.div // used to create bullet w/ animation
      variants={boxVariant}
      initial="hidden"
      whileInView="visible"
    >
      <div className={styles.outerCircle}>
        <div className={styles.innerCircle}></div>
      </div>
    </motion.div>
  );

  const line = (
    <motion.div // used to create line with animation
      variants={boxVariant}
      initial="hidden"
      whileInView="visible"
    >
      <div className={styles.line}></div>
    </motion.div>
  );

  const createPoint = (header: string, info: string): React.JSX.Element => (
    // used to create description w/ animation
    <motion.div
      variants={boxVariant}
      initial="hidden"
      whileInView="visible"
      className={styles.pointInfo}
    >
      <h3>{header}</h3>
      <p>{info}</p>
    </motion.div>
  );
  // used for opportunity cards
  const { cards } = data;
  const cardElements = Object.keys(cards).map((index) => {
    const card = cards[index as keyof typeof cards];

    return (
      <OpportunityCard
        key={index}
        name={card.header}
        alt={card.alt}
        description={card.description}
      />
    );
  });

  return (
    <div className={styles.page}>
      <section className={styles.header}>
        <Image
          src="/get-involved/svgs/mesh-left.png"
          width={667}
          height={642}
          alt="Mesh gradient graphic"
          priority
          className={styles.meshLeft}
        />
        <Image
          src="/get-involved/svgs/mesh-right.png"
          width={905}
          height={674}
          alt="Mesh gradient graphic"
          className={styles.meshRight}
        />
        <div className={styles.cta}>
          <p style={{ color: 'var(--text-black-light)' }}>GET INVOLVED</p>
          <h1 className={styles.hook}>
            The journey to create amazing things starts here
          </h1>
          <button type="button" className={styles.button}>
            Apply
          </button>
        </div>
        <p className={styles.numberText}>The numbers</p>
        <NumberScroll />

        <div className={styles.recruitmentContainer}>
          <div className={styles.recruitmentText}>
            <h2>Recruitment cycle</h2>
            <p className={styles.recruitmentInfo}>
              {' '}
              Recruitment cycle happens twice a year (Fall Quarter & Winter
              Quarter) for design and tech cohorts.
            </p>
            <p className={styles.recruitmentInfo}>
              {' '}
              Our application process typically includes a short application and
              an interview.
            </p>
            <p className={styles.recruitmentInfo}>
              {' '}
              We are always looking for motivated and dedicated individuals to
              join our team.
            </p>
          </div>
          <Image
            src="/get-involved/svgs/magnifying-glass.svg"
            width={231}
            height={232}
            alt="Mesh gradient graphic"
          />
        </div>
      </section>
      <section className={styles.mainContent}>
        <div className={styles.purpleBg}>
          <h3 className={styles.description}>
            We aim to provide resources and opportunities to help students{' '}
            <span className={styles.textGradient}>find their path</span>, no
            matter where they are at in their journey.
          </h3>
        </div>
        <div className={styles.whiteBg}>
          <Image
            src="/get-involved/svgs/group.png"
            width={1200}
            height={636}
            alt="Group of four people surrounded at a meeting table."
            className={styles.groupImg}
          />
          <div className={styles.bulletPoints}>
            <div className={styles.leftPoints}>
              <div className={styles.pointOne}>
                {createPoint(
                  'Apply to join',
                  'Become part of our cohort or executive board'
                )}
              </div>
              <div className={styles.phone}>{line}</div>
              <div className={styles.pointThree}>
                {createPoint(
                  'Make an impact in your community',
                  'Build things that make you proud'
                )}
              </div>
            </div>
            <div className={styles.phone}>{line}</div>
            <div className={styles.scrollLine}>
              {bullet}
              {line}
              {bullet}
              {line}
              {bullet}
            </div>
            <div className={styles.pointTwo}>
              {createPoint(
                'Work with real clients',
                'Get relevant industry experience'
              )}
            </div>
          </div>
        </div>
      </section>
      <section className={styles.opportunityContainer}>
        <div className={styles.oporrtunityTitle}>
          <Image
            src="/get-involved/svgs/JobSeeker.png"
            width={90}
            height={90}
            alt="SuitCase with magnifying glass"
          />
          <h3>Opportunities</h3>
        </div>
        <div className={styles.cardsContainer}> {cardElements}</div>
      </section>

      <section className={styles.mainFooter}>
        <h2 className={styles.question}>
          Are you a company looking to build something amazing?
        </h2>
        <p className={styles.small_text}>Explore what we can do for you</p>
        <button type="button" className={styles.btn}>
          Learn More
        </button>
      </section>
    </div>
  );
}
