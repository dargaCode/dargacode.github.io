import React from "react";
import { shallow } from "enzyme";
import NavigationBar from "./NavigationBar";

describe("`NavigationBar`", () => {
  describe("render", () => {
    it("should include NavLinks for all 5 sections", () => {
      const wrapper = shallow(<NavigationBar />);

      const navLinks = wrapper.find("NavLink");

      expect(navLinks).toHaveLength(5);
      expect(navLinks.at(0).prop("to")).toBe("/about");
      expect(navLinks.at(1).prop("to")).toBe("/skills");
      expect(navLinks.at(2).prop("to")).toBe("/projects");
      expect(navLinks.at(3).prop("to")).toBe("/resume");
      expect(navLinks.at(4).prop("to")).toBe("/contact");
    });
  });
});
