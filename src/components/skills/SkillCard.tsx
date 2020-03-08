import React from "react";
import PropTypes from "prop-types";
import "../_general.scss";
import "./_skills.scss";

interface Props {
  skill: {
    name: string;
    iconClass: string;
    type: string;
    projectCount: number;
    url: string;
  };
}

export default function SkillCard(props: Props): JSX.Element {
  const { skill } = props;
  const { name, iconClass, type, projectCount, url } = skill;

  return (
    <a href={url}>
      <article className="skill-card">
        <p className="skill-type">{type}</p>
        <i className={iconClass} />
        <h3 className="skill-name">{name}</h3>
        <p className="skill-project-count">{projectCount} Projects</p>
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