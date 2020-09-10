import React, {useEffect, useState} from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

import Practice from '../screens/Practice';
import Day from '../screens/Day';
import About from '../screens/About';
import AboutCourse from '../screens/AboutCourse';
import Loading from '../screens/Loading';
import GradientHeaderNormal from '../components/GradientHeaderNormal/GradientHeaderNormal';
import GradientHeaderLargeLogic from '../components/GradientHeaderLarge/GradientHeaderLargeLogic';

const Stack = createStackNavigator();

function BaseNavigation() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    this.timeout = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => {
      clearTimeout(this.timeout);
    };
  });

  if (loading) {
    return (
      <Stack.Navigator initialRouteName="Loading">
        <Stack.Screen
          name="Loading"
          component={Loading}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    );
  }

  return (
    <Stack.Navigator
      initialRouteName="Practice"
      mode="modal"
      headerMode="screen"
      screenOptions={{
        headerStyle: {
          height: 200,
        },
        header: (props) => {
          const {scene, previous, navigation} = props;
          const {options} = scene.descriptor;

          return (
            <GradientHeaderLargeLogic
              scene={scene}
              leftButtonPress={previous ? navigation.goBack : undefined}
              headerStyle={options?.headerStyle}
              navigation={navigation}
            />
          );
        },
      }}>
      <Stack.Screen
        name="Practice"
        component={Practice}
        options={{
          animationEnabled: false,
          headerStyle: {
            height: 80,
          },
          header: ({scene, previous, navigation}) => {
            const {options} = scene.descriptor;
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
        name="Day"
        component={Day}
        options={{
          animationEnabled: false,
        }}
      />
      <Stack.Screen
        name="About"
        component={About}
        options={{
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <Stack.Screen
        name="AboutCourse"
        component={AboutCourse}
        options={{
          animationEnabled: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default BaseNavigation;
