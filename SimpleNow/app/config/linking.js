import { URL_HEADER } from '../constants/constants';

const config = {
  screens: {
    Exercise: 'exercise/:courseId/:classId/:exerciseId',
  },
};

const linking = {
  prefixes: [URL_HEADER],
  config,
};

export { linking, config };
