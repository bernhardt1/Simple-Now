import React, { useEffect } from 'react';
import { Platform } from 'react-native';

import { OnboardingBasicScreen } from '../screenComponents/OnboardingBasicScreen';

import tutorialBegin from '../helpers/analyticsHelpers/tutorialBegin';
import joinGroup from '../helpers/analyticsHelpers/joinGroup';
import {
  ANALYTICS_BREATH,
  ANALYTICS_DAILY_SESSION_COUNT,
  ANALYTICS_HEAR,
  ANALYTICS_NOTIFICATION_OFF,
  ANALYTICS_SENSATION,
  ANALYTICS_SESSION_DURATION,
  ANALYTICS_SOUND_ON,
} from '../helpers/analyticsHelpers/constants';

const Onboarding1 = ({ navigation }) => {
  useEffect(() => {
    tutorialBegin();

    joinGroup(`3_${ANALYTICS_DAILY_SESSION_COUNT}`);
    joinGroup(`30_${ANALYTICS_SESSION_DURATION}`);
    joinGroup(ANALYTICS_BREATH);
    joinGroup(ANALYTICS_SENSATION);
    joinGroup(ANALYTICS_HEAR);
    joinGroup(ANALYTICS_SOUND_ON);
    joinGroup(ANALYTICS_NOTIFICATION_OFF);
  }, []);

  const nextScreen = (number) => {
    navigation.navigate(`Onboarding2`);
  };

  return (
    <OnboardingBasicScreen
      navigation={navigation}
      title={
        Platform.OS === 'ios'
          ? '1 / 4: Welcome to Simple Now!'
          : '1 / 3: Welcome to Simple Now!'
      }
      subtitle={'The app that helps you grow your mindfulness practice'}
      copy={
        'Build a mindfulness practice that works for you with Simple Now - expert content, insights, and accountability to unlock the life-changing benefits of mindfulness.'
      }
      buttonTitle={'Get Started'}
      image={'mountain'}
      nextScreen={nextScreen}
    />
  );
};

export default Onboarding1;
