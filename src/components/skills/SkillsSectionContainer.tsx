import React from "react";
import { TopicCounts, aggregateRepoTopicCounts } from "./repoUtils";

interface State {
  loading: boolean;
  error: Error | null;
  topicCounts: TopicCounts | {};
}

export default class SkillsSectionContainer extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = {
      loading: true,
      error: null,
      topicCounts: {}
    };
  }

  componentDidMount(): void {
    fetch("https://api.github.com/users/dargacode/repos?per_page=100", {
      // eslint-disable-next-line spellcheck/spell-checker
      headers: { Accept: "application/vnd.github.mercy-preview+json" } // Enable topics beta from github api
    })
      .then(response => response.json())
      .then(
        result => {
          this.setState({
            loading: false,
            topicCounts: aggregateRepoTopicCounts(result)
          });
        },
        error => {
          this.setState({
            loading: false,
            error
          });
        }
      );
  }

  render(): JSX.Element {
    const { loading, error, topicCounts } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    const topics: { name: string; count: number }[] = [];

    Object.entries(topicCounts).forEach(([name, count]) => {
      topics.push({ name, count });
    });
    topics.sort((a, b) => b.count - a.count);

    return (
      <ul>
        {topics.map(topic => (
          <li key={topic.name}>
            <b>{topic.name}:</b> {topic.count}
          </li>
        ))}
      </ul>
    );
  }
}
