import React from 'react';
import {Text, ScrollView, View, Alert} from 'react-native';
import {connect} from 'react-redux';

import styles from './screenStyles/AboutStyles';
import {bodyFont} from '../styles/fonts';
import {scrollViewBottomMargin} from '../styles/spacings';
import {InvisibleSeparator} from '../components/InvisibleSeparator';
import {StandardButton} from '../components/StandardButton';
import {resetAwarenessBeginner} from '../actions/awarenessBeginner';

const AboutCourse = ({navigation, route, reduxResetAwarenessBeginner}) => {
  const {courseInfo} = route.params;
  const content = courseInfo?.courseInformation;

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={[bodyFont]}>{content}</Text>

        <InvisibleSeparator />
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
                    reduxResetAwarenessBeginner();
                    global.Notifications.cancelAll();
                  },
                },
              ],
            );
          }}
        />
        {/* <StandardButton
          title={'Print Notifications'}
          onPress={() => {
            global.Notifications.getScheduledLocalNotifications((notifs) =>
              console.log('notifications', notifs),
            );
          }}
        />
        <StandardButton
          title={'Cancel Notifications'}
          onPress={() => {
            global.Notifications.cancelAll();
          }}
        /> */}
        <View style={scrollViewBottomMargin} />
      </ScrollView>
    </View>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    reduxResetAwarenessBeginner: () => dispatch(resetAwarenessBeginner()),
  };
};

export default connect(null, mapDispatchToProps)(AboutCourse);