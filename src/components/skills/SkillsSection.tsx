import React from "react";

export default function AboutSection(): JSX.Element {
  return (
    <section id="skills" className="content-section skills">
      <div className="container">
        <header>
          <h2>Skills</h2>

          <form>
            <label htmlFor="skill-sort">
              Sort by:
              <select id="skill-sort">
                <option>Skill Name</option>
                <option selected>Skill Type</option>
                <option>Project Count</option>
              </select>
            </label>
          </form>
        </header>

        <div className="skill-list">
          {/* JavaScript fills this div with skills */}
        </div>
      </div>
    </section>
  );
}
