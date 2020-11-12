import React from 'react';
import { View, Text } from 'react-native';
import setLocalImage from '../../helpers/setLocalImage';
import { titleEmphasizedFont, whiteFont } from '../../styles/fonts';
import { StandardImageButton } from '../StandardImageButton';

import styles from './styles';

const HeaderDefaultBack = ({
  onPressBack,
  title,
  transparent,
  rightButtonImage,
  onPressRightButton,
}) => {
  console.log('rightButtonImage', rightButtonImage);
  return (
    <View
      style={[
        styles.container,
        transparent ? { backgroundColor: 'transparent' } : {},
      ]}
    >
      <StandardImageButton image={'backWhite'} onPress={onPressBack} />
      <Text style={[titleEmphasizedFont, whiteFont]}>{title}</Text>
      {!rightButtonImage && <View style={styles.invisibleView} />}
      {rightButtonImage && (
        <StandardImageButton
          image={rightButtonImage}
          onPress={onPressRightButton}
        />
      )}
    </View>
  );
};

export default HeaderDefaultBack;
