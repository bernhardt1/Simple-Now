import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {StackActions} from '@react-navigation/native';

import styles from './styles';
import {bodyFont} from '../../../styles/fonts';
import BottomButton from '../../../components/BottomButton/BottomButton';
import {EXERCISE_SCREEN} from '../../../constants/constants';

const Instruction = ({
  exercise,
  nextExercise,
  classIndex,
  exerciseIndex,
  navigation,
  markAsComplete,
}) => {
  const navigateNext = () => {
    markAsComplete();

    navigation.dispatch(
      StackActions.replace('Exercise', {
        exercise: nextExercise,
        screenType: EXERCISE_SCREEN,
        classIndex,
        exerciseIndex: exerciseIndex + 1,
      }),
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={bodyFont}>{exercise?.instructions}</Text>
      </View>

      <BottomButton title={'Next'} onPress={navigateNext} />
    </SafeAreaView>
  );
};

export default Instruction;
