import {
  iOSUIKit,
  sanFranciscoSpacing,
  systemWeights,
} from 'react-native-typography';
import { BRAND_BLACK, BRAND_WHITE, SYSTEM_BLUE } from './colors';

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
  ...iOSUIKit.largeTitleEmphasized,
  ...systemWeights.regular,
  fontFamily: 'AvenirNextRoundedPro-Reg',
  color: BRAND_BLACK,
};

const largeTitleFont = {
  ...iOSUIKit.title3Emphasized,
  ...systemWeights.semibold,
  fontSize: 30,
  lineHeight: 30,
  letterSpacing: sanFranciscoSpacing(30),
  fontFamily: 'AvenirNextRoundedPro-Reg',
  color: BRAND_BLACK,
};

const titleEmphasizedFont = {
  ...iOSUIKit.title3Emphasized,
  color: BRAND_BLACK,
  fontFamily: 'AvenirNextRoundedPro-Reg',
};

const titleFont = {
  ...iOSUIKit.title3,
  color: BRAND_BLACK,
  fontFamily: 'AvenirNextRoundedPro-Reg',
};

const subheadFont = {
  ...iOSUIKit.subhead,
  ...systemWeights.semibold,
  color: BRAND_BLACK,
  fontFamily: 'AvenirNextRoundedPro-Reg',
};

const bodyFont = {
  ...iOSUIKit.body,
  ...systemWeights.semibold,
  color: BRAND_BLACK,
  fontFamily: 'AvenirNextRoundedPro-Reg',
};

const bodyFontTitle = {
  ...iOSUIKit.body,
  ...systemWeights.semibold,
  color: BRAND_BLACK,
  fontFamily: 'AvenirNextRoundedPro-Reg',
};

const footnoteFont = {
  ...iOSUIKit.footnote,
  ...systemWeights.semibold,
  color: BRAND_BLACK,
  fontFamily: 'AvenirNextRoundedPro-Reg',
};

const buttonFont = {
  ...iOSUIKit.subheadShort,
  ...systemWeights.bold,
  color: BRAND_BLACK,
  fontFamily: 'AvenirNextRoundedPro-Reg',
};

const bottomButtonFont = {
  ...iOSUIKit.title3,
  ...systemWeights.semibold,
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
