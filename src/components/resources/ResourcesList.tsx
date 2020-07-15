import React from "react";
import PropTypes from "prop-types";
import ResourceLink from "./ResourceLink";
import { Resource } from "./ResourcesUtils";
import styles from "./ResourcesList.module.scss";

interface Props {
  resources: Resource[];
}

export default function ResourcesList(props: Props): JSX.Element {
  const { resources } = props;

  return (
    <div className={styles.list}>
      {resources.map(resource => (
        <ResourceLink resource={resource} key={resource.displayName} />
      ))}
    </div>
  );
}

ResourcesList.propTypes = {
  resources: PropTypes.arrayOf(
    PropTypes.shape({
      displayName: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      iconClass: PropTypes.string.isRequired
    })
  ).isRequired
};
