
// anonymous module
(function() {

  // CONSTANTS

  const MONTHS = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
  ];

  // crappy fake Require for now
  const {PROJECTS} = CONSTANTS;

  const projectParent = document.querySelector('.projects .project-list');

  const GITHUB_LINK_TEXT = 'GitHub Repository';
  const LIVE_PAGE_LINK_TEXT = 'Live Webpage';
  const HEADING_LINK_CLASS = 'header-link';
  const TAGS_CLASS = 'tags-span';
  const TYPE_CLASS = 'type-span';
  const GITHUB_LINK_CLASS = 'project-link';
  const GITHUB_ICON_CLASS = 'fa-github';
  const LIVE_PAGE_LINK_CLASS = 'project-link';
  const LIVE_PAGE_ICON_CLASS = 'fa-globe';

  // VARIABLES

  // FUNCTIONS

  function createProjects(projects) {
    const processedProjects = processProjectAttributes(projects);

    addProjectsToDom(processedProjects);
  }

  function addProjectsToDom(projects) {
    for (const project of projects) {
      generateProjectElements(project);
    }
  }

  function generateProjectElements(project) {
    const projectCard = generateProjectCard(project);

    projectCard.appendChild(generateLinkedHeading(project));
    projectCard.appendChild(generateTypeSpan(project));
    projectCard.appendChild(generateTime(project));
    projectCard.appendChild(generateLinkedScreenshot(project));
    projectCard.appendChild(generateTagSpan(project));
    projectCard.appendChild(generateDescriptionParagraph(project));
    projectCard.appendChild(generateGitHubLink(project));
    if (project.livePageUrl) {
      projectCard.appendChild(generateLivePageLink(project));
    }

    projectParent.appendChild(projectCard);
  }

  // HELPERS

  // add more attributes to the skills objects. More efficient than doing it inside of loop.
  function processProjectAttributes(projects) {
    return projects.map(function(project) {
      project.mainLinkUrl = getMainLinkUrl(project);

      return project;
    });
  }

  // Webpage if one exists, GitHub if not. This link will be used by the heading and the screenshot.
  function getMainLinkUrl(project) {
    let mainLinkUrl = project.gitHubUrl;

    if (project.livePageUrl) {
      mainLinkUrl = project.livePageUrl;
    }

    return mainLinkUrl;
  }

  function generateProjectCard() {
    const projectArticle = document.createElement('article');

    projectArticle.classList.add('project-card');

    return projectArticle;
  }

  function generateLinkedHeading(project) {
    const headingUrl = project.mainLinkUrl;
    // need class name but no link text
    const headingLink = generateAnchor(headingUrl, null, HEADING_LINK_CLASS);
    const nameHeading = generateNameHeading(project);

    headingLink.appendChild(nameHeading);

    return headingLink;
  }

  function generateAnchor(url, urlText, className) {
    const anchor = document.createElement('a');

    anchor.href = url;
    if (urlText) {
      anchor.innerText = urlText;
    }
    if (className) {
      anchor.classList.add(className);
    }

    return anchor;
  }

  function generateNameHeading(project) {
    const projectHeading = document.createElement('h3');

    projectHeading.innerText = project.name;

    return projectHeading;
  }

  function generateTypeSpan(project) {
    const typeSpan = document.createElement('span');

    typeSpan.innerText = project.type;
    typeSpan.classList.add(TYPE_CLASS);

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
      result = `0${result}`;
    }

    return result;
  }

  function generateLinkedScreenshot(project) {
    const {mainLinkUrl} = project;
    const screenshotLink = generateAnchor(mainLinkUrl);
    const screenshot = generateScreenshot(project);

    screenshotLink.appendChild(screenshot);

    return screenshotLink;
  }

  function generateScreenshot(project) {
    const altText = `Project screenshot for ${project.name}`;
    const screenshot = document.createElement('img');

    screenshot.src = project.imageUrl;
    screenshot.alt = altText;

    return screenshot;
  }

  function generateTagSpan(project) {
    const tagSpan = document.createElement('span');
    tagSpan.innerText = project.tags.join(', ');
    tagSpan.classList.add(TAGS_CLASS);

    return tagSpan;
  }

  function generateDescriptionParagraph(project) {
    const projectParagraph = document.createElement('p');

    projectParagraph.innerText = project.description;

    return projectParagraph;
  }

  function generateGitHubLink(project) {
    const anchor = generateAnchor(project.gitHubUrl, GITHUB_LINK_TEXT, GITHUB_LINK_CLASS);
    const icon = generateFontAwesomeIcon(GITHUB_ICON_CLASS);

    anchor.appendChild(icon);

    return anchor;
  }

  function generateFontAwesomeIcon(className) {
    const icon = document.createElement('i');

    icon.classList.add('fa');
    icon.classList.add(className);

    return icon;
  }

  function generateLivePageLink(project) {
    const anchor = generateAnchor(project.livePageUrl, LIVE_PAGE_LINK_TEXT, LIVE_PAGE_LINK_CLASS);
    const icon = generateFontAwesomeIcon(LIVE_PAGE_ICON_CLASS);

    anchor.appendChild(icon);

    return anchor;
  }

  // MAIN

  createProjects(PROJECTS);

}());
