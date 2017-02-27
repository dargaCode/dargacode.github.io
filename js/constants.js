
const CONSTANTS = (function() {

  const SKILL_TYPE_ORDER = [
    'Language',
    'Environment',
    'Framework',
    'Library',
    'Database',
    'Tool'
  ];

  const SKILLS = [
    {
      'name': 'Bootstrap',
      'projectCount': 3,
      'iconClass': 'devicon-bootstrap-plain',
      'type': 'Library',
      'gitHubSearchUrl': 'https://github.com/dargaCode?tab=repositories&q=topic%3Abootstrap',
    },
    {
      'name': 'C',
      'projectCount': 18,
      'iconClass': 'devicon-c-plain',
      'type': 'Language',
      'gitHubSearchUrl': 'https://github.com/dargaCode?tab=repositories&q=topic%3Ac',
    },
    {
      'name': 'C#',
      'projectCount': 3,
      'iconClass': 'devicon-csharp-plain',
      'type': 'Language',
      'gitHubSearchUrl': 'https://github.com/dargaCode/dargacode.github.io/blob/master/skills-note.md#c',
    },
    {
      'name': 'CSS',
      'projectCount': 33,
      'iconClass': 'devicon-css3-plain',
      'type': 'Language',
      'gitHubSearchUrl': 'https://github.com/dargaCode?tab=repositories&q=topic%3Acss',
    },
    {
      'name': 'Express.js',
      'projectCount': 6,
      'iconClass': 'icon-express-logo',
      'type': 'Framework',
      'gitHubSearchUrl': 'https://github.com/dargaCode?tab=repositories&q=topic%3Aexpressjs',
    },
    {
      'name': 'Git',
      'projectCount': 62,
      'iconClass': 'devicon-git-plain',
      'type': 'Tool',
      'gitHubSearchUrl': 'https://github.com/dargaCode?tab=repositories',
    },
    {
      'name': 'HTML',
      'projectCount': 34,
      'iconClass': 'devicon-html5-plain',
      'type': 'Language',
      'gitHubSearchUrl': 'https://github.com/dargaCode?tab=repositories&q=topic%3Ahtml',
    },
    {
      'name': 'JavaScript',
      'projectCount': 27,
      'iconClass': 'devicon-javascript-plain',
      'type': 'Language',
      'gitHubSearchUrl': 'https://github.com/dargaCode?tab=repositories&q=topic%3Ajavascript',
    },
    {
      'name': 'jQuery',
      'projectCount': 1,
      'iconClass': 'devicon-jquery-plain',
      'type': 'Library',
      'gitHubSearchUrl': 'https://github.com/dargaCode?tab=repositories&q=topic%3Ajquery',
    },
    {
      'name': 'MongoDB',
      'projectCount': 3,
      'iconClass': 'devicon-mongodb-plain',
      'type': 'Database',
      'gitHubSearchUrl': 'https://github.com/dargaCode?tab=repositories&q=topic%3Amongodb',
    },
    {
      'name': 'MySQL',
      'projectCount': 3,
      'iconClass': 'devicon-mysql-plain',
      'type': 'Database',
      'gitHubSearchUrl': 'https://github.com/dargaCode/dargacode.github.io/blob/master/skills-note.md#mysql',
    },
    {
      'name': 'Node.js',
      'projectCount': 9,
      'iconClass': 'devicon-nodejs-plain',
      'type': 'Environment',
      'gitHubSearchUrl': 'https://github.com/dargaCode?tab=repositories&q=topic%3Anodejs',
    },
  ];

  const PROJECTS = [
    {
      'name': 'Darkest Timeline Me',
      'type': 'Front-End',
      'tags': ['JavaScript', 'CSS', 'HTML', 'Canvas', 'OOP',],
      'description': 'Let users import a headshot to the canvas, position and scale it to align with an overlay image, and download the result as a new file. This project focuses on Object-Oriented design and custom event handling.',
      'date': new Date('Jan 21 2016'),
      'imageUrl': './img/project-thumbnails/darkest-timeline.jpg',
      'gitHubUrl': 'https://github.com/dargaCode/DarkestTimelineMe',
      'livePageUrl': 'http://darkesttimeline.me',
    },
    {
      'name': 'This Portfolio Website',
      'type': 'Front-End',
      'tags': ['JavaScript', 'CSS', 'HTML',],
      'description': 'This work-in-progress website is intended to showcase my knowledge of JavaScript DOM manipulation, CSS, and Semantic HTML. Future iterations will include additional JS features, optimized performance, and SEO.',
      'date': new Date('Oct 16 2016'),
      'imageUrl': './img/project-thumbnails/portfolio.jpg',
      'gitHubUrl': 'https://github.com/dargaCode/dargacode.github.io',
      'livePageUrl': '',
    },
    {
      'name': 'Apartment Description Highlights',
      'type': 'Back-End',
      'tags': ['JavaScript', 'Node.js',],
      'description': 'Given a long description of an apartment and a query string, generates a highlight snippet made from only relevant phrases. Uses an array of dictionary objects to map categories to relevant keywords.',
      'date': new Date('Sep 16 2016'),
      'imageUrl': './img/project-thumbnails/apartment.jpg',
      'gitHubUrl': 'https://github.com/dargaCode/ApartmentDescriptionHighlights',
      'livePageUrl': null,
    },
    {
      'name': 'RESTful Blog',
      'type': 'Back-End',
      'tags': ['JavaScript', 'Node.js', 'Express', 'EJS', 'MongoDB',],
      'description': 'Node/Express CRUD app using all 7 RESTful routes. HTML views are created server-side using templating, posts are added and removed from a MongoDB server, and sanitized HTML is used to render blog posts.',
      'date': new Date('May 23 2016'),
      'imageUrl': './img/project-thumbnails/blog.jpg',
      'gitHubUrl': 'https://github.com/dargaCode/UdemyRESTfulBlog',
      'livePageUrl': 'https://darga-restful-blog.herokuapp.com/blogs',
    },
    {
      'name': 'Color Match Game',
      'type': 'Front-End',
      'tags': ['JavaScript', 'CSS', 'HTML', 'LocalStorage',],
      'description': 'An early attempt at JavaScript DOM manipulation, and my first use of LocalStorage to save settings. The biggest challenge was organizing code for logic, events, and UI elements while still remaining readable.',
      'date': new Date('April 6 2016'),
      'imageUrl': './img/project-thumbnails/color-game.jpg',
      'gitHubUrl': 'https://github.com/dargaCode/UdemyColorMatchGame',
      'livePageUrl': 'http://dargacode.github.io/UdemyColorMatchGame/',
    },
    {
      'name': 'Animated Insertion Sort',
      'type': 'Command Line',
      'tags': ['C', 'Sorting', 'Command Line'],
      'description': 'I made three sorting programs in C which animated in the console. They were interesting exercises in generating random numbers, adding delays, rendering formatted text, and accepting program arguments.',
      'date': new Date('Oct 1 2015'),
      'imageUrl': './img/project-thumbnails/sort.jpg',
      'gitHubUrl': 'https://github.com/dargaCode/AnimatedInsertionSort',
      'livePageUrl': null,
    },
  ];

  // 'revealing' module
  return {
    SKILL_TYPE_ORDER: SKILL_TYPE_ORDER,
    SKILLS: SKILLS,
    PROJECTS: PROJECTS,
  }

}());
