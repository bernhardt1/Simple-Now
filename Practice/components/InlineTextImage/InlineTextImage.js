import React from 'react';
import {Image} from 'react-native';

import styles from './styles';
import setLocalImage from '../../helpers/setLocalImage';

const InlineTextImage = ({onPress, image}) => {
  return <Image source={setLocalImage(image)} style={styles.image} />;
};

export default InlineTextImage;
