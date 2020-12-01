import React from 'react';
import { ScrollView, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux';
import { HeaderDefaultBack } from '../../components/HeaderDefaultBack';
import { HeaderSpacer } from '../../components/HeaderSpacer';
import { InvisibleSeparator } from '../../components/InvisibleSeparator';
import setLocalImage from '../../helpers/setLocalImage';
import {
  BACKGROUND_GRADIENT_1,
  BACKGROUND_GRADIENT_2,
} from '../../styles/colors';

import styles from './styles';

const SetRemindersScreen = ({ background, navigation }) => {
  const navigateBack = () => {
    navigation.goBack();
  };

  const navigateCreateReminder = () => {
    navigation.navigate('CreateReminder');
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
      <HeaderDefaultBack
        onPressBack={navigateBack}
        title={'Practice Reminders'}
        rightButtonImage={'plusOrange'}
        onPressRightButton={navigateCreateReminder}
      />

      <ScrollView bounces={false}>
        <InvisibleSeparator />
      </ScrollView>
    </LinearGradient>
  );
};

const mapStateToProps = (state) => {
  return {
    background: state?.settings?.background || 'background1',
  };
};

export default connect(mapStateToProps)(SetRemindersScreen);
