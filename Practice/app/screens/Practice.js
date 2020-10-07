import React, { useEffect, useState } from 'react';
import { View, ImageBackground } from 'react-native';
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
import { updateCourseStartTimestamp } from '../actions/courses';
import { updateNavigationDeepLink } from '../actions/navigation';
import getIndexOfMostRecentClass from '../helpers/reduxHelpers/getIndexOfMostRecentClass';
import courseNotificationScheduler from '../helpers/courseNotificationScheduler';
import startCourse from '../helpers/reduxHelpers/startCourse';

import {
  MINDFULNESS_INTRO,
  MINDFULNESS_BEGINNER,
} from '../assets/courses/finalCourses/index';
import setLocalImage from '../helpers/setLocalImage';

const Practice = ({
  navigation,
  reduxCourses,
  deepLinkState,
  reduxUpdateCourseStartTimestamp,
  reduxUpdateNavigationDeepLink,
}) => {
  const [focusedIndex, setFocusedIndex] = useState(
    getIndexOfMostRecentClass(reduxCourses)
  );

  console.log('reduxCourses', reduxCourses);

  useEffect(() => {
    handleDeepLinkNavigation(deepLinkState);

    // Run the course notification scheduler every time the app is opened
    const isCourseActivated = isCourseActive(reduxCourses);
    if (isCourseActivated) {
      courseNotificationScheduler(MINDFULNESS_BEGINNER, reduxCourses);
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
    const isCourseActivated = isCourseActive(reduxCourses);
    const classInfo = {
      ...item,
      classIndex: index,
    };

    return (
      <ClassCarouselItem
        course={MINDFULNESS_BEGINNER}
        classInfo={classInfo}
        onPress={() => {
          if (!isCourseActivated) {
            // update redux with the courseStartTimestamp
            startCourse(
              MINDFULNESS_BEGINNER,
              reduxCourses,
              reduxUpdateCourseStartTimestamp
            );
            navigateClass(
              {
                ...MINDFULNESS_BEGINNER?.classes[0],
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

  // const renderCourseCarouselItem = (item, index) => {
  //   return (
  //     <CourseItem
  //       title={item?.title}
  //       subheading={`${getClassesCompleteCount(reduxCourses)} of ${
  //         item?.classes?.length
  //       } complete`}
  //       onPress={() =>
  //         navigation.navigate('AboutCourse', {
  //           courseInfo: {
  //             courseTitle: item?.title,
  //             courseLength: item?.classes?.length,
  //             courseInformation: item?.information,
  //             courseId: item?.id,
  //           },
  //           screenType: ABOUT_CLASS_SCREEN,
  //         })
  //       }
  //     />
  //   );
  // };

  const renderCourseCarouselItem = (item, index) => {
    return (
      <CourseItem
        title={item?.title}
        subheading={`${getClassesCompleteCount(reduxCourses)} of ${
          item?.classes?.length
        } complete`}
        onPress={() =>
          navigation.navigate('Exercise2', {
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

  return (
    <ImageBackground
      style={styles.container}
      source={setLocalImage('background1')}
    >
      {/* <View style={{flex: 1}}> */}
      {renderCourseCarouselItem(MINDFULNESS_BEGINNER)}
      {/* <Carousel
          data={[MINDFULNESS_INTRO_COURSE, MINDFULNESS_BEGINNER]}
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
          data={MINDFULNESS_BEGINNER?.classes}
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    reduxUpdateCourseStartTimestamp: (obj) =>
      dispatch(updateCourseStartTimestamp(obj)),
    reduxUpdateNavigationDeepLink: (deepLinkState) =>
      dispatch(updateNavigationDeepLink(deepLinkState)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Practice);
