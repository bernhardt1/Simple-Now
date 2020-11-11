import React from 'react';
import { Text, ScrollView, View } from 'react-native';
import styles from './screenStyles/AboutStyles';
import {
  STRING_ABOUT_SIMPLENOW_1,
  STRING_ABOUT_SIMPLENOW_2,
  STRING_CONTACT_INFO_TITLE,
  STRING_CONTACT_INFO_EMAIL,
} from '../constants/dict';
import { bodyFont, bodyFontTitle } from '../styles/fonts';
import { scrollViewBottomMargin } from '../styles/spacings';
import { InvisibleSeparator } from '../components/InvisibleSeparator';

const About = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={bodyFontTitle}>{STRING_ABOUT_SIMPLENOW_1}</Text>
        <Text style={[bodyFont]}>{STRING_ABOUT_SIMPLENOW_2}</Text>
        <InvisibleSeparator />
        <InvisibleSeparator />
        <Text style={bodyFontTitle}>{STRING_CONTACT_INFO_TITLE}</Text>
        <Text style={bodyFont}>{STRING_CONTACT_INFO_EMAIL}</Text>
        <View style={scrollViewBottomMargin} />
      </ScrollView>
    </View>
  );
};
export default About;
