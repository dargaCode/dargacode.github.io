import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import ProjectLink from "./ProjectLink";
import "../../_general.scss";
import "./_projects.scss";

interface Props {
  project: {
    name: string;
    type: string;
    tags: string[];
    description: string;
    date: string;
    imageSrc: string;
    githubUrl: string;
    livePageUrl?: string;
  };
}

export default function ProjectCard(props: Props): JSX.Element {
  const { project } = props;
  const { name, type, description, imageSrc, githubUrl, livePageUrl } = project;
  const date = moment(project.date);
  const tags = project.tags.join(", ");

  return (
    <article className="project-card">
      <ProjectLink
        className="header-link"
        preferredUrl={livePageUrl}
        defaultUrl={githubUrl}
      >
        <h3>{name}</h3>
      </ProjectLink>
      <span className="type-span">{type}</span>
      <time dateTime={date.format("YYYY-MM-DD")}>
        {" "}
        - {date.format("MMM YYYY")}
      </time>
      <ProjectLink preferredUrl={livePageUrl} defaultUrl={githubUrl}>
        <img
          className={undefined}
          src={imageSrc}
          alt={`Project screenshot for ${name}`}
        />
      </ProjectLink>
      <span className="tags-span">{tags}</span>
      <p>{description}</p>
      <a className="project-link" href={githubUrl}>
        GitHub Repository
        <i className="fa fa-github" />
      </a>
      {livePageUrl && (
        <a className="project-link" href={livePageUrl}>
          Live Webpage
          <i className="fa fa-globe" />
        </a>
      )}
    </article>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    githubUrl: PropTypes.string.isRequired,
    livePageUrl: PropTypes.string
  }).isRequired
};
