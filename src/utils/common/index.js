/* eslint-disable import/prefer-default-export */
import moment from 'moment-timezone';

const getFormattedDateFromUtcDate = (utcDate, timezone) => {
  const formattedDate = moment.utc(utcDate);

  return formattedDate.tz(timezone).format('DD MMM YYYY, HH:mm z');
};

export default getFormattedDateFromUtcDate;
