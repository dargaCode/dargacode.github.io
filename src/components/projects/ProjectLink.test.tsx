import React from "react";
import { shallow } from "enzyme";
import ProjectLink from "./ProjectLink";

const preferredUrl = "https://www.dargacode.com";
const defaultUrl = "https://www.google.com";

describe("ProjectLink", () => {
  describe("props", () => {
    describe("when `preferredUrl` exists", () => {
      it("should link to `preferredUrl`", () => {
        const wrapper = shallow(
          <ProjectLink preferredUrl={preferredUrl} defaultUrl={defaultUrl} />
        );
        const linkHref = wrapper
          .find("a")
          .at(0)
          .props().href;

        expect(linkHref).toBe(preferredUrl);
      });
    });

    describe("when `preferredUrl` does not exist", () => {
      it("should link to `defaultUrl`", () => {
        const wrapper = shallow(<ProjectLink defaultUrl={defaultUrl} />);
        const linkHref = wrapper
          .find("a")
          .at(0)
          .props().href;

        expect(linkHref).toBe(defaultUrl);
      });
    });

    describe("children", () => {
      it("should pass through and render the child elements", () => {
        const wrapper = shallow(
          <ProjectLink preferredUrl={preferredUrl} defaultUrl={defaultUrl}>
            <div className="child-div">hello world</div>
          </ProjectLink>
        );
        const childDivs = wrapper.find(".child-div");

        expect(childDivs).toHaveLength(1);
        expect(childDivs.at(0).text()).toBe("hello world");
      });
    });
  });
});
