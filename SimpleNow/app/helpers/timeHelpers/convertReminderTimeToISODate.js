const convertReminderTimeToISODate = (
  reminderTime,
  numberOfDaysAheadToSchedule = 0
) => {
  const now = new Date();

  now.setHours(0, 0, 0, 0);

  const reminderDate = new Date(
    now.getTime() + numberOfDaysAheadToSchedule * 1000 * 60 * 60 * 24
  );

  const hours = parseInt(reminderTime?.split(':')[0], 10);
  const minutes = parseInt(reminderTime?.split(':')[1], 10);

  reminderDate.setHours(hours, minutes, 0, 0);
  return reminderDate.toISOString();
};

export default convertReminderTimeToISODate;
