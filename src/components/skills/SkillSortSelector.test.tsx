import React from "react";
import { shallow } from "enzyme";
import SkillSortSelector from "./SkillSortSelector";
import { SKILL_SORT_OPTIONS } from "./SkillConstants";

describe("`SkillSortSelector`", () => {
  describe("render", () => {
    it("should render the selector", () => {
      const wrapper = shallow(<SkillSortSelector />);

      expect(wrapper.find("select")).toHaveLength(1);
    });

    it("should pass a default value to the selector", () => {
      const wrapper = shallow(<SkillSortSelector />);
      const { defaultValue } = wrapper.find("select").props();

      expect(defaultValue).toBe(SKILL_SORT_OPTIONS[0]);
    });

    it("should pass options to the selector", () => {
      const wrapper = shallow(<SkillSortSelector />);
      const options = wrapper.find("option");

      expect(options).toHaveLength(SKILL_SORT_OPTIONS.length);

      SKILL_SORT_OPTIONS.forEach((sortOption, index) => {
        const optionText = options.at(index).text();

        expect(optionText).toBe(sortOption);
      });
    });
  });
});
