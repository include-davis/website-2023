import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Header from './components/get-involved/header';
import MainContentFooter from './components/get-involved/main-content-footer';
import styles from '../styles/get-involved/get-involved.module.scss';
import Opportunities from './components/get-involved/opportunity-content';

export default function GetInvolved(): React.JSX.Element {
  const boxVariant = {
    visible: { opacity: 2, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 },
  };
  const bullet = (
    <div className={styles.outerCircle}>
      <div className={styles.innerCircle}></div>
    </div>
  );

  const line = <div className={styles.line}></div>;

  return (
    <div>
      <Header />
      <section className={styles.test}>
        <div className={styles.purpleBg}>
          <h3 className={styles.description}>
            We aim to provide resources and opportunities to help students <span className={styles.textGradient}>find their path</span>, no
            matter where they are at in their journey.
          </h3>
        </div>
        
        {/* <div>image placeholder</div> */}
        <div className={styles.whiteBg}>
          <Image 
          src='/get-involved/svgs/group.png'
          width={1200}
          height={636}
          alt='Group of four people surrounded at a meeting table.'
          className={styles.groupImg}/>
          <div className={styles.bulletPoints}>
            <div className={styles.leftPoints}>
              <div className={styles.pointOne}>
                <motion.div
                  variants={boxVariant}
                  initial="hidden"
                  whileInView="visible"
                >
                  <h3>Apply to join</h3>
                  <p>
                    Become part of our cohort or <br></br>executive board
                  </p>
                </motion.div>
              </div>
              <div className={styles.pointThree}>
                <motion.div
                  variants={boxVariant}
                  initial="hidden"
                  whileInView="visible">
                    <h3>Make an impact in your community</h3>
                    <p>Build things that make you proud</p>
                </motion.div>
              </div>
            </div>
            <div className={styles.scrollLine}>
              <motion.div
              variants={boxVariant}
              initial="hidden"
              whileInView="visible">
                {bullet}
              </motion.div>
              <motion.div
              variants={boxVariant}
              initial="hidden"
              whileInView="visible">
              {line}
              </motion.div>
              <motion.div
              variants={boxVariant}
              initial="hidden"
              whileInView="visible">
                {bullet}
              </motion.div>
              <motion.div
              variants={boxVariant}
              initial="hidden"
              whileInView="visible">
                {line}
              </motion.div>
              {bullet}
            </div>
            <div className={styles.pointTwo}>
              <motion.div
              variants={boxVariant}
              initial="hidden"
              whileInView="visible">
                <h3>Work with real clients</h3>
                <p>Get relevant industry experience</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <Opportunities/>
      <MainContentFooter/>
    </div>
  );
}
