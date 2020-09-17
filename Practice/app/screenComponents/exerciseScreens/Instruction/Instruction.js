import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {StackActions} from '@react-navigation/native';

import styles from './styles';
import {centerAlign, titleFont} from '../../../styles/fonts';
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
      <View style={styles.scrollView}>
        <Text style={[titleFont, centerAlign]}>{exercise?.instructions}</Text>
      </View>

      <BottomButton title={'Next'} onPress={navigateNext} />
    </SafeAreaView>
  );
};

export default Instruction;
