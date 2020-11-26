import React from 'react';
import { connect } from 'react-redux';

import { INSTRUCTION_EXERCISE_SCREEN } from '../constants/constants';
import { Instruction } from '../screenComponents/ExerciseScreens/Instruction';
import { StandardExercise } from '../screenComponents/ExerciseScreens/StandardExercise';

const Exercise = ({ route, navigation, activeCourseId }) => {
  const { exercise, nextExercise, classIndex, exerciseIndex } = route.params;

  if (exercise?.screenType === INSTRUCTION_EXERCISE_SCREEN) {
    return (
      <Instruction
        exercise={exercise}
        nextExercise={nextExercise}
        classIndex={classIndex}
        exerciseIndex={exerciseIndex}
        navigation={navigation}
      />
    );
  }

  return <StandardExercise exercise={exercise} navigation={navigation} />;
};

const mapStateToProps = (state) => {
  return {
    activeCourseId: state?.courses?.activeCourseId,
  };
};

export default connect(mapStateToProps)(Exercise);
