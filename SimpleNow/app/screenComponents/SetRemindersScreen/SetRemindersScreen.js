import React, { useState, useEffect } from 'react';
import { ScrollView, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux';
import Modal from 'react-native-modal';

import { HeaderDefaultBack } from '../../components/HeaderDefaultBack';
import { HeaderSpacer } from '../../components/HeaderSpacer';
import { PushPermissionModalContent } from '../../components/ModalContent';
import ReminderItem from '../../components/ReminderItem/ReminderItem';

import {
  BACKGROUND_GRADIENT_1,
  BACKGROUND_GRADIENT_2,
} from '../../styles/colors';
import { titleFont, whiteFont } from '../../styles/fonts';
import { islandSpacing } from '../../styles/spacings';

import styles from './styles';
import { InvisibleSeparator } from '../../components/InvisibleSeparator';
import generateAllRemindersArray from '../../helpers/notificationHelpers/generateAllRemindersArray';

const SetRemindersScreen = ({
  background,
  navigation,
  allReminders,
  isDeviceNotificationsEnabled,
}) => {
  const [isPermissionModalVisible, setIsPermissionModalVisible] = useState(
    false
  );
  const [allRemindersArray, setAllRemindersArray] = useState(
    generateAllRemindersArray(allReminders)
  );

  useEffect(() => {
    setAllRemindersArray(generateAllRemindersArray(allReminders));
  }, [allReminders]);

  useEffect(() => {
    if (!isDeviceNotificationsEnabled) {
      togglePushModal();
    }
  }, [isDeviceNotificationsEnabled]);

  const togglePushModal = () => {
    setIsPermissionModalVisible((prevPermission) => !prevPermission);
  };

  const navigateBack = () => {
    navigation.goBack();
  };

  const navigateCreateReminder = () => {
    navigation.navigate('CreateReminder');
  };

  const navigateEditReminder = (reminder) => {
    navigation.navigate('EditReminder', { reminder });
  };

  return (
    <LinearGradient
      style={styles.container}
      colors={[BACKGROUND_GRADIENT_1, BACKGROUND_GRADIENT_2]}
      useAngle={true}
      angle={150}
      angleCenter={{ x: 0.5, y: 0.5 }}
    >
      <HeaderSpacer />
      <HeaderDefaultBack
        onPressBack={navigateBack}
        title={'Practice Reminders'}
        rightButtonImage={'plusOrange'}
        onPressRightButton={navigateCreateReminder}
      />

      <ScrollView
        bounces={false}
        contentContainerStyle={styles.reminderContainerScroller}
      >
        <Text
          style={[
            titleFont,
            whiteFont,
            {
              marginLeft: islandSpacing.margin,
              marginTop: islandSpacing.padding,
            },
          ]}
        >
          Your Reminders
        </Text>
        {allRemindersArray.map((reminder) => {
          return (
            <ReminderItem
              isDeviceNotificationsEnabled={isDeviceNotificationsEnabled}
              togglePushModal={togglePushModal}
              navigateEditReminder={() => {
                navigateEditReminder(reminder);
              }}
              key={reminder?.id}
              reminder={reminder}
            />
          );
        })}
      </ScrollView>
      <Modal coverScreen={false} isVisible={isPermissionModalVisible}>
        <PushPermissionModalContent onPress={togglePushModal} />
      </Modal>
    </LinearGradient>
  );
};

const mapStateToProps = (state) => {
  return {
    background: state?.settings?.background || 'background1',
    isDeviceNotificationsEnabled:
      state?.notifications?.isDeviceNotificationsEnabled || false,
    allReminders: state?.notifications || {},
  };
};

export default connect(mapStateToProps)(SetRemindersScreen);
