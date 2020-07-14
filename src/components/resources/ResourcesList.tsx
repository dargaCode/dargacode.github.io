import React from "react";
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
