import React from "react";
import PropTypes from "prop-types";

import { Resource } from "./ResourcesUtils";
import styles from "./ResourceLink.module.scss";
// eslint-disable-next-line css-modules/no-unused-class
import icons from "../../fonts/icons.module.scss";

interface Props {
  resource: Resource;
}

export default function ResourceLink(props: Props): JSX.Element {
  const { resource } = props;
  const { href, displayName, iconClass } = resource;

  return (
    <a href={href} className={styles.resourceLink}>
      <i className={icons[iconClass]} />
      <h4 className={styles.name}>{displayName}</h4>
    </a>
  );
}

ResourceLink.propTypes = {
  resource: PropTypes.shape({
    displayName: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    iconClass: PropTypes.string.isRequired
  }).isRequired
};
