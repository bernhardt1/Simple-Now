import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { CommonActions } from '@react-navigation/native';

import { updateNavigationDeepLink } from '../../actions/navigation';
import { updateBackground } from '../../actions/settings';

import { HeaderSpacer } from '../../components/HeaderSpacer';
import { HeaderHome } from '../../components/HeaderHome';

import { BACKGROUND_IMAGE_COUNT } from '../../constants/magicNumbers';

import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {
  BACKGROUND_GRADIENT_1,
  BACKGROUND_GRADIENT_2,
} from '../../styles/colors';

const HomeScreen = ({
  navigation,
  deepLinkState,
  background,
  reduxUpdateNavigationDeepLink,
  reduxUpdateBackground,
}) => {
  useEffect(() => {
    // handleDeepLinkNavigation(deepLinkState);
    // Run the course notification scheduler every time the app is opened
    // courseNotificationScheduler();
  }, [deepLinkState, background]);

  const handleDeepLinkNavigation = () => {
    if (!deepLinkState) return;

    navigation.dispatch((state) => {
      const newState = CommonActions.reset({
        index: 0,
        ...deepLinkState,
      });

      return newState;
    });

    // Reset the route after handling it
    reduxUpdateNavigationDeepLink(null);
  };

  const changeBackground = () => {
    const current = background.split('background')[1];
    const result = current
      ? `background${(parseInt(current, 10) + 1) % BACKGROUND_IMAGE_COUNT}`
      : 'background1';

    reduxUpdateBackground(result);
  };

  return (
    <LinearGradient
      style={styles.container}
      colors={[BACKGROUND_GRADIENT_1, BACKGROUND_GRADIENT_2]}
      useAngle={true}
      angle={150}
      angleCenter={{ x: 0.5, y: 0.5 }}
    >
      <HeaderSpacer />
      <HeaderHome onPressHamburger={changeBackground} />
    </LinearGradient>
  );
};

const mapStateToProps = (state) => {
  return {
    deepLinkState: state?.navigation?.deepLinkState || null,
    background: state?.settings?.background || 'background1',
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    reduxUpdateNavigationDeepLink: (deepLinkState) =>
      dispatch(updateNavigationDeepLink(deepLinkState)),
    reduxUpdateBackground: (deepLinkState) =>
      dispatch(updateBackground(deepLinkState)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
