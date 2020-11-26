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
} from 'react-native';
import { connect } from 'react-redux';
import { addProgram, removeProgram } from '../../actions/practice';
import { HeaderDefaultBack } from '../../components/HeaderDefaultBack';
import { HeaderSpacer } from '../../components/HeaderSpacer';
import { MomentCategoryCard } from '../../components/MomentCategoryCard';
import ProgramInfoCard from '../../components/ProgramInfoCard/ProgramInfoCard';
import StandardSettingButton from '../../components/StandardSettingButton/StandardSettingButton';
import setLocalImage from '../../helpers/setLocalImage';
import { LIGHT_OVERLAY } from '../../styles/colors';
import { heightUnit, widthUnit } from '../../styles/constants';
import {
  bodyFont,
  captionFont,
  centerAlign,
  footnoteFont,
  orangeFont,
  subheadFont,
  titleEmphasizedFont,
  titleFont,
  unselectedWhiteFont,
  whiteFont,
} from '../../styles/fonts';
import { practiceCarouselSpacing } from '../../styles/spacings';
import MeditationsSection from './MeditationsSection';
import MomentsSection from './MomentsSection';

import styles from './styles';

// categories
const MOMENTS = 'MOMENTS';
const MEDITATIONS = 'MEDITATIONS';

// action button types
const ADD = 'ADD';
const REMOVE = 'REMOVE';

const ChangePracticeScreen = ({
  background,
  navigation,
  activePrograms,
  reduxAddProgram,
  reduxRemoveProgram,
}) => {
  const [category, setCategory] = useState(MOMENTS);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [actionButtonsAnimatedValue] = useState(new Animated.Value(0));
  const [actionButtonType, setActionButtonType] = useState(ADD);

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
    return (
      <ProgramInfoCard
        cardCategory={item}
        isMeditation={item?.meditation}
        onPress={onPressCard}
        selectedCategory={selectedCategory}
      />
    );
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

  const navigateInformation = () => {
    navigation.navigate('Program', { programType: selectedCategory });
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
    reduxAddProgram(selectedCategory);
    setActionButtonType(REMOVE);
  };

  const removeProgramFromPractive = () => {
    reduxRemoveProgram(selectedCategory);
    setActionButtonType(ADD);
  };

  return (
    <ImageBackground
      style={styles.container}
      source={setLocalImage(background)}
    >
      <HeaderSpacer transparent />
      <HeaderDefaultBack
        onPressBack={navigateBack}
        title={'Your Practice'}
        transparent
        rightButtonComponent={
          <StandardSettingButton
            title={'PRACTICE\nSETTINGS'}
            onPress={navigateEditPractice}
            titleColor={orangeFont}
          />
        }
      />
      <View style={styles.yourPracticeContainer}>
        <View style={styles.circleContainer}>
          <Text style={[captionFont, whiteFont]}>Practicing</Text>

          <Text style={[titleEmphasizedFont, whiteFont]}>
            {activePrograms?.length}
          </Text>
          <Text style={[captionFont, whiteFont]}>categories</Text>
        </View>
        <View style={styles.tomorrowsPracticeContainer}>
          <Text style={[subheadFont, whiteFont, styles.tomorrowTextStyle]}>
            Your Active Categories
          </Text>
          {activePrograms?.length <= 0 && (
            <View style={styles.activePracticeFlatlistContainer}>
              <Text style={[footnoteFont, whiteFont]}>
                Tap a category and press "Add to Practice" to include it in your
                daily practice.
              </Text>
            </View>
          )}
          {activePrograms?.length > 0 && (
            <FlatList
              data={activePrograms}
              showsHorizontalScrollIndicator={false}
              horizontal
              contentContainerStyle={styles.activePracticeFlatlistContainer}
              renderItem={({ item, index }) => renderProgramInfoCard(item)}
              removeClippedSubviews
              keyExtractor={(item) => `${item}`}
            />
          )}
        </View>
      </View>

      <View style={styles.categoriesContainer}>
        <TouchableOpacity
          style={styles.categoriesButton}
          onPress={() => setCategory(MOMENTS)}
        >
          <Text
            style={[
              titleFont,
              whiteFont,
              category === MEDITATIONS ? unselectedWhiteFont : {},
            ]}
          >
            Categories
          </Text>
        </TouchableOpacity>
        {/* <TouchableOpacity
          style={styles.categoriesButton}
          onPress={() => setCategory(MEDITATIONS)}
        >
          <Text
            style={[
              titleFont,
              whiteFont,
              category === MOMENTS ? unselectedWhiteFont : {},
            ]}
          >
            Meditations
          </Text>
        </TouchableOpacity> */}
      </View>
      {category === MOMENTS && (
        <MomentsSection renderMomentCategoryCard={renderMomentCategoryCard} />
      )}
      {category === MEDITATIONS && (
        <MeditationsSection renderProgramInfoCard={renderProgramInfoCard} />
      )}
      <Animated.View
        style={[
          styles.actionButtonsContainer,
          {
            transform: [
              {
                translateY: actionButtonsAnimatedValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, -heightUnit * 10],
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
            <Text style={[captionFont]}>
              {actionButtonType === REMOVE ? 'Remove' : 'Add to Practice'}
            </Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={{ flex: 1 }}
          onPress={() => {
            navigateInformation();
          }}
          underlayColor={LIGHT_OVERLAY}
        >
          <View style={styles.actionButton}>
            <Image
              source={setLocalImage('infoBlack')}
              style={styles.actionButtonImage}
            />
            <Text style={[captionFont]}>Explore</Text>
          </View>
        </TouchableHighlight>
      </Animated.View>
    </ImageBackground>
  );
};

const mapStateToProps = (state) => {
  return {
    background: state?.settings?.background || 'background1',
    activePrograms: state?.practice?.activePrograms || [],
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
