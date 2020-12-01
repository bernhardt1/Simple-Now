import React, { useState } from 'react';
import {
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Text,
  Image,
  View,
} from 'react-native';
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
import {
  bodyFont,
  boldSubheadFont,
  titleEmphasizedFont,
  titleFont,
  whiteFont,
} from '../../styles/fonts';

import styles from './styles';

const NONE = 'None';
const MINUTE = 'Every minute';
const TWO_MINUTES = 'Every 2 minutes';
const FIVE_MINUTES = 'Every 5 minutes';
const TEN_MINUTES = 'Every 10 minutes';
const THIRTY_MINUTES = 'Every 30 minutes';
const HALFWAY = 'Halfway';

const SetBellIntervalScreen = ({ background, navigation }) => {
  const [selected, setSelected] = useState(NONE);

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

      <ScrollView bounces={false}>
        <HeaderDefaultBack
          onPressBack={navigateBack}
          title={'Bell Interval Time'}
        />

        <View style={styles.buttonsSection}>
          <TouchableOpacity
            style={styles.timeButton}
            onPress={() => setSelected(NONE)}
          >
            <Text
              style={[
                titleFont,
                selected === NONE ? titleEmphasizedFont : {},
                whiteFont,
              ]}
            >
              {NONE}
            </Text>
            {selected === NONE && (
              <Image
                source={setLocalImage('checkWhite')}
                style={styles.checkImage}
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.timeButton}
            onPress={() => setSelected(MINUTE)}
          >
            <Text
              style={[
                titleFont,
                selected === MINUTE ? titleEmphasizedFont : {},
                whiteFont,
              ]}
            >
              {MINUTE}
            </Text>
            {selected === MINUTE && (
              <Image
                source={setLocalImage('checkWhite')}
                style={styles.checkImage}
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.timeButton}
            onPress={() => setSelected(TWO_MINUTES)}
          >
            <Text
              style={[
                titleFont,
                selected === TWO_MINUTES ? titleEmphasizedFont : {},
                whiteFont,
              ]}
            >
              {TWO_MINUTES}
            </Text>
            {selected === TWO_MINUTES && (
              <Image
                source={setLocalImage('checkWhite')}
                style={styles.checkImage}
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.timeButton}
            onPress={() => setSelected(FIVE_MINUTES)}
          >
            <Text
              style={[
                titleFont,
                selected === FIVE_MINUTES ? titleEmphasizedFont : {},
                whiteFont,
              ]}
            >
              {FIVE_MINUTES}
            </Text>
            {selected === FIVE_MINUTES && (
              <Image
                source={setLocalImage('checkWhite')}
                style={styles.checkImage}
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.timeButton}
            onPress={() => setSelected(TEN_MINUTES)}
          >
            <Text
              style={[
                titleFont,
                selected === TEN_MINUTES ? titleEmphasizedFont : {},
                whiteFont,
              ]}
            >
              {TEN_MINUTES}
            </Text>
            {selected === TEN_MINUTES && (
              <Image
                source={setLocalImage('checkWhite')}
                style={styles.checkImage}
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.timeButton}
            onPress={() => setSelected(THIRTY_MINUTES)}
          >
            <Text
              style={[
                titleFont,
                selected === THIRTY_MINUTES ? titleEmphasizedFont : {},
                whiteFont,
              ]}
            >
              {THIRTY_MINUTES}
            </Text>
            {selected === THIRTY_MINUTES && (
              <Image
                source={setLocalImage('checkWhite')}
                style={styles.checkImage}
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.timeButton}
            onPress={() => setSelected(HALFWAY)}
          >
            <Text
              style={[
                titleFont,
                selected === HALFWAY ? titleEmphasizedFont : {},
                whiteFont,
              ]}
            >
              {HALFWAY}
            </Text>
            {selected === HALFWAY && (
              <Image
                source={setLocalImage('checkWhite')}
                style={styles.checkImage}
              />
            )}
          </TouchableOpacity>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const mapStateToProps = (state) => {
  return {
    background: state?.settings?.background || 'background1',
  };
};

export default connect(mapStateToProps)(SetBellIntervalScreen);
