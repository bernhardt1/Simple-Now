import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { DARK_BLUE_LOGO, LIGHT_BLUE_LOGO } from '../../styles/colors';
import { titleFont, whiteFont } from '../../styles/fonts';

import styles from './styles';
import StandardImageButton from '../StandardImageButton/StandardImageButton';
import { ABOUT_SCREEN } from '../../constants/constants';

const GradientHeaderNormal = ({ scene, navigation, headerStyle }) => {
  const { options } = scene.descriptor;
  const title =
    options.headerTitle !== undefined
      ? options.headerTitle
      : options.title !== undefined
      ? options.title
      : scene.route.name;

  const navigateAbout = () => {
    navigation.navigate('About', { screenType: ABOUT_SCREEN });
  };

  return (
    <View style={headerStyle}>
      <LinearGradient
        colors={[DARK_BLUE_LOGO, LIGHT_BLUE_LOGO]}
        style={[StyleSheet.absoluteFill, headerStyle, styles.container]}
      >
        <Text style={[titleFont, whiteFont]}>{title}</Text>
        <StandardImageButton image={'menuWhite'} onPress={navigateAbout} />
      </LinearGradient>
    </View>
  );
};

export default GradientHeaderNormal;
