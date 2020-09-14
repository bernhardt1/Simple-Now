import React from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';

import {standardButton} from '../../styles/standardComponents';
import {buttonFont} from '../../styles/fonts';

const StandardButton = ({title, onPress}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={standardButton}>
        <Text style={buttonFont}>{title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default StandardButton;
