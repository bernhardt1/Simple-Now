import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import setLocalImage from '../../helpers/setLocalImage';

import getCategoryCardColors from '../../helpers/styleHelpers/getCategoryCardColors';
import getCategoryCardImage from '../../helpers/styleHelpers/getCategoryCardImage';
import {
  footnoteFontThin,
  boldSubheadFont,
  whiteFont,
  centerAlign,
  captionFont,
} from '../../styles/fonts';
import {
  meditationCard,
  programInfoCard,
} from '../../styles/standardComponents';

import styles from './styles';

const ProgramInfoCard = ({ exercise }) => {
  const cardColors = getCategoryCardColors(exercise?.exerciseType);
  const cardImage = getCategoryCardImage(exercise?.exerciseType);

  return (
    <TouchableOpacity onPress={() => {}} activeOpacity={0.8}>
      <LinearGradient
        colors={cardColors}
        style={programInfoCard}
        useAngle={true}
        angle={135}
        angleCenter={{ x: 0.5, y: 0.5 }}
      >
        <Image source={setLocalImage(cardImage)} style={styles.image} />
        <View style={styles.programInfoCardTextContainer}>
          <Text
            style={[footnoteFontThin, whiteFont, centerAlign]}
          >{`${exercise?.exerciseType}`}</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default ProgramInfoCard;
