import {StyleSheet} from 'react-native';
import {logoTitleSpacing} from '../../styles/spacings';

var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    ...logoTitleSpacing,
  },
});

export default styles;
