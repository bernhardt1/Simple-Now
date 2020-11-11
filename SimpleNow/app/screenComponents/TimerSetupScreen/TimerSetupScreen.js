import React, { useState, useEffect, useRef } from 'react';
import { View, ImageBackground, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import Moment from 'moment';

import setLocalImage from '../../helpers/setLocalImage';
import {
  captionFont,
  largeTitleFont,
  massiveTitleFont,
  subheadFont,
  titleFont,
  whiteFont,
} from '../../styles/fonts';

import styles from './styles';
import { updateIsSoundOn } from '../../actions/settings';
import { StandardButton } from '../../components/StandardButton/index';
import { screenWidth, widthUnit } from '../../styles/constants';
import StandardSettingButton from '../../components/StandardSettingButton/StandardSettingButton';

const TIMER_OPTIONS = Array.from(Array(120).keys()).map((i) => i + 1);
console.log('TIMER_OPTIONS', TIMER_OPTIONS);

const TimerSetupScreen = ({
  navigation,
  reduxUpdateIsSoundOn,
  background,
  isSoundOn,
}) => {
  const [time, setTime] = useState(1);

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
    <ImageBackground
      style={styles.container}
      source={setLocalImage(background)}
    >
      <View style={styles.headerSpacing} />
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
        <StandardButton title={'Begin'} />
        <View style={styles.bottomButtons}>
          <View style={styles.standardSettingButtonContainer}>
            <StandardSettingButton title={'BELL INTERVAL'} withBorder />
            <Text style={[captionFont, whiteFont]}>{'Every minute'}</Text>
          </View>
        </View>
      </View>
    </ImageBackground>
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
