import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/in-progress/in-progress.module.scss';

export default function InProgress(): React.JSX.Element {
  return (
    <>
      <Head>
        <title>Page in Progress</title>
      </Head>
      <main className={styles.container}>
        <p>Sorry! the page you requested is still in progress.</p>
        <Link href="/">
          <button type="button">Back to home</button>
        </Link>
      </main>
    </>
  );
}
