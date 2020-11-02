import React from 'react';
import { View, TouchableWithoutFeedback, Text } from 'react-native';

import styles from './styles';
import {
  bodyFontTitle,
  whiteFont,
  titleEmphasizedFont,
} from '../../styles/fonts';

const CourseItem = ({ title, subheading, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.flexContainer}>
          <Text style={[titleEmphasizedFont, whiteFont]}>{title}</Text>
          <Text style={[bodyFontTitle, whiteFont]}>{subheading}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CourseItem;
