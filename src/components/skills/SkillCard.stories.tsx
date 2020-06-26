import React from "react";
import SkillCard from "./SkillCard";
import { MOCK_SKILLS } from "./mockSkills";

export default {
  title: "Skills/SkillCard",
  component: SkillCard
};

export const Basic = (): JSX.Element => {
  return <SkillCard skill={MOCK_SKILLS[0]} />;
};
