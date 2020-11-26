import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import { standardSettingButton } from '../../styles/standardComponents';
import { footnoteFont, whiteFont } from '../../styles/fonts';
import { BRAND_WHITE } from '../../styles/colors';
import { BORDER_WIDTH } from '../../styles/constants';
import setLocalImage from '../../helpers/setLocalImage';
import styles from './styles';

const StandardSettingButton = ({
  title,
  titleColor,
  onPress,
  withBorder,
  imageName,
}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <View
        style={[
          styles.textContainer,
          standardSettingButton,
          withBorder
            ? { borderColor: BRAND_WHITE, borderWidth: BORDER_WIDTH }
            : {},
        ]}
      >
        <Text style={[footnoteFont, whiteFont, titleColor ? titleColor : {}]}>
          {title}
        </Text>
        {imageName && (
          <Image source={setLocalImage(imageName)} style={styles.image} />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default StandardSettingButton;
