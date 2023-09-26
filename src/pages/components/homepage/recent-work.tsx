import { ReactElement } from "react";
import WorkCard from "./work-card";
import data from "../../../json/recent-work.json";
import styles from "../../../styles/homepage/work.module.scss";

export default function Work(): React.JSX.Element {
  const { cards } = data;
  const cardElements = Object.keys(cards).map((index) => {
    const card = cards[index as keyof typeof cards];
    return (
      <WorkCard
        key={index}
        date={card.date}
        header={card.header}
        description={card.description}
      />
    );
  });

  return (
    <div className={styles.work}>
      <div className={styles.title}>
        <img src="https://s3-alpha-sig.figma.com/img/edec/10a6/814feda96c73bedf4cf97d5868202e29?Expires=1696809600&Signature=huPBh-vLqLe2-YsiGphnWR6OivZsTJHFNtULZ7UkQ5cM58uRHXeet73JXhVMjcFO0R6O851woSmSiVU582Fy0Cl4-1ocJdscuzx-wbvn0WTJ~gkZRtqYrhD5rSyAjkgIylaVSMgxOWN0eKWzEpadQiLzBZqOWjkKpRngdt1VBpNW7QTSIx2DFvWrl~IAu6wEh6ja75Wg4YzJydkfXgcEhD-J48jRJ1HbY5BHbjl7oECmRFexIomtAjO5gHpvLsLPwutrzYpwBcu-Ffuu2xODVLzEng5yBKYBxB1ymnOiU4CYLQBpOhodBZ3M4YcdGvqgdnRoSCbPEBQDMTxWkFpHFQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
        <h3>Recent Work</h3>
        <p>Transforming ideas into incredible realities is what we do best.</p>
      </div>
      <div className={styles.cardsContainer}> {cardElements}</div>

      <p className={styles.more}>AND MORE...</p>
    </div>
  );
}
