import React from 'react';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import { Platform } from 'react-native';

import Onboarding1 from '../screens/Onboarding1';
import Onboarding2 from '../screens/Onboarding2';
import Onboarding3 from '../screens/Onboarding3';
import Onboarding4 from '../screens/Onboarding4';

const Stack = createStackNavigator();

function OnboardingNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="Onboarding1"
      mode={Platform.OS === 'ios' ? 'modal' : 'card'}
      headerMode="screen"
      screenOptions={{
        headerStyle: {
          height: 0,
        },
        header: () => {
          return null;
        },
      }}
    >
      <Stack.Screen
        name="Onboarding1"
        component={Onboarding1}
        options={{
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <Stack.Screen
        name="Onboarding2"
        component={Onboarding2}
        options={{
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <Stack.Screen
        name="Onboarding3"
        component={Onboarding3}
        options={{
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <Stack.Screen
        name="Onboarding4"
        component={Onboarding4}
        options={{
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
    </Stack.Navigator>
  );
}

export default OnboardingNavigation;
