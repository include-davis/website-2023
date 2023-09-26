import { ReactElement, useState } from "react";
import menu from "../../../json/homepage/menu.json";
import styles from "../../../styles/homepage/pillar.module.scss";

export default function Pillars(): ReactElement {
  const [activeIndex, setIndex] = useState(0);

  return (
    <div className={styles.main_container}>
      <div className={styles.title}>
        <img src="/homepage/pillar.png" />
        <h3>Our Pillars</h3>
        <p>What inspires us as an org</p>
      </div>
      <div className={styles.menu}>
        <div className={styles.chips_wrapper}>
          <div className={styles.chips}>
            {menu.map((item, index) => {
              return (
                <div
                  key={item.title}
                  onClick={() => setIndex(index)}
                  className={`${styles.chip} ${
                    activeIndex === index ? styles.active : null
                  }`}
                >
                  <p>{item.title}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.pillar_desc}>
          <img src={menu[activeIndex].img} />
          <p>{menu[activeIndex].text}</p>
        </div>
      </div>
    </div>
  );
}
