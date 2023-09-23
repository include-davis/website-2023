// import { Inter } from '@next/font/google';
import { ReactElement } from 'react';

import styles from '../styles/example/example.module.scss';

// const inter = Inter({ subsets: ['latin'] });

export default function Example(): ReactElement {
  return (
    <div className={styles.container}>
      <h1>EXAMPLE OF SCSS USAGE</h1>
    </div>
  );
}
