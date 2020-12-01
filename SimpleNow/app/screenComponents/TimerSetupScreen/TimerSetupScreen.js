import React, { useState } from 'react';
import { View, ImageBackground, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import Moment from 'moment';

import setLocalImage from '../../helpers/setLocalImage';
import {
  captionFont,
  massiveTitleFont,
  titleFont,
  whiteFont,
} from '../../styles/fonts';

import styles from './styles';
import { updateIsSoundOn } from '../../actions/settings';
import { StandardButton } from '../../components/StandardButton/index';
import { screenWidth, widthUnit } from '../../styles/constants';
import StandardSettingButton from '../../components/StandardSettingButton/StandardSettingButton';
import { HeaderSpacer } from '../../components/HeaderSpacer';
import { TextContainer } from '../../components/TextContainer';
import LinearGradient from 'react-native-linear-gradient';
import {
  BACKGROUND_GRADIENT_1,
  BACKGROUND_GRADIENT_2,
} from '../../styles/colors';

const TIMER_OPTIONS = Array.from(Array(120).keys()).map((i) => i + 1);

const TimerSetupScreen = ({
  navigation,
  reduxUpdateIsSoundOn,
  background,
  isSoundOn,
}) => {
  const [time, setTime] = useState(1);

  const navigateSetBellInterval = () => {
    navigation.navigate('SetBellInterval');
  };

  const navigateTimer = () => {
    navigation.navigate('Timer');
  };

  const toggleSound = () => {
    if (isSoundOn) {
      reduxUpdateIsSoundOn(false);
    } else {
      reduxUpdateIsSoundOn(true);
    }
  };

  const renderTimerItem = (item, index) => {
    return (
      <View
        style={[
          styles.timerItem,
          time === item ? styles.timerSelectedItem : {},
          {
            transform: [
              {
                scaleY: 5 / (Math.abs(time - item) + 5),
              },
            ],
          },
        ]}
      />
    );
  };

  return (
    <LinearGradient
      style={styles.container}
      colors={[BACKGROUND_GRADIENT_1, BACKGROUND_GRADIENT_2]}
      useAngle={true}
      angle={150}
      angleCenter={{ x: 0.5, y: 0.5 }}
    >
      <HeaderSpacer transparent />
      {/* <View style={styles.containerHeader} pointerEvents={'auto'}>
        <StandardImageButton />
        <Text style={[titleFont, whiteFont]}>{'Timer'}</Text>
        <StandardImageButton
          image={isSoundOn ? 'soundOnWhite' : 'soundOffWhite'}
          onPress={toggleSound}
        />
      </View> */}

      <View style={styles.containerHeader}>
        <Text style={[titleFont, whiteFont]}>
          {`Finishes at ${Moment().add(time, 'minutes').format('LT')}`}
        </Text>

        <View style={styles.timeContainer}>
          <Text style={[massiveTitleFont, whiteFont]}>{`${time}`}</Text>
          <Text style={[titleFont, whiteFont]}>
            {time > 1 ? 'minutes' : 'minute'}
          </Text>
        </View>
      </View>
      <View style={styles.timerScrollerContainer}>
        <FlatList
          data={TIMER_OPTIONS}
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={styles.timerScrollerContentContainer}
          renderItem={({ item, index }) => renderTimerItem(item, index)}
          removeClippedSubviews
          onScroll={({ nativeEvent }) => {
            const { contentOffset } = nativeEvent;

            const index = Math.round(contentOffset.x / (widthUnit * 6));
            const lowerBound = Math.max(1, index);
            const upperBound = Math.min(TIMER_OPTIONS.length, lowerBound);

            if (upperBound !== time) {
              setTime(upperBound);
            }
          }}
          keyExtractor={(item) => `${item}`}
          ListHeaderComponent={() => (
            <View style={{ width: screenWidth / 2 }} />
          )}
          ListFooterComponent={() => (
            <View style={{ width: screenWidth / 2 }} />
          )}
        />
      </View>
      <View style={styles.footerContainer}>
        <StandardButton title={'Begin'} onPress={navigateTimer} />
        <View style={styles.bottomButtons}>
          <View style={styles.standardSettingButtonContainer}>
            <StandardSettingButton
              title={'BELL INTERVAL'}
              withBorder
              onPress={navigateSetBellInterval}
            />

            <Text style={[captionFont, whiteFont]}>{'Every minute'}</Text>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

const mapStateToProps = (state) => {
  return {
    background: state?.settings?.background || 'background1',
    isSoundOn: state?.settings?.isSoundOn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    reduxUpdateIsSoundOn: (val) => dispatch(updateIsSoundOn(val)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TimerSetupScreen);
