import React from "react";
import { shallow } from "enzyme";
import cloneDeep from "clone-deep";
import { startCase } from "lodash";
import { classSelector } from "../../utils/jestUtils";
import { getTimeSinceCommit } from "./repoUtils";
import SkillCard from "./SkillCard";
import { MOCK_SKILLS } from "./mockSkills";
import { Skill, SKILL_URL_PREFIX } from "./skillsUtils";
// eslint-disable-next-line css-modules/no-unused-class
import styles from "./SkillCard.module.scss";

let skill: Skill;

describe("SkillCard", () => {
  beforeEach(() => {
    skill = cloneDeep(MOCK_SKILLS[0]);
  });

  describe("props", () => {
    describe("`skill.url`", () => {
      it("should link to the skill's `url`", () => {
        const wrapper = shallow(<SkillCard skill={skill} />);
        const url = wrapper.find("a").props().href;

        expect(url).toEqual(SKILL_URL_PREFIX + skill.name);
      });
    });

    describe("`skill.timeSinceCommit`", () => {
      it("should render the skill's `timeSinceCommit`", () => {
        const wrapper = shallow(<SkillCard skill={skill} />);
        const nameText = wrapper
          .find(classSelector(styles.timeSinceCommit))
          .text();

        expect(nameText).toEqual(getTimeSinceCommit(skill.lastCommitTime));
      });
    });

    describe("`skill.name`", () => {
      it("should render the skill's `name`", () => {
        const wrapper = shallow(<SkillCard skill={skill} />);
        const nameText = wrapper.find(classSelector(styles.name)).text();

        expect(nameText).toEqual(skill.displayName);
      });

      it("should derive and render the correct icon class`", () => {
        const wrapper = shallow(<SkillCard skill={skill} />);
        const { className } = wrapper.find("i").props();
        const iconClass = `icon${startCase(skill.name)}`;

        expect(className).toBe(iconClass);
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
