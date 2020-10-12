import React from 'react';
import { Text, TouchableWithoutFeedback, Image, View } from 'react-native';

import styles from './styles';
import { whiteFont, bottomButtonFont } from '../../styles/fonts';
import setLocalImage from '../../helpers/setLocalImage';

const BottomButton = ({ title, image, onPress, absolute }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={[styles.container, absolute ? styles.absoluteBottomButton : {}]}
      >
        {title && <Text style={[bottomButtonFont, whiteFont]}>{title}</Text>}
        {image && <Image source={setLocalImage(image)} style={styles.image} />}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default BottomButton;
