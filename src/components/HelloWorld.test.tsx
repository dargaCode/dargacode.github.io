import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import HelloWorld from "./HelloWorld";

describe("<HelloWorld/>", () => {
  it("should render the correct text", () => {
    const wrapper = shallow(<HelloWorld descriptor="Testing" />);

    expect(wrapper.find(".hello-world-message").text()).toBe(
      "Hello Testing World!"
    );
  });

  it("should match the snapshot", () => {
    const component = renderer.create(<HelloWorld descriptor="Testing" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
