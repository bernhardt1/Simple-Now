import {
  BRAND_BLACK,
  BRAND_WHITE_OFF,
  VERY_DARK_OVERLAY,
} from '../../styles/colors';
import { heightUnit, screenWidth, widthUnit } from '../../styles/constants';
import {
  practiceCarouselSpacing,
  textContainerSpacing,
} from '../../styles/spacings';
import { programInfoCard, shadow } from '../../styles/standardComponents';

const styles = {
  container: {
    flex: 1,
    backgroundColor: BRAND_BLACK,
  },
  yourPracticeContainer: {
    marginVertical: widthUnit * 3,
    height:
      programInfoCard.height +
      programInfoCard.marginTop +
      programInfoCard.marginBottom,
  },
  categoriesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: VERY_DARK_OVERLAY,
  },
  categoriesButton: {
    flex: 1,
    paddingVertical: widthUnit * 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  practiceCategory: {},
  practiceListScrollerContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  actionButtonsContainer: {
    position: 'absolute',
    bottom: -heightUnit * 11,
    left: 0,
    height: heightUnit * 11,
    width: screenWidth,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingBottom: heightUnit * 4,
    backgroundColor: BRAND_WHITE_OFF,
    ...shadow,
  },
  actionButton: {
    flex: 1,
    paddingVertical: widthUnit,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  actionButtonImage: {
    height: 20,
    width: 20,
  },

  // other
  textMargin: {
    marginLeft: practiceCarouselSpacing.marginLeft,
  },
  explanationText: {
    marginHorizontal: programInfoCard.marginLeft,
  },
};

export default styles;
