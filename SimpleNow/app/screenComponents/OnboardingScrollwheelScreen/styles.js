import { DARK_OVERLAY } from '../../styles/colors';
import { heightUnit, widthUnit } from '../../styles/constants';
import { bigIslandSpacing } from '../../styles/spacings';
import { bigShadow, standardButton } from '../../styles/standardComponents';

const styles = {
  container: {
    flex: 1,
  },
  centerCircleContainer: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerCircle: {
    backgroundColor: DARK_OVERLAY,
    height: widthUnit * 50,
    width: widthUnit * 50,
    borderRadius: (widthUnit * 50) / 2,
    justifyContent: 'center',
    alignItems: 'center',
    ...bigShadow,
  },
  image: {
    height: standardButton.height * 0.5,
    width: standardButton.height * 0.5,
    marginLeft: widthUnit * 2,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  topSection: {
    ...bigIslandSpacing,
  },
  bottomSection: {
    ...bigIslandSpacing,
    marginBottom: heightUnit * 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonsContainer: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  timePickerContainer: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: widthUnit * 20,
  },
};

export default styles;
