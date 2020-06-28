import moment from "moment";

export interface Repo {
  name: string;
  pushed_at: string;
  topics: string[];
}

interface TopicStats {
  repoCount: number;
  lastCommitTime: moment.Moment;
}

export interface AggregatedTopicStats {
  [key: string]: TopicStats;
}

export function aggregateRepoTopicStats(repos: Repo[]): AggregatedTopicStats {
  const topicStats: AggregatedTopicStats = {};

  repos.forEach(repo => {
    // eslint-disable-next-line @typescript-eslint/camelcase
    const { pushed_at, topics } = repo;
    const lastCommitTime = moment(pushed_at);

    topics.forEach(topic => {
      if (!topicStats[topic]) {
        topicStats[topic] = {
          repoCount: 1,
          lastCommitTime
        };
      } else {
        topicStats[topic].repoCount += 1;
        if (lastCommitTime.isAfter(topicStats[topic].lastCommitTime)) {
          topicStats[topic].lastCommitTime = lastCommitTime;
        }
      }
    });
  });

  return topicStats;
}

export function getTimeSinceCommit(lastCommitTime: moment.Moment): string {
  const timeSinceCommit = lastCommitTime.fromNow();

  // the default result is longer and doesn't fit as well as the other values
  return timeSinceCommit === "a few seconds ago"
    ? "seconds ago"
    : timeSinceCommit;
}
