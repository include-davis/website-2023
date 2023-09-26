import { ReactElement } from 'react';
import { color } from 'framer-motion';
import styles from '../../../styles/homepage/footer.module.scss';

export default function Footer(): ReactElement {
  return (
    <div className={styles.footer}>
      <div className={styles.main_content}>
        <h1>Work with Us</h1>
        <p>
          Are you a student looking for professional opportunities or a company
          in need of a digital solution? Discover the many opportunities to
          collaborate with #include at Davis
        </p>
      </div>

      <div className={styles.buttons}>
        <button className={styles.companies}>Companies</button>
        <button className={styles.students}>Students</button>
      </div>
    </div>
  );
}
