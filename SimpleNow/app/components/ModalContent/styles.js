import { BRAND_BLACK, BRAND_WHITE } from '../../styles/colors';
import { BORDER_RADIUS, widthUnit } from '../../styles/constants';
import { islandSpacing } from '../../styles/spacings';
import { standardBorder } from '../../styles/standardComponents';

const styles = {
  title: {
    marginBottom: islandSpacing.margin / 2,
  },
  content: {
    backgroundColor: BRAND_WHITE,
    ...islandSpacing,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: BORDER_RADIUS,
  },
  contentTitle: {
    marginBottom: widthUnit,
  },
  permissionImage: {
    width: widthUnit * 60,
    height: (widthUnit * 60) / 1.32,
    marginBottom: islandSpacing.margin / 2,
  },
  okButton: {
    padding: widthUnit * 4,
    marginTop: islandSpacing.margin,
    width: widthUnit * 60,
    justifyContent: 'center',
    alignItems: 'center',
    ...standardBorder,
    borderColor: BRAND_BLACK,
    borderRadius: BORDER_RADIUS,
  },
};

export default styles;
