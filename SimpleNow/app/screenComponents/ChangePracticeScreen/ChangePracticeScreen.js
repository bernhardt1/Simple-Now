import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  FlatList,
  TouchableOpacity,
  Animated,
  TouchableHighlight,
  Platform,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux';
import { addProgram, removeProgram } from '../../actions/practice';
import { HeaderDefaultBack } from '../../components/HeaderDefaultBack';
import { HeaderSpacer } from '../../components/HeaderSpacer';
import { MomentCategoryCard } from '../../components/MomentCategoryCard';
import ProgramInfoCard from '../../components/ProgramInfoCard/ProgramInfoCard';
import StandardSettingButton from '../../components/StandardSettingButton/StandardSettingButton';
import joinGroup from '../../helpers/analyticsHelpers/joinGroup';
import getCategoryGroupId from '../../helpers/analyticsHelpers/getCategoryGroupId';
import setLocalImage from '../../helpers/setLocalImage';
import {
  BACKGROUND_GRADIENT_1,
  BACKGROUND_GRADIENT_2,
  LIGHT_OVERLAY,
} from '../../styles/colors';
import { heightUnit, screenWidth } from '../../styles/constants';
import {
  boldSubheadFont,
  orangeFont,
  titleEmphasizedFont,
  whiteFont,
} from '../../styles/fonts';
import MomentsSection from './MomentsSection';

import styles from './styles';
import getTomorrowsPractice from '../../helpers/reduxHelpers/getTomorrowsPractice';

// categories
const MOMENTS = 'MOMENTS';

// action button types
const ADD = 'ADD';
const REMOVE = 'REMOVE';

const ChangePracticeScreen = ({
  background,
  navigation,
  activePrograms,
  reduxAddProgram,
  reduxRemoveProgram,
  reduxPractice,
  reduxContent,
}) => {
  const [category, setCategory] = useState(MOMENTS);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [actionButtonsAnimatedValue] = useState(new Animated.Value(0));
  const [actionButtonType, setActionButtonType] = useState(ADD);
  const [tomorrowsPractice, setTomorrowsPractice] = useState(
    getTomorrowsPractice(reduxPractice, reduxContent)
  );
  const [isScrollEnabled, setIsScrollEnabled] = useState(false);

  useEffect(() => {
    const newDailyExercises = getTomorrowsPractice(reduxPractice, reduxContent);
    setTomorrowsPractice(newDailyExercises);
  }, [reduxPractice]);

  useEffect(() => {
    if (selectedCategory) {
      animateActionButtons(1);
    } else {
      animateActionButtons(0);
    }
  }, [selectedCategory]);

  // pass 0 for hidden
  // pass 1 for shown
  const animateActionButtons = (value) => {
    Animated.spring(actionButtonsAnimatedValue, {
      toValue: value,
      useNativeDriver: true,
    }).start();
  };

  const renderProgramInfoCard = (item) => {
    return <ProgramInfoCard exercise={item} />;
  };

  const renderMomentCategoryCard = (item) => {
    return (
      <MomentCategoryCard
        categoryData={item}
        activePrograms={activePrograms}
        isMeditation={item?.meditation}
        onPress={onPressCard}
        selectedCategory={selectedCategory}
      />
    );
  };

  const navigateEditPractice = () => {
    navigation.navigate('EditPractice');
  };

  const navigateBack = () => {
    navigation.goBack();
  };

  const onPressCard = (categoryPressed) => {
    if (selectedCategory === categoryPressed) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(categoryPressed);
      if (activePrograms.includes(categoryPressed)) {
        setActionButtonType(REMOVE);
      } else {
        setActionButtonType(ADD);
      }
    }
  };

  const addProgramToPractice = () => {
    console.log('selectedCategory', selectedCategory);
    reduxAddProgram(selectedCategory);
    setActionButtonType(REMOVE);

    joinGroup(getCategoryGroupId(selectedCategory));
  };

  const removeProgramFromPractive = () => {
    reduxRemoveProgram(selectedCategory);
    setActionButtonType(ADD);
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
        title={'Change Practice'}
        rightButtonComponent={
          <StandardSettingButton
            title={'PRACTICE\nSETTINGS'}
            onPress={navigateEditPractice}
            titleColor={orangeFont}
          />
        }
      />

      <View style={styles.tomorrowsPracticeContainer}>
        <Text
          style={[titleEmphasizedFont, whiteFont, styles.tomorrowTextStyle]}
        >
          Tomorrow's Practice
        </Text>

        <FlatList
          data={tomorrowsPractice}
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={styles.activePracticeFlatlistContainer}
          renderItem={({ item, index }) => renderProgramInfoCard(item, index)}
          keyExtractor={(item) => `${item?.id}`}
          scrollEnabled={isScrollEnabled}
          onContentSizeChange={(contentWidth) => {
            contentWidth > screenWidth
              ? setIsScrollEnabled(true)
              : setIsScrollEnabled(false);
          }}
        />
      </View>

      {category === MOMENTS && (
        <MomentsSection renderMomentCategoryCard={renderMomentCategoryCard} />
      )}
      <Animated.View
        style={[
          styles.actionButtonsContainer,
          {
            transform: [
              {
                translateY: actionButtonsAnimatedValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [
                    0,
                    Platform.OS === -'ios' ? -heightUnit * 10 : -heightUnit * 8,
                  ],
                }),
              },
            ],
          },
        ]}
      >
        <TouchableHighlight
          style={{ flex: 1 }}
          onPress={
            actionButtonType === REMOVE
              ? removeProgramFromPractive
              : addProgramToPractice
          }
          underlayColor={LIGHT_OVERLAY}
        >
          <View style={styles.actionButton}>
            <Image
              source={
                actionButtonType === REMOVE
                  ? setLocalImage('minusRed')
                  : setLocalImage('plusOrange')
              }
              style={styles.actionButtonImage}
            />
            <Text style={boldSubheadFont}>
              {actionButtonType === REMOVE ? 'Remove' : 'Add'}
            </Text>
          </View>
        </TouchableHighlight>
      </Animated.View>
    </LinearGradient>
  );
};

const mapStateToProps = (state) => {
  return {
    background: state?.settings?.background || 'background1',
    activePrograms: state?.practice?.activePrograms || [],
    reduxPractice: state?.practice || {},
    reduxContent: state?.content || {},
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    reduxAddProgram: (val) => dispatch(addProgram(val)),
    reduxRemoveProgram: (val) => dispatch(removeProgram(val)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChangePracticeScreen);
