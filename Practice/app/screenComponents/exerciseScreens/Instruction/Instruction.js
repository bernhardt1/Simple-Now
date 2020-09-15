import React from 'react';
import {ScrollView, Text, SafeAreaView} from 'react-native';
import {StackActions} from '@react-navigation/native';

import styles from './styles';
import {bodyFont} from '../../../styles/fonts';
import BottomButton from '../../../components/BottomButton/BottomButton';
import {EXERCISE_SCREEN} from '../../../constants/constants';
import {InvisibleSeparator} from '../../../components/InvisibleSeparator';

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
      <ScrollView style={styles.scrollView}>
        <Text style={bodyFont}>{exercise?.instructions}</Text>
        <InvisibleSeparator />
        <InvisibleSeparator />
        <InvisibleSeparator />
        <InvisibleSeparator />
        <InvisibleSeparator />
      </ScrollView>

      <BottomButton title={'Next'} onPress={navigateNext} />
    </SafeAreaView>
  );
};

export default Instruction;
