import {
  BRAND_BLACK,
  BRAND_WHITE_OFF,
  DARK_OVERLAY,
  VERY_DARK_OVERLAY,
} from '../../styles/colors';
import { heightUnit, screenWidth, widthUnit } from '../../styles/constants';
import {
  practiceCarouselSpacing,
  textContainerSpacing,
} from '../../styles/spacings';
import {
  momentCategoryCard,
  programInfoCard,
  shadow,
} from '../../styles/standardComponents';

const styles = {
  container: {
    flex: 1,
    backgroundColor: BRAND_BLACK,
  },
  yourPracticeContainer: {
    marginVertical: widthUnit * 6,
    height:
      programInfoCard.height + heightUnit * 14 + widthUnit * 2 + widthUnit * 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleContainer: {
    padding: heightUnit * 2,
    height: heightUnit * 14,
    width: heightUnit * 14,
    borderRadius: (heightUnit * 14) / 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: DARK_OVERLAY,
  },
  tomorrowsPracticeContainer: {
    alignSelf: 'stretch',
    justifyContent: 'flex-start',
  },
  tomorrowTextStyle: {
    marginLeft: practiceCarouselSpacing.marginLeft,
    marginTop: widthUnit * 2,
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

  practiceCategory: {
    alignSelf: 'stretch',
    flex: 1,
  },
  practiceListScrollerContainer: {
    alignSelf: 'stretch',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  activePracticeFlatlistContainer: {
    alignSelf: 'stretch',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    height: programInfoCard.height,
    marginBottom: widthUnit * 3,
    marginTop: widthUnit * 2,
    marginHorizontal: practiceCarouselSpacing.marginLeft,
  },
  // Moments Section
  momentsCategoryContainer: {
    alignSelf: 'stretch',
    flex: 1,
  },
  momentsFlatlistContainer: {
    alignSelf: 'stretch',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingBottom: heightUnit * 15,
    marginTop: widthUnit * 5,
  },

  // other
  textMargin: {
    marginLeft: practiceCarouselSpacing.marginLeft,
  },
  explanationText: {
    marginHorizontal: programInfoCard.marginLeft,
    marginTop: programInfoCard.height / 4,
  },
};

export default styles;
