
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
      'type': 'Library'
    },
    {
      'name': 'C',
      'projectCount': 18,
      'iconClass': 'devicon-c-plain',
      'type': 'Language'
    },
    {
      'name': 'C#',
      'projectCount': 5,
      'iconClass': 'devicon-csharp-plain',
      'type': 'Language'
    },
    {
      'name': 'CSS',
      'projectCount': 21,
      'iconClass': 'devicon-css3-plain',
      'type': 'Language'
    },
    {
      'name': 'EJS',
      'projectCount': 6,
      'iconClass': 'icon-ejs-logo',
      'type': 'Language'
    },
    {
      'name': 'Express.js',
      'projectCount': 6,
      'iconClass': 'icon-express-logo',
      'type': 'Framework'
    },
    {
      'name': 'Git',
      'projectCount': 57,
      'iconClass': 'devicon-git-plain',
      'type': 'Tool'
    },
    {
      'name': 'Gulp',
      'projectCount': 1,
      'iconClass': 'devicon-gulp-plain',
      'type': 'Tool'
    },
    {
      'name': 'Heroku',
      'projectCount': 6,
      'iconClass': 'devicon-heroku-plain',
      'type': 'Tool'
    },
    {
      'name': 'HTML',
      'projectCount': 22,
      'iconClass': 'devicon-html5-plain',
      'type': 'Language'
    },
    {
      'name': 'JavaScript',
      'projectCount': 24,
      'iconClass': 'devicon-javascript-plain',
      'type': 'Language'
    },
    {
      'name': 'jQuery',
      'projectCount': 1,
      'iconClass': 'devicon-jquery-plain',
      'type': 'Library'
    },
    {
      'name': 'Linux Shell',
      'projectCount': 53,
      'iconClass': 'devicon-linux-plain',
      'type': 'Tool'
    },
    {
      'name': 'MongoDB',
      'projectCount': 3,
      'iconClass': 'devicon-mongodb-plain',
      'type': 'Database'
    },
    {
      'name': 'MySQL',
      'projectCount': 1,
      'iconClass': 'devicon-mysql-plain',
      'type': 'Database'
    },
    {
      'name': 'Node.js',
      'projectCount': 8,
      'iconClass': 'devicon-nodejs-plain',
      'type': 'Environment'
    },
  ];

  const PROJECTS = [
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
      'name': 'This Portfolio Website',
      'type': 'Front-End',
      'tags': ['JavaScript', 'CSS', 'HTML',],
      'description': 'This work-in-progress website is intended to showcase my knowledge of JavaScript DOM manipulation, CSS, and Semantic HTML. Future iterations will include responsiveness, more interactivity, and mobile support.',
      'date': new Date('Aug 28 2016'),
      'imageUrl': './img/project-thumbnails/portfolio.jpg',
      'gitHubUrl': 'https://github.com/dargaCode/dargacode.github.io',
      'livePageUrl': '',
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
      'description': 'Originally written in Khan Academy, this old project is a personal favorite. I expanded the simple assignment ("Create an array of book objects") to include a drag and drop interface using a hierarchy of nine classes.',
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
