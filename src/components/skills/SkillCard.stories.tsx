import React from "react";
import SkillCard from "./SkillCard";
import { RAW_SKILLS } from "./rawSkillsData";

export default {
  title: "Skills/SkillCard",
  component: SkillCard
};

export const Basic = (): JSX.Element => {
  return <SkillCard skill={RAW_SKILLS[0]} />;
};
