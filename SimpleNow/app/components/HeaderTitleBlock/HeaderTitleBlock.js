import React from 'react';
import { Text, View } from 'react-native';
import { captionFont, subheadFont, whiteFont } from '../../styles/fonts';

import styles from './styles';

// const a =
//   '“The great advantage of choosing one\'s breath as the object of mindfulness training is that breathing is an instinctive and effortless activity, something which we do as long as we are alive, so there is no need to strive hard to find the object of this practice."\n\n- The Dalai Lama';

const HeaderTitleBlock = ({ onPressBack, title, subtitle }) => {
  return (
    <View style={styles.container}>
      <Text style={[subheadFont, whiteFont, styles.subtitleText]}>
        {subtitle}
      </Text>
      {/* <Text style={[captionFont, whiteFont, styles.quoteText]}>{a}</Text> */}
    </View>
  );
};

export default HeaderTitleBlock;
