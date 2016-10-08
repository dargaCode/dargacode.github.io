
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
      'description': 'Apartment Description Highlights Description Text',
      'languages': [],
      'date': new Date('Sep 2016'),
      'imageUrl': '',
      'gitHubUrl': 'https://github.com/dargaCode/ApartmentDescriptionHighlights',
      'livePageUrl': null,
    },
    {
      'name': 'Secret Page',
      'type': 'Back-End',
      'description': 'Secret Page Description Text',
      'languages': [],
      'date': new Date('Jun 2016'),
      'imageUrl': '',
      'gitHubUrl': 'https://github.com/dargaCode/UdemySecretPage',
      'livePageUrl': 'https://darga-secret-page.herokuapp.com/',
    },
    {
      'name': 'RESTful Blog',
      'type': 'Back-End',
      'description': 'RESTful Blog Description Text',
      'languages': [],
      'date': new Date('May 2016'),
      'imageUrl': '',
      'gitHubUrl': 'https://github.com/dargaCode/UdemyRESTfulBlog',
      'livePageUrl': 'https://darga-restful-blog.herokuapp.com/blogs',
    },
    {
      'name': 'Portfolio Website',
      'type': 'Front-End',
      'description': 'Portfolio Website Description Text',
      'languages': [],
      'date': new Date('Aug 2016'),
      'imageUrl': '',
      'gitHubUrl': 'https://github.com/dargaCode/dargacode.github.io',
      'livePageUrl': 'https://dargacode.github.io/',
    },
    {
      'name': 'Color Match Game',
      'type': 'Front-End',
      'description': 'Color Match Game Description Text',
      'languages': [],
      'date': new Date('May 2016'),
      'imageUrl': '',
      'gitHubUrl': 'https://github.com/dargaCode/UdemyColorMatchGame',
      'livePageUrl': 'http://dargacode.github.io/UdemyColorMatchGame/',
    },
    {
      'name': 'Newsroom Layout',
      'type': 'CSS Mockup',
      'description': 'Newsroom Layout Description Text',
      'languages': [],
      'date': new Date('Feb 2016'),
      'imageUrl': '',
      'gitHubUrl': 'https://github.com/dargaCode/CodecademyNewsroomLayout',
      'livePageUrl': 'http://dargacode.github.io/CodecademyNewsroomLayout/',
    },
    {
      'name': 'Bolt Network Layout',
      'type': 'CSS Mockup',
      'description': 'Bolt Network Layout Description Text',
      'languages': [],
      'date': new Date('Feb 2016'),
      'imageUrl': '',
      'gitHubUrl': 'https://github.com/dargaCode/CodecademyBoltNetworkLayout',
      'livePageUrl': 'http://dargacode.github.io/CodecademyBoltNetworkLayout/',
    },
    {
      'name': 'Recursive Nth Fiboacci',
      'type': 'Command Line',
      'description': 'Recursive Nth Fiboacci Description Text',
      'languages': [],
      'date': new Date('Oct 2015'),
      'imageUrl': '',
      'gitHubUrl': 'https://github.com/dargaCode/RecursiveNthFibonacci',
      'livePageUrl': null,
    },
    {
      'name': 'Animated Insertion Sort',
      'type': 'Command Line',
      'description': 'Animated Insertion Sort Description Text',
      'languages': [],
      'date': new Date('Oct 2015'),
      'imageUrl': '',
      'gitHubUrl': 'https://github.com/dargaCode/AnimatedInsertionSort',
      'livePageUrl': null,
    },
    {
      'name': 'Drag and Drop Book Shelf',
      'type': 'Front-End',
      'description': 'Drag and Drop Book Shelf Description Text',
      'languages': [],
      'date': new Date('Jul 2015'),
      'imageUrl': '',
      'gitHubUrl': 'https://github.com/dargaCode/KhanBookShelf',
      'livePageUrl': 'http://dargacode.github.io/KhanBookShelf',
    },
    {
      'name': 'Interactive Thunder Storm',
      'type': 'Front-End',
      'description': 'Interactive Thunder Storm Description Text',
      'languages': [],
      'date': new Date('Jun 2015'),
      'imageUrl': '',
      'gitHubUrl': 'https://github.com/dargaCode/KhanThunderStorm',
      'livePageUrl': 'http://dargacode.github.io/KhanThunderStorm',
    },
  ];

  // 'revealing' module
  return {
    CATEGORY_ORDER: CATEGORY_ORDER,
    SKILLS: SKILLS,
    PROJECTS: PROJECTS,
  }

}());
