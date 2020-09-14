import React, {useEffect} from 'react';
import {View} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {connect} from 'react-redux';
import {CommonActions} from '@react-navigation/native';

import styles from './screenStyles/PracticeStyles';
import CourseItem from '../components/CourseItem/CourseItem';
import {awarenessBeginner} from '../assets/courses';
import {ClassCarouselItem} from '../components/ClassCarouselItem';
import {Separator} from '../components/Separator';
import {screenWidth} from '../styles/constants';
import {islandCarouselItem} from '../styles/standardComponents';
import {CLASS_SCREEN, ABOUT_CLASS_SCREEN} from '../constants/constants';
import getClassesCompleteCount from '../helpers/getClassesCompleteCount';
import isClassComplete from '../helpers/isClassComplete';
import isCourseActive from '../helpers/isCourseActive';
import scheduleCourseNotifications from '../helpers/scheduleCourseNotifications';
import {updateAwarenessBeginnerClassExerciseReminderTime} from '../actions/awarenessBeginner';
import isClassAvailable from '../helpers/reduxHelpers/isClassAvailable';
import {updateNavigationDeepLink} from '../actions/navigation';
import getIndexOfMostRecentClass from '../helpers/reduxHelpers/getIndexOfMostRecentClass';

const Practice = ({
  navigation,
  reduxAwarenessBeginner,
  reduxUpdateAwarenessBeginnerClassExerciseReminderTime,
  deepLinkState,
  reduxUpdateNavigationDeepLink,
}) => {
  useEffect(() => {
    handleDeepLinkNavigation(deepLinkState);
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
        courseTitle: awarenessBeginner?.title,
        courseLength: awarenessBeginner?.classes?.length,
        courseInformation: awarenessBeginner?.information,
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
        courseTitle={awarenessBeginner.title}
        classInfo={classInfo}
        onPress={() => {
          if (!isCourseActivated) {
            scheduleCourseNotifications(
              global.Notifications,
              awarenessBeginner,
              reduxAwarenessBeginner,
              reduxUpdateAwarenessBeginnerClassExerciseReminderTime,
            );

            navigateClass(
              {
                ...awarenessBeginner?.classes[0],
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
        isClassAvailable={isClassAvailable(reduxAwarenessBeginner, index)}
      />
    );
  };

  return (
    <View style={styles.container}>
      <CourseItem
        title={awarenessBeginner?.title}
        subheading={`${getClassesCompleteCount(reduxAwarenessBeginner)} of ${
          awarenessBeginner?.classes?.length
        } complete`}
        onPress={() =>
          navigation.navigate('AboutCourse', {
            courseInfo: {
              courseTitle: awarenessBeginner?.title,
              courseLength: awarenessBeginner?.classes?.length,
              courseInformation: awarenessBeginner?.information,
            },
            screenType: ABOUT_CLASS_SCREEN,
          })
        }
      />
      <Separator />
      <View style={{flex: 3}}>
        <Carousel
          ref={(c) => {
            this._carousel = c;
          }}
          data={awarenessBeginner?.classes}
          renderItem={({item, index}) => renderClassCarouselItem(item, index)}
          sliderWidth={screenWidth}
          itemWidth={islandCarouselItem.width}
          inactiveSlideOpacity={0.5}
          inactiveSlideScale={0.9}
          layoutCardOffset={10}
          firstItem={getIndexOfMostRecentClass(reduxAwarenessBeginner)}
        />
      </View>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    reduxAwarenessBeginner: state?.awarenessBeginner || {},
    deepLinkState: state?.navigation.deepLinkState || null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    reduxUpdateAwarenessBeginnerClassExerciseReminderTime: (obj) =>
      dispatch(updateAwarenessBeginnerClassExerciseReminderTime(obj)),
    reduxUpdateNavigationDeepLink: (deepLinkState) =>
      dispatch(updateNavigationDeepLink(deepLinkState)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Practice);
