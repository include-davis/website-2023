import React from 'react';
import Header from './components/get-involved/header';
import MainContentFooter from './components/get-involved/main-content-footer';
import styles from '../styles/get-involved/get-involved.module.scss';
import Opportunities from './components/get-involved/opportunity-content';

export default function GetInvolved(): React.JSX.Element {
  return (
    <div>
      <Header></Header>
      <Opportunities></Opportunities>
      <MainContentFooter></MainContentFooter>
    </div>
  );
};