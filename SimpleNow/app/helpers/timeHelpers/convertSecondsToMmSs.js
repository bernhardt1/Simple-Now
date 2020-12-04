function pad(num) {
  return ('0' + num).slice(-2);
}

const convertSecondsToMmSs = (seconds) => {
  if (seconds <= 0) return '00:00';

  const hours = Math.floor(seconds / 3600);

  let minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  minutes = minutes % 60;

  const result = `${pad(hours)}:${pad(minutes)}:${pad(secs)}`;

  return result;
};

export default convertSecondsToMmSs;
