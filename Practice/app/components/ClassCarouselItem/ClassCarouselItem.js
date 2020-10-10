import React, { useEffect, useState } from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';
import {
  BRAND_WHITE,
  DARK_BLUE_LOGO,
  DARK_OVERLAY,
  LIGHT_BLUE_LOGO,
} from '../../styles/colors';
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
import { connect } from 'react-redux';
import { updateCourseStartTimestamp } from '../../actions/courses';

const ClassCarouselItem = ({
  course,
  classInfo,
  navigation,
  isComplete,
  buttonTitle,
  reduxCourse,
  isCourseActivated,
  focusedClassIndex,
  reduxUpdateCourseStartTimestamp,
}) => {
  const [classAvailable, setClassAvailable] = useState(
    isClassAvailable(reduxCourse, classInfo?.classIndex)
  );

  useEffect(() => {
    if (classInfo?.classIndex === focusedClassIndex) {
      setClassAvailable(isClassAvailable(reduxCourse, classInfo?.classIndex));
    }
  }, [focusedClassIndex]);

  const navigateClass = () => {
    navigation.navigate('Class', {
      course,
      classInfo,
      isCourseActivated,
    });
  };

  const onPressItem = () => {
    if (!isCourseActivated) {
      // update redux with the courseStartTimestamp
      startCourse(course, reduxCourse, reduxUpdateCourseStartTimestamp);
      navigateClass(
        {
          ...course?.classes[0],
          classIndex: 0,
        },
        isCourseActivated
      );
    } else {
      navigateClass(classInfo, isCourseActivated);
    }
  };

  const dayTitle = classInfo?.title;
  const subheading = `${classInfo?.exercises?.length} exercises`;
  return (
    <View style={styles.parentContainer}>
      <TouchableWithoutFeedback onPress={onPressItem}>
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
            <StandardButton onPress={onPressItem} title={buttonTitle} />
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
