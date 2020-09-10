import {iOSUIKit, systemWeights} from 'react-native-typography';
import {BRAND_BLACK, BRAND_WHITE} from './colors';

const logoTitleFont = {
  ...iOSUIKit.largeTitleEmphasized,
  ...systemWeights.regular,
  color: BRAND_BLACK,
};

const titleFont = {
  ...iOSUIKit.title3,
  ...systemWeights.light,
  color: BRAND_BLACK,
};

const subheadFont = {
  ...iOSUIKit.subhead,
  ...systemWeights.light,
  color: BRAND_BLACK,
};

const bodyFont = {
  ...iOSUIKit.body,
  ...systemWeights.light,
  color: BRAND_BLACK,
};

const bodyFontTitle = {
  ...iOSUIKit.body,
  ...systemWeights.semibold,
  color: BRAND_BLACK,
};

const buttonFont = {
  ...iOSUIKit.subheadShort,
  ...systemWeights.bold,
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
  titleFont,
  subheadFont,
  bodyFont,
  bodyFontTitle,
  buttonFont,
  whiteFont,
  centerAlign,
};
