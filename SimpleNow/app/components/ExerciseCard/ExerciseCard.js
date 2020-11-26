import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from './styles';
import { largeTitleFont, whiteFont } from '../../styles/fonts';
import LinearGradient from 'react-native-linear-gradient';

const ExerciseCard = ({
  exercise,
  exerciseIndex,
  navigation,
  color1,
  color2,
}) => {
  const navigateExercise = () => {
    navigation.navigate('Exercise', {
      exercise,
    });
  };

  return (
    <TouchableOpacity
      style={[styles.container]}
      onPress={navigateExercise}
      activeOpacity={0.7}
    >
      <LinearGradient
        colors={[color1, color2]}
        style={[styles.exerciseContainer]}
        useAngle={true}
        angle={135}
        angleCente={{ x: 0.5, y: 0.5 }}
      >
        <Text style={[largeTitleFont, whiteFont]}>{`${
          exerciseIndex + 1
        }`}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default ExerciseCard;
