import React, { useEffect, useState } from 'react';
import { View, ImageBackground } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { connect } from 'react-redux';
import { CommonActions } from '@react-navigation/native';

import styles from './screenStyles/HomeStyles';
import CourseItem from '../components/CourseItem/CourseItem';
import { HeaderSpacer } from '../components/HeaderSpacer';
import { ClassCarouselItem } from '../components/ClassCarouselItem';
import { Separator } from '../components/Separator';
import { screenWidth } from '../styles/constants';
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
} from '../assets/courses/finalCourses/index';
import setLocalImage from '../helpers/setLocalImage';
import HeaderHome from '../components/HeaderHome/HeaderHome';
import { updateBackground } from '../actions/settings';
import { BACKGROUND_COUNT } from '../constants/magicNumbers';
import getCourseFromIndex from '../helpers/courseHelpers/getCourseFromIndex';
import createFlatReduxCourse from '../helpers/reduxHelpers/createFlatReduxCourse';

const Home = ({
  navigation,
  reduxCourses,
  deepLinkState,
  background,
  reduxUpdateActiveCourseId,
  reduxUpdateNavigationDeepLink,
  reduxUpdateBackground,
}) => {
  const [focusedClassIndex, setFocusedClassIndex] = useState(
    getIndexOfMostRecentClass(0)
  );
  const [focusedCourse, setFocusedCourseState] = useState(MINDFULNESS_INTRO);
  const [focusedReduxFlatCourse, setFocusedReduxFlatCourse] = useState(
    createFlatReduxCourse(reduxCourses, reduxCourses?.activeCourseId)
  );

  useEffect(() => {
    // const focusedReduxCourse = createFlatReduxCourse(
    //   reduxCourses,
    //   reduxCourses?.activeCourseId
    // );
    // handleDeepLinkNavigation(deepLinkState);
    // // Run the course notification scheduler every time the app is opened
    // const isCourseActivated = true; //isCourseActive(reduxCourses);
    // if (isCourseActivated) {
    //   courseNotificationScheduler(MINDFULNESS_BEGINNER, reduxCourses);
    // }
  }, [deepLinkState, background, focusedCourse, focusedReduxFlatCourse]);

  // const handleDeepLinkNavigation = () => {
  //   if (!deepLinkState) return;

  //   navigation.dispatch((state) => {
  //     const newState = CommonActions.reset({
  //       index: 0,
  //       ...deepLinkState,
  //     });

  //     return newState;
  //   });

  //   // Reset the route after handling it
  //   reduxUpdateNavigationDeepLink(null);
  // };

  const changeBackground = () => {
    const current = background.split('background')[1];
    const result = current
      ? `background${(parseInt(current, 10) + 1) % BACKGROUND_COUNT}`
      : 'background1';

    reduxUpdateBackground(result);
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
        isCourseActivated={isCourseActivated}
        focusedClassIndex={focusedClassIndex}
      />
    );
  };

  const renderCourseCarouselItem = (item, index) => {
    return (
      <CourseItem
        title={item?.title}
        subheading={`${getClassesCompleteCount(reduxCourses)} of ${
          item?.classes?.length
        } complete`}
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

  const setFocusedCourse = (index) => {
    switch (index) {
      case 0:
        setFocusedCourseState(MINDFULNESS_INTRO);
        break;
      case 1:
        setFocusedCourseState(MINDFULNESS_BEGINNER);
        break;
      default:
        break;
    }
  };

  return (
    <ImageBackground
      style={styles.container}
      source={setLocalImage(background)}
    >
      <HeaderSpacer />
      <HeaderHome onPressHamburger={changeBackground} />
      <View style={{ flex: 1 }}>
        <Carousel
          data={[MINDFULNESS_INTRO, MINDFULNESS_BEGINNER]}
          renderItem={({ item, index }) =>
            renderCourseCarouselItem(item, index)
          }
          sliderWidth={screenWidth}
          itemWidth={islandCarouselItem.width}
          inactiveSlideOpacity={0.5}
          inactiveSlideScale={0.9}
          layoutCardOffset={10}
          onSnapToItem={(index) => {
            const courseId = getCourseFromIndex(index);
            console.log('courseId', courseId);
            reduxUpdateActiveCourseId(courseId);

            setFocusedCourse(index);
            setFocusedReduxFlatCourse(
              createFlatReduxCourse(reduxCourses, courseId)
            );
          }}
        />
      </View>
      <Separator />
      <View style={{ flex: 3 }}>
        <Carousel
          data={[...focusedCourse?.classes]}
          renderItem={({ item, index }) => renderClassCarouselItem(item, index)}
          sliderWidth={screenWidth}
          itemWidth={islandCarouselItem.width}
          inactiveSlideOpacity={0.5}
          inactiveSlideScale={0.9}
          layoutCardOffset={10}
          firstItem={getIndexOfMostRecentClass(reduxCourses)}
          onSnapToItem={(index) => {
            setFocusedClassIndex(index);
          }}
        />
      </View>
    </ImageBackground>
  );
};

const mapStateToProps = (state) => {
  return {
    reduxCourses: state?.courses || {},
    deepLinkState: state?.navigation?.deepLinkState || null,
    background: state?.settings?.background || 'background1',
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    reduxUpdateActiveCourseId: (deepLinkState) =>
      dispatch(updateActiveCourseId(deepLinkState)),
    reduxUpdateCourseStartTimestamp: (obj) =>
      dispatch(updateCourseStartTimestamp(obj)),
    reduxUpdateNavigationDeepLink: (deepLinkState) =>
      dispatch(updateNavigationDeepLink(deepLinkState)),
    reduxUpdateBackground: (deepLinkState) =>
      dispatch(updateBackground(deepLinkState)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
