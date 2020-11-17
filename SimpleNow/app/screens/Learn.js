import React, { useEffect, useState, useMemo } from 'react';
import { View, ImageBackground, FlatList } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { connect } from 'react-redux';
import { CommonActions } from '@react-navigation/native';
import Modal from 'react-native-modal';

import styles from './screenStyles/HomeStyles';
import CourseItem from '../components/CourseItem/CourseItem';
import { HeaderSpacer } from '../components/HeaderSpacer';
import { ClassCarouselItem } from '../components/ClassCarouselItem';
import { Separator } from '../components/Separator';
import { screenWidth, widthUnit } from '../styles/constants';
import { islandCarouselItem } from '../styles/standardComponents';
import getClassesCompleteCount from '../helpers/reduxHelpers/getClassesCompleteCount';
import isClassComplete from '../helpers/reduxHelpers/isClassComplete';
import isCourseActive from '../helpers/reduxHelpers/isCourseActive';
import {
  updateActiveCourseId,
  updateCourseStartTimestamp,
} from '../actions/courses';
import { updateNavigationDeepLink } from '../actions/navigation';
import getIndexOfMostRecentClass from '../helpers/reduxHelpers/getIndexOfMostRecentClass';
import courseNotificationScheduler from '../helpers/courseNotificationScheduler';

import {
  MINDFULNESS_INTRO,
  MINDFULNESS_BEGINNER,
  MINDFULNESS_101,
} from '../assets/courses/finalCourses/index';
import setLocalImage from '../helpers/setLocalImage';
import HeaderHome from '../components/HeaderHome/HeaderHome';
import { updateBackground } from '../actions/settings';
import { BACKGROUND_IMAGE_COUNT } from '../constants/magicNumbers';
import getCourseIdFromIndex from '../helpers/courseHelpers/getCourseIdFromIndex';
import createFlatReduxCourse from '../helpers/reduxHelpers/createFlatReduxCourse';
import getCourseFromId from '../helpers/courseHelpers/getCourseFromId';
import getIndexOfMostRecentCourse from '../helpers/reduxHelpers/getIndexOfMostRecentCourse';
import { PushPermissionModalContent } from '../components/ModalContent/index';
import ExerciseListItem from '../components/ExerciseListItem/ExerciseListItem';
import getIndexOfNextExercise from '../helpers/reduxHelpers/getIndexOfNextExercise';

const Home = ({
  navigation,
  reduxCourses,
  activeCourseId,
  deepLinkState,
  background,
  reduxUpdateActiveCourseId,
  reduxUpdateNavigationDeepLink,
  reduxUpdateBackground,
}) => {
  const [focusedCourse, setFocusedCourseState] = useState(
    getCourseFromId(activeCourseId)
  );
  const focusedReduxFlatCourse = useMemo(
    () => createFlatReduxCourse(reduxCourses, activeCourseId),
    [reduxCourses, activeCourseId]
  );

  useEffect(() => {
    handleDeepLinkNavigation(deepLinkState);
    // Run the course notification scheduler every time the app is opened
    const isCourseActivated = isCourseActive(focusedReduxFlatCourse);
    if (isCourseActivated) {
      courseNotificationScheduler(focusedCourse, focusedReduxFlatCourse);
    }
  }, [deepLinkState, background, focusedCourse, focusedReduxFlatCourse]);

  const handleDeepLinkNavigation = () => {
    if (!deepLinkState) return;

    navigation.dispatch((state) => {
      const newState = CommonActions.reset({
        index: 0,
        ...deepLinkState,
      });

      return newState;
    });

    // Reset the route after handling it
    reduxUpdateNavigationDeepLink(null);
  };

  const renderClassCarouselItem = (item, index) => {
    const isCourseActivated = isCourseActive(focusedReduxFlatCourse);
    const classInfo = {
      ...item,
      classIndex: index,
    };

    return (
      <ClassCarouselItem
        course={focusedCourse}
        classInfo={classInfo}
        navigation={navigation}
        isComplete={isClassComplete(focusedReduxFlatCourse, index)}
        buttonTitle={isCourseActivated ? 'GO' : 'START HERE'}
        reduxCourse={focusedReduxFlatCourse}
        reduxCourses={reduxCourses}
        isCourseActivated={isCourseActivated}
      />
    );
  };

  const renderCourseCarouselItem = (item, index) => {
    return (
      <CourseItem
        title={item?.title}
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
    );
  };

  const setFocusedCourse = (courseId) => {
    const course = getCourseFromId(courseId);
    setFocusedCourseState(course);
  };

  const renderExerciseItem = (exercise, index) => {
    // const targetIndex = getIndexOfNextExercise(
    //   focusedCourse,
    //   focusedReduxFlatCourse,
    //   classIndex
    // );

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

  return (
    <ImageBackground
      style={styles.container}
      source={setLocalImage(background)}
    >
      <HeaderSpacer transparent />
      <View style={{ flex: 0.5, marginTop: widthUnit * 5 }}>
        <Carousel
          data={[MINDFULNESS_101, MINDFULNESS_INTRO, MINDFULNESS_BEGINNER]}
          renderItem={({ item, index }) =>
            renderCourseCarouselItem(item, index)
          }
          sliderWidth={screenWidth}
          itemWidth={widthUnit * 60}
          inactiveSlideOpacity={0.5}
          inactiveSlideScale={0.8}
          layoutCardOffset={10}
          firstItem={getIndexOfMostRecentCourse(activeCourseId)}
          onSnapToItem={(index) => {
            const courseId = getCourseIdFromIndex(index);

            reduxUpdateActiveCourseId(courseId);
            setFocusedCourse(courseId);
          }}
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
    deepLinkState: state?.navigation?.deepLinkState || null,
    background: state?.settings?.background || 'background1',
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    reduxUpdateActiveCourseId: (val) => dispatch(updateActiveCourseId(val)),
    reduxUpdateCourseStartTimestamp: (obj) =>
      dispatch(updateCourseStartTimestamp(obj)),
    reduxUpdateNavigationDeepLink: (deepLinkState) =>
      dispatch(updateNavigationDeepLink(deepLinkState)),
    reduxUpdateBackground: (deepLinkState) =>
      dispatch(updateBackground(deepLinkState)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
