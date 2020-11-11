import React from 'react';
import { connect } from 'react-redux';

import { updateCourseClassExerciseIsComplete } from '../actions/courses';

import { INSTRUCTION_EXERCISE_SCREEN } from '../constants/constants';
import { Instruction } from '../screenComponents/ExerciseScreens/Instruction';
import { StandardExercise } from '../screenComponents/ExerciseScreens/StandardExercise';

const Exercise = ({
  route,
  navigation,
  activeCourseId,
  reduxUpdateCourseClassExerciseIsComplete,
}) => {
  const { exercise, nextExercise, classIndex, exerciseIndex } = route.params;

  const markAsComplete = () => {
    const updateArgs = {
      courseId: activeCourseId,
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

const mapStateToProps = (state) => {
  return {
    activeCourseId: state?.courses?.activeCourseId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    reduxUpdateCourseClassExerciseIsComplete: (obj) =>
      dispatch(updateCourseClassExerciseIsComplete(obj)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Exercise);
