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
    let nextCourseReminderTimestamp = null;

    // schedule notifications
    course?.classes?.forEach((cla, claIndex) => {
      cla?.exercises?.forEach((exercise, eIndex) => {
        const {
          title,
          copy: message,
          reminderTime,
          notificationMessage,
        } = exercise;
        const id = `${course.id}${claIndex}${eIndex}`;
        const routeToCourse = `${course?.id}/${claIndex}/${eIndex}`;
        const route = `${routeToCourse}`;

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
        const secondsAheadToSchedule = Math.floor(
          (new Date(reminderDate) - new Date(nowIso)) / 1000
        );
        nextCourseReminderTimestamp = secondsAheadToSchedule + 64800;

        // check if exercise is in the schedule. continue if it isn't.
        if (scheduledNotifications.map((sn) => sn?.id).includes(id)) return;

        // This exercise needs to be scheduled into the notifications list
        global.Notifications.scheduleNotif(
          id,
          'steel_bell.mp3',
          secondsAheadToSchedule,
          title,
          notificationMessage || `${title} exercise available`,
          route
        );
        notificationCounter += 1;
      });
    });

    // Schedule one extra notification to remind them to do the next course.
    if (!scheduledNotifications.map((sn) => sn?.id).includes(course.id)) {
      global.Notifications.scheduleNotif(
        course.id,
        'steel_bell.mp3',
        nextCourseReminderTimestamp,
        'Next Mindfulness Course Available',
        'Keep practicing daily mindfulness'
      );
    }
  } catch (e) {
    sentryCaptureMessage('caught courseNotificationScheduler error', e);
  }
};

export default courseNotificationScheduler;
