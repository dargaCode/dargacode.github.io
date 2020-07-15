import React from "react";
import "../../config/_general.scss";
import styles from "./ResumeSection.module.scss";
import ResourcesList from "../resources/ResourcesList";
import { RESUME_RESOURCES } from "../resources/ResourcesData";

export default function AboutSection(): JSX.Element {
  return (
    <section className={styles.contentSection}>
      <div className={styles.overlay}>
        {/* container style is not overwritten in `ResumeSection` module */}
        <div className="container">
          <h2>Resume</h2>

          <ResourcesList resources={RESUME_RESOURCES} />
        </div>
      </div>
    </section>
  );
}
