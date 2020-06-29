import React from "react";
import { Repo, aggregateRepoTopicStats, getTimeSinceCommit } from "./repoUtils";
import { Skill } from "./skillsUtils";
import { RAW_SKILLS } from "./dataRawSkills";
import SkillsSection from "./SkillsSection";

interface State {
  loading: boolean;
  error: Error | null;
  skills: Skill[];
}

const GITHUB_REPOS_API_URL =
  "https://api.github.com/users/dargacode/repos?per_page=100";

function processSkills(repos: Repo[]): Skill[] {
  const topicStats = aggregateRepoTopicStats(repos);

  return RAW_SKILLS.map(rawSkill => {
    const topic = topicStats[rawSkill.name];

    return Object.assign(rawSkill, topic, {
      timeSinceCommit: getTimeSinceCommit(topic.lastCommitTime)
    });
  });
}

export default class SkillsSectionContainer extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = {
      loading: true,
      error: null,
      skills: []
    };
  }

  componentDidMount(): void {
    fetch(GITHUB_REPOS_API_URL, {
      // eslint-disable-next-line spellcheck/spell-checker
      headers: { Accept: "application/vnd.github.mercy-preview+json" } // enable topics beta from github api
    })
      .then(response => response.json())
      .then(
        apiRepos => {
          this.setState({
            loading: false,
            skills: processSkills(apiRepos)
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
    const { loading, error, skills } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    return <SkillsSection skills={skills} />;
  }
}
