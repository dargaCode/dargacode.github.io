import React from "react";
import PropTypes from "prop-types";
import {
  yearsMonthsDays,
  STUDY_START_DATE,
  DATE_TODAY
} from "./studyDurationUtils";
import DurationUnit from "./DurationUnit";
import "../../config/_general.scss";

interface Props {
  startDate: string;
  endDate: string;
}

export default function StudyDuration(props: Props): JSX.Element {
  const { startDate, endDate } = props;
  const { years, months, days } = yearsMonthsDays(startDate, endDate);

  return (
    <p>
      It&apos;s been
      <DurationUnit unit="year" count={years} />,
      <DurationUnit unit="month" count={months} />, and
      <DurationUnit unit="day" count={days} /> since I quit my job to study
      coding!
    </p>
  );
}

StudyDuration.propTypes = {
  startDate: PropTypes.string,
  endDate: PropTypes.string
};

StudyDuration.defaultProps = {
  startDate: STUDY_START_DATE,
  endDate: DATE_TODAY
};
