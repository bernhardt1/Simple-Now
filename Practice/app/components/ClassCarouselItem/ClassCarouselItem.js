import React, {useEffect, useState} from 'react';
import {Text, View, TouchableWithoutFeedback} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';
import {
  BRAND_WHITE,
  DARK_BLUE_LOGO,
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
import {StandardImageButton} from '../StandardImageButton';
import getClassProgressionInformation from '../../helpers/reduxHelpers/getClassProgressionInformation';
import {AWARENESS_BEGINNER_COURSE} from '../../assets/courses';
import ClassCarouselItemChecklist from '../ClassCarouselItemChecklist/ClassCarouselItemChecklist';
import StandardFlair from '../StandardFlair/StandardFlair';
import isClassAvailable from '../../helpers/reduxHelpers/isClassAvailable';

const ClassCarouselItem = ({
  courseTitle,
  classInfo,
  onPress,
  isComplete,
  buttonTitle,
  reduxAwarenessBeginner,
  isCourseActivated,
  focusedIndex,
}) => {
  const [classAvailable, setClassAvailable] = useState(
    isClassAvailable(reduxAwarenessBeginner, classInfo?.classIndex),
  );

  useEffect(() => {
    if (classInfo?.classIndex === focusedIndex) {
      setClassAvailable(
        isClassAvailable(reduxAwarenessBeginner, classInfo?.classIndex),
      );
    }
  }, [focusedIndex]);

  const dayTitle = classInfo?.title;
  const subheading = `${classInfo?.exercises?.length} exercises`;
  return (
    <View style={styles.parentContainer}>
      <TouchableWithoutFeedback onPress={onPress}>
        <LinearGradient
          colors={[DARK_BLUE_LOGO, LIGHT_BLUE_LOGO]}
          style={styles.container}>
          <View style={styles.headingContainer}>
            <View style={styles.headingTextContainer}>
              <Text style={[titleFont, whiteFont]}>{dayTitle}</Text>
              <Text style={[subheadFont, whiteFont]}>{subheading}</Text>
            </View>
            {isComplete && (
              <StandardImageButton
                image={'checkBlack'}
                backgroundColor={BRAND_WHITE}
              />
            )}
            {classAvailable && !isComplete && <StandardFlair title={'GO'} />}
          </View>

          {isCourseActivated && (
            <ClassCarouselItemChecklist
              items={getClassProgressionInformation(
                AWARENESS_BEGINNER_COURSE,
                reduxAwarenessBeginner,
                classInfo?.classIndex,
              )}
            />
          )}
          {!isCourseActivated && (
            <StandardButton onPress={onPress} title={buttonTitle} />
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

export default ClassCarouselItem;
