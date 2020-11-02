const convertReminderTimeToISODate = (
  reminderTime,
  daysPastSinceStartTimestamp,
  claIndex,
) => {
  const now = new Date();
  now.setHours(0, 0, 0, 0);

  const classDate = new Date(
    now.getTime() +
      (claIndex - daysPastSinceStartTimestamp) * 1000 * 60 * 60 * 24,
  );

  const hours = parseInt(reminderTime?.split(':')[0], 10);
  const minutes = parseInt(reminderTime?.split(':')[1], 10);

  classDate.setHours(hours, minutes, 0, 0);
  return classDate.toISOString();
};

export default convertReminderTimeToISODate;
