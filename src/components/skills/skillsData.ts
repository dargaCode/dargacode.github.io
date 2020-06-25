import { RawSkill, processRawSkills } from "./skillsUtils";

// These are transformed below before exporting
const RAW_SKILLS: RawSkill[] = [
  {
    name: "bootstrap",
    displayName: "Bootstrap",
    iconClass: "devicon-bootstrap-plain",
    projectCount: 3
  },
  {
    name: "c",
    displayName: "C",
    iconClass: "devicon-c-plain",
    projectCount: 18
  },
  {
    name: "css",
    displayName: "CSS",
    iconClass: "devicon-css3-plain",
    projectCount: 35
  },
  {
    name: "express-js",
    displayName: "Express.js",
    iconClass: "icon-express-logo",
    projectCount: 6
  },
  {
    name: "git",
    displayName: "Git",
    iconClass: "devicon-git-plain",
    projectCount: 58
  },
  {
    name: "heroku",
    displayName: "Heroku",
    iconClass: "devicon-heroku-plain",
    projectCount: 6
  },
  {
    name: "html",
    displayName: "HTML",
    iconClass: "devicon-html5-plain",
    projectCount: 36
  },
  {
    name: "javascript",
    displayName: "JavaScript",
    iconClass: "devicon-javascript-plain",
    projectCount: 29
  },
  {
    name: "jest",
    displayName: "Jest",
    iconClass: "devicon-jest-plain",
    projectCount: 2
  },
  {
    name: "mongodb",
    displayName: "MongoDB",
    iconClass: "devicon-mongodb-plain",
    projectCount: 3
  },
  {
    name: "nodejs",
    displayName: "Node.js",
    iconClass: "devicon-nodejs-plain",
    projectCount: 10
  },
  {
    name: "react",
    displayName: "React.js",
    iconClass: "devicon-react-plain",
    projectCount: 3
  },
  {
    name: "scss",
    displayName: "SCSS",
    iconClass: "devicon-sass-plain",
    projectCount: 2
  },
  {
    name: "storybook",
    displayName: "Storybook",
    iconClass: "devicon-storybook-plain",
    projectCount: 2
  }
];

// eslint-disable-next-line import/prefer-default-export
export const SKILLS = processRawSkills(RAW_SKILLS);
