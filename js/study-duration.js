'use strict'; // enable 'let'

// CONSTANTS

const MILLISECONDS_PER_DAY = 86400000;
const DAYS_PER_YEAR = 365.25;
const MONTHS_PER_YEAR = 12;
const DAYS_PER_MONTH = DAYS_PER_YEAR / MONTHS_PER_YEAR;

const NOW = new Date();
const START_DATE = new Date('May 10, 2015');

const ELAPSED_MILLISECONDS = NOW - START_DATE;
// Round down to start counting days from 0
const TOTAL_ELAPSED_DAYS = Math.floor(ELAPSED_MILLISECONDS / MILLISECONDS_PER_DAY);

// SELECTORS

const DurationSpan = document.querySelector('#study-duration');

// VARIABLES

let remainingDays = TOTAL_ELAPSED_DAYS;

let durationObject = {
  year: {
    daysPerUnit: DAYS_PER_YEAR,
    count: null,
    string: 'year',
    html: '',
  },
  month: {
    daysPerUnit: DAYS_PER_MONTH,
    count: null,
    string: 'month',
    html: '',
  },
  day: {
    daysPerUnit: 1,
    count: null,
    string: 'day',
    html: '',
  },
};

// FUNCTIONS

function updateUnitCounts() {
  for (let unit in durationObject) {
    const daysPerUnit = durationObject[unit].daysPerUnit;
    const unitCount = Math.floor(remainingDays / daysPerUnit);
    const remainder = TOTAL_ELAPSED_DAYS % daysPerUnit;
    console.log(unit, 'count', unitCount, 'remainder', remainder);
    durationObject[unit].count =unitCount
    remainingDays = remainder;
  }
}

function updateUnitStrings() {
  for (let unit in durationObject) {
    durationObject[unit].string = getDurationString(unit);
  }
}

function updateUnitHtmlStrings() {
  for (let unit in durationObject) {
    durationObject[unit].html = getHtmlString(unit);
  }
}

function renderFinalDuration() {
  const durationHtml = generateFinalDuration();
  DurationSpan.innerHTML = durationHtml;
}

// HELPER FUNCTIONS

function getDurationString(unit) {
  const unitString = durationObject[unit].string;
  return getPluralUnitString(unitString);
}

function getPluralUnitString(unit) {
  const count = durationObject[unit].count;
  unit = count === 1 ? unit : pluralizeWord(unit);
  return unit;
}

function pluralizeWord(unit) {
  // only works for simplest type of plurals, but that's fine for generating y/m/d duration.
  return unit + 's';
}

function getHtmlString(unit) {
  const count = durationObject[unit].count;
  const string = durationObject[unit].string;

  return `<span>${count}</span> ${string}`;
}

function generateFinalDuration() {
  const yearHtml = durationObject.year.html;
  const monthHtml = durationObject.month.html;
  const dayHtml = durationObject.day.html;

  return `${yearHtml}, ${monthHtml}, and ${dayHtml}`;
}

// MAIN

console.log('starting days', remainingDays);

updateUnitCounts();
updateUnitStrings();
updateUnitHtmlStrings();
renderFinalDuration();
