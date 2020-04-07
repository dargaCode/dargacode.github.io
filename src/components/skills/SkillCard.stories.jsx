import React from "react";
import SkillCard from "./SkillCard";
import { SKILLS } from "./skillData";

export default {
  title: "Skills/SkillCard",
  component: SkillCard
};

export const Basic = () => {
  return <SkillCard skill={SKILLS[0]} />;
};
