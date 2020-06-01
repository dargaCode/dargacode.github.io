import React from "react";
import { action } from "@storybook/addon-actions";
import SkillSortSelector from "./SkillSortSelector";

export default {
  title: "Skills/SkillSortSelector",
  component: SkillSortSelector
};

export const Basic = (): JSX.Element => (
  // eslint-disable-next-line spellcheck/spell-checker
  <div style={{ position: "relative", height: "100px", width: "300px" }}>
    <SkillSortSelector onChange={action("onChange")} />
  </div>
);
