import React from 'react';
import { Text, TouchableWithoutFeedback, Image, View } from 'react-native';

import styles from './styles';
import { whiteFont, bodyFont } from '../../styles/fonts';
import setLocalImage from '../../helpers/setLocalImage';

const SecondaryButton = ({ title, image, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        {title && <Text style={[bodyFont, whiteFont]}>{title}</Text>}
        {image && <Image source={setLocalImage(image)} style={styles.image} />}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SecondaryButton;
