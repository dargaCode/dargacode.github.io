import React from "react";
import { shallow } from "enzyme";
import DurationUnit from "./DurationUnit";

describe("`DurationUnit`", () => {
  describe("when unit count is 0", () => {
    it("should return plural", () => {
      const wrapper = shallow(<DurationUnit unit="year" count={0} />);

      expect(wrapper.text()).toBe(" 0 years");
    });
  });

  describe("when unit count is 1", () => {
    it("should return singular", () => {
      const wrapper = shallow(<DurationUnit unit="month" count={1} />);

      expect(wrapper.text()).toBe(" 1 month");
    });
  });

  describe("when unit count is greater than 1", () => {
    it("should return plural", () => {
      const wrapper = shallow(<DurationUnit unit="day" count={22} />);

      expect(wrapper.text()).toBe(" 22 days");
    });
  });
});
