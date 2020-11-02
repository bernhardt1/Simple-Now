const getDaysPastSinceStartTimestamp = (startTimestamp) => {
  const now = new Date();
  now.setHours(0, 0, 0, 0);

  const startTimestampDate = new Date(startTimestamp);
  startTimestampDate.setHours(0, 0, 0, 0);

  const millisecondsSinceStart = now - startTimestampDate;
  const daysSinceStart = millisecondsSinceStart / 1000 / 60 / 60 / 24;

  return daysSinceStart;
};

export default getDaysPastSinceStartTimestamp;
