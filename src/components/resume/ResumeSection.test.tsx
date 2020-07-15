import React from "react";
import { shallow } from "enzyme";
import ResumeSection from "./ResumeSection";

describe("`ResumeSection`", () => {
  describe("render", () => {
    it("should render a `ResourcesList`", () => {
      const wrapper = shallow(<ResumeSection />);

      expect(wrapper.find("ResourcesList")).toHaveLength(1);
    });
  });
});
