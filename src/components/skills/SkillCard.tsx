import React from "react";
import PropTypes from "prop-types";
import "../../config/_general.scss";
import styles from "./SkillCard.module.scss";
import { Skill, SKILL_URL_PREFIX } from "./skillsUtils";

export default function SkillCard(props: { skill: Skill }): JSX.Element {
  const { skill } = props;
  const { displayName, iconClass, type, projectCount, name } = skill;

  return (
    <a href={SKILL_URL_PREFIX + name}>
      <article className={styles.card}>
        <p className={styles.type}>{type}</p>
        <i className={iconClass} />
        <h3 className={styles.name}>{displayName}</h3>
        <p className={styles.projectCount}>
          {projectCount} Project{projectCount === 1 ? "" : "s"}
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
    type: PropTypes.string.isRequired,
    projectCount: PropTypes.number.isRequired
  }).isRequired
};
