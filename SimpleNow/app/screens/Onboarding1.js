import React from 'react';
import { Platform } from 'react-native';
import { OnboardingBasicScreen } from '../screenComponents/OnboardingBasicScreen';

const Onboarding1 = ({ navigation }) => {
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
      subtitle={'The app that helps you grow your mindulness practice'}
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
