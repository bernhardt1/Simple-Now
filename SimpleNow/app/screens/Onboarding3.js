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
        title={'3 / 4: Remembering to Practice'}
        subtitle={'Our most effective offering'}
        copy={
          'Choosing to use practice reminders is choosing to make mindfulness a part of your day. This is the best way we can help you.'
        }
        image={'desertNight'}
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
