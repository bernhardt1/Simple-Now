import React, { useState, useEffect } from 'react';
import {
  View,
  ImageBackground,
  Text,
  Animated,
  TouchableWithoutFeedback,
  Easing,
} from 'react-native';
// Import the react-native-sound module
const Sound = require('react-native-sound');
import { connect } from 'react-redux';

import { StandardImageButton } from '../../../components/StandardImageButton';
import { EXERCISE_SPEED_MULTIPLIER } from '../../../constants/magicNumbers';
import sentryCaptureMessage from '../../../helpers/errorHelpers/sentryCaptureMessage';
import setLocalImage from '../../../helpers/setLocalImage';
import { heightUnit } from '../../../styles/constants';
import {
  bodyFontTitle,
  centerAlign,
  titleEmphasizedFont,
  whiteFont,
} from '../../../styles/fonts';

import styles from './styles';
import millisecondsToSeconds from '../../../helpers/timeHelpers/millisecondsToSeconds';
import { ABOUT_EXERCISE_SCREEN } from '../../../constants/constants';

const BEGIN_BREATHE_IN = 'BEGIN_BREATHE_IN';
const HOLD = 'HOLD';
const BREATHE_OUT = 'BREATHE_OUT';
const WARMED_UP = 'WARMED_UP';
const COUNTDOWN = 'COUNTDOWN';
const START_EXERCISE = 'START_EXERCISE';
const COUNTING_DOWN = 'COUNTING_DOWN';
const COMPLETED = 'COMPLETED';
const CLEAN_UP = 'CLEAN_UP';
const EBS = EXERCISE_SPEED_MULTIPLIER * 1;

