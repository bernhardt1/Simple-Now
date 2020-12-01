import React from 'react';
import { Text, ScrollView, View } from 'react-native';

import getAboutExerciseCopy from '../../helpers/getAboutExerciseCopy';

import { InvisibleSeparator } from '../../components/InvisibleSeparator';
import { HeaderSpacer } from '../../components/HeaderSpacer';
import { HeaderDefaultBack } from '../../components/HeaderDefaultBack';
import { HeaderTitleBlock } from '../../components/HeaderTitleBlock';

import { RECOMMENDED_TIME, HOW } from '../../constants/dict';
import {
  bodyFont,
  bodyFontTitle,
  boldSubheadFont,
  subheadFont,
  titleFont,
  whiteFont,
} from '../../styles/fonts';
import { scrollViewBottomMargin } from '../../styles/spacings';

import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {
  BACKGROUND_GRADIENT_1,
  BACKGROUND_GRADIENT_2,
} from '../../styles/colors';

const AboutExerciseScreen = ({ route, navigation }) => {
  const { exercise } = route.params;
  console.log('exercise', exercise);
  const copy = getAboutExerciseCopy(exercise);

  const navigateBack = () => {
    navigation.goBack();
  };

  return (
    <LinearGradient
      style={styles.container}
      colors={[BACKGROUND_GRADIENT_1, BACKGROUND_GRADIENT_2]}
    >
      <HeaderSpacer />
      <HeaderDefaultBack
        onPressBack={navigateBack}
        title={`${exercise?.exerciseType} Exercise`}
      />
      <ScrollView style={styles.scrollView}>
        {exercise?.recommendedTime && (
          <Text style={[titleFont, whiteFont]}>{RECOMMENDED_TIME}</Text>
        )}
        {exercise?.recommendedTime && (
          <Text style={[bodyFont, whiteFont]}>{`At least ${
            exercise.recommendedTime / 1000
          } seconds.`}</Text>
        )}
        <InvisibleSeparator />

        <Text style={[titleFont, whiteFont]}>{HOW}</Text>
        <Text style={[bodyFont, whiteFont]}>{copy}</Text>
        <View style={scrollViewBottomMargin} />
      </ScrollView>
    </LinearGradient>
  );
};
export default AboutExerciseScreen;
