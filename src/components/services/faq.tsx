import { ReactElement } from 'react';
import styles from '../../styles/services/faq.module.scss';

export default function FAQ(): ReactElement {
    return (
      <div className={styles.faq}>
        <p className="p-small">question</p>
        <div className="p-details">answer</div>
      </div>
    );
  }