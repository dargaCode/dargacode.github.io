
'use strict'; //enable 'let'

//anonymouse module
(function() {

  // CONSTANTS

  const SORT_HELPERS = {
    'skill name': sortByName,
    'skill type': sortByType,
    'project count': sortByProjectCount,
  };

  // crappy fake Require for now
  const CATEGORY_ORDER = CONSTANTS.CATEGORY_ORDER;
  const SKILLS = CONSTANTS.SKILLS;

  const sortSelect = document.querySelector('.skills select');
  const skillParent = document.querySelector('.skills .skill-list');

  // VARIABLES

  // EVENTS

  sortSelect.addEventListener('change', updateSkills);

  // FUNCTIONS

  function updateSkills() {
    const sortType = sortSelect.value.toLowerCase();
    const sortHelper = SORT_HELPERS[sortType];
    const sortedSkills = getSortedSkills(sortHelper);

    clearSkillsFromDom();
    addSkillsToDom(sortedSkills);
  }

  function getSortedSkills(sortHelper) {
    return SKILLS.sort(sortHelper);
  }

  function clearSkillsFromDom() {
    while (skillParent.firstChild) {
      skillParent.removeChild(skillParent.firstChild);
    }
  }

  function addSkillsToDom(skillsArray) {
    for (let skill of skillsArray) {
      generateSkillElements(skill);
    }
  }

  // HELPERS

  function sortByName(a, b) {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    if (nameA < nameB) {
      return -1;
    }
    else if (nameB < nameA) {
      return 1;
    }
    else {
      return 0;
    }
  }

  function sortByType(a, b) {
    a.order = CATEGORY_ORDER.indexOf(a.type);
    b.order = CATEGORY_ORDER.indexOf(b.type);

    if (a.order < b.order) {
      return -1;
    }
    else if (b.order < a.order) {
      return 1;
    }
    /* same type, so sort by name instead (to preserve alphabetical order within types) */
    else {
      return b.projectCount - a.projectCount;

      if (a.name < b.name) {
        return -1;
      }
      else if (b.name < a.name) {
        return 1;
      }
      else {
        return 0;
      }
    }
  }

  function sortByProjectCount(a, b) {
    return b.projectCount - a.projectCount;
  }

  function generateSkillElements(skill) {
    const skillCard = generateSkillCard();

    skillCard.appendChild(generateSkillType(skill));
    skillCard.appendChild(generateSkillIcon(skill));
    skillCard.appendChild(generateSkillName(skill));
    skillCard.appendChild(generateSkillCount(skill));

    skillParent.appendChild(skillCard);
  }

  function pluralizeProjects(skillObject) {
    const projectCount = skillObject.projectCount;
    return projectCount === 1 ? 'Project' : 'Projects';
  }

  function generateSkillCard() {
    const skillCardArticle = document.createElement('article');
    skillCardArticle.classList.add('skill-card');
    return skillCardArticle;
  }

  function generateSkillType(skillObject) {
    const skillTypeParagraph = document.createElement('p');
    skillTypeParagraph.classList.add('skill-type');
    skillTypeParagraph.innerText = skillObject.type;
    return skillTypeParagraph;
  }

  function generateSkillIcon(skillObject) {
    const skillIcon = document.createElement('i');
    skillIcon.classList.add(skillObject.iconClass);
    return skillIcon;
  }

  function generateSkillName(skillObject) {
    const skillNameHeading = document.createElement('h3');
    skillNameHeading.classList.add('skill-name');
    skillNameHeading.innerText = skillObject.name;
    return skillNameHeading;
  }

  function generateSkillCount(skillObject) {
    const pluralProject = pluralizeProjects(skillObject);
    const skillCountParagraph = document.createElement('p');
    skillCountParagraph.classList.add('skill-project-count');
    skillCountParagraph.innerText = `${skillObject.projectCount} ${pluralProject}`;
    return skillCountParagraph;
  }

  // MAIN

  updateSkills();

}())
