import React from 'react';
import { View, Text } from 'react-native';
import { titleEmphasizedFont, whiteFont } from '../../styles/fonts';
import { StandardImageButton } from '../StandardImageButton';

import styles from './styles';

const HeaderHome = ({ onPressHamburger }) => {
  return (
    <View style={styles.container}>
      <Text style={[titleEmphasizedFont, whiteFont]}>Simple Now</Text>
      <StandardImageButton image={'mountainWhite'} onPress={onPressHamburger} />
    </View>
  );
};

export default HeaderHome;
