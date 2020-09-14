import React from 'react';
import {connect} from 'react-redux';

import {updateAwarenessBeginnerClassExerciseIsComplete} from '../actions/awarenessBeginner';

import {INSTRUCTION_EXERCISE_SCREEN} from '../constants/constants';
import {Instruction} from '../screenComponents/exerciseScreens/Instruction';
import {BasicExercise} from '../screenComponents/exerciseScreens/BasicExercise';

const Exercise = ({
  route,
  navigation,
  reduxUpdateAwarenessBeginnerClassExerciseIsComplete,
}) => {
  const {exercise, nextExercise, classIndex, exerciseIndex} = route.params;
  const markAsComplete = () => {
    const updateArgs = {
      class: classIndex,
      exercise: exerciseIndex,
      isComplete: true,
    };

    reduxUpdateAwarenessBeginnerClassExerciseIsComplete(updateArgs);
  };

  if (exercise?.screenType === INSTRUCTION_EXERCISE_SCREEN) {
    return (
      <Instruction
        exercise={exercise}
        nextExercise={nextExercise}
        classIndex={classIndex}
        exerciseIndex={exerciseIndex}
        navigation={navigation}
        markAsComplete={markAsComplete}
      />
    );
  }

  return (
    <BasicExercise
      exercise={exercise}
      navigation={navigation}
      markAsComplete={markAsComplete}
    />
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    reduxUpdateAwarenessBeginnerClassExerciseIsComplete: (obj) =>
      dispatch(updateAwarenessBeginnerClassExerciseIsComplete(obj)),
  };
};

export default connect(null, mapDispatchToProps)(Exercise);
