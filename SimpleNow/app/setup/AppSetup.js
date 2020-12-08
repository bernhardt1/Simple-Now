import React, { Component } from 'react';
import { View, StatusBar, Alert, Linking, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import PushNotificationIOS from '@react-native-community/push-notification-ios';

import { connect } from 'react-redux';

import sentryCaptureMessage from '../helpers/errorHelpers/sentryCaptureMessage';

import NotificationService from '../notifications/NotificationService';
import BaseNavigation from '../config/BaseNavigation';
import linking from '../config/linking';
import { updateNavigationDeepLink } from '../actions/navigation';
import convertUrlToPath from '../helpers/convertUrlToPath';
import createNavigationStateForExercise from '../helpers/createNavigationStateForExercise';
import OnboardingNavigation from '../config/OnboardingNavigation';
import LinearGradient from 'react-native-linear-gradient';
import {
  BACKGROUND_GRADIENT_1,
  BACKGROUND_GRADIENT_2,
  DARK_OVERLAY,
} from '../styles/colors';

class AppSetup extends Component {
  constructor(props) {
    super(props);

    this.notif = new NotificationService(
      this.onRegister.bind(this),
      this.onNotif.bind(this)
    );

    global.Notifications = this.notif;
    Linking.addEventListener('url', this.onLink);

    // handle initial notification iOS
    const { initialNotification } = props;
    if (initialNotification) this.onLink(initialNotification);
  }

  async componentDidMount() {
    const initialUrl = await Linking.getInitialURL();
    if (initialUrl) this.onLink(initialUrl);
  }

  componentWillUnmount() {
    Linking.removeEventListener('url', this.onLink);
  }

  onLink = (incomingUrl) => {
    try {
      const { reduxUpdateNavigationDeepLink } = this.props;
      let url = incomingUrl;
      if (incomingUrl?.url) url = incomingUrl.url;
      if (Platform.OS === 'ios' && url?.url) url = url.url;

      const path = convertUrlToPath(url);
      const linkingState = createNavigationStateForExercise(path);

      reduxUpdateNavigationDeepLink(linkingState);
    } catch (e) {
      sentryCaptureMessage('caught onlink error', incomingUrl);
      return;
    }
  };

  onRegister(token) {
    this.setState({ registerToken: token.token, fcmRegistered: true });
  }

  onNotif(notif) {
    this.onLink(notif?.data?.screen);
  }

  handlePerm(perms) {
    Alert.alert('Permissions', JSON.stringify(perms));
  }

  render() {
    const { onboardingComplete } = this.props;
    return (
      <LinearGradient
        style={{ flex: 1 }}
        colors={[BACKGROUND_GRADIENT_1, BACKGROUND_GRADIENT_2]}
        useAngle={true}
        angle={150}
        angleCenter={{ x: 0.5, y: 0.5 }}
      >
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor={'transparent'}
        />
        <NavigationContainer linking={linking}>
          {onboardingComplete && <BaseNavigation />}
          {!onboardingComplete && <OnboardingNavigation />}
        </NavigationContainer>
      </LinearGradient>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    onboardingComplete: state?.onboarding?.onboardingComplete,
    activePrograms: state?.practice?.activePrograms || [],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    reduxUpdateNavigationDeepLink: (deepLinkState) =>
      dispatch(updateNavigationDeepLink(deepLinkState)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppSetup);
