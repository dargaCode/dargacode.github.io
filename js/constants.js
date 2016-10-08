
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

  // "revealing" module
  return {
    CATEGORY_ORDER: CATEGORY_ORDER,
    SKILLS: SKILLS
  }

}());
