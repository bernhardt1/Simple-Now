import React from 'react';
import { Text, ScrollView, View } from 'react-native';
import styles from './screenStyles/AboutExerciseStyles';
import { RECOMMENDED_TIME, HOW } from '../constants/dict';
import { bodyFont, bodyFontTitle, whiteFont } from '../styles/fonts';
import { scrollViewBottomMargin } from '../styles/spacings';
import getAboutExerciseCopy from '../helpers/getAboutExerciseCopy';
import { InvisibleSeparator } from '../components/InvisibleSeparator';
import { HeaderSpacer } from '../components/HeaderSpacer';
import { HeaderDefaultBack } from '../components/HeaderDefaultBack';
import { HeaderTitleBlock } from '../components/HeaderTitleBlock';

const AboutExercise = ({ route, navigation }) => {
  const { exercise } = route.params;
  const copy = getAboutExerciseCopy(exercise);

  const navigateBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <HeaderSpacer />
      <HeaderDefaultBack onPressBack={navigateBack} />
      <HeaderTitleBlock title={`${exercise?.exerciseType} Exercise`} />
      <ScrollView style={styles.scrollView}>
        {exercise?.recommendedTime && (
          <Text style={[bodyFontTitle, whiteFont]}>{RECOMMENDED_TIME}</Text>
        )}
        {exercise?.recommendedTime && (
          <Text style={[bodyFont, whiteFont]}>{`${
            exercise.recommendedTime / 1000
          } seconds`}</Text>
        )}
        <InvisibleSeparator />

        <Text style={[bodyFontTitle, whiteFont]}>{HOW}</Text>
        <Text style={[bodyFont, whiteFont]}>{copy}</Text>
        <View style={scrollViewBottomMargin} />
      </ScrollView>
    </View>
  );
};
export default AboutExercise;
