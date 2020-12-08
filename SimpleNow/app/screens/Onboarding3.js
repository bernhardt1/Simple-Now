import React, { useState } from 'react';
import { View } from 'react-native';
import Modal from 'react-native-modal';

import { PushPermissionModalContent } from '../components/ModalContent';
import { OnboardingScrollwheelScreen } from '../screenComponents/OnboardingScrollwheelScreen';

const Onboarding3 = ({ navigation }) => {
  const [isPermissionModalVisible, setIsPermissionModalVisible] = useState(
    false
  );

  const navigateBack = () => {
    navigation.goBack();
  };

  const nextScreen = (number) => {
    navigation.navigate(`Onboarding4`);
  };

  const togglePushModal = () => {
    setIsPermissionModalVisible((prevPermission) => !prevPermission);
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'transparent' }}>
      <OnboardingScrollwheelScreen
        navigation={navigation}
        title={'3 / 4: A Mindful Reminder'}
        subtitle={'Would you like to receive our morning mindfulness reminder?'}
        copy={
          'This single reminder can greatly help you with establishing your daily practice.'
        }
        buttonTitle={'Continue'}
        nextScreen={nextScreen}
        goBack={navigateBack}
        togglePushModal={togglePushModal}
      />
      <Modal coverScreen={false} isVisible={isPermissionModalVisible}>
        <PushPermissionModalContent onPress={togglePushModal} />
      </Modal>
    </View>
  );
};

export default Onboarding3;
