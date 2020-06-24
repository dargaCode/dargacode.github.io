interface Repo {
  name: string;
  topics: string[];
}

export interface TopicCounts {
  [key: string]: number;
}

export function aggregateRepoTopicCounts(repos: Repo[]): object {
  const topicCounts: TopicCounts = {};

  repos.forEach(repo => {
    const { topics } = repo;

    topics.forEach(topic => {
      if (topicCounts[topic]) {
        topicCounts[topic] += 1;
      } else {
        topicCounts[topic] = 1;
      }
    });
  });

  return topicCounts;
}
