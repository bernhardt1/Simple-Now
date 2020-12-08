import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import PracticeScreen from '../screenComponents/PracticeScreen/PracticeScreen';

import generatePractice from '../helpers/reduxHelpers/generatePractice';
import { resetAllContent } from '../actions/content';
import {
  resetCurrentPractice,
  updateCurrentPractice,
} from '../actions/practice';

const Practice = ({
  navigation,
  reduxPractice,
  reduxContent,
  reduxResetAllContent,
  reduxUpdateCurrentPractice,
  reduxResetCurrentPractice,
}) => {
  useEffect(() => {
    generatePractice(reduxPractice, reduxContent, reduxUpdateCurrentPractice);
    // reduxResetAllContent();
  }, []);

  return (
    <PracticeScreen
      navigation={navigation}
      reduxResetCurrentPractice={reduxResetCurrentPractice}
      reduxContent={reduxContent}
    />
  );
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
    reduxResetCurrentPractice: (obj) => dispatch(resetCurrentPractice(obj)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Practice);
