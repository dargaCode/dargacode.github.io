import React from "react";
import { Resource } from "./ResourcesUtils";
import styles from "./ResourceLink.module.scss";

interface Props {
  resource: Resource;
}

export default function ResourceLink(props: Props): JSX.Element {
  const { resource } = props;
  const { href, displayName, iconClass } = resource;

  return (
    <li className={styles.button}>
      <a href={href} className={styles.link}>
        <i className={iconClass} />
        <h2 className={styles.name}>{displayName}</h2>
      </a>
    </li>
  );
}
