import React from "react";
import ProjectCard from "./ProjectCard";
import { PROJECTS } from "./projectData";
import "../_general.scss";
import "./_projects.scss";

export default function AboutSection(): JSX.Element {
  return (
    <section id="projects" className="content-section projects">
      <div className="container">
        <h2>Projects</h2>

        <div className="project-list">
          {PROJECTS.map(project => (
            <ProjectCard project={project} key={project.name} />
          ))}
        </div>
      </div>
    </section>
  );
}
