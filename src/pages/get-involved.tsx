import React from 'react';
import MainContentFooter from './components/get-involved/main-content-footer';
import styles from '../styles/get-involved/get-involved.module.scss';
import Opportunities from './components/get-involved/opportunity-content';

export default function GetInvolved(): React.JSX.Element {
  return (
    <div>
      <Opportunities></Opportunities>
      <MainContentFooter></MainContentFooter>
    </div>
  );
};