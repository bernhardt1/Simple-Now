import React from 'react';
import { connect } from 'react-redux';

import { updateCourseClassExerciseIsComplete } from '../actions/courses';

import { StandardExercise } from '../screenComponents/exerciseScreens/StandardExercise';

const Exercise2 = ({ navigation }) => {
  return <StandardExercise navigation={navigation} />;
};

const mapDispatchToProps = (dispatch) => {
  return {
    reduxUpdateCourseClassExerciseIsComplete: (obj) =>
      dispatch(updateCourseClassExerciseIsComplete(obj)),
  };
};

export default connect(null, mapDispatchToProps)(Exercise2);
