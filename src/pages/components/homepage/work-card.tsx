import { ReactElement } from 'react';
import styles from '../../../styles/homepage/card.module.scss';

interface WorkCardProps {
    date: string;
    header: string;
    description: string;
}

export default function WorkCard({
    date,
    header,
    description,
}: WorkCardProps): ReactElement {
  return (
    <div className={styles.card}>
        <p className={styles.date}>{date}</p>
        <img className={styles.site} src={`/homepage/${header}.png`}/>
        <hr></hr>
        <h4 className={styles.header}>{header}</h4>
        <p className={styles.desc}>{description}</p>
        <button className={styles.button}><span className={styles.dot}>&#9679;</span> VISIT SITE</button>
    </div>
  );
}