import React from "react";
import { shallow } from "enzyme";
import StudyDuration from "./StudyDuration";

describe("`StudyDuration`", () => {
  describe("props", () => {
    it("should pass the correct units through to its children", () => {
      const wrapper = shallow(
        <StudyDuration startDate="2000-01-01" endDate="2002-02-01" />
      );
      const durationUnits = wrapper.find("DurationUnit");

      expect(durationUnits).toHaveLength(3);
      expect(durationUnits.at(0).prop("count")).toBe(2);
      expect(durationUnits.at(1).prop("count")).toBe(1);
      expect(durationUnits.at(2).prop("count")).toBe(0);
    });
  });
});
