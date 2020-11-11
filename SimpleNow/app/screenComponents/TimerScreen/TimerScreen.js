import React, { useState, useEffect, useRef } from 'react';
import { View, ImageBackground, Text } from 'react-native';
import Sound from 'react-native-sound';
import { connect } from 'react-redux';
import { useKeepAwake } from 'expo-keep-awake';

import { StandardImageButton } from '../../components/StandardImageButton';
import setLocalImage from '../../helpers/setLocalImage';
import { titleFont, whiteFont } from '../../styles/fonts';

import styles from './styles';
import loadSound from '../../helpers/loadSound';
import { updateIsSoundOn } from '../../actions/settings';
import { StandardButton } from '../../components/StandardButton/index';

const TimerScreen = ({
  navigation,
  exercise,
  markAsComplete,
  reduxUpdateIsSoundOn,
  background,
  isSoundOn,
}) => {
  // Enable playback in silence mode
  useKeepAwake();
  Sound.setCategory('Playback');

  // Load the sound files from the app bundle
  let steelBell = loadSound('steel_bell_long.mp3');
  let chime = loadSound('chime.mp3');

  const toggleSound = () => {
    if (isSoundOn) {
      reduxUpdateIsSoundOn(false);
    } else {
      reduxUpdateIsSoundOn(true);
    }
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

export default connect(mapStateToProps, mapDispatchToProps)(TimerScreen);
