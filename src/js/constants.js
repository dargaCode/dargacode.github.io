import phonebookSearchImage from "../img/project-thumbnails/phonebook-search.jpg";
import palindromeImage from "../img/project-thumbnails/palindrome-highlighter.jpg";
import darkestTimelineImage from "../img/project-thumbnails/darkest-timeline.jpg";
import apartmentSearchImage from "../img/project-thumbnails/apartment-search.jpg";

export const SKILL_TYPE_ORDER = [
  "Language",
  "Environment",
  "Framework",
  "Library",
  "Database",
  "Tool"
];

export const SKILLS = [
  {
    name: "Bootstrap",
    projectCount: 3,
    iconClass: "devicon-bootstrap-plain",
    type: "Library",
    gitHubSearchUrl:
      "https://github.com/dargaCode?tab=repositories&q=topic%3Abootstrap"
  },
  {
    name: "C",
    projectCount: 18,
    iconClass: "devicon-c-plain",
    type: "Language",
    gitHubSearchUrl: "https://github.com/dargaCode?tab=repositories&q=topic%3Ac"
  },
  {
    name: "C#",
    projectCount: 3,
    iconClass: "devicon-csharp-plain",
    type: "Language",
    gitHubSearchUrl:
      "https://github.com/dargaCode/dargacode.github.io/blob/master/skills-note.md#c"
  },
  {
    name: "CSS",
    projectCount: 35,
    iconClass: "devicon-css3-plain",
    type: "Language",
    gitHubSearchUrl:
      "https://github.com/dargaCode?tab=repositories&q=topic%3Acss"
  },
  {
    name: "Express.js",
    projectCount: 6,
    iconClass: "icon-express-logo",
    type: "Framework",
    gitHubSearchUrl:
      "https://github.com/dargaCode?tab=repositories&q=topic%3Aexpressjs"
  },
  {
    name: "Git",
    projectCount: 58,
    iconClass: "devicon-git-plain",
    type: "Tool",
    gitHubSearchUrl:
      "https://github.com/dargaCode?tab=repositories&q=topic%3Agit"
  },
  {
    name: "HTML",
    projectCount: 36,
    iconClass: "devicon-html5-plain",
    type: "Language",
    gitHubSearchUrl:
      "https://github.com/dargaCode?tab=repositories&q=topic%3Ahtml"
  },
  {
    name: "JavaScript",
    projectCount: 29,
    iconClass: "devicon-javascript-plain",
    type: "Language",
    gitHubSearchUrl:
      "https://github.com/dargaCode?tab=repositories&q=topic%3Ajavascript"
  },
  {
    name: "jQuery",
    projectCount: 1,
    iconClass: "devicon-jquery-plain",
    type: "Library",
    gitHubSearchUrl:
      "https://github.com/dargaCode?tab=repositories&q=topic%3Ajquery"
  },
  {
    name: "MongoDB",
    projectCount: 3,
    iconClass: "devicon-mongodb-plain",
    type: "Database",
    gitHubSearchUrl:
      "https://github.com/dargaCode?tab=repositories&q=topic%3Amongodb"
  },
  {
    name: "MySQL",
    projectCount: 3,
    iconClass: "devicon-mysql-plain",
    type: "Database",
    gitHubSearchUrl:
      "https://github.com/dargaCode/dargacode.github.io/blob/master/skills-note.md#mysql"
  },
  {
    name: "Node.js",
    projectCount: 10,
    iconClass: "devicon-nodejs-plain",
    type: "Environment",
    gitHubSearchUrl:
      "https://github.com/dargaCode?tab=repositories&q=topic%3Anodejs"
  }
];

export const PROJECTS = [
  {
    name: "Phonebook Search",
    type: "Front-End",
    tags: ["JavaScript", "Node.js", "CSS", "HTML", "AJAX"],
    description:
      "Generate, process, and store 2,000 people and businesses, then search them in real time. Incorporates Trie, Set, and Dictionary data structures to make sure search results are displayed extremely quickly.",
    date: new Date("Apr 4 2017"),
    image: phonebookSearchImage,
    gitHubUrl: "https://github.com/dargaCode/PhonebookSearch",
    livePageUrl: "https://dargacode.com/PhonebookSearch/"
  },
  {
    name: "Palindrome Highlighter",
    type: "Front-End",
    tags: ["JavaScript", "CSS", "HTML"],
    description:
      "Manipulate the DOM in real time to process and highlight inputted text. Handle many edgecases related to pasting in rich text formatting or raw HTML code. CSS provides the illusion that highlights are happening in the input box.",
    date: new Date("Mar 8 2017"),
    image: palindromeImage,
    gitHubUrl: "https://github.com/dargaCode/PalindromeHighlighter",
    livePageUrl: "https://dargacode.com/PalindromeHighlighter/"
  },
  {
    name: "Darkest Timeline Me",
    type: "Front-End",
    tags: ["JavaScript", "CSS", "HTML", "Canvas", "OOP"],
    description:
      "Let users import a headshot to the canvas, position and scale it to align with an overlay image, and download the result as a new file. This project focuses on Object-Oriented design and custom event handling.",
    date: new Date("Jan 21 2017"),
    image: darkestTimelineImage,
    gitHubUrl: "https://github.com/dargaCode/DarkestTimelineMe",
    livePageUrl: "https://darkesttimeline.me"
  },
  {
    name: "Apartment Description Highlights",
    type: "Back-End",
    tags: ["JavaScript", "Node.js"],
    description:
      "Given a long description of an apartment and a query string, generates a highlight snippet made from only relevant phrases. Uses an array of dictionary objects to map categories to relevant keywords.",
    date: new Date("Sep 16 2016"),
    image: apartmentSearchImage,
    gitHubUrl: "https://github.com/dargaCode/ApartmentDescriptionHighlights",
    livePageUrl: null
  }
];
