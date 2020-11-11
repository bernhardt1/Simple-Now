import React from 'react';
import { View, Text } from 'react-native';

import getPracticeColor from '../../helpers/getPracticeColor';
import { footnoteFont, boldSubheadFont, whiteFont } from '../../styles/fonts';

import styles from './styles';

const PracticeInfoCard = ({ practice }) => {
  console.log('practice', practice);
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: getPracticeColor(practice?.id) },
      ]}
    >
      <View>
        <Text style={[boldSubheadFont, whiteFont]}>{`${practice?.id}`}</Text>
        <Text style={[footnoteFont, whiteFont]}>30 sessions</Text>
      </View>
      <View>
        <Text style={[footnoteFont, whiteFont]}>3 of 30 complete</Text>
      </View>
    </View>
  );
};

export default PracticeInfoCard;
