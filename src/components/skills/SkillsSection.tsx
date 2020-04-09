import React from "react";
import cloneDeep from "clone-deep";
import SkillCard from "./SkillCard";
import SkillSortSelector from "./SkillSortSelector";
import { SKILLS, Skill, SkillSortComparator } from "./skillData";
import "../_general.scss";
import "./_skills.scss";
import {
  nameComparator,
  projectCountComparator,
  typeComparator
} from "./skillUtils";

interface State {
  skills: Skill[];
}

const COMPARATORS: Map<string, SkillSortComparator> = new Map([
  ["Skill Name", nameComparator],
  ["Skill Type", typeComparator],
  ["Project Count", projectCountComparator]
]);

export default class SkillsSection extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = {
      skills: cloneDeep(SKILLS)
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
      <section id="skills" className="content-section skills">
        <div className="container">
          <header>
            <h2>Skills</h2>

            <SkillSortSelector onChange={this.handleSort} />
          </header>

          <div className="skill-list">
            {skills.map((skill: Skill) => (
              <SkillCard skill={skill} key={skill.name} />
            ))}
          </div>
        </div>
      </section>
    );
  }
}
