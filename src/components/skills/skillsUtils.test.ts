import cloneDeep from "clone-deep";
import moment from "moment";
import { DATE_FORMAT } from "../../utils/dateConstants";
import {
  Skill,
  EMPTY_SKILL,
  nameSkillComparator,
  repoCountComparator,
  commitRecencySkillComparator,
  DEFAULT_COMPARATOR
} from "./skillsUtils";

function getSkillNames(skills: Skill[]): string[] {
  return skills.map(skill => skill.name);
}

describe("`skillsUtils`", () => {
  describe("comparators", () => {
    let skills: Skill[];
    let skillA: Skill;
    let skillB: Skill;
    let skillC: Skill;

    beforeEach(() => {
      skillA = cloneDeep(EMPTY_SKILL);
      skillB = cloneDeep(EMPTY_SKILL);
      skillC = cloneDeep(EMPTY_SKILL);
      skills = [skillA, skillB, skillC];
    });

    describe("nameSkillComparator", () => {
      it("should sort by ascending `name`", () => {
        skillA.name = "React";
        skillB.name = "Git";
        skillC.name = "Jest";

        const sortedSkills = skills.sort(nameSkillComparator);

        expect(getSkillNames(sortedSkills)).toEqual(["Git", "Jest", "React"]);
      });

      it("should preserve order of matching `name`s", () => {
        skillA.name = "Jest";
        skillB.name = "Git";
        skillC.name = "Jest";

        const sortedSkills = skills.sort(nameSkillComparator);

        expect(getSkillNames(sortedSkills)).toEqual(["Git", "Jest", "Jest"]);
      });
    });

    describe("repoCountSkillComparator", () => {
      it("should first sort by descending `repoCount`", () => {
        skillA.name = "Jest";
        skillA.repoCount = 11;
        skillB.name = "Git";
        skillB.repoCount = 5;
        skillC.name = "React";
        skillC.repoCount = 20;

        const sortedSkills = skills.sort(repoCountComparator);

        expect(getSkillNames(sortedSkills)).toEqual(["React", "Jest", "Git"]);
      });

      it("should then sort ties by ascending `name`", () => {
        skillA.name = "Jest";
        skillA.repoCount = 20;
        skillB.name = "React";
        skillB.repoCount = 11;
        skillC.name = "Git";
        skillC.repoCount = 20;

        const sortedSkills = skills.sort(repoCountComparator);

        expect(getSkillNames(sortedSkills)).toEqual(["Git", "Jest", "React"]);
      });
    });

    describe("commitRecencySkillComparator", () => {
      it("should first sort by descending `lastCommitTime`", () => {
        skillA.name = "React";
        skillA.repoCount = 22;
        skillA.lastCommitTime = moment("2012-12-12", DATE_FORMAT);
        skillB.name = "Jest";
        skillB.repoCount = 6;
        skillB.lastCommitTime = moment("2010-10-10", DATE_FORMAT);
        skillC.name = "Git";
        skillC.repoCount = 13;
        skillC.lastCommitTime = moment("2011-11-11", DATE_FORMAT);

        const sortedSkills = skills.sort(commitRecencySkillComparator);

        expect(getSkillNames(sortedSkills)).toEqual(["React", "Git", "Jest"]);
      });

      it("should then sort ties by ascending `repoCount`", () => {
        skillA.name = "React";
        skillA.repoCount = 22;
        skillA.lastCommitTime = moment("2011-11-11", DATE_FORMAT);
        skillB.name = "Jest";
        skillB.repoCount = 6;
        skillB.lastCommitTime = moment("2011-11-11", DATE_FORMAT);
        skillC.name = "Git";
        skillC.repoCount = 13;
        skillC.lastCommitTime = moment("2012-12-12", DATE_FORMAT);

        const sortedSkills = skills.sort(commitRecencySkillComparator);

        expect(getSkillNames(sortedSkills)).toEqual(["Git", "Jest", "React"]);
      });

      it("should then sort ties by ascending `name`", () => {
        skillA.name = "React";
        skillA.repoCount = 22;
        skillA.lastCommitTime = moment("2012-12-12", DATE_FORMAT);
        skillB.name = "Jest";
        skillB.repoCount = 13;
        skillB.lastCommitTime = moment("2012-12-12", DATE_FORMAT);
        skillC.name = "Git";
        skillC.repoCount = 22;
        skillC.lastCommitTime = moment("2012-12-12", DATE_FORMAT);

        const sortedSkills = skills.sort(commitRecencySkillComparator);

        expect(getSkillNames(sortedSkills)).toEqual(["Jest", "Git", "React"]);
      });
    });
  });

  describe("`DEFAULT_COMPARATOR`", () => {
    it("should be `nameSkillComparator`", () => {
      expect(DEFAULT_COMPARATOR).toBe(commitRecencySkillComparator);
    });
  });
});
