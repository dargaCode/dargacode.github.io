import moment from "moment";
import { aggregateRepoTopicStats, getTimeSinceCommit } from "./repoUtils";
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

      expect(topicStats.storybook.lastCommitTime).toStrictEqual(
        MOCK_REPO_TOPIC_STATS.storybook.lastCommitTime
      );
    });
    it("should track most recent update for multi-use topics", () => {
      const topicStats = aggregateRepoTopicStats(MOCK_REPOS);

      expect(topicStats.jest.lastCommitTime).toStrictEqual(
        MOCK_REPO_TOPIC_STATS.jest.lastCommitTime
      );
    });
  });

  describe("`getTimeSinceCommit`", () => {
    describe("when time is less than a minute ago", () => {
      it("should replace text with `1 minute ago`", () => {
        const thirtySecondsAgo = moment().subtract(30, "seconds");

        expect(getTimeSinceCommit(thirtySecondsAgo)).toBe("1 minute ago");
      });
    });
    describe("when time is a minute ago", () => {
      it("should replace text with `1 minute ago`", () => {
        const oneMinuteAgo = moment().subtract(1, "minute");

        expect(getTimeSinceCommit(oneMinuteAgo)).toBe("1 minute ago");
      });
    });
    describe("when time is an hour ago", () => {
      it("should replace text with `1 hour ago`", () => {
        const oneHourAgo = moment().subtract(1, "hour");

        expect(getTimeSinceCommit(oneHourAgo)).toBe("1 hour ago");
      });
    });
    describe("when time is a day ago", () => {
      it("should replace text with `1 day ago`", () => {
        const oneDayAgo = moment().subtract(1, "day");

        expect(getTimeSinceCommit(oneDayAgo)).toBe("1 day ago");
      });
    });
    describe("when time is a month ago", () => {
      it("should replace text with `1 month ago`", () => {
        const oneMonthAgo = moment().subtract(1, "month");

        expect(getTimeSinceCommit(oneMonthAgo)).toBe("1 month ago");
      });
    });
    describe("when time is a year ago", () => {
      it("should replace text with `1 year ago`", () => {
        const oneYearAgo = moment().subtract(1, "year");

        expect(getTimeSinceCommit(oneYearAgo)).toBe("1 year ago");
      });
    });
    describe("when time is any other duration ago", () => {
      it("should use the default `moment.fromNow` text", () => {
        const thirtyMinutesAgo = moment().subtract(30, "minute");
        const fiveHoursAgo = moment().subtract(5, "hour");
        const twelveDaysAgo = moment().subtract(12, "day");
        const sixMonthsAgo = moment().subtract(6, "month");
        const eightYearsAgo = moment().subtract(8, "year");

        expect(getTimeSinceCommit(thirtyMinutesAgo)).toBe("30 minutes ago");
        expect(getTimeSinceCommit(fiveHoursAgo)).toBe("5 hours ago");
        expect(getTimeSinceCommit(twelveDaysAgo)).toBe("12 days ago");
        expect(getTimeSinceCommit(sixMonthsAgo)).toBe("6 months ago");
        expect(getTimeSinceCommit(eightYearsAgo)).toBe("8 years ago");
      });
    });
  });
});
