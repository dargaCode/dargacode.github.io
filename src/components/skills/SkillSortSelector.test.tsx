import React from "react";
import { shallow } from "enzyme";
import SkillSortSelector from "./SkillSortSelector";
import { SKILL_SORT_OPTIONS } from "./skillsUtils";

const onChange = jest.fn();

describe("`SkillSortSelector`", () => {
  describe("props", () => {
    it("should pass `disabled` to `select`", () => {
      const wrapper = shallow(
        <SkillSortSelector onChange={onChange} disabled />
      );
      const { disabled } = wrapper.find("select").props();

      expect(disabled).toBe(true);
    });

    it("should pass `onChange` to `select`", () => {
      const wrapper = shallow(
        <SkillSortSelector onChange={onChange} disabled />
      );
      const { onChange: handler } = wrapper.find("select").props();

      expect(handler).toBe(onChange);
    });
  });

  describe("render", () => {
    it("should render the selector", () => {
      const wrapper = shallow(<SkillSortSelector onChange={onChange} />);

      expect(wrapper.find("select")).toHaveLength(1);
    });

    it("should pass a default value to the selector", () => {
      const wrapper = shallow(<SkillSortSelector onChange={onChange} />);
      const { defaultValue } = wrapper.find("select").props();

      expect(defaultValue).toBe(SKILL_SORT_OPTIONS[0]);
    });

    it("should pass options to the selector", () => {
      const wrapper = shallow(<SkillSortSelector onChange={onChange} />);
      const options = wrapper.find("option");

      expect(options).toHaveLength(SKILL_SORT_OPTIONS.length);

      SKILL_SORT_OPTIONS.forEach((sortOption, index) => {
        const optionText = options.at(index).text();

        expect(optionText).toBe(sortOption);
      });
    });
  });
});
