import React from "react";
import PropTypes from "prop-types";
import { SKILL_SORT_OPTIONS } from "./skillsUtils";
import "../../base/_base.scss";
import styles from "./SkillSortSelector.module.scss";

interface Props {
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

function getOptions(sortOptions: string[]): JSX.Element[] {
  return sortOptions.map((sortOption: string) => {
    return <option key={sortOption}>{sortOption}</option>;
  });
}

export default function SkillSortSelector(props: Props): JSX.Element {
  const { onChange } = props;

  return (
    <form className={styles.sortSelectorForm}>
      <label htmlFor="skill-sort">
        Sort by:
        <select
          id="skill-sort"
          defaultValue={SKILL_SORT_OPTIONS[0]}
          onChange={onChange}
        >
          {getOptions(SKILL_SORT_OPTIONS)}
        </select>
      </label>
    </form>
  );
}

SkillSortSelector.propTypes = {
  onChange: PropTypes.func.isRequired
};
