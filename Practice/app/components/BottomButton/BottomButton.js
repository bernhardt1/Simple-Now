import React from 'react';
import {Text, TouchableWithoutFeedback, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';
import {whiteFont, bottomButtonFont} from '../../styles/fonts';
import {DARK_BLUE_LOGO, LIGHT_BLUE_LOGO} from '../../styles/colors';
import setLocalImage from '../../helpers/setLocalImage';

const BottomButton = ({title, image, onPress}) => {
  return (
    <TouchableWithoutFeedback style={styles.buttonContainer} onPress={onPress}>
      <LinearGradient
        colors={[DARK_BLUE_LOGO, LIGHT_BLUE_LOGO]}
        style={styles.container}>
        {title && <Text style={[bottomButtonFont, whiteFont]}>{title}</Text>}
        {image && <Image source={setLocalImage(image)} style={styles.image} />}
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
};

export default BottomButton;
