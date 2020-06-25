import { RawSkill, processRawSkills } from "./skillsUtils";

// These are transformed below before exporting
const RAW_SKILLS: RawSkill[] = [
  {
    name: "bootstrap",
    displayName: "Bootstrap",
    iconClass: "devicon-bootstrap-plain",
    type: "Library",
    projectCount: 3
  },
  {
    name: "c",
    displayName: "C",
    iconClass: "devicon-c-plain",
    type: "Language",
    projectCount: 18
  },
  {
    name: "css",
    displayName: "CSS",
    iconClass: "devicon-css3-plain",
    type: "Language",
    projectCount: 35
  },
  {
    name: "express-js",
    displayName: "Express.js",
    iconClass: "icon-express-logo",
    type: "Framework",
    projectCount: 6
  },
  {
    name: "git",
    displayName: "Git",
    iconClass: "devicon-git-plain",
    type: "Tool",
    projectCount: 58
  },
  {
    name: "html",
    displayName: "HTML",
    iconClass: "devicon-html5-plain",
    type: "Language",
    projectCount: 36
  },
  {
    name: "javascript",
    displayName: "JavaScript",
    iconClass: "devicon-javascript-plain",
    type: "Language",
    projectCount: 29
  },
  {
    name: "jquery",
    displayName: "jQuery",
    iconClass: "devicon-jquery-plain",
    type: "Library",
    projectCount: 1
  },
  {
    name: "mongodb",
    displayName: "MongoDB",
    iconClass: "devicon-mongodb-plain",
    type: "Database",
    projectCount: 3
  },
  {
    name: "nodejs",
    displayName: "Node.js",
    iconClass: "devicon-nodejs-plain",
    type: "Environment",
    projectCount: 10
  }
];

// eslint-disable-next-line import/prefer-default-export
export const SKILLS = processRawSkills(RAW_SKILLS);
