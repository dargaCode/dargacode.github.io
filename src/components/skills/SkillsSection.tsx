import React from "react";
import cloneDeep from "clone-deep";
import SkillCard from "./SkillCard";
import SkillSortSelector from "./SkillSortSelector";
import { SKILLS, Skill } from "./skillData";
import "../_general.scss";
import "./_skills.scss";

interface State {
  skills: Skill[];
}

export default class SkillsSection extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = {
      skills: cloneDeep(SKILLS)
    };
  }

  handleSort = (): void => {
    const { skills } = this.state;

    this.setState({ skills: skills.reverse() });
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
