import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { connect } from 'react-redux';
import { CommonActions } from '@react-navigation/native';

import styles from './screenStyles/PracticeStyles';
import CourseItem from '../components/CourseItem/CourseItem';
import { ClassCarouselItem } from '../components/ClassCarouselItem';
import { Separator } from '../components/Separator';
import { screenWidth } from '../styles/constants';
import { islandCarouselItem } from '../styles/standardComponents';
import { CLASS_SCREEN, ABOUT_CLASS_SCREEN } from '../constants/constants';
import getClassesCompleteCount from '../helpers/reduxHelpers/getClassesCompleteCount';
import isClassComplete from '../helpers/reduxHelpers/isClassComplete';
import isCourseActive from '../helpers/reduxHelpers/isCourseActive';
import { updateAwarenessBeginnerStartTimestamp } from '../actions/awarenessBeginner';
import { updateNavigationDeepLink } from '../actions/navigation';
import getIndexOfMostRecentClass from '../helpers/reduxHelpers/getIndexOfMostRecentClass';
import courseNotificationScheduler from '../helpers/courseNotificationScheduler';
import startCourse from '../helpers/reduxHelpers/startCourse';

import {
  introCourse,
  beginnerCourse,
} from '../assets/courses/finalCourses/index';

import * as data from '../assets/courses/courses/mindfulnessIntroduction.json';

const Practice = ({
  navigation,
  reduxAwarenessBeginner,
  reduxUpdateAwarenessBeginnerStartTimestamp,
  deepLinkState,
  reduxUpdateNavigationDeepLink,
}) => {
  const [focusedIndex, setFocusedIndex] = useState(
    getIndexOfMostRecentClass(reduxAwarenessBeginner)
  );
  console.log('beginnerCourse', beginnerCourse);

  useEffect(() => {
    handleDeepLinkNavigation(deepLinkState);

    // Run the course notification scheduler every time the app is opened
    const isCourseActivated = isCourseActive(reduxAwarenessBeginner);
    if (isCourseActivated) {
      courseNotificationScheduler(beginnerCourse, reduxAwarenessBeginner);
    }
  }, [deepLinkState]);

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

  const navigateClass = (classInfo, isCourseActivated, course) => {
    navigation.navigate('Class', {
      course,
      classInfo,
      screenType: CLASS_SCREEN,
      isCourseActivated,
    });
  };

  const renderClassCarouselItem = (item, index) => {
    const isCourseActivated = isCourseActive(reduxAwarenessBeginner);
    const classInfo = {
      ...item,
      classIndex: index,
    };

    return (
      <ClassCarouselItem
        course={beginnerCourse}
        classInfo={classInfo}
        onPress={() => {
          if (!isCourseActivated) {
            // update redux with the courseStartTimestamp
            startCourse(
              beginnerCourse,
              reduxAwarenessBeginner,
              reduxUpdateAwarenessBeginnerStartTimestamp
            );
            navigateClass(
              {
                ...beginnerCourse?.classes[0],
                classIndex: 0,
              },
              isCourseActivated
            );
          } else {
            navigateClass(classInfo, isCourseActivated);
          }
        }}
        isComplete={isClassComplete(reduxAwarenessBeginner, index)}
        buttonTitle={isCourseActivated ? 'GO' : 'START HERE'}
        reduxCourse={reduxAwarenessBeginner}
        isCourseActivated={isCourseActivated}
        focusedIndex={focusedIndex}
      />
    );
  };

  const renderCourseCarouselItem = (item, index) => {
    return (
      <CourseItem
        title={item?.title}
        subheading={`${getClassesCompleteCount(reduxAwarenessBeginner)} of ${
          item?.classes?.length
        } complete`}
        onPress={() =>
          navigation.navigate('AboutCourse', {
            courseInfo: {
              courseTitle: item?.title,
              courseLength: item?.classes?.length,
              courseInformation: item?.information,
            },
            screenType: ABOUT_CLASS_SCREEN,
          })
        }
      />
    );
  };

  return (
    <View style={styles.container}>
      {/* <View style={{flex: 1}}> */}
      {renderCourseCarouselItem(beginnerCourse)}
      {/* <Carousel
          data={[MINDFULNESS_INTRO_COURSE, beginnerCourse]}
          renderItem={({item, index}) => renderCourseCarouselItem(item, index)}
          sliderWidth={screenWidth}
          itemWidth={islandCarouselItem.width}
          inactiveSlideOpacity={0.5}
          inactiveSlideScale={0.9}
          layoutCardOffset={10}
        /> */}
      {/* </View> */}
      <Separator />
      <View style={{ flex: 3 }}>
        <Carousel
          data={beginnerCourse?.classes}
          renderItem={({ item, index }) => renderClassCarouselItem(item, index)}
          sliderWidth={screenWidth}
          itemWidth={islandCarouselItem.width}
          inactiveSlideOpacity={0.5}
          inactiveSlideScale={0.9}
          layoutCardOffset={10}
          firstItem={getIndexOfMostRecentClass(reduxAwarenessBeginner)}
          onSnapToItem={(index) => {
            setFocusedIndex(index);
          }}
        />
      </View>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    reduxAwarenessBeginner: state?.awarenessBeginner || {},
    deepLinkState: state?.navigation?.deepLinkState || null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    reduxUpdateAwarenessBeginnerStartTimestamp: (obj) =>
      dispatch(updateAwarenessBeginnerStartTimestamp(obj)),
    reduxUpdateNavigationDeepLink: (deepLinkState) =>
      dispatch(updateNavigationDeepLink(deepLinkState)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Practice);
