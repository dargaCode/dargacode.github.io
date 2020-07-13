import React from "react";
import { shallow } from "enzyme";
import { classSelector } from "../../utils/jestUtils";
import styles from "./Loading.module.scss";
import Loading from "./Loading";

describe("`Loading", () => {
  it("should render the loading overlay", () => {
    const wrapper = shallow(<Loading />);

    expect(wrapper.find(classSelector(styles.loadingOverlay))).toHaveLength(1);
  });

  it("should render the loading message", () => {
    const wrapper = shallow(<Loading />);

    expect(wrapper.find(classSelector(styles.loadingMessage))).toHaveLength(1);
  });
});
