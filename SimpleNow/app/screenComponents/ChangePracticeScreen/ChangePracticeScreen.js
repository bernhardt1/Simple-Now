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
import ProgramInfoCard from '../../components/ProgramInfoCard/ProgramInfoCard';
import setLocalImage from '../../helpers/setLocalImage';
import { LIGHT_OVERLAY } from '../../styles/colors';
import { heightUnit } from '../../styles/constants';
import {
  captionFont,
  titleFont,
  unselectedWhiteFont,
  whiteFont,
} from '../../styles/fonts';
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
  const [selectedProgramId, setSelectedProgramId] = useState(null);
  const [actionButtonsAnimatedValue] = useState(new Animated.Value(0));
  const [actionButtonType, setActionButtonType] = useState(ADD);

  useEffect(() => {
    if (selectedProgramId) {
      animateActionButtons(1);
    } else {
      animateActionButtons(0);
    }
  }, [selectedProgramId]);

  // pass 0 for hidden
  // pass 1 for shown
  const animateActionButtons = (value) => {
    Animated.spring(actionButtonsAnimatedValue, {
      toValue: value,
      useNativeDriver: true,
    }).start();
  };

  const renderProgramInfoCard = (item) => {
    console.log('item', item);
    return (
      <ProgramInfoCard
        program={item}
        isMeditation={item?.meditation}
        onPress={onPressCard}
        selectedProgramId={selectedProgramId}
      />
    );
  };

  const navigateInformation = () => {
    navigation.navigate('Program', { programId: selectedProgramId });
  };

  const navigateBack = () => {
    navigation.goBack();
  };

  const onPressCard = (id) => {
    if (selectedProgramId === id) {
      setSelectedProgramId(null);
    } else {
      setSelectedProgramId(id);
      if (activePrograms.includes(id)) {
        setActionButtonType(REMOVE);
      } else {
        setActionButtonType(ADD);
      }
    }
  };

  const addProgramToPractice = () => {
    reduxAddProgram(selectedProgramId);
  };

  const removeProgramFromPractive = () => {
    reduxRemoveProgram(selectedProgramId);
  };

  console.log('activePrograms', activePrograms);
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
      />
      <View style={styles.yourPracticeContainer}>
        {activePrograms?.length <= 0 && (
          <Text
            style={[
              titleFont,
              styles.explanationText,
              whiteFont,
              category === MEDITATIONS ? unselectedWhiteFont : {},
            ]}
          >
            Select programs from the list below to add them to your practice.
          </Text>
        )}
        <FlatList
          data={activePrograms.map((id) => {
            return { id };
          })}
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={styles.practiceListScrollerContainer}
          renderItem={({ item, index }) => renderProgramInfoCard(item)}
          removeClippedSubviews
          keyExtractor={(item) => `${item?.id}`}
        />
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
            Moments
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
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
        </TouchableOpacity>
      </View>
      {category === MOMENTS && (
        <MomentsSection renderProgramInfoCard={renderProgramInfoCard} />
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
            <Text style={[captionFont]}>Description</Text>
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
