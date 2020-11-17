import React from 'react';
import { View, Image, Text, TouchableOpacity, Alert } from 'react-native';

import styles from './styles';
import setLocalImage from '../../helpers/setLocalImage';
import {
  titleFont,
  subheadFont,
  whiteFont,
  titleEmphasizedFont,
  largeTitleFont,
} from '../../styles/fonts';
import { EXERCISE_SCREEN } from '../../constants/constants';
import LinearGradient from 'react-native-linear-gradient';
import { DARK_BLUE_LOGO, LIGHT_BLUE_LOGO } from '../../styles/colors';
import convertReminderTimeToReadable from '../../helpers/timeHelpers/convertReminderTimeToReadable';
import isExerciseAvailable from '../../helpers/reduxHelpers/isExerciseAvailable';

const ExerciseListItem = ({
  focused,
  course,
  exercise,
  nextExercise,
  classIndex,
  exerciseIndex,
  isExerciseComplete,
  reduxCourse,
  navigation,
  lastItem,
}) => {
  const tryNavigateExercise = () => {
    if (isExerciseAvailable(reduxCourse, course, classIndex, exerciseIndex)) {
      navigateExercise();
    } else {
      Alert.alert(
        'Exercise Not Available',
        'This exercise is scheduled for later.',
        [
          {
            text: 'OK',
          },
        ]
      );
    }
  };

  const navigateExercise = () => {
    navigation.navigate('Exercise', {
      exercise,
      nextExercise,
      classIndex,
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
      onPress={tryNavigateExercise}
    >
      <LinearGradient
        colors={['transparent', 'transparent']}
        style={styles.focusedImageContainer}
      >
        <Image
          style={styles.focusedImage}
          source={setLocalImage(`${exercise?.image}White`)}
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
      onPress={tryNavigateExercise}
    >
      <LinearGradient
        colors={
          isExerciseComplete
            ? [DARK_BLUE_LOGO, LIGHT_BLUE_LOGO]
            : ['transparent', 'transparent']
        }
        style={
          isExerciseComplete
            ? styles.imageContainerComplete
            : styles.imageContainer
        }
      >
        <Image
          style={styles.image}
          source={setLocalImage(`${exercise?.image}White`)}
        />
      </LinearGradient>
      <View style={styles.informationContainer}>
        <View style={styles.informationTopContainer}>
          <View style={styles.informationTopTextContainer}>
            <Text style={[titleFont, whiteFont, styles.titleAndTimeMargin]}>
              {`${exercise?.title}${isExerciseComplete ? ' - complete' : ''}`}
            </Text>
          </View>
        </View>
        <View style={styles.informationBottomContainer}>
          <Text
            ellipsizeMode="tail"
            style={[subheadFont, whiteFont]}
            numberOfLines={2}
          >
            {convertReminderTimeToReadable(exercise?.reminderTime)}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ExerciseListItem;
