import React from 'react';
import { Text, TouchableWithoutFeedback, Image, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';
import { whiteFont, bottomButtonFont } from '../../styles/fonts';
import { DARK_OVERLAY } from '../../styles/colors';
import setLocalImage from '../../helpers/setLocalImage';

const BottomButton = ({ title, image, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        {title && <Text style={[bottomButtonFont, whiteFont]}>{title}</Text>}
        {image && <Image source={setLocalImage(image)} style={styles.image} />}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default BottomButton;
