import {buttonFromEdgeSpacing} from '../../styles/spacings';

const styles = {
  container: {
    alignSelf: 'stretch',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  stackRowsContainer: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  checklistItemRowContainer: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: buttonFromEdgeSpacing.padding,
  },
};

export default styles;
