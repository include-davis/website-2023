import { ReactElement } from "react";
import HomeHeader from "./components/homepage/header";
import Grow from "./components/homepage/grow";

import Mission from "./components/homepage/mission";
import RecentWork from "./components/homepage/recent-work";
import Pillars from "./components/homepage/pillars";
import HomeFooter from "./components/homepage/footer";

import styles from "../styles/homepage/homepage.module.scss";

export default function Home(): ReactElement {
  return (
    <div className={styles.homepage}>
      <div className={styles.header}>
        <HomeHeader />
      </div>
      <div className={styles.grow}>
        <Grow />
      </div>

      <div className={styles.purple}>
        <div className={styles.mission}>
          <Mission />
        </div>
        <div className={styles.work}>
          <RecentWork />
        </div>
        <div className={styles.pillars}>
          <Pillars />
        </div>
        <div className={styles.footer}>
          <HomeFooter />
        </div>
      </div>
    </div>
  );
}
