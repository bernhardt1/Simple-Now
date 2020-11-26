import React from 'react';
import { ImageBackground, View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { HeaderSpacer } from '../../components/HeaderSpacer';
import { StandardSettingButton } from '../../components/StandardSettingButton';
import { StandardButton } from '../../components/StandardButton';
import { DailyExerciseItem } from '../../components/DailyExerciseItem';
import setLocalImage from '../../helpers/setLocalImage';

import styles from './styles';
import {
  captionFont,
  footnoteFont,
  largeTitleFont,
  titleFont,
  whiteFont,
} from '../../styles/fonts';

const PracticeScreen = ({ background, navigation, currentPractice }) => {
  return (
    <ImageBackground
      style={styles.container}
      source={setLocalImage(background)}
    >
      <HeaderSpacer transparent />
      <View style={styles.topSection}>
        <StandardSettingButton
          title={'CHANGE PRACTICE'}
          imageName={'editWhite'}
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
        <Text style={[titleFont, whiteFont]}>Today's Practice</Text>
        <FlatList
          data={currentPractice}
          renderItem={({ item, index }) => {
            return (
              <DailyExerciseItem exercise={item} navigation={navigation} />
            );
          }}
          contentContainerStyle={styles.flatlistContainer}
        />
      </View>
    </ImageBackground>
  );
};

const mapStateToProps = (state) => {
  return {
    background: state?.settings?.background || 'background1',
    currentPractice: state?.practice?.currentPractice || [],
  };
};

export default connect(mapStateToProps)(PracticeScreen);
