// ONLY ACCEPTS FORMAT HH:MM:SS
const convertReminderTimeToReadable = (reminderTime) => {
  const parts = reminderTime?.split(':');
  if (parts?.length >= 0) {
    const hours = parseInt(parts[0], 10) <= 12 ? parts[0] : parts[0] - 12;
    const format = parseInt(parts[0], 10) > 11 ? 'pm' : 'am';

    return `${hours}:${parts[1]} ${format}`;
  }
  return '';
};

export default convertReminderTimeToReadable;
