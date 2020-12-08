import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { BRAND_WHITE_OFF } from '../../styles/colors';

import { whiteFont, bodyFont, boldSubheadFont } from '../../styles/fonts';

const PressableText = ({ title, onPress, style }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text
        style={[
          boldSubheadFont,
          whiteFont,
          style,
          { color: BRAND_WHITE_OFF, marginTop: 10 },
        ]}
        color={BRAND_WHITE_OFF}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default PressableText;
