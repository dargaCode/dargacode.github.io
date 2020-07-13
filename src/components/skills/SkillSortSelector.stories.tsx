import React from "react";
import { withKnobs, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import SkillSortSelector from "./SkillSortSelector";

export default {
  title: "Skills/SkillSortSelector",
  component: SkillSortSelector,
  decorators: [withKnobs]
};

export const Basic = (): JSX.Element => (
  <SkillSortSelector
    disabled={boolean("Disabled", false)}
    onChange={action("onChange")}
  />
);
