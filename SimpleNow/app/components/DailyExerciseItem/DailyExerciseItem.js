import React from 'react';
import { Text, TouchableOpacity, Image, View } from 'react-native';

import styles from './styles';
import {
  whiteFont,
  orangeFont,
  bodyFont,
  footnoteFont,
  captionFont,
} from '../../styles/fonts';
import LinearGradient from 'react-native-linear-gradient';
import getCategoryCardColors from '../../helpers/styleHelpers/getCategoryCardColors';
import setLocalImage from '../../helpers/setLocalImage';
import getCategoryCardImage from '../../helpers/styleHelpers/getCategoryCardImage';

const DailyExerciseItem = ({
  exercise,
  exerciseIndex,
  isExerciseComplete,
  currentPracticeProgress,
  navigation,
}) => {
  const cardColors = getCategoryCardColors(exercise?.exerciseType);

  const navigateExercise = () => {
    navigation.navigate('Exercise', {
      exercise,
    });
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={navigateExercise}
      activeOpacity={0.7}
    >
      <View>
        <Image
          source={setLocalImage(getCategoryCardImage(exercise?.exerciseType))}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <Text style={[bodyFont, whiteFont]}>{`${exercise?.title}`}</Text>
          {currentPracticeProgress.includes(exercise?.id) && (
            <Text style={[captionFont, whiteFont]}>complete!</Text>
          )}

          {!isExerciseComplete && (
            <Text
              ellipsizeMode="tail"
              style={[bodyFont, orangeFont]}
              numberOfLines={2}
            >
              NEW
            </Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default DailyExerciseItem;
