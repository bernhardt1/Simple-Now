import React from 'react';
import { View } from 'react-native';

import styles from './styles';

const HeaderSpacer = ({ transparent }) => {
  return (
    <View
      style={[
        styles.container,
        transparent ? { backgroundColor: 'transparent' } : {},
      ]}
    />
  );
};

export default HeaderSpacer;
