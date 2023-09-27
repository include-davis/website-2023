/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useState } from 'react';
import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx';

import Logo from '../branding/logo';
import styles from '../../styles/navbar/navbar.module.scss';

interface NavbarProps {
  nav: { name: string; path: string }[];
  path: string;
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type, func-style
function getTheme(path: string) {
  if (path === '/') {
    return 'light';
  }

  return 'dark';
}

export default function Navbar({ nav, path }: NavbarProps): React.JSX.Element {
  const [active, setActive] = useState(false);

  const theme = getTheme(path);
  const logoColor =
    theme === 'light' ? 'var(--text-white)' : 'var(--include-purple)';
  const color = theme === 'light' ? styles.light : styles.dark;

  const toggleMenu = () => {
    setActive((prev) => !prev);
  };

  return (
    <div className={styles.navbar_wrapper}>
      <nav className={styles.navbar}>
        <section className={styles.logo}>
          <a href="/">
            <Logo fillColor={logoColor} />
          </a>
        </section>
        <section className={styles.navbar_right}>
          <ul
            className={`${styles.redirects} 
            ${active ? styles.activeDropdown : ''}`}
          >
            {nav.map((item, index) => (
              <li
                key={item.name}
                className={`${active ? styles.slideText : ''}`}
                style={{
                  transitionDelay: `calc(0.3s / 3 * 
                  ${active ? index + 1 : nav.length - index - 1})`,
                }}
              >
                <a href={`/${item.path}`}>
                  <span
                    className={`p-details ${color} 
                    ${active ? styles.fadeInText : ''}`}
                  >
                    {item.name.toLowerCase()}
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className={`${styles.dropdown} ${color}`}
            onClick={toggleMenu}
          >
            {active ? <RxCross1 /> : <RxHamburgerMenu />}
          </button>
        </section>
      </nav>
    </div>
  );
}
