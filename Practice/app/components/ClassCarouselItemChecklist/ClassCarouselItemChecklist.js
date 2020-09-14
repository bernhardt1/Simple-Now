import React from 'react';
import {View} from 'react-native';

import styles from './styles';
import {ClassCarouselChecklistItem} from '../ClassCarouselChecklistItem/index';

const ClassCarouselItemChecklist = ({items}) => {
  const renderChecklistItems = (checklistItems) => {
    return checklistItems.map((item) => {
      return (
        <ClassCarouselChecklistItem
          image={item?.image}
          reminderTime={item?.reminderTime}
          isComplete={item?.isComplete}
          key={item?.key}
        />
      );
    });
  };

  return (
    <View style={styles.container}>
      {items?.length <= 3 && (
        <View style={styles.checklistItemRowContainer}>
          {renderChecklistItems(items)}
        </View>
      )}
      {items?.length > 3 && (
        <View style={styles.stackRowsContainer}>
          <View style={styles.checklistItemRowContainer}>
            {renderChecklistItems(items.splice(0, items.length - 3))}
          </View>
          <View style={styles.checklistItemRowContainer}>
            {renderChecklistItems(items.splice(items.length - 3, items.length))}
          </View>
        </View>
      )}
    </View>
  );
};

export default ClassCarouselItemChecklist;
