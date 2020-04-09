import React from "react";
import { shallow } from "enzyme";
import cloneDeep from "clone-deep";
import SkillCard from "./SkillCard";
import { SKILLS } from "./skillsData";
import { Skill } from "./skillsUtils";

let skill: Skill;

describe("SkillCard", () => {
  beforeEach(() => {
    skill = cloneDeep(SKILLS[0]);
  });

  describe("props", () => {
    describe("`skill.url`", () => {
      it("should link to the skill url", () => {
        const wrapper = shallow(<SkillCard skill={skill} />);
        const url = wrapper.find("a").props().href;

        expect(url).toEqual(skill.url);
      });
    });

    describe("`skill.name`", () => {
      it("should render the skill name", () => {
        const wrapper = shallow(<SkillCard skill={skill} />);
        const nameText = wrapper.find(".skill-name").text();

        expect(nameText).toEqual(skill.name);
      });
    });

    describe("`skill.iconClass`", () => {
      it("should render the skill iconClass", () => {
        const wrapper = shallow(<SkillCard skill={skill} />);
        const { className } = wrapper.find("i").props();

        expect(className).toBe(skill.iconClass);
      });
    });

    describe("`skill.type`", () => {
      it("should render the skill type", () => {
        const wrapper = shallow(<SkillCard skill={skill} />);
        const typeText = wrapper.find(".skill-type").text();

        expect(typeText).toEqual(skill.type);
      });
    });

    describe("`skill.projectCount`", () => {
      describe("when `projectCount` is 1", () => {
        it("should render `n Project` (singular)", () => {
          skill.projectCount = 1;

          const wrapper = shallow(<SkillCard skill={skill} />);
          const projectCountText = wrapper.find(".skill-project-count").text();

          expect(projectCountText).toEqual(`${skill.projectCount} Project`);
        });
      });

      describe("when `projectCount` is not 1", () => {
        it("should render `n Projects` (plural)", () => {
          const wrapper = shallow(<SkillCard skill={skill} />);
          const projectCountText = wrapper.find(".skill-project-count").text();

          expect(projectCountText).toEqual(`${skill.projectCount} Projects`);
        });
      });
    });
  });
});
