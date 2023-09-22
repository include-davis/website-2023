import { ReactElement } from 'react';
//import Carousel from '../../Components/JS/Carousel';
import styles from '../../../styles/homepage/header.module.scss';

export default function Header(): ReactElement {
    return(
        <div className={styles.homepage}>
        
        <div className={styles.main_content}>

          <div className={styles.images}>
            <img width="400" height="200" src="/homepage/design-home1.png" />
            <img width="400" height="200" src="/homepage/design-home2.png" />
            <img width="400" height="200" src="/homepage/design-home3.png" />
          </div>

          <h1 className={styles.title}>
            <span className={styles.diagonal}>Design.</span>
            <span className={styles.diagonal}>Develop.</span>
            <span className={styles.diagonal}>Create.</span>
          </h1>

          <p className={styles.description}>We are a UC Davis community of web developers and designers dedicated to fostering collaboration, growth and the creation of creative digital solutions.</p>
          
          <button className={styles.join}>Join the community</button>
          
        </div>

        <div className={styles.footer}>
          <p>Where we've gone</p>

        </div>
        </div>
    );

}