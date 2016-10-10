
'use strict' //enable 'let'

const CONSTANTS = (function() {

  const CATEGORY_ORDER = [
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
      'description': 'Given a long apartment description and a search string, generate a highlight snippet of only relevant phrases. Uses an array of dictionary objects to map categories to relevant keywords.',
      'date': new Date('Sep 16 2016'),
      'imageUrl': 'http://67.media.tumblr.com/e122a5b50d80008868f4a858ae4aa35f/tumblr_inline_odmtppSQWK1tvc5hi_1280.png',
      'gitHubUrl': 'https://github.com/dargaCode/ApartmentDescriptionHighlights',
      'livePageUrl': null,
    },
    {
      'name': 'RESTful Blog',
      'type': 'Back-End',
      'tags': ['JavaScript', 'Node.js', 'Express', 'EJS', 'MongoDB',],
      'description': 'Node/Express CRUD app using all 7 RESTful routes. HTML views are created server-side using templating, posts are added and removed from a MongoDB server, and sanitized HTML is used to render blog posts.',
      'date': new Date('May 23 2016'),
      'imageUrl': 'https://camo.githubusercontent.com/2e72ec252324ce1c6f9b293a8ec2419b7b2a66d0/687474703a2f2f36362e6d656469612e74756d626c722e636f6d2f32343239306563363061353634376533643064633733666130616261626539612f74756d626c725f696e6c696e655f6f376e71353176363043317476633568695f313238302e706e67',
      'gitHubUrl': 'https://github.com/dargaCode/UdemyRESTfulBlog',
      'livePageUrl': 'https://darga-restful-blog.herokuapp.com/blogs',
    },
    {
      'name': 'This Portfolio Website',
      'type': 'Front-End',
      'tags': ['JavaScript', 'CSS', 'HTML',],
      'description': 'This work-in-progress website is intended to showcase my knowledge of JavaScript DOM manipulation, CSS, and Semantic HTML. Future iterations will include responsiveness, more interactivity, and mobile support.',
      'date': new Date('Aug 28 2016'),
      'imageUrl': 'http://66.media.tumblr.com/a967b8cdc38181b8bb289bdf52ace5f5/tumblr_inline_obu130r6WY1tvc5hi_1280.png',
      'gitHubUrl': 'https://github.com/dargaCode/dargacode.github.io',
      'livePageUrl': '',
    },
    {
      'name': 'Color Match Game',
      'type': 'Front-End',
      'tags': ['JavaScript', 'CSS', 'HTML', 'LocalStorage',],
      'description': 'An early attempt at JavaScript DOM manipulation, and my first use of LocalStorage to save settings. The biggest challenge was organizing code for logic, events, and UI elements while still remaining readable.',
      'date': new Date('April 6 2016'),
      'imageUrl': 'https://camo.githubusercontent.com/3abec81cdb15e51fb0f378bab84f9833873524a9/687474703a2f2f34312e6d656469612e74756d626c722e636f6d2f62383834613639626566643236303466323839336432343636613831626631612f74756d626c725f696e6c696e655f6f35386f63314d584970317476633568695f313238302e706e67',
      'gitHubUrl': 'https://github.com/dargaCode/UdemyColorMatchGame',
      'livePageUrl': 'http://dargacode.github.io/UdemyColorMatchGame/',
    },
    {
      'name': 'Animated Insertion Sort',
      'type': 'Command Line',
      'tags': ['C', 'Sorting', 'Command Line'],
      'description': 'I made three sorting programs in C which animated in the console. They were interesting exercises in generating random numbers, adding delays, rendering formatted text, and accepting program arguments.',
      'date': new Date('Oct 1 2015'),
      'imageUrl': 'https://camo.githubusercontent.com/9ab1c0ccbcb7796563da0827e84240db661edff6/687474703a2f2f692e696d6775722e636f6d2f48707468476b792e706e67',
      'gitHubUrl': 'https://github.com/dargaCode/AnimatedInsertionSort',
      'livePageUrl': null,
    },
    {
      'name': 'Drag and Drop Book Shelf',
      'type': 'Front-End',
      'tags': ['JavaScript', 'Canvas', 'Processing.js', 'OOP',],
      'description': 'Originally written in Khan Academy, this old project is a personal favorite. I expanded the simple assignment ("Create an array of book objects") to include a drag-and-drop interface using a hierarchy of nine classes.',
      'date': new Date('Jul 31 2015'),
      'imageUrl': 'https://camo.githubusercontent.com/c049398e2ec40c62ba600b7899cb7d7d40aea88f/687474703a2f2f34302e6d656469612e74756d626c722e636f6d2f61326130346236336434326166343938663464363662616534303939623064632f74756d626c725f696e6c696e655f6e7364616b7854474368317476633568695f313238302e706e67',
      'gitHubUrl': 'https://github.com/dargaCode/KhanBookShelf',
      'livePageUrl': 'http://dargacode.github.io/KhanBookShelf',
    },
  ];

  // 'revealing' module
  return {
    CATEGORY_ORDER: CATEGORY_ORDER,
    SKILLS: SKILLS,
    PROJECTS: PROJECTS,
  }

}());
