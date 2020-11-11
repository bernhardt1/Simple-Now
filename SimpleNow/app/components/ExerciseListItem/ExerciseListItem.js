import React from 'react';
import { View, Image, Text, TouchableOpacity, Alert } from 'react-native';
import Moment from 'moment';

import styles from './styles';
import setLocalImage from '../../helpers/setLocalImage';
import {
  titleFont,
  subheadFont,
  whiteFont,
  titleEmphasizedFont,
  largeTitleFont,
  footnoteFont,
} from '../../styles/fonts';
import { EXERCISE_SCREEN } from '../../constants/constants';
import LinearGradient from 'react-native-linear-gradient';
import { DARK_BLUE_LOGO, LIGHT_BLUE_LOGO } from '../../styles/colors';
import convertReminderTimeToReadable from '../../helpers/timeHelpers/convertReminderTimeToReadable';
import isExerciseAvailable from '../../helpers/reduxHelpers/isExerciseAvailable';

const DailyExerciseListItem = ({
  focused,
  course,
  exercise,
  nextExercise,
  exerciseIndex,
  isExerciseComplete,
  reduxCourse,
  navigation,
  lastItem,
}) => {
  const navigateExercise = () => {
    navigation.navigate('Exercise', {
      exercise,
      nextExercise,
      exerciseIndex,
      screenType: EXERCISE_SCREEN,
    });
  };
  return focused ? (
    <TouchableOpacity
      style={[
        styles.focusedContainer,
        lastItem ? { marginBottom: styles.container.margin } : {},
      ]}
      onPress={navigateExercise}
    >
      <LinearGradient
        colors={['transparent', 'transparent']}
        style={styles.focusedImageContainer}
      >
        <Image
          style={styles.focusedImage}
          source={setLocalImage(`${exercise.image}White`)}
        />
      </LinearGradient>
      <View style={styles.focusedInformationContainer}>
        <Text style={[largeTitleFont, whiteFont, styles.titleAndTimeMargin]}>
          {exercise?.title}
        </Text>
        <Text
          ellipsizeMode="tail"
          style={[titleFont, whiteFont]}
          numberOfLines={2}
        >
          {isExerciseAvailable(reduxCourse, course, classIndex, exerciseIndex)
            ? 'now'
            : convertReminderTimeToReadable(exercise?.reminderTime)}
        </Text>
      </View>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity
      style={[
        styles.container,
        lastItem ? { marginBottom: styles.container.margin } : {},
      ]}
      onPress={navigateExercise}
    >
      <View style={styles.informationContainer}>
        <View style={styles.informationTextContainer}>
          <Text style={[titleFont, whiteFont, styles.titleAndTimeMargin]}>
            {`${exercise?.title}${isExerciseComplete ? ' - complete' : ''}`}
          </Text>
          {exercise?.reminderTime && (
            <Text
              ellipsizeMode="tail"
              style={[footnoteFont, whiteFont]}
              numberOfLines={2}
            >
              {`${Moment.duration(exercise?.recommendedTime).minutes()} ${
                Moment.duration(exercise?.recommendedTime).minutes() > 1
                  ? 'minutes'
                  : 'minute'
              }`}
            </Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default DailyExerciseListItem;
