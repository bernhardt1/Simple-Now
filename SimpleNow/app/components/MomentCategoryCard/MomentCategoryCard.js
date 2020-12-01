import React, { useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import setLocalImage from '../../helpers/setLocalImage';

import getCategoryCardColors from '../../helpers/styleHelpers/getCategoryCardColors';
import getCategoryCardImage from '../../helpers/styleHelpers/getCategoryCardImage';
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
  const cardImage = getCategoryCardImage(categoryData?.type);

  return (
    <TouchableOpacity
      onPress={() => {
        onPress(categoryData?.type);
      }}
      activeOpacity={0.8}
      style={meditationCard}
    >
      <View>
        <Image source={setLocalImage(cardImage)} style={styles.image} />
        <View
          style={[
            styles.textContainer,
            selectedCategory === categoryData?.type ? styles.selected : {},
          ]}
        >
          <Text style={[titleEmphasizedFont, whiteFont, centerAlign, shadow]}>
            {`${categoryData?.type}`}
          </Text>
        </View>
        {activePrograms.includes(categoryData?.type) && (
          <View style={styles.checkImageContainer}>
            <Image
              style={styles.checkImage}
              source={setLocalImage('checkWhite')}
            />
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default MomentCategoryCard;
