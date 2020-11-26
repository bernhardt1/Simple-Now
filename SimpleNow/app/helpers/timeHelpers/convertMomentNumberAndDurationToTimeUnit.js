// ONLY ACCEPTS FORMAT HH:MM:SS
const convertMomentNumberAndDurationToTimeUnit = (numberMoments, duration) => {
  let timeUnit = 's';
  let durationSplit = duration.split('s');

  if (durationSplit.length <= 1) {
    timeUnit = 'm';
    durationSplit = duration.split('m');
  }

  const timeAmount = durationSplit[0];

  if (timeUnit === 's') {
    const val = timeAmount * numberMoments;

    if (val === 60) {
      return 'minute';
    } else if (val > 60) {
      return 'minutes';
    } else {
      return 'seconds';
    }
  } else {
    return 'minutes';
  }
};

export default convertMomentNumberAndDurationToTimeUnit;
