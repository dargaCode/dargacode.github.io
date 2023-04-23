import React, { useState } from "react";
import PropTypes from "prop-types";
import Loading from "../loading/Loading";
import SkillCard from "./SkillCard";
import SkillSortSelector from "./SkillSortSelector";
import "../../config/_general.scss";
import styles from "./SkillsSection.module.scss";
import {
  Skill,
  SkillSortComparator,
  SkillComparatorDisplayNames,
  COMPARATORS_MAP
} from "./skillsUtils";
import { Error } from "../error/errorUtils";

interface Props {
  loading: boolean;
  error: Error;
  skills: Skill[];
}

function getSkillCards(skills: Skill[]): JSX.Element[] {
  return skills.map(skill => <SkillCard skill={skill} key={skill.name} />);
}

export default function SkillsSection(props: Props): JSX.Element {
  const { loading, error, skills } = props;

  const [currentSort, setCurrentSort] = useState(
    SkillComparatorDisplayNames.DATE
  );

  function getContent(): JSX.Element | JSX.Element[] {
    if (loading) {
      return <Loading />;
    }

    if (error) {
      return (
        // TODO add a real error component
        // eslint-disable-next-line spellcheck/spell-checker
        <div className="error" style={{ fontSize: "20px", color: "red" }}>
          {error.message}
        </div>
      );
    }

    const sortComparator = COMPARATORS_MAP.get(
      currentSort
    ) as SkillSortComparator;

    const sortedSkills = skills.sort(sortComparator);

    return getSkillCards(sortedSkills);
  }

  function handleChangeSkillSort(
    event: React.ChangeEvent<HTMLSelectElement>
  ): void {
    setCurrentSort(event.target.value as SkillComparatorDisplayNames);
  }

  return (
    <section className={styles.contentSection}>
      <div className={styles.container}>
        <header>
          <h2>Skills</h2>

          <SkillSortSelector
            disabled={loading}
            onChange={handleChangeSkillSort}
          />
        </header>
        <div className={styles.list}>{getContent()}</div>
      </div>
    </section>
  );
}

SkillsSection.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.shape({
    message: PropTypes.string
  }),
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      displayName: PropTypes.string.isRequired,
      repoCount: PropTypes.number.isRequired
    })
  ).isRequired
};

SkillsSection.defaultProps = {
  loading: false,
  error: undefined
};
