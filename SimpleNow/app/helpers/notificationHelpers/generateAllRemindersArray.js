const generateAllRemindersArray = (allReminders) => {
  const reminders = [];

  for (const [key, value] of Object.entries(allReminders)) {
    if (!key.includes('0') || key.includes('isEnabled')) continue;
    console.log('key', key);

    const parts = value.split('-');

    const next = {
      id: key,
      isEnabled: allReminders[`${key}_isEnabled`],
      time: parts[0],
      isMo: parts[1] === 'true',
      isTu: parts[2] === 'true',
      isWe: parts[3] === 'true',
      isTh: parts[4] === 'true',
      isFr: parts[5] === 'true',
      isSa: parts[6] === 'true',
      isSu: parts[7] === 'true',
    };

    reminders.push(next);
  }

  return reminders;
};

export default generateAllRemindersArray;
