import { RawSkill, processRawSkills } from "./skillsUtils";

// These are transformed below before exporting
const RAW_SKILLS: RawSkill[] = [
  {
    name: "Bootstrap",
    iconClass: "devicon-bootstrap-plain",
    type: "Library",
    projectCount: 3,
    url: "https://github.com/dargaCode?tab=repositories&q=topic%3Abootstrap"
  },
  {
    name: "C",
    iconClass: "devicon-c-plain",
    type: "Language",
    projectCount: 18,
    url: "https://github.com/dargaCode?tab=repositories&q=topic%3Ac"
  },
  {
    name: "C#",
    iconClass: "devicon-csharp-plain",
    type: "Language",
    projectCount: 3,
    url:
      "https://github.com/dargaCode/dargacode.github.io/blob/master/skills-note.md#c"
  },
  {
    name: "CSS",
    iconClass: "devicon-css3-plain",
    type: "Language",
    projectCount: 35,
    url: "https://github.com/dargaCode?tab=repositories&q=topic%3Acss"
  },
  {
    name: "Express.js",
    iconClass: "icon-express-logo",
    type: "Framework",
    projectCount: 6,
    url: "https://github.com/dargaCode?tab=repositories&q=topic%3Aexpressjs"
  },
  {
    name: "Git",
    iconClass: "devicon-git-plain",
    type: "Tool",
    projectCount: 58,
    url: "https://github.com/dargaCode?tab=repositories&q=topic%3Agit"
  },
  {
    name: "HTML",
    iconClass: "devicon-html5-plain",
    type: "Language",
    projectCount: 36,
    url: "https://github.com/dargaCode?tab=repositories&q=topic%3Ahtml"
  },
  {
    name: "JavaScript",
    iconClass: "devicon-javascript-plain",
    type: "Language",
    projectCount: 29,
    url: "https://github.com/dargaCode?tab=repositories&q=topic%3Ajavascript"
  },
  {
    name: "jQuery",
    iconClass: "devicon-jquery-plain",
    type: "Library",
    projectCount: 1,
    url: "https://github.com/dargaCode?tab=repositories&q=topic%3Ajquery"
  },
  {
    name: "MongoDB",
    iconClass: "devicon-mongodb-plain",
    type: "Database",
    projectCount: 3,
    url: "https://github.com/dargaCode?tab=repositories&q=topic%3Amongodb"
  },
  {
    name: "MySQL",
    iconClass: "devicon-mysql-plain",
    type: "Database",
    projectCount: 3,
    url:
      "https://github.com/dargaCode/dargacode.github.io/blob/master/skills-note.md#mysql"
  },
  {
    name: "Node.js",
    iconClass: "devicon-nodejs-plain",
    type: "Environment",
    projectCount: 10,
    url: "https://github.com/dargaCode?tab=repositories&q=topic%3Anodejs"
  }
];

// eslint-disable-next-line import/prefer-default-export
export const SKILLS = processRawSkills(RAW_SKILLS);
