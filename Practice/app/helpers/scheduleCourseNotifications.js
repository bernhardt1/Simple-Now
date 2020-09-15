import convertReminderToISODate from './convertReminderToISODate';
import getCourseNotificationReminderTimes from './reduxHelpers/getCourseNotificationReminderTimes';

const scheduleCourseNotifications = (
  Notifications,
  course,
  reduxCourse,
  reduxUpdateAwarenessBeginnerClassExerciseReminderTime,
) => {
  const now = new Date().toISOString();
  const existingNotificationReminderTimes = getCourseNotificationReminderTimes(
    reduxCourse,
  );
  console.log(
    'existingNotificationReminderTimes',
    existingNotificationReminderTimes,
  );
  let reminderHoursIncrementer = 0;
  // schedule all notifications

  course?.classes?.forEach((cla, claIndex) => {
    cla?.exercises?.forEach((exercise, eIndex) => {
      const title = exercise?.title;
      const message = exercise?.copy;
      const id = `${course?.id}/${claIndex}/${eIndex}`;
      const route = `Home/${id}`;
      const reminderTime = exercise?.reminderTime;

      if (reminderTime) {
        const reminderDate = convertReminderToISODate(
          reminderTime,
          reminderHoursIncrementer,
        );
        console.log('reminderDate', reminderDate);
        console.log('now', now);
        console.log('reminderDate > now', reminderDate > now);

        console.log(
          'existingNotificationReminderTimes.includes(JSON.stringify(reminderDate))',
          !existingNotificationReminderTimes.includes(
            JSON.stringify(reminderDate),
          ),
        );

        if (
          reminderDate > now &&
          !existingNotificationReminderTimes.includes(
            JSON.stringify(reminderDate),
          )
        ) {
          const secondsAheadToSchedule = Math.floor(
            (new Date(reminderDate) - new Date(now)) / 1000,
          );

          Notifications.scheduleNotif(
            id,
            'steelBell.mp3',
            secondsAheadToSchedule,
            title,
            message,
            route,
          );

          reduxUpdateAwarenessBeginnerClassExerciseReminderTime({
            classIndex: claIndex,
            exerciseIndex: eIndex,
            reminderTime: reminderDate,
          });
        }
      }
    });

    reminderHoursIncrementer += 24;
  });

  // update redux with the notification timestamps
};

export default scheduleCourseNotifications;
