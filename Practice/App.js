/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';

import React from 'react';
import {View, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import BaseNavigation from './config/BaseNavigation';

const App: () => React$Node = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor={'transparent'}
      />
      <NavigationContainer>{<BaseNavigation />}</NavigationContainer>
    </View>
  );
};

export default App;
