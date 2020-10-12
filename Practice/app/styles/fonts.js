import {
  iOSUIKit,
  sanFranciscoSpacing,
  systemWeights,
} from 'react-native-typography';
import { BRAND_BLACK, BRAND_WHITE } from './colors';

const logoTitleFont = {
  ...iOSUIKit.largeTitleEmphasized,
  ...systemWeights.regular,
  color: BRAND_BLACK,
};

const largeTitleFont = {
  ...iOSUIKit.title3Emphasized,
  ...systemWeights.semibold,
  fontSize: 30,
  lineHeight: 30,
  letterSpacing: sanFranciscoSpacing(30),
  color: BRAND_BLACK,
};

const titleEmphasizedFont = {
  ...iOSUIKit.title3Emphasized,
  color: BRAND_BLACK,
};

const titleFont = {
  ...iOSUIKit.title3,
  color: BRAND_BLACK,
};

const subheadFont = {
  ...iOSUIKit.subhead,
  ...systemWeights.semibold,
  color: BRAND_BLACK,
};

const bodyFont = {
  ...iOSUIKit.body,
  ...systemWeights.semibold,
  color: BRAND_BLACK,
};

const bodyFontTitle = {
  ...iOSUIKit.body,
  ...systemWeights.semibold,
  color: BRAND_BLACK,
};

const footnoteFont = {
  ...iOSUIKit.footnote,
  ...systemWeights.semibold,
  color: BRAND_BLACK,
};

const buttonFont = {
  ...iOSUIKit.subheadShort,
  ...systemWeights.bold,
  color: BRAND_BLACK,
};

const bottomButtonFont = {
  ...iOSUIKit.title3,
  ...systemWeights.semibold,
  color: BRAND_BLACK,
};

const whiteFont = {
  color: BRAND_WHITE,
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
  centerAlign,
};
