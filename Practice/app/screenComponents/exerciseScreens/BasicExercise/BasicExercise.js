import React, {useState, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Animated,
  Easing,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';
import {animatedBottomButtonStyles} from '../../../styles/standardComponents';
import {StandardImageButton} from '../../../components/StandardImageButton';
import {ABOUT_EXERCISE_SCREEN} from '../../../constants/constants';
import {
  bodyFont,
  bottomButtonFont,
  centerAlign,
  titleFont,
  whiteFont,
} from '../../../styles/fonts';
import millisecondsToSeconds from '../../../helpers/millisecondsToSeconds';
import {DARK_BLUE_LOGO, LIGHT_BLUE_LOGO} from '../../../styles/colors';
import setLocalImage from '../../../helpers/setLocalImage';

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

const BasicExercise = ({exercise, navigation, markAsComplete}) => {
  const [exerciseProgress, setExerciseProgress] = useState(
    new Animated.Value(0),
  );
  const [animationActive, setAnimationActive] = useState(true);
  const [remainingDuration, setRemainingDuration] = useState(
    exercise?.recommendedTime,
  );
  const [buttonImage, setButtonImage] = useState('pauseWhite');
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    startAnimation();
  }, []);

  const startAnimation = () => {
    Animated.timing(exerciseProgress, {
      toValue: 1,
      duration: parseInt(remainingDuration, 10),
      easing: Easing.linear,
      useNativeDriver: false, // must be false if we want to use the exerciseProgress variable anywhere else
    }).start(({finished}) => {
      if (finished && markAsComplete) {
        markAsComplete();
        setIsFinished(true);
      }
    });
  };

  const pauseAnimation = () => {
    if (animationActive) {
      toggleAnimation();
    }
  };

  const toggleAnimation = () => {
    if (animationActive) {
      setAnimationActive(false);
      setButtonImage('playWhite');
      setRemainingDuration(
        exercise?.recommendedTime * (1 - exerciseProgress._value),
      );
      setExerciseProgress(exerciseProgress);
      exerciseProgress.stopAnimation();
    } else {
      setAnimationActive(true);
      setButtonImage('pauseWhite');
      startAnimation();
    }
  };

  const navigateAboutExercise = () => {
    pauseAnimation();
    navigation.navigate('AboutExercise', {
      exercise,
      screenType: ABOUT_EXERCISE_SCREEN,
    });
  };

  const navigateBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={styles.topContainer}>
          <StandardImageButton
            image={'questionMarkBlack'}
            onPress={navigateAboutExercise}
            withBorder
          />
        </View>
        <View style={styles.contentContainer}>
          <Text style={[bodyFont, centerAlign]}>{exercise?.copy}</Text>
        </View>
        <View style={styles.bottomContainer}>
          <Text style={titleFont}>{`${millisecondsToSeconds(
            exercise?.recommendedTime,
          )} seconds`}</Text>
        </View>
      </View>
      <TouchableWithoutFeedback
        onPress={() => {
          if (!isFinished) {
            toggleAnimation();
          } else {
            navigateBack();
          }
        }}>
        <View style={animatedBottomButtonStyles.container}>
          <AnimatedLinearGradient
            colors={[DARK_BLUE_LOGO, LIGHT_BLUE_LOGO]}
            style={[
              animatedBottomButtonStyles.gradientContainer,
              {
                transform: [{scaleX: exerciseProgress}],
              },
            ]}
          />
          {!isFinished && (
            <Image
              source={setLocalImage(buttonImage)}
              style={animatedBottomButtonStyles.image}
            />
          )}
          {isFinished && (
            <Text style={[bottomButtonFont, whiteFont]}>{'Complete'}</Text>
          )}
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default BasicExercise;
