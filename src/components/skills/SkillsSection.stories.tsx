import React from "react";
import SkillsSection from "./SkillsSection";
import { MOCK_SKILLS } from "./mockSkills";

export default {
  title: "Skills/SkillsSection",
  component: SkillsSection
};

export const Basic = (): JSX.Element => <SkillsSection skills={MOCK_SKILLS} />;
