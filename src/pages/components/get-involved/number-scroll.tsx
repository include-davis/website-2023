import { ReactElement } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
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
              {(card.number !== 1 && (
                <CountUp
                  start={0}
                  end={card.number}
                  duration={4}
                  suffix="+"
                  className={styles.animatedNum}
                  enableScrollSpy
                  scrollSpyOnce
                  scrollSpyDelay={1}
                />
              )) ||
                (card.number == 1 && (
                  <CountUp
                    start={0}
                    end={card.number}
                    duration={4}
                    className={styles.animatedNum}
                    enableScrollSpy
                    scrollSpyOnce
                    scrollSpyDelay={1}
                  />
                ))}
            </div>
            <p className={`${styles.title} p-details`}>{card.title}</p>
          </div>
        );
      })}
    </div>
  );
}
