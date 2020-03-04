import React from "react";
import ProjectCard from "./ProjectCard";
import { PROJECTS } from "./projectData";

export default {
  title: "Projects/ProjectCard",
  component: ProjectCard
};

export const Basic = () => <ProjectCard project={PROJECTS[0]} />;
