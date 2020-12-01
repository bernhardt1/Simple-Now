import React from 'react';
import { View, Text } from 'react-native';
import { DailyExerciseItem } from '../../components/DailyExerciseItem';
import isExerciseComplete from '../../helpers/reduxHelpers/isExerciseComplete';
import { widthUnit } from '../../styles/constants';
import { titleEmphasizedFont, whiteFont } from '../../styles/fonts';

import styles from './styles';

const RenderDailyExerciseItems = ({
  firstRow,
  secondRow,
  reduxContent,
  navigation,
  currentPracticeProgress,
}) => {
  const renderDailyExerciseItem = (item) => {
    const isExerciseComp = isExerciseComplete(
      item?.exerciseType,
      item?.id,
      reduxContent
    );

    return (
      <DailyExerciseItem
        exercise={item}
        navigation={navigation}
        isExerciseComplete={isExerciseComp}
        currentPracticeProgress={currentPracticeProgress}
        key={item?.id}
      />
    );
  };

  if (!secondRow) {
    return (
      <View
        style={[
          styles.exerciseItemsTopRow,
          firstRow?.length === 2 && secondRow?.length === 2
            ? { paddingBottom: widthUnit * 2 }
            : {},
        ]}
      >
        {firstRow?.map((item) => {
          return renderDailyExerciseItem(item);
        })}
      </View>
    );
  }

  return (
    <View>
      <View style={styles.exerciseItemsTopRow}>
        {firstRow?.map((item) => {
          return renderDailyExerciseItem(item);
        })}
      </View>
      <View style={styles.exerciseItemsBottomRow}>
        {secondRow?.map((item) => {
          return renderDailyExerciseItem(item);
        })}
      </View>
    </View>
  );
};

export default RenderDailyExerciseItems;
