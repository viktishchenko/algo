/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                              *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates#Date_object
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date     *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Parses a rfc2822 string date representation into date value
 * For rfc2822 date specification refer to : http://tools.ietf.org/html/rfc2822#page-14
 *
 * @param {string} value
 * @return {date}
 *
 * @example:
 *    'December 17, 1995 03:24:00'    => new  Date()
 *    'Tue, 26 Jan 2016 13:48:02 GMT' => new  Date()
 *    'Sun, 17 May 1998 03:00:00 GMT+01' => new  Date()
 */
function parseDataFromRfc2822(value) {
  return new Date(value);
}

/**
 * Parses an ISO 8601 string date representation into date value
 * For ISO 8601 date specification refer to : https://en.wikipedia.org/wiki/ISO_8601
 *
 * @param {string} value
 * @return {date}
 *
 * @example :
 *    '2016-01-19T16:07:37+00:00'    => new  Date()
 *    '2016-01-19T08:07:37Z' => new  Date()
 */
function parseDataFromIso8601(value) {
  return new Date(value);
}

/**
 * Returns true if specified date is leap year and false otherwise
 * Please find algorithm here: https://en.wikipedia.org/wiki/Leap_year#Algorithm
 *
 * @param {date} date
 * @return {bool}
 *
 * @example :
 *   new Date(1900,1,1)    => false
 *   new Date(2000,1,1)    => true
 *   new Date(2001,1,1)    => false
 *   new Date(2012,1,1)    => true
 *   new Date(2015,1,1)    => false
 */
function isLeapYear(date) {
  const year = date.getFullYear();
  let leaps = year % 4 === 0 && year % 100 === 0 && year % 400 === 0;
  return leaps ? true : false;
}

/**
 * Returns the string representation of the timespan between two dates.
 * The format of output string is "HH:mm:ss.sss"
 *
 * @param {date} startDate
 * @param {date} endDate
 * @return {string}
 *
 * @example:
 *    new  Date(2000,1,1,10,0,0),  new  Date(2000,1,1,11,0,0)   => "01:00:00.000"
 *    new  Date(2000,1,1,10,0,0),  new  Date(2000,1,1,10,30,0)       => "00:30:00.000"
 *    new  Date(2000,1,1,10,0,0),  new  Date(2000,1,1,10,0,20)        => "00:00:20.000"
 *    new  Date(2000,1,1,10,0,0),  new  Date(2000,1,1,10,0,0,250)     => "00:00:00.250"
 *    new  Date(2000,1,1,10,0,0),  new  Date(2000,1,1,15,20,10,453)   => "05:20:10.453"
 */
function timeSpanToString(startDate, endDate) {
  let hours = (endDate.getHours() - startDate.getHours())
    .toString()
    .padStart(2, 0);
  let minutes = (endDate.getMinutes() - startDate.getMinutes())
    .toString()
    .padStart(2, 0);
  let seconds = (endDate.getSeconds() - startDate.getSeconds())
    .toString()
    .padStart(2, 0);
  let milliseconds = (endDate.getMilliseconds() - startDate.getMilliseconds())
    .toString()
    .padStart(3, 0);

  return `${hours}:${minutes}:${seconds}.${milliseconds}`;
  /* 
  let date = (endDate - startDate) / 3600000;
  let hours = parseInt(date);
  let minutes = parseInt((date - hours) * 60);
  let seconds = parseInt(((date - hours) * 60 - minutes) * 60);
  let milliseconds = parseInt(
    (((date - hours) * 60 - minutes) * 60 - seconds) * 1000
  );

  function addZero(num, idx) {
    if (num < 10 && idx === 1) {
      return "0" + num;
    }
    if (num < 10 && idx !== 1) {
      return "00" + num;
    }
    if (num > 99 && idx !== 1) {
      return num;
    }
    if (9 < num < 99 && idx !== 1) {
      return "0" + num;
    }
    return num;
  }
  return `${addZero(hours, 1)}:${addZero(minutes, 1)}:${addZero(
    seconds,
    1
  )}.${addZero(milliseconds, 2)}`; */
}

/**
 * Returns the angle (in radians) between the hands of an analog clock
 * for the specified Greenwich time.
 * If you have problem with solution please read: https://en.wikipedia.org/wiki/Clock_angle_problem
 *
 * SMALL TIP: convert to radians just once, before return in order to not lost precision
 *
 * @param {date} date
 * @return {number}
 *
 * @example:
 *    new  Date.UTC(2016,2,5, 0, 0) => 0
 *    new  Date.UTC(2016,3,5, 3, 0) => Math.PI/2
 *    new  Date.UTC(2016,3,5,18, 0) => Math.PI
 *    new  Date.UTC(2016,3,5,21, 0) => Math.PI/2
 */
function angleBetweenClockHands(/* date */) {
  throw new Error("Not implemented");
}
