import React from 'react';
import { View, Text, Image } from 'react-native';

import { smallInformationIsland } from '../../styles/standardComponents';
import { centerAlign, footnoteFont, whiteFont } from '../../styles/fonts';
import { BRAND_WHITE } from '../../styles/colors';
import { BORDER_WIDTH } from '../../styles/constants';
import setLocalImage from '../../helpers/setLocalImage';
import styles from './styles';

const SmallInformationIsland = ({ title, withBorder, imageName }) => {
  return (
    <View
      style={[
        styles.container,
        smallInformationIsland,
        withBorder
          ? { borderColor: BRAND_WHITE, borderWidth: BORDER_WIDTH }
          : {},
      ]}
    >
      <Text style={[footnoteFont, whiteFont, centerAlign]}>{title}</Text>
      {imageName && (
        <Image source={setLocalImage(imageName)} style={styles.image} />
      )}
    </View>
  );
};

export default SmallInformationIsland;
