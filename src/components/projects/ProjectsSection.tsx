import React from "react";
import cloneDeep from "clone-deep";
import ProjectCard from "./ProjectCard";
import { PROJECTS } from "./projectsData";
import "../../_general.scss";
import styles from "./ProjectsSection.styles.scss";

export default function AboutSection(): JSX.Element {
  const projects = cloneDeep(PROJECTS);

  return (
    <section
      id="projects"
      className={`${styles.contentSection} ${styles.projects}`}
    >
      <div className={styles.container}>
        <h2>Projects</h2>

        <div className={styles.projectList}>
          {projects.map(project => (
            <ProjectCard project={project} key={project.name} />
          ))}
        </div>
      </div>
    </section>
  );
}
