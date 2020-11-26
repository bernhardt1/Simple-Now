import React from 'react';
import { View, ScrollView, Text, FlatList } from 'react-native';

import { InvisibleSeparator } from '../../components/InvisibleSeparator';

import { titleFont, whiteFont } from '../../styles/fonts';
import { DARK_OVERLAY } from '../../styles/colors';

import styles from './styles';
import ProgramInfoCard from '../../components/ProgramInfoCard/ProgramInfoCard';

const MeditationsSection = ({ renderProgramInfoCard }) => {
  return (
    <View style={styles.meditationContainer}>
      <ScrollView
        bounces={false}
        contentContainerStyle={{
          flex: 1,
          backgroundColor: DARK_OVERLAY,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        horizontal={false}
      >
        <InvisibleSeparator />
        <View style={styles.practiceCategory}>
          <Text style={[titleFont, whiteFont, styles.textMargin]}>
            Mindfulness
          </Text>
          <FlatList
            data={[
              { id: 'Applying Mindfulness', meditation: true },
              { id: 'Mindfulness Beyond', meditation: true },
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
        <View style={styles.practiceCategory}>
          <Text style={[titleFont, whiteFont, styles.textMargin]}>
            Effortless Meditation
          </Text>
          <FlatList
            data={[{ id: 'Self Examination Deep Dive', meditation: true }]}
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
          <Text style={[titleFont, whiteFont, styles.textMargin]}>
            Integrating Meditation Habits
          </Text>
          <FlatList
            data={[
              { id: 'Morning Mind Set', meditation: true },
              { id: 'Always Mindful', meditation: true },
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
        <View style={styles.practiceCategory}>
          <Text style={[titleFont, whiteFont, styles.textMargin]}>
            Your Presets
          </Text>
          <ProgramInfoCard />
        </View>
        <InvisibleSeparator />
        <InvisibleSeparator />
        <InvisibleSeparator />
        <InvisibleSeparator />
        <InvisibleSeparator />
        <InvisibleSeparator />
        <InvisibleSeparator />
      </ScrollView>
    </View>
  );
};

export default MeditationsSection;
