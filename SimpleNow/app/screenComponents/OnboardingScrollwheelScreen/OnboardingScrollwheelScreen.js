import React, { useState } from 'react';
import { View, ImageBackground, Text, Alert } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import DatePicker from 'react-native-date-picker';

import { HeaderSpacer } from '../../components/HeaderSpacer';
import { InvisibleSeparator } from '../../components/InvisibleSeparator';
import PressableText from '../../components/PressableText/PressableText';
import SecondaryButton from '../../components/SecondaryButton/SecondaryButton';

import setLocalImage from '../../helpers/setLocalImage';
import {
  BACKGROUND_GRADIENT_1,
  BACKGROUND_GRADIENT_2,
  BRAND_WHITE,
} from '../../styles/colors';
import { heightUnit, widthUnit } from '../../styles/constants';
import {
  bodyFontThin,
  centerAlign,
  titleFont,
  whiteFont,
} from '../../styles/fonts';

import styles from './styles';
import convertReminderTimeToISODate from '../../helpers/timeHelpers/convertReminderTimeToISODate';
import { StandardButton } from '../../components/StandardButton';
import NotificationScheduler from '../NotificationScheduler/NotificationScheduler';
import { connect } from 'react-redux';

const OnboardingScrollwheelScreen = ({
  navigation,
  title,
  subtitle,
  copy,
  buttonTitle,
  nextScreen,
  goBack,
  togglePushModal,
  isDeviceNotificationsEnabled,
}) => {
  const deactivePushAlert = () => {
    Alert.alert(
      'Daily Reminder Enabled',
      'You can customize your reminders on the Home screen.',
      [
        {
          text: 'OK',
        },
      ]
    );
  };

  return (
    <LinearGradient
      style={styles.container}
      colors={[BACKGROUND_GRADIENT_2, BACKGROUND_GRADIENT_1]}
    >
      <HeaderSpacer transparent />
      <View style={styles.contentContainer}>
        <View style={styles.topSection}>
          <Text
            style={[titleFont, whiteFont, { marginBottom: heightUnit * 20 }]}
          >
            {title}
          </Text>
          <StandardButton
            title={'Use  Daily Reminder'}
            onPress={
              !isDeviceNotificationsEnabled
                ? togglePushModal
                : deactivePushAlert
            }
            image={!isDeviceNotificationsEnabled ? null : 'checkWhite'}
          />
        </View>
        <View style={styles.bottomSection}>
          <Text style={[titleFont, whiteFont, centerAlign]}>{subtitle}</Text>
          <InvisibleSeparator />
          <Text style={[bodyFontThin, whiteFont, centerAlign]}>{copy}</Text>

          <View style={styles.buttonsContainer}>
            <SecondaryButton
              title={buttonTitle}
              style={{ width: widthUnit * 46, marginTop: heightUnit * 8 }}
              onPress={nextScreen}
            />
          </View>
          {goBack && <PressableText title={'Back'} onPress={goBack} />}
        </View>
      </View>
      <NotificationScheduler navigation={navigation} />
    </LinearGradient>
  );
};

const mapStateToProps = (state) => {
  return {
    isDeviceNotificationsEnabled:
      state?.notifications?.isDeviceNotificationsEnabled || false,
  };
};

export default connect(mapStateToProps)(OnboardingScrollwheelScreen);
