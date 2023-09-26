import { ReactElement } from "react";
import InfiniteSlider from "@/components/infiniteSlider/infiniteSlider";
import styles from "../../../styles/homepage/header.module.scss";

let companies = [
  "Riot",
  "Apple",
  "Amazon",
  "Microsoft",
  "LinkedIn",
  "Visa",
  "Netflix",
];

companies = companies.concat(companies.slice(0));
const companiesContent = companies.map((company, index) => {
  return (
    <img
      src={`/about/svgs/${company}.svg`}
      loading="eager"
      alt=""
      key={`${company} ${index}`}
    />
  );
});
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
        <button className={styles.join}>Join the community</button>
      </div>

      <div className={styles.footer}>
        <p>Where we've gone</p>
        <InfiniteSlider durationInMs={4000}>{companiesContent}</InfiniteSlider>
      </div>
    </div>
  );
}
