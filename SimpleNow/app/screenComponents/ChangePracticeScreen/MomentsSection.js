import React from 'react';
import { View, ScrollView, Text, FlatList } from 'react-native';

import { InvisibleSeparator } from '../../components/InvisibleSeparator';
import ProgramInfoCard from '../../components/ProgramInfoCard/ProgramInfoCard';

import getBreathCourseList from '../../helpers/courseHelpers/getBreathCourseList';

import { titleFont, whiteFont } from '../../styles/fonts';
import { DARK_OVERLAY } from '../../styles/colors';

import styles from './styles';

const MomentsSection = ({ renderProgramInfoCard }) => {
  return (
    <ScrollView
      bounces={false}
      horizontal={false}
      contentContainerStyle={{ backgroundColor: DARK_OVERLAY }}
    >
      <InvisibleSeparator />
      <View style={styles.practiceCategory}>
        <Text style={[titleFont, whiteFont, styles.textMargin]}>Breath</Text>
        <FlatList
          data={getBreathCourseList()}
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={styles.practiceListScrollerContainer}
          renderItem={({ item, index }) => renderProgramInfoCard(item)}
          removeClippedSubviews
          keyExtractor={(item) => `${item?.id}`}
        />
        <FlatList />
      </View>
      <View style={styles.practiceCategory}>
        <Text style={[titleFont, whiteFont, styles.textMargin]}>Hear</Text>
        <FlatList
          data={[{ id: 'Hear I' }, { id: 'Hear II' }, { id: 'Hear III' }]}
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={styles.practiceListScrollerContainer}
          renderItem={({ item, index }) => renderProgramInfoCard(item)}
          removeClippedSubviews
          keyExtractor={(item) => `${item?.id}`}
        />
        <FlatList />
      </View>
      <View style={styles.practiceCategory}>
        <Text style={[titleFont, whiteFont, styles.textMargin]}>Sensation</Text>
        <FlatList
          data={[
            { id: 'Sensation I' },
            { id: 'Sensation II' },
            { id: 'Sensation III' },
          ]}
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={styles.practiceListScrollerContainer}
          renderItem={({ item, index }) => renderProgramInfoCard(item)}
          removeClippedSubviews
          keyExtractor={(item) => `${item?.id}`}
        />
        <FlatList />
      </View>
      <InvisibleSeparator />
      <InvisibleSeparator />
      <InvisibleSeparator />
      <InvisibleSeparator />
      <InvisibleSeparator />
      <InvisibleSeparator />
      <InvisibleSeparator />
    </ScrollView>
  );
};

export default MomentsSection;
