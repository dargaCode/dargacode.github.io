import moment from "moment";
import { RawSkill, Skill } from "./skillsUtils";
import { getTimeSinceCommit } from "./repoUtils";

export const MOCK_RAW_SKILLS: RawSkill[] = [
  {
    name: "javascript",
    displayName: "JavaScript",
    iconClass: "devicon-javascript-plain"
  },
  {
    name: "jest",
    displayName: "Jest",
    iconClass: "devicon-jest-plain"
  },
  {
    name: "mongodb",
    displayName: "MongoDB",
    iconClass: "devicon-mongodb-plain"
  },

  {
    name: "react",
    displayName: "React.js",
    iconClass: "devicon-react-plain"
  },
  {
    name: "storybook",
    displayName: "Storybook",
    iconClass: "devicon-storybook-plain"
  }
];

// `timeSinceCommit` key added below in map, to keep current as date changes
export const MOCK_SKILLS: Skill[] = [
  {
    name: "javascript",
    displayName: "JavaScript",
    iconClass: "devicon-javascript-plain",
    repoCount: 3,
    lastCommitTime: moment("2020-08-26T21:40:06Z")
  },
  {
    name: "jest",
    displayName: "Jest",
    iconClass: "devicon-jest-plain",
    repoCount: 1,
    lastCommitTime: moment("2016-08-26T21:40:06Z")
  },
  {
    name: "mongodb",
    displayName: "MongoDB",
    iconClass: "devicon-mongodb-plain",
    repoCount: 2,
    lastCommitTime: moment("2020-08-26T21:40:06Z")
  },

  {
    name: "react",
    displayName: "React.js",
    iconClass: "devicon-react-plain",
    repoCount: 2,
    lastCommitTime: moment("2018-08-26T21:40:06Z")
  },
  {
    name: "storybook",
    displayName: "Storybook",
    iconClass: "devicon-storybook-plain",
    repoCount: 1,
    lastCommitTime: moment("2020-08-26T21:40:06Z")
  }
].map(incompleteSkill => {
  return Object.assign(incompleteSkill, {
    timeSinceCommit: getTimeSinceCommit(incompleteSkill.lastCommitTime)
  });
});
