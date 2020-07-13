/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { shallow } from "enzyme";
import cloneDeep from "clone-deep";
import SkillsSection from "./SkillsSection";
import { MOCK_SKILLS } from "./mockSkills";
import {
  SkillSortComparator,
  nameSkillComparator,
  repoCountComparator,
  commitRecencySkillComparator,
  DEFAULT_COMPARATOR
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

  describe("'props'", () => {
    describe("`loading", () => {
      it("should display a loading message", () => {
        const wrapper = shallow(<SkillsSection {...props} loading />);

        expect(wrapper.find("Loading")).toHaveLength(1);
      });

      it("should not display any `SkillCard`s", () => {
        const wrapper = shallow(<SkillsSection {...props} loading />);

        expect(wrapper.find("SkillCard")).toHaveLength(0);
      });

      it("should pass `disabled` to `SkillSortSelector`", () => {
        const wrapper = shallow(<SkillsSection {...props} loading />);
        const { disabled } = wrapper.find("SkillSortSelector").props();

        expect(disabled).toBe(true);
      });
    });

    describe("`error", () => {
      const error = { message: "" };

      it("should display an error message", () => {
        const wrapper = shallow(<SkillsSection {...props} error={error} />);

        expect(wrapper.find(".error")).toHaveLength(1);
      });

      it("should not display any `SkillCard`s", () => {
        const wrapper = shallow(<SkillsSection {...props} error={error} />);

        expect(wrapper.find("SkillCard")).toHaveLength(0);
      });
    });

    describe("`skills`", () => {
      describe("when `loading` is false and there is no `error`", () => {
        it("should display a `SkillCard` for every skill", () => {
          const wrapper = shallow(<SkillsSection {...props} />);

          expect(wrapper.find("SkillCard")).toHaveLength(MOCK_SKILLS.length);
        });

        it("should initially sort skills by `DEFAULT_COMPARATOR`", () => {
          const wrapper = shallow(<SkillsSection {...props} />);
          const comparator: SkillSortComparator = wrapper.state(
            "sortComparator"
          );

          expect(comparator).toEqual(DEFAULT_COMPARATOR);
        });
      });
    });
  });

  describe("render", () => {
    it("should display a `SkillSortSelector`", () => {
      const wrapper = shallow(<SkillsSection {...props} />);

      expect(wrapper.find("SkillSortSelector")).toHaveLength(1);
    });
  });

  describe("events", () => {
    it("can sort skills by `repoCount`", () => {
      const wrapper = shallow<SkillsSection>(<SkillsSection {...props} />);

      wrapper.instance().handleSort(getFakeEventWithValue("Repo Count"));

      const comparator: SkillSortComparator = wrapper.state("sortComparator");

      expect(comparator).toEqual(repoCountComparator);
    });

    it("can sort skills by `name`", () => {
      const wrapper = shallow<SkillsSection>(<SkillsSection {...props} />);

      wrapper.instance().handleSort(getFakeEventWithValue("Skill Name"));

      const comparator: SkillSortComparator = wrapper.state("sortComparator");

      expect(comparator).toEqual(nameSkillComparator);
    });

    it("can sort skills by `lastCommitTime`", () => {
      const wrapper = shallow<SkillsSection>(<SkillsSection {...props} />);

      // sort away from initial sort, to sort back again
      wrapper.instance().handleSort(getFakeEventWithValue("Name"));
      wrapper.instance().handleSort(getFakeEventWithValue("Recency"));

      const comparator: SkillSortComparator = wrapper.state("sortComparator");

      expect(comparator).toEqual(commitRecencySkillComparator);
    });
  });
});
