import cloneDeep from "clone-deep";
import {
  RawSkill,
  Skill,
  processRawSkills,
  nameSkillComparator,
  projectsSkillComparator,
  typeSkillComparator
} from "./skillsUtils";

describe("`skillsUtils`", () => {
  const rawSkills: RawSkill[] = [
    {
      name: "",
      displayName: "A",
      type: "Language",
      projectCount: 2,
      iconClass: ""
    },
    {
      name: "",
      displayName: "b",
      type: "Framework",
      projectCount: 1,
      iconClass: ""
    }
  ];

  describe("processRawSkills", () => {
    it("should add the `nameLower` property", () => {
      const skills = processRawSkills(rawSkills);

      expect(skills[0].nameLower).toBe("a");
    });

    it("should add the `typeOrder` property", () => {
      const skills = processRawSkills(rawSkills);

      expect(skills[1].typeOrder).toBe(2);
    });
  });

  describe("comparators", () => {
    let skillA: Skill;
    let skillB: Skill;

    const emptySkill: Skill = {
      name: "",
      displayName: "",
      iconClass: "",
      type: "",
      projectCount: 0,
      nameLower: "",
      typeOrder: 0
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

    describe("typeSkillComparator", () => {
      it("should sort by lowest typeOrder first", () => {
        skillA.typeOrder = 100;
        skillB.typeOrder = 99;

        expect(typeSkillComparator(skillA, skillB)).toBe(1);
      });

      it("should sort by highest projectCount next, if typeOrder is equal", () => {
        skillA.typeOrder = 3;
        skillB.typeOrder = 3;
        skillA.projectCount = 22;
        skillB.projectCount = 15;

        expect(typeSkillComparator(skillA, skillB)).toBe(-1);
      });

      it("should sort by nameLower next, if typeOrder and projectCount are equal", () => {
        skillA.typeOrder = 3;
        skillB.typeOrder = 3;
        skillA.projectCount = 22;
        skillB.projectCount = 22;
        skillA.nameLower = "dog";
        skillB.nameLower = "Cat";

        expect(typeSkillComparator(skillA, skillB)).toBe(1);
      });

      it("should return 0 when both skills have equal typeOrder", () => {
        skillA.typeOrder = 0;
        skillB.typeOrder = 0;

        expect(typeSkillComparator(skillA, skillB)).toBe(0);
      });

      it("should return -1 when A's typeOrder is lower", () => {
        skillA.typeOrder = 3;
        skillB.typeOrder = 7;

        expect(typeSkillComparator(skillA, skillB)).toBe(-1);
      });

      it("should return 1 when B's typeOrder is lower", () => {
        skillA.typeOrder = 11;
        skillB.typeOrder = 2;

        expect(typeSkillComparator(skillA, skillB)).toBe(1);
      });

      it("should return 0 when both skills have equal projectCount", () => {
        skillA.projectCount = 11;
        skillB.projectCount = 11;

        expect(typeSkillComparator(skillA, skillB)).toBe(0);
      });

      it("should return positive number when A's projectCount is lower", () => {
        skillA.projectCount = 3;
        skillB.projectCount = 30;

        expect(typeSkillComparator(skillA, skillB)).toBeGreaterThan(0);
      });

      it("should return negative number when B's projectCount is lower", () => {
        skillA.projectCount = 33;
        skillB.projectCount = 20;

        expect(typeSkillComparator(skillA, skillB)).toBeLessThan(0);
      });

      it("should return 0 when both skills have equal nameLower", () => {
        skillA.nameLower = "j";
        skillB.nameLower = "j";

        expect(typeSkillComparator(skillA, skillB)).toBe(0);
      });

      it("should return -1 when A's nameLower alphabetizes first", () => {
        skillA.nameLower = "b";
        skillB.nameLower = "t";

        expect(typeSkillComparator(skillA, skillB)).toBe(-1);
      });

      it("should return 1 when B's nameLower alphabetizes first", () => {
        skillA.nameLower = "z";
        skillB.nameLower = "g";

        expect(typeSkillComparator(skillA, skillB)).toBe(1);
      });
    });
  });
});
