import React from "react";
import SkillCard from "./SkillCard";
import { SKILLS } from "./skillsData";
import "../_general.scss";
import "./_skills.scss";

export default function AboutSection(): JSX.Element {
  return (
    <section id="skills" className="content-section skills">
      <div className="container">
        <header>
          <h2>Skills</h2>

          <form>
            <label htmlFor="skill-sort">
              Sort by:
              <select id="skill-sort" defaultValue="Skill Type">
                <option>Skill Name</option>
                <option>Skill Type</option>
                <option>Project Count</option>
              </select>
            </label>
          </form>
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
