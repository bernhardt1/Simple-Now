import convertReminderTimeToISODate from './timeHelpers/convertReminderTimeToISODate';

import { MAX_NOTIFICATIONS } from '../constants/magicNumbers';
import getDaysPastSinceStartTimestamp from './timeHelpers/getDaysPastSinceStartTimestamp';
import sentryCaptureMessage from './errorHelpers/sentryCaptureMessage';

const getScheduledNotifications = async () => {
  return new Promise(global.Notifications.getScheduledLocalNotifications)
    .then((notifs) => {
      return notifs;
    })
    .catch((e) => {
      // assume there are no notifications to return.
      return [];
    });
};

const courseNotificationScheduler = async (
  course,
  reduxCourse,
  startTimestamp
) => {
  try {
    const scheduledNotifications = await getScheduledNotifications();
    let notificationCounter = scheduledNotifications?.length;

    const nowIso = new Date().toISOString();
    const courseStartTimestamp = startTimestamp || reduxCourse?.startTimestamp;
    const daysPastSinceStartTimestamp = getDaysPastSinceStartTimestamp(
      courseStartTimestamp
    );

    // schedule notifications
    course?.classes?.forEach((cla, claIndex) => {
      cla?.exercises?.forEach((exercise, eIndex) => {
        const { title, copy: message, reminderTime } = exercise;
        const id = `${course.id}${claIndex}${eIndex}`;
        const routeToCourse = `${course?.id}/${claIndex}/${eIndex}`;
        const route = `Home/${routeToCourse}`;

        // check if there is less than 30 notifications scheduled. continue if there isn't.
        if (notificationCounter >= MAX_NOTIFICATIONS) return;

        // check if the exercise has a reminderTime. return if it doesn't.
        if (!reminderTime) return;

        // check if exercise reminderTime is in the past. return if it is.
        const reminderDate = convertReminderTimeToISODate(
          reminderTime,
          daysPastSinceStartTimestamp,
          claIndex
        );
        if (reminderDate < nowIso) return;

        // check if exercise is in the schedule. continue if it isn't.
        if (scheduledNotifications.map((sn) => sn?.id).includes(id)) return;

        // This exercise needs to be scheduled into the notifications list
        const secondsAheadToSchedule = Math.floor(
          (new Date(reminderDate) - new Date(nowIso)) / 1000
        );

        global.Notifications.scheduleNotif(
          id,
          'steel_bell.mp3',
          secondsAheadToSchedule,
          title,
          message,
          route
        );
        notificationCounter += 1;
      });
    });
  } catch (e) {
    sentryCaptureMessage('caught courseNotificationScheduler error', e);
  }
};

export default courseNotificationScheduler;
