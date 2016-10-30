
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
      'gitHubSearchUrl': 'https://github.com/dargaCode?tab=repositories&q=bootstrap',
    },
    {
      'name': 'C',
      'projectCount': 18,
      'iconClass': 'devicon-c-plain',
      'type': 'Language',
      'gitHubSearchUrl': 'https://github.com/dargaCode?tab=repositories&language=c',
    },
    {
      'name': 'C#',
      'projectCount': 3,
      'iconClass': 'devicon-csharp-plain',
      'type': 'Language',
      'gitHubSearchUrl': 'https://github.com/dargaCode/dargacode.github.io/blob/master/skills-note.md',
    },
    {
      'name': 'CSS',
      'projectCount': 21,
      'iconClass': 'devicon-css3-plain',
      'type': 'Language',
      'gitHubSearchUrl': 'https://github.com/dargaCode?tab=repositories&q=css',
    },
    {
      'name': 'Express.js',
      'projectCount': 6,
      'iconClass': 'icon-express-logo',
      'type': 'Framework',
      'gitHubSearchUrl': 'https://github.com/dargaCode?tab=repositories&q=express',
    },
    {
      'name': 'Git',
      'projectCount': 58,
      'iconClass': 'devicon-git-plain',
      'type': 'Tool',
      'gitHubSearchUrl': 'https://github.com/dargaCode?tab=repositories',
    },
    {
      'name': 'HTML',
      'projectCount': 22,
      'iconClass': 'devicon-html5-plain',
      'type': 'Language',
      'gitHubSearchUrl': 'https://github.com/dargaCode?tab=repositories&q=html',
    },
    {
      'name': 'JavaScript',
      'projectCount': 24,
      'iconClass': 'devicon-javascript-plain',
      'type': 'Language',
      'gitHubSearchUrl': 'https://github.com/dargaCode?tab=repositories&q=js',
    },
    {
      'name': 'jQuery',
      'projectCount': 1,
      'iconClass': 'devicon-jquery-plain',
      'type': 'Library',
      'gitHubSearchUrl': 'https://github.com/dargaCode?tab=repositories&q=jquery',
    },
    {
      'name': 'MongoDB',
      'projectCount': 3,
      'iconClass': 'devicon-mongodb-plain',
      'type': 'Database',
      'gitHubSearchUrl': 'https://github.com/dargaCode?tab=repositories&q=mongodb',
    },
    {
      'name': 'MySQL',
      'projectCount': 1,
      'iconClass': 'devicon-mysql-plain',
      'type': 'Database',
      'gitHubSearchUrl': 'https://github.com/dargaCode/dargacode.github.io/blob/master/skills-note.md',
    },
    {
      'name': 'Node.js',
      'projectCount': 8,
      'iconClass': 'devicon-nodejs-plain',
      'type': 'Environment',
      'gitHubSearchUrl': 'https://github.com/dargaCode?tab=repositories&q=node',
    },
  ];

  const PROJECTS = [
    {
      'name': 'This Portfolio Website',
      'type': 'Front-End',
      'tags': ['JavaScript', 'CSS', 'HTML',],
      'description': 'This work-in-progress website is intended to showcase my knowledge of JavaScript DOM manipulation, CSS, and Semantic HTML. Future iterations will include responsiveness, more interactivity, and mobile support.',
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
    {
      'name': 'Drag and Drop Book Shelf',
      'type': 'Front-End',
      'tags': ['JavaScript', 'Canvas', 'Processing.js', 'OOP',],
      'description': 'Originally written on Khan Academy, this old project is a personal favorite. I expanded the simple assignment ("Create an array of book objects") to include a drag and drop interface using a hierarchy of nine classes.',
      'date': new Date('Jul 31 2015'),
      'imageUrl': './img/project-thumbnails/bookshelf.jpg',
      'gitHubUrl': 'https://github.com/dargaCode/KhanBookShelf',
      'livePageUrl': 'http://dargacode.github.io/KhanBookShelf',
    },
  ];

  // 'revealing' module
  return {
    SKILL_TYPE_ORDER: SKILL_TYPE_ORDER,
    SKILLS: SKILLS,
    PROJECTS: PROJECTS,
  }

}());
