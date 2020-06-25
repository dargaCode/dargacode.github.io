import cloneDeep from "clone-deep";
import {
  RawSkill,
  Skill,
  processRawSkills,
  nameSkillComparator,
  projectsSkillComparator
} from "./skillsUtils";

describe("`skillsUtils`", () => {
  const rawSkills: RawSkill[] = [
    {
      name: "",
      displayName: "A",
      projectCount: 2,
      iconClass: ""
    },
    {
      name: "",
      displayName: "b",
      projectCount: 1,
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
      projectCount: 0,
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

    describe("projectCountSkillComparator", () => {
      it("should return 0 when both skills have equal projectCount", () => {
        skillA.projectCount = 5;
        skillB.projectCount = 5;

        expect(projectsSkillComparator(skillA, skillB)).toBe(0);
      });

      it("should return positive number when A's projectCount is lower", () => {
        skillA.projectCount = 11;
        skillB.projectCount = 20;

        expect(projectsSkillComparator(skillA, skillB)).toBeGreaterThan(0);
      });

      it("should return negative number when B's projectCount is lower", () => {
        skillA.projectCount = 22;
        skillB.projectCount = 1;

        expect(projectsSkillComparator(skillA, skillB)).toBeLessThan(0);
      });
    });
  });
});
