import React from "react";
import { shallow } from "enzyme";
import { classSelector } from "../../utils/jestUtils";
import ProjectCard from "./ProjectCard";
import { PROJECTS } from "./projectsData";
import styles from "./ProjectCard.module.scss";

describe("ProjectCard", () => {
  const project = PROJECTS[0];

  describe("props", () => {
    describe("`project.name`", () => {
      it("should render the project name", () => {
        const wrapper = shallow(<ProjectCard project={project} />);
        const nameText = wrapper.find("h3").text();

        expect(nameText).toEqual(project.name);
      });
    });

    describe("`project.type`", () => {
      it("should render the project type", () => {
        const wrapper = shallow(<ProjectCard project={project} />);
        const typeText = wrapper.find(classSelector(styles.type)).text();

        expect(typeText).toEqual(project.type);
      });
    });

    describe("`project.date`", () => {
      it("should render the project date", () => {
        const wrapper = shallow(<ProjectCard project={project} />);
        const time = wrapper.find("time");
        const { dateTime } = time.props();

        expect(dateTime).toBe("2017-04-04");
        expect(time.text()).toBe(" - Apr 2017");
      });
    });

    describe("`project.imageSrc`", () => {
      it("should render the project image", () => {
        const wrapper = shallow(<ProjectCard project={project} />);
        const imageSrc = wrapper.find("img").props().src;

        expect(imageSrc).toEqual(project.imageSrc);
      });
    });

    describe("`project.tags`", () => {
      it("should render the project tags", () => {
        const wrapper = shallow(<ProjectCard project={project} />);
        const tagsText = wrapper.find(classSelector(styles.tags)).text();

        expect(tagsText).toEqual(project.tags.join(", "));
      });
    });

    describe("`project.description`", () => {
      it("should render the project description", () => {
        const wrapper = shallow(<ProjectCard project={project} />);
        const descriptionText = wrapper.find("p").text();

        expect(descriptionText).toEqual(project.description);
      });
    });

    describe("`project.livePageUrl`", () => {
      const projectWithLivePage = PROJECTS[0];
      const projectWithoutLivePage = PROJECTS[3];

      describe("when `project.livePageUrl` exists", () => {
        it("should render icon linking to live webpage", () => {
          const wrapper = shallow(
            <ProjectCard project={projectWithLivePage} />
          );

          expect(
            wrapper.find(classSelector(styles.linkContainer))
          ).toHaveLength(2);
        });
      });

      describe("when `project.livePageUrl` does not exist", () => {
        it("should not render an icon linking to the live webpage", () => {
          const wrapper = shallow(
            <ProjectCard project={projectWithoutLivePage} />
          );

          expect(
            wrapper.find(classSelector(styles.linkContainer))
          ).toHaveLength(1);
        });
      });
    });
  });
});
