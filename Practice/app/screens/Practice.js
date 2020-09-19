import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {connect} from 'react-redux';
import {CommonActions} from '@react-navigation/native';

import styles from './screenStyles/PracticeStyles';
import CourseItem from '../components/CourseItem/CourseItem';
import {AWARENESS_BEGINNER_COURSE} from '../assets/courses';
import {ClassCarouselItem} from '../components/ClassCarouselItem';
import {Separator} from '../components/Separator';
import {screenWidth} from '../styles/constants';
import {islandCarouselItem} from '../styles/standardComponents';
import {CLASS_SCREEN, ABOUT_CLASS_SCREEN} from '../constants/constants';
import getClassesCompleteCount from '../helpers/reduxHelpers/getClassesCompleteCount';
import isClassComplete from '../helpers/reduxHelpers/isClassComplete';
import isCourseActive from '../helpers/reduxHelpers/isCourseActive';
import {updateAwarenessBeginnerStartTimestamp} from '../actions/awarenessBeginner';
import {updateNavigationDeepLink} from '../actions/navigation';
import getIndexOfMostRecentClass from '../helpers/reduxHelpers/getIndexOfMostRecentClass';
import courseNotificationScheduler from '../helpers/courseNotificationScheduler';
import startCourse from '../helpers/reduxHelpers/startCourse';

const Practice = ({
  navigation,
  reduxAwarenessBeginner,
  reduxUpdateAwarenessBeginnerStartTimestamp,
  deepLinkState,
  reduxUpdateNavigationDeepLink,
}) => {
  const [focusedIndex, setFocusedIndex] = useState(
    getIndexOfMostRecentClass(reduxAwarenessBeginner),
  );

  useEffect(() => {
    handleDeepLinkNavigation(deepLinkState);

    // Run the course notification scheduler every time the app is opened
    const isCourseActivated = isCourseActive(reduxAwarenessBeginner);
    if (isCourseActivated) {
      courseNotificationScheduler(
        AWARENESS_BEGINNER_COURSE,
        reduxAwarenessBeginner,
      );
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

  const navigateClass = (classInfo, isCourseActivated) => {
    navigation.navigate('Class', {
      courseInfo: {
        courseTitle: AWARENESS_BEGINNER_COURSE?.title,
        courseLength: AWARENESS_BEGINNER_COURSE?.classes?.length,
        courseInformation: AWARENESS_BEGINNER_COURSE?.information,
      },
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
        courseTitle={AWARENESS_BEGINNER_COURSE.title}
        classInfo={classInfo}
        onPress={() => {
          if (!isCourseActivated) {
            // update redux with the courseStartTimestamp
            startCourse(
              AWARENESS_BEGINNER_COURSE,
              reduxAwarenessBeginner,
              reduxUpdateAwarenessBeginnerStartTimestamp,
            );

            navigateClass(
              {
                ...AWARENESS_BEGINNER_COURSE?.classes[0],
                classIndex: 0,
              },
              isCourseActivated,
            );
          } else {
            navigateClass(classInfo, isCourseActivated);
          }
        }}
        isComplete={isClassComplete(reduxAwarenessBeginner, index)}
        buttonTitle={isCourseActivated ? 'GO' : 'START HERE'}
        reduxAwarenessBeginner={reduxAwarenessBeginner}
        isCourseActivated={isCourseActivated}
        focusedIndex={focusedIndex}
      />
    );
  };

  return (
    <View style={styles.container}>
      <CourseItem
        title={AWARENESS_BEGINNER_COURSE?.title}
        subheading={`${getClassesCompleteCount(reduxAwarenessBeginner)} of ${
          AWARENESS_BEGINNER_COURSE?.classes?.length
        } complete`}
        onPress={() =>
          navigation.navigate('AboutCourse', {
            courseInfo: {
              courseTitle: AWARENESS_BEGINNER_COURSE?.title,
              courseLength: AWARENESS_BEGINNER_COURSE?.classes?.length,
              courseInformation: AWARENESS_BEGINNER_COURSE?.information,
            },
            screenType: ABOUT_CLASS_SCREEN,
          })
        }
      />
      <Separator />
      <View style={{flex: 3}}>
        <Carousel
          data={AWARENESS_BEGINNER_COURSE?.classes}
          renderItem={({item, index}) => renderClassCarouselItem(item, index)}
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
