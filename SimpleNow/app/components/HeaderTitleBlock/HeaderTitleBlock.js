import React from 'react';
import { View, Text } from 'react-native';
import {
  subheadFont,
  titleEmphasizedFont,
  whiteFont,
} from '../../styles/fonts';
import { titleVerticalSpacing } from '../../styles/spacings';

import styles from './styles';

const HeaderTitleBlock = ({ onPressBack, title, subtitle }) => {
  return (
    <View style={styles.container}>
      <Text style={[titleEmphasizedFont, whiteFont, titleVerticalSpacing]}>
        {title}
      </Text>
      <Text style={[subheadFont, whiteFont]}>{subtitle}</Text>
    </View>
  );
};

export default HeaderTitleBlock;
