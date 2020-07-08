import React from "react";
import SkillsSectionContainer from "./SkillsSectionContainer";
import { MOCK_RAW_SKILLS } from "./mockSkills";

export default {
  title: "Skills/SkillsSectionContainer",
  component: SkillsSectionContainer
};

export const Basic = (): JSX.Element => (
  <SkillsSectionContainer rawSkills={MOCK_RAW_SKILLS} />
);
