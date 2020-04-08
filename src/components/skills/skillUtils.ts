import { SKILLS } from "./skillData";

// match up the text values from the sorting dropdown with a sort helper function
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

// COMPARATORS

function nameComparator(a, b) {
  if (a.nameLower < b.nameLower) {
    return -1;
  }
  if (b.nameLower < a.nameLower) {
    return 1;
  }
  return 0;
}

function typeComparator(a, b) {
  let result;

  switch (true) {
    // // sort by category order first
    case a.typeOrder < b.typeOrder: {
      result = -1;
      break;
    }
    case b.typeOrder < a.typeOrder: {
      result = 1;
      break;
    }
    // same category, sort by descending project count
    case a.projectCount > b.projectCount: {
      result = -1;
      break;
    }
    case b.projectCount > a.projectCount: {
      result = 1;
      break;
    }
    // same project count, sort by skill name
    case a.nameLower < b.nameLower: {
      result = -1;
      break;
    }
    case b.nameLower < a.nameLower: {
      result = 1;
      break;
    }
    // should not happen
    default: {
      console.log("Duplicate Skill!");
      result = 0;
    }
  }

  return result;
}

function projectCountComparator(a, b) {
  return b.projectCount - a.projectCount;
}
