import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';
import {
  titleFont,
  whiteFont,
  orangeFont,
  captionFont,
} from '../../styles/fonts';

const DailyExerciseItem = ({
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
  const navigateExercise = () => {
    //   if (isExerciseAvailable(reduxCourse, course, classIndex, exerciseIndex)) {
    //     navigateExercise();
    //   } else {
    //     Alert.alert(
    //       'Exercise Not Available',
    //       'This exercise is scheduled for later.',
    //       [
    //         {
    //           text: 'OK',
    //         },
    //       ]
    //     );
    //   }
    // };

    navigation.navigate('Exercise', {
      exercise,
    });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={navigateExercise}>
      <View style={styles.informationLeftContainer}>
        <Text style={[titleFont, whiteFont]}>
          {`${exercise?.title}${isExerciseComplete ? ' - complete' : ''}`}
        </Text>
        {isExerciseComplete && (
          <Text style={[captionFont, whiteFont]}>complete</Text>
        )}
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

export default DailyExerciseItem;
