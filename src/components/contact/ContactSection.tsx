import React from "react";
import "../../config/_general.scss";
import styles from "./ContactSection.module.scss";
import ResourcesList from "../resources/ResourcesList";
import { CONTACT_RESOURCES } from "../resources/ResourcesData";

export default function AboutSection(): JSX.Element {
  return (
    <section className={styles.contentSection}>
      <div className={styles.container}>
        <h2>Contact</h2>

        <ResourcesList resources={CONTACT_RESOURCES} />
      </div>
    </section>
  );
}
