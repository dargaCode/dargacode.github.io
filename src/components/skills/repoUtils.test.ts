import moment from "moment";
import { Repo, TopicStats, aggregateRepoTopicStats } from "./repoUtils";

const REPOS: Repo[] = [
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

const TOPIC_STATS: TopicStats = {
  react: { count: 2, updateTime: moment("2018-08-26T21:40:06Z") },
  javascript: { count: 3, updateTime: moment("2020-08-26T21:40:06Z") },
  jest: { count: 1, updateTime: moment("2016-08-26T21:40:06Z") },
  storybook: { count: 1, updateTime: moment("2020-08-26T21:40:06Z") },
  mongodb: { count: 2, updateTime: moment("2020-08-26T21:40:06Z") }
};

describe("`repoUtils`", () => {
  describe("`aggregateRepoTopicStats`", () => {
    it("should return object with key for each topic", () => {
      const topicStats = aggregateRepoTopicStats(REPOS);

      expect(Array.from(Object.keys(topicStats))).toEqual(
        Object.keys(TOPIC_STATS)
      );
    });
    it("should count single-use topics", () => {
      const topicStats = aggregateRepoTopicStats(REPOS);

      expect(topicStats.jest.count).toBe(TOPIC_STATS.jest.count);
    });
    it("should count multi-use topics", () => {
      const topicStats = aggregateRepoTopicStats(REPOS);

      expect(topicStats.react.count).toBe(TOPIC_STATS.react.count);
    });
    it("should track most recent update for single-use topics", () => {
      const topicStats = aggregateRepoTopicStats(REPOS);

      expect(topicStats.storybook.updateTime).toStrictEqual(
        TOPIC_STATS.storybook.updateTime
      );
    });
    it("should track most recent update for multi-use topics", () => {
      const topicStats = aggregateRepoTopicStats(REPOS);

      expect(topicStats.jest.updateTime).toStrictEqual(
        TOPIC_STATS.jest.updateTime
      );
    });
  });
});
