import React from 'react';
import { Text, ScrollView, View, Alert, ImageBackground } from 'react-native';
import { connect } from 'react-redux';

import styles from './screenStyles/AboutStyles';
import { bodyFont, whiteFont } from '../styles/fonts';
import { scrollViewBottomMargin } from '../styles/spacings';
import { InvisibleSeparator } from '../components/InvisibleSeparator';
import { StandardButton } from '../components/StandardButton';
import { resetCourse } from '../actions/courses';
import setLocalImage from '../helpers/setLocalImage';
import { HeaderSpacer } from '../components/HeaderSpacer';
import { HeaderDefaultBack } from '../components/HeaderDefaultBack';

const AboutCourse = ({ navigation, route, reduxResetCourse, background }) => {
  // JUST PASS COURSE ID & GET INFO FROM THAT
  const { courseInfo } = route.params;
  const title = courseInfo?.courseTitle;
  const content = courseInfo?.courseInformation;
  const courseId = courseInfo?.courseId;

  const navigateBack = () => {
    navigation.goBack();
  };

  return (
    <ImageBackground
      style={styles.container}
      source={setLocalImage(background)}
    >
      <HeaderSpacer />
      <HeaderDefaultBack onPressBack={navigateBack} title={title} />
      <View style={styles.scrollViewContainer}>
        <ScrollView style={styles.scrollView}>
          <Text style={[bodyFont, whiteFont]}>{content}</Text>

          <InvisibleSeparator />

          <View style={scrollViewBottomMargin} />
        </ScrollView>
        <StandardButton
          title={'Send C0E0 notification'}
          onPress={() => {
            global.Notifications.scheduleNotif(
              '123456789',
              'steel_bell.mp3',
              1,
              'test notification',
              'this is a test',
              '103/20/7'
            );
          }}
          withBorder
        />
        <StandardButton
          title={'Print Notifications'}
          onPress={() => {
            global.Notifications.getScheduledLocalNotifications((notifs) =>
              console.log('notifications', notifs)
            );
          }}
          withBorder
        />
        <StandardButton
          title={'Cancel Notifications'}
          onPress={() => {
            global.Notifications.cancelAll();
          }}
          withBorder
        />
        <StandardButton
          title={'Cancel Course'}
          onPress={() => {
            Alert.alert(
              'Are you sure you want to cancel this course?',
              'This will erase your progress and cancel all reminders.',
              [
                {
                  text: 'Go Back',
                },
                {
                  text: 'Yes',
                  onPress: () => {
                    reduxResetCourse(courseId);
                    global.Notifications.cancelAll();
                  },
                },
              ]
            );
          }}
          withBorder
        />
      </View>
    </ImageBackground>
  );
};

const mapStateToProps = (state) => {
  return {
    background: state?.settings?.background || 'background1',
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    reduxResetCourse: (courseId) => dispatch(resetCourse(courseId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AboutCourse);