import React from 'react';
import { Text, TouchableOpacity, Image, View } from 'react-native';

import styles from './styles';
import {
  whiteFont,
  orangeFont,
  bodyFont,
  footnoteFont,
} from '../../styles/fonts';
import setLocalImage from '../../helpers/setLocalImage';
import getCategoryCardImage from '../../helpers/styleHelpers/getCategoryCardImage';
import NotificationSwitchSelector from '../NotificationSwitchSelector/NotificationSwitchSelector';
import { dailyExerciseItem } from '../../styles/standardComponents';

const DailyExerciseItem = ({
  exercise,
  exerciseIndex,
  isExerciseComplete,
  currentPracticeProgress,
  navigation,
  lastItem,
}) => {
  const navigateExercise = () => {
    navigation.navigate('Exercise', {
      exercise,
    });
  };

  return (
    <View>
      <TouchableOpacity
        style={[
          styles.container,
          lastItem ? { marginRight: dailyExerciseItem.marginLeft } : {},
        ]}
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
              <Text style={[footnoteFont, whiteFont]}>COMPLETE</Text>
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
      {/* <View style={styles.remindMeContainer}>
        <Text style={[bodyFont, whiteFont]}>{`03:57:23`}</Text>
        <NotificationSwitchSelector />
      </View> */}
    </View>
  );
};

export default DailyExerciseItem;
