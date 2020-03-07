import React from "react";
import { shallow } from "enzyme";
import ProjectsSection from "./ProjectsSection";
import { PROJECTS } from "./projectData";

describe("`ProjectsSection`", () => {
  describe("render", () => {
    it("should display a `ProjectCard` for every project", () => {
      const wrapper = shallow(<ProjectsSection />);

      expect(wrapper.find("ProjectCard")).toHaveLength(PROJECTS.length);
    });
  });
});
