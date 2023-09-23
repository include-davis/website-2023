import { ReactElement } from 'react';
import HomeHeader from './components/homepage/header';
import Grow from './components/homepage/grow';
import Mission from './components/homepage/mission';
import RecentWork from './components/homepage/recent-work';
import Pillars from './components/homepage/pillars';
import HomeFooter from './components/homepage/footer';

import styles from '../../../styles/homepage/homepage.module.scss';

export default function Home(): ReactElement {
  return( 
  <div >
  <HomeHeader/>
  <Grow/>
  <Mission/>
  <RecentWork/>
  <Pillars/>
  <HomeFooter/>

  </div>
  );

}
