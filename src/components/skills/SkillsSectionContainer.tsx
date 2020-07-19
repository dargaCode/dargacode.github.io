import React from "react";
import PropTypes from "prop-types";
import { aggregateRepoTopicStats, getTimeSinceCommit, Repo } from "./repoUtils";
import { RawSkill, Skill } from "./skillsUtils";
import { Error } from "../error/errorUtils";
import { RAW_SKILLS } from "./dataRawSkills";
import SkillsSection from "./SkillsSection";

interface Props {
  rawSkills: RawSkill[];
}

interface State {
  loading: boolean;
  error: Error | undefined;
  skills: Skill[];
}

const GITHUB_REPOS_REQUEST_ABORT_CONTROLLER = new AbortController();

export const GITHUB_REPOS_API_URL =
  "https://api.github.com/users/dargacode/repos?per_page=100";
export const GITHUB_REPOS_FETCH_OPTIONS = {
  headers: {
    // enable topics beta from github api
    // eslint-disable-next-line spellcheck/spell-checker
    Accept: "application/vnd.github.mercy-preview+json"
  },
  signal: GITHUB_REPOS_REQUEST_ABORT_CONTROLLER.signal
};

function processSkills(rawSkills: RawSkill[], repos: Repo[]): Skill[] {
  const topicStats = aggregateRepoTopicStats(repos);
  const processedSkills: Skill[] = [];

  // in the case that `rawSkills` includes a `skill` which doesn't exist
  // in `repos`, it needs to gracefully skip it in the output.
  // this `reduce` takes the place of a `filter`/`map` combo.
  return rawSkills.reduce((skills, rawSkill) => {
    const topic = topicStats[rawSkill.name];

    if (topic) {
      const processedSkill = Object.assign(rawSkill, topic, {
        timeSinceCommit: getTimeSinceCommit(topic.lastCommitTime)
      });

      skills.push(processedSkill);
    }

    return skills;
  }, processedSkills);
}

export default class SkillsSectionContainer extends React.Component<
  Props,
  State
> {
  private abortController: AbortController;

  static propTypes = {
    rawSkills: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        displayName: PropTypes.string.isRequired
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
      error: undefined,
      skills: []
    };

    this.abortController = GITHUB_REPOS_REQUEST_ABORT_CONTROLLER;
  }

  async componentDidMount(): Promise<void> {
    await this.fetchRepos();
  }

  componentWillUnmount(): void {
    this.abortController.abort();
  }

  async fetchRepos(): Promise<void> {
    const response = await fetch(
      GITHUB_REPOS_API_URL,
      GITHUB_REPOS_FETCH_OPTIONS
    );

    if (!response.ok) {
      this.setState({
        loading: false,
        error: { message: `ERROR: ${response.status} ${response.statusText}` }
      });
    } else {
      const { rawSkills } = this.props;
      const apiRepos = await response.json();
      const skills = processSkills(rawSkills, apiRepos);

      this.setState({ loading: false, skills });
    }
  }

  render(): JSX.Element {
    const { loading, error, skills } = this.state;

    return <SkillsSection loading={loading} error={error} skills={skills} />;
  }
}
