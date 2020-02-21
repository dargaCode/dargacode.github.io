import phonebookSearchImage from "../../img/project-thumbnails/phonebook-search.jpg";
import palindromeImage from "../../img/project-thumbnails/palindrome-highlighter.jpg";
import darkestTimelineImage from "../../img/project-thumbnails/darkest-timeline.jpg";
import apartmentSearchImage from "../../img/project-thumbnails/apartment-search.jpg";

// eslint-disable-next-line import/prefer-default-export
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