const StandardExercise = ({
  navigation,
  exercise,
  markAsComplete,
  background,
}) => {
  // Enable playback in silence mode
  Sound.setCategory('Playback');
  // Load the sound files from the app bundle
  const steelBell = new Sound(
    'steel_bell_long.mp3',
    Sound.MAIN_BUNDLE,
    (error) => {
      if (error) {
        sentryCaptureMessage('caught steelBell loading error', error);
        return;
      }
    }
  );
  const chime = new Sound('chime.mp3', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
      sentryCaptureMessage('caught chime loading error', error);
      return;
    }
  });

  const [simpleInstruction, setSimpleInstruction] = useState('ready');
  const [currentStep, setCurrentStep] = useState('');

  const [simpleContainerAnimation] = useState(new Animated.Value(0));
  const [textContainerAnimation] = useState(new Animated.Value(0));
  const [simpleScaleAnimation] = useState(new Animated.Value(0));
  const [instructionOpacityAnimation] = useState(new Animated.Value(1));
  const [innerRingOpacityAnimation] = useState(new Animated.Value(0));
  const [outerRingOpacityAnimation] = useState(new Animated.Value(0));
  const [innerRingPulseAnimation] = useState(new Animated.Value(0));
  const [globalOpacityAnimation] = useState(new Animated.Value(1));

  useEffect(() => {
    switch (currentStep) {
      case BEGIN_BREATHE_IN:
        animateInstructionOpacity(0, EBS * 500, 'breathe in');
        this.timeout = setTimeout(() => {
          animateInstructionOpacity(1, EBS * 800);
          animateSimpleScale(1, HOLD);
          animateOuterRingOpacity(1, EBS * 2000);
        }, EBS * 1000);
        break;
      case HOLD:
        animateInstructionOpacity(0, EBS * 20, 'hold');
        this.timeout = setTimeout(() => {
          animateInstructionOpacity(1, EBS * 20);
          animateOuterRingOpacity(0, EBS * 1500, BREATHE_OUT);
        }, EBS * 80);
        break;
      case BREATHE_OUT:
        animateInstructionOpacity(0, EBS * 20, 'breathe out');
        this.timeout = setTimeout(() => {
          animateInstructionOpacity(1, EBS * 20);
          animateSimpleScale(0, WARMED_UP);
          animateInnerRingOpacity(1, EBS * 1000);
        }, EBS * 80);
        break;
      case WARMED_UP:
        animateInstructionOpacity(
          0,
          EBS * 10,
          millisecondsToSeconds(exercise?.recommendedTime) || 40
        );
        animateInnerRingOpacity(0, EBS * 10);
        animateTextContainer(1, COUNTDOWN);
        break;
      case COUNTDOWN:
        this.timeout = setTimeout(() => {
          animateInnerRingPulse(1, START_EXERCISE, 1);
        }, EBS * 200);
        break;
      case START_EXERCISE:
        animateInstructionOpacity(1, EBS * 600);
        this.timeout = setTimeout(() => {
          steelBell.play();
          setCurrentStep(COUNTING_DOWN);
        }, EBS * 600);
        break;
      case COUNTING_DOWN:
        if (this?.isPaused) return;
        animateGlobalOpacity0(EBS * 6000, EBS * 4000);
        this.timeout = setTimeout(() => {
          animateCountdown(simpleInstruction, COMPLETED);
        }, EBS * 1500);
        break;
      case COMPLETED:
        markAsComplete();
        animateInstructionOpacity(0, EBS * 100, 'completed');
        this.timeout = setTimeout(() => {
          animateInstructionOpacity(1, EBS * 600, 'completed', CLEAN_UP);
        }, EBS * 200);
        break;
      case CLEAN_UP:
        animateGlobalOpacity1(0, EBS * 600, false);
        this.timeout = setTimeout(() => {
          animateTextContainer(0);
        }, EBS * 800);
        break;
      default:
        break;
    }

    return () => {
      clearTimeout(this.timeout);
      clearTimeout(this.timeout2);
      clearTimeout(this.timeout3);
      clearTimeout(this.timeout4);
    };
  }, [currentStep]);

  // pass 0 for starting position
  // pass 1 for active position
  const animateTextContainer = (value, nextStep) => {
    Animated.timing(textContainerAnimation, {
      toValue: value,
      duration: EBS * 1000,
      easing: Easing.inOut(Easing.cubic),
      useNativeDriver: false, // must be false if we want to use the animated value anywhere else
    }).start(({ finished }) => {
      if (finished && nextStep) {
        setCurrentStep(nextStep);
      }
    });
  };

  // pass 0 for breathing out
  // pass 1 for breathing in
  const animateSimpleScale = (value, nextStep) => {
    Animated.timing(simpleScaleAnimation, {
      toValue: value,
      duration: EBS * 4000,
      easing: Easing.linear,
      useNativeDriver: true, // must be false if we want to use the animated value anywhere else
    }).start(({ finished }) => {
      if (finished && nextStep) {
        setCurrentStep(nextStep);
      }
    });
  };

  // pass 0 for disappearing
  // pass 1 for appearing
  const animateInstructionOpacity = (
    value,
    duration,
    nextInstruction,
    nextStep
  ) => {
    Animated.timing(instructionOpacityAnimation, {
      toValue: value,
      duration,
      easing: Easing.linear,
      useNativeDriver: true, // must be false if we want to use the animated value anywhere else
    }).start(({ finished }) => {
      if (finished && nextInstruction) {
        setSimpleInstruction(nextInstruction);
      }

      if (finished && nextStep) {
        setCurrentStep(nextStep);
      }
    });
  };

  // pass 0 for disappearing
  // pass 1 for appearing
  const animateOuterRingOpacity = (value, duration, nextStep) => {
    Animated.timing(outerRingOpacityAnimation, {
      toValue: value,
      duration,
      easing: Easing.in(Easing.cubic),
      useNativeDriver: true, // must be false if we want to use the animated value anywhere else
    }).start(({ finished }) => {
      if (finished && nextStep) {
        setCurrentStep(nextStep);
      }
    });
  };

  // pass 0 for disappearing
  // pass 1 for appearing
  const animateInnerRingOpacity = (value, duration, nextStep) => {
    Animated.timing(innerRingOpacityAnimation, {
      toValue: value,
      duration: EBS * 2000,
      easing: Easing.linear,
      useNativeDriver: true, // must be false if we want to use the animated value anywhere else
    }).start(({ finished }) => {
      if (finished && nextStep) {
        setCurrentStep(nextStep);
      }
    });
  };

  // pass 1 to pulse
  const animateInnerRingPulse = (value, nextStep, count) => {
    Animated.timing(innerRingPulseAnimation, {
      toValue: value,
      duration: EBS * 5000,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: true, // must be false if we want to use the animated value anywhere else
    }).start(({ finished }) => {
      if (finished) {
        cleanInnerRingPulse(0, nextStep, count);
      }
    });
  };

  // clean up pulse
  const cleanInnerRingPulse = (value, nextStep, count) => {
    Animated.timing(innerRingPulseAnimation, {
      toValue: value,
      duration: 0,
      useNativeDriver: true, // must be false if we want to use the animated value anywhere else
    }).start(({ finished }) => {
      if (finished) {
        if (count > 1) {
          animateInnerRingPulse(1, nextStep, count - 1);
        } else {
          if (nextStep) setCurrentStep(nextStep);
        }
      }
    });
  };

  // pass exercise recommendedTime
  const animateCountdown = (recommendedTime, nextStep) => {
    if (this?.isPaused) return;

    if (!isNaN(recommendedTime)) {
      setSimpleInstruction(recommendedTime - 1);
    } else {
      setSimpleInstruction(
        millisecondsToSeconds(exercise?.recommendedTime || 40)
      );
    }

    this.timeout2 = setTimeout(() => {
      if (recommendedTime > 1) {
        animateCountdown(recommendedTime - 1, nextStep);
      } else {
        chime.play();
        setCurrentStep(nextStep);
      }
    }, EBS * 1100);
  };

  const animateGlobalOpacity0 = (timeout, duration) => {
    if (currentStep === COUNTING_DOWN) {
      this.timeout3 = setTimeout(() => {
        if (this?.isPaused) return;

        Animated.timing(globalOpacityAnimation, {
          toValue: 0,
          duration: duration,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true, // must be false if we want to use value anywhere else
        }).start(({ finished }) => {
          if (currentStep === COMPLETED) {
            animateGlobalOpacity1(0, EBS * 1000, false);
          }
        });
      }, timeout);
    }
  };

  const animateGlobalOpacity1 = (timeout, duration, autoFade) => {
    this.timeout4 = setTimeout(() => {
      Animated.timing(globalOpacityAnimation, {
        toValue: 1,
        duration,
        useNativeDriver: true, // must be false if we want to use value anywhere else
      }).start(({ finished }) => {
        if (currentStep === COUNTING_DOWN) {
          animateGlobalOpacity0(EBS * 6000, EBS * 4000);
        }
      });
    }, timeout);
  };

  const onPressSimpleButton = () => {
    if (currentStep === COUNTING_DOWN) {
      // pause too
      if (this?.isPaused) {
        if (this) this.isPaused = false;
        animateGlobalOpacity0(EBS * 6000, EBS * 4000);
        this.timeout = setTimeout(() => {
          animateCountdown(simpleInstruction, COMPLETED);
        }, EBS * 1500);
      } else {
        animateGlobalOpacity1(0, EBS * 1000, true);
        if (this) this.isPaused = true;
      }
    } else if (currentStep === CLEAN_UP) {
      navigation.goBack();
    } else {
      if (!currentStep) {
        if (this) this.isPaused = false;
        setCurrentStep(BEGIN_BREATHE_IN);
      }
    }
  };

  const navigateAboutExercise = () => {
    navigation.navigate('AboutExercise', {
      exercise,
      screenType: ABOUT_EXERCISE_SCREEN,
    });
  };

  return (
    <ImageBackground
      style={styles.container}
      source={setLocalImage(background)}
      blurRadius={5}
    >
      <Animated.View
        pointerEvents={'auto'}
        style={[
          styles.containerDarken,
          {
            opacity: globalOpacityAnimation,
          },
        ]}
      >
        <View style={styles.headerSpacing} pointerEvents={'auto'} />
        <View style={styles.containerHeader} pointerEvents={'auto'}>
          <StandardImageButton
            image={'backWhite'}
            onPress={navigation.goBack}
          />
          <Text style={[titleEmphasizedFont, whiteFont]}>Breath Exercise</Text>
          <StandardImageButton
            image={'questionMarkWhite'}
            onPress={navigateAboutExercise}
          />
        </View>

        <TouchableWithoutFeedback
          onPress={() => {
            animateGlobalOpacity1(0, EBS * 1000, true);
          }}
        >
          <View style={styles.containerContent} pointerEvents={'auto'}>
            <Animated.View
              style={[
                styles.textContainer,
                {
                  transform: [
                    {
                      translateY: textContainerAnimation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, heightUnit * 20],
                      }),
                    },
                  ],
                },
              ]}
              pointerEvents={'auto'}
            >
              <Text style={[titleEmphasizedFont, whiteFont, centerAlign]}>
                {exercise?.copy}
              </Text>
            </Animated.View>
            <Animated.View
              style={[
                styles.simpleContainer,
                {
                  transform: [
                    {
                      translateY: simpleContainerAnimation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, -heightUnit * 20],
                      }),
                    },
                  ],
                },
              ]}
              pointerEvents={'auto'}
            >
              <Animated.View
                style={[
                  styles.simpleInnerRing,
                  {
                    opacity: innerRingOpacityAnimation,
                  },
                ]}
                pointerEvents={'auto'}
              />
              <Animated.View
                style={[
                  styles.simpleOuterRing,
                  {
                    opacity: outerRingOpacityAnimation,
                  },
                ]}
                pointerEvents={'auto'}
              />
              <Animated.View
                style={[
                  styles.simpleInnerRing,
                  {
                    transform: [
                      {
                        scaleX: innerRingPulseAnimation.interpolate({
                          inputRange: [0, 1],
                          outputRange: [1, 0],
                        }),
                      },
                      {
                        scaleY: innerRingPulseAnimation.interpolate({
                          inputRange: [0, 1],
                          outputRange: [1, 0],
                        }),
                      },
                    ],
                  },
                  {
                    opacity: innerRingPulseAnimation.interpolate({
                      inputRange: [0, 0.01, 0.5, 0.95, 1],
                      outputRange: [0, 0.5, 1, 0.5, 0],
                    }),
                  },
                ]}
                pointerEvents={'auto'}
              />
              <TouchableWithoutFeedback onPress={() => onPressSimpleButton()}>
                <Animated.View
                  style={[
                    styles.simpleCircle,
                    {
                      transform: [
                        {
                          scaleX: simpleScaleAnimation.interpolate({
                            inputRange: [0, 1],
                            outputRange: [1, 1.25],
                          }),
                        },
                        {
                          scaleY: simpleScaleAnimation.interpolate({
                            inputRange: [0, 1],
                            outputRange: [1, 1.25],
                          }),
                        },
                      ],
                    },
                  ]}
                >
                  <Animated.Text
                    style={[
                      titleEmphasizedFont,
                      whiteFont,
                      centerAlign,
                      {
                        transform: [
                          {
                            scaleX: simpleScaleAnimation.interpolate({
                              inputRange: [0, 1],
                              outputRange: [1, 1.25],
                            }),
                          },
                          {
                            scaleY: simpleScaleAnimation.interpolate({
                              inputRange: [0, 1],
                              outputRange: [1, 1.25],
                            }),
                          },
                        ],
                      },
                      {
                        opacity: instructionOpacityAnimation,
                      },
                    ]}
                  >
                    {simpleInstruction}
                  </Animated.Text>
                </Animated.View>
              </TouchableWithoutFeedback>
            </Animated.View>
          </View>
        </TouchableWithoutFeedback>
      </Animated.View>
    </ImageBackground>
  );
};
const mapStateToProps = (state) => {
  return {
    background: state?.settings?.background || 'background1',
  };
};

export default connect(mapStateToProps)(StandardExercise);
