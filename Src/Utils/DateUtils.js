import moment from 'moment-timezone';

export const getTimestamp = timestamp => formatTimestamp(timestamp,'Australia/Sydney', 'DD/MM/YYYY h:mma z');

export const getTimestampWithSeperator = (timestamp,seperator='|') => formatTimestamp(timestamp,'Australia/Sydney', `DD-MM-YYYY ${seperator}h:mm a z`);

export const getDateTimestamp = timestamp => formatTimestamp(timestamp,'Australia/Sydney', 'DD/MM/YYYY');

export const getTodayDate = getDateTimestamp(moment());

export const formatTimestamp =(timestamp,timezone,format) => timestamp ? moment.tz(timestamp,timezone).format(format): '';

export const removeAustralianEasternTime = timestamp => moment.tz(timnestamp,'Australia/Sydney').isDST() ? 
moment.utc(timestamp).subtract(11, 'hours'):moment.utc(timestamp).subtract(10, 'hours');

export const getDiffInDays = (from,to) => moment(to).diff(moment(from),'days');

export const getAsFormatDate = (date,format) => moment(date,format).toDate();

export const getSydneyTimeFromUTC = utcDate => moment.utc(utcDate).tz('Australia/Sydney').format('YYYY-MM_DD HH:mm:ss');
