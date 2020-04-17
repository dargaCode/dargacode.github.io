import React from "react";
import ProjectCard from "./ProjectCard";
import { PROJECTS } from "./projectsData";

export default {
  title: "Projects/ProjectCard",
  component: ProjectCard
};

export const Basic = (): JSX.Element => <ProjectCard project={PROJECTS[0]} />;
