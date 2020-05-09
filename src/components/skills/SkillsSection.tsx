import React from "react";
import cloneDeep from "clone-deep";
import SkillCard from "./SkillCard";
import SkillSortSelector from "./SkillSortSelector";
import { SKILLS } from "./skillsData";
import "../../_general.scss";
import styles from "./SkillsSection.styles.scss";
import {
  Skill,
  SkillSortComparator,
  nameSkillComparator,
  projectsSkillComparator,
  typeSkillComparator
} from "./skillsUtils";

interface State {
  skills: Skill[];
}

const COMPARATORS: Map<string, SkillSortComparator> = new Map([
  ["Skill Name", nameSkillComparator],
  ["Skill Type", typeSkillComparator],
  ["Project Count", projectsSkillComparator]
]);

export default class SkillsSection extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = {
      skills: cloneDeep(SKILLS).sort(nameSkillComparator)
    };
  }

  handleSort = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    const { skills } = this.state;
    const sortType = event.target.value;
    const comparator = COMPARATORS.get(sortType);

    this.setState({ skills: skills.sort(comparator) });
  };

  render(): JSX.Element {
    const { skills } = this.state;

    return (
      <section id="skills" className={`content-section ${styles.skills}`}>
        <div className={styles.container}>
          <header>
            <h2>Skills</h2>

            <SkillSortSelector onChange={this.handleSort} />
          </header>

          <div className={styles.skillList}>
            {skills.map((skill: Skill) => (
              <SkillCard skill={skill} key={skill.name} />
            ))}
          </div>
        </div>
      </section>
    );
  }
}
