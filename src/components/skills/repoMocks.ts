import moment from "moment";
import { Repo, RepoTopicStats } from "./repoUtils";

export const MOCK_REPOS: Repo[] = [
  {
    name: "",
    // eslint-disable-next-line @typescript-eslint/camelcase
    pushed_at: "2016-08-26T21:40:06Z",
    topics: ["react", "javascript", "jest"]
  },
  {
    name: "",
    // eslint-disable-next-line @typescript-eslint/camelcase
    pushed_at: "2020-08-26T21:40:06Z",
    topics: ["javascript", "storybook", "mongodb"]
  },
  {
    name: "",
    // eslint-disable-next-line @typescript-eslint/camelcase
    pushed_at: "2018-08-26T21:40:06Z",
    topics: ["react", "javascript", "mongodb"]
  }
];

export const MOCK_REPO_TOPIC_STATS: RepoTopicStats = {
  react: { count: 2, updateTime: moment("2018-08-26T21:40:06Z") },
  javascript: { count: 3, updateTime: moment("2020-08-26T21:40:06Z") },
  jest: { count: 1, updateTime: moment("2016-08-26T21:40:06Z") },
  storybook: { count: 1, updateTime: moment("2020-08-26T21:40:06Z") },
  mongodb: { count: 2, updateTime: moment("2020-08-26T21:40:06Z") }
};
