import React from "react";
import { shallow } from "enzyme";
import { MOCK_RESOURCES } from "./MockResources";
import ResourcesList from "./ResourcesList";

describe("`ResourcesList`", () => {
  describe("props", () => {
    describe("`resources`", () => {
      it("should render a `ResourceLink` for each `resource`", () => {
        const wrapper = shallow(<ResourcesList resources={MOCK_RESOURCES} />);

        expect(wrapper.find("ResourceLink")).toHaveLength(
          MOCK_RESOURCES.length
        );
      });
    });
  });
});
