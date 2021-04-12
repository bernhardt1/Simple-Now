import { DARK_OVERLAY, VERY_DARK_OVERLAY } from '../../styles/colors';
import { BORDER_RADIUS, widthUnit } from '../../styles/constants';
import {
  programInfoCard,
  standardBorder,
} from '../../styles/standardComponents';

const styles = {
  selected: {
    ...standardBorder,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  image: {
    height: programInfoCard.height,
    width: programInfoCard.width,
  },
  programInfoCardTextContainer: {
    position: 'absolute',
    bottom: 10,
    backgroundColor: VERY_DARK_OVERLAY,
    borderRadius: BORDER_RADIUS,
    paddingHorizontal: widthUnit,
  },
};

export default styles;
