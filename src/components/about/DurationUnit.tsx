import React from "react";
import PropTypes from "prop-types";
import "../_general.scss";
import "./_about.scss";

interface Props {
  unit: string;
  count: number;
}

export default function DurationUnit(props: Props): JSX.Element {
  const { count, unit } = props;

  return (
    <span>
      {" "}
      <span className="study-duration-unit-count">{count}</span> {unit}
      {count === 1 ? "" : "s"}
    </span>
  );
}

DurationUnit.propTypes = {
  unit: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired
};
