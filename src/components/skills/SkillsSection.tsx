import React from "react";
import SkillCard from "./SkillCard";
import SkillSortSelector from "./SkillSortSelector";
import { SKILLS } from "./skillData";
import "../_general.scss";
import "./_skills.scss";

export default class AboutSection extends React.Component {
  constructor(props: {}) {
    super(props);
  }

  render(): JSX.Element {
    return (
      <section id="skills" className="content-section skills">
        <div className="container">
          <header>
            <h2>Skills</h2>

            <SkillSortSelector onChange={() => null} />
          </header>

          <div className="skill-list">
            {SKILLS.map(skill => (
              <SkillCard skill={skill} key={skill.name} />
            ))}
          </div>
        </div>
      </section>
    );
  }
}
