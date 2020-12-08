import React from 'react';
import { Text, TouchableOpacity, Image, View } from 'react-native';

import styles from './styles';
import { whiteFont, bodyFont } from '../../styles/fonts';
import setLocalImage from '../../helpers/setLocalImage';

const SecondaryButton = ({
  title,
  image,
  onPress,
  disabled = false,
  style,
}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.5} disabled={disabled}>
      <View style={[styles.container, style]}>
        {title && <Text style={[bodyFont, whiteFont]}>{title}</Text>}
        {image && <Image source={setLocalImage(image)} style={styles.image} />}
      </View>
    </TouchableOpacity>
  );
};

export default SecondaryButton;
