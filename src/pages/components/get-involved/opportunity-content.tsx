import React from 'react';
import Image from 'next/image';
import OpportunityCard from './opportunity-card';
import styles from '../../../styles/get-involved/opportunity-section.module.scss'

export default function Opportunities(): React.JSX.Element {
  return (
    <section className={styles.opportunityContainer}>
      <div className={styles.header}>
        <Image
        src="/get-involved/svgs/JobSeeker.png"
        width={90}
        height={90}
        alt="SuitCase with magnifying glass"/>
        <h3>Opportunities</h3>
      </div>
      <div className={styles.cardsContainer}>
        <OpportunityCard></OpportunityCard>
        <OpportunityCard></OpportunityCard>
        <OpportunityCard></OpportunityCard>
      </div>
    </section>
    )
}