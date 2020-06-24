import React from "react";
import SkillsSectionContainer from "./SkillsSectionContainer";

export default {
  title: "Skills/SkillsSectionContainer",
  component: SkillsSectionContainer
};

export const Basic = (): JSX.Element => (
  // eslint-disable-next-line spellcheck/spell-checker
  <div style={{ overflow: "auto", maxHeight: "500px" }}>
    <SkillsSectionContainer />
  </div>
);
