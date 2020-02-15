// anonymous module, since no surfaced values
(function studyDuration() {
  // CONSTANTS

  const MILLISECONDS_PER_DAY = 86400000;
  const DAYS_PER_YEAR = 365.25;
  const MONTHS_PER_YEAR = 12;
  const DAYS_PER_MONTH = DAYS_PER_YEAR / MONTHS_PER_YEAR;

  const NOW = new Date();
  const START_DATE = new Date("May 10, 2015");

  const ELAPSED_MILLISECONDS = NOW - START_DATE;
  // Round down to start counting days from 0
  const TOTAL_ELAPSED_DAYS = Math.floor(
    ELAPSED_MILLISECONDS / MILLISECONDS_PER_DAY
  );

  // SELECTORS

  const DurationSpan = document.querySelector("#study-duration");

  // VARIABLES

  let remainingDays = TOTAL_ELAPSED_DAYS;

  const durationObject = {
    year: {
      daysPerUnit: DAYS_PER_YEAR,
      count: null,
      string: "year",
      html: ""
    },
    month: {
      daysPerUnit: DAYS_PER_MONTH,
      count: null,
      string: "month",
      html: ""
    },
    day: {
      daysPerUnit: 1,
      count: null,
      string: "day",
      html: ""
    }
  };

  // FUNCTIONS

  function updateUnitCounts() {
    for (const unit in durationObject) {
      const { daysPerUnit } = durationObject[unit];
      const unitCount = Math.floor(remainingDays / daysPerUnit);
      const remainder = TOTAL_ELAPSED_DAYS % daysPerUnit;
      durationObject[unit].count = unitCount;
      remainingDays = remainder;
    }
  }

  function updateUnitStrings() {
    for (const unit in durationObject) {
      durationObject[unit].string = getDurationString(unit);
    }
  }

  function updateUnitHtmlStrings() {
    for (const unit in durationObject) {
      durationObject[unit].html = getHtmlString(unit);
    }
  }

  function renderFinalDuration() {
    DurationSpan.innerHTML = generateFinalDuration();
  }

  // HELPER FUNCTIONS

  function getDurationString(unit) {
    const unitString = durationObject[unit].string;
    return getPluralUnitString(unitString);
  }

  function getPluralUnitString(unit) {
    const { count } = durationObject[unit];
    unit = count === 1 ? unit : pluralizeWord(unit);
    return unit;
  }

  function pluralizeWord(unit) {
    // only works for simplest type of plurals, but that's fine for generating y/m/d duration.
    return `${unit}s`;
  }

  function getHtmlString(unit) {
    const { count, string } = durationObject[unit];

    return `<span>${count}</span> ${string}`;
  }

  function generateFinalDuration() {
    const yearHtml = durationObject.year.html;
    const monthHtml = durationObject.month.html;
    const dayHtml = durationObject.day.html;

    return `It's been ${yearHtml}, ${monthHtml}, and ${dayHtml} since`;
  }

  // MAIN

  updateUnitCounts();
  updateUnitStrings();
  updateUnitHtmlStrings();
  renderFinalDuration();
})();
