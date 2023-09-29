import { ReactElement } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../../styles/get-involved/opportunity-card.module.scss';

interface OpportunityCardProps {
  name: string;
  alt: string;
  description: string;
  url: string;
}

export default function OpportunityCard({
  name,
  alt,
  description,
  url,
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
      <Link href={url || '/'}>
        <button type="button" className={styles.button}>
          LEARN MORE
        </button>
      </Link>
    </div>
  );
}
