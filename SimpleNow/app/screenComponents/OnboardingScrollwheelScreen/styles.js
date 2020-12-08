import { heightUnit, widthUnit } from '../../styles/constants';
import { bigIslandSpacing } from '../../styles/spacings';

const styles = {
  container: {
    flex: 1,
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
