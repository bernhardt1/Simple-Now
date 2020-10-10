import React from 'react';
import { View } from 'react-native';
import { StandardImageButton } from '../StandardImageButton';

import styles from './styles';

const HeaderDefaultBack = ({ onPressBack }) => {
  return (
    <View style={styles.container}>
      <StandardImageButton image={'backWhite'} onPress={onPressBack} />
    </View>
  );
};

export default HeaderDefaultBack;
