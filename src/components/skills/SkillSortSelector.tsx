import React from "react";
import PropTypes from "prop-types";
import { SKILL_SORT_OPTIONS } from "./SkillConstants";

export default function SkillSortSelector(): JSX.Element {
  return (
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
  );
}

SkillSortSelector.propTypes = {};
