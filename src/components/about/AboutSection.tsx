import React from "react";
import StudyDuration from "./StudyDuration";
import "../../config/_general.scss";
import styles from "./AboutSection.module.scss";

export default function AboutSection(): JSX.Element {
  return (
    <section className={styles.contentSection}>
      <div className={styles.overlay}>
        <div className={styles.container}>
          <main>
            <div className="nocontent">
              {/* ignored by google */}
              <h2 className={styles.invisibleButOutlineReadable}>About Me</h2>
            </div>

            <header>
              <span className={styles.logo}>
                <span className={styles.darga}>darga</span>
                <span>Code</span>
              </span>
              <span className={styles.subtitle}>Software Development</span>
            </header>

            <p>
              I&apos;m a self-taught software engineer and former game designer.
            </p>

            <StudyDuration />

            <p>I love building things, solving problems, and learning.</p>
          </main>
        </div>
      </div>
    </section>
  );
}
