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
import setLocalImage from '../../../helpers/setLocalImage';
import { heightUnit } from '../../../styles/constants';
import {
  bodyFontTitle,
  centerAlign,
  titleEmphasizedFont,
  whiteFont,
} from '../../../styles/fonts';

import styles from './styles';

// Enable playback in silence mode
Sound.setCategory('Playback');

// Load the sound file 'whoosh.mp3' from the app bundle
// See notes below about preloading sounds within initialization code below.
var steelBell = new Sound('steel_bell_long.mp3', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('failed to load the sound', error);
    return;
  }

  // loaded successfully
  console.log(
    'duration in seconds: ' +
      steelBell.getDuration() +
      'number of channels: ' +
      steelBell.getNumberOfChannels()
  );
});

var chime = new Sound('chime.mp3', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('failed to load the sound', error);
    return;
  }

  // loaded successfully
  console.log(
    'duration in seconds: ' +
      chime.getDuration() +
      'number of channels: ' +
      chime.getNumberOfChannels()
  );
});

const StandardExercise = ({ navigation }) => {
  const [simpleInstruction, setSimpleInstruction] = useState('ready');
  const [currentStep, setCurrentStep] = useState('');

  const [simpleContainerAnimation, setSimpleContainerAnimation] = useState(
    new Animated.Value(0)
  );
  const [textContainerAnimation, setTextContainerAnimation] = useState(
    new Animated.Value(0)
  );
  const [simpleScaleAnimation, setSimpleScaleAnimation] = useState(
    new Animated.Value(0)
  );
  const [instructionAnimation, setInstructionAnimation] = useState(
    new Animated.Value(1)
  );
  const [innerRingAnimation, setInnerRingAnimation] = useState(
    new Animated.Value(0)
  );
  const [outerRingAnimation, setOuterRingAnimation] = useState(
    new Animated.Value(0)
  );
  const [outerRingPulseAnimation, setOuterRingPulseAnimation] = useState(
    new Animated.Value(0)
  );

  useEffect(() => {
    switch (currentStep) {
      case 'begin':
        animateInstruction(0, 500, 'breath in');
        this.timeout = setTimeout(() => {
          animateSimpleContainer(1, 'breathIn');
        }, 600);
        break;
      case 'breathIn':
        this.timeout = setTimeout(() => {
          animateInstruction(1);
          animateSimpleScale(1, 'hold');
          animateOuterRing(1);
        }, 200);
        break;
      case 'hold':
        animateInstruction(0, 20, 'hold');
        this.timeout = setTimeout(() => {
          animateInstruction(1, 20);
          animateOuterRing(0, 'breathOut');
        }, 80);
        break;
      case 'breathOut':
        animateInstruction(0, 20, 'breath out');
        this.timeout = setTimeout(() => {
          animateInstruction(1, 20);
          animateSimpleScale(0, 'warmedUp');
          animateInnerRing(1);
        }, 80);
        break;
      case 'warmedUp':
        animateInstruction(0, 500, 'begin');
        this.timeout = setTimeout(() => {
          animateInnerRing(0);
          animateSimpleContainer(0, 'preparing');
        }, 600);
        break;
      case 'preparing':
        this.timeout = setTimeout(() => {
          animateTextContainer(1, 'countdown');
        }, 200);
        break;
      case 'countdown':
        this.timeout = setTimeout(() => {
          animateInnerRingPulse(1, 'startExercise', 2);
        }, 200);
        break;
      case 'startExercise':
        animateInstruction(0, 20, 25);
        this.timeout = setTimeout(() => {
          animateInstruction(1, 600);
          this.timeout2 = setTimeout(() => {
            steelBell.play();
            setCurrentStep('startCountingDown');
          }, 600);
        }, 500);
        break;
      case 'startCountingDown':
        this.timeout = setTimeout(() => {
          animateCountdown(25, 'completed');
          setCurrentStep('startCountingDown');
        }, 200);
        break;
      case 'completed':
        animateInstruction(0, 100, 'completed');
        this.timeout = setTimeout(() => {
          animateInstruction(1, 600);
          chime.play();
          animateTextContainer(0);
        }, 200);
        break;
      default:
        break;
    }

    return () => {
      clearTimeout(this.timeout);
      clearTimeout(this.timeout2);
    };
  }, [currentStep]);

  // pass 0 for starting position
  // pass 1 for active position
  const animateSimpleContainer = (value, nextStep) => {
    Animated.timing(simpleContainerAnimation, {
      toValue: value,
      duration: 1500,
      easing: Easing.inOut(Easing.cubic),
      useNativeDriver: false, // must be false if we want to use the animated value anywhere else
    }).start(({ finished }) => {
      if (finished && nextStep) {
        setCurrentStep(nextStep);
      }
    });
  };

  // pass 0 for starting position
  // pass 1 for active position
  const animateTextContainer = (value, nextStep) => {
    Animated.timing(textContainerAnimation, {
      toValue: value,
      duration: 1000,
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
      duration: 3500,
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
  const animateInstruction = (value, duration, nextInstruction) => {
    Animated.timing(instructionAnimation, {
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
  const animateOuterRing = (value, nextStep) => {
    Animated.timing(outerRingAnimation, {
      toValue: value,
      duration: 2000,
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
  const animateInnerRing = (value, nextStep) => {
    Animated.timing(innerRingAnimation, {
      toValue: value,
      duration: 2000,
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
      duration: 2500,
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
    setSimpleInstruction(recommendedTime - 1);
    this.timeout2 = setTimeout(() => {
      if (recommendedTime > 1) {
        animateCountdown(recommendedTime - 1, nextStep);
      } else {
        setCurrentStep(nextStep);
      }
    }, 1100);
  };

  const onPressSimpleButton = () => {
    setCurrentStep('begin');
  };

  return (
    <ImageBackground
      style={styles.container}
      source={setLocalImage('background1')}
      blurRadius={5}
    >
      <View style={styles.containerDarken}>
        <View style={styles.headerSpacing} />
        <View style={styles.containerHeader}>
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
        <View style={styles.containerContent}>
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
          >
            <Animated.View
              style={[
                styles.simpleInnerRing,
                {
                  opacity: innerRingAnimation,
                },
              ]}
            />
            <Animated.View
              style={[
                styles.simpleOuterRing,
                {
                  opacity: outerRingAnimation,
                },
              ]}
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
                      opacity: instructionAnimation,
                    },
                  ]}
                >
                  {simpleInstruction}
                </Animated.Text>
              </Animated.View>
            </TouchableWithoutFeedback>
          </Animated.View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default StandardExercise;
