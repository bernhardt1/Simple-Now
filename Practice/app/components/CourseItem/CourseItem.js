import React from 'react';
import {View, TouchableWithoutFeedback, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';
import {DARK_BLUE_LOGO, LIGHT_BLUE_LOGO} from '../../styles/colors';
import {subheadFont, whiteFont, titleFont} from '../../styles/fonts';

const CourseItem = ({title, subheading, onPress}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <LinearGradient
        colors={[DARK_BLUE_LOGO, LIGHT_BLUE_LOGO]}
        style={styles.container}>
        <View style={styles.flexContainer}>
          <Text style={[titleFont, whiteFont]}>{title}</Text>
          <Text style={[subheadFont, whiteFont]}>{subheading}</Text>
        </View>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
};

export default CourseItem;
