import { Project } from "./projectsUtils";
import phonebookSearchImg from "./project-thumbnails/phonebook-search.jpg";
import palindromeHighlighterImg from "./project-thumbnails/palindrome-highlighter.jpg";
import darkestTimelineMeImg from "./project-thumbnails/darkest-timeline-me.jpg";
import apartmentDescriptionHighlightsImg from "./project-thumbnails/apartment-description-highlights.jpg";

// eslint-disable-next-line import/prefer-default-export
export const PROJECTS: Project[] = [
  {
    name: "Phonebook Search",
    type: "Front-End",
    tags: ["JavaScript", "Node.js", "CSS", "HTML", "AJAX"],
    description:
      "Generate, process, and store 2,000 people and businesses, then search them in real time. Incorporates Trie, Set, and Dictionary data structures to make sure search results are displayed extremely quickly.",
    date: "2017-04-04",
    imageSrc: phonebookSearchImg,
    githubUrl: "https://github.com/dargaCode/PhonebookSearch",
    livePageUrl: "https://dargacode.com/PhonebookSearch/"
  },
  {
    name: "Palindrome Highlighter",
    type: "Front-End",
    tags: ["JavaScript", "CSS", "HTML"],
    description:
      "Manipulate the DOM in real time to process and highlight inputted text. Handle many edgecases related to pasting in rich text formatting or raw HTML code. CSS provides the illusion that highlights are happening in the input box.",
    date: "2017-03-08",
    imageSrc: palindromeHighlighterImg,
    githubUrl: "https://github.com/dargaCode/PalindromeHighlighter",
    livePageUrl: "https://dargacode.com/PalindromeHighlighter/"
  },
  {
    name: "Darkest Timeline Me",
    type: "Front-End",
    tags: ["JavaScript", "CSS", "HTML", "Canvas", "OOP"],
    description:
      "Let users import a headshot to the canvas, position and scale it to align with an overlay image, and download the result as a new file. This project focuses on Object-Oriented design and custom event handling.",
    date: "2017-01-21",
    imageSrc: darkestTimelineMeImg,
    githubUrl: "https://github.com/dargaCode/DarkestTimelineMe",
    livePageUrl: "https://darkesttimeline.me"
  },
  {
    name: "Apartment Description Highlights",
    type: "Back-End",
    tags: ["JavaScript", "Node.js"],
    description:
      "Given a long description of an apartment and a query string, generates a highlight snippet made from only relevant phrases. Uses an array of dictionary objects to map categories to relevant keywords.",
    date: "2016-09-16",
    imageSrc: apartmentDescriptionHighlightsImg,
    githubUrl: "https://github.com/dargaCode/ApartmentDescriptionHighlights"
  }
];
