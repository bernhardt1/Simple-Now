import React from 'react';
import { Platform } from 'react-native';
import { OnboardingBasicScreen } from '../screenComponents/OnboardingBasicScreen';

const Onboarding2 = ({ navigation }) => {
  const navigateBack = () => {
    navigation.goBack();
  };

  const nextScreen = (number) => {
    navigation.navigate(`Onboarding3`);
  };

  return (
    <OnboardingBasicScreen
      navigation={navigation}
      title={
        Platform.OS === 'ios'
          ? '2 / 4: Why Practice Mindfulness?'
          : '2 / 3: Why Practice Mindfulness?'
      }
      subtitle={'It’s as easy as being present'}
      copy={
        'Whether you want to boost performance, manage mental health, or get to know yourself better, mindfulness will help you move in the right direction.'
      }
      buttonTitle={'Continue'}
      image={'space'}
      nextScreen={nextScreen}
      goBack={navigateBack}
    />
  );
};

export default Onboarding2;
