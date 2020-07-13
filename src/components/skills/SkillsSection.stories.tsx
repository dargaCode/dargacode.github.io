import React from "react";
import { withKnobs, boolean, text } from "@storybook/addon-knobs";
import SkillsSection from "./SkillsSection";
import { MOCK_SKILLS } from "./mockSkills";
import { Error } from "../error/errorUtils";

export default {
  title: "Skills/SkillsSection",
  component: SkillsSection,
  decorators: [withKnobs]
};

function getError(): Error | undefined {
  const errorMessage = text("Error Message", "");

  return errorMessage ? { message: errorMessage } : undefined;
}

export const Basic = (): JSX.Element => (
  <SkillsSection
    loading={boolean("Loading", false)}
    error={getError()}
    skills={MOCK_SKILLS}
  />
);
