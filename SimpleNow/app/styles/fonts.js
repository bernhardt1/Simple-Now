import { Platform } from 'react-native';
import { human, sanFranciscoSpacing } from 'react-native-typography';
import { BRAND_BLACK, BRAND_WHITE, SYSTEM_BLUE } from './colors';

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
  fontFamily: 'AvenirNextRoundedPro-Reg',
  fontWeight: '500',
  color: BRAND_BLACK,
};

const largeTitleFont = {
  ...human.title1,
  fontSize: 30,
  lineHeight: 30,
  letterSpacing: sanFranciscoSpacing(30),
  fontFamily: 'AvenirNextRoundedPro-Reg',
  fontWeight: '500',
  color: BRAND_BLACK,
};

const titleEmphasizedFont = {
  ...human.title2,
  color: BRAND_BLACK,
  fontFamily: 'AvenirNextRoundedPro-Reg',
  fontWeight: '700',
};

const titleFont = {
  ...human.title3,
  color: BRAND_BLACK,
  fontFamily: 'AvenirNextRoundedPro-Reg',
  fontWeight: '500',
};

const subheadFont = {
  ...human.body,
  color: BRAND_BLACK,
  fontFamily: 'AvenirNextRoundedPro-Reg',
  fontWeight: '500',
};

const bodyFont = {
  ...human.body,
  lineHeight: human.body.fontSize * 1.25,
  color: BRAND_BLACK,
  fontFamily: 'AvenirNextRoundedPro-Reg',
  fontWeight: '500',
};

const bodyFontTitle = {
  ...human.body,
  color: BRAND_BLACK,
  fontFamily: 'AvenirNextRoundedPro-Reg',
};

const footnoteFont = {
  ...human.footnote,
  color: BRAND_BLACK,
  fontFamily: 'AvenirNextRoundedPro-Reg',
};

const buttonFont = {
  ...human.body,
  color: BRAND_BLACK,
  fontFamily: 'AvenirNextRoundedPro-Reg',
};

const bottomButtonFont = {
  ...human.title1,
  fontWeight: '500',
  color: BRAND_BLACK,
  fontFamily: 'AvenirNextRoundedPro-Reg',
};

const whiteFont = {
  color: BRAND_WHITE,
};

const systemFont = {
  color: SYSTEM_BLUE,
};

const centerAlign = {
  textAlign: 'center',
};

export {
  logoTitleFont,
  largeTitleFont,
  titleEmphasizedFont,
  titleFont,
  subheadFont,
  bodyFont,
  bodyFontTitle,
  footnoteFont,
  buttonFont,
  bottomButtonFont,
  whiteFont,
  systemFont,
  centerAlign,
};
