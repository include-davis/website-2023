/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { ReactElement } from 'react';

import styles from '../../../styles/homepage/mission.module.scss';

export default function Mission(): ReactElement {
  return (
    <div className={styles.container}>
      <img src="/homepage/header/header1.png" />
    </div>
  );
}
