import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import convertActiveDaysToReadable from '../../helpers/timeHelpers/convertActiveDaysToReadable';
import convertReminderTimeToReadable from '../../helpers/timeHelpers/convertReminderTimeToReadable';
import { footnoteFont, titleFont } from '../../styles/fonts';
import NotificationSwitchSelector from '../NotificationSwitchSelector/NotificationSwitchSelector';

import styles from './styles';

const ReminderItem = ({
  reminder,
  isDeviceNotificationsEnabled,
  togglePushModal,
  navigateEditReminder,
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
      onPress={navigateEditReminder}
    >
      <View>
        <Text style={[titleFont]}>{`${convertReminderTimeToReadable(
          reminder?.time
        )}`}</Text>
        <Text style={[footnoteFont]}>
          {reminder?.id ? `${convertActiveDaysToReadable(reminder)}` : ''}
        </Text>
      </View>
      <NotificationSwitchSelector
        isDeviceNotificationsEnabled={isDeviceNotificationsEnabled}
        togglePushModal={togglePushModal}
        reminder={reminder}
        key={reminder?.id}
      />
    </TouchableOpacity>
  );
};

export default ReminderItem;
