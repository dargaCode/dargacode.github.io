import moment from "moment";

export interface Repo {
  name: string;
  pushed_at: string;
  topics: string[];
}

export interface TopicStats {
  [key: string]: { count: number; updateTime: moment.Moment };
}

export function aggregateRepoTopicStats(repos: Repo[]): TopicStats {
  const topicStats: TopicStats = {};

  repos.forEach(repo => {
    // eslint-disable-next-line @typescript-eslint/camelcase
    const { pushed_at, topics } = repo;
    const updateTime = moment(pushed_at);

    topics.forEach(topic => {
      if (!topicStats[topic]) {
        topicStats[topic] = {
          count: 1,
          updateTime
        };
      } else {
        topicStats[topic].count += 1;
        if (updateTime.isAfter(topicStats[topic].updateTime)) {
          topicStats[topic].updateTime = updateTime;
        }
      }
    });
  });

  return topicStats;
}
