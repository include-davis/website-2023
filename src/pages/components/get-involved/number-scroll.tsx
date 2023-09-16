import { ReactElement } from 'react';
import styles from '../../../styles/get-involved/number-scroll.module.scss';
import data from '../../../json/get-involved.json';

export default function NumberScroll(): ReactElement {
  const stats = data.stats;
  const cards = Object.keys(stats).map((index) => {
    const card = stats[index as keyof typeof stats];
    return (
      <div>
        <div className={styles.card}>
          <div className={styles.number}>{card.number}</div>
          <p className={`${styles.title} p-details`}>{card.title}</p>
        </div>
      </div>
    )
  });

  return (
    <div className={styles.numContainer}>
      {cards}
    </div>
  );
}
