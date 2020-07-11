import React from "react";
import PropTypes from "prop-types";
import "../../config/_general.scss";
import reactMomentPropTypes from "react-moment-proptypes";
import { startCase } from "lodash";
import { Skill, SKILL_URL_PREFIX } from "./skillsUtils";
import styles from "./SkillCard.module.scss";
// eslint-disable-next-line css-modules/no-unused-class
import icons from "../../fonts/icons.module.scss";

export default function SkillCard(props: { skill: Skill }): JSX.Element {
  const { skill } = props;
  const { name, displayName, repoCount, timeSinceCommit } = skill;
  const iconClass = `icon${startCase(skill.name)}`;

  return (
    <a href={SKILL_URL_PREFIX + name}>
      <article className={styles.card}>
        <p className={styles.timeSinceCommit}>{timeSinceCommit}</p>
        <i className={icons[iconClass]} />
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
    repoCount: PropTypes.number.isRequired,
    lastCommitTime: reactMomentPropTypes.momentObject,
    timeSinceCommit: PropTypes.string
  }).isRequired
};
