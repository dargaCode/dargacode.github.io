import React from "react";
import "../../config/_general.scss";
import styles from "./ContactSection.module.scss";
// eslint-disable-next-line css-modules/no-unused-class
import icons from "../../fonts/icons.module.scss";

export default function AboutSection(): JSX.Element {
  return (
    <section className={styles.contentSection}>
      <div className={styles.container}>
        <h2>Contact</h2>

        <div className={styles.buttons}>
          <a className={styles.button} href="https://github.com/dargaCode">
            <i className={icons.iconGithub} />
            <span>GitHub</span>
          </a>

          <a
            className={styles.button}
            href="https://www.linkedin.com/in/dargaCode"
          >
            <i className={icons.iconLinkedin} />
            <span>LinkedIn</span>
          </a>

          <a className={styles.button} href="mailto:resume@dargaCode.com">
            <i className={icons.iconEnvelope} />
            <span>Email</span>
          </a>

          <a
            className={styles.button}
            href="https://blog.dargacode.com/tagged/highlights"
          >
            <i className={icons.iconCss} />
            <span>Blog</span>
          </a>
        </div>
      </div>
    </section>
  );
}
