import React from 'react';
import { ImageBackground, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { HeaderSpacer } from '../../components/HeaderSpacer';
import { StandardSettingButton } from '../../components/StandardSettingButton';
import { StandardButton } from '../../components/StandardButton';
import setLocalImage from '../../helpers/setLocalImage';

import styles from './styles';
import {
  captionFont,
  footnoteFont,
  largeTitleFont,
  titleFont,
  whiteFont,
} from '../../styles/fonts';

const PracticeScreen = ({ background, navigation }) => {
  return (
    <ImageBackground
      style={styles.container}
      source={setLocalImage(background)}
    >
      <HeaderSpacer transparent />
      <View style={styles.headerSection}>
        <Text style={[titleFont, whiteFont]}>Get ready to practice</Text>
        <StandardSettingButton
          title={'APPLYING MINDFULNESS'}
          imageName={'editWhite'}
          onPress={() => navigation.navigate('ChangePractice')}
        />
      </View>
      <View style={styles.centerSection}>
        <View style={styles.centerCircle}>
          <Text style={[captionFont, whiteFont, styles.textSpacing]}>
            You've practiced
          </Text>
          <Text style={[largeTitleFont, whiteFont]}>13 times</Text>
          <Text style={[captionFont, whiteFont]}>this week</Text>
        </View>
      </View>
      <View style={styles.bottomSection}>
        <View style={styles.upperBottomSection}>
          <Text style={[titleFont, whiteFont]}>Up next</Text>
          <StandardButton title={'Day Two'} />
        </View>
        <View style={styles.lowerBottomSection}>
          <StandardSettingButton
            title={'CHANGE PRACTICE'}
            onPress={() => navigation.navigate('ChangePractice')}
          />
          <View style={styles.infoButtonContainer}>
            <StandardSettingButton
              title={'SET REMINDERS'}
              onPress={() => navigation.navigate('SetReminders')}
            />
            <Text style={[footnoteFont, whiteFont]}>WEEK DAYS @ 6 AM</Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const mapStateToProps = (state) => {
  return {
    background: state?.settings?.background || 'background1',
  };
};

export default connect(mapStateToProps)(PracticeScreen);
