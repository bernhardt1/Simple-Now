import React from 'react';
import { ImageBackground, View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import Carousel from 'react-native-snap-carousel';

import { HeaderSpacer } from '../../components/HeaderSpacer';
import { StandardSettingButton } from '../../components/StandardSettingButton';
import { StandardButton } from '../../components/StandardButton';
import { DailyExerciseItem } from '../../components/DailyExerciseItem';
import { TextContainer } from '../../components/TextContainer';

import setLocalImage from '../../helpers/setLocalImage';
import isExerciseComplete from '../../helpers/reduxHelpers/isExerciseComplete';

import styles from './styles';
import {
  captionFont,
  footnoteFont,
  largeTitleFont,
  titleEmphasizedFont,
  titleFont,
  whiteFont,
} from '../../styles/fonts';
import { screenWidth, widthUnit } from '../../styles/constants';
import { itemSpacing } from '../../styles/spacings';
import {
  BACKGROUND_GRADIENT_1,
  BACKGROUND_GRADIENT_2,
  DARK_OVERLAY,
  VERY_DARK_OVERLAY,
} from '../../styles/colors';
import RenderDailyExerciseItems from './RenderDailyExerciseItems';
import LinearGradient from 'react-native-linear-gradient';

const PracticeScreen = ({
  background,
  navigation,
  currentPractice,
  currentPracticeProgress,
  reduxResetCurrentPractice,
  reduxContent,
  isDeviceNotificationsEnabled,
}) => {
  const renderDailyExerciseItem = (item) => {
    const isExerciseComp = isExerciseComplete(
      item?.exerciseType,
      item?.id,
      reduxContent
    );

    return (
      <DailyExerciseItem
        exercise={item}
        navigation={navigation}
        isExerciseComplete={isExerciseComp}
        currentPracticeProgress={currentPracticeProgress}
      />
    );
  };

  return (
    <LinearGradient
      style={styles.container}
      colors={[BACKGROUND_GRADIENT_1, BACKGROUND_GRADIENT_2]}
      useAngle={true}
      angle={150}
      angleCenter={{ x: 0.5, y: 0.5 }}
    >
      <HeaderSpacer transparent />
      <View style={styles.topSection}>
        <StandardSettingButton
          title={'CHANGE PRACTICE'}
          imageName={'editWhite'}
          onPress={() => navigation.navigate('ChangePractice')}
        />
        <View style={styles.infoButtonContainer}>
          <StandardSettingButton
            title={'SET REMINDERS'}
            onPress={() => navigation.navigate('SetReminders')}
            // onPress={() => reduxResetCurrentPractice()}
          />

          <Text style={[footnoteFont, whiteFont]}>
            {isDeviceNotificationsEnabled ? '' : 'NONE'}
          </Text>
        </View>
      </View>

      <View style={styles.centerSection}>
        <View style={styles.centerCircle}>
          <Text style={[captionFont, whiteFont, styles.textSpacing]}>
            You've practiced
          </Text>
          <Text style={[largeTitleFont, whiteFont]}>13 times</Text>
          <Text style={[captionFont, whiteFont]}>this week</Text>
        </View>
      </View>
      <View style={styles.bottomSection}>
        <View style={styles.dailyPracticeTextContainer}>
          <Text style={[titleEmphasizedFont, whiteFont]}>Today's Practice</Text>
          <Text style={[titleEmphasizedFont, whiteFont]}>1 / 3</Text>
        </View>

        {/* <RenderDailyExerciseItems
          reduxContent={reduxContent}
          currentPracticeProgress={currentPracticeProgress}
          navigation={navigation}
          firstRow={
            currentPractice?.length <= 2
              ? currentPractice
              : currentPractice.slice(0, Math.ceil(currentPractice.length / 2))
          }
          secondRow={
            currentPractice?.length <= 2
              ? []
              : currentPractice.slice(
                  Math.ceil(currentPractice.length / 2),
                  currentPractice.length
                )
          }
        /> */}
        {/* <Carousel
          data={currentPractice}
          renderItem={({ item, index }) => {
            return renderDailyExerciseItem(item);
          }}
          sliderWidth={screenWidth}
          itemWidth={screenWidth - itemSpacing.margin * 2}
        /> */}
        <FlatList
          data={currentPractice}
          renderItem={({ item, index }) => {
            return renderDailyExerciseItem(item);
          }}
          horizontal
          contentContainerStyle={styles.flatlistContainer}
          extraData={[reduxContent, currentPracticeProgress]}
        />
      </View>
    </LinearGradient>
  );
};

const mapStateToProps = (state) => {
  console.log('state', state);
  return {
    background: state?.settings?.background || 'background1',
    currentPractice: state?.practice?.currentPractice || [],
    currentPracticeProgress: state?.practice?.currentPracticeProgress || '',
    isDeviceNotificationsEnabled:
      state?.notifications?.isDeviceNotificationsEnabled || false,
  };
};

export default connect(mapStateToProps)(PracticeScreen);
