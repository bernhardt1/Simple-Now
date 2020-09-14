const getFirstExerciseWithReminderTime = (exercises) => {
  let index = 0;
  let exercise = null;

  while (index < exercises?.length) {
    if (exercises[index].exercise?.reminderTime) {
      exercise = exercises[index].exercise;
      return exercise;
    }
    index += 1;
  }

  return exercise;
};

export default getFirstExerciseWithReminderTime;
