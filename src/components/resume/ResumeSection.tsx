import React from "react";
import "../../base/_base.scss";
import styles from "./ResumeSection.module.scss";

export default function AboutSection(): JSX.Element {
  return (
    <section
      id="resume"
      className={`${styles.contentSection} ${styles.resumeSection}`}
    >
      <div className={styles.overlay}>
        <div className={styles.container}>
          <h2>Resume</h2>

          <div className={styles.buttons}>
            <a
              className={styles.button}
              href="./resume/Darga_Developer_Resume.pdf"
            >
              <i className="fa fa-file-pdf-o" />
              <span>
                PDF <br />
                Resume
              </span>
            </a>

            <a
              className={styles.button}
              href="./resume/Darga_Developer_Resume.docx"
            >
              <i className="fa fa-file-word-o" />
              <span>
                Simple <br />
                Resume
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
