import React from "react";
import cloneDeep from "clone-deep";
import ProjectCard from "./ProjectCard";
import { PROJECTS } from "./projectsData";
import "../../config/_general.scss";
import styles from "./ProjectsSection.module.scss";

export default function AboutSection(): JSX.Element {
  const projects = cloneDeep(PROJECTS);

  return (
    <section className={styles.contentSection}>
      <div className={styles.container}>
        <h2>Projects</h2>

        <div className={styles.list}>
          {projects.map(project => (
            <ProjectCard project={project} key={project.name} />
          ))}
        </div>
      </div>
    </section>
  );
}
