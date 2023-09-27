/* eslint-disable react/no-array-index-key */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Image from 'next/image';
import InfiniteSlider from '@/components/infiniteSlider/infinite-slider';
import FadeInText from '@/components/about/fadeInText/fade-in-text';
import Avatar from '@/components/about/avatar/avatar';
import { motion } from 'framer-motion';
import data from '@/json/about/about.json';
import board from '@/json/about/board.json';
import styles from '../styles/about/about.module.scss';

// Have navbar be fixed & inherit background color from page
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

const blurs = {
  blue: '/about/svgs/blurBlue.svg',
  purple: '/about/svgs/blurPurple.svg',
};

let websites = ['bv', 'ielc', 'brkbar'];

websites = [...websites, ...websites];

const websitesContent = websites.map((website, index) => (
  <img
    src={`/about/images/${website}.jpg`}
    className={styles.website_img}
    loading="eager"
    key={`${website} ${index}`}
    alt=""
  />
));

export default function About(): React.JSX.Element {
  return (
    <div className={styles.about}>
      <article className={styles.intro}>
        <img
          className={styles.blur}
          src={blurs.blue}
          style={{ position: 'absolute', top: '0', right: '0' }}
          alt=""
        />
        <section className={styles.header}>
          <div className={styles.header_text_container}>
            <p>ABOUT</p>
            <h1 className={styles.header_text}>{data.intro.header}</h1>
          </div>
          <div className={styles.websites_slider}>
            <div className={styles.slider_container}>
              <div className={styles.red_blur} />
              <div className={styles.transparent_mask}>
                <InfiniteSlider durationInMs={4000}>
                  {websitesContent}
                </InfiniteSlider>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.desc}>
          <h2 style={{ textAlign: 'left', lineHeight: '112.903%' }}>
            {data.intro.description[0]}
            <span style={{ color: 'var(--include-purple)' }}>
              {data.intro.description[1]}
            </span>
            {data.intro.description[2]}
            <span style={{ color: 'var(--include-purple)' }}>
              {data.intro.description[3]}
            </span>
            {data.intro.description[4]}
          </h2>
          <motion.section
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            viewport={{ once: true }}
            style={{ width: '100%' }}
          >
            <Image
              src="/about/images/descPic.jpg"
              width={1280}
              height={960}
              alt=""
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
                borderRadius: '20px',
              }}
            />
          </motion.section>
        </section>
        <img
          className={styles.blur}
          src={blurs.purple}
          style={{ position: 'absolute', top: '0', left: '0' }}
          alt=""
        />
      </article>

      <article className={styles.purpose}>
        <section className={styles.outline}>
          <FadeInText index={0}>
            <h2>
              {data.purpose.mission[0]}
              <span className={styles.gradient_text}>
                {data.purpose.mission[1]}
              </span>
              {data.purpose.mission[2]}
            </h2>
          </FadeInText>
          <FadeInText index={1}>
            <h2>
              {data.purpose.benefits[0]}
              <span className={styles.gradient_text}>
                {data.purpose.benefits[1]}
              </span>
              {data.purpose.benefits[2]}
            </h2>
          </FadeInText>
          <FadeInText index={2}>
            <h2>{data.purpose.goals}</h2>
          </FadeInText>
        </section>
      </article>

      <article className={styles.board}>
        <section className={styles.board_text}>
          <h1 style={{ lineHeight: '112.903%' }}>{data.board.header}</h1>
          <div className="p-small" style={{ padding: '10px 20px' }}>
            {data.board.description}
          </div>
        </section>
        <section className={styles.board_members}>
          {board.members.map((mem) => (
            <Avatar
              name={mem.name}
              title={mem.title}
              image={mem.imageSrc}
              key={mem.name}
            />
          ))}
        </section>
      </article>

      <article className={styles.future}>
        <section className={styles.future_text}>
          <h1 style={{ lineHeight: '120.833%' }}>{data.future.header}</h1>
          <p style={{ color: 'var(--text-white)' }}>
            {data.future.description}
          </p>
        </section>
        <section className={styles.company_slider}>
          <InfiniteSlider durationInMs={2000}>
            {companiesContent}
          </InfiniteSlider>
        </section>
      </article>
    </div>
  );
}
