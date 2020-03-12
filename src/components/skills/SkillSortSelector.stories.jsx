import React from "react";
import { action } from "@storybook/addon-actions";
import SkillSortSelector from "./SkillSortSelector";

export default {
  title: "Skills/SkillSortSelector",
  component: SkillSortSelector
};

export const Basic = () => <SkillSortSelector onChange={action("onChange")} />;
