import React from 'react';
import { View, Text } from 'react-native';
import { titleEmphasizedFont, whiteFont } from '../../styles/fonts';
import { StandardImageButton } from '../StandardImageButton';

import styles from './styles';

const HeaderDefaultBack = ({ onPressBack, title }) => {
  return (
    <View style={styles.container}>
      <StandardImageButton image={'backWhite'} onPress={onPressBack} />
      <Text style={[titleEmphasizedFont, whiteFont]}>{title}</Text>
      <View style={styles.invisibleView} />
    </View>
  );
};

export default HeaderDefaultBack;
