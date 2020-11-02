import Sound from 'react-native-sound';
import sentryCaptureMessage from './errorHelpers/sentryCaptureMessage';

// this function accepts a string and returns the local image with a matching name.
function loadSound(name) {
  const result = new Sound(name, Sound.MAIN_BUNDLE, (error) => {
    if (error) {
      sentryCaptureMessage('caught steelBell loading error', error);
      return;
    }
  });

  return result;
}

export default loadSound;
