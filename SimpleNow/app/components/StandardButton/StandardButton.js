import React from 'react';
import { Text, TouchableWithoutFeedback } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { standardButton } from '../../styles/standardComponents';
import { buttonFont, centerAlign, whiteFont } from '../../styles/fonts';
import {
  BRAND_WHITE,
  DARK_BLUE_LOGO,
  LIGHT_BLUE_LOGO,
} from '../../styles/colors';
import { BORDER_WIDTH } from '../../styles/constants';

const StandardButton = ({ title, onPress, withBorder }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <LinearGradient
        colors={[DARK_BLUE_LOGO, LIGHT_BLUE_LOGO]}
        style={[
          standardButton,
          withBorder
            ? { borderColor: BRAND_WHITE, borderWidth: BORDER_WIDTH }
            : {},
        ]}
      >
        <Text style={[buttonFont, whiteFont, centerAlign]}>{title}</Text>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
};

export default StandardButton;
