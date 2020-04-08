import { SKILLS, SKILL_TYPE_ORDER, RawSkill, Skill } from "./skillData";

// match up the text values from the sorting dropdown with a sort comparator
const COMPARATORS = {
  "skill name": nameComparator,
  "skill type": typeComparator,
  "project count": projectCountComparator
};

function getSortedSkills() {
  const sortType = sortSelect.value.toLowerCase();
  const comparator = COMPARATORS[sortType];
  const processedSkills = processSkillAttributes(SKILLS);

  return processedSkills.sort(comparator);
}

// add more attributes to the skills objects to help with sorting.
// it's more efficient to do it once here instead of inside the comparators.
export function processRawSkills(skills: RawSkill[]): Skill[] {
  return skills.map(
    (skill: RawSkill): Skill => {
      return {
        ...skill,
        // allow skills to be sorted by type
        typeOrder: SKILL_TYPE_ORDER.indexOf(skill.type),
        // allow lowercase skills like jQuery to sort properly by name
        nameLower: skill.name.toLowerCase()
      };
    }
  );
}

// COMPARATORS

export function projectCountComparator(a: Skill, b: Skill): number {
  return b.projectCount - a.projectCount;
}

export function nameComparator(a: Skill, b: Skill): number {
  if (a.nameLower < b.nameLower) {
    return -1;
  }
  if (b.nameLower < a.nameLower) {
    return 1;
  }
  return 0;
}

export function typeComparator(a: Skill, b: Skill): number {
  switch (true) {
    // // sort by category order first
    case a.typeOrder < b.typeOrder: {
      return -1;
    }
    case b.typeOrder < a.typeOrder: {
      return 1;
    }
    // same category, sort by descending project count second
    case a.projectCount > b.projectCount: {
      return -1;
    }
    case b.projectCount > a.projectCount: {
      return 1;
    }
    // same project count, sort by skill name third
    case a.nameLower < b.nameLower: {
      return -1;
    }
    case b.nameLower < a.nameLower: {
      return 1;
    }
    // everything matches (duplicate skill name)
    default: {
      return 0;
    }
  }
}
