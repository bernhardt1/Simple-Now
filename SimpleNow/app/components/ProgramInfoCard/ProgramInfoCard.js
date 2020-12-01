import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import getCategoryCardColors from '../../helpers/styleHelpers/getCategoryCardColors';
import {
  footnoteFont,
  boldSubheadFont,
  whiteFont,
  centerAlign,
} from '../../styles/fonts';
import {
  meditationCard,
  programInfoCard,
} from '../../styles/standardComponents';

import styles from './styles';

const ProgramInfoCard = ({
  cardCategory,
  isMeditation,
  onPress,
  selectedCategory,
}) => {
  const cardColors = getCategoryCardColors(cardCategory);
  return (
    <TouchableOpacity
      onPress={() => {
        onPress(cardCategory);
      }}
      activeOpacity={0.8}
    >
      <LinearGradient
        colors={cardColors}
        style={[
          programInfoCard,
          isMeditation ? meditationCard : {},
          selectedCategory === cardCategory ? styles.selected : {},
        ]}
        useAngle={true}
        angle={135}
        angleCenter={{ x: 0.5, y: 0.5 }}
      >
        <View>
          <Text
            style={[boldSubheadFont, whiteFont, centerAlign]}
          >{`${cardCategory.substring(0, 1)}`}</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default ProgramInfoCard;
