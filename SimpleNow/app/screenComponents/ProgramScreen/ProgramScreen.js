import React, { useState } from 'react';
import { View, ImageBackground, FlatList } from 'react-native';
import { connect } from 'react-redux';

import { HeaderSpacer } from '../../components/HeaderSpacer';
import { HeaderDefaultBack } from '../../components/HeaderDefaultBack';
import { ExerciseCard } from '../../components/ExerciseCard';

import setLocalImage from '../../helpers/setLocalImage';
import getCategoryContent from '../../helpers/courseHelpers/getCategoryContent';
import getColorRainbow from '../../helpers/getColorRainbow';

import styles from './styles';

import { heightUnit } from '../../styles/constants';
import getCategoryCardColors from '../../helpers/styleHelpers/getCategoryCardColors';
import HeaderTitleBlock from '../../components/HeaderTitleBlock/HeaderTitleBlock';

const ProgramScreen = ({ navigation, route, background }) => {
  const { programType } = route.params;

  const [categoryExercises] = useState(
    getCategoryContent(programType)?.exerciseData?.data
  );
  const [categoryDescription] = useState(
    getCategoryContent(programType)?.exerciseData?.description
  );
  const [categoryColors] = useState(getCategoryCardColors(programType));

  const [colorRainbow] = useState(
    getColorRainbow(
      0,
      Math.ceil(categoryExercises.length / 4) + 1,
      categoryColors
    )
  );

  const renderExerciseCard = (exercise, index) => {
    return (
      <ExerciseCard
        exercise={exercise}
        navigation={navigation}
        exerciseIndex={index}
        color1={colorRainbow[Math.floor(index / 4)]}
        color2={colorRainbow[Math.floor(index / 4) + 1]}
      />
    );
  };

  const navigateBack = () => {
    navigation.goBack();
  };

  return (
    <ImageBackground
      style={styles.container}
      source={setLocalImage(background)}
    >
      <HeaderSpacer />
      <HeaderDefaultBack onPressBack={navigateBack} title={`${programType}`} />
      <HeaderTitleBlock subtitle={categoryDescription} />
      <View style={styles.container}>
        <FlatList
          data={categoryExercises}
          numColumns={4}
          renderItem={({ item, index }) => renderExerciseCard(item, index)}
          keyExtractor={(item, index) => `${item.title}${index}`}
          contentContainerStyle={{
            paddingBottom: heightUnit * 15,
          }}
        />
      </View>
    </ImageBackground>
  );
};

const mapStateToProps = (state) => {
  return {
    background: state?.settings?.background || 'background1',
  };
};

export default connect(mapStateToProps)(ProgramScreen);
