const convertReminderToISODate = (reminder, incrementer) => {
  const result = new Date();
  const hours = parseInt(reminder?.split(':')[0], 10);
  const minutes = parseInt(reminder?.split(':')[1], 10);

  result.setHours(hours + incrementer, minutes, 0, 0);
  return result.toISOString();
};

export default convertReminderToISODate;
