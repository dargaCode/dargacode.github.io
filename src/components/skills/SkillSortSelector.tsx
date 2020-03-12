import React from "react";
import PropTypes from "prop-types";
import { SKILL_SORT_OPTIONS } from "./SkillConstants";

export default function SkillSortSelector(): JSX.Element {
  function getOptions(sortOptions: string[]): JSX.Element[] {
    return sortOptions.map((sortOption: string) => {
      return <option key={sortOption}>{sortOption}</option>;
    });
  }

  return (
    <form>
      <label htmlFor="skill-sort">
        Sort by:
        <select id="skill-sort" defaultValue={SKILL_SORT_OPTIONS[0]}>
          {getOptions(SKILL_SORT_OPTIONS)}
        </select>
      </label>
    </form>
  );
}

SkillSortSelector.propTypes = {};
