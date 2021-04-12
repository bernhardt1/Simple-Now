import analytics from '@react-native-firebase/analytics';
import sentryCaptureMessage from '../errorHelpers/sentryCaptureMessage';

const levelUp = async (exerciseId) => {
  const parts = exerciseId.split('-');
  const character = parts[0];
  const level = parts[1];
  const levelNumber = parseInt(level, 10);

  try {
    await analytics().logLevelUp({
      character,
      level: levelNumber,
    });
  } catch (e) {
    sentryCaptureMessage('caught levelUp error', {
      character,
      level: levelNumber,
    });
  }
};

export default levelUp;
