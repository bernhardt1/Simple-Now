import { BRAND_WHITE, VERY_DARK_OVERLAY } from '../../styles/colors';
import { widthUnit } from '../../styles/constants';
import { practiceCarouselSpacing } from '../../styles/spacings';
import {
  islandShape,
  meditationCard,
  standardBorder,
} from '../../styles/standardComponents';

const styles = {
  selected: {
    ...standardBorder,
  },
  image: {
    height: meditationCard.height,
    width: meditationCard.width,
    borderRadius: meditationCard.borderRadius,
  },
  textContainer: {
    position: 'absolute',
    backgroundColor: VERY_DARK_OVERLAY,
    bottom: 0,
    width: meditationCard.width,
    height: meditationCard.height / 4,
    borderRadius: meditationCard.borderRadius,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkImageContainer: {
    position: 'absolute',
    height: 30,
    width: 30,
    top: meditationCard.height * 0.05,
    left: meditationCard.height * 0.05,
    borderRadius: 15,
    backgroundColor: VERY_DARK_OVERLAY,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkImage: {
    height: 20,
    width: 20,
  },
};

export default styles;
