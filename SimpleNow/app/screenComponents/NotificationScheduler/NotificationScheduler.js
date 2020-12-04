import React, { useEffect, useState } from 'react';
import { AppState, View } from 'react-native';
import { connect } from 'react-redux';

import { updateDeviceNotificationsEnabled } from '../../actions/notifications';

import checkPushPermissions from '../../helpers/notificationHelpers/checkPushPermissions';
import reminderScheduler from '../../helpers/notificationHelpers/reminderScheduler';
import deleteAllNotifications from '../../helpers/notificationHelpers/deleteAllNotifications';
import generateAllRemindersArray from '../../helpers/notificationHelpers/generateAllRemindersArray';

const NotificationScheduler = ({
  navigation,
  isDeviceNotificationsEnabled,
  reduxUpdateDeviceNotificationsEnabled,
  allReminders,
}) => {
  const [isScheduling, setIsScheduling] = useState(false);

  useEffect(() => {
    const allRemindersArray = generateAllRemindersArray(allReminders);

    scheduleAllReminders(allRemindersArray);
  }, [allReminders]);

  useEffect(() => {
    AppState.addEventListener('change', handleAppStateChange);

    return () => {
      AppState.removeEventListener('change', handleAppStateChange);
    };
  }, []);

  const handleAppStateChange = (nextAppState) => {
    if (nextAppState === 'active') {
      backgroundPermissionCheck();
    }
  };

  const backgroundPermissionCheck = async () => {
    const isNotificationPermissionEnabled = await checkPushPermissions();
    reduxUpdateDeviceNotificationsEnabled(isNotificationPermissionEnabled);

    if (!isNotificationPermissionEnabled) {
      deleteAllNotifications();
    }

    if (isNotificationPermissionEnabled) {
      const allRemindersArray = generateAllRemindersArray(allReminders);

      // wait a little while to avoid calling the scheduler twice in a row
      setTimeout(() => {
        scheduleAllReminders(allRemindersArray);
      }, 1000);
    }
  };

  const scheduleAllReminders = (allRemindersArray) => {
    deleteAllNotifications();
    allRemindersArray.forEach((r) => {
      reminderScheduler(r, 10);
    });
  };

  return <View />;
};

const mapStateToProps = (state) => {
  return {
    isDeviceNotificationsEnabled:
      state?.notifications?.isDeviceNotificationsEnabled || false,
    allReminders: state?.notifications || {},
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    reduxUpdateDeviceNotificationsEnabled: (val) =>
      dispatch(updateDeviceNotificationsEnabled(val)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotificationScheduler);
