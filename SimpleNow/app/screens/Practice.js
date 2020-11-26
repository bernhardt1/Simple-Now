import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import PracticeScreen from '../screenComponents/PracticeScreen/PracticeScreen';

import generatePractice from '../helpers/reduxHelpers/generatePractice';
import { resetAllContent } from '../actions/content';
import { updateCurrentPractice } from '../actions/practice';

const Practice = ({
  navigation,
  reduxPractice,
  reduxContent,
  reduxResetAllContent,
  reduxUpdateCurrentPractice,
}) => {
  useEffect(() => {
    generatePractice(reduxPractice, reduxContent, reduxUpdateCurrentPractice);
    // reduxResetAllContent();
  }, []);

  return <PracticeScreen navigation={navigation} />;
};

const mapStateToProps = (state) => {
  return {
    reduxPractice: state?.practice || {},
    reduxContent: state?.content || {},
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    reduxResetAllContent: (val) => dispatch(resetAllContent(val)),
    reduxUpdateCurrentPractice: (obj) => dispatch(updateCurrentPractice(obj)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Practice);
