import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {DARK_BLUE_LOGO, LIGHT_BLUE_LOGO} from '../../styles/colors';
import {titleFont, whiteFont, subheadFont} from '../../styles/fonts';

import styles from './styles';
import StandardImageButton from '../StandardImageButton/StandardImageButton';
import InlineTextImage from '../InlineTextImage/InlineTextImage';

const ClassHeader = ({
  navigation,
  title,
  subheading,
  headerStyle,
  leftButtonPress,
}) => {
  return (
    <View style={headerStyle}>
      <LinearGradient
        colors={[DARK_BLUE_LOGO, LIGHT_BLUE_LOGO]}
        style={[StyleSheet.absoluteFill, headerStyle, styles.container]}>
        <View style={styles.backButtonContainer}>
          <StandardImageButton image={'backWhite'} onPress={leftButtonPress} />
        </View>
        <View style={styles.contentContainer}>
          <Text style={[titleFont, whiteFont]}>{title}</Text>
          <View style={styles.subheadingContainer}>
            <InlineTextImage image={'reminderWhite'} />
            <Text style={[subheadFont, whiteFont]}>{subheading}</Text>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default ClassHeader;
