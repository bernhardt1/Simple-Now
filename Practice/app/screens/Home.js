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
import {
  CLASS_SCREEN,
  ABOUT_CLASS_SCREEN,
  ABOUT_SCREEN,
} from '../constants/constants';
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
import startCourse from '../helpers/reduxHelpers/startCourse';

import {
  MINDFULNESS_INTRO,
  MINDFULNESS_BEGINNER,
} from '../assets/courses/finalCourses/index';
import setLocalImage from '../helpers/setLocalImage';
import HeaderHome from '../components/HeaderHome/HeaderHome';
import { updateBackground } from '../actions/settings';
import { BACKGROUND_COUNT } from '../constants/magicNumbers';
import getCourseFromIndex from '../helpers/courseHelpers/getCourseFromIndex';
import createReduxCourseObject from '../helpers/reduxHelpers/createReduxCourseObject';

const Home = ({
  navigation,
  reduxCourses,
  deepLinkState,
  background,
  reduxUpdateActiveCourseId,
  reduxUpdateCourseStartTimestamp,
  reduxUpdateNavigationDeepLink,
  reduxUpdateBackground,
}) => {
  const [focusedIndex, setFocusedIndex] = useState(
    getIndexOfMostRecentClass(reduxCourses)
  );
  const [focusedCourse, setFocusedCourseState] = useState(MINDFULNESS_INTRO);

  useEffect(() => {
    const focusedReduxCourse = createReduxCourseObject(
      reduxCourses,
      reduxCourses?.activeCourseId
    );
    console.log('focusedReduxCourse', focusedReduxCourse);
    // handleDeepLinkNavigation(deepLinkState);
    // // Run the course notification scheduler every time the app is opened
    // const isCourseActivated = true; //isCourseActive(reduxCourses);
    // if (isCourseActivated) {
    //   courseNotificationScheduler(MINDFULNESS_BEGINNER, reduxCourses);
    // }
  }, [deepLinkState, background]);

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

  const navigateClass = (classInfo, isCourseActivated, course) => {
    navigation.navigate('Class', {
      course,
      classInfo,
      screenType: CLASS_SCREEN,
      isCourseActivated,
    });
  };

  const changeBackground = () => {
    const current = background.split('background')[1];
    const result = current
      ? `background${(parseInt(current, 10) + 1) % BACKGROUND_COUNT}`
      : 'background1';

    reduxUpdateBackground(result);
  };

  const renderClassCarouselItem = (item, index) => {
    const isCourseActivated = true; // isCourseActive(reduxCourses);
    const classInfo = {
      ...item,
      classIndex: index,
    };

    return (
      <ClassCarouselItem
        course={focusedCourse}
        classInfo={classInfo}
        onPress={() => {
          if (!isCourseActivated) {
            // update redux with the courseStartTimestamp
            startCourse(
              focusedCourse,
              reduxCourses,
              reduxUpdateCourseStartTimestamp
            );
            navigateClass(
              {
                ...focusedCourse?.classes[0],
                classIndex: 0,
              },
              isCourseActivated
            );
          } else {
            navigateClass(classInfo, isCourseActivated);
          }
        }}
        isComplete={isClassComplete(reduxCourses, index)}
        buttonTitle={isCourseActivated ? 'GO' : 'START HERE'}
        reduxCourse={reduxCourses}
        isCourseActivated={isCourseActivated}
        focusedIndex={focusedIndex}
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
          navigation.navigate('Exercise', {
            // 'AboutCourse'
            courseInfo: {
              courseTitle: item?.title,
              courseLength: item?.classes?.length,
              courseInformation: item?.information,
              courseId: item?.id,
            },
            screenType: ABOUT_CLASS_SCREEN,
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
            reduxUpdateActiveCourseId(courseId);

            setFocusedCourse(index);
          }}
        />
      </View>
      <Separator />
      <View style={{ flex: 3 }}>
        <Carousel
          data={focusedCourse?.classes}
          renderItem={({ item, index }) => renderClassCarouselItem(item, index)}
          sliderWidth={screenWidth}
          itemWidth={islandCarouselItem.width}
          inactiveSlideOpacity={0.5}
          inactiveSlideScale={0.9}
          layoutCardOffset={10}
          firstItem={getIndexOfMostRecentClass(reduxCourses)}
          onSnapToItem={(index) => {
            setFocusedIndex(index);
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
