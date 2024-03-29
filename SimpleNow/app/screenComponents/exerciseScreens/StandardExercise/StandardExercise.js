import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  ImageBackground,
  Text,
  Animated,
  TouchableWithoutFeedback,
  Easing,
  TouchableOpacity,
} from 'react-native';
import Sound from 'react-native-sound';
import { connect } from 'react-redux';
import { useKeepAwake } from 'expo-keep-awake';
import Moment from 'moment';

import { StandardImageButton } from '../../../components/StandardImageButton';
import SecondaryButton from '../../../components/SecondaryButton/SecondaryButton';

import { updateIsSoundOn } from '../../../actions/settings';
import { updateContentComplete } from '../../../actions/content';
import { updateCurrentPracticeProgress } from '../../../actions/practice';

import setLocalImage from '../../../helpers/setLocalImage';
import getCategoryCardImage from '../../../helpers/styleHelpers/getCategoryCardImage';
import convertSecondsToMmSs from '../../../helpers/timeHelpers/convertSecondsToMmSs';
import convertMillisecondsToSeconds from '../../../helpers/timeHelpers/convertMillisecondsToSeconds';
import levelUp from '../../../helpers/analyticsHelpers/levelUp';

import { EXERCISE_SPEED_MULTIPLIER } from '../../../constants/magicNumbers';

import styles from './styles';
import { heightUnit } from '../../../styles/constants';
import {
  titleFont,
  centerAlign,
  titleEmphasizedFont,
  whiteFont,
  captionFont,
  boldSubheadFont,
} from '../../../styles/fonts';

const READY_STRING = 'ready';

const COUNTDOWN = 'COUNTDOWN';
const START_EXERCISE = 'START_EXERCISE';
const COUNTING_DOWN = 'COUNTING_DOWN';
const COMPLETED = 'COMPLETED';
const CLEAN_UP = 'CLEAN_UP';
const EBS = EXERCISE_SPEED_MULTIPLIER * 1;

