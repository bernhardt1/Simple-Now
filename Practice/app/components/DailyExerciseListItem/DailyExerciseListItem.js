import React from 'react';
import { View, Image, Text, TouchableOpacity, Alert } from 'react-native';

import styles from './styles';
import setLocalImage from '../../helpers/setLocalImage';
import { titleFont, subheadFont, whiteFont } from '../../styles/fonts';
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
      courseId: course?.id,
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
        colors={
          isExerciseComplete
            ? [DARK_BLUE_LOGO, LIGHT_BLUE_LOGO]
            : ['transparent', 'transparent']
        }
        style={
          isExerciseComplete
            ? styles.focusedImageContainerComplete
            : styles.focusedImageContainer
        }
      >
        {isExerciseComplete && <View />}
        <Image
          style={styles.focusedImage}
          source={
            isExerciseComplete
              ? setLocalImage(`${exercise.image}White`)
              : setLocalImage(`${exercise.image}White`)
          }
        />
        {isExerciseComplete && (
          <View style={styles.informationTopCompleteContainer}>
            <Image
              style={styles.informationTopCompleteImage}
              source={setLocalImage(`checkWhite`)}
            />
          </View>
        )}
      </LinearGradient>
      <View style={styles.focusedInformationContainer}>
        <Text style={[titleFont, whiteFont, styles.titleAndTimeMargin]}>
          {exercise?.title}
        </Text>
        <Text
          ellipsizeMode="tail"
          style={[subheadFont, whiteFont]}
          numberOfLines={2}
        >
          now
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
          source={
            isExerciseComplete
              ? setLocalImage(`${exercise.image}White`)
              : setLocalImage(`${exercise.image}White`)
          }
        />
      </LinearGradient>
      <View style={styles.informationContainer}>
        <View style={styles.informationTopContainer}>
          <View style={styles.informationTopTextContainer}>
            <Text style={[titleFont, whiteFont, styles.titleAndTimeMargin]}>
              {exercise?.title}
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
          <Text
            ellipsizeMode="tail"
            style={[subheadFont, whiteFont]}
            numberOfLines={2}
          >
            {convertReminderTimeToReadable(exercise.reminderTime)}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default DailyExerciseListItem;
