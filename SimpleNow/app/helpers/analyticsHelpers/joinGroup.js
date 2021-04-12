import analytics from '@react-native-firebase/analytics';

import sentryCaptureMessage from '../errorHelpers/sentryCaptureMessage';

const joinGroup = async (group_id) => {
  try {
    await analytics().logJoinGroup({
      group_id,
    });
  } catch (e) {
    sentryCaptureMessage('caught joinGroup error', group_id);
  }
};

export default joinGroup;
