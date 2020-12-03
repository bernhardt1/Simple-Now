// ONLY ACCEPTS FORMAT HH:MM:SS
const convertReminderTimeToReadable = (reminderTime) => {
  const parts = reminderTime?.split(':');
  if (parts?.length >= 0) {
    let hours =
      parseInt(parts[0], 10) <= 12 ? parseInt(parts[0], 10) : parts[0] - 12;
    if (hours === 0) hours = 12;
    const format = parseInt(parts[0], 10) > 11 ? 'PM' : 'AM';

    return `${hours}:${parts[1]} ${format}`;
  }
  return 'N/A';
};

export default convertReminderTimeToReadable;
