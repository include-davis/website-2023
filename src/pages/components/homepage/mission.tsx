import { ReactElement } from 'react';


import styles from '../../../styles/homepage/mission.module.scss';


export default function Mission(): ReactElement {
    return(
        <div className={styles.parent}>
            <div className={styles.mission}>
                <h2>Our mission is to design creative digital solutions that have a positive social impact</h2>
                <img className={styles.mission_img} src="/homepage/design-home1.png" />
            </div>
            
            
        </div>
    );

}