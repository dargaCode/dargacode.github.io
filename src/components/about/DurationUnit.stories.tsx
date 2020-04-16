import React from "react";
import { withKnobs, text, number } from "@storybook/addon-knobs";
import DurationUnit from "./DurationUnit";

export default {
  title: "About/Duration Unit",
  component: DurationUnit,
  decorators: [withKnobs]
};

export const Basic = (): JSX.Element => (
  <DurationUnit
    unit={text("Unit Name", "day")}
    count={number("Unit Count", 20)}
  />
);
