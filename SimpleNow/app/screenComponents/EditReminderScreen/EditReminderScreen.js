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
  BRAND_BLACK,
  BRAND_ORANGE,
  BRAND_WHITE,
  EXTREMELY_DARK_OVERLAY,
} from '../../styles/colors';
import { StandardButton } from '../../components/StandardButton';
import {
  bodyFont,
  boldSubheadFont,
  orangeFont,
  titleFont,
  whiteFont,
} from '../../styles/fonts';
import { verticalButtonsMargin } from '../../styles/spacings';
import LinearGradient from 'react-native-linear-gradient';
import { addReminder, deleteReminder } from '../../actions/notifications';
import convertReminderTimeToISODate from '../../helpers/timeHelpers/convertReminderTimeToISODate';

const EditReminderScreen = ({
  background,
  navigation,
  route,
  reduxAddReminder,
  reduxDeleteReminder,
}) => {
  const [reminder] = useState(route?.params?.reminder);
  const [date, setDate] = useState(
    new Date(convertReminderTimeToISODate(reminder?.time))
  );
  const [isMonday, setIsMonday] = useState(reminder?.isMo);
  const [isTuesday, setIsTuesday] = useState(reminder?.isTu);
  const [isWednesday, setIsWednesday] = useState(reminder?.isWe);
  const [isThursday, setIsThursday] = useState(reminder?.isTh);
  const [isFriday, setIsFriday] = useState(reminder?.isFr);
  const [isSaturday, setIsSaturday] = useState(reminder?.isSa);
  const [isSunday, setIsSunday] = useState(reminder?.isSu);

  const onPressSave = () => {
    var id = reminder?.id;
    const time = Moment(date).format('HH:mm');

    const reminderObj = {
      id,
      time,
      isMo: isMonday,
      isTu: isTuesday,
      isWe: isWednesday,
      isTh: isThursday,
      isFr: isFriday,
      isSa: isSaturday,
      isSu: isSunday,
    };

    reduxAddReminder(reminderObj);

    navigateBack();
  };

  const onPressDelete = () => {
    reduxDeleteReminder(reminder?.id);

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
      <HeaderDefaultBack
        onPressBack={navigateBack}
        title={'Edit Reminder'}
        rightButtonComponent={
          <TouchableOpacity activeOpacity={0.7} onPress={onPressSave}>
            <Text style={[boldSubheadFont, orangeFont]}>SAVE</Text>
          </TouchableOpacity>
        }
      />
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
        <StandardButton
          title={'DELETE'}
          onPress={onPressDelete}
          textColor={BRAND_ORANGE}
        />
      </ScrollView>
      {/* </ScrollView> */}
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
    reduxDeleteReminder: (val) => dispatch(deleteReminder(val)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditReminderScreen);
