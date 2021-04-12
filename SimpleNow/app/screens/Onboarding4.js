import React, { useEffect } from 'react';
import { Platform } from 'react-native';
import { connect } from 'react-redux';

import { updateOnboardingComplete } from '../actions/onboarding';

import { OnboardingBasicScreen } from '../screenComponents/OnboardingBasicScreen';

import tutorialComplete from '../helpers/analyticsHelpers/tutorialComplete';
import { addReminder } from '../actions/notifications';
import { updateNavigationDeepLink } from '../actions/navigation';
import createNavigationStateForExercise from '../helpers/createNavigationStateForExercise';

const Onboarding4 = ({
  navigation,
  reduxUpdateOnboardingComplete,
  reduxUpdateNavigationDeepLink,
  reduxAddReminder,
}) => {
  useEffect(() => {
    // Add 2 default reminders for morning & evening.
    const morningReminder = {
      id: 12340,
      time: '07:00',
      isMo: true,
      isTu: true,
      isWe: true,
      isTh: true,
      isFr: true,
      isSa: true,
      isSu: true,
    };

    reduxAddReminder(morningReminder);

    const eveningReminder = {
      id: 23450,
      time: '19:00',
      isMo: true,
      isTu: true,
      isWe: true,
      isTh: true,
      isFr: true,
      isSa: true,
      isSu: true,
    };

    reduxAddReminder(eveningReminder);

    // Navigate to the first exercise after onboarding
    const linkingState = createNavigationStateForExercise();
    reduxUpdateNavigationDeepLink(linkingState);
  }, []);

  const navigateBack = () => {
    navigation.goBack();
  };

  const nextScreen = () => {
    tutorialComplete();

    reduxUpdateOnboardingComplete(true);
  };

  return (
    <OnboardingBasicScreen
      navigation={navigation}
      title={
        Platform.OS === 'ios'
          ? "4 / 4: You're all set!"
          : "3 / 3: You're all set!"
      }
      subtitle={'Time for your first practice'}
      copy={
        "“The answer lies within ourselves. If we can't find peace and happiness there, it's not going to come from the outside.”\nTenzin Palmo"
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
    reduxAddReminder: (obj) => dispatch(addReminder(obj)),
    reduxUpdateNavigationDeepLink: (deepLinkState) =>
      dispatch(updateNavigationDeepLink(deepLinkState)),
  };
};

export default connect(null, mapDispatchToProps)(Onboarding4);
