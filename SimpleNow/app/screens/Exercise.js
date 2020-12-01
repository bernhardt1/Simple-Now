import React from 'react';
import { connect } from 'react-redux';

import { INSTRUCTION_EXERCISE_SCREEN } from '../constants/constants';
import { Instruction } from '../screenComponents/ExerciseScreens/Instruction';
import { StandardExercise } from '../screenComponents/ExerciseScreens/StandardExercise';

const Exercise = ({ route, navigation, practiceDuration }) => {
  const { exercise } = route.params;

  if (exercise?.screenType === INSTRUCTION_EXERCISE_SCREEN) {
    return <Instruction exercise={exercise} navigation={navigation} />;
  }

  return (
    <StandardExercise
      exercise={exercise}
      navigation={navigation}
      practiceDuration={practiceDuration * 1000}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    practiceDuration: state?.practice?.practiceDuration,
  };
};

export default connect(mapStateToProps)(Exercise);
