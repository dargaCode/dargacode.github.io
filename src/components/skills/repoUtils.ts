import moment from "moment";

export interface Repo {
  name: string;
  pushed_at: string;
  topics: string[];
}

export interface RepoTopicStats {
  [key: string]: { repoCount: number; lastCommitTime: moment.Moment };
}

export function aggregateRepoTopicStats(repos: Repo[]): RepoTopicStats {
  const topicStats: RepoTopicStats = {};

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
