import { ReactElement } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import styles from '../../../styles/get-involved/number-scroll.module.scss';
import data from '../../../json/get-involved.json';

const AnimatedNumbers = dynamic(() => import('react-animated-numbers'), {
  ssr: false,
});

export default function NumberScroll(): ReactElement {
  const { stats } = data;

  return (
    <div className={styles.numContainer}>
      {Object.keys(stats).map((index) => {
        const card = stats[index as keyof typeof stats];

        return (
          <div className={styles.card} key={index}>
            <div className={styles.numBox}>
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
              >
                <AnimatedNumbers
                  fontStyle={{
                    fontFamily: 'Inter',
                    fontSize: 85,
                    fontWeight: 700,
                  }}
                  animateToNumber={card.number}
                  configs={{ tension: 89, friction: 40 }}
                />
              </motion.div>
              {card.number !== 1 && <p>+</p>}
            </div>
            <p className={`${styles.title} p-details`}>{card.title}</p>
          </div>
        );
      })}
    </div>
  );
}
