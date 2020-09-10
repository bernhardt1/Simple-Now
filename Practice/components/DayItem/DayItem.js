import React from 'react';
import {Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';
import {DARK_BLUE_LOGO, LIGHT_BLUE_LOGO} from '../../styles/colors';
import {subheadFont, whiteFont, titleFont} from '../../styles/fonts';
import StandardButton from '../StandardButton/StandardButton';

const DayItem = ({courseTitle, classInfo, onPress}) => {
  const dayTitle = classInfo?.title;
  const subheading = `${classInfo?.reminders?.length} reminders`;
  return (
    <LinearGradient
      colors={[DARK_BLUE_LOGO, LIGHT_BLUE_LOGO]}
      style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={[titleFont, whiteFont]}>{dayTitle}</Text>
        <Text style={[subheadFont, whiteFont]}>{subheading}</Text>
      </View>

      <StandardButton onPress={onPress} title={'View'} />
    </LinearGradient>
  );
};

export default DayItem;
