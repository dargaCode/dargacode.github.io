import React from "react";
import PropTypes from "prop-types";
import "../../config/_general.scss";
import styles from "./SkillCard.module.scss";
import { Skill, SKILL_URL_PREFIX } from "./skillsUtils";

// eslint-disable-next-line spellcheck/spell-checker,@typescript-eslint/no-var-requires
const ReactMomentPropTypes = require("react-moment-proptypes");

export default function SkillCard(props: { skill: Skill }): JSX.Element {
  const { skill } = props;
  const { name, displayName, iconClass, repoCount, timeSinceCommit } = skill;

  return (
    <a href={SKILL_URL_PREFIX + name}>
      <article className={styles.card}>
        <p className={styles.timeSinceCommit}>{timeSinceCommit}</p>
        <i className={iconClass} />
        <h3 className={styles.name}>{displayName}</h3>
        <p className={styles.repoCount}>
          {repoCount} Repo{repoCount === 1 ? "" : "s"}
        </p>
      </article>
    </a>
  );
}

SkillCard.propTypes = {
  skill: PropTypes.shape({
    name: PropTypes.string.isRequired,
    displayName: PropTypes.string.isRequired,
    iconClass: PropTypes.string.isRequired,
    repoCount: PropTypes.number.isRequired,
    timeSinceCommit: PropTypes.string
  }).isRequired
};