const StandardExercise = ({
  navigation,
  exercise,
  practiceDuration,
  reduxUpdateIsSoundOn,
  reduxUpdateContentComplete,
  reduxUpdateCurrentPracticeProgress,
  background,
  isSoundOn,
}) => {
  // Enable playback in silence mode
  useKeepAwake();
  Sound.setCategory('Playback');

  // const copyAudioRef = useRef(true);
  const steelBellRef = useRef(true);
  const closingBellRef = useRef(true);

  const [categoryImage] = useState(
    getCategoryCardImage(exercise?.exerciseType)
  );
  const [simpleInstruction, setSimpleInstruction] = useState(READY_STRING);
  const [currentStep, setCurrentStep] = useState('');
  const [exerciseDuration, setExerciseDuration] = useState(
    convertMillisecondsToSeconds(practiceDuration * EBS) || 60 * EBS
  );

  const [textContainerAnimation] = useState(new Animated.Value(0));

  const [isAddTimeButtonsDisabled, setIsAddTimeButtonsDisabled] = useState(
    true
  );
  const [addTimeOpacityAnimation] = useState(new Animated.Value(0));
  const [instructionOpacityAnimation] = useState(new Animated.Value(1));
  const [innerRingPulseAnimation] = useState(new Animated.Value(0));
  const [globalOpacityAnimation] = useState(new Animated.Value(1));

  useEffect(() => {
    switch (currentStep) {
      case COUNTDOWN:
        animateInstructionOpacity(
          0,
          EBS * 100,
          convertSecondsToMmSs(exerciseDuration)
        );

        this.timeout = setTimeout(() => {
          animateInnerRingPulse(1, START_EXERCISE, 1);
        }, EBS * 200);

        break;
      case START_EXERCISE:
        animateInstructionOpacity(1, EBS * 600);
        if (this) {
          this.timeout = setTimeout(() => {
            steelBellRef?.current?.play();
            setCurrentStep(COUNTING_DOWN);
          }, EBS * 600);
        }
        break;
      case COUNTING_DOWN:
        if (this?.isPaused) return;
        animateGlobalOpacity0(EBS * 6000, EBS * 4000);
        this.startTimestamp = Moment();
        if (this) {
          this.timeout = setTimeout(() => {
            animateCountdown(COMPLETED);
          }, EBS * 100);
        }
        break;
      case COMPLETED:
        reduxUpdateContentComplete(exercise?.id);
        reduxUpdateCurrentPracticeProgress(`${exercise?.id}:`);

        animateInstructionOpacity(0, EBS * 100, 'completed!');
        if (this) {
          this.timeout = setTimeout(() => {
            animateInstructionOpacity(1, EBS * 600, 'completed!', CLEAN_UP);
          }, EBS * 200);
        }
        break;
      case CLEAN_UP:
        animateGlobalOpacity1(0, EBS * 600, false);
        if (this) {
          this.timeout = setTimeout(() => {
            animateTextContainer(0);
            animateTimeOpacity(1, 1000 * EBS);
          }, EBS * 800);
        }
        break;
      default:
        break;
    }
  }, [currentStep]);

  useEffect(() => {}, [isSoundOn]);

  // componentWillUnmount
  useEffect(() => {
    // copyAudioRef.current = new Sound(
    //   'attention_to_the_breathe.mp3',
    //   Sound.MAIN_BUNDLE,
    //   (error) => {
    //     if (error) {
    //       console.log('failed to load the sound', error);
    //       return;
    //     }

    //     copyAudioRef.current.play();

    //     if (!isSoundOn) {
    //       copyAudioRef.current.setVolume(0);
    //     }
    //   }
    // );

    steelBellRef.current = new Sound(
      'steel_bell_long.mp3',
      Sound.MAIN_BUNDLE,
      (error) => {
        if (error) {
          return;
        }

        if (!isSoundOn) {
          steelBellRef.current.setVolume(0);
        }
      }
    );

    closingBellRef.current = new Sound(
      'closing_bell.mp3',
      Sound.MAIN_BUNDLE,
      (error) => {
        if (error) {
          return;
        }

        if (!isSoundOn) {
          closingBellRef.current.setVolume(0);
        }
      }
    );

    return () => {
      // copyAudioRef.current?.release();
      steelBellRef.current?.release();
      closingBellRef.current?.release();
      if (this?.timeout) clearTimeout(this.timeout);
      if (this?.timeout2) clearTimeout(this.timeout2);
      if (this?.timeout3) clearTimeout(this.timeout3);
      if (this?.timeout4) clearTimeout(this.timeout4);
    };
  }, []);

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

  // pass 0 for disappearing
  // pass 1 for appearing
  const animateTimeOpacity = (value, duration, nextStep) => {
    if (value === 1) {
      setIsAddTimeButtonsDisabled(false);
    } else {
      setIsAddTimeButtonsDisabled(true);
    }

    Animated.timing(addTimeOpacityAnimation, {
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

  // pass 1 to pulse
  const animateInnerRingPulse = (value, nextStep, count) => {
    Animated.timing(innerRingPulseAnimation, {
      toValue: value,
      duration: EBS * 3000,
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

  const animateCountdown = (nextStep, lastInstruction) => {
    if (this?.isPaused) return;

    if (this) {
      this.timeout2 = setTimeout(() => {
        const remainingTime = getRemainingTime();
        const nextInstruction = convertSecondsToMmSs(remainingTime);

        if (lastInstruction !== nextInstruction) {
          setSimpleInstruction(nextInstruction);
        }

        if (remainingTime > 1) {
          animateCountdown(nextStep, nextInstruction);
        } else {
          closingBellRef?.current?.play();
          setCurrentStep(nextStep);

          levelUp(exercise?.id);
        }
      }, EBS * 50);
    }
  };

  const getRemainingTime = () => {
    const millisecondsPastSinceStartTimestamp = Moment().diff(
      this.startTimestamp
    );
    const inSeconds = Math.floor(millisecondsPastSinceStartTimestamp / 1000);

    const remainingTime = exerciseDuration - inSeconds;

    return remainingTime;
  };

  const animateGlobalOpacity0 = (timeout, duration) => {
    if (currentStep === COUNTING_DOWN) {
      if (this) {
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
    }
  };

  const animateGlobalOpacity1 = (timeout, duration, autoFade) => {
    if (this) {
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
    }
  };

  const onPressSimpleButton = () => {
    if (currentStep === COUNTING_DOWN) {
      // pause too
      if (this?.isPaused) {
        if (this) this.isPaused = false;
        animateGlobalOpacity0(EBS * 6000, EBS * 4000);
        if (this) {
          this.startTimestamp = Moment();
          animateCountdown(COMPLETED);
        }
      } else {
        animateGlobalOpacity1(0, EBS * 1000, true);
        setExerciseDuration(getRemainingTime());
        if (this) this.isPaused = true;
      }
    } else if (currentStep === CLEAN_UP) {
      navigation.goBack();
    } else {
      if (!currentStep) {
        if (this) this.isPaused = false;
        setCurrentStep(COUNTDOWN);
      }
    }
  };

  const navigateAboutExercise = () => {
    navigation.navigate('AboutExercise', {
      exercise,
    });
  };

  const toggleSound = () => {
    if (isSoundOn) {
      // copyAudioRef.current.setVolume(0);
      steelBellRef.current.setVolume(0);
      closingBellRef.current.setVolume(0);
      reduxUpdateIsSoundOn(false);
    } else {
      reduxUpdateIsSoundOn(true);
      // copyAudioRef.current.setVolume(1);
      steelBellRef.current.setVolume(1);
      closingBellRef.current.setVolume(1);
    }
  };

  const addTime = (val) => {
    setExerciseDuration(val * EBS);
    animateTimeOpacity(0, 1000 * EBS);
    setCurrentStep(COUNTDOWN);
  };

  return (
    <ImageBackground
      style={styles.container}
      source={setLocalImage(categoryImage)}
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
          <Text style={[titleFont, whiteFont]}>{`${exercise?.title}`}</Text>
          <StandardImageButton
            image={'questionMarkWhite'}
            onPress={navigateAboutExercise}
          />
        </View>
        <View style={styles.volumeHeader} pointerEvents={'auto'}>
          <StandardImageButton
            image={isSoundOn ? 'soundOnWhite' : 'soundOffWhite'}
            onPress={toggleSound}
          />
        </View>

        <TouchableWithoutFeedback
          onPress={() => {
            animateGlobalOpacity1(0, EBS * 1000, true);
            // onPressSimpleButton();
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
              <Text style={[boldSubheadFont, whiteFont, centerAlign]}>
                {exercise?.copy}
              </Text>
            </Animated.View>

            <Animated.View
              style={[
                styles.addTimeContainer,
                {
                  opacity: addTimeOpacityAnimation,
                },
              ]}
              pointerEvents={'auto'}
            >
              <SecondaryButton
                title={'+1 min'}
                onPress={() => addTime(60)}
                disabled={isAddTimeButtonsDisabled}
              />
              <SecondaryButton
                title={'+2 min'}
                onPress={() => addTime(120)}
                disabled={isAddTimeButtonsDisabled}
              />
              <SecondaryButton
                title={'+5 min'}
                onPress={() => addTime(300)}
                disabled={isAddTimeButtonsDisabled}
              />
            </Animated.View>

            <Animated.View
              style={styles.simpleContainer}
              pointerEvents={'auto'}
            >
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
              <TouchableOpacity
                onPress={() => onPressSimpleButton()}
                underlayColor="#ffffff"
                activeOpacity={0.7}
                style={styles.simpleCircle}
              >
                <View>
                  <Animated.Text
                    style={[
                      titleEmphasizedFont,
                      whiteFont,
                      centerAlign,
                      {
                        opacity: instructionOpacityAnimation,
                      },
                    ]}
                  >
                    {simpleInstruction}
                  </Animated.Text>
                  {currentStep === COUNTING_DOWN && (
                    <Animated.Text
                      style={[
                        captionFont,
                        whiteFont,
                        centerAlign,
                        {
                          opacity: instructionOpacityAnimation,
                        },
                      ]}
                    >
                      Tap to pause
                    </Animated.Text>
                  )}
                </View>
              </TouchableOpacity>
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
    isSoundOn: state?.settings?.isSoundOn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    reduxUpdateIsSoundOn: (val) => dispatch(updateIsSoundOn(val)),
    reduxUpdateContentComplete: (val) => dispatch(updateContentComplete(val)),
    reduxUpdateCurrentPracticeProgress: (val) =>
      dispatch(updateCurrentPracticeProgress(val)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StandardExercise);
