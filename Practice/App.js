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

import * as Sentry from '@sentry/react-native';

Sentry.init({
  dsn:
    'https://ad1f639ecb8f40a195ea0ad6db387752@o453134.ingest.sentry.io/5441618',
});

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
