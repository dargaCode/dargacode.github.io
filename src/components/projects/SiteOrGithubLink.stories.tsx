import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import SiteOrGithubLink from "./SiteOrGithubLink";

export default {
  title: "Projects/SiteOrGithubLink",
  component: SiteOrGithubLink,
  decorators: [withKnobs]
};

export const Basic = (): JSX.Element => (
  <SiteOrGithubLink
    preferredUrl={text("Preferred Url", "https://www.google.com")}
    defaultUrl={text("Default Url", "https://www.dargacode.com")}
  >
    <button type="button">Link</button>
  </SiteOrGithubLink>
);
