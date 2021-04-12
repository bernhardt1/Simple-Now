import React, { useEffect, useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux';
import { HeaderDefaultBack } from '../../components/HeaderDefaultBack';
import { HeaderSpacer } from '../../components/HeaderSpacer';
import { MomentCategoryCard } from '../../components/MomentCategoryCard';
import {
  BACKGROUND_GRADIENT_1,
  BACKGROUND_GRADIENT_2,
} from '../../styles/colors';
import MomentsSection from './MomentsSection';

import styles from './styles';

const ChangePracticeScreen = ({
  background,
  navigation,
  reduxRemoveProgram,
}) => {
  const renderMomentCategoryCard = (item) => {
    return (
      <MomentCategoryCard
        categoryData={item}
        isMeditation={item?.meditation}
        onPress={onPressCard}
      />
    );
  };

  const navigateBack = () => {
    navigation.goBack();
  };

  const onPressCard = (categoryPressed) => {
    navigation.navigate('Program', { programType: categoryPressed });
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
      {/* <HeaderDefaultBack onPressBack={navigateBack} title={'Explore'} /> */}
      <MomentsSection renderMomentCategoryCard={renderMomentCategoryCard} />
    </LinearGradient>
  );
};

const mapStateToProps = (state) => {
  return {
    background: state?.settings?.background || 'background1',
  };
};

export default connect(mapStateToProps)(ChangePracticeScreen);
