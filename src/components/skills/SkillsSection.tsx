import React from "react";
import PropTypes from "prop-types";
import Loading from "../loading/Loading";
import SkillCard from "./SkillCard";
import SkillSortSelector from "./SkillSortSelector";
import "../../config/_general.scss";
import styles from "./SkillsSection.module.scss";
import {
  Skill,
  SkillSortComparator,
  COMPARATORS,
  DEFAULT_COMPARATOR
} from "./skillsUtils";
import { Error } from "../error/errorUtils";

interface Props {
  loading: boolean;
  error: Error;
  skills: Skill[];
}

interface State {
  sortComparator: SkillSortComparator;
}

function getSkillCards(skills: Skill[]): JSX.Element[] {
  return skills.map(skill => <SkillCard skill={skill} key={skill.name} />);
}

export default class SkillsSection extends React.Component<Props, State> {
  static propTypes = {
    loading: PropTypes.bool,
    error: PropTypes.shape({
      message: PropTypes.string
    }),
    skills: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        displayName: PropTypes.string.isRequired,
        repoCount: PropTypes.number.isRequired
      })
    ).isRequired
  };

  static defaultProps = {
    loading: false,
    error: undefined
  };

  constructor(props: Props) {
    super(props);

    this.state = {
      sortComparator: DEFAULT_COMPARATOR
    };
  }

  getContent = (): JSX.Element | JSX.Element[] => {
    const { loading, error, skills } = this.props;
    const { sortComparator } = this.state;

    if (loading) {
      return <Loading />;
    }

    if (error) {
      return (
        // TODO add a real error component
        // eslint-disable-next-line spellcheck/spell-checker
        <div className="error" style={{ fontSize: "20px", color: "red" }}>
          {error.message}
        </div>
      );
    }

    const sortedSkills = skills.sort(sortComparator);

    return getSkillCards(sortedSkills);
  };

  handleSort = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    const sortType = event.target.value;
    const sortComparator = COMPARATORS.get(sortType) as SkillSortComparator;

    this.setState({ sortComparator });
  };

  render(): JSX.Element {
    const { loading } = this.props;

    return (
      <section className={styles.contentSection}>
        <div className={styles.container}>
          <header>
            <h2>Skills</h2>

            <SkillSortSelector disabled={loading} onChange={this.handleSort} />
          </header>
          <div className={styles.list}>{this.getContent()}</div>
        </div>
      </section>
    );
  }
}
