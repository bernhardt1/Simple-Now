import analytics from '@react-native-firebase/analytics';
import sentryCaptureMessage from '../errorHelpers/sentryCaptureMessage';

const tutorialBegin = async () => {
  try {
    await analytics().logTutorialBegin();
  } catch (e) {
    sentryCaptureMessage('caught tutorialBegin error');
  }
};

export default tutorialBegin;
