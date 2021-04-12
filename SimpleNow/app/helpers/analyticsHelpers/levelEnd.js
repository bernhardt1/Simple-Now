import analytics from '@react-native-firebase/analytics';
import sentryCaptureMessage from '../errorHelpers/sentryCaptureMessage';

// level must be number
const levelEnd = async (level) => {
  try {
    await analytics().logLevelEnd({
      level,
    });
  } catch (e) {
    sentryCaptureMessage('caught levelEnd error', level);
  }
};

export default levelEnd;
