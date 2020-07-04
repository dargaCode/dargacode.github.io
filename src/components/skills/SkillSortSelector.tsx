import React from "react";
import PropTypes from "prop-types";
import { SKILL_SORT_OPTIONS } from "./skillsUtils";
import "../../config/_general.scss";
import styles from "./SkillSortSelector.module.scss";

interface Props {
  disabled: boolean;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

function getOptions(sortOptions: string[]): JSX.Element[] {
  return sortOptions.map((sortOption: string) => {
    return <option key={sortOption}>{sortOption}</option>;
  });
}

export default function SkillSortSelector(props: Props): JSX.Element {
  const { disabled, onChange } = props;

  return (
    <form className={styles.sort}>
      <label htmlFor="skill-sort">
        Sort by:
        <select
          id="skill-sort"
          defaultValue={SKILL_SORT_OPTIONS[0]}
          onChange={onChange}
          disabled={disabled}
        >
          {getOptions(SKILL_SORT_OPTIONS)}
        </select>
      </label>
    </form>
  );
}

SkillSortSelector.propTypes = {
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired
};

SkillSortSelector.defaultProps = {
  disabled: false
};
