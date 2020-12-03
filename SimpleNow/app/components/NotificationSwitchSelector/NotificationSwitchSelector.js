import React from 'react';

import { Switch } from 'react-native';
import checkPushPermissions from '../../helpers/notificationHelpers/checkPushPermissions';
import {
  BACKGROUND_GRADIENT_2,
  BRAND_ORANGE,
  BRAND_ORANGE_SECONDARY,
  BRAND_WHITE_OFF,
} from '../../styles/colors';
import { connect } from 'react-redux';
import { updateReminderIsEnabled } from '../../actions/notifications';

const NotificationSwitchSelector = ({
  isDeviceNotificationsEnabled,
  togglePushModal,
  reduxUpdateReminderIsEnabled,
  reminder,
}) => (
  <Switch
    trackColor={{ false: BACKGROUND_GRADIENT_2, true: BRAND_ORANGE_SECONDARY }}
    thumbColor={
      isDeviceNotificationsEnabled && reminder?.isEnabled
        ? BRAND_ORANGE
        : BRAND_WHITE_OFF
    }
    value={isDeviceNotificationsEnabled && reminder?.isEnabled}
    onValueChange={async (val) => {
      const isNotificationPermissionEnabled = await checkPushPermissions();

      if (isNotificationPermissionEnabled) {
        const obj = {
          key: reminder?.id,
          val,
        };

        reduxUpdateReminderIsEnabled(obj);
      } else {
        togglePushModal();
      }
    }}
    ios_backgroundColor={BACKGROUND_GRADIENT_2}
  />
);

const mapDispatchToProps = (dispatch) => {
  return {
    reduxUpdateReminderIsEnabled: (obj) =>
      dispatch(updateReminderIsEnabled(obj)),
  };
};

export default connect(null, mapDispatchToProps)(NotificationSwitchSelector);
