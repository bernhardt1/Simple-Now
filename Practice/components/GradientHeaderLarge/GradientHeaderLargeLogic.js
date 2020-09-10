import React from 'react';

import ClassHeader from './ClassHeader';
import BasicHeader from './BasicHeader';
import {
  CLASS_SCREEN,
  ABOUT_SCREEN,
  ABOUT_CLASS,
} from '../../constants/constants';

const GradientHeaderLargeLogic = ({
  navigation,
  scene,
  headerStyle,
  leftButtonPress,
}) => {
  const {options} = scene?.descriptor;
  let title =
    options.headerTitle !== undefined
      ? options.headerTitle
      : options.title !== undefined
      ? options.title
      : scene.route.name;
  let subheading;

  if (scene?.route?.params?.screenType === CLASS_SCREEN) {
    title = `${scene?.route?.params?.courseTitle} - ${scene?.route?.params?.classInfo?.title}`;
    subheading = `${scene?.route?.params?.classInfo?.reminders?.length} reminders`;

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
    title = 'About Practice';
    subheading = 'Integrate mindfulness practices into daily life';
  }

  if (scene?.route?.params?.screenType === ABOUT_CLASS) {
    title = `${scene?.route?.params?.courseInfo?.courseTitle}`;
    subheading = 'Course information';
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
