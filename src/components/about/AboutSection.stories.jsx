import React from "react";
import AboutSection from "./AboutSection";

export default {
  title: "About/AboutSection",
  component: AboutSection
};

export const Basic = () => (
  <AboutSection compiler="storybook" framework="typescript" />
);
