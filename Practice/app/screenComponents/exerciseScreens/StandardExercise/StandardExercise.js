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

const BEGIN = 'BEGIN';
const BREATH_IN = 'BREATH_IN';
const HOLD = 'HOLD';
const BREATH_OUT = 'BREATH_OUT';
const WARMED_UP = 'WARMED_UP';
const PREPARING = 'PREPARING';
const COUNTDOWN = 'COUNTDOWN';
const START_EXERCISE = 'START_EXERCISE';
const COUNTING_DOWN = 'COUNTING_DOWN';
const COMPLETED = 'COMPLETED';
const EBS = EXERCISE_SPEED_MULTIPLIER * 1;

const StandardExercise = ({ navigation }) => {
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
  this.isPaused = false;

  const [simpleInstruction, setSimpleInstruction] = useState('ready');
  const [currentStep, setCurrentStep] = useState('');

  const [simpleContainerAnimation] = useState(new Animated.Value(0));
  const [textContainerAnimation] = useState(new Animated.Value(0));
  const [simpleScaleAnimation] = useState(new Animated.Value(0));
  const [instructionOpacityAnimation] = useState(new Animated.Value(1));
  const [innerRingOpacityAnimation] = useState(new Animated.Value(0));
  const [outerRingOpacityAnimation] = useState(new Animated.Value(0));
  const [outerRingPulseAnimation] = useState(new Animated.Value(0));
  const [globalOpacityAnimation] = useState(new Animated.Value(1));

  useEffect(() => {
    switch (currentStep) {
      case BEGIN:
        animateInstructionOpacity(0, EBS * 500, 'breath in');
        this.timeout = setTimeout(() => {
          animateSimpleContainer(1, BREATH_IN);
        }, EBS * 600);
        break;
      case BREATH_IN:
        this.timeout = setTimeout(() => {
          animateInstructionOpacity(1);
          animateSimpleScale(1, HOLD);
          animateOuterRingOpacity(1, EBS * 2000);
        }, EBS * 200);
        break;
      case HOLD:
        animateInstructionOpacity(0, EBS * 20, 'hold');
        this.timeout = setTimeout(() => {
          animateInstructionOpacity(1, EBS * 20);
          animateOuterRingOpacity(0, EBS * 1500, BREATH_OUT);
        }, EBS * 80);
        break;
      case BREATH_OUT:
        animateInstructionOpacity(0, EBS * 20, 'breath out');
        this.timeout = setTimeout(() => {
          animateInstructionOpacity(1, EBS * 20);
          animateSimpleScale(0, WARMED_UP);
          animateInnerRingOpacity(1);
        }, EBS * 80);
        break;
      case WARMED_UP:
        animateInstructionOpacity(0, EBS * 500, 'begin');
        this.timeout = setTimeout(() => {
          animateInnerRingOpacity(0);
          animateSimpleContainer(0, PREPARING);
        }, EBS * 600);
        break;
      case PREPARING:
        this.timeout = setTimeout(() => {
          animateTextContainer(1, COUNTDOWN);
        }, EBS * 200);
        break;
      case COUNTDOWN:
        this.timeout = setTimeout(() => {
          animateInnerRingPulse(1, START_EXERCISE, 2);
        }, EBS * 200);
        break;
      case START_EXERCISE:
        animateInstructionOpacity(0, EBS * 20, 25);
        this.timeout = setTimeout(() => {
          animateInstructionOpacity(1, EBS * 600);
          this.timeout2 = setTimeout(() => {
            steelBell.play();
            setCurrentStep(COUNTING_DOWN);
          }, EBS * 600);
        }, EBS * 500);
        break;
      case COUNTING_DOWN:
        if (this.isPaused) return;

        animateGlobalOpacity0(EBS * 6000, EBS * 4000);
        this.timeout = setTimeout(() => {
          animateCountdown(simpleInstruction, COMPLETED);
        }, EBS * 1500);
        break;
      case COMPLETED:
        animateGlobalOpacity1(0, EBS * 1000, false);
        animateInstructionOpacity(0, EBS * 100, 'completed');
        this.timeout = setTimeout(() => {
          animateInstructionOpacity(1, EBS * 600);
          animateTextContainer(0);
        }, EBS * 200);
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
  const animateSimpleContainer = (value, nextStep) => {
    // Animated.timing(simpleContainerAnimation, {
    //   toValue: value,
    //   duration: EBS * 1500,
    //   easing: Easing.inOut(Easing.cubic),
    //   useNativeDriver: false, // must be false if we want to use the animated value anywhere else
    // }).start(({ finished }) => {
    //   if (finished && nextStep) {
    setCurrentStep(nextStep);
    //   }
    // });
  };

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
      duration: EBS * 3500,
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
  const animateInstructionOpacity = (value, duration, nextInstruction) => {
    Animated.timing(instructionOpacityAnimation, {
      toValue: value,
      duration,
      easing: Easing.linear,
      useNativeDriver: true, // must be false if we want to use the animated value anywhere else
    }).start(({ finished }) => {
      if (finished && nextInstruction) {
        setSimpleInstruction(nextInstruction);
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
  const animateInnerRingOpacity = (value, nextStep) => {
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
    Animated.timing(outerRingPulseAnimation, {
      toValue: value,
      duration: EBS * 2500,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: true, // must be false if we want to use the animated value anywhere else
    }).start(({ finished }) => {
      if (finished) {
        cleanOuterRingPulse(0, nextStep, count);
      }
    });
  };

  // clean up pulse
  const cleanOuterRingPulse = (value, nextStep, count) => {
    Animated.timing(outerRingPulseAnimation, {
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
    if (this.isPaused) return;

    setSimpleInstruction(recommendedTime - 1);
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
        if (this.isPaused) return;

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
    console.log('this.isPaused', this.isPaused);
    if (currentStep === COUNTING_DOWN) {
      // pause too
      if (this.isPaused) {
        this.isPaused = false;
        animateGlobalOpacity0(EBS * 6000, EBS * 4000);
        this.timeout = setTimeout(() => {
          animateCountdown(simpleInstruction, COMPLETED);
        }, EBS * 1500);
      } else {
        animateGlobalOpacity1(0, EBS * 1000, true);
        this.isPaused = true;
      }
    } else {
      if (!currentStep) setCurrentStep(BEGIN);
    }
  };

  return (
    <ImageBackground
      style={styles.container}
      source={setLocalImage('background1')}
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
            onPress={navigation.goBack}
          />
        </View>

        <TouchableWithoutFeedback
          onPress={() => animateGlobalOpacity1(0, EBS * 1000, true)}
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
              <Text style={[bodyFontTitle, whiteFont, centerAlign]}>
                Close your eyes and notice the natural rhythm of your breath.
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
                        scaleX: outerRingPulseAnimation.interpolate({
                          inputRange: [0, 1],
                          outputRange: [1, 2],
                        }),
                      },
                      {
                        scaleY: outerRingPulseAnimation.interpolate({
                          inputRange: [0, 1],
                          outputRange: [1, 2],
                        }),
                      },
                    ],
                  },
                  {
                    opacity: outerRingPulseAnimation.interpolate({
                      inputRange: [0, 0.01, 0.5, 0.7, 1],
                      outputRange: [0, 0.5, 1, 0.1, 0],
                    }),
                  },
                ]}
                pointerEvents={'auto'}
              />
              <TouchableWithoutFeedback
                // onPress={() => animateInnerRingPulse(1, '', 3)}
                onPress={() => onPressSimpleButton()}
              >
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
                      bodyFontTitle,
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

export default StandardExercise;
