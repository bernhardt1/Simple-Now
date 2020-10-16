import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';
import { buttonFont, centerAlign } from '../../styles/fonts';
import { BRAND_BLACK } from '../../styles/colors';
import { BORDER_WIDTH } from '../../styles/constants';

const StandardFlair = ({ title, backgroundColor, withBorder }) => {
  return (
    <View
      style={[
        styles.container,
        backgroundColor ? { backgroundColor } : {},
        withBorder
          ? { borderColor: BRAND_BLACK, borderWidth: BORDER_WIDTH }
          : {},
      ]}
    >
      <Text style={[buttonFont, centerAlign]}>{title}</Text>
    </View>
  );
};

export default StandardFlair;
