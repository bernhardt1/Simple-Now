import React from 'react';
import {Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styles from './screenStyles/LoadingStyles';
import {DARK_BLUE_LOGO, LIGHT_BLUE_LOGO} from '../styles/colors';
import {
  centerAlign,
  logoTitleFont,
  titleFont,
  whiteFont,
} from '../styles/fonts';

const Loading = ({navigation}) => {
  return (
    <LinearGradient
      colors={[DARK_BLUE_LOGO, LIGHT_BLUE_LOGO]}
      style={styles.linearGradient}>
      <View style={styles.container}>
        <Text style={[logoTitleFont, whiteFont, centerAlign]}>Practice</Text>
        <Text style={[titleFont, whiteFont, centerAlign]}>
          Integrate mindfulness practices into daily life
        </Text>
      </View>
    </LinearGradient>
  );
};
export default Loading;
