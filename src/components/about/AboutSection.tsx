import React from "react";
import StudyDuration from "./StudyDuration";
import "../../_general.scss";
import styles from "./AboutSection.styles.scss";

export default function AboutSection(): JSX.Element {
  return (
    <section id="about" className="content-section about">
      <div className={styles.overlay}>
        <div className={styles.container}>
          <main>
            <div className="nocontent">
              {/* ignored by google */}
              <h2 className="invisible-but-outline-readable">About Me</h2>
            </div>

            <header>
              <span className={styles.logo}>
                <span className={styles.darga}>darga</span>
                <span className={styles.code}>Code</span>
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
