import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import ProjectLink from "./ProjectLink";

export default {
  title: "Projects/ProjectLink",
  component: ProjectLink,
  decorators: [withKnobs]
};

export const Basic = () => (
  <ProjectLink
    preferredUrl={text("Preferred Url", "https://www.google.com")}
    defaultUrl={text("Default Url", "https://www.dargacode.com")}
  >
    <button type="button">Link</button>
  </ProjectLink>
);
