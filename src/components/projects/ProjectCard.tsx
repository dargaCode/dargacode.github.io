import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import SiteOrGithubLink from "./SiteOrGithubLink";
import "../../config/_general.scss";
import styles from "./ProjectCard.module.scss";

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

const DATETIME_FORMAT = "YYYY-MM-DD";
const MONTH_YEAR_FORMAT = "MMM YYYY";

export default function ProjectCard(props: Props): JSX.Element {
  const { project } = props;
  const { name, type, description, imageSrc, githubUrl, livePageUrl } = project;
  const date = moment(project.date);
  const tags = project.tags.join(", ");

  return (
    <article className={styles.card}>
      <SiteOrGithubLink preferredUrl={livePageUrl} defaultUrl={githubUrl}>
        <h3>{name}</h3>
      </SiteOrGithubLink>
      <span className={styles.type}>{type}</span>
      <time dateTime={date.format(DATETIME_FORMAT)}>
        {" "}
        - {date.format(MONTH_YEAR_FORMAT)}
      </time>
      <SiteOrGithubLink preferredUrl={livePageUrl} defaultUrl={githubUrl}>
        <img
          className={undefined}
          src={imageSrc}
          alt={`Project screenshot for ${name}`}
        />
      </SiteOrGithubLink>
      <span className={styles.tags}>{tags}</span>
      <p>{description}</p>
      <a className={styles.linkContainer} href={githubUrl}>
        GitHub Repository
        <i className="fa fa-github" />
      </a>
      {livePageUrl && (
        <a className={styles.linkContainer} href={livePageUrl}>
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
