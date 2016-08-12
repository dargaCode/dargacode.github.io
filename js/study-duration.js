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

let durationObject = {
  remainingDays: null,
  year: {
    count: null,
    string: 'year',
  },
  month: {
    count: null,
    string: 'month',
  },
  day: {
    count: null,
    string: 'day',
  },
};

// FUNCTIONS

function getDurationString(unit) {
  const unitString = durationObject[unit].string;
  console.log('unit', unit, getPluralizedUnit(unitString));
  return getPluralizedUnit(unitString);
}

function getPluralizedUnit(unit) {
  const count = durationObject[unit].count;
  // only works for simplest plural type
  const pluralizedUnit = count === 1 ? unit : unit + 's';
  return pluralizedUnit;
}

// MAIN

//get elapsed years
durationObject.remainingDays = TOTAL_ELAPSED_DAYS;
console.log('starting days', durationObject.remainingDays);
const elapsedYears = Math.floor(durationObject.remainingDays / DAYS_PER_YEAR);
durationObject.year.count = elapsedYears;


// get year remainder
console.log('elapsed years', elapsedYears);
durationObject.remainingDays = durationObject.remainingDays % DAYS_PER_YEAR;
console.log('days after years', durationObject.remainingDays);


//get elapsed months
const elapsedMonths = Math.floor(durationObject.remainingDays / DAYS_PER_MONTH);
durationObject.month.count = elapsedMonths;

console.log('elapsed months', elapsedMonths);

//get month remainder
// round down to leave 0 days when a month rolls over
durationObject.remainingDays = Math.floor(durationObject.remainingDays % DAYS_PER_MONTH);


durationObject.day.count = durationObject.remainingDays;
console.log('elapsedDays', durationObject.remainingDays);

const yearString = getDurationString('year');
const monthString = getDurationString('month');
const dayString = getDurationString('day');

const durationString = yearString + ', ' + monthString + ', and ' + dayString;



DurationSpan.innerText = durationString;


