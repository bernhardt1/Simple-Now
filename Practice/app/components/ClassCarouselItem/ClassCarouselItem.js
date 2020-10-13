import React, { useEffect, useState } from 'react';
import { Text, View, TouchableWithoutFeedback, Alert } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';
import { BRAND_WHITE, DARK_OVERLAY } from '../../styles/colors';
import {
  whiteFont,
  subheadFont,
  titleFont,
  titleEmphasizedFont,
  centerAlign,
} from '../../styles/fonts';
import StandardButton from '../StandardButton/StandardButton';
import { StandardImageButton } from '../StandardImageButton';
import getClassProgressionInformation from '../../helpers/reduxHelpers/getClassProgressionInformation';
import ClassCarouselItemChecklist from '../ClassCarouselItemChecklist/ClassCarouselItemChecklist';
import StandardFlair from '../StandardFlair/StandardFlair';
import isClassAvailable from '../../helpers/reduxHelpers/isClassAvailable';
import startCourse from '../../helpers/reduxHelpers/startCourse';
import isCourseAvailable from '../../helpers/reduxHelpers/isCourseAvailable';
import { connect } from 'react-redux';
import { updateCourseStartTimestamp } from '../../actions/courses';
import sentryCaptureMessage from '../../helpers/errorHelpers/sentryCaptureMessage';

const ClassCarouselItem = ({
  course,
  classInfo,
  navigation,
  isComplete,
  buttonTitle,
  reduxCourse,
  reduxCourses,
  isCourseActivated,
  togglePushModal,
  reduxUpdateCourseStartTimestamp,
}) => {
  const [classAvailable, setClassAvailable] = useState(
    isClassAvailable(reduxCourse, classInfo?.classIndex)
  );

  useEffect(() => {
    setClassAvailable(isClassAvailable(reduxCourse, classInfo?.classIndex));
  }, [reduxCourse]);

  const checkPermissionsBeforeNavigating = async () => {
    try {
      global.Notifications.checkPermission((permissions) => {
        if (permissions.notificationCenter) {
          navigateClass();
        } else {
          togglePushModal();
        }
      });
    } catch (error) {
      sentryCaptureMessage('error checking push permissions');
      togglePushModal();
    }
  };

  const navigateClass = () => {
    if (isCourseAvailable(reduxCourses, course.id)) {
      if (!isCourseActivated) {
        // update redux with the courseStartTimestamp
        startCourse(course, reduxCourse, reduxUpdateCourseStartTimestamp);
        navigation.navigate('Class', {
          classInfo: {
            ...course?.classes[0],
            classIndex: 0,
          },
          isCourseActivated,
        });
      } else {
        navigation.navigate('Class', {
          classInfo,
          isCourseActivated,
        });
      }
    } else {
      Alert.alert(
        'Course Not Available',
        'Please complete the previous courses first.',
        [
          {
            text: 'OK',
          },
        ]
      );
    }
  };

  const dayTitle = classInfo?.title;
  const subheading = `${classInfo?.exercises?.length} exercises`;
  return (
    <View style={styles.parentContainer}>
      <TouchableWithoutFeedback onPress={checkPermissionsBeforeNavigating}>
        <LinearGradient
          colors={[DARK_OVERLAY, DARK_OVERLAY]}
          style={styles.container}
        >
          <View style={styles.headingContainer}>
            <View style={styles.headingTextContainer}>
              <Text style={[titleFont, whiteFont]}>{dayTitle}</Text>
              <Text style={[subheadFont, whiteFont]}>{subheading}</Text>
            </View>
            {isComplete && (
              <StandardImageButton
                image={'checkWhite'}
                withBorder
                borderColor={BRAND_WHITE}
              />
            )}
            {classAvailable && !isComplete && <StandardFlair title={'GO'} />}
          </View>

          {isCourseActivated && (
            <ClassCarouselItemChecklist
              items={getClassProgressionInformation(
                course,
                reduxCourse,
                classInfo?.classIndex
              )}
            />
          )}
          {!isCourseActivated && (
            <StandardButton onPress={navigateClass} title={buttonTitle} />
          )}
        </LinearGradient>
      </TouchableWithoutFeedback>
      {!classAvailable && (
        <View style={styles.itemBlocker}>
          <Text style={[titleEmphasizedFont, whiteFont, centerAlign]}>
            {'Scheduled For Later'}
          </Text>
        </View>
      )}
    </View>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    reduxUpdateCourseStartTimestamp: (obj) =>
      dispatch(updateCourseStartTimestamp(obj)),
  };
};

export default connect(null, mapDispatchToProps)(ClassCarouselItem);
