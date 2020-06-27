import moment from "moment";

export interface Repo {
  name: string;
  pushed_at: string;
  topics: string[];
}

export interface RepoTopicStats {
  [key: string]: { repoCount: number; recentRepoUpdateTime: moment.Moment };
}

export function aggregateRepoTopicStats(repos: Repo[]): RepoTopicStats {
  const topicStats: RepoTopicStats = {};

  repos.forEach(repo => {
    // eslint-disable-next-line @typescript-eslint/camelcase
    const { pushed_at, topics } = repo;
    const recentRepoUpdateTime = moment(pushed_at);

    topics.forEach(topic => {
      if (!topicStats[topic]) {
        topicStats[topic] = {
          repoCount: 1,
          recentRepoUpdateTime
        };
      } else {
        topicStats[topic].repoCount += 1;
        if (
          recentRepoUpdateTime.isAfter(topicStats[topic].recentRepoUpdateTime)
        ) {
          topicStats[topic].recentRepoUpdateTime = recentRepoUpdateTime;
        }
      }
    });
  });

  return topicStats;
}
