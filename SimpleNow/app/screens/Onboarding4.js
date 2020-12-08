import React from 'react';
import { Platform } from 'react-native';
import { connect } from 'react-redux';

import { updateOnboardingComplete } from '../actions/onboarding';

import { OnboardingBasicScreen } from '../screenComponents/OnboardingBasicScreen';

const Onboarding4 = ({ navigation, reduxUpdateOnboardingComplete }) => {
  const navigateBack = () => {
    navigation.goBack();
  };

  const nextScreen = () => {
    reduxUpdateOnboardingComplete(true);
  };

  return (
    <OnboardingBasicScreen
      navigation={navigation}
      title={
        Platform.OS === 'ios' ? '4 / 4: Take a Breath' : '3 / 3: Take a Breath'
      }
      subtitle={'You’re all set - Enjoy the journey!'}
      copy={
        "“The answer lies within ourselves. If we can't find peace and happiness there, it's not going to come from the outside.” - Tenzin Palmo"
      }
      buttonTitle={'Begin'}
      image={'cloud'}
      nextScreen={nextScreen}
      goBack={navigateBack}
    />
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    reduxUpdateOnboardingComplete: (val) =>
      dispatch(updateOnboardingComplete(val)),
  };
};

export default connect(null, mapDispatchToProps)(Onboarding4);
