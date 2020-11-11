import React from 'react';
import { View, TouchableWithoutFeedback, Text } from 'react-native';

import styles from './styles';
import { footnoteFont, whiteFont, subheadFont } from '../../styles/fonts';

const CourseItem = ({ title, subheading, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Text style={[subheadFont, whiteFont]}>{title}</Text>
        {subheading && (
          <Text style={[footnoteFont, whiteFont]}>{subheading}</Text>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CourseItem;
