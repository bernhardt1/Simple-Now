import React from 'react';
import {View, TouchableWithoutFeedback, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';
import {DARK_BLUE_LOGO, LIGHT_BLUE_LOGO} from '../../styles/colors';
import {subheadFont, whiteFont, titleFont} from '../../styles/fonts';

const CourseItem = ({title, subheading, onPress}) => {
  return (
    <LinearGradient
      colors={[DARK_BLUE_LOGO, LIGHT_BLUE_LOGO]}
      style={styles.container}>
      <TouchableWithoutFeedback style={styles.flexContainer} onPress={onPress}>
        <View style={styles.flexContainer}>
          <Text style={[titleFont, whiteFont]}>{title}</Text>
          <Text style={[subheadFont, whiteFont]}>{subheading}</Text>
        </View>
      </TouchableWithoutFeedback>
    </LinearGradient>
  );
};

export default CourseItem;
