import React from "react";
import DurationUnit from "./DurationUnit";

export default {
  title: "About/Duration Unit",
  component: DurationUnit
};

export const Basic = () => <DurationUnit unit="unit" count={20} />;
