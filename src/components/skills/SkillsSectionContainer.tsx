import React from "react";
import { aggregateRepoTopicStats } from "./repoUtils";
import SkillsSection from "./SkillsSection";
import { RAW_SKILLS } from "./dataRawSkills";
import { Skill } from "./skillsUtils";

interface State {
  loading: boolean;
  error: Error | null;
  skills: Skill[];
}

const GITHUB_REPOS_API_URL =
  "https://api.github.com/users/dargacode/repos?per_page=100";

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
        result => {
          // merge the raw skills with the api topic data
          const topicStats = aggregateRepoTopicStats(result);
          const skills: Skill[] = RAW_SKILLS.map(skill => {
            return Object.assign(skill, topicStats[skill.name]);
          });

          this.setState({
            loading: false,
            skills
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
