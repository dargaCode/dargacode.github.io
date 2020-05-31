import React from "react";
import PropTypes from "prop-types";

interface Props {
  preferredUrl?: string;
  defaultUrl: string;
  className?: string;
  children?: React.ReactNode;
}

export default function SiteOrGithubLink(props: Props): JSX.Element {
  const { preferredUrl, defaultUrl, className, children } = props;
  const hrefUrl = preferredUrl || defaultUrl;

  return (
    <a className={className} href={hrefUrl}>
      {children}
    </a>
  );
}

SiteOrGithubLink.propTypes = {
  preferredUrl: PropTypes.string,
  defaultUrl: PropTypes.string.isRequired,
  className: PropTypes.string
};

SiteOrGithubLink.defaultProps = {
  preferredUrl: undefined,
  className: undefined
};
