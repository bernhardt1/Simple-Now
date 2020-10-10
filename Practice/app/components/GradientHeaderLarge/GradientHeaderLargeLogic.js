import React from 'react';

import ClassHeader from './ClassHeader';
import BasicHeader from './BasicHeader';
import {
  CLASS_SCREEN,
  ABOUT_SCREEN,
  ABOUT_CLASS_SCREEN,
  EXERCISE_SCREEN,
  ABOUT_EXERCISE_SCREEN,
} from '../../constants/constants';

const GradientHeaderLargeLogic = ({
  navigation,
  scene,
  headerStyle,
  leftButtonPress,
}) => {
  const { options } = scene?.descriptor;
  let title =
    options.headerTitle !== undefined
      ? options.headerTitle
      : options.title !== undefined
      ? options.title
      : scene.route.name;
  let subheading;

  if (scene?.route?.params?.screenType === CLASS_SCREEN) {
    title = `${scene?.route?.params?.courseInfo?.courseTitle} - ${scene?.route?.params?.classInfo?.title}`;
    subheading = `${scene?.route?.params?.classInfo?.exercises?.length} exercises`;

    return (
      <ClassHeader
        navigation={navigation}
        title={title}
        subheading={subheading}
        scene={scene}
        headerStyle={headerStyle}
        leftButtonPress={leftButtonPress}
      />
    );
  }

  if (scene?.route?.params?.screenType === ABOUT_SCREEN) {
    title = 'About Simple Now';
    subheading = 'Integrate mindfulness practices into daily life';
  }

  if (scene?.route?.params?.screenType === ABOUT_CLASS_SCREEN) {
    title = `${scene?.route?.params?.courseInfo?.courseTitle}`;
    subheading = 'Course information';
  }

  if (scene?.route?.params?.screenType === EXERCISE_SCREEN) {
    title = `${scene?.route?.params?.exercise?.title}`;
    subheading = scene?.route?.params?.exercise?.subheading
      ? scene?.route?.params?.exercise?.subheading
      : null;
  }

  if (scene?.route?.params?.screenType === ABOUT_EXERCISE_SCREEN) {
    title = `${scene?.route?.params?.exercise?.title}`;
    subheading = scene?.route?.params?.exercise?.copy
      ? scene?.route?.params?.exercise?.copy
      : null;
  }

  return (
    <BasicHeader
      navigation={navigation}
      title={title}
      subheading={subheading}
      scene={scene}
      headerStyle={headerStyle}
      leftButtonPress={leftButtonPress}
    />
  );
};

export default GradientHeaderLargeLogic;
