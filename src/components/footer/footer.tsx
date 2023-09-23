import React from "react";
import Image from "next/image";
import Link from "next/link";
import logoWhite from "../../../public/logoWhite.png";
import logoPurple from "../../../public/logoPurple.png";
import styles from "../../styles/footer/footer.module.scss";

type FooterProps = {
  nav: { name: string; path: string }[];
  path: string;
  router: any;
};

function getTheme(path: string) {
  if (path === "/" || path === "/about" || path === "/get-involved") {
    return "light";
  } else {
    return "dark";
  }
}

export default function Footer({ nav, path, router }: FooterProps): React.JSX.Element {
  const theme = getTheme(path);
  const logo = theme === "light" ? logoWhite : logoPurple;
  const color = theme === "light" ? styles.light : styles.dark;

  return (
    <div className={styles.footer_wrapper}>
      <footer className={styles.footer}>
        <section className={styles.logo}>
          <Link href={"/"} onClick={() => router.refresh()}>
            <Image src={logo} alt="" />
          </Link>
        </section>
        <section className={styles.footer_right}>
          <ul className={styles.footer_redirects}>
            {nav.map((link) => (
              <li key={link.path}>
                <Link href={`/${link.path}`} onClick={() => router.refresh()}>
                  <span className={`p-details ${color}`}>{link.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </footer>
    </div>
  );
}
