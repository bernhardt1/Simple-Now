import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { HeaderSpacer } from '../../components/HeaderSpacer';
import { InvisibleSeparator } from '../../components/InvisibleSeparator';
import PressableText from '../../components/PressableText/PressableText';
import SecondaryButton from '../../components/SecondaryButton/SecondaryButton';
import setLocalImage from '../../helpers/setLocalImage';
import { heightUnit, widthUnit } from '../../styles/constants';
import {
  bodyFontThin,
  centerAlign,
  titleFont,
  whiteFont,
} from '../../styles/fonts';
import { shadow } from '../../styles/standardComponents';

import styles from './styles';

const OnboardingBasicScreen = ({
  navigation,
  title,
  subtitle,
  copy,
  buttonTitle,
  image,
  nextScreen,
  goBack,
}) => {
  return (
    <ImageBackground style={styles.container} source={setLocalImage(image)}>
      <HeaderSpacer transparent />
      <LinearGradient
        style={styles.gradientContainer}
        colors={['#55555500', '#55555511', '#555555aa', '#555555dd', '#555555']}
      >
        <View style={styles.topSection}>
          <Text style={[titleFont, whiteFont, shadow]}>{title}</Text>
        </View>
        <View style={styles.bottomSection}>
          <Text style={[titleFont, whiteFont, centerAlign]}>{subtitle}</Text>
          <InvisibleSeparator />
          <Text style={[bodyFontThin, whiteFont, centerAlign]}>{copy}</Text>

          <View style={styles.buttonsContainer}>
            <SecondaryButton
              title={buttonTitle}
              style={{ width: widthUnit * 46, marginTop: heightUnit * 8 }}
              onPress={nextScreen}
            />
          </View>
          {goBack && <PressableText title={'Back'} onPress={goBack} />}
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};

export default OnboardingBasicScreen;
