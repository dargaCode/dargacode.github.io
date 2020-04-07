/* eslint-disable */

import { SKILLS, SKILL_TYPE_ORDER } from "./skillData";

// match up the text values from the sorting dropdown with a sort helper function
const COMPARATORS = {
  "skill name": sortByName,
  "skill type": sortByType,
  "project count": sortByProjectCount
};

const sortSelect = document.querySelector(".skills select");

// VARIABLES

// EVENTS

sortSelect.addEventListener("change", updateSkills);

// FUNCTIONS

function updateSkills() {
  const sortedSkills = getSortedSkills();
}

function getSortedSkills() {
  const sortType = sortSelect.value.toLowerCase();
  const comparator = COMPARATORS[sortType];
  const processedSkills = processSkillAttributes(SKILLS);

  return processedSkills.sort(comparator);
}

// COMPARATORS

function sortByName(a, b) {
  if (a.nameLower < b.nameLower) {
    return -1;
  }
  if (b.nameLower < a.nameLower) {
    return 1;
  }
  return 0;
}

function sortByType(a, b) {
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

function sortByProjectCount(a, b) {
  return b.projectCount - a.projectCount;
}

// HELPERS

// add more attributes to the skills objects to help with sorting. More efficient to do it once instead of inside the comparators.
function processSkillAttributes(skillsArray) {
  return skillsArray.map(function(skill) {
    // add numerical value for sorting by type (types aren't in alphabetical order, but importance)
    skill.typeOrder = SKILL_TYPE_ORDER.indexOf(skill.type);
    // make lowercase skills like jQuery sort properly
    skill.nameLower = skill.name.toLowerCase();

    return skill;
  });
}
