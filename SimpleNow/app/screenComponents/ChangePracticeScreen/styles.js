import {
  BRAND_BLACK,
  BRAND_WHITE_OFF,
  DARK_OVERLAY,
  EXTREMELY_DARK_OVERLAY,
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
    backgroundColor: DARK_OVERLAY,
    width: screenWidth,
    alignSelf: 'stretch',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingVertical: widthUnit * 5,
  },
  tomorrowTextStyle: {
    marginLeft: practiceCarouselSpacing.marginLeft,
    marginBottom: widthUnit * 3,
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
    flexDirection: 'row',
    paddingVertical: widthUnit,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionButtonImage: {
    height: 24,
    width: 24,
    marginRight: widthUnit * 2,
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
