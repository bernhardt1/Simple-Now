import React from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { standardButton } from '../../styles/standardComponents';
import { buttonFont, centerAlign, whiteFont } from '../../styles/fonts';
import {
  BRAND_WHITE,
  DARK_OVERLAY,
  VERY_DARK_OVERLAY,
} from '../../styles/colors';
import { BORDER_WIDTH } from '../../styles/constants';
import setLocalImage from '../../helpers/setLocalImage';

import styles from './styles';

const StandardButton = ({ title, image, onPress, withBorder, textColor }) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <LinearGradient
        colors={[VERY_DARK_OVERLAY, DARK_OVERLAY]}
        style={[
          standardButton,
          styles.buttonRow,
          withBorder
            ? { borderColor: BRAND_WHITE, borderWidth: BORDER_WIDTH }
            : {},
        ]}
      >
        {title && (
          <Text
            style={[
              buttonFont,
              whiteFont,
              centerAlign,
              textColor ? { color: textColor } : {},
            ]}
          >
            {title}
          </Text>
        )}
        {image && <Image source={setLocalImage(image)} style={styles.image} />}
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default StandardButton;
