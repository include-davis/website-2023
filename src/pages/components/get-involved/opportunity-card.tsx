import { ReactElement} from 'react';
import styles from '../../../styles/get-involved/opportunity-card.module.scss';
import Image from 'next/image';

export default function OpportunityCard(props: { name: string; description: string; alt: string;}): ReactElement {
  return (
    <div className={styles.cardContainer}>
      <Image
      src={`/get-involved/svgs/${props.name}.svg`}
      width={40}
      height={40}
      alt={props.alt}
      className={styles.icon}
      />
      <h4 className={styles.header}>{props.name}</h4>
      <p className={` ${styles.p} p-small`}>
{props.description}</p>
      <button className={styles.button}>LEARN MORE</button>
    </div>
  );
}
