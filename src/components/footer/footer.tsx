import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RxHeartFilled } from "react-icons/rx";
import logoWhite from "../../../public/logoWhite.png";
import logoPurple from "../../../public/logoPurple.png";
import styles from "../../styles/footer/footer.module.scss";

type FooterProps = {
  nav: { name: string; path: string }[];
  theme: string;
};

export default function Footer({ nav, theme }: FooterProps): React.JSX.Element {
  const logo = theme === "light" ? logoWhite : logoPurple;
  const color = theme === "light" ? styles.light : styles.dark;

  return (
    <div className={styles.footer_wrapper}>
      <footer className={styles.footer}>
        <section className={styles.logo}>
          <Image src={logo} alt="" />
        </section>
        <section className={styles.footer_right}>
          <ul className={styles.footer_redirects}>
            {nav.map((link) => (
              <li key={link.path}>
                <Link href={`/${link.path}`}>
                  <span className={`p-small ${color}`}>{link.name}</span>
                </Link>
              </li>
            ))}
          </ul>
          <section className={styles.mobile}>
            <p className={`${color}`}>
              Made with love by <span>#include</span>
            </p>
            <RxHeartFilled className={color} />
          </section>
        </section>
      </footer>
    </div>
  );
}
