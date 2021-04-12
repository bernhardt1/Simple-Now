import React, { useState } from 'react';
import {
  View,
  ImageBackground,
  Text,
  Alert,
  TouchableOpacity,
  Image,
} from 'react-native';
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
import { bigShadow } from '../../styles/standardComponents';

const OnboardingScrollwheelScreen = ({
  navigation,
  title,
  subtitle,
  copy,
  image,
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

  const doubleCheckPermissions = () => {
    if (!isDeviceNotificationsEnabled) {
      Alert.alert(
        'Continue without reminders?',
        'Reminders are the most effective tool we offer.',
        [
          {
            text: 'Remind me',
            onPress: () => {
              togglePushModal();
            },
          },
          {
            text: 'Skip',
            onPress: () => {
              nextScreen();
            },
          },
        ]
      );
    } else {
      nextScreen();
    }
  };

  return (
    <ImageBackground style={styles.container} source={setLocalImage(image)}>
      <HeaderSpacer transparent />
      <View style={styles.contentContainer}>
        <View style={styles.topSection}>
          <Text
            style={[
              titleFont,
              whiteFont,
              { marginBottom: heightUnit * 20 },
              bigShadow,
            ]}
          >
            {title}
          </Text>
          <View style={styles.centerCircleContainer}>
            <TouchableOpacity
              style={styles.centerCircle}
              onPress={
                !isDeviceNotificationsEnabled
                  ? togglePushModal
                  : deactivePushAlert
              }
            >
              <Text style={[titleFont, whiteFont]}>Remind Me</Text>
              {isDeviceNotificationsEnabled && (
                <Image
                  source={setLocalImage('checkWhite')}
                  style={styles.image}
                />
              )}
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.bottomSection}>
          <Text style={[titleFont, whiteFont, centerAlign]}>{subtitle}</Text>
          <InvisibleSeparator />
          <Text style={[bodyFontThin, whiteFont, centerAlign]}>{copy}</Text>

          <View style={styles.buttonsContainer}>
            <SecondaryButton
              title={buttonTitle}
              style={{ width: widthUnit * 46, marginTop: heightUnit * 8 }}
              onPress={doubleCheckPermissions}
            />
          </View>
          {goBack && <PressableText title={'Back'} onPress={goBack} />}
        </View>
      </View>
      <NotificationScheduler navigation={navigation} />
    </ImageBackground>
  );
};

const mapStateToProps = (state) => {
  return {
    isDeviceNotificationsEnabled:
      state?.notifications?.isDeviceNotificationsEnabled || false,
  };
};

export default connect(mapStateToProps)(OnboardingScrollwheelScreen);
