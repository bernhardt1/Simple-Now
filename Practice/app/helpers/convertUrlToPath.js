import {URL_HEADER} from '../constants/constants';

// this function accepts a string and returns the local image with a matching name.
function convertUrlToPath(url) {
  const parts = url.split(URL_HEADER);

  if (parts?.length > 1) {
    return parts[1];
  } else {
    return url;
  }
}

export default convertUrlToPath;
