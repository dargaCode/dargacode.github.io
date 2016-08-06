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

// FUNCTIONS

function getPluralizedUnitString(count, unit) {
  // only works for simplest plural type
  const pluralizedUnit = count === 1 ? unit : unit + 's';
  return count.toString() + ' ' + pluralizedUnit;
}

// MAIN

//get elapsed years
let remainingDays = TOTAL_ELAPSED_DAYS;
console.log('starting days', remainingDays);
const elapsedYears = Math.floor(remainingDays / DAYS_PER_YEAR);
console.log('elapsed years', elapsedYears);
remainingDays = remainingDays % DAYS_PER_YEAR;
console.log('days after years', remainingDays);

//get elapsed months
const elapsedMonths = Math.floor(remainingDays / DAYS_PER_MONTH);
console.log('elapsed months', elapsedMonths);

//get elapsed days
// round down to leave 0 days when a month rolls over
remainingDays = Math.floor(remainingDays % DAYS_PER_MONTH);
console.log('elapsedDays', remainingDays);

const yearString = getPluralizedUnitString(elapsedYears, 'year');
const monthString = getPluralizedUnitString(elapsedMonths, 'month');
const dayString = getPluralizedUnitString(remainingDays, 'day');

const durationString = yearString + ', ' + monthString + ', and ' + dayString;



DurationSpan.innerText = durationString;


