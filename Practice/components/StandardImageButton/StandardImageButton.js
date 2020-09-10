import React from 'react';
import {TouchableNativeFeedback, Image} from 'react-native';

import styles from './styles';
import setLocalImage from '../../helpers/setLocalImage';

const StandardImageButton = ({onPress, image}) => {
  return (
    <TouchableNativeFeedback onPress={onPress} styles={styles.button}>
      <Image source={setLocalImage(image)} style={styles.image} />
    </TouchableNativeFeedback>
  );
};

export default StandardImageButton;
