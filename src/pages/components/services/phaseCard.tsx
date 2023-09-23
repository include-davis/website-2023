import { ReactElement } from 'react';
import styles from '../../../styles/services/phaseCard.module.scss';

interface PhaseProp {
  phaseList: { title: string, desc: string, img: string} [];
}

export default function PhaseCard( {phaseList} : PhaseProp): ReactElement {
    return (
      <div className={styles.timeline}>
        {phaseList.map( (phase, index) => (
          <div key={index} className={styles.phase}>
            <div className={styles.text}>
              <div className={styles.outer_dot}>
                <div className={styles.inner_dot} />
              </div>
              <div className={styles.line}/>
              <h3>{phase.title}</h3>
              <p className="p-small">{phase.desc}</p>
            </div>
            <img src={phase.img} className={index%2 === 0 ? styles.img_even : styles.img_odd}/>
          </div>
        ))}
      </div>
    );
}