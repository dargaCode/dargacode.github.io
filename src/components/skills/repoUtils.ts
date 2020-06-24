export interface Repo {
  name: string;
  topics: string[];
}

export function aggregateRepoTopicCounts(repos: Repo[]): object {
  const topicCounts: { [key: string]: number } = {};

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
