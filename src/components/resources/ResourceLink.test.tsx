import React from "react";
import { shallow } from "enzyme";
import { classSelector } from "../../utils/jestUtils";
import ResourceLink from "./ResourceLink";
import { MOCK_RESOURCES } from "./MockResources";
// eslint-disable-next-line css-modules/no-unused-class
import styles from "./ResourceLink.module.scss";

const RESOURCE = MOCK_RESOURCES[0];

describe("`ResourceLink`", () => {
  describe("props", () => {
    describe("`resource`", () => {
      it("`should link to the resource's `href`", () => {
        const wrapper = shallow(<ResourceLink resource={RESOURCE} />);
        const { href } = wrapper
          .find(classSelector(styles.resourceLink))
          .props();

        expect(href).toBe(RESOURCE.href);
      });

      it("`should render the resource's `displayName`", () => {
        const wrapper = shallow(<ResourceLink resource={RESOURCE} />);
        const nameText = wrapper.find(classSelector(styles.name)).text();

        expect(nameText).toBe(RESOURCE.displayName);
      });

      it("`should render an icon with the resource's `iconClass`", () => {
        const wrapper = shallow(<ResourceLink resource={RESOURCE} />);
        const { className } = wrapper.find("i").props();

        expect(className).toBe(RESOURCE.iconClass);
      });
    });
  });
});
