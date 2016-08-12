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
    count: null,
    string: 'year',
    daysPerUnit: DAYS_PER_YEAR,
  },
  month: {
    count: null,
    string: 'month',
    daysPerUnit: DAYS_PER_MONTH,
  },
  day: {
    count: null,
    string: 'day',
    daysPerUnit: 1,
  },
};

// FUNCTIONS

function generateUnitCounts() {
  for (let unit in durationObject) {
    const daysPerUnit = durationObject[unit].daysPerUnit;
    const unitCount = Math.floor(remainingDays / daysPerUnit);
    const remainder = TOTAL_ELAPSED_DAYS % daysPerUnit;
    console.log(unit, unitCount, remainder);
    durationObject[unit].count =unitCount
    remainingDays = remainder;
  }
}

function getDurationString(unit) {
  const unitString = durationObject[unit].string;
  console.log('unit', unit, getPluralizedUnit(unitString));
  return getPluralizedUnit(unitString);
}

function getPluralizedUnit(unit) {
  const count = durationObject[unit].count;
  // only works for simplest type of plurals, but that's fine for generating y/m/d duration.
  const pluralizedUnit = count === 1 ? unit : unit + 's';
  return pluralizedUnit;
}

// MAIN

console.log('starting days', remainingDays);

const yearString = getDurationString('year');
const monthString = getDurationString('month');
const dayString = getDurationString('day');

const durationString = yearString + ', ' + monthString + ', and ' + dayString;

generateUnitCounts();

DurationSpan.innerText = durationString;


