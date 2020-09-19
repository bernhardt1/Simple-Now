import React from 'react';
import {View, Image, Text, TouchableOpacity, Alert} from 'react-native';

import styles from './styles';
import setLocalImage from '../../helpers/setLocalImage';
import {titleFont, subheadFont} from '../../styles/fonts';
import {EXERCISE_SCREEN} from '../../constants/constants';
import LinearGradient from 'react-native-linear-gradient';
import {
  BRAND_WHITE,
  DARK_BLUE_LOGO,
  LIGHT_BLUE_LOGO,
} from '../../styles/colors';
import convertReminderTimeToReadable from '../../helpers/timeHelpers/convertReminderTimeToReadable';
import isExerciseAvailable from '../../helpers/reduxHelpers/isExerciseAvailable';
import {AWARENESS_BEGINNER_COURSE} from '../../assets/courses';

const DailyExerciseListItem = ({
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
    if (
      isExerciseAvailable(
        reduxCourse,
        AWARENESS_BEGINNER_COURSE,
        classIndex,
        exerciseIndex,
      )
    ) {
      navigateExercise();
    } else {
      Alert.alert(
        'Exercise Not Available',
        'This exercise is scheduled for later.',
        [
          {
            text: 'OK',
          },
        ],
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

  return (
    <TouchableOpacity
      style={[
        styles.container,
        lastItem ? {marginBottom: styles.container.margin} : {},
      ]}
      onPress={tryNavigateExercise}>
      <LinearGradient
        colors={
          isExerciseComplete
            ? [DARK_BLUE_LOGO, LIGHT_BLUE_LOGO]
            : [BRAND_WHITE, BRAND_WHITE]
        }
        style={
          isExerciseComplete
            ? styles.imageContainerComplete
            : styles.imageContainer
        }>
        <Image
          style={styles.image}
          source={
            isExerciseComplete
              ? setLocalImage(`${exercise.image}White`)
              : setLocalImage(`${exercise.image}Black`)
          }
        />
      </LinearGradient>
      <View style={styles.informationContainer}>
        <View style={styles.informationTopContainer}>
          <View style={styles.informationTopTextContainer}>
            <Text style={[titleFont, styles.titleAndTimeMargin]}>
              {exercise?.title}
            </Text>
            <Text style={subheadFont}>
              {convertReminderTimeToReadable(exercise.reminderTime)}
            </Text>
          </View>
          {isExerciseComplete && (
            <View style={styles.informationTopCompleteContainer}>
              <Image
                style={styles.informationTopCompleteImage}
                source={setLocalImage(`checkWhite`)}
              />
            </View>
          )}
        </View>
        <View style={styles.informationBottomContainer}>
          <Text ellipsizeMode="tail" style={[subheadFont]} numberOfLines={2}>
            {exercise.copy}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default DailyExerciseListItem;
