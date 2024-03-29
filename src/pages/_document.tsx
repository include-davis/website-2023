import { Html, Head, Main, NextScript } from 'next/document';
import { ReactElement } from 'react';

export default function Document(): ReactElement {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta
          name="description"
          content="We are a UC Davis community of web developers and designers dedicated to fostering collaboration, growth and the creation of creative digital solutions."
        />
        <meta
          name="keywords"
          content="include, computer science, cs, design, figma, next, react, software, development, uc davis, davis, community, web, developers, designers, dedicated, fostering, collaboration, growth, club"
        />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
