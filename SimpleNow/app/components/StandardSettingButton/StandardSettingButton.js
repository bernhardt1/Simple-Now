import React from 'react';
import { View, Text, TouchableWithoutFeedback, Image } from 'react-native';

import { standardSettingButton } from '../../styles/standardComponents';
import { centerAlign, footnoteFont, whiteFont } from '../../styles/fonts';
import { BRAND_WHITE } from '../../styles/colors';
import { BORDER_WIDTH } from '../../styles/constants';
import setLocalImage from '../../helpers/setLocalImage';
import styles from './styles';

const StandardSettingButton = ({ title, onPress, withBorder, imageName }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={[
          styles.textContainer,
          standardSettingButton,
          withBorder
            ? { borderColor: BRAND_WHITE, borderWidth: BORDER_WIDTH }
            : {},
        ]}
      >
        <Text style={[footnoteFont, whiteFont, centerAlign]}>{title}</Text>
        {imageName && (
          <Image source={setLocalImage(imageName)} style={styles.image} />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default StandardSettingButton;
