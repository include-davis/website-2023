import React from 'react';
import MainContentFooter from './components/get-involved/main-content-footer';
import styles from '../styles/get-involved/get-involved.module.scss';
import OpportunityCard from './components/get-involved/opportunity-card';

export default function GetInvolved(): React.JSX.Element {
  return (
    <div className={styles.temp}>
      <OpportunityCard></OpportunityCard>
      <MainContentFooter></MainContentFooter>
    
    </div>
  );
};