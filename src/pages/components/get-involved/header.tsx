import { ReactElement } from 'react';
import styles from '../../../styles/get-involved/header.module.scss';
import Image from 'next/image';
import NumberScroll from './number-scroll';


export default function Header(): ReactElement {
  return (
    <div className={styles.header}>
      <Image
        src='/get-involved/svgs/mesh-left.png'
        width={667}
        height={642}
        alt='Mesh gradient graphic'
        className={styles.meshLeft}/>
        <Image
        src='/get-involved/svgs/mesh-right.png'
        width={905}
        height={674}
        alt='Mesh gradient graphic'
        className={styles.meshRight}/>
      <div className={styles.cta}>
        <p style={{color: 'var(--text-black-light)'}}>GET INVOLVED</p>
        <h1 className={styles.hook}>The journey to create amazing things starts here</h1>
        <button className={styles.button}>Apply</button>
      </div>

      <p className={styles.numberText}>The numbers</p>


      <div className={styles.recruitmentContainer}>
        <div className={styles.recruitmentText}>
          <h2>Recruitment cycle</h2>
            <p className={styles.recruitmentInfo}>Recruitment cycle happens twice a year (Fall Quarter & Winter Quarter) for design and tech cohorts.
            <br></br><br></br>
            Our application process typically includes a short application and an interview.
            <br></br><br></br>
            We are always looking for motivated and dedicated individuals to join our team.</p>
        </div>
        <Image
        src='/get-involved/svgs/magnifying-glass.svg'
        width={231}
        height={232}
        alt='Mesh gradient graphic'/>

      </div>
      <NumberScroll></NumberScroll>

    </div>
  );
}
        