import React, { useEffect, useState } from 'react';
import { View, Text, Button, Image } from 'react-native';
import { PropTypes } from 'prop-types';
import TrackPlayer, {
  TrackPlayerEvents,
  STATE_PLAYING,
} from 'react-native-track-player';
import {
  useTrackPlayerProgress,
  useTrackPlayerEvents,
} from 'react-native-track-player/lib/hooks';
import Slider from '@react-native-community/slider';

import styles from './styles';

//function to initialize the Track Player
const trackPlayerInit = async () => {
  await TrackPlayer.setupPlayer();
  TrackPlayer.updateOptions({
    stopWithApp: true,
    capabilities: [
      TrackPlayer.CAPABILITY_PLAY,
      TrackPlayer.CAPABILITY_PAUSE,
      TrackPlayer.CAPABILITY_JUMP_FORWARD,
      TrackPlayer.CAPABILITY_JUMP_BACKWARD,
    ],
  });

  await TrackPlayer.add({
    id: '1',
    url:
      'https://audio-previews.elements.envatousercontent.com/files/103682271/preview.mp3',
    type: 'default',
    title: 'My Title',
    album: 'My Album',
    artist: 'Rohan Bhatia',
    artwork: 'https://picsum.photos/100',
  });
  return true;
};

const getTrack = async () => {
  let trackId = await TrackPlayer.getCurrentTrack();
  let trackObject = await TrackPlayer.getTrack(trackId);

  return trackObject;
};

const TrackPlayerBar = ({ ...props }) => {
  const [isTrackPlayerInit, setIsTrackPlayerInit] = useState(false);
  const [track, setTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  //the value of the slider should be between 0 and 1
  const [sliderValue, setSliderValue] = useState(0);
  //flag to check whether the use is sliding the seekbar or not
  const [isSeeking, setIsSeeking] = useState(false);
  //useTrackPlayerProgress is a hook which provides the current position and duration of the track player.
  //These values will update every 250ms
  const { position, duration } = useTrackPlayerProgress(250);

  useTrackPlayerEvents([TrackPlayerEvents.PLAYBACK_STATE], (event) => {
    if (event.state === STATE_PLAYING) {
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
    }
  });

  useEffect(() => {
    const startPlayer = async () => {
      let isInit = await trackPlayerInit();
      setIsTrackPlayerInit(isInit);
    };

    startPlayer();
  }, []);

  //this hook updates the value of the slider whenever the current position of the song changes
  useEffect(() => {
    if (!isSeeking && position && duration) {
      setSliderValue(position / duration);
    }
  }, [position, duration]);

  // this hook updates the track information whenever it changes
  useEffect(() => {
    // Adds an event handler for the playback-track-changed event
    this.onTrackChange = TrackPlayer.addEventListener(
      'playback-track-changed',
      async (data) => {
        const nextTrack = await TrackPlayer.getTrack(data.nextTrack);
        setTrack(nextTrack);
      }
    );

    return () => {
      this.onTrackChange.remove();
    };
  });

  //start playing the TrackPlayer when the button is pressed
  const onButtonPressed = () => {
    if (!isPlaying) {
      TrackPlayer.play();
      setIsPlaying(true);
    } else {
      TrackPlayer.pause();
      setIsPlaying(false);
    }
  };

  //this function is called when the user starts to slide the seekbar
  const slidingStarted = () => {
    setIsSeeking(true);
  };
  //this function is called when the user stops sliding the seekbar
  const slidingCompleted = async (value) => {
    await TrackPlayer.seekTo(value * duration);
    setSliderValue(value);
    setIsSeeking(false);
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: track?.artwork,
          }}
          resizeMode="contain"
          style={styles.albumImage}
        />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.songTitle}>{track?.title}</Text>
        <Text style={styles.artist}>{track?.artist}</Text>
      </View>
      <View style={styles.controlsContainer}>
        <Slider
          style={styles.progressBar}
          minimumValue={0}
          maximumValue={1}
          value={sliderValue}
          minimumTrackTintColor="#111000"
          maximumTrackTintColor="#000000"
          onSlidingStart={slidingStarted}
          onSlidingComplete={slidingCompleted}
          thumbTintColor="#000"
        />
        <Button
          title={isPlaying ? 'Pause' : 'Play'}
          onPress={onButtonPressed}
          style={styles.playButton}
          disabled={!isTrackPlayerInit}
          color="#000000"
        />
      </View>
    </View>
  );
};

export default TrackPlayerBar;
