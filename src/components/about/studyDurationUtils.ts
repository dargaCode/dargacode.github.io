import moment from "moment";

const DATE_FORMAT = "YYYY-MM-DD";

interface YearsMonthsDaysReturn {
  years: number;
  months: number;
  days: number;
}

// eslint-disable-next-line import/prefer-default-export
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

  // For monthly anniversaries, it's noticeably weird not to see "x months, 0 days".
  // Overriding Moment's calculation here, even if that may result in the same
  // output on 2 consecutive days.
  if (start.date() === end.date() && result.days > 0) {
    if (result.days > 15) {
      result.months += 1;
    } else {
      result.months -= 1;
    }

    result.days = 0;
  }

  return result;
}
