import React from 'react';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';

import { forFade } from './transitions';

import Practice from '../screens/Practice';
import Program from '../screens/Program';
import Home from '../screens/Home';

import ChangePractice from '../screens/ChangePractice';
import EditPractice from '../screens/EditPractice';
import SetReminders from '../screens/SetReminders';
import CreateReminder from '../screens/CreateReminder';

import TimerSetup from '../screens/TimerSetup';
import Timer from '../screens/Timer';
import SetBellInterval from '../screens/SetBellInterval';

import About from '../screens/About';
import AboutCourse from '../screens/AboutCourse';
import Exercise from '../screens/Exercise';
import AboutExercise from '../screens/AboutExercise';
import {
  BRAND_BLACK,
  BRAND_BLACK_UNSELECTED,
  BRAND_WHITE_OFF,
} from '../styles/colors';

const Tab = createBottomTabNavigator();

function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'TIMER') {
            iconName = focused ? 'time' : 'time-outline';
          } else if (route.name === 'HOME') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'PRACTICE') {
            iconName = focused ? 'heart' : 'heart-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: BRAND_BLACK,
        inactiveTintColor: BRAND_BLACK_UNSELECTED,
        labelStyle: {
          fontFamily: 'AvenirNextRoundedPro-Reg',
          fontWeight: '500',
          fontSize: 12,
        },
        style: {
          backgroundColor: BRAND_WHITE_OFF,
        },
      }}
    >
      <Tab.Screen name="PRACTICE" component={Practice} />
      <Tab.Screen name="TIMER" component={TimerSetup} />
      <Tab.Screen name="HOME" component={Home} />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

function BaseNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="TabNavigation"
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
      <Stack.Screen name="TabNavigation" component={TabNavigation} />

      <Stack.Screen name="ChangePractice" component={ChangePractice} />
      <Stack.Screen name="EditPractice" component={EditPractice} />
      <Stack.Screen name="Program" component={Program} />

      <Stack.Screen name="SetReminders" component={SetReminders} />
      <Stack.Screen name="CreateReminder" component={CreateReminder} />

      <Stack.Screen name="Timer" component={Timer} />
      <Stack.Screen name="SetBellInterval" component={SetBellInterval} />

      <Stack.Screen name="Exercise" component={Exercise} />
      <Stack.Screen name="AboutExercise" component={AboutExercise} />

      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="AboutCourse" component={AboutCourse} />
    </Stack.Navigator>
  );
}

export default BaseNavigation;
