import React from "react";
import PropTypes from "prop-types";
import SkillCard from "./SkillCard";
import SkillSortSelector from "./SkillSortSelector";
import "../../config/_general.scss";
import styles from "./SkillsSection.module.scss";
import {
  Skill,
  SkillSortComparator,
  COMPARATORS,
  nameSkillComparator
} from "./skillsUtils";
import { Error } from "../error/errorUtils";

interface Props {
  loading: boolean;
  skills: Skill[];
}

interface State {
  sortComparator: SkillSortComparator;
}

export default class SkillsSection extends React.Component<Props, State> {
  static propTypes = {
    loading: PropTypes.bool,
    skills: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        displayName: PropTypes.string.isRequired,
        iconClass: PropTypes.string.isRequired,
        repoCount: PropTypes.number.isRequired
      })
    ).isRequired
  };

  static defaultProps = {
    loading: false,
  };

  constructor(props: Props) {
    super(props);

    this.state = {
      sortComparator: nameSkillComparator
    };
  }

  getSkillCards(skills: Skill[]): JSX.Element[] {
    const { loading } = this.props;

    return skills.map(skill => (
      <SkillCard loading={loading} skill={skill} key={skill.name} />
    ));
  }

  handleSort = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    const sortType = event.target.value;
    const sortComparator = COMPARATORS.get(sortType) as SkillSortComparator;

    this.setState({ sortComparator });
  };

  render(): JSX.Element {
    const { loading, skills } = this.props;
    const { sortComparator } = this.state;

    const sortedSkills = skills.sort(sortComparator);

    return (
      <section className={styles.contentSection}>
        <div className={styles.container}>
          <header>
            <h2>Skills</h2>

            <SkillSortSelector disabled={loading} onChange={this.handleSort} />
          </header>
          <div className={styles.list}>{this.getSkillCards(sortedSkills)}</div>
        </div>
      </section>
    );
  }
}
