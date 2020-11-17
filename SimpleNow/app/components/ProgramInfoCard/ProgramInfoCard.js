import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import getProgramCardStyle from '../../helpers/styleHelpers/getProgramCardStyle';
import { footnoteFont, boldSubheadFont, whiteFont } from '../../styles/fonts';
import { programInfoCard } from '../../styles/standardComponents';

import styles from './styles';

const ProgramInfoCard = ({
  program,
  isMeditation,
  onPress,
  selectedProgramId,
}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        onPress(program?.id);
      }}
      activeOpacity={0.8}
    >
      <View
        style={[
          programInfoCard,
          isMeditation ? styles.meditationContainer : {},
          { backgroundColor: getProgramCardStyle(program?.id) },
          selectedProgramId === program?.id ? styles.selected : {},
        ]}
      >
        <View>
          <Text
            style={[boldSubheadFont, whiteFont]}
          >{`${program?.title}`}</Text>
          <Text style={[footnoteFont, whiteFont]}>30 sessions</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={[footnoteFont, whiteFont]}>3 of 30 complete</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProgramInfoCard;
