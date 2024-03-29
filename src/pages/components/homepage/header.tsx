/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-array-index-key */
import { ReactElement } from 'react';
import InfiniteSlider from '@/components/infiniteSlider/infinite-slider';
import Link from 'next/link';
import styles from '../../../styles/homepage/header.module.scss';

let companies = [
  'Riot',
  'Apple',
  'Amazon',
  'Microsoft',
  'LinkedIn',
  'Visa',
  'Netflix',
];

companies = [...companies, ...companies];
const companiesContent = companies.map((company, index) => (
  <img
    src={`/about/svgs/${company}.svg`}
    loading="eager"
    alt=""
    key={`${company} ${index}`}
  />
));

export default function Header(): ReactElement {
  return (
    <div className={styles.homepage}>
      <div className={styles.main_content}>
        <div className={styles.images}>
          <img src="/homepage/header/header1.png" />
          <img src="/homepage/header/header2.png" />
          <img src="/homepage/header/header3.png" />
        </div>
        <div className={styles.title}>
          <h1 className={styles.tit}>
            <span className={styles.diagonal}>Design.</span>
            <span className={styles.diagonal}>Develop.</span>
            <span className={styles.diagonal}>Create.</span>
          </h1>
        </div>
        <img className={styles.mobile} src="/homepage/header/header2.png" />
        <p className={styles.description}>
          We are a UC Davis community of web developers and designers dedicated
          to fostering collaboration, growth and the creation of creative
          digital solutions.
        </p>
        <Link href="/get-involved">
          <button type="button" className={styles.join}>
            Join the community
          </button>
        </Link>
      </div>

      <div className={styles.footer}>
        <p>Where we've gone</p>
        <InfiniteSlider durationInMs={2000}>{companiesContent}</InfiniteSlider>
      </div>
    </div>
  );
}
