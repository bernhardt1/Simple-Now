import React from 'react';
import { View, Text } from 'react-native';
import { titleEmphasizedFont, whiteFont } from '../../styles/fonts';
import { StandardImageButton } from '../StandardImageButton';

import styles from './styles';

const HeaderDefaultBack = ({
  onPressBack,
  title,
  transparent,
  rightButtonImage,
  onPressRightButton,
  rightButtonComponent,
}) => {
  return (
    <View
      style={[
        styles.container,
        transparent ? { backgroundColor: 'transparent' } : {},
      ]}
    >
      <View style={styles.centerTextContainer}>
        <Text style={[titleEmphasizedFont, whiteFont]}>{title}</Text>
      </View>
      <StandardImageButton image={'backWhite'} onPress={onPressBack} />
      {!rightButtonImage && !rightButtonComponent && (
        <View style={styles.invisibleView} />
      )}
      {rightButtonImage && (
        <StandardImageButton
          image={rightButtonImage}
          onPress={onPressRightButton}
        />
      )}
      {rightButtonComponent && rightButtonComponent}
    </View>
  );
};

export default HeaderDefaultBack;
