import React from "react";
import cloneDeep from "clone-deep";
import ProjectCard from "./ProjectCard";
import { PROJECTS } from "./projectsData";
import "../../_general.scss";
import "./_projects.scss";

export default function AboutSection(): JSX.Element {
  const projects = cloneDeep(PROJECTS);

  return (
    <section id="projects" className="content-section projects">
      <div className="container">
        <h2>Projects</h2>

        <div className="project-list">
          {projects.map(project => (
            <ProjectCard project={project} key={project.name} />
          ))}
        </div>
      </div>
    </section>
  );
}
