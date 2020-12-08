import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import DatePicker from 'react-native-date-picker';
import Moment from 'moment';

import { HeaderDefaultBack } from '../../components/HeaderDefaultBack';
import { HeaderSpacer } from '../../components/HeaderSpacer';
import { InvisibleSeparator } from '../../components/InvisibleSeparator';
import setLocalImage from '../../helpers/setLocalImage';

import styles from './styles';
import {
  BACKGROUND_GRADIENT_1,
  BACKGROUND_GRADIENT_2,
  BRAND_WHITE,
} from '../../styles/colors';
import { StandardButton } from '../../components/StandardButton';
import {
  bodyFont,
  boldSubheadFont,
  titleFont,
  whiteFont,
} from '../../styles/fonts';
import { verticalButtonsMargin } from '../../styles/spacings';
import LinearGradient from 'react-native-linear-gradient';
import { addReminder } from '../../actions/notifications';

const CreateReminderScreen = ({ background, navigation, reduxAddReminder }) => {
  const [date, setDate] = useState(new Date());
  const [isMonday, setIsMonday] = useState(true);
  const [isTuesday, setIsTuesday] = useState(true);
  const [isWednesday, setIsWednesday] = useState(true);
  const [isThursday, setIsThursday] = useState(true);
  const [isFriday, setIsFriday] = useState(true);
  const [isSaturday, setIsSaturday] = useState(true);
  const [isSunday, setIsSunday] = useState(true);

  const onPressSave = () => {
    var d = new Date();
    var seconds = `${Math.floor(d.getTime() / 1000)}`;
    const idTimePortion = seconds.substr(seconds.length - 5);
    const id = `${idTimePortion}0`;

    const time = Moment(date).format('HH:mm');

    const reminderObj = {
      id,
      time,
      isMo: isMonday,
      isTu: isTuesday,
      isWe: isWednesday,
      iTh: isThursday,
      isFr: isFriday,
      isSa: isSaturday,
      isSu: isSunday,
    };

    reduxAddReminder(reminderObj);

    navigateBack();
  };

  const navigateBack = () => {
    navigation.goBack();
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

      <HeaderDefaultBack onPressBack={navigateBack} title={'Add Reminder'} />
      <InvisibleSeparator />
      <View style={styles.timePickerContainer}>
        <DatePicker
          date={date}
          mode={'time'}
          onDateChange={setDate}
          textColor={BRAND_WHITE}
          fadeToColor={'#303030'}
        />
      </View>
      <ScrollView contentContainerStyle={styles.lowerSection}>
        <View style={styles.textContainer}>
          <Text style={[titleFont, whiteFont, verticalButtonsMargin]}>
            REPEAT
          </Text>

          <TouchableOpacity
            style={styles.dayButton}
            onPress={() => setIsMonday(!isMonday)}
          >
            <Text
              style={[bodyFont, isMonday ? boldSubheadFont : {}, whiteFont]}
            >
              Every Monday
            </Text>
            {isMonday && (
              <Image
                source={setLocalImage('checkWhite')}
                style={styles.checkImage}
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.dayButton}
            onPress={() => setIsTuesday(!isTuesday)}
          >
            <Text
              style={[bodyFont, isTuesday ? boldSubheadFont : {}, whiteFont]}
            >
              Every Tuesday
            </Text>
            {isTuesday && (
              <Image
                source={setLocalImage('checkWhite')}
                style={styles.checkImage}
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.dayButton}
            onPress={() => setIsWednesday(!isWednesday)}
          >
            <Text
              style={[bodyFont, isWednesday ? boldSubheadFont : {}, whiteFont]}
            >
              Every Wednesday
            </Text>
            {isWednesday && (
              <Image
                source={setLocalImage('checkWhite')}
                style={styles.checkImage}
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.dayButton}
            onPress={() => setIsThursday(!isThursday)}
          >
            <Text
              style={[bodyFont, isThursday ? boldSubheadFont : {}, whiteFont]}
            >
              Every Thursday
            </Text>
            {isThursday && (
              <Image
                source={setLocalImage('checkWhite')}
                style={styles.checkImage}
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.dayButton}
            onPress={() => setIsFriday(!isFriday)}
          >
            <Text
              style={[bodyFont, isFriday ? boldSubheadFont : {}, whiteFont]}
            >
              Every Friday
            </Text>
            {isFriday && (
              <Image
                source={setLocalImage('checkWhite')}
                style={styles.checkImage}
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.dayButton}
            onPress={() => setIsSaturday(!isSaturday)}
          >
            <Text
              style={[bodyFont, isSaturday ? boldSubheadFont : {}, whiteFont]}
            >
              Every Saturday
            </Text>
            {isSaturday && (
              <Image
                source={setLocalImage('checkWhite')}
                style={styles.checkImage}
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.dayButton}
            onPress={() => setIsSunday(!isSunday)}
          >
            <Text
              style={[bodyFont, isSunday ? boldSubheadFont : {}, whiteFont]}
            >
              Every Sunday
            </Text>
            {isSunday && (
              <Image
                source={setLocalImage('checkWhite')}
                style={styles.checkImage}
              />
            )}
          </TouchableOpacity>
        </View>
        <StandardButton title={'Save'} onPress={onPressSave} />
      </ScrollView>
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
    reduxAddReminder: (obj) => dispatch(addReminder(obj)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateReminderScreen);
