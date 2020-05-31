import React from "react";
import PropTypes from "prop-types";
import "../../config/_general.scss";
import styles from "./DurationUnit.module.scss";

interface Props {
  unit: string;
  count: number;
}

export default function DurationUnit(props: Props): JSX.Element {
  const { count, unit } = props;

  return (
    <span>
      {" "}
      <span className={styles.count}>{count}</span> {unit}
      {count === 1 ? "" : "s"}
    </span>
  );
}

DurationUnit.propTypes = {
  unit: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired
};
