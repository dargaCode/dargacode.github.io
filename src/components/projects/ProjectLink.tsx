import React from "react";
import PropTypes from "prop-types";

interface Props {
  preferredUrl: string;
  defaultUrl: string;
  children?: React.ReactNode;
}

export default function ProjectLink(props: Props): JSX.Element {
  const { preferredUrl, defaultUrl, children } = props;
  const hrefUrl = preferredUrl || defaultUrl;

  return <a href={hrefUrl}> {children} </a>;
}

ProjectLink.propTypes = {
  preferredUrl: PropTypes.string,
  defaultUrl: PropTypes.string.isRequired
};

ProjectLink.defaultProps = {
  preferredUrl: undefined
};
