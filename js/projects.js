
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
  const TAGS_CLASS = 'tags-span';
  const TYPE_CLASS = 'type-span';
  const GITHUB_LINK_CLASS = 'github-link';
  const LIVE_PAGE_LINK_CLASS = 'live-page-link';

  // VARIABLES

  // FUNCTIONS

  function addProjectsToDom(projects) {
    for (var project of projects) {
      generateProjectElements(project);
    }
  }

  function generateProjectElements(project) {
    const projectCard = generateProjectCard(project);

    projectCard.appendChild(generateNameHeading(project));
    projectCard.appendChild(generateTypeSpan(project));
    projectCard.appendChild(generateTime(project));
    projectCard.appendChild(generateImage(project));
    projectCard.appendChild(generateTagSpan(project));
    projectCard.appendChild(generateDescriptionParagraph(project));
    projectCard.appendChild(generateGitHubLink(project));
    if (project.livePageUrl) {
      projectCard.appendChild(generateLivePageLink(project));
    }

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
    var result = num.toString();

    if (num < 10 ) {
      result = '0' + result;
    }

    return result;
  };

  function generateImage(project) {
    const altText = `Project screenshot for ${project.name}`;
    const image = document.createElement('img');
    image.src = project.imageUrl;
    image.alt = altText;

    return image;
  }

  function generateTagSpan(project) {
    const tagSpan = document.createElement('span');
    const spanContents = project.tags.join(', ');
    tagSpan.innerText = spanContents;
    tagSpan.classList.add(TAGS_CLASS);

    return tagSpan;
  }

  function generateDescriptionParagraph(project) {
    const projectParagraph = document.createElement('p');
    projectParagraph.innerText = project.description;

    return projectParagraph;
  }

  function generateGitHubLink(project) {
    const url = project.gitHubUrl;
    const text = GITHUB_LINK_TEXT;
    const className = GITHUB_LINK_CLASS;

    return generateAnchor(url, text, className);
  }

  function generateLivePageLink(project) {
    const url = project.livePageUrl;
    const text = LIVE_PAGE_LINK_TEXT;
    const className = LIVE_PAGE_LINK_CLASS;

    return generateAnchor(url, text, className);
  }

  function generateAnchor(url, urlText, className) {
    const anchor = document.createElement('a');

    anchor.href = url;
    anchor.innerText = urlText;
    anchor.classList.add(className);

    return anchor;
  }

  // MAIN

  addProjectsToDom(PROJECTS);

}())
