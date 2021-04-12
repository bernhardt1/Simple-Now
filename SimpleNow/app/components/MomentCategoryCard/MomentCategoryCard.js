import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import setLocalImage from '../../helpers/setLocalImage';

import getCategoryCardImage from '../../helpers/styleHelpers/getCategoryCardImage';
import {
  whiteFont,
  titleEmphasizedFont,
  centerAlign,
  capitalizeFont,
  boldSubheadFont,
  footnoteThin,
  buttonFont,
  bodyFont,
  bodyFontThin,
} from '../../styles/fonts';
import { meditationCard } from '../../styles/standardComponents';

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
          <Text
            style={[
              titleEmphasizedFont,
              whiteFont,
              centerAlign,
              capitalizeFont,
            ]}
          >
            {`${categoryData?.type}`}
          </Text>
        </View>
        {activePrograms?.includes(categoryData?.type) && (
          <View style={styles.checkImageContainer}>
            <Text style={[footnoteThin, whiteFont]}>ACTIVE</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default MomentCategoryCard;
