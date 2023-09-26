import { ReactElement } from "react";
import Link from "next/link";

import projects from "../json/projects/data.json";
import styles from "../styles/projects/projects.module.scss";

export default function Projects(): ReactElement {
  return (
    <main className={styles.page}>
      <header>
        <p className={styles.header_small}>ABOUT</p>
        <h1 className={styles.header}>
          Made in Davis: <br />
          Transforming ideas into reality
        </h1>
      </header>
      <section className={styles.projects}>
        {projects.map((project, index) => {
          return (
            <article className={styles.project} key={index}>
              <img className={styles.img} src={project.img} />
              <p className="p-details">{project.term}</p>
              <h4>{project.title}</h4>
              <p className="p-small">{project.description}</p>
            </article>
          );
        })}
      </section>
      <section className={styles.closings}>
        <h1>Work with Us</h1>
        <p>
          Are you a student looking for professional opportunities or a company
          in need of a digital solution? Discover the many opportunities to
          collaborate with #include at Davis
        </p>
        <div>
          <Link href="/">
            <button className={styles.companies_button}>Companies</button>
          </Link>
          <Link href="/">
            <button className={styles.students_button}>Students</button>
          </Link>
        </div>
      </section>
    </main>
  );
}
