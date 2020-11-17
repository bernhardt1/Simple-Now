import React, { useEffect, useState, useMemo } from 'react';
import { View, ImageBackground, FlatList } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { connect } from 'react-redux';
import { CommonActions } from '@react-navigation/native';

import styles from './screenStyles/HomeStyles';
import CourseItem from '../components/CourseItem/CourseItem';
import { HeaderSpacer } from '../components/HeaderSpacer';
import { ClassCarouselItem } from '../components/ClassCarouselItem';
import { screenWidth, widthUnit } from '../styles/constants';
import isClassComplete from '../helpers/reduxHelpers/isClassComplete';
import isCourseActive from '../helpers/reduxHelpers/isCourseActive';
import {
  updateActiveCourseId,
  updateCourseStartTimestamp,
} from '../actions/courses';
import { updateNavigationDeepLink } from '../actions/navigation';
import courseNotificationScheduler from '../helpers/courseNotificationScheduler';

import {
  MINDFULNESS_INTRO,
  MINDFULNESS_BEGINNER,
  MINDFULNESS_101,
} from '../assets/courses/finalCourses/index';
import setLocalImage from '../helpers/setLocalImage';
import { updateBackground } from '../actions/settings';
import getCourseIdFromIndex from '../helpers/courseHelpers/getCourseIdFromIndex';
import createFlatReduxCourse from '../helpers/reduxHelpers/createFlatReduxCourse';
import getCourseFromId from '../helpers/courseHelpers/getCourseFromId';
import getIndexOfMostRecentCourse from '../helpers/reduxHelpers/getIndexOfMostRecentCourse';
import ExerciseListItem from '../components/ExerciseListItem/ExerciseListItem';
import { HeaderDefaultBack } from '../components/HeaderDefaultBack';

const Program = ({
  navigation,
  route,
  reduxCourses,
  activeCourseId,
  background,
  reduxUpdateActiveCourseId,
  reduxUpdateNavigationDeepLink,
  reduxUpdateBackground,
}) => {
  const { programId } = route.params;

  const [focusedCourse, setFocusedCourseState] = useState(
    getCourseFromId(programId)
  );
  console.log('focusedCourse', focusedCourse);
  const focusedReduxFlatCourse = useMemo(
    () => createFlatReduxCourse(reduxCourses, activeCourseId),
    [reduxCourses, activeCourseId]
  );

  const renderExerciseItem = (exercise, index) => {
    return (
      <ExerciseListItem
        // focused={index === targetIndex}
        exercise={exercise}
        // nextExercise={
        //   classInfo?.exercises?.length > index + 1
        //     ? classInfo?.exercises[index + 1]
        //     : null
        // }
        navigation={navigation}
        // classIndex={classIndex}
        exerciseIndex={index}
        // isExerciseComplete={isExerciseComplete(
        //   index,
        //   classIndex,
        //   focusedReduxFlatCourse
        // )}
        course={focusedCourse}
        reduxCourse={focusedReduxFlatCourse}
        // lastItem={index === classInfo?.exercises?.length - 1}
      />
    );
  };

  const navigateBack = () => {
    navigation.goBack();
  };

  return (
    <ImageBackground
      style={styles.container}
      source={setLocalImage(background)}
    >
      <HeaderSpacer transparent />
      <HeaderDefaultBack onPressBack={navigateBack} transparent />
      <View style={{ flex: 0.5 }}>
        <CourseItem
          title={focusedCourse?.title}
          onPress={() =>
            navigation.navigate('AboutCourse', {
              courseInfo: {
                courseTitle: item?.title,
                courseLength: item?.classes?.length,
                courseInformation: item?.information,
                courseId: item?.id,
              },
            })
          }
        />
      </View>
      <View style={{ flex: 3, alignSelf: 'stretch' }}>
        <FlatList
          data={focusedCourse?.exercises}
          renderItem={({ item, index }) => renderExerciseItem(item, index)}
          keyExtractor={(item, index) => `${item.title}${index}`}
          extraData={focusedReduxFlatCourse}
        />
      </View>
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

const mapDispatchToProps = (dispatch) => {
  return {
    reduxUpdateActiveCourseId: (val) => dispatch(updateActiveCourseId(val)),
    reduxUpdateCourseStartTimestamp: (obj) =>
      dispatch(updateCourseStartTimestamp(obj)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Program);
