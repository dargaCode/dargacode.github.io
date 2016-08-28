
'use strict'; //enable 'let'

//anonymouse module
(function() {

  // CONSTANTS

  // crappy fake Require for now
  const CATEGORY_ORDER = CONSTANTS.CATEGORY_ORDER;
  const SKILLS = CONSTANTS.SKILLS;

  const skillParent = document.querySelector('.skills .skill-list');

  // VARIABLES


  // FUNCTIONS

  function getSortedSkills(sortHelper) {
    return SKILLS.sort(sortHelper);
  }

  function addSkillsToDom(skillsArray) {
    for (let skill of skillsArray) {
      generateSkillElements(skill);
    }
  }

  // HELPERS

  function sortByProjectNum(a, b) {
    return b.projectCount - a.projectCount;
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

  const sortedSkills = getSortedSkills(sortByType);

  addSkillsToDom(sortedSkills);

}())
