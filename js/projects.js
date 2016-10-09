
'use strict'; //enable 'let'

//anonymous module
(function() {

  // CONSTANTS

  const MONTHS = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
  ];

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

    projectCard.appendChild(generateNameHeading(project));
    projectCard.appendChild(generateTypeSpan(project));
    projectCard.appendChild(generateTime(project));
    projectCard.appendChild(generateImage(project));
    projectCard.appendChild(generateDescriptionParagraph(project));
    projectCard.appendChild(generateProjectLinksUl(project));

    projectParent.appendChild(projectCard);
  }


  // HELPERS

  function generateProjectCard(project) {
    const projectArticle = document.createElement('article');
    projectArticle.classList.add('project-card');

    return projectArticle;
  }

  function generateNameHeading(project) {
    const projectHeading = document.createElement('h3');
    projectHeading.innerText = project.name;

    return projectHeading;
  }

  function generateTypeSpan(project) {
    const typeSpan = document.createElement('span');
    typeSpan.innerText = project.type;

    return typeSpan;
  }

  function generateTime(project) {
    const time = document.createElement('time');
    const year = project.date.getFullYear();
    const monthNum = project.date.getMonth();
    const month = MONTHS[monthNum];

    time.dateTime = formatDateTimeString(project.date);
    time.innerText = ` - ${month} ${year}`;

    return time;
  }

  function formatDateTimeString(projectDate) {
    const year = projectDate.getFullYear();
    // getMonth is zero-indexed, but getDate is not
    const monthNum = projectDate.getMonth() + 1;
    const dateNum = projectDate.getDate();

    const month = getTwoDigitNumberString(monthNum);
    const date = getTwoDigitNumberString(dateNum);

    return `${year}-${month}-${date}`;
  }

  function getTwoDigitNumberString(num) {
    let result = num.toString();

    if (num < 10 ) {
      result = '0' + result;
    }

    return result;
  };

  function generateImage(project) {
    const image = document.createElement('img');
    image.src = project.imageUrl;

    return image;
  }

  function generateDescriptionParagraph(project) {
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
