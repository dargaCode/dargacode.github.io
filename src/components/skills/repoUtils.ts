import moment from "moment";

// shorter and/or more uniform strings
const FROM_NOW_REPLACEMENTS: { [key: string]: string } = {
  "a few seconds ago": "1 minute ago",
  "a minute ago": "1 minute ago",
  "an hour ago": "1 hour ago",
  "a day ago": "1 day ago",
  "a month ago": "1 month ago",
  "a year ago": "1 year ago"
};

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

  return FROM_NOW_REPLACEMENTS[timeSinceCommit] || timeSinceCommit;
}
