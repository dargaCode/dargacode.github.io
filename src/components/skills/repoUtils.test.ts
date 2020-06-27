import { aggregateRepoTopicStats } from "./repoUtils";
import { MOCK_REPOS, MOCK_REPO_TOPIC_STATS } from "./mockRepos";

describe("`repoUtils`", () => {
  describe("`aggregateRepoTopicStats`", () => {
    it("should return object with key for each topic", () => {
      const topicStats = aggregateRepoTopicStats(MOCK_REPOS);

      expect(Array.from(Object.keys(topicStats))).toEqual(
        Object.keys(MOCK_REPO_TOPIC_STATS)
      );
    });
    it("should count repos for single-use topics", () => {
      const topicStats = aggregateRepoTopicStats(MOCK_REPOS);

      expect(topicStats.jest.repoCount).toBe(
        MOCK_REPO_TOPIC_STATS.jest.repoCount
      );
    });
    it("should count repos for multi-use topics", () => {
      const topicStats = aggregateRepoTopicStats(MOCK_REPOS);

      expect(topicStats.react.repoCount).toBe(
        MOCK_REPO_TOPIC_STATS.react.repoCount
      );
    });
    it("should track most recent update for single-use topics", () => {
      const topicStats = aggregateRepoTopicStats(MOCK_REPOS);

      expect(topicStats.storybook.recentRepoUpdateTime).toStrictEqual(
        MOCK_REPO_TOPIC_STATS.storybook.recentRepoUpdateTime
      );
    });
    it("should track most recent update for multi-use topics", () => {
      const topicStats = aggregateRepoTopicStats(MOCK_REPOS);

      expect(topicStats.jest.recentRepoUpdateTime).toStrictEqual(
        MOCK_REPO_TOPIC_STATS.jest.recentRepoUpdateTime
      );
    });
  });
});
