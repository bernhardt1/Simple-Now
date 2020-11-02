import React, { useEffect, useState, useMemo } from 'react';
import { FlatList, ImageBackground, Alert } from 'react-native';
import { connect } from 'react-redux';

import styles from './screenStyles/ClassStyles';
import DailyExerciseListItem from '../components/DailyExerciseListItem/DailyExerciseListItem';
import isExerciseComplete from '../helpers/reduxHelpers/isExerciseComplete';
import { INSTRUCTION_EXERCISE_SCREEN } from '../constants/constants';
import { HeaderSpacer } from '../components/HeaderSpacer';
import setLocalImage from '../helpers/setLocalImage';
import { HeaderDefaultBack } from '../components/HeaderDefaultBack';
import createFlatReduxCourse from '../helpers/reduxHelpers/createFlatReduxCourse';
import getCourseFromId from '../helpers/courseHelpers/getCourseFromId';
import getIndexOfNextExercise from '../helpers/reduxHelpers/getIndexOfNextExercise';
import BottomButton from '../components/BottomButton/BottomButton';

const Class = ({
  navigation,
  route,
  reduxCourses,
  activeCourseId,
  background,
}) => {
  const { classInfo, isCourseActivated } = route.params;
  const { classIndex } = classInfo;

  const [focusedCourse] = useState(getCourseFromId(activeCourseId));
  const focusedReduxFlatCourse = useMemo(
    () => createFlatReduxCourse(reduxCourses, activeCourseId),
    [reduxCourses, activeCourseId]
  );

  const navigateBack = () => {
    navigation.goBack();
  };

  useEffect(() => {
    if (!isCourseActivated) {
      navigation.navigate('Exercise', {
        exercise: classInfo?.exercises[0],
        nextExercise: classInfo?.exercises[1],
        classIndex,
        exerciseIndex: 0,
        screenType: INSTRUCTION_EXERCISE_SCREEN,
      });
    }
  }, []);

  const navigateNextExercise = () => {
    const targetIndex = getIndexOfNextExercise(
      focusedCourse,
      focusedReduxFlatCourse,
      classIndex
    );

    navigation.navigate('Exercise', {
      exercise: classInfo?.exercises[targetIndex],
      nextExercise:
        classInfo?.exercises?.length > targetIndex + 1
          ? classInfo?.exercises[targetIndex + 1]
          : null,
      classIndex,
      exerciseIndex: targetIndex,
      targetIndex,
    });
  };

  const renderItem = (exercise, index) => {
    const targetIndex = getIndexOfNextExercise(
      focusedCourse,
      focusedReduxFlatCourse,
      classIndex
    );

    return (
      <DailyExerciseListItem
        focused={index === targetIndex}
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
          focusedReduxFlatCourse
        )}
        course={focusedCourse}
        reduxCourse={focusedReduxFlatCourse}
        lastItem={index === classInfo?.exercises?.length - 1}
      />
    );
  };

  return (
    <ImageBackground
      style={styles.container}
      source={setLocalImage(background)}
    >
      <HeaderSpacer />
      <HeaderDefaultBack onPressBack={navigateBack} title={classInfo?.title} />

      <FlatList
        data={classInfo?.exercises}
        renderItem={({ item, index }) => renderItem(item, index)}
        keyExtractor={(item, index) => `${item.title}${index}`}
        extraData={focusedReduxFlatCourse}
      />
      {getIndexOfNextExercise(
        focusedCourse,
        focusedReduxFlatCourse,
        classIndex
      ) !== null && (
        <BottomButton onPress={navigateNextExercise} title={'start'} absolute />
      )}
    </ImageBackground>
  );
};

const mapStateToProps = (state) => {
  return {
    reduxCourses: state?.courses || {},
    activeCourseId: state?.courses?.activeCourseId,
    background: state?.settings?.background || 'background1',
  };
};

export default connect(mapStateToProps)(Class);
