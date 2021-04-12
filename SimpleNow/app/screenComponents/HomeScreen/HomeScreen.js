import React, { useEffect } from 'react';
import { connect } from 'react-redux';

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

const HomeScreen = ({ navigation, background, reduxUpdateBackground }) => {
  useEffect(() => {
    // Run the course notification scheduler every time the app is opened
    // courseNotificationScheduler();
  }, [background]);

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
    background: state?.settings?.background || 'background1',
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    reduxUpdateBackground: (deepLinkState) =>
      dispatch(updateBackground(deepLinkState)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
