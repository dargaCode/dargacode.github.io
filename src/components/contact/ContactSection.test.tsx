import React from "react";
import { shallow } from "enzyme";
import ContactSection from "./ContactSection";

describe("`ContactSection`", () => {
  describe("render", () => {
    it("should render a `ResourcesList`", () => {
      const wrapper = shallow(<ContactSection />);

      expect(wrapper.find("ResourcesList")).toHaveLength(1);
    });
  });
});
