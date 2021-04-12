import React from 'react';
import { ScrollView, TouchableOpacity, Text, Image, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux';
import { updateBellInterval } from '../../actions/practice';
import { HeaderDefaultBack } from '../../components/HeaderDefaultBack';
import { HeaderSpacer } from '../../components/HeaderSpacer';
import {
  NONE,
  MINUTE,
  TWO_MINUTES,
  FIVE_MINUTES,
  TEN_MINUTES,
  THIRTY_MINUTES,
  SIXTY_MINUTES,
} from '../../constants/constants';
import setLocalImage from '../../helpers/setLocalImage';
import {
  BACKGROUND_GRADIENT_1,
  BACKGROUND_GRADIENT_2,
} from '../../styles/colors';
import { titleEmphasizedFont, titleFont, whiteFont } from '../../styles/fonts';

import styles from './styles';

const SetBellIntervalScreen = ({
  background,
  navigation,
  bellInterval,
  reduxUpdateBellInterval,
}) => {
  const setBellInterval = (val) => {
    reduxUpdateBellInterval(val);
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

      <ScrollView bounces={false}>
        <HeaderDefaultBack
          onPressBack={navigateBack}
          title={'Bell Interval Time'}
        />

        <View style={styles.buttonsSection}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.timeButton}
            onPress={() => setBellInterval(NONE)}
          >
            <Text
              style={[
                titleFont,
                bellInterval === NONE ? titleEmphasizedFont : {},
                whiteFont,
              ]}
            >
              {NONE.name}
            </Text>
            {bellInterval === NONE && (
              <Image
                source={setLocalImage('checkWhite')}
                style={styles.checkImage}
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.timeButton}
            onPress={() => setBellInterval(MINUTE)}
          >
            <Text
              style={[
                titleFont,
                bellInterval === MINUTE ? titleEmphasizedFont : {},
                whiteFont,
              ]}
            >
              {MINUTE.name}
            </Text>
            {bellInterval === MINUTE && (
              <Image
                source={setLocalImage('checkWhite')}
                style={styles.checkImage}
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.timeButton}
            onPress={() => setBellInterval(TWO_MINUTES)}
          >
            <Text
              style={[
                titleFont,
                bellInterval === TWO_MINUTES ? titleEmphasizedFont : {},
                whiteFont,
              ]}
            >
              {TWO_MINUTES.name}
            </Text>
            {bellInterval === TWO_MINUTES && (
              <Image
                source={setLocalImage('checkWhite')}
                style={styles.checkImage}
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.timeButton}
            onPress={() => setBellInterval(FIVE_MINUTES)}
          >
            <Text
              style={[
                titleFont,
                bellInterval === FIVE_MINUTES ? titleEmphasizedFont : {},
                whiteFont,
              ]}
            >
              {FIVE_MINUTES.name}
            </Text>
            {bellInterval === FIVE_MINUTES && (
              <Image
                source={setLocalImage('checkWhite')}
                style={styles.checkImage}
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.timeButton}
            onPress={() => setBellInterval(TEN_MINUTES)}
          >
            <Text
              style={[
                titleFont,
                bellInterval === TEN_MINUTES ? titleEmphasizedFont : {},
                whiteFont,
              ]}
            >
              {TEN_MINUTES.name}
            </Text>
            {bellInterval === TEN_MINUTES && (
              <Image
                source={setLocalImage('checkWhite')}
                style={styles.checkImage}
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.timeButton}
            onPress={() => setBellInterval(THIRTY_MINUTES)}
          >
            <Text
              style={[
                titleFont,
                bellInterval === THIRTY_MINUTES ? titleEmphasizedFont : {},
                whiteFont,
              ]}
            >
              {THIRTY_MINUTES.name}
            </Text>
            {bellInterval === THIRTY_MINUTES && (
              <Image
                source={setLocalImage('checkWhite')}
                style={styles.checkImage}
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.timeButton}
            onPress={() => setBellInterval(SIXTY_MINUTES)}
          >
            <Text
              style={[
                titleFont,
                bellInterval === SIXTY_MINUTES ? titleEmphasizedFont : {},
                whiteFont,
              ]}
            >
              {SIXTY_MINUTES.name}
            </Text>
            {bellInterval === SIXTY_MINUTES && (
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
    bellInterval: state?.practice?.bellInterval || 0,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    reduxUpdateBellInterval: (val) => dispatch(updateBellInterval(val)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SetBellIntervalScreen);
