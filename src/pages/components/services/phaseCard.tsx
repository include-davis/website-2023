import { ReactElement } from 'react';
import styles from '../../styles/services/phaseCard.module.scss';

export default function PhaseCard(): ReactElement {
    return (
      <div className={styles.card}>
        <h3>Phase Title</h3>
        <div className={styles.dot} />
        <div className="p-small">phase description</div>
      </div>
    );
}