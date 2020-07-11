import React from "react";
import "../../config/_general.scss";
import styles from "./ResumeSection.module.scss";
// eslint-disable-next-line css-modules/no-unused-class
import icons from "../../fonts/icons.module.scss";
import pdfResume from "../../resumes/Darga_SWE_Resume.pdf";
import docxResume from "../../resumes/Darga_SWE_Resume.docx";

export default function AboutSection(): JSX.Element {
  return (
    <section className={styles.contentSection}>
      <div className={styles.overlay}>
        <div className={styles.container}>
          <h2>Resume</h2>

          <div className={styles.buttons}>
            <a className={styles.button} href={pdfResume}>
              <i className={icons.iconPdf} />
              <span>
                PDF <br />
                Resume
              </span>
            </a>

            <a className={styles.button} href={docxResume}>
              <i className={icons.iconDocx} />
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
