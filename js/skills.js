
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
    const orderA = CATEGORY_ORDER.indexOf(a.type);
    const orderB = CATEGORY_ORDER.indexOf(b.type);

    // make lowercase skills like jQuery sort properly
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    let result;

    switch(true) {
      // // sort by category order first
      case (orderA < orderB): {
        result = -1;
        break;
      }
      case (orderB < orderA): {
        result = 1;
        break;
      }
      // same category, sort by descending project count
      case (a.projectCount > b.projectCount): {
        result = -1;
        break;
      }
      case (b.projectCount > a.projectCount): {
        result = 1;
        break;
      }
      // same project count, sort by skill name
      case (nameA < nameB): {
        result = -1;
        break;
      }
      case (nameB < nameA): {
        result = 1;
        break;
      }
      // should not happen
      default: {
        console.log('Duplicate Skill!');
        result = 0;
      }
    }

    return result;
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
