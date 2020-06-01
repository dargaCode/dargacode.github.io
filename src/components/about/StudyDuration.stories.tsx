import React from "react";
import StudyDuration from "./StudyDuration";

export default {
  title: "About/Study Duration",
  component: StudyDuration
};

export const Basic = (): JSX.Element => (
  <div style={{ background: "white" }}>
    <StudyDuration />
  </div>
);
