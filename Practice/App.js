/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler'; // need this for react-navigation
import React, {Component} from 'react';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import {store, persistor} from './app/config/store';
import AppSetup from './app/setup/AppSetup';

class App extends Component {
  render() {
    const {initialNotificationUserInfo} = this.props;

    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppSetup initialNotification={initialNotificationUserInfo?.screen} />
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
