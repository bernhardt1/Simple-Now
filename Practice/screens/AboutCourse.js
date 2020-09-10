import React from 'react';
import {Text, ScrollView, View} from 'react-native';
import styles from './screenStyles/AboutStyles';
import {bodyFont} from '../styles/fonts';
import {scrollViewBottomMargin} from '../styles/spacings';

const AboutCourse = ({navigation, route}) => {
  console.log('route', route);
  const content = route?.params?.courseInfo?.courseInformation;
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={[bodyFont]}>{content}</Text>

        <View style={scrollViewBottomMargin} />
      </ScrollView>
    </View>
  );
};
export default AboutCourse;
