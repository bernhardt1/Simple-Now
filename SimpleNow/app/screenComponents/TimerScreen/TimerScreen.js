import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Animated, Easing } from 'react-native';
import Sound from 'react-native-sound';
import { connect } from 'react-redux';
import { useKeepAwake } from 'expo-keep-awake';

import Moment from 'moment';

import { StandardImageButton } from '../../components/StandardImageButton';
import { titleFont, whiteFont } from '../../styles/fonts';

import styles from './styles';
import { updateIsSoundOn } from '../../actions/settings';
import { StandardButton } from '../../components/StandardButton/index';
import SmallInformationIsland from '../../components/SmallInformationIsland/SmallInformationIsland';
import { screenWidth } from '../../styles/constants';
import { islandSpacing } from '../../styles/spacings';
import convertSecondsToMmSs from '../../helpers/timeHelpers/convertSecondsToMmSs';
import { EXERCISE_SPEED_MULTIPLIER } from '../../constants/magicNumbers';
import TrackPlayerBar from '../../components/TrackPlayerBar/TrackPlayerBar';
import LinearGradient from 'react-native-linear-gradient';
import {
  BACKGROUND_GRADIENT_1,
  BACKGROUND_GRADIENT_2,
} from '../../styles/colors';
import { NONE } from '../../constants/constants';

const EBS = EXERCISE_SPEED_MULTIPLIER * 1;
const TIMER_BAR_WIDTH =
  screenWidth - (islandSpacing.margin + islandSpacing.padding) * 2;

const TimerScreen = ({
  navigation,
  reduxUpdateIsSoundOn,
  background,
  isSoundOn,
  bellInterval,
  timerDuration, //in seconds
}) => {
  const [secondsLeft, setSecondsLeft] = useState(timerDuration);
  const [isPaused, setIsPaused] = useState(false);
  const [timeMarker] = useState(new Animated.Value(0));

  // Enable playback in silence mode
  useKeepAwake();
  Sound.setCategory('Playback');

  // Load the sound files from the app bundle
  const steelBellRef = useRef(true);
  const closingBellRef = useRef(true);

  useEffect(() => {}, [isSoundOn, secondsLeft]);
  useEffect(() => {
    this.startTimestamp = Moment();
    this.isPaused = false;
    updateClock();
    animateTimer();

    steelBellRef.current = new Sound(
      'steel_bell_long.mp3',
      Sound.MAIN_BUNDLE,
      (error) => {
        if (error) {
          return;
        }

        if (!isSoundOn) {
          steelBellRef.current.setVolume(0);
        }

        steelBellRef?.current?.play();
      }
    );

    closingBellRef.current = new Sound(
      'closing_bell.mp3',
      Sound.MAIN_BUNDLE,
      (error) => {
        if (error) {
          return;
        }

        if (!isSoundOn) {
          closingBellRef.current.setVolume(0);
        }
      }
    );
  }, []);

  // componentWillUnmount
  useEffect(() => {
    return () => {
      steelBellRef.current?.release();
      closingBellRef.current?.release();
      if (this?.timeout) clearTimeout(this.timeout);
    };
  }, []);

  const toggleSound = () => {
    if (isSoundOn) {
      steelBellRef.current.setVolume(0);
      closingBellRef.current.setVolume(0);
      reduxUpdateIsSoundOn(false);
    } else {
      reduxUpdateIsSoundOn(true);
      steelBellRef.current.setVolume(1);
      closingBellRef.current.setVolume(1);
    }
  };

  const updateClock = () => {
    if (this?.isPaused) return;

    if (this) {
      this.timeout = setTimeout(() => {
        const timeLeft = getTimeLeft();
        setSecondsLeft(timeLeft);

        if (timeLeft > 0) {
          updateClock();
        } else {
          closingBellRef?.current?.play();
        }
      }, EBS * 100);
    }
  };

  const animateTimer = () => {
    Animated.timing(timeMarker, {
      toValue: 1,
      duration: secondsLeft * 1000,
      useNativeDriver: false, // must be false if we want to use the animated value anywhere else
      easing: Easing.linear,
    }).start();
  };

  const onPressPlay = () => {
    if (isPaused) {
      this.startTimestamp = Moment();
      setIsPaused(false);
      this.isPaused = false;
      updateClock();
      animateTimer();
    } else {
      setIsPaused(true);
      this.isPaused = true;
      timeMarker.stopAnimation();
    }
  };

  const getTimeLeft = () => {
    const millisecondsPastSinceStartTimestamp = Moment().diff(
      this.startTimestamp
    );
    const inSeconds = Math.floor(millisecondsPastSinceStartTimestamp / 1000);

    const secondsPast = Math.max(inSeconds, 0);
    const timeLeft = Math.floor(secondsLeft - secondsPast);

    console.log('bellInterval', bellInterval);
    console.log('(timeLeft) ', timeLeft);

    if (
      timerDuration - timeLeft !== 0 &&
      timerDuration - timeLeft !== timerDuration &&
      (timerDuration - timeLeft) % bellInterval.val === 0
    ) {
      steelBellRef?.current?.play();
    }

    return timeLeft;
  };

  return (
    <LinearGradient
      style={styles.container}
      colors={[BACKGROUND_GRADIENT_1, BACKGROUND_GRADIENT_2]}
      useAngle={true}
      angle={150}
      angleCenter={{ x: 0.5, y: 0.5 }}
    >
      <View style={styles.headerSpacing} pointerEvents={'auto'} />
      <View style={styles.containerHeader} pointerEvents={'auto'}>
        <StandardImageButton image={'backWhite'} onPress={navigation.goBack} />
        <Text style={[titleFont, whiteFont]}>{'Timer'}</Text>
        <StandardImageButton
          image={isSoundOn ? 'soundOnWhite' : 'soundOffWhite'}
          onPress={toggleSound}
        />
      </View>
      <View style={styles.containerContent}>
        {/* <TrackPlayerBar /> */}
        <StandardButton
          image={isPaused ? 'playWhite' : 'pauseWhite'}
          onPress={onPressPlay}
        />

        <View style={styles.countdownContainer}>
          <View style={styles.countdownClocksContainer}>
            <SmallInformationIsland
              title={convertSecondsToMmSs(timerDuration - secondsLeft)}
            />
            <SmallInformationIsland title={convertSecondsToMmSs(secondsLeft)} />
          </View>
          <View style={styles.timeBarContainer}>
            <Animated.View
              style={[
                styles.progressTracker,
                {
                  transform: [
                    {
                      translateX: timeMarker.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, TIMER_BAR_WIDTH],
                      }),
                    },
                  ],
                },
              ]}
            />
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
    timerDuration: state?.practice?.timerDuration || 300,
    bellInterval: state?.practice?.bellInterval || NONE,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    reduxUpdateIsSoundOn: (val) => dispatch(updateIsSoundOn(val)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TimerScreen);
