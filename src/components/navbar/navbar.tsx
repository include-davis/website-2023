import React, { useState } from "react";
import { RxHamburgerMenu, RxChevronDown } from "react-icons/rx";
import Image from "next/image";
import Link from "next/link";
import logoWhite from "../../../public/logoWhite.png";
import logoPurple from "../../../public/logoPurple.png";
import styles from "../../styles/navbar/navbar.module.scss";

type NavbarProps = {
  nav: { name: string; path: string }[];
  theme: string;
};

export default function Navbar({ nav, theme }: NavbarProps): React.JSX.Element {
  const [active, setActive] = useState(false);

  const logo = theme === "light" ? logoWhite : logoPurple;
  const color = theme === "light" ? styles.light : styles.dark;

  const toggleMenu = () => {
    setActive((prev) => !prev);
  };

  return (
    <div className={styles.navbar_wrapper}>
      <article className={styles.navbar}>
        <Image src={logo} alt="" className={styles.logo} />
        <nav className={styles.navbar_right}>
          <ul
            className={`${styles.redirects} ${
              active ? styles.activeDropdown : ""
            }`}
          >
            {nav.map((item) => (
              <li
                key={item.name}
                className={`${active ? styles.slideText : ""}`}
              >
                <Link href={`/${item.path}`}>
                  <span
                    className={`p-small ${color} ${
                      active ? styles.fadeInText : ""
                    }`}
                  >
                    {item.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <button
            className={`${styles.dropdown} ${color}`}
            onClick={toggleMenu}
          >
            {active ? <RxChevronDown /> : <RxHamburgerMenu />}
          </button>
        </nav>
      </article>
    </div>
  );
}
