import moment from "moment";
import { Repo, TopicStats, aggregateRepoTopicStats } from "./repoUtils";

const REPOS: Repo[] = [
  {
    name: "",
    // eslint-disable-next-line @typescript-eslint/camelcase
    pushed_at: "2016-08-26T21:40:06Z",
    topics: ["a", "b", "c"]
  },
  {
    name: "",
    // eslint-disable-next-line @typescript-eslint/camelcase
    pushed_at: "2020-08-26T21:40:06Z",
    topics: ["b", "d", "f"]
  },
  {
    name: "",
    // eslint-disable-next-line @typescript-eslint/camelcase
    pushed_at: "2018-08-26T21:40:06Z",
    topics: ["a", "b", "f"]
  }
];

const TOPIC_STATS: TopicStats = {
  a: { count: 2, updateTime: moment("2018-08-26T21:40:06Z") },
  b: { count: 3, updateTime: moment("2020-08-26T21:40:06Z") },
  c: { count: 1, updateTime: moment("2016-08-26T21:40:06Z") },
  d: { count: 1, updateTime: moment("2020-08-26T21:40:06Z") },
  f: { count: 2, updateTime: moment("2020-08-26T21:40:06Z") }
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

      expect(topicStats.c.count).toBe(TOPIC_STATS.c.count);
    });
    it("should count multi-use topics", () => {
      const topicStats = aggregateRepoTopicStats(REPOS);

      expect(topicStats.a.count).toBe(TOPIC_STATS.a.count);
    });
    it("should track most recent update for single-use topics", () => {
      const topicStats = aggregateRepoTopicStats(REPOS);

      expect(topicStats.d.updateTime).toStrictEqual(TOPIC_STATS.d.updateTime);
    });
    it("should track most recent update for multi-use topics", () => {
      const topicStats = aggregateRepoTopicStats(REPOS);

      expect(topicStats.c.updateTime).toStrictEqual(TOPIC_STATS.c.updateTime);
    });
  });
});
