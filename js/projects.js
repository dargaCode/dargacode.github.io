
'use strict'; //enable 'let'

//anonymous module
(function() {

  // CONSTANTS

  // crappy fake Require for now
  const PROJECTS = CONSTANTS.PROJECTS;

  const projectParent = document.querySelector('.projects .project-list');

  const GITHUB_LINK_TEXT = 'GitHub Repository';
  const LIVE_PAGE_LINK_TEXT = 'Live Webpage';

  // VARIABLES

  // FUNCTIONS

  function addProjectsToDom(projects) {
    for (let project of projects) {
      generateProjectElements(project);
    }
  }

  function generateProjectElements(project) {
    const projectCard = generateProjectCard(project);

    projectCard.appendChild(generateProjectHeading(project));
    projectCard.appendChild(generateProjectDescription(project));
    projectCard.appendChild(generateProjectLinksUl(project));

    projectParent.appendChild(projectCard);
  }


  // HELPERS

  function generateProjectCard(project) {
    const projectArticle = document.createElement('article');
    projectArticle.classList.add('project-card');

    return projectArticle;
  }

  function generateProjectHeading(project) {
    const projectHeading = document.createElement('h3');
    projectHeading.innerText = project.name;

    return projectHeading;
  }

  function generateProjectDescription(project) {
    const projectParagraph = document.createElement('p');
    projectParagraph.innerText = project.description;

    return projectParagraph;
  }

  function generateProjectLinksUl(project) {
    const projectLinksUl = document.createElement('ul');

    const gitHubUrl = project.gitHubUrl;
    const livePageUrl = project.livePageUrl;

    projectLinksUl.appendChild(generateLinkLi(gitHubUrl, GITHUB_LINK_TEXT));

    if (livePageUrl) {
      projectLinksUl.appendChild(generateLinkLi(livePageUrl, LIVE_PAGE_LINK_TEXT));
    }

    return projectLinksUl;
  }

  function generateLinkLi(url, urlText) {
    const listItem = document.createElement('li');

    listItem.appendChild(generateAnchor(url, urlText));

    return listItem;
  }

  function generateAnchor(url, urlText) {
   const anchor = document.createElement('a');

    anchor.href = url;
    anchor.innerText = urlText;

    return anchor;
  }

  // MAIN

  addProjectsToDom(PROJECTS);

}())
