import React from "react";
import { shallow } from "enzyme";
import AboutSection from "./AboutSection";

describe("`AboutSection`", () => {
  describe("render", () => {
    it("should contain a `StudyDuration` component", () => {
      const wrapper = shallow(<AboutSection />);

      expect(wrapper.find("StudyDuration")).toHaveLength(1);
    });
  });
});
