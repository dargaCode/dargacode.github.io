import React from "react";
import SkillCard from "./SkillCard";
import SkillSortSelector from "./SkillSortSelector";
import { SKILLS } from "./skillsData";
import "../_general.scss";
import "./_skills.scss";

export default function AboutSection(): JSX.Element {
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
