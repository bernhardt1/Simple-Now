import React from 'react';
import { ScrollView, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import { HeaderDefaultBack } from '../../components/HeaderDefaultBack';
import { HeaderSpacer } from '../../components/HeaderSpacer';
import { InvisibleSeparator } from '../../components/InvisibleSeparator';
import setLocalImage from '../../helpers/setLocalImage';

import styles from './styles';

const SetRemindersScreen = ({ background, navigation }) => {
  const navigateBack = () => {
    navigation.goBack();
  };

  const navigateCreateReminder = () => {
    navigation.navigate('CreateReminder');
  };

  return (
    <ImageBackground
      style={styles.container}
      source={setLocalImage(background)}
    >
      <HeaderSpacer />

      <ScrollView bounces={false}>
        <HeaderDefaultBack
          onPressBack={navigateBack}
          title={'Practice Reminders'}
          rightButtonImage={'plusOrange'}
          onPressRightButton={navigateCreateReminder}
        />
        <InvisibleSeparator />
      </ScrollView>
    </ImageBackground>
  );
};

const mapStateToProps = (state) => {
  return {
    background: state?.settings?.background || 'background1',
  };
};

export default connect(mapStateToProps)(SetRemindersScreen);
