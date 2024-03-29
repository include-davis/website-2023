import type { AppProps } from 'next/app';
import { ReactElement } from 'react';
import { Inter } from '@next/font/google';
import { useRouter } from 'next/router';
import Navbar from '@/components/navbar/navbar';
import Footer from '@/components/footer/footer';
import '../styles/globals.scss';

const inter = Inter({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-inter',
});

const navLinks = [
  { name: 'About', path: 'about' },
  { name: 'Projects', path: 'projects' },
  { name: 'Services', path: 'services' },
  { name: 'Get Involved', path: 'get-involved' },
];

export default function App({ Component, pageProps }: AppProps): ReactElement {
  const router = useRouter();

  return (
    <div className={`${inter.variable}`} style={{ position: 'relative' }}>
      <Navbar nav={navLinks} path={router.pathname} />
      <Component {...pageProps} />
      <Footer nav={navLinks} path={router.pathname} />
    </div>
  );
}
