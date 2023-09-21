import { ReactElement } from 'react';
import styles from '../../../styles/get-involved/get-involved.module.scss';

export default function MainContentFooter(): ReactElement {
  return (
    <section className={styles.mainFooter}>
      <h2 className={styles.question}>
        Are you a company looking to build something amazing?
      </h2>
      <p className={styles.small_text}>Explore what we can do for you</p>
      <button type="button" className={styles.btn}>
        Learn More
      </button>
    </section>
  );
}
