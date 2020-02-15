/* eslint-disable */

import { SKILLS, SKILL_TYPE_ORDER } from "./constants.js";

// anonymous module
(function skills() {
  // CONSTANTS

  // match up the text values from the sorting dropdown with a sort helper function
  const COMPARATORS = {
    "skill name": sortByName,
    "skill type": sortByType,
    "project count": sortByProjectCount
  };

  const sortSelect = document.querySelector(".skills select");
  const skillParent = document.querySelector(".skills .skill-list");

  // VARIABLES

  // EVENTS

  sortSelect.addEventListener("change", updateSkills);

  // FUNCTIONS

  function updateSkills() {
    const sortedSkills = getSortedSkills();

    clearSkillsFromDom();
    addSkillsToDom(sortedSkills);
  }

  function getSortedSkills() {
    const sortType = sortSelect.value.toLowerCase();
    const comparator = COMPARATORS[sortType];
    const processedSkills = processSkillAttributes(SKILLS);

    return processedSkills.sort(comparator);
  }

  function clearSkillsFromDom() {
    while (skillParent.firstChild) {
      skillParent.removeChild(skillParent.firstChild);
    }
  }

  function addSkillsToDom(skillsArray) {
    for (const skill of skillsArray) {
      generateSkillElements(skill);
    }
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

  function generateSkillElements(skill) {
    const skillLink = generateSkillLink(skill);
    const skillCard = generateSkillArticle(skill);

    skillCard.appendChild(generateSkillType(skill));
    skillCard.appendChild(generateSkillIcon(skill));
    skillCard.appendChild(generateSkillName(skill));
    skillCard.appendChild(generateSkillCount(skill));

    skillLink.appendChild(skillCard);

    skillParent.appendChild(skillLink);
  }

  function pluralizeProjects(skillObject) {
    const { projectCount } = skillObject;
    return projectCount === 1 ? "Project" : "Projects";
  }

  function generateSkillLink(skillObject) {
    const anchor = document.createElement("a");

    anchor.href = skillObject.gitHubSearchUrl;

    return anchor;
  }

  function generateSkillArticle() {
    const skillCardArticle = document.createElement("article");

    skillCardArticle.classList.add("skill-card");

    return skillCardArticle;
  }

  function generateSkillType(skillObject) {
    const skillTypeParagraph = document.createElement("p");
    skillTypeParagraph.classList.add("skill-type");
    skillTypeParagraph.innerText = skillObject.type;
    return skillTypeParagraph;
  }

  function generateSkillIcon(skillObject) {
    const skillIcon = document.createElement("i");
    skillIcon.classList.add(skillObject.iconClass);
    return skillIcon;
  }

  function generateSkillName(skillObject) {
    const skillNameHeading = document.createElement("h3");
    skillNameHeading.classList.add("skill-name");
    skillNameHeading.innerText = skillObject.name;
    return skillNameHeading;
  }

  function generateSkillCount(skillObject) {
    const pluralProject = pluralizeProjects(skillObject);
    const skillCountParagraph = document.createElement("p");
    skillCountParagraph.classList.add("skill-project-count");
    skillCountParagraph.innerText = `${skillObject.projectCount} ${pluralProject}`;
    return skillCountParagraph;
  }

  // MAIN

  updateSkills();
})();
