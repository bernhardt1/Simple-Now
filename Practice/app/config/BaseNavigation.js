import React, { useEffect, useState } from 'react';
import { Easing } from 'react-native';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';

import { forFade } from './transitions';
import { forFadeHeader } from './headerTransitions';

import Home from '../screens/Home';
import Class from '../screens/Class';
import About from '../screens/About';
import AboutCourse from '../screens/AboutCourse';
import Loading from '../screens/Loading';
import Exercise from '../screens/Exercise';
import AboutExercise from '../screens/AboutExercise';
import GradientHeaderNormal from '../components/GradientHeaderNormal/GradientHeaderNormal';
import GradientHeaderLargeLogic from '../components/GradientHeaderLarge/GradientHeaderLargeLogic';

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
      initialRouteName="Home"
      mode="modal"
      headerMode="screen"
      screenOptions={{
        // transitionSpec: {
        //   open: {
        //     duration: 500,
        //   },
        //   close: {
        //     duration: 500,
        //   },
        // },
        cardStyleInterpolator: forFade,
        headerStyle: {
          height: 0,
        },
        header: (props) => {
          const { scene, previous, navigation } = props;
          const { options } = scene.descriptor;

          return null;

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
        name="Home"
        component={Home}
        options={{
          headerStyle: {
            height: 0,
          },
          header: ({ scene, previous, navigation }) => {
            const { options } = scene.descriptor;
            const title =
              options.headerTitle !== undefined
                ? options.headerTitle
                : options.title !== undefined
                ? options.title
                : scene.route.name;
            return null;

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
      <Stack.Screen name="Class" component={Class} />
      <Stack.Screen name="Exercise" component={Exercise} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="AboutCourse" component={AboutCourse} />
      <Stack.Screen name="AboutExercise" component={AboutExercise} />
    </Stack.Navigator>
  );
}

export default BaseNavigation;
