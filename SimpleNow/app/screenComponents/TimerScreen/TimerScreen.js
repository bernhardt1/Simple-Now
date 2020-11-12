import React, { useState, useEffect } from 'react';
import { View, ImageBackground, Text, Animated } from 'react-native';
import Sound from 'react-native-sound';
import { connect } from 'react-redux';
import { useKeepAwake } from 'expo-keep-awake';

import Moment from 'moment';

import { StandardImageButton } from '../../components/StandardImageButton';
import setLocalImage from '../../helpers/setLocalImage';
import { titleFont, whiteFont } from '../../styles/fonts';

import styles from './styles';
import loadSound from '../../helpers/loadSound';
import { updateIsSoundOn } from '../../actions/settings';
import { StandardButton } from '../../components/StandardButton/index';
import SmallInformationIsland from '../../components/SmallInformationIsland/SmallInformationIsland';
import { screenWidth } from '../../styles/constants';
import { islandSpacing } from '../../styles/spacings';
import convertSecondsToMmSs from '../../helpers/timeHelpers/convertSecondsToMmSs';
import { EXERCISE_SPEED_MULTIPLIER } from '../../constants/magicNumbers';
import { steelBell } from '../../assets/tracks/bells';
import TrackPlayerBar from '../../components/TrackPlayerBar/TrackPlayerBar';

const EBS = EXERCISE_SPEED_MULTIPLIER * 1;
const TIMER_BAR_WIDTH =
  screenWidth - (islandSpacing.margin + islandSpacing.padding) * 2;

const TimerScreen = ({
  navigation,
  reduxUpdateIsSoundOn,
  background,
  isSoundOn,
  timerDuration, //in seconds
}) => {
  const [progressTrackerAnimation, setProgressTrackerAnimation] = useState(
    new Animated.Value(0)
  );
  const [duration, setDuration] = useState(timerDuration);
  const [secondsLeft, setSecondsLeft] = useState(timerDuration);

  // Enable playback in silence mode
  useKeepAwake();
  Sound.setCategory('Playback');
  // Load the sound files from the app bundle
  // let steelBell = loadSound('steel_bell_long.mp3');
  // let chime = loadSound('chime.mp3');

  useEffect(() => {}, [isSoundOn]);
  useEffect(() => {
    this.startTimestamp = Moment();
  });

  const toggleSound = () => {
    if (isSoundOn) {
      reduxUpdateIsSoundOn(false);
    } else {
      reduxUpdateIsSoundOn(true);
    }
  };

  const updateClock = (lastSeconds) => {
    if (this?.isPaused) return;

    if (this) {
      this.timeout = setTimeout(() => {
        const remainingSeconds = Math.floor(getRemainingSeconds() / 1000);

        if (lastSeconds !== remainingSeconds) {
          setSecondsLeft(remainingSeconds);
          setProgressTrackerAnimation();
        }

        if (remainingSeconds > 1) {
          updateClock(remainingSeconds);
        } else {
          // chimeRef?.play();
          // setCurrentStep();
        }
      }, EBS * 50);
    }
  };

  const getRemainingSeconds = () => {
    const millisecondsPastSinceStartTimestamp = Moment().diff(
      this.startTimestamp
    );
    const inSeconds = Math.floor(millisecondsPastSinceStartTimestamp / 1000);

    const remainingSeconds = Math.max(inSeconds, 0);
    return remainingSeconds;
  };

  return (
    <ImageBackground
      style={styles.container}
      source={setLocalImage(background)}
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
        <TrackPlayerBar />
        {/* <StandardButton image={'playWhite'} /> */}

        {/* <View style={styles.countdownContainer}>
          <View style={styles.countdownClocksContainer}>
            <SmallInformationIsland
              title={convertSecondsToMmSs(duration - secondsLeft)}
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
                      translateX: progressTrackerAnimation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, TIMER_BAR_WIDTH],
                      }),
                    },
                  ],
                },
              ]}
            />
          </View>
        </View> */}
      </View>
    </ImageBackground>
  );
};

const mapStateToProps = (state) => {
  return {
    background: state?.settings?.background || 'background1',
    isSoundOn: state?.settings?.isSoundOn,
    timerDuration: state?.settings?.timerDuration || 60000,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    reduxUpdateIsSoundOn: (val) => dispatch(updateIsSoundOn(val)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TimerScreen);
