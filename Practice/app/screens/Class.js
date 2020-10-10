import React, { useEffect, useState } from 'react';
import { FlatList, ImageBackground } from 'react-native';
import { connect } from 'react-redux';

import styles from './screenStyles/ClassStyles';
import DailyExerciseListItem from '../components/DailyExerciseListItem/DailyExerciseListItem';
import isExerciseComplete from '../helpers/reduxHelpers/isExerciseComplete';
import { INSTRUCTION_EXERCISE_SCREEN } from '../constants/constants';
import { HeaderSpacer } from '../components/HeaderSpacer';
import setLocalImage from '../helpers/setLocalImage';
import { HeaderDefaultBack } from '../components/HeaderDefaultBack';

const Class = ({ navigation, route, reduxAwarenessBeginner, background }) => {
  const { classInfo, isCourseActivated, course } = route.params;
  const { classIndex } = classInfo;

  const [focusedExerciseIndex, setFocusedExerciseIndex] = useState(0);

  const navigateBack = () => {
    navigation.goBack();
  };

  useEffect(() => {
    if (!isCourseActivated) {
      navigation.navigate('Exercise', {
        exercise: classInfo?.exercises[0],
        nextExercise: classInfo?.exercises[1],
        courseId: course?.id,
        classIndex,
        exerciseIndex: 0,
        screenType: INSTRUCTION_EXERCISE_SCREEN,
      });
    }
  }, []);

  const renderItem = (exercise, index) => {
    return (
      <DailyExerciseListItem
        focused={index === 0}
        exercise={exercise}
        nextExercise={
          classInfo?.exercises?.length > index + 1
            ? classInfo?.exercises[index + 1]
            : null
        }
        navigation={navigation}
        classIndex={classIndex}
        exerciseIndex={index}
        isExerciseComplete={isExerciseComplete(
          index,
          classIndex,
          reduxAwarenessBeginner
        )}
        course={course}
        reduxCourse={reduxAwarenessBeginner}
        lastItem={index === classInfo?.exercises?.length - 1}
      />
    );
  };

  const moveFocusedExerciseToTop = (items) => {
    const unfocusedItems = [];

    const result = items.filter((i, index) => {
      if (focusedExerciseIndex !== index) {
        unfocusedItems.push(i);
        return false;
      }

      return true;
    });

    return [...result, ...unfocusedItems];
  };

  return (
    <ImageBackground
      style={styles.container}
      source={setLocalImage(background)}
    >
      <HeaderSpacer />
      <HeaderDefaultBack onPressBack={navigateBack} title={classInfo?.title} />

      <FlatList
        data={moveFocusedExerciseToTop(classInfo?.exercises)}
        renderItem={({ item, index }) => renderItem(item, index)}
        keyExtractor={(item, index) => `${item.title}${index}`}
        extraData={reduxAwarenessBeginner}
      />
    </ImageBackground>
  );
};

const mapStateToProps = (state) => {
  return {
    reduxAwarenessBeginner: state?.awarenessBeginner || {},
    background: state?.settings?.background || 'background1',
  };
};

export default connect(mapStateToProps)(Class);
