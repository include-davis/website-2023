import { ReactElement } from 'react';
import styles from '../../../styles/homepage/grow.module.scss';

export default function Grow(): ReactElement {
  return (
    <div className={styles.container}>
      <div className={styles.grow}>
        <div className={styles.main_content}>
          <div className={styles.title}>
            <h2>Grow with the community</h2>
            <p>
              Vibrant UC Davis community of talented designer, web developer and
              do-ers.
            </p>
          </div>
          <ul className={styles.bulletpoint}>
            <div className={styles.grow_point}>
              <img src="/homepage/flashcards.png" />
              <p>
                {' '}
                <strong>Learn:</strong> Acquire valuable skills through hands-on
                experiences.
              </p>
            </div>
            <div className={styles.grow_point}>
              <img src="/homepage/edit.png" />
              <p>
                <strong>Create:</strong> Transform your imagination into
                tangible, impactful projects.
              </p>
            </div>
            <div className={styles.grow_point}>
              <img src="/homepage/team.png" />
              <p>
                <strong>Connect:</strong> Forge lifelong connections and
                friendships with talented creatives.
              </p>
            </div>
          </ul>
        </div>
        <div className={styles.images}>
          <img className={styles.picture} src="/homepage/grow1.png" />
          <img className={styles.picture} src="/homepage/grow2.png" />
        </div>
      </div>
      <h2>
        Our mission is to design creative digital solutions that have a positive
        social impact
      </h2>
    </div>
  );
}
