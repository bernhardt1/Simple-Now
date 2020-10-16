import React, { useEffect, useState } from 'react';
import { Easing } from 'react-native';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';

import { forFade } from './transitions';

import Home from '../screens/Home';
import Class from '../screens/Class';
import About from '../screens/About';
import AboutCourse from '../screens/AboutCourse';
import Exercise from '../screens/Exercise';
import AboutExercise from '../screens/AboutExercise';

const Stack = createStackNavigator();

function BaseNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      mode="modal"
      headerMode="screen"
      screenOptions={{
        cardStyleInterpolator: forFade,
        headerStyle: {
          height: 0,
        },
        header: () => {
          return null;
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerStyle: {
            height: 0,
          },
          header: () => {
            return null;
          },
        }}
      />
      <Stack.Screen name="Class" component={Class} />
      <Stack.Screen name="Exercise" component={Exercise} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="AboutCourse" component={AboutCourse} />
      <Stack.Screen name="AboutExercise" component={AboutExercise} />
    </Stack.Navigator>
  );
}

export default BaseNavigation;
