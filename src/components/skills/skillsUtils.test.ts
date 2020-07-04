import cloneDeep from "clone-deep";
import moment from "moment";
import {
  Skill,
  EMPTY_SKILL,
  nameSkillComparator,
  repoCountComparator
} from "./skillsUtils";

describe("`skillsUtils`", () => {
  describe("comparators", () => {
    let skillA: Skill;
    let skillB: Skill;

    beforeEach(() => {
      skillA = cloneDeep(EMPTY_SKILL);
      skillB = cloneDeep(EMPTY_SKILL);
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
