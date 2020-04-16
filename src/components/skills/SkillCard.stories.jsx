import React from "react";
import SkillCard from "./SkillCard";
import { SKILLS } from "./skillsData";

export default {
  title: "Skills/SkillCard",
  component: SkillCard
};

export const Basic = (): JSX.Element => {
  return <SkillCard skill={SKILLS[0]} />;
};
