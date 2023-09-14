import { ReactElement } from 'react';
import styles from '../../../styles/get-involved/opportunity-card.module.scss';
import Image from 'next/image';

export default function OpportunityCard(): ReactElement {
  return (
    <div className={styles.cardContainer}>
      <Image
      src="/get-involved/svgs/pencil.svg"
      width={40}
      height={40}
      alt="Icon of a pencil with ruler through it"
      className={styles.icon}
      />
      <h4 className={styles.header}>Design</h4>
      <p className={` ${styles.p} p-small`}>
        Focused on visual design, user experience, and user interface.
      </p>
      <button className={styles.button}>LEARN MORE</button>
    </div>
  );
}
