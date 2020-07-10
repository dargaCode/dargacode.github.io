import moment from "moment";
import { RawSkill, Skill } from "./skillsUtils";
import { getTimeSinceCommit } from "./repoUtils";

export const MOCK_RAW_SKILLS: RawSkill[] = [
  {
    name: "javascript",
    displayName: "JavaScript",
    iconClass: "iconJavascript"
  },
  {
    name: "jest",
    displayName: "Jest",
    iconClass: "iconJest"
  },
  {
    name: "react",
    displayName: "React.js",
    iconClass: "iconReact"
  },
  {
    name: "storybook",
    displayName: "Storybook",
    iconClass: "iconStorybook"
  },
  {
    name: "typescript",
    displayName: "TypeScript",
    iconClass: "iconTypescript"
  }
];

// `timeSinceCommit` key added below in map, to keep current as date changes
export const MOCK_SKILLS: Skill[] = [
  {
    name: "javascript",
    displayName: "JavaScript",
    iconClass: "iconJavascript",
    repoCount: 3,
    lastCommitTime: moment("2020-08-26T21:40:06Z")
  },
  {
    name: "jest",
    displayName: "Jest",
    iconClass: "iconJest",
    repoCount: 1,
    lastCommitTime: moment("2016-08-26T21:40:06Z")
  },
  {
    name: "react",
    displayName: "React.js",
    iconClass: "iconReact",
    repoCount: 2,
    lastCommitTime: moment("2018-08-26T21:40:06Z")
  },
  {
    name: "storybook",
    displayName: "Storybook",
    iconClass: "iconStorybook",
    repoCount: 1,
    lastCommitTime: moment("2020-08-26T21:40:06Z")
  },
  {
    name: "typescript",
    displayName: "TypeScript",
    iconClass: "iconTypescript",
    repoCount: 2,
    lastCommitTime: moment("2020-08-26T21:40:06Z")
  }
].map(incompleteSkill => {
  return Object.assign(incompleteSkill, {
    timeSinceCommit: getTimeSinceCommit(incompleteSkill.lastCommitTime)
  });
});
