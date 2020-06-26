/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { shallow } from "enzyme";
import cloneDeep from "clone-deep";
import SkillsSection from "./SkillsSection";
import { MOCK_SKILLS } from "./mockSkills";

import { Skill, nameSkillComparator, repoCountComparator } from "./skillsUtils";

const SKILLS_BY_NAME = cloneDeep(MOCK_SKILLS).sort(nameSkillComparator);
const SKILLS_BY_COUNT = cloneDeep(MOCK_SKILLS).sort(repoCountComparator);

function getFakeEventWithValue(
  valueText: string
): React.ChangeEvent<HTMLSelectElement> {
  return { target: { value: valueText } } as React.ChangeEvent<
    HTMLSelectElement
  >;
}

describe("`SkillsSection`", () => {
  const props = {
    skills: cloneDeep(MOCK_SKILLS)
  };

  describe("render", () => {
    it("should display a `SkillSortSelector`", () => {
      const wrapper = shallow(<SkillsSection {...props} />);

      expect(wrapper.find("SkillSortSelector")).toHaveLength(1);
    });

    it("should display a `SkillCard` for every skill", () => {
      const wrapper = shallow(<SkillsSection {...props} />);

      expect(wrapper.find("SkillCard")).toHaveLength(MOCK_SKILLS.length);
    });

    it("should initially sort skills by name", () => {
      const wrapper = shallow(<SkillsSection {...props} />);

      const skills: Skill[] = wrapper.state("skills");

      expect(skills).toEqual(MOCK_SKILLS.sort(nameSkillComparator));
    });
  });

  describe("events", () => {
    it("can sort skills by repo count", () => {
      const wrapper = shallow<SkillsSection>(<SkillsSection {...props} />);

      wrapper.instance().handleSort(getFakeEventWithValue("Repo Count"));

      expect(wrapper.state("skills")).toEqual(SKILLS_BY_COUNT);
    });

    it("can sort skills by name", () => {
      const wrapper = shallow<SkillsSection>(<SkillsSection {...props} />);

      // Sort away from default Skill Name sort, to sort back again
      wrapper.instance().handleSort(getFakeEventWithValue("Repo Count"));
      wrapper.instance().handleSort(getFakeEventWithValue("Skill Name"));

      expect(wrapper.state("skills")).toEqual(SKILLS_BY_NAME);
    });
  });
});
