import React, { useState } from "react";
import { RxHamburgerMenu, RxChevronDown } from "react-icons/rx";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import logoWhite from "../../../public/navbar/logoWhite.png";
import logoPurple from "../../../public/navbar/logoPurple.png";
import styles from "../../styles/navbar/navbar.module.scss";

const nav = [
  { name: "About", href: "about" },
  { name: "Projects", href: "projects" },
  { name: "Get Involved", href: "get-involved" },
];

function getTheme(path: string) {
  if (path === "/") {
    return "light";
  } else {
    return "dark";
  }
}

export default function Navbar(): React.JSX.Element {
  const [active, setActive] = useState(false);
  const router = useRouter();
  const theme = getTheme(router.pathname);

  const logo = theme === "light" ? logoWhite : logoPurple;
  const color = theme === "light" ? styles.light : styles.dark;

  const toggleMenu = () => {
    setActive((prev) => !prev);
  };

  return (
    <div className={styles.navbar_wrapper}>
      <main className={styles.navbar}>
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
                <Link href={`/${item.href}`}>
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
      </main>
    </div>
  );
}
