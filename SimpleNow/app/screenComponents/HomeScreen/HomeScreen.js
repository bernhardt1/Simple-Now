import React, { useEffect, useState } from 'react';
import { ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import { CommonActions } from '@react-navigation/native';
import Modal from 'react-native-modal';

import { updateNavigationDeepLink } from '../../actions/navigation';
import { updateBackground } from '../../actions/settings';

import { HeaderSpacer } from '../../components/HeaderSpacer';
import { HeaderHome } from '../../components/HeaderHome';
import { PushPermissionModalContent } from '../../components/ModalContent/index';

import courseNotificationScheduler from '../../helpers/courseNotificationScheduler';
import setLocalImage from '../../helpers/setLocalImage';
import { BACKGROUND_IMAGE_COUNT } from '../../constants/magicNumbers';

import styles from './styles';

const HomeScreen = ({
  navigation,
  deepLinkState,
  background,
  reduxUpdateNavigationDeepLink,
  reduxUpdateBackground,
}) => {
  const [isPushPermissionVisible, setIsPushPermissionVisible] = useState(false);

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

  const checkPermissionsBeforeNavigating = async () => {
    if (Platform.OS !== 'ios') {
      navigateClass();
      return;
    }

    try {
      global.Notifications.checkPermission((permissions) => {
        if (permissions.notificationCenter) {
          navigateClass();
        } else {
          togglePushModal();
        }
      });
    } catch (error) {
      sentryCaptureMessage('error checking push permissions');
      togglePushModal();
    }
  };

  const changeBackground = () => {
    const current = background.split('background')[1];
    const result = current
      ? `background${(parseInt(current, 10) + 1) % BACKGROUND_IMAGE_COUNT}`
      : 'background1';

    reduxUpdateBackground(result);
  };

  const togglePushModal = () => {
    setIsPushPermissionVisible((prevPermission) => !prevPermission);
  };

  return (
    <ImageBackground
      style={styles.container}
      source={setLocalImage(background)}
    >
      <HeaderSpacer />
      <HeaderHome onPressHamburger={changeBackground} />

      <Modal coverScreen={false} isVisible={isPushPermissionVisible}>
        <PushPermissionModalContent onPress={togglePushModal} />
      </Modal>
    </ImageBackground>
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
