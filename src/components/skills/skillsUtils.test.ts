import cloneDeep from "clone-deep";
import {
  Skill,
  EMPTY_SKILL,
  nameSkillComparator,
  repoCountComparator
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
  });
});
