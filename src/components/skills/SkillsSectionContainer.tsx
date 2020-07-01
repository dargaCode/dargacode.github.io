import React from "react";
import PropTypes from "prop-types";
import { Repo, aggregateRepoTopicStats, getTimeSinceCommit } from "./repoUtils";
import { RawSkill, Skill } from "./skillsUtils";
import { RAW_SKILLS } from "./dataRawSkills";
import SkillsSection from "./SkillsSection";

interface Props {
  rawSkills: RawSkill[];
}

interface State {
  loading: boolean;
  error: Error | null;
  skills: Skill[];
}

export const GITHUB_REPOS_API_URL =
  "https://api.github.com/users/dargacode/repos?per_page=100";

function processSkills(rawSkills: RawSkill[], repos: Repo[]): Skill[] {
  const topicStats = aggregateRepoTopicStats(repos);

  return rawSkills.map(rawSkill => {
    const topic = topicStats[rawSkill.name];

    return Object.assign(rawSkill, topic, {
      timeSinceCommit: getTimeSinceCommit(topic.lastCommitTime)
    });
  });
}

export default class SkillsSectionContainer extends React.Component<
  Props,
  State
> {
  static propTypes = {
    rawSkills: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        displayName: PropTypes.string.isRequired,
        iconClass: PropTypes.string.isRequired
      })
    )
  };

  static defaultProps = {
    rawSkills: RAW_SKILLS
  };

  constructor(props: Props) {
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
          const { rawSkills } = this.props;

          this.setState({
            loading: false,
            skills: processSkills(rawSkills, apiRepos)
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
