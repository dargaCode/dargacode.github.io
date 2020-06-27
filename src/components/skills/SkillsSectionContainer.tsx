import React from "react";
import moment from "moment";
import { RepoTopicStats, aggregateRepoTopicStats } from "./repoUtils";
import SkillsSection from "./SkillsSection";
import { MOCK_SKILLS } from "./mockSkills";

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
      headers: { Accept: "application/vnd.github.mercy-preview+json" } // enable topics beta from github api
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
      repoCount: number;
      recentRepoUpdateTime: moment.Moment;
    }[] = [];

    Object.entries(topicStats).forEach(([name, stats]) => {
      topics.push({
        name,
        repoCount: stats.repoCount,
        recentRepoUpdateTime: stats.recentRepoUpdateTime
      });
    });
    topics.sort((a, b) => b.recentRepoUpdateTime.diff(a.recentRepoUpdateTime));

    return <SkillsSection skills={MOCK_SKILLS} />;
  }
}
