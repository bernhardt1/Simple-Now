import analytics from '@react-native-firebase/analytics';
import sentryCaptureMessage from '../errorHelpers/sentryCaptureMessage';

const selectContent = async (content_type, item_id) => {
  try {
    await analytics().logSelectContent({
      content_type,
      item_id,
    });
  } catch (e) {
    sentryCaptureMessage('caught selectContent error', {
      content_type,
      item_id,
    });
  }
};

export default selectContent;
