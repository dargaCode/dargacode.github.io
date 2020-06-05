import React from "react";
import "../../config/_general.scss";
import styles from "./ContactSection.module.scss";

export default function AboutSection(): JSX.Element {
  return (
    <section className={styles.contentSection}>
      <div className={styles.container}>
        <h2>Contact</h2>

        <div className={styles.buttons}>
          <a className={styles.button} href="mailto:resume@dargaCode.com">
            <i className={`icon-envelope ${styles.envelope}`} />
            <span>Email</span>
          </a>

          <a
            className={styles.button}
            href="https://www.linkedin.com/in/dargaCode"
          >
            <i className="fa fa-linkedin-square" />
            <span>LinkedIn</span>
          </a>

          <a className={styles.button} href="https://github.com/dargaCode">
            <i className="fa fa-github-square" />
            <span>GitHub</span>
          </a>

          <a
            className={styles.button}
            href="https://blog.dargacode.com/tagged/highlights"
          >
            <i className="fa fa-rss-square" />
            <span>Study Blog</span>
          </a>
        </div>
      </div>
    </section>
  );
}
