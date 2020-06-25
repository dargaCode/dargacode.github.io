import cloneDeep from "clone-deep";
import {
  RawSkill,
  Skill,
  processRawSkills,
  nameSkillComparator,
  repoCountComparator
} from "./skillsUtils";

describe("`skillsUtils`", () => {
  const rawSkills: RawSkill[] = [
    {
      name: "",
      displayName: "A",
      repoCount: 2,
      iconClass: ""
    },
    {
      name: "",
      displayName: "b",
      repoCount: 1,
      iconClass: ""
    }
  ];

  describe("processRawSkills", () => {
    it("should add the `nameLower` property", () => {
      const skills = processRawSkills(rawSkills);

      expect(skills[0].nameLower).toBe("a");
    });
  });

  describe("comparators", () => {
    let skillA: Skill;
    let skillB: Skill;

    const emptySkill: Skill = {
      name: "",
      displayName: "",
      iconClass: "",
      repoCount: 0,
      nameLower: ""
    };

    beforeEach(() => {
      skillA = cloneDeep(emptySkill);
      skillB = cloneDeep(emptySkill);
    });

    describe("nameSkillComparator", () => {
      it("should return 0 when both skills have equal nameLower", () => {
        skillA.nameLower = "a";
        skillB.nameLower = "a";

        expect(nameSkillComparator(skillA, skillB)).toBe(0);
      });

      it("should return -1 when A's nameLower alphabetizes first", () => {
        skillA.nameLower = "a";
        skillB.nameLower = "b";

        expect(nameSkillComparator(skillA, skillB)).toBe(-1);
      });

      it("should return 1 when B's nameLower alphabetizes first", () => {
        skillA.nameLower = "b";
        skillB.nameLower = "a";

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
