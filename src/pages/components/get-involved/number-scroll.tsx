import { ReactElement } from 'react';
import styles from '../../../styles/get-involved/number-scroll.module.scss';
import data from '../../../json/get-involved.json';
import AnimatedNumber from 'react-animated-numbers';
import { Inter } from '@next/font/google';


export default function NumberScroll(): ReactElement {
  const stats = data.stats;
  return (
    <div className={styles.numContainer}>
      {Object.keys(stats).map((index) => {
    const card = stats[index as keyof typeof stats];
    return (
        <div className={styles.card}>
          <div className={styles.numBox}>
            <AnimatedNumber
              fontStyle={{ fontFamily: 'Inter', fontSize: 85, fontWeight: 700}}
              animateToNumber={card.number}
              config={{ tension: 89, friction: 40 }}
              animationType={"calm"}
            ></AnimatedNumber>
            {card.number != 1 && <p>+</p>}
          </div>
          <p className={`${styles.title} p-details`}>{card.title}</p>
        </div>
    )
  })}
    </div>
  );
}
