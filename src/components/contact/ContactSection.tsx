import React from "react";
import "../../config/_general.scss";
import styles from "./ContactSection.module.scss";

export default function AboutSection(): JSX.Element {
  return (
    <section
      id="contact"
      className={`${styles.contentSection} ${styles.contactSection}`}
    >
      <div className={styles.container}>
        <h2>Contact</h2>

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

        <a className={styles.button} href="https://blog.dargacode.com">
          <i className="fa fa-rss-square" />
          <span>Study Blog</span>
        </a>
      </div>
    </section>
  );
}
