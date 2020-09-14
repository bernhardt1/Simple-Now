import React from 'react';
import {Text, ScrollView, View} from 'react-native';
import styles from './screenStyles/AboutExerciseStyles';
import {RECOMMENDED_TIME, HOW} from '../constants/dict';
import {bodyFont, bodyFontTitle} from '../styles/fonts';
import {scrollViewBottomMargin} from '../styles/spacings';
import getAboutExerciseCopy from '../helpers/getAboutExerciseCopy';
import {InvisibleSeparator} from '../components/InvisibleSeparator';

const AboutExercise = ({route}) => {
  const {exercise} = route.params;
  const copy = getAboutExerciseCopy(exercise);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {exercise?.recommendedTime && (
          <Text style={bodyFontTitle}>{RECOMMENDED_TIME}</Text>
        )}
        {exercise?.recommendedTime && (
          <Text style={[bodyFont]}>{`${
            exercise.recommendedTime / 1000
          } seconds`}</Text>
        )}
        <InvisibleSeparator />

        <Text style={bodyFontTitle}>{HOW}</Text>
        <Text style={bodyFont}>{copy}</Text>
        <View style={scrollViewBottomMargin} />
      </ScrollView>
    </View>
  );
};
export default AboutExercise;
