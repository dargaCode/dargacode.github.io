import React from "react";
import PropTypes from "prop-types";
import Axios, { AxiosRequestConfig, CancelTokenSource } from "axios";
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

const GITHUB_REPOS_API_URL =
  "https://api.github.com/users/dargacode/repos?per_page=100";
const GITHUB_REPOS_FETCH_HEADERS = {
  // enable topics beta from github api
  // eslint-disable-next-line spellcheck/spell-checker
  Accept: "application/vnd.github.mercy-preview+json"
};

export const GITHUB_REPOS_REQUEST_CONFIG: AxiosRequestConfig = {
  method: "get",
  url: GITHUB_REPOS_API_URL,
  headers: GITHUB_REPOS_FETCH_HEADERS
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

  private axiosCancelSource: CancelTokenSource;

  constructor(props: Props) {
    super(props);

    this.state = {
      loading: true,
      error: undefined,
      skills: []
    };

    this.axiosCancelSource = Axios.CancelToken.source();
  }

  async componentDidMount(): Promise<void> {
    await this.fetchRepos();
  }

  componentWillUnmount(): void {
    this.axiosCancelSource.cancel("Operation canceled by the user.");
  }

  async fetchRepos(): Promise<void> {
    try {
      const response = await Axios({
        ...GITHUB_REPOS_REQUEST_CONFIG,
        cancelToken: this.axiosCancelSource.token
      });
      const { data } = response;
      const { rawSkills } = this.props;
      const skills = processSkills(rawSkills, data);

      this.setState({ loading: false, skills });
    } catch (err) {
      if (err.response) {
        const { status, statusText } = err.response;

        this.setState({
          loading: false,
          error: { message: `ERROR: ${status} ${statusText}` }
        });
      }
    }
  }

  render(): JSX.Element {
    const { loading, error, skills } = this.state;

    return <SkillsSection loading={loading} error={error} skills={skills} />;
  }
}
