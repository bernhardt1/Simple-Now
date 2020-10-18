import React from 'react';
import { TouchableWithoutFeedback, Image, View } from 'react-native';

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
    <TouchableWithoutFeedback onPress={onPress} styles={styles.button}>
      <View
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
      >
        <Image source={setLocalImage(image)} style={styles.image} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default StandardImageButton;
