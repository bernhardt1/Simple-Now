import React from 'react';
import { TouchableHighlight, Image, View } from 'react-native';

import styles from './styles';
import setLocalImage from '../../helpers/setLocalImage';
import { BRAND_BLACK } from '../../styles/colors';
import { BORDER_WIDTH } from '../../styles/constants';

const StandardImageButton = ({
  onPress,
  image,
  backgroundColor,
  withBorder,
  borderColor,
}) => {
  return (
    <TouchableHighlight
      onPress={onPress}
      style={[
        styles.container,
        { backgroundColor: backgroundColor },
        withBorder
          ? {
              borderColor: borderColor || BRAND_BLACK,
              borderWidth: BORDER_WIDTH,
            }
          : {},
      ]}
      underlayColor={'#FFFFFF33'}
    >
      <View>
        <Image source={setLocalImage(image)} style={styles.image} />
      </View>
    </TouchableHighlight>
  );
};

export default StandardImageButton;
