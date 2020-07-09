import moment from "moment";
import { RawSkill, Skill } from "./skillsUtils";
import { getTimeSinceCommit } from "./repoUtils";

export const MOCK_RAW_SKILLS: RawSkill[] = [
  {
    name: "javascript",
    displayName: "JavaScript",
    iconClass: "icon-javascript"
  },
  {
    name: "jest",
    displayName: "Jest",
    iconClass: "icon-jest"
  },
  {
    name: "mongodb",
    displayName: "MongoDB",
    iconClass: "icon-mongodb"
  },

  {
    name: "react",
    displayName: "React.js",
    iconClass: "icon-react"
  },
  {
    name: "storybook",
    displayName: "Storybook",
    iconClass: "icon-storybook"
  }
];

// `timeSinceCommit` key added below in map, to keep current as date changes
export const MOCK_SKILLS: Skill[] = [
  {
    name: "javascript",
    displayName: "JavaScript",
    iconClass: "icon-javascript",
    repoCount: 3,
    lastCommitTime: moment("2020-08-26T21:40:06Z")
  },
  {
    name: "jest",
    displayName: "Jest",
    iconClass: "icon-jest",
    repoCount: 1,
    lastCommitTime: moment("2016-08-26T21:40:06Z")
  },
  {
    name: "mongodb",
    displayName: "MongoDB",
    iconClass: "icon-mongodb",
    repoCount: 2,
    lastCommitTime: moment("2020-08-26T21:40:06Z")
  },

  {
    name: "react",
    displayName: "React.js",
    iconClass: "icon-react",
    repoCount: 2,
    lastCommitTime: moment("2018-08-26T21:40:06Z")
  },
  {
    name: "storybook",
    displayName: "Storybook",
    iconClass: "icon-storybook",
    repoCount: 1,
    lastCommitTime: moment("2020-08-26T21:40:06Z")
  }
].map(incompleteSkill => {
  return Object.assign(incompleteSkill, {
    timeSinceCommit: getTimeSinceCommit(incompleteSkill.lastCommitTime)
  });
});
