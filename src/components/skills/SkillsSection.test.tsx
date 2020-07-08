/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { shallow } from "enzyme";
import cloneDeep from "clone-deep";
import SkillsSection from "./SkillsSection";
import { MOCK_SKILLS } from "./mockSkills";

import {
  SkillSortComparator,
  nameSkillComparator,
  repoCountComparator
} from "./skillsUtils";

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
      const comparator: SkillSortComparator = wrapper.state("sortComparator");

      expect(comparator).toEqual(nameSkillComparator);
    });
  });

  describe("events", () => {
    it("can sort skills by repo count", () => {
      const wrapper = shallow<SkillsSection>(<SkillsSection {...props} />);

      wrapper.instance().handleSort(getFakeEventWithValue("Repo Count"));

      const comparator: SkillSortComparator = wrapper.state("sortComparator");

      expect(comparator).toEqual(repoCountComparator);
    });

    it("can sort skills by name", () => {
      const wrapper = shallow<SkillsSection>(<SkillsSection {...props} />);

      // sort away from default Skill Name sort, to sort back again
      wrapper.instance().handleSort(getFakeEventWithValue("Repo Count"));
      wrapper.instance().handleSort(getFakeEventWithValue("Skill Name"));

      const comparator: SkillSortComparator = wrapper.state("sortComparator");

      expect(comparator).toEqual(nameSkillComparator);
    });
  });
});
