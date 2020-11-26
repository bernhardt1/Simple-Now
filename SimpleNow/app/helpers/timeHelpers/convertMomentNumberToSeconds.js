// ONLY ACCEPTS FORMAT HH:MM:SS
const convertMomentNumberToSeconds = (duration) => {
  let timeUnit = 's';
  let durationSplit = duration.split('s');

  if (durationSplit.length <= 1) {
    timeUnit = 'm';
    durationSplit = duration.split('m');
  }

  const timeAmount = durationSplit[0];

  if (timeUnit === 's') {
    return timeAmount * 1;
  } else {
    return 60 * timeAmount;
  }
};

export default convertMomentNumberToSeconds;
