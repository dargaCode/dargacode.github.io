import React from "react";
import { shallow } from "enzyme";
import cloneDeep from "clone-deep";
import SkillsSection from "./SkillsSection";
import { SKILLS } from "./skillsData";

import {
  Skill,
  nameSkillComparator,
  projectsSkillComparator,
  typeSkillComparator
} from "./skillsUtils";

const SKILLS_BY_NAME = cloneDeep(SKILLS).sort(nameSkillComparator);
const SKILLS_BY_TYPE = cloneDeep(SKILLS).sort(typeSkillComparator);
const SKILLS_BY_COUNT = cloneDeep(SKILLS).sort(projectsSkillComparator);

function getFakeEventWithValue(
  valueText: string
): React.ChangeEvent<HTMLSelectElement> {
  return { target: { value: valueText } } as React.ChangeEvent<
    HTMLSelectElement
  >;
}

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

      wrapper.instance().handleSort(getFakeEventWithValue("Skill Type"));

      expect(wrapper.state("skills")).toEqual(SKILLS_BY_TYPE);
    });

    it("can sort skills by project count", () => {
      const wrapper = shallow<SkillsSection>(<SkillsSection />);

      wrapper.instance().handleSort(getFakeEventWithValue("Project Count"));

      expect(wrapper.state("skills")).toEqual(SKILLS_BY_COUNT);
    });

    it("can sort skills by name", () => {
      const wrapper = shallow<SkillsSection>(<SkillsSection />);

      // sort away from default Skill Name sort, to sort back again
      wrapper.instance().handleSort(getFakeEventWithValue("Project Count"));
      wrapper.instance().handleSort(getFakeEventWithValue("Skill Name"));

      expect(wrapper.state("skills")).toEqual(SKILLS_BY_NAME);
    });
  });
});
