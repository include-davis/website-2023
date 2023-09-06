import React from "react";
import Image from "next/image";
import InfiniteSlider from "@/components/infiniteSlider/infiniteSlider";
import FadeInText from "@/components/about/fadeInText/fadeInText";
import Avatar from "@/components/about/avatar/avatar";
import { motion } from "framer-motion";
import data from "@/json/about/about.json";
import board from "@/json/about/board.json";
import assets from "@/components/about/assets";
import blurs from "@/components/about/blurs";
import styles from "../styles/about/about.module.scss";

// Have navbar be fixed & inherit background color from page
const companies = assets.map((asset, index) => {
  return <Image src={asset} alt="" key={index} />;
});

const websites = [
  <Image
    src="/about/images/b&v.jpg"
    width={645}
    height={357}
    style={{ objectFit: "cover", objectPosition: "0", borderRadius: "14.16px" }}
    key={"b&v"}
    alt=""
  />,
  <Image
    src="/about/images/ielc.jpg"
    width={645}
    height={357}
    style={{
      objectFit: "contain",
      objectPosition: "0",
      borderRadius: "14.16px",
    }}
    key={"ielc"}
    alt=""
  />,
  <Image
    src="/about/images/brkbar.jpg"
    width={645}
    height={357}
    style={{
      objectFit: "contain",
      objectPosition: "0",
      borderRadius: "14.16px",
    }}
    key="brkbar"
    alt=""
  />,
];

export default function About(): React.JSX.Element {
  return (
    <div className={styles.about}>
      <article className={styles.intro}>
        <Image
          src={blurs.Blue}
          style={{ position: "absolute", top: "0", right: "0" }}
          alt=""
        />
        <section className={styles.header}>
          <div className={styles.header_text_container}>
            <p>ABOUT</p>
            <h1 className={styles.header_text}>{data.intro.header}</h1>
          </div>
          <div className={styles.websites_slider}>
            <Image
              src={blurs.Red}
              style={{
                position: "absolute",
                height: "166%",
                width: "100%",
                top: "-66%",
                left: "0",
              }}
              alt=""
            />
            <div className={styles.slider_container}>
              <div className={styles.transparent_mask}>
                <InfiniteSlider durationInMs={4000}>{websites}</InfiniteSlider>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.desc}>
          <h2 style={{ textAlign: "left", lineHeight: "112.903%" }}>
            {data.intro.description[0]}
            <span style={{ color: "var(--include-purple)" }}>
              {data.intro.description[1]}
            </span>
            {data.intro.description[2]}
            <span style={{ color: "var(--include-purple)" }}>
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
            style={{ width: "100%" }}
          >
            <Image
              src="/about/images/descPic.jpg"
              alt=""
              width={1200}
              height={450}
              sizes="(min-width: 480px) calc(100vw - 96px), 347px"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "contain",
                borderRadius: "20px",
              }}
            />
          </motion.section>
        </section>
        <Image
          src={blurs.Purple}
          style={{ position: "absolute", top: "0", left: "0" }}
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
          <h1 style={{ lineHeight: "112.903%" }}>{data.board.header}</h1>
          <div className="p-small" style={{ padding: "10px 20px" }}>
            {data.board.description}
          </div>
        </section>
        <section className={styles.board_members}>
          {board.members.map((m) => {
            return (
              <Avatar
                name={m.name}
                title={m.title}
                image={m.imageSrc}
                key={m.name}
              />
            );
          })}
        </section>
      </article>

      <article className={styles.future}>
        <section className={styles.future_text}>
          <h1 style={{ lineHeight: "120.833%" }}>{data.future.header}</h1>
          <p>{data.future.description}</p>
        </section>
        <section className={styles.company_slider}>
          <InfiniteSlider durationInMs={2000}>{companies}</InfiniteSlider>
        </section>
      </article>
    </div>
  );
}
