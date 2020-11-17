import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';
import {
  titleFont,
  subheadFont,
  whiteFont,
  largeTitleFont,
  orangeFont,
  captionFont,
} from '../../styles/fonts';
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
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.informationLeftContainer}>
        <Text style={[titleFont, whiteFont]}>
          {`${exercise?.title}${isExerciseComplete ? ' - complete' : ''}`}
        </Text>
        <Text style={[captionFont, whiteFont]}>
          {isExerciseComplete ? 'complete' : `${exercise?.duration}`}
        </Text>
      </View>

      <Text
        ellipsizeMode="tail"
        style={[titleFont, orangeFont]}
        numberOfLines={2}
      >
        NEW
      </Text>
    </TouchableOpacity>
  );
};

export default ExerciseListItem;
