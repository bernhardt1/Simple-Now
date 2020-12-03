import Moment from 'moment';

import convertReminderTimeToISODate from '../timeHelpers/convertReminderTimeToISODate';
import sentryCaptureMessage from '../errorHelpers/sentryCaptureMessage';

import { MAX_NOTIFICATIONS } from '../../constants/magicNumbers';
import { DAILY_REMINDER_NOTIFICATION_ID } from '../../constants/constants';
import getScheduledNotifications from './getScheduledNotifications';

const reminderScheduler = async (reminder, daysAheadToSchedule) => {
  const { time } = reminder;

  try {
    const scheduledNotifications = await getScheduledNotifications();
    console.log('scheduledNotifications', scheduledNotifications);

    let globalNumberOfScheduledNotification = scheduledNotifications?.length;

    const nowIso = new Date().toISOString();
    let notificationCounter = daysAheadToSchedule;
    let numberOfDaysAheadToSchedule = 0;

    // schedule notifications

    // check if there is less than 30 notifications scheduled. continue if there isn't.
    if (globalNumberOfScheduledNotification >= MAX_NOTIFICATIONS) return;

    while (notificationCounter > 0) {
      notificationCounter--;

      const reminderDate = convertReminderTimeToISODate(
        time,
        numberOfDaysAheadToSchedule
      );
      numberOfDaysAheadToSchedule += 1;

      if (reminderDate < nowIso) continue;

      const date = Moment(reminderDate).format('L');
      const id = `${DAILY_REMINDER_NOTIFICATION_ID}${date}`;

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
    sentryCaptureMessage('caught reminderScheduler error', e);
  }
};

export default reminderScheduler;
