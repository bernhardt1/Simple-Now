import React, { useEffect, useState } from 'react';
import { Easing } from 'react-native';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';

import { forFade } from './transitions';
import { forFadeHeader } from './headerTransitions';

import Practice from '../screens/Practice';
import Class from '../screens/Class';
import About from '../screens/About';
import AboutCourse from '../screens/AboutCourse';
import Loading from '../screens/Loading';
import Exercise from '../screens/Exercise';
import Exercise2 from '../screens/Exercise2';
import AboutExercise from '../screens/AboutExercise';
import GradientHeaderNormal from '../components/GradientHeaderNormal/GradientHeaderNormal';
import GradientHeaderLargeLogic from '../components/GradientHeaderLarge/GradientHeaderLargeLogic';

// const config = {
//   animation: 'timing',
//   config: {
//     duration: 500,
//     easing: Easing.ease,
//   },
// };

const Stack = createStackNavigator();

function BaseNavigation() {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   this.timeout = setTimeout(() => {
  //     setLoading(false);
  //   }, 2500);

  //   return () => {
  //     clearTimeout(this.timeout);
  //   };
  // });

  // if (loading) {
  //   return (
  //     <Stack.Navigator initialRouteName="Loading">
  //       <Stack.Screen
  //         name="Loading"
  //         component={Loading}
  //         options={{
  //           headerShown: false,
  //         }}
  //       />
  //     </Stack.Navigator>
  //   );
  // }

  return (
    <Stack.Navigator
      initialRouteName="Practice"
      mode="modal"
      headerMode="screen"
      screenOptions={{
        cardStyleInterpolator: forFade,
        headerStyle: {
          height: 200,
        },
        header: (props) => {
          const { scene, previous, navigation } = props;
          const { options } = scene.descriptor;

          return (
            <GradientHeaderLargeLogic
              scene={scene}
              leftButtonPress={previous ? navigation.goBack : undefined}
              headerStyle={options?.headerStyle}
              navigation={navigation}
            />
          );
        },
      }}
    >
      <Stack.Screen
        name="Practice"
        component={Practice}
        options={{
          headerStyle: {
            height: 80,
          },
          header: ({ scene, previous, navigation }) => {
            const { options } = scene.descriptor;
            const title =
              options.headerTitle !== undefined
                ? options.headerTitle
                : options.title !== undefined
                ? options.title
                : scene.route.name;

            return (
              <GradientHeaderNormal
                scene={scene}
                title={title}
                headerStyle={options.headerStyle}
                navigation={navigation}
              />
            );
          },
        }}
      />
      <Stack.Screen
        name="Class"
        component={Class}
        options={
          {
            // headerStyleInterpolator: forFadeHeader,
            // transitionSpec: {
            //   open: config,
            //   close: config,
            // },
          }
        }
      />
      <Stack.Screen name="Exercise" component={Exercise} />
      <Stack.Screen
        name="Exercise2"
        component={Exercise2}
        options={{
          headerStyle: {
            height: 0,
          },
          header: ({ scene, previous, navigation }) => {
            return null;
          },
        }}
      />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="AboutCourse" component={AboutCourse} />
      <Stack.Screen name="AboutExercise" component={AboutExercise} />
    </Stack.Navigator>
  );
}

export default BaseNavigation;
