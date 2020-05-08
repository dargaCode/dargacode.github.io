import React from "react";
import PropTypes from "prop-types";
import "../../_general.scss";
import styles from "./SkillCard.styles.scss";
import { Skill } from "./skillsUtils";

export default function SkillCard(props: { skill: Skill }): JSX.Element {
  const { skill } = props;
  const { name, iconClass, type, projectCount, url } = skill;

  return (
    <a href={url}>
      <article className={styles.skillCard}>
        <p className={styles.skillType}>{type}</p>
        <i className={iconClass} />
        <h3 className={styles.skillName}>{name}</h3>
        <p className={styles.skillProjectCount}>
          {projectCount} Project{projectCount === 1 ? "" : "s"}
        </p>
      </article>
    </a>
  );
}

SkillCard.propTypes = {
  skill: PropTypes.shape({
    name: PropTypes.string.isRequired,
    iconClass: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    projectCount: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired
  }).isRequired
};
