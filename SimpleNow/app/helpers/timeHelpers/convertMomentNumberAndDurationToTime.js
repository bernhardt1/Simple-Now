// ONLY ACCEPTS FORMAT HH:MM:SS
const convertMomentNumberAndDurationToTime = (numberMoments, duration) => {
  let timeUnit = 's';
  let durationSplit = duration.split('s');

  if (durationSplit.length <= 1) {
    timeUnit = 'm';
    durationSplit = duration.split('m');
  }

  const timeAmount = durationSplit[0];

  if (timeUnit === 's') {
    const val = timeAmount * numberMoments;

    if (val >= 60) {
      return val / 60;
    } else {
      return val;
    }
  } else {
    return numberMoments * timeAmount;
  }
};

export default convertMomentNumberAndDurationToTime;
