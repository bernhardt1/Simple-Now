import analytics from '@react-native-firebase/analytics';
import sentryCaptureMessage from '../errorHelpers/sentryCaptureMessage';

const tutorialComplete = async () => {
  try {
    await analytics().logTutorialComplete();
  } catch (e) {
    sentryCaptureMessage('caught tutorialComplete error');
  }
};

export default tutorialComplete;
