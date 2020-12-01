import Moment from 'moment';

import convertReminderTimeToISODate from './timeHelpers/convertReminderTimeToISODate';
import sentryCaptureMessage from './errorHelpers/sentryCaptureMessage';

import { MAX_NOTIFICATIONS } from '../constants/magicNumbers';

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

// reminderTime format - 7:00
const dailyReminderScheduler = async (reminderTime, notificationCount) => {
  try {
    const scheduledNotifications = await getScheduledNotifications();
    let globalNumberOfScheduledNotification = scheduledNotifications?.length;

    const nowIso = new Date().toISOString();
    let notificationCounter = notificationCount;
    let numberOfDaysAheadToSchedule = 1;

    // schedule notifications

    // check if there is less than 30 notifications scheduled. continue if there isn't.
    if (globalNumberOfScheduledNotification >= MAX_NOTIFICATIONS) return;

    while (notificationCounter > 0) {
      notificationCounter--;

      const reminderDate = convertReminderTimeToISODate(
        reminderTime,
        numberOfDaysAheadToSchedule
      );
      if (reminderDate < nowIso) return;

      const date = Moment().format('L');
      const id = `daily-reminder-${date}`;

      const secondsAheadToSchedule = Math.floor(
        (new Date(reminderDate) - new Date(nowIso)) / 1000
      );

      // check if reminder is in the schedule. continue if it isn't.
      if (scheduledNotifications.map((sn) => sn?.id).includes(id)) return;

      // This exercise needs to be scheduled into the notifications list
      global.Notifications.scheduleNotif(
        id,
        'steel_bell.mp3',
        secondsAheadToSchedule,
        'Your daily practice is ready 🙌',
        'Tap to view',
        {}
      );
      globalNumberOfScheduledNotification += 1;
    }
  } catch (e) {
    sentryCaptureMessage('caught dailyReminderScheduler error', e);
  }
};

export default dailyReminderScheduler;
