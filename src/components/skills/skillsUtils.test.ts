import cloneDeep from "clone-deep";
import moment from "moment";
import { Skill, nameSkillComparator, repoCountComparator } from "./skillsUtils";

describe("`skillsUtils`", () => {
  describe("comparators", () => {
    let skillA: Skill;
    let skillB: Skill;

    const emptySkill: Skill = {
      name: "",
      displayName: "",
      iconClass: "",
      repoCount: 0,
      lastCommitTime: moment(),
      timeSinceCommit: ""
    };

    beforeEach(() => {
      skillA = cloneDeep(emptySkill);
      skillB = cloneDeep(emptySkill);
    });

    describe("nameSkillComparator", () => {
      it("should return 0 when both skills have equal name", () => {
        skillA.name = "a";
        skillB.name = "a";

        expect(nameSkillComparator(skillA, skillB)).toBe(0);
      });

      it("should return -1 when A's name alphabetizes first", () => {
        skillA.name = "a";
        skillB.name = "b";

        expect(nameSkillComparator(skillA, skillB)).toBe(-1);
      });

      it("should return 1 when B's name alphabetizes first", () => {
        skillA.name = "b";
        skillB.name = "a";

        expect(nameSkillComparator(skillA, skillB)).toBe(1);
      });
    });

    describe("repoCountSkillComparator", () => {
      it("should return 0 when both skills have equal repoCount", () => {
        skillA.repoCount = 5;
        skillB.repoCount = 5;

        expect(repoCountComparator(skillA, skillB)).toBe(0);
      });

      it("should return positive number when A's repoCount is lower", () => {
        skillA.repoCount = 11;
        skillB.repoCount = 20;

        expect(repoCountComparator(skillA, skillB)).toBeGreaterThan(0);
      });

      it("should return negative number when B's repoCount is lower", () => {
        skillA.repoCount = 22;
        skillB.repoCount = 1;

        expect(repoCountComparator(skillA, skillB)).toBeLessThan(0);
      });
    });
  });
});
