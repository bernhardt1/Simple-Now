import React from 'react';
import { View, FlatList } from 'react-native';

import {
  breath,
  sensation,
  thought,
  hear,
  see,
  sense,
  awareness,
  quote,
  question,
  interactive,
} from '../../assets/courses/exercises/index';

const categories = [
  breath,
  sensation,
  thought,
  hear,
  see,
  sense,
  awareness,
  quote,
  question,
  interactive,
].map((c) => {
  return {
    type: c?.exerciseData?.type,
    description: c?.exerciseData?.description,
  };
});

import styles from './styles';

const MomentsSection = ({ renderMomentCategoryCard, momentCategories }) => {
  return (
    <View style={styles.momentsCategoryContainer}>
      <FlatList
        data={categories}
        numColumns={2}
        contentContainerStyle={styles.momentsFlatlistContainer}
        ItemSeparatorComponent={() => {
          return (
            <View
              style={{ marginTop: styles.momentsFlatlistContainer.marginTop }}
            />
          );
        }}
        renderItem={({ item, index }) => renderMomentCategoryCard(item)}
        keyExtractor={(item) => `${item?.type}`}
      />
    </View>
  );
};

export default MomentsSection;
