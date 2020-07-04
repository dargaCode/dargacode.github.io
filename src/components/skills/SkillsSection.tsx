import React from "react";
import PropTypes from "prop-types";
import cloneDeep from "clone-deep";
import SkillCard from "./SkillCard";
import SkillSortSelector from "./SkillSortSelector";
import "../../config/_general.scss";
import styles from "./SkillsSection.module.scss";
import { Skill, COMPARATORS, nameSkillComparator } from "./skillsUtils";

interface Props {
  loading: boolean;
  skills: Skill[];
}

interface State {
  skills: Skill[];
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
      skills: cloneDeep(props.skills).sort(nameSkillComparator)
    };
  }

  handleSort = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    const { skills } = this.state;
    const sortType = event.target.value;
    const comparator = COMPARATORS.get(sortType);

    this.setState({ skills: skills.sort(comparator) });
  };

  render(): JSX.Element {
    const { loading } = this.props;
    const { skills } = this.state;

    return (
      <section className={styles.contentSection}>
        <div className={styles.container}>
          <header>
            <h2>Skills</h2>

            <SkillSortSelector disabled={loading} onChange={this.handleSort} />
          </header>

          <div className={styles.list}>
            {skills.map((skill: Skill) => (
              <SkillCard skill={skill} key={skill.name} />
            ))}
          </div>
        </div>
      </section>
    );
  }
}
