import React from "react";
import { shallow } from "enzyme";
import cloneDeep from "clone-deep";
import { classSelector } from "../../utils/jestUtils";
import SkillCard from "./SkillCard";
import { SKILLS } from "./skillsData";
import { Skill, SKILL_URL_PREFIX } from "./skillsUtils";
// eslint-disable-next-line css-modules/no-unused-class
import styles from "./SkillCard.module.scss";

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

        expect(url).toEqual(SKILL_URL_PREFIX + skill.name);
      });
    });

    describe("`skill.name`", () => {
      it("should render the skill name", () => {
        const wrapper = shallow(<SkillCard skill={skill} />);
        const nameText = wrapper.find(classSelector(styles.name)).text();

        expect(nameText).toEqual(skill.displayName);
      });
    });

    describe("`skill.iconClass`", () => {
      it("should render the skill iconClass", () => {
        const wrapper = shallow(<SkillCard skill={skill} />);
        const { className } = wrapper.find("i").props();

        expect(className).toBe(skill.iconClass);
      });
    });

    describe("`skill.repoCount`", () => {
      describe("when `repoCount` is 1", () => {
        it("should render `n Repo` (singular)", () => {
          skill.repoCount = 1;

          const wrapper = shallow(<SkillCard skill={skill} />);
          const repoCountText = wrapper
            .find(classSelector(styles.repoCount))
            .text();

          expect(repoCountText).toEqual(`${skill.repoCount} Repo`);
        });
      });

      describe("when `repoCount` is not 1", () => {
        it("should render `n Repos` (plural)", () => {
          const wrapper = shallow(<SkillCard skill={skill} />);
          const repoCountText = wrapper
            .find(classSelector(styles.repoCount))
            .text();

          expect(repoCountText).toEqual(`${skill.repoCount} Repos`);
        });
      });
    });
  });
});
