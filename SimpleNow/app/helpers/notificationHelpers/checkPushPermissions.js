import { Platform } from 'react-native';
import sentryCaptureMessage from '../errorHelpers/sentryCaptureMessage';

const checkPushPermissions = async () => {
  if (Platform.OS !== 'ios') {
    return true;
  }

  return new Promise(global.Notifications.checkPermission)
    .then((permissions) => {
      if (permissions.notificationCenter) {
        return true;
      } else {
        return false;
      }
    })
    .catch((e) => {
      sentryCaptureMessage('error checking push permissions');

      return false;
    });
};

export default checkPushPermissions;
