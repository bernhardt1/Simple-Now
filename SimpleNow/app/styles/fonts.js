import { Platform } from 'react-native';
import { human, sanFranciscoSpacing } from 'react-native-typography';
import {
  BRAND_BLACK,
  BRAND_ORANGE,
  BRAND_WHITE,
  BRAND_WHITE_UNSELECTED,
  SYSTEM_BLUE,
} from './colors';
import { screenWidth } from './constants';

// NOTE: copy the following code into AppDelegeate.m to print all fonts
// for (NSString *familyName in [UIFont familyNames]){
//   NSLog(@"Family name: %@", familyName);
//   for (NSString *fontName in [UIFont fontNamesForFamilyName:familyName]) {
//       NSLog(@"--Font name: %@", fontName);
//   }
// }

// FONT NAMES
// AvenirNextRoundedPro-Reg
// AvenirNextRoundedPro-Italic
// AvenirNextRoundedPro-Med
// AvenirNextRoundedPro-MedIt
// AvenirNextRoundedPro-Bold
// AvenirNextRoundedPro-BoldIt
// AvenirNextRoundedPro-Demi
// AvenirNextRoundedPro-DemiIt

const logoTitleFont = {
  ...human.largeTitle,
  fontFamily: 'AvenirNextRoundedPro-Bold',
  fontWeight: '500',
  color: BRAND_BLACK,
};

const massiveTitleFont = {
  ...human.title1,
  fontSize: screenWidth / 9,
  lineHeight: screenWidth / 7,
  letterSpacing: sanFranciscoSpacing(screenWidth / 9),
  fontFamily: 'AvenirNextRoundedPro-Bold',
  fontWeight: '500',
  color: BRAND_BLACK,
  textAlignVertical: 'center',
};

const largeTitleFont = {
  ...human.title1,
  fontSize: screenWidth / 12,
  lineHeight: screenWidth / 8,
  letterSpacing: sanFranciscoSpacing(screenWidth / 12),
  fontFamily:
    Platform.OS === 'ios'
      ? 'AvenirNextRoundedPro-Bold'
      : 'AvenirNextRoundedPro-Med',
  fontWeight: '500',
  color: BRAND_BLACK,
  textAlignVertical: 'center',
};

const titleEmphasizedFont = {
  ...human.title2,
  color: BRAND_BLACK,
  fontFamily:
    Platform.OS === 'ios'
      ? 'AvenirNextRoundedPro-Bold'
      : 'AvenirNextRoundedPro-Med',
  fontWeight: Platform.OS === 'ios' ? '700' : '500',
};

const titleFont = {
  ...human.title3,
  color: BRAND_BLACK,
  fontFamily:
    Platform.OS === 'ios'
      ? 'AvenirNextRoundedPro-Bold'
      : 'AvenirNextRoundedPro-Med',
  fontWeight: '500',
};

const boldSubheadFont = {
  ...human.body,
  color: BRAND_BLACK,
  fontFamily:
    Platform.OS === 'ios'
      ? 'AvenirNextRoundedPro-Bold'
      : 'AvenirNextRoundedPro-Med',
  fontWeight: Platform.OS === 'ios' ? '700' : '500',
};

const subheadFont = {
  ...human.body,
  color: BRAND_BLACK,
  fontFamily:
    Platform.OS === 'ios'
      ? 'AvenirNextRoundedPro-Bold'
      : 'AvenirNextRoundedPro-Demi',
  fontWeight: '500',
};

const bodyFont = {
  ...human.body,
  lineHeight: human.body.fontSize * 1.3,
  color: BRAND_BLACK,
  fontFamily:
    Platform.OS === 'ios'
      ? 'AvenirNextRoundedPro-Bold'
      : 'AvenirNextRoundedPro-Reg',
  fontWeight: '500',
};

const bodyFontThin = {
  ...human.body,
  lineHeight: human.body.fontSize * 1.3,
  color: BRAND_BLACK,
  fontFamily:
    Platform.OS === 'ios'
      ? 'AvenirNextRoundedPro-Bold'
      : 'AvenirNextRoundedPro-Reg',
  fontWeight: '300',
};

const bodyFontTitle = {
  ...human.body,
  color: BRAND_BLACK,
  fontFamily: 'AvenirNextRoundedPro-Bold',
};

const footnoteFont = {
  ...human.footnote,
  fontWeight: '500',
  color: BRAND_BLACK,
  fontFamily:
    Platform.OS === 'ios'
      ? 'AvenirNextRoundedPro-Bold'
      : 'AvenirNextRoundedPro-Demi',
};
const captionFont = {
  ...human.caption1,
  fontWeight: '500',
  color: BRAND_BLACK,
  fontFamily: 'AvenirNextRoundedPro-Bold',
};

const buttonFont = {
  ...human.body,
  color: BRAND_BLACK,
  fontFamily: 'AvenirNextRoundedPro-Bold',
};

const bottomButtonFont = {
  ...human.title1,
  fontWeight: '500',
  color: BRAND_BLACK,
  fontFamily: 'AvenirNextRoundedPro-Bold',
};

const whiteFont = {
  color: BRAND_WHITE,
};

const unselectedWhiteFont = {
  color: BRAND_WHITE_UNSELECTED,
};

const orangeFont = {
  color: BRAND_ORANGE,
};

const systemFont = {
  color: SYSTEM_BLUE,
};

const centerAlign = {
  textAlign: 'center',
};

const capitalizeFont = {
  textTransform: 'capitalize',
};

export {
  logoTitleFont,
  massiveTitleFont,
  largeTitleFont,
  titleEmphasizedFont,
  titleFont,
  boldSubheadFont,
  subheadFont,
  bodyFont,
  bodyFontThin,
  bodyFontTitle,
  captionFont,
  footnoteFont,
  buttonFont,
  bottomButtonFont,
  whiteFont,
  unselectedWhiteFont,
  orangeFont,
  systemFont,
  centerAlign,
  capitalizeFont,
};
