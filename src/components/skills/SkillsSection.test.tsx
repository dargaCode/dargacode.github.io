import React from "react";
import { shallow } from "enzyme";
import SkillsSection from "./SkillsSection";
import { SKILLS } from "./skillsData";

import {
  Skill,
  nameSkillComparator,
  projectCountSkillComparator,
  typeSkillComparator
} from "./skillsUtils";

describe("`SkillsSection`", () => {
  describe("render", () => {
    it("should display a `SkillSortSelector`", () => {
      const wrapper = shallow(<SkillsSection />);

      expect(wrapper.find("SkillSortSelector")).toHaveLength(1);
    });

    it("should display a `SkillCard` for every skill", () => {
      const wrapper = shallow(<SkillsSection />);

      expect(wrapper.find("SkillCard")).toHaveLength(SKILLS.length);
    });

    it("should initially sort skills by name", () => {
      const wrapper = shallow(<SkillsSection />);

      const skills: Skill[] = wrapper.state("skills");

      expect(skills).toEqual(SKILLS.sort(nameSkillComparator));
    });
  });

  describe("events", () => {
    it("can sort skills by type", () => {
      const wrapper = shallow<SkillsSection>(<SkillsSection />);

      wrapper.instance().handleSort({ target: { value: "Skill Type" } });

      expect(wrapper.state("skills")).toEqual(SKILLS.sort(typeSkillComparator));
    });

    it("can sort skills by project count", () => {
      const wrapper = shallow<SkillsSection>(<SkillsSection />);

      wrapper.instance().handleSort({ target: { value: "Project Count" } });

      expect(wrapper.state("skills")).toEqual(
        SKILLS.sort(projectCountSkillComparator)
      );
    });

    it("can sort skills by name", () => {
      const wrapper = shallow<SkillsSection>(<SkillsSection />);

      // sort away from default Skill Name sort, to sort back again
      wrapper.instance().handleSort({ target: { value: "Project Count" } });
      wrapper.instance().handleSort({ target: { value: "Skill Name" } });

      expect(wrapper.state("skills")).toEqual(SKILLS.sort(nameSkillComparator));
    });
  });
});
