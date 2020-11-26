import React, { useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import getCategoryCardColors from '../../helpers/styleHelpers/getCategoryCardColors';
import {
  boldSubheadFont,
  whiteFont,
  titleEmphasizedFont,
  centerAlign,
  orangeFont,
} from '../../styles/fonts';
import {
  meditationCard,
  momentCategoryCard,
  shadow,
} from '../../styles/standardComponents';

import styles from './styles';

const MomentCategoryCard = ({
  categoryData,
  isMeditation,
  activePrograms,
  onPress,
  selectedCategory,
}) => {
  const cardColors = getCategoryCardColors(categoryData?.type);

  return (
    <TouchableOpacity
      onPress={() => {
        onPress(categoryData?.type);
      }}
      activeOpacity={0.8}
    >
      <LinearGradient
        colors={cardColors}
        style={[
          momentCategoryCard,
          isMeditation ? meditationCard : {},
          selectedCategory === categoryData?.type ? styles.selected : {},
          {},
        ]}
        useAngle={true}
        angle={135}
        angleCente={{ x: 0.5, y: 0.5 }}
      >
        <Text
          style={[titleEmphasizedFont, whiteFont, centerAlign, shadow]}
        >{`${categoryData?.type}`}</Text>
        {activePrograms.includes(categoryData?.type) && (
          <Text
            style={[
              boldSubheadFont,
              orangeFont,
              centerAlign,
              shadow,
              {
                position: 'absolute',
                bottom: momentCategoryCard.height * 0.1,
              },
            ]}
          >
            ACTIVE
          </Text>
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default MomentCategoryCard;
