// import moment from 'moment';
const moment = require.requireActual('moment'); // <- Jest method to create mocked version of library

export default (timestamp = 0) => {
  return moment(timestamp);
};
