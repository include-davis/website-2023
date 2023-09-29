import { ReactElement } from 'react';
import Link from 'next/link';
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
        <Link href="/services">
          <button type="button" className={styles.companies}>
            Companies
          </button>
        </Link>
        <Link href="/get-involved">
          <button type="button" className={styles.students}>
            Students
          </button>
        </Link>
      </div>
    </div>
  );
}
