import React from "react";
import { shallow } from "enzyme";
import SkillsSection from "./SkillsSection";
import { SKILLS } from "./skillsData";

describe("`SkillsSection`", () => {
  describe("render", () => {
    it("should display a `SkillCard` for every skill", () => {
      const wrapper = shallow(<SkillsSection />);

      expect(wrapper.find("SkillCard")).toHaveLength(SKILLS.length);
    });
  });
});
