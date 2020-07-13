import React from "react";
import { withKnobs, boolean } from "@storybook/addon-knobs";
import SkillsSection from "./SkillsSection";
import { MOCK_SKILLS } from "./mockSkills";

export default {
  title: "Skills/SkillsSection",
  component: SkillsSection,
  decorators: [withKnobs]
};

export const Basic = (): JSX.Element => (
  <SkillsSection skills={MOCK_SKILLS} loading={boolean("Loading", false)} />
);
