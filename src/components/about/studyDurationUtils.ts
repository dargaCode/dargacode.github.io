import moment from "moment";
import { DATE_FORMAT } from "../../utils/dateConstants";

export const STUDY_START_DATE = "2015-05-10";
export const DATE_TODAY = moment().format(DATE_FORMAT);

interface YearsMonthsDaysReturn {
  years: number;
  months: number;
  days: number;
}

export function yearsMonthsDays(
  startDate: string,
  endDate: string
): YearsMonthsDaysReturn {
  const start = moment(startDate, DATE_FORMAT);
  const end = moment(endDate, DATE_FORMAT);
  const duration = moment.duration(end.diff(start));

  const result: YearsMonthsDaysReturn = {
    years: duration.years(),
    months: duration.months(),
    days: duration.days()
  };

  // for monthly anniversaries, it's noticeably weird not to see "x months, 0 days".
  // overriding Moment's calculation here, even if that may result in the same
  // output on 2 consecutive days.
  if (start.date() === end.date() && result.days > 0) {
    if (result.days > 15) {
      result.months += 1;
    }

    result.days = 0;
  }

  return result;
}
