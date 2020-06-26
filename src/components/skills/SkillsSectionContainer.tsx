import React from "react";
import moment from "moment";
import { RepoTopicStats, aggregateRepoTopicStats } from "./repoUtils";

interface State {
  loading: boolean;
  error: Error | null;
  topicStats: RepoTopicStats | {};
}

export default class SkillsSectionContainer extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = {
      loading: true,
      error: null,
      topicStats: {}
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
            topicStats: aggregateRepoTopicStats(result)
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
    const { loading, error, topicStats } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    const topics: {
      name: string;
      count: number;
      updateTime: moment.Moment;
    }[] = [];

    Object.entries(topicStats).forEach(([name, stats]) => {
      topics.push({ name, count: stats.count, updateTime: stats.updateTime });
    });
    topics.sort((a, b) => b.updateTime.diff(a.updateTime));

    return (
      <ul>
        {topics.map(topic => (
          <li key={topic.name}>
            <b>{topic.name}:</b>
            <ul>
              <li>{topic.count} repos</li>
              <li>Last used {topic.updateTime.format("YYYY-MM-DD")}</li>
            </ul>
          </li>
        ))}
      </ul>
    );
  }
}
