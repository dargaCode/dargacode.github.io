import React from "react";
import "../../config/_general.scss";
import styles from "./ContactSection.module.scss";

export default function AboutSection(): JSX.Element {
  return (
    <section className={styles.contentSection}>
      <div className={styles.container}>
        <h2>Contact</h2>

        <div className={styles.buttons}>
          <a className={styles.button} href="https://github.com/dargaCode">
            <i className="fa fa-github" />
            <span>GitHub</span>
          </a>

          <a
            className={styles.button}
            href="https://www.linkedin.com/in/dargaCode"
          >
            <i className="fa fa-linkedin" />
            <span>LinkedIn</span>
          </a>

          <a className={styles.button} href="mailto:resume@dargaCode.com">
            <i className="fa fa-envelope" />
            <span>Email</span>
          </a>

          <a
            className={styles.button}
            href="https://blog.dargacode.com/tagged/highlights"
          >
            <i className="fa fa-rss" />
            <span>Blog</span>
          </a>
        </div>
      </div>
    </section>
  );
}
