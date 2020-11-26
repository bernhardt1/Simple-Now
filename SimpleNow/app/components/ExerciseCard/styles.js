import { BORDER_WIDTH, widthUnit } from '../../styles/constants';
import { BRAND_WHITE, DARK_OVERLAY } from '../../styles/colors';
import { islandShape } from '../../styles/standardComponents';

const styles = {
  container: {},
  exerciseContainer: {
    height: widthUnit * 20,
    width: widthUnit * 20,
    alignSelf: 'stretch',
    marginLeft: widthUnit * 4,
    marginTop: widthUnit * 4,
    padding: widthUnit * 2,
    ...islandShape,
    backgroundColor: DARK_OVERLAY,
    borderColor: BRAND_WHITE,
    borderWidth: BORDER_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default styles;
