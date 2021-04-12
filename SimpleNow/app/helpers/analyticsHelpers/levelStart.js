import sentryCaptureMessage from '../errorHelpers/sentryCaptureMessage';
import analytics from '@react-native-firebase/analytics';

// level must be number
const levelStart = async (level) => {
  try {
    await analytics().logLevelStart({
      level,
    });
  } catch (e) {
    sentryCaptureMessage('caught levelStart error', level);
  }
};

export default levelStart;
