import React from 'react';
import { connect } from 'react-redux';

import { updateCourseClassExerciseIsComplete } from '../actions/courses';

import { INSTRUCTION_EXERCISE_SCREEN } from '../constants/constants';
import { Instruction } from '../screenComponents/exerciseScreens/Instruction';
import { StandardExercise } from '../screenComponents/exerciseScreens/StandardExercise';

const Exercise = ({
  route,
  navigation,
  reduxUpdateCourseClassExerciseIsComplete,
}) => {
  const {
    exercise,
    nextExercise,
    classIndex,
    exerciseIndex,
    courseId,
  } = route.params;
  const markAsComplete = () => {
    const updateArgs = {
      courseId,
      class: classIndex,
      exercise: exerciseIndex,
      isComplete: true,
    };

    reduxUpdateCourseClassExerciseIsComplete(updateArgs);
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
    <StandardExercise
      exercise={exercise}
      navigation={navigation}
      markAsComplete={markAsComplete}
    />
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    reduxUpdateCourseClassExerciseIsComplete: (obj) =>
      dispatch(updateCourseClassExerciseIsComplete(obj)),
  };
};

export default connect(null, mapDispatchToProps)(Exercise);
