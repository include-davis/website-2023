import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import { ReactElement } from 'react';
import { Inter } from '@next/font/google';
// import { useRouter } from 'next/router';

const inter = Inter({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-inter',
});

// const navLinks = [
//   { name: 'About', path: 'about' },
//   { name: 'Projects', path: 'projects' },
//   { name: 'Get Involved', path: 'get-involved' },
// ];

export default function App({ Component, pageProps }: AppProps): ReactElement {
  // const router = useRouter();

  return (
    <div className={`${inter.variable}`} style={{ position: 'relative' }}>
      <Component {...pageProps} />
    </div>
  );
}
