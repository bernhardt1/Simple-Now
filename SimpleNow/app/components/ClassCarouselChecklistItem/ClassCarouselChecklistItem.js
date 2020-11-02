import React from 'react';
import {View, Image, Text} from 'react-native';
import convertReminderTimeToReadable from '../../helpers/timeHelpers/convertReminderTimeToReadable';
import setLocalImage from '../../helpers/setLocalImage';
import {subheadFont, whiteFont} from '../../styles/fonts';

import styles from './styles';

const ClassCarouselChecklistItem = ({image, reminderTime, isComplete}) => {
  return (
    <View style={styles.container}>
      <Image source={setLocalImage(`${image}White`)} style={styles.itemImage} />
      <Text style={[subheadFont, whiteFont]}>
        {convertReminderTimeToReadable(reminderTime) || '-'}
      </Text>
      <View style={styles.checkContainer}>
        {isComplete && (
          <Image
            source={setLocalImage('checkBlack')}
            style={styles.checkImage}
          />
        )}
      </View>
    </View>
  );
};

export default ClassCarouselChecklistItem;
