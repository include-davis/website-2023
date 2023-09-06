import type { AppProps } from "next/app";
import { ReactElement } from "react";
import { Inter } from "next/font/google";
import '@/styles/globals.scss';

const inter = Inter ({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <div className={`${inter.variable}`}>
      <Component {...pageProps} />
    </div>
  );
}
