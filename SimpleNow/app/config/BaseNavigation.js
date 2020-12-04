import React from 'react';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';

import { forFade, forFadeDefault } from './transitions';

import Practice from '../screens/Practice';
import Program from '../screens/Program';
import Home from '../screens/Home';

import ChangePractice from '../screens/ChangePractice';
import EditPractice from '../screens/EditPractice';
import SetReminders from '../screens/SetReminders';
import CreateReminder from '../screens/CreateReminder';
import EditReminder from '../screens/EditReminder';

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
import { Platform } from 'react-native';

// const Tab = createBottomTabNavigator();

// function TabNavigation() {
//   return (
//     <Tab.Navigator
//       lazy={false}
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ focused, color, size }) => {
//           let iconName;

//           if (route.name === 'TIMER') {
//             iconName = focused ? 'time' : 'time-outline';
//           } else if (route.name === 'HOME') {
//             iconName = focused ? 'home' : 'home-outline';
//           } else if (route.name === 'PRACTICE') {
//             iconName = focused ? 'heart' : 'heart-outline';
//           }

//           // You can return any component that you like here!
//           return <Ionicons name={iconName} size={size} color={color} />;
//         },
//       })}
//       tabBarOptions={{
//         activeTintColor: BRAND_BLACK,
//         inactiveTintColor: BRAND_BLACK_UNSELECTED,
//         labelStyle: {
//           fontFamily: 'AvenirNextRoundedPro-Reg',
//           fontWeight: '500',
//           fontSize: 12,
//         },
//         style: {
//           backgroundColor: BRAND_WHITE_OFF,
//         },
//       }}
//     >
//       <Tab.Screen name="PRACTICE" component={Practice} />
//       <Tab.Screen name="TIMER" component={TimerSetup} />
//       <Tab.Screen name="HOME" component={Home} />
//     </Tab.Navigator>
//   );
// }

const Stack = createStackNavigator();

function BaseNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="Practice"
      mode={Platform.OS === 'ios' ? 'modal' : 'card'}
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
      <Stack.Screen name="Practice" component={Practice} />

      <Stack.Screen
        name="ChangePractice"
        component={ChangePractice}
        options={
          Platform.OS === 'ios'
            ? {}
            : {
                ...TransitionPresets.DefaultTransition,
              }
        }
      />
      <Stack.Screen
        name="EditPractice"
        component={EditPractice}
        options={
          Platform.OS === 'ios'
            ? {}
            : {
                ...TransitionPresets.SlideFromRightIOS,
              }
        }
      />
      <Stack.Screen
        name="Program"
        component={Program}
        options={
          Platform.OS === 'ios'
            ? {}
            : {
                ...TransitionPresets.ModalTransition,
              }
        }
      />

      <Stack.Screen
        name="SetReminders"
        component={SetReminders}
        options={
          Platform.OS === 'ios'
            ? {}
            : {
                ...TransitionPresets.SlideFromRightIOS,
              }
        }
      />
      <Stack.Screen
        name="CreateReminder"
        component={CreateReminder}
        options={
          Platform.OS === 'ios'
            ? {}
            : {
                ...TransitionPresets.ModalSlideFromBottomIOS,
              }
        }
      />
      <Stack.Screen
        name="EditReminder"
        component={EditReminder}
        options={
          Platform.OS === 'ios'
            ? {}
            : {
                ...TransitionPresets.ModalSlideFromBottomIOS,
              }
        }
      />

      <Stack.Screen name="Timer" component={Timer} />
      <Stack.Screen name="SetBellInterval" component={SetBellInterval} />

      <Stack.Screen
        name="Exercise"
        component={Exercise}
        options={Platform.OS === 'ios' ? {} : {}}
      />
      <Stack.Screen
        name="AboutExercise"
        component={AboutExercise}
        options={
          Platform.OS === 'ios'
            ? {}
            : {
                ...TransitionPresets.SlideFromRightIOS,
              }
        }
      />

      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="AboutCourse" component={AboutCourse} />
    </Stack.Navigator>
  );
}

export default BaseNavigation;
