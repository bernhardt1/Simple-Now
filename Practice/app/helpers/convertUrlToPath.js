import { URL_HEADER } from '../constants/constants';
import sentryCaptureMessage from './errorHelpers/sentryCaptureMessage';

// this function accepts a string and returns the local image with a matching name.
const convertUrlToPath = (url) => {
  try {
    const parts = url.split(URL_HEADER);

    if (parts?.length > 1) {
      return parts[1];
    } else {
      return url;
    }
  } catch (e) {
    sentryCaptureMessage('caught convertUrlToPath error', url);
    return '';
  }
};

export default convertUrlToPath;
