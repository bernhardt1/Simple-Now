import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { StackActions } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux';

import styles from './styles';
import { centerAlign, titleFont, whiteFont } from '../../../styles/fonts';
import SecondaryButton from '../../../components/SecondaryButton/SecondaryButton';
import setLocalImage from '../../../helpers/setLocalImage';
import { HeaderSpacer } from '../../../components/HeaderSpacer';
import { HeaderDefaultBack } from '../../../components/HeaderDefaultBack';
import { HeaderTitleBlock } from '../../../components/HeaderTitleBlock';
import {
  BACKGROUND_GRADIENT_1,
  BACKGROUND_GRADIENT_2,
  VERY_DARK_OVERLAY,
} from '../../../styles/colors';

const Instruction = ({
  background,
  exercise,
  nextExercise,
  classIndex,
  exerciseIndex,
  navigation,
  markAsComplete,
}) => {
  const navigateNext = () => {
    markAsComplete();

    navigation.dispatch(
      StackActions.replace('Exercise', {
        exercise: nextExercise,
        classIndex,
        exerciseIndex: exerciseIndex + 1,
      })
    );
  };

  const navigateBack = () => {
    navigation.goBack();
  };

  return (
    <LinearGradient
      style={styles.container}
      colors={[BACKGROUND_GRADIENT_1, BACKGROUND_GRADIENT_2]}
      useAngle={true}
      angle={150}
      angleCenter={{ x: 0.5, y: 0.5 }}
    >
      <LinearGradient
        colors={['transparent', 'transparent', VERY_DARK_OVERLAY]}
        style={styles.containerDarken}
      >
        <HeaderSpacer />
        <HeaderDefaultBack onPressBack={navigateBack} />
        <HeaderTitleBlock
          title={exercise.title}
          subtitle={exercise.subheading}
        />

        <View style={styles.scrollView}>
          <Text style={[titleFont, whiteFont, centerAlign]}>
            {exercise?.instructions}
          </Text>
        </View>

        <SecondaryButton title={'start'} onPress={navigateNext} />
      </LinearGradient>
    </LinearGradient>
  );
};

const mapStateToProps = (state) => {
  return {
    background: state?.settings?.background || 'background1',
  };
};

export default connect(mapStateToProps)(Instruction);
