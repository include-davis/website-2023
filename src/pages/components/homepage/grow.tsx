import { ReactElement } from 'react';
import styles from '../../../styles/homepage/grow.module.scss';

export default function Footer(): ReactElement {
    return(
        <div className={styles.growparent}>
        <div className={styles.grow}>
            <div className={styles.main_content}>
                <div className={styles.title}>
                    <h2>Grow with the community</h2>
                    <p>Vibrant UC Davis community of talented designer, web developer and do-ers.</p>
                </div>        
                <ul className={styles.bulletpoint}>
                    <li className={styles.learn}>Learn: Acquire valuable skills through hands-on experiences.</li>
                    <li className={styles.create}>Create: Transform your imagination into tangible, impactful projects</li>
                    <li className={styles.connect}>Connect: Forge lifelong connections and friendships with talented creatives.</li>
                </ul>
            </div>
            <div className={styles.images}>
                <img className={styles.picture} src="/homepage/grow1.png" />
                <img className={styles.picture} src="/homepage/grow2.png" />
            </div>        
        </div>
        </div>

    );

}