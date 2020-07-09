import moment from "moment";
import { Repo, AggregatedTopicStats } from "./repoUtils";

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
    topics: ["javascript", "storybook", "typescript"]
  },
  {
    name: "",
    // eslint-disable-next-line @typescript-eslint/camelcase
    pushed_at: "2018-08-26T21:40:06Z",
    topics: ["react", "javascript", "typescript"]
  }
];

export const MOCK_REPO_TOPIC_STATS: AggregatedTopicStats = {
  react: { repoCount: 2, lastCommitTime: moment("2018-08-26T21:40:06Z") },
  javascript: {
    repoCount: 3,
    lastCommitTime: moment("2020-08-26T21:40:06Z")
  },
  jest: { repoCount: 1, lastCommitTime: moment("2016-08-26T21:40:06Z") },
  storybook: {
    repoCount: 1,
    lastCommitTime: moment("2020-08-26T21:40:06Z")
  },
  typescript: {
    repoCount: 2,
    lastCommitTime: moment("2020-08-26T21:40:06Z")
  }
};
