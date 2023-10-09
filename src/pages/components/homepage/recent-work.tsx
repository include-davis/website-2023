/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import WorkCard from './work-card';
import data from '../../../json/homepage/recent-work.json';
import styles from '../../../styles/homepage/work.module.scss';

export default function Work(): React.JSX.Element {
  const { cards } = data;
  const cardElements = Object.keys(cards).map((index) => {
    const card = cards[index as keyof typeof cards];

    return (
      <WorkCard
        key={index}
        date={card.date}
        header={card.header}
        description={card.description}
        url={card.url}
      />
    );
  });

  return (
    <div className={styles.work}>
      <div className={styles.title}>
        <img src="/homepage/pen.png" />
        <h3>Recent Work</h3>
        <p>Transforming ideas into incredible realities is what we do best.</p>
      </div>
      <div className={styles.cardsContainer}> {cardElements}</div>

      <p className={styles.more}>AND MORE...</p>
    </div>
  );
}
