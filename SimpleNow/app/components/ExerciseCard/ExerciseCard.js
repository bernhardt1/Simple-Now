import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import styles from './styles';
import { captionFont, largeTitleFont, whiteFont } from '../../styles/fonts';
import LinearGradient from 'react-native-linear-gradient';

const ExerciseCard = ({
  exercise,
  exerciseIndex,
  navigation,
  isExerciseComplete,
  isExerciseNextAvailable,
  color1,
  color2,
}) => {
  const navigateExercise = () => {
    navigation.navigate('Exercise', {
      exercise,
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={navigateExercise} activeOpacity={0.7}>
        <LinearGradient
          colors={['transparent', 'transparent']}
          style={[styles.exerciseContainer]}
          useAngle={true}
          angle={135}
          angleCenter={{ x: 0.5, y: 0.5 }}
        >
          <Text style={[largeTitleFont, whiteFont]}>{`${
            exerciseIndex + 1
          }`}</Text>
        </LinearGradient>
      </TouchableOpacity>
      {isExerciseNextAvailable && !isExerciseComplete && (
        <View style={styles.nextIndicator}>
          <Text style={[captionFont]}>NEXT</Text>
        </View>
      )}
      {!isExerciseComplete && !isExerciseNextAvailable && (
        <View style={styles.blockerContainer} />
      )}
    </View>
  );
};

export default ExerciseCard;
