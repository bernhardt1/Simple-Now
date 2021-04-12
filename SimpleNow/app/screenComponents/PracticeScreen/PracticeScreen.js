import React, { useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { CommonActions } from '@react-navigation/native';

import { updateNavigationDeepLink } from '../../actions/navigation';

import { HeaderSpacer } from '../../components/HeaderSpacer';
import { StandardSettingButton } from '../../components/StandardSettingButton';
import { DailyExerciseItem } from '../../components/DailyExerciseItem';
import isExerciseComplete from '../../helpers/reduxHelpers/isExerciseComplete';

import styles from './styles';
import {
  captionFont,
  centerAlign,
  footnoteFont,
  largeTitleFont,
  titleEmphasizedFont,
  whiteFont,
} from '../../styles/fonts';
import {
  BACKGROUND_GRADIENT_1,
  BACKGROUND_GRADIENT_2,
} from '../../styles/colors';
import LinearGradient from 'react-native-linear-gradient';
import NotificationScheduler from '../NotificationScheduler/NotificationScheduler';
import getNumberOfDailyExercisesComplete from '../../helpers/reduxHelpers/getNumberOfDailyExercisesComplete';
import getNumberOfExercisesCompletedSinceXDaysAgo from '../../helpers/reduxHelpers/getNumberOfExercisesCompletedSinceXDaysAgo';
import { dailyExerciseItem } from '../../styles/standardComponents';

const PracticeScreen = ({
  background,
  navigation,
  currentPractice,
  currentPracticeProgress,
  reduxResetCurrentPractice,
  reduxContent,
  isDeviceNotificationsEnabled,
  deepLinkState,
  reduxUpdateNavigationDeepLink,
}) => {
  useEffect(() => {
    this.timeout = setTimeout(() => {
      handleDeepLinkNavigation(deepLinkState);
    }, 100);

    return () => {
      if (this?.timeout) clearTimeout(this.timeout);
    };
  }, [deepLinkState, currentPractice]);

  const handleDeepLinkNavigation = () => {
    if (!deepLinkState) return;

    navigateNextExerciseIfAvailable();
    reduxUpdateNavigationDeepLink(null);
  };

  const renderDailyExerciseItem = (item, index) => {
    const isExerciseComp = isExerciseComplete(
      item?.exerciseType,
      item?.id,
      reduxContent
    );

    return (
      <DailyExerciseItem
        exercise={item}
        navigation={navigation}
        isExerciseComplete={isExerciseComp}
        currentPracticeProgress={currentPracticeProgress}
        lastItem={index === currentPractice.length - 1}
      />
    );
  };

  const navigateNextExerciseIfAvailable = () => {
    let indexOfNextExercise = -1;
    let counter = 0;

    while (counter < currentPractice.length) {
      const isExerciseComp = isExerciseComplete(
        currentPractice[counter]?.exerciseType,
        currentPractice[counter]?.id,
        reduxContent
      );

      if (!isExerciseComp) {
        indexOfNextExercise = counter;
        counter = currentPractice.length;
      }

      counter++;
    }

    if (indexOfNextExercise >= 0) {
      navigation.navigate('Exercise', {
        exercise: currentPractice[indexOfNextExercise],
      });
    }
  };

  return (
    <LinearGradient
      style={styles.container}
      colors={[BACKGROUND_GRADIENT_1, BACKGROUND_GRADIENT_2]}
      useAngle={true}
      angle={150}
      angleCenter={{ x: 0.5, y: 0.5 }}
    >
      <HeaderSpacer transparent />
      <View style={styles.topSection}>
        <StandardSettingButton
          title={'CHANGE PRACTICE'}
          imageName={'editWhite'}
          onPress={() => navigation.navigate('ChangePractice')}
        />
        <View style={styles.infoButtonContainer}>
          <StandardSettingButton
            title={'SET REMINDERS'}
            onPress={() => navigation.navigate('SetReminders')}
            // onPress={() => reduxResetCurrentPractice()}
          />

          <Text style={[footnoteFont, whiteFont]}>
            {isDeviceNotificationsEnabled ? '' : 'NONE'}
          </Text>
        </View>
      </View>

      <View
        style={styles.centerSection}
        // onPress={() => {
        //   global.Notifications.getScheduledLocalNotifications((notifs) =>
        //     console.log('notifications', notifs)
        //   );

        //   global.Notifications.scheduleNotif(
        //     '123456789',
        //     'steel_bell.mp3',
        //     1,
        //     'test notification',
        //     'this is a test',
        //     '103/20/7'
        //   );
        // }}
      >
        <View style={styles.centerCircle}>
          <Text
            style={[captionFont, whiteFont, styles.textSpacing, centerAlign]}
          >
            You've practiced
          </Text>
          <Text
            style={[largeTitleFont, whiteFont]}
          >{`${getNumberOfExercisesCompletedSinceXDaysAgo(
            reduxContent,
            7
          )} times`}</Text>
          <Text style={[captionFont, whiteFont]}>this week</Text>
        </View>
      </View>
      <View style={styles.bottomSection}>
        <View style={styles.dailyPracticeTextContainer}>
          <Text style={[titleEmphasizedFont, whiteFont]}>Today's Practice</Text>
          <Text style={[titleEmphasizedFont, whiteFont]}>{`${Math.min(
            getNumberOfDailyExercisesComplete(currentPracticeProgress),
            currentPractice?.length
          )} / ${currentPractice?.length}`}</Text>
        </View>

        <FlatList
          data={currentPractice}
          renderItem={({ item, index }) => {
            return renderDailyExerciseItem(item, index);
          }}
          horizontal
          contentContainerStyle={styles.flatlistContainer}
          extraData={[reduxContent, currentPracticeProgress]}
          showsHorizontalScrollIndicator={false}
          initialScrollIndex={Math.min(
            getNumberOfDailyExercisesComplete(currentPracticeProgress),
            currentPractice?.length - 1
          )}
          getItemLayout={(data, index) => ({
            length: dailyExerciseItem.width,
            offset:
              dailyExerciseItem.width * index - dailyExerciseItem.width / 3,
            index,
          })}
        />
      </View>
      <NotificationScheduler navigation={navigation} />
    </LinearGradient>
  );
};

const mapStateToProps = (state) => {
  return {
    background: state?.settings?.background || 'background1',
    currentPractice: state?.practice?.currentPractice || [],
    currentPracticeProgress: state?.practice?.currentPracticeProgress || '',
    isDeviceNotificationsEnabled:
      state?.notifications?.isDeviceNotificationsEnabled || false,
    deepLinkState: state?.navigation?.deepLinkState || null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    reduxUpdateNavigationDeepLink: (deepLinkState) =>
      dispatch(updateNavigationDeepLink(deepLinkState)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PracticeScreen);
