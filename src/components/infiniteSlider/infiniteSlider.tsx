import React from "react";
import styles from "../../styles/infiniteSlider/infiniteSlider.module.scss";

type InfiniteSliderProps = {
  children: React.ReactNode;
  durationInMs?: number;
  start?: number;
};

export default function InfiniteSlider({
  children,
  durationInMs = 3000,
  start = 0,
}: InfiniteSliderProps): React.JSX.Element {
  const count = React.Children.toArray(children).length;

  const sx = {
    animationDuration: `${durationInMs * count}ms`,
    left: start,
  };

  return (
    <article className={styles.container}>
      <section className={styles.content} style={sx}>
        {children}
      </section>
      <section className={styles.content} style={sx}>
        {children}
      </section>
      <section className={styles.content} style={sx}>
        {children}
      </section>
    </article>
  );
}
