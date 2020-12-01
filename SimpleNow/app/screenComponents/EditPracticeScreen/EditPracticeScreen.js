import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';

import {
  boldSubheadFont,
  footnoteFont,
  largeTitleFont,
  orangeFont,
  subheadFont,
  titleEmphasizedFont,
  whiteFont,
} from '../../styles/fonts';

import styles from './styles';
import { screenWidth } from '../../styles/constants';
import { HeaderSpacer } from '../../components/HeaderSpacer';
import { HeaderDefaultBack } from '../../components/HeaderDefaultBack';
import LinearGradient from 'react-native-linear-gradient';
import {
  BACKGROUND_GRADIENT_1,
  BACKGROUND_GRADIENT_2,
  DARK_OVERLAY,
} from '../../styles/colors';
import convertMomentNumberAndDurationToTime from '../../helpers/timeHelpers/convertMomentNumberAndDurationToTime';
import convertMomentNumberAndDurationToTimeUnit from '../../helpers/timeHelpers/convertMomentNumberAndDurationToTimeUnit';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
  updateNumberDailyPracticeSessions,
  updatePracticeDuration,
} from '../../actions/practice';
import convertMomentNumberToSeconds from '../../helpers/timeHelpers/convertMomentNumberToSeconds';

const DAILY_MOMENTS_OPTIONS = [1, 2, 3, 4, 5];
const getIndexOfDailyMoment = (number) => {
  return number - 1;
};
const MOMENTS_DURATION_OPTIONS = [
  '30s', // 0
  '45s',
  '60s',
  '90s',
  '2m',
  '3m', // 5
  '4m',
  '5m',
];
const getIndexOfMomentDuration = (seconds) => {
  switch (seconds) {
    case 30:
      return 0;
    case 45:
      return 1;
    case 60:
      return 2;
    case 90:
      return 3;
    case 120:
      return 4;
    case 180:
      return 5;
    case 240:
      return 6;
    case 300:
      return 7;

    default:
      return 0;
  }
};

const momentItemFullWidth =
  styles?.momentItemContainer?.width + styles?.momentItemContainer?.marginRight;
const durationItemFullWidth =
  styles?.durationItemContainer?.width +
  styles?.durationItemContainer?.marginRight;

