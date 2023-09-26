import { ReactElement } from 'react';
import styles from '../../../styles/homepage/pillar.module.scss';

export default function Pillars(): ReactElement {
    return(
        <div className={styles.pillars}>
            <div className={styles.title}>
                <img src="/homepage/pillar.png"/>
                <h3>Our Pillars</h3>
                <p>What inspires us as an org</p>

            </div>
        </div>
    );

}