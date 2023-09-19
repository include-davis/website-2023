import { ReactElement } from 'react';
import Image from 'next/image';
import styles from '../../../styles/get-involved/opportunity-card.module.scss';

interface OpportunityCardProps {
  name: string;
  alt: string;
  description: string;
}

export default function OpportunityCard({
  name,
  alt,
  description,
}: OpportunityCardProps): ReactElement {
  return (
    <div className={styles.cardContainer}>
      <Image
        src={`/get-involved/svgs/${name}.svg`}
        width={40}
        height={40}
        alt={alt}
        className={styles.icon}
      />
      <h4 className={styles.header}>{name}</h4>
      <p className={` ${styles.p} p-small`}>{description}</p>
      <button type="button" className={styles.button}>
        LEARN MORE
      </button>
    </div>
  );
}