const EditPracticeScreen = ({
  navigation,
  background,
  reduxPracticeDuration,
  reduxNumberDailyPracticeSessions,
  reduxUpdateNumberDailyPracticeSessions,
  reduxUpdatePracticeDuration,
}) => {
  const [dailyMomentsIndex, setDailyMomentsIndex] = useState(
    getIndexOfDailyMoment(reduxNumberDailyPracticeSessions)
  );
  const [momentDurationIndex, setMomentDurationIndex] = useState(
    getIndexOfMomentDuration(reduxPracticeDuration)
  );
  const [isNumberMomentsChanged, setIsNumberMomentsChanged] = useState(false);
  const [isMomentDurationChanged, setIsMomentDurationChanged] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const navigateBack = () => {
    navigation.goBack();
  };

  const onPressSave = () => {
    const durationInSeconds = convertMomentNumberToSeconds(
      MOMENTS_DURATION_OPTIONS[momentDurationIndex]
    );
    reduxUpdatePracticeDuration(durationInSeconds);

    const dailyMoments = DAILY_MOMENTS_OPTIONS[dailyMomentsIndex];
    reduxUpdateNumberDailyPracticeSessions(dailyMoments);

    setIsNumberMomentsChanged(false);
    setIsMomentDurationChanged(false);
    setIsSaved(true);
  };

  const renderMomentItem = (item, index) => {
    return (
      <LinearGradient
        colors={
          dailyMomentsIndex === index
            ? [DARK_OVERLAY, DARK_OVERLAY]
            : ['transparent', 'transparent']
        }
        style={styles.momentItemContainer}
      >
        <Text style={[largeTitleFont, whiteFont]}>{`${item}`}</Text>
      </LinearGradient>
    );
  };

  const renderDurationItem = (item, index) => {
    return (
      <LinearGradient
        colors={
          momentDurationIndex === index
            ? [DARK_OVERLAY, DARK_OVERLAY]
            : ['transparent', 'transparent']
        }
        style={styles.durationItemContainer}
      >
        <Text style={[largeTitleFont, whiteFont]}>{`${item}`}</Text>
      </LinearGradient>
    );
  };

  const setDailyMoments = (index) => {
    setDailyMomentsIndex(index);

    const newDailyMoments = DAILY_MOMENTS_OPTIONS[index];
    if (newDailyMoments !== reduxNumberDailyPracticeSessions) {
      setIsNumberMomentsChanged(true);
      setIsSaved(false);
    } else {
      setIsNumberMomentsChanged(false);
    }
  };

  const setMomentDuration = (index) => {
    setMomentDurationIndex(index);

    const newDurationInSeconds = convertMomentNumberToSeconds(
      MOMENTS_DURATION_OPTIONS[index]
    );
    if (newDurationInSeconds !== reduxPracticeDuration) {
      setIsMomentDurationChanged(true);
      setIsSaved(false);
    } else {
      setIsMomentDurationChanged(false);
    }
  };

  return (
    <LinearGradient
      style={styles.container}
      colors={[BACKGROUND_GRADIENT_1, BACKGROUND_GRADIENT_2]}
      useAngle={true}
      angle={150}
      angleCenter={{ x: 0.5, y: 0.5 }}
    >
      <HeaderSpacer />
      <HeaderDefaultBack
        onPressBack={navigateBack}
        title={'Practice Settings'}
        rightButtonComponent={
          isNumberMomentsChanged || isMomentDurationChanged ? (
            <TouchableOpacity activeOpacity={0.7} onPress={onPressSave}>
              <Text style={[boldSubheadFont, orangeFont]}>SAVE</Text>
            </TouchableOpacity>
          ) : isSaved ? (
            <Text style={[boldSubheadFont, whiteFont]}>SAVED</Text>
          ) : null
        }
      />

      <View style={styles.contentContainer}>
        <View style={styles.containerHeader}>
          <View style={styles.timeContainer}>
            <Text style={[subheadFont, whiteFont]}>Practicing</Text>
            <Text style={[largeTitleFont, whiteFont]}>
              {convertMomentNumberAndDurationToTime(
                DAILY_MOMENTS_OPTIONS[dailyMomentsIndex],
                MOMENTS_DURATION_OPTIONS[momentDurationIndex]
              )}
            </Text>
            <Text style={[subheadFont, whiteFont]}>
              {`${convertMomentNumberAndDurationToTimeUnit(
                DAILY_MOMENTS_OPTIONS[dailyMomentsIndex],
                MOMENTS_DURATION_OPTIONS[momentDurationIndex]
              )} daily`}
            </Text>
          </View>
        </View>

        <View style={styles.scrollerContainer}>
          <View style={styles.scrollerTitleContainer}>
            <Text
              style={[
                titleEmphasizedFont,
                whiteFont,
                styles.sectionTitleMargin,
              ]}
            >
              # Daily Practice Sessions
            </Text>
          </View>

          <FlatList
            data={DAILY_MOMENTS_OPTIONS}
            snapToAlignment="center"
            decelerationRate="fast"
            pagingEnabled
            snapToInterval={momentItemFullWidth}
            showsHorizontalScrollIndicator={false}
            horizontal
            contentContainerStyle={styles.timerScrollerContentContainer}
            renderItem={({ item, index }) => renderMomentItem(item, index)}
            removeClippedSubviews
            initialScrollIndex={dailyMomentsIndex}
            getItemLayout={(data, index) => ({
              length: momentItemFullWidth,
              offset: momentItemFullWidth * index,
              index,
            })}
            onScroll={({ nativeEvent }) => {
              const { contentOffset } = nativeEvent;

              const index = Math.round(contentOffset.x / momentItemFullWidth);
              const lowerBound = Math.max(0, index);
              const upperBound = Math.min(
                DAILY_MOMENTS_OPTIONS.length - 1,
                lowerBound
              );

              if (upperBound !== dailyMomentsIndex) {
                setDailyMoments(upperBound);
              }
            }}
            keyExtractor={(item) => `${item}`}
            ListHeaderComponent={() => (
              <View
                style={{
                  width:
                    screenWidth / 2 - styles?.momentItemContainer?.width / 2,
                }}
              />
            )}
            ListFooterComponent={() => (
              <View
                style={{
                  width:
                    screenWidth / 2 - styles?.momentItemContainer?.width / 2,
                }}
              />
            )}
          />
        </View>

        <View style={styles.scrollerContainer}>
          <View style={styles.scrollerTitleContainer}>
            <Text style={[titleEmphasizedFont, whiteFont]}>
              Practice Session Duration
            </Text>
          </View>

          <FlatList
            data={MOMENTS_DURATION_OPTIONS}
            snapToAlignment="left"
            decelerationRate="fast"
            snapToInterval={durationItemFullWidth}
            showsHorizontalScrollIndicator={false}
            horizontal
            contentContainerStyle={styles.timerScrollerContentContainer}
            renderItem={({ item, index }) => renderDurationItem(item, index)}
            removeClippedSubviews
            initialScrollIndex={momentDurationIndex}
            getItemLayout={(data, index) => ({
              length: durationItemFullWidth,
              offset: durationItemFullWidth * index,
              index,
            })}
            onScroll={({ nativeEvent }) => {
              const { contentOffset } = nativeEvent;

              const index = Math.round(contentOffset.x / durationItemFullWidth);
              const lowerBound = Math.max(0, index);
              const upperBound = Math.min(
                MOMENTS_DURATION_OPTIONS.length - 1,
                lowerBound
              );

              if (upperBound !== momentDurationIndex) {
                setMomentDuration(upperBound);
              }
            }}
            keyExtractor={(item) => `${item}`}
            ListHeaderComponent={() => (
              <View
                style={{
                  width:
                    screenWidth / 2 - styles.durationItemContainer.width / 2,
                }}
              />
            )}
            ListFooterComponent={() => (
              <View
                style={{
                  width:
                    screenWidth / 2 - styles.durationItemContainer.width / 2,
                }}
              />
            )}
          />
        </View>

        <View style={styles.footerContainer}>
          <Text style={[footnoteFont, whiteFont]}>
            {'Tip: Set daily practice reminders on the Home Screen.'}
          </Text>
        </View>
      </View>
    </LinearGradient>
  );
};

const mapStateToProps = (state) => {
  return {
    background: state?.settings?.background || 'background1',
    reduxPracticeDuration: state?.practice?.practiceDuration || 30,
    reduxNumberDailyPracticeSessions:
      state?.practice?.numberDailyPracticeSessions || 3,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    reduxUpdatePracticeDuration: (val) => dispatch(updatePracticeDuration(val)),
    reduxUpdateNumberDailyPracticeSessions: (val) =>
      dispatch(updateNumberDailyPracticeSessions(val)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditPracticeScreen);
