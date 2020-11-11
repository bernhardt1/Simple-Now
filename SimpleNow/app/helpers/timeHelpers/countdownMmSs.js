import Moment from 'moment';
import convertMmSstoSeconds from './convertMmSsToSeconds';
import convertSecondsToMmSs from './convertSecondsToMmSs';

const countdownMmSs = (mmSs) => {
  const seconds = convertMmSstoSeconds(mmSs);
  const secondsLeft = seconds - 1;

  return convertSecondsToMmSs(secondsLeft);
};

export default countdownMmSs;
