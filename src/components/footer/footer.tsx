import React from "react";
import styles from "../../styles/footer/footer.module.scss";
import Logo from "../branding/logo";

type FooterProps = {
  nav: { name: string; path: string }[];
  path: string;
};

function getTheme(path: string) {
  if (path === "/" || path === "/about" || path === "/get-involved") {
    return "light";
  } else {
    return "dark";
  }
}

export default function Footer({ nav, path }: FooterProps): React.JSX.Element {
  const theme = getTheme(path);
  const logoColor = theme === "light" ? "var(--text-white)" : "var(--include-purple)";
  const color = theme === "light" ? styles.light : styles.dark;

  return (
    <div className={styles.footer_wrapper}>
      <footer className={styles.footer}>
        <section className={styles.logo}>
          <a href={"/"}>
            <Logo fillColor={logoColor} />
          </a>
        </section>
        <section className={styles.footer_right}>
          <ul className={styles.footer_redirects}>
            {nav.map((link) => (
              <li key={link.path}>
                <a href={`/${link.path}`}>
                  <span className={`p-details ${color}`}>{link.name.toLowerCase()}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </footer>
    </div>
  );
}
