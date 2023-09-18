import React from 'react';
import Image from 'next/image';
import OpportunityCard from './opportunity-card';
import styles from '../../../styles/get-involved/opportunity-section.module.scss';
import data from '../../../json/get-involved.json';

export default function Opportunities(): React.JSX.Element {
  const { cards } = data;
  const cardElements = Object.keys(cards).map((index) => {
    const card = cards[index as keyof typeof cards];

    return (
      <OpportunityCard
        key={index}
        name={card.header}
        description={card.description}
        alt={card.alt}
      />
    );
  });

  return (
    <section className={styles.opportunityContainer}>
      <div className={styles.header}>
        <Image
          src="/get-involved/svgs/JobSeeker.png"
          width={90}
          height={90}
          alt="SuitCase with magnifying glass"
        />
        <h3>Opportunities</h3>
      </div>
      <div className={styles.cardsContainer}> {cardElements}</div>
    </section>
  );
}
