import React from "react";
import { shallow } from "enzyme";
import ProjectCard from "./ProjectCard";
import { PROJECTS } from "./projectData";

const projectWithLivePage = PROJECTS[0];
const projectWithoutLivePage = PROJECTS[3];

describe("ProjectCard", () => {
  describe("props", () => {
    describe("`project.livePageUrl`", () => {
      describe("when `project.livePageUrl` exists", () => {
        it("should render icon linking to live webpage", () => {
          // todo
        });
      });
      describe("when `project.livePageUrl` does not exist", () => {
        it("should not render an icon linking to the live webpage", () => {
          // todo
        });
      });
    });
  });

  it("should render", () => {
    const wrapper = shallow(<ProjectCard project={PROJECTS[0]} />);

    expect(true).toBe(true);
  });
});
