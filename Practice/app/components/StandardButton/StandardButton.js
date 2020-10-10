import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';

import { standardButton } from '../../styles/standardComponents';
import { buttonFont, centerAlign, whiteFont } from '../../styles/fonts';
import { BRAND_BLACK } from '../../styles/colors';
import { BORDER_WIDTH } from '../../styles/constants';

const StandardButton = ({ title, onPress, withBorder }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={[
          standardButton,
          withBorder
            ? { borderColor: BRAND_BLACK, borderWidth: BORDER_WIDTH }
            : {},
        ]}
      >
        <Text style={[buttonFont, whiteFont, centerAlign]}>{title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default StandardButton;
